/**
 * lib/google-reviews.ts — Avis Google (Places API New)
 * Lecture publique des avis via clé API restreinte (pas d'OAuth nécessaire).
 * Dégradation gracieuse : renvoie null si non configuré ou en cas d'erreur.
 */

export interface GoogleReviewItem {
  id: string;
  authorName: string;
  authorPhotoUrl: string | null;
  rating: number; // entier 1-5
  text: string; // peut être une chaîne vide
  publishTime: string; // ISO-8601
  relativeTime: string; // ex. "il y a 2 semaines"
}

export interface GoogleReviewsData {
  averageRating: number; // arrondi à 1 décimale
  totalReviewCount: number;
  reviews: GoogleReviewItem[]; // triés par publishTime décroissant, dédupliqués par id
  mapsUri: string | null; // lien Google Maps ("voir tous les avis")
  updatedAt: string; // ISO-8601, date de ce fetch
}

// ─── Forme de la réponse Places API (New) ──────────────────────────────────────

interface PlacesApiReview {
  name: string;
  rating: number;
  text?: { text: string };
  originalText?: { text: string };
  authorAttribution?: { displayName: string; photoUri?: string };
  publishTime: string;
  relativePublishTimeDescription?: string;
}

interface PlacesApiResponse {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesApiReview[];
}

/**
 * Récupère les avis Google de la fiche Pixeloria.
 * Retourne null si GOOGLE_PLACES_API_KEY / GOOGLE_PLACE_ID absents, ou en cas d'échec.
 */
export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey  = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn('[google-reviews] GOOGLE_PLACES_API_KEY ou GOOGLE_PLACE_ID non défini — avis désactivés');
    return null;
  }

  const cacheSeconds = Number(process.env.GOOGLE_REVIEWS_CACHE_MINUTES ?? 60) * 60;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        'X-Goog-Api-Key':   apiKey,
        'X-Goog-FieldMask': 'rating,userRatingCount,reviews,googleMapsUri',
      },
      next: { revalidate: cacheSeconds },
    });

    if (!res.ok) {
      console.error(`[google-reviews] Réponse HTTP ${res.status} de Places API`);
      return null;
    }

    const data = (await res.json()) as PlacesApiResponse;

    const mapped: GoogleReviewItem[] = (data.reviews ?? []).map((r) => ({
      id:             r.name,
      authorName:     r.authorAttribution?.displayName ?? 'Client Google',
      authorPhotoUrl: r.authorAttribution?.photoUri ?? null,
      rating:         r.rating,
      text:           r.text?.text ?? r.originalText?.text ?? '',
      publishTime:    r.publishTime,
      relativeTime:   r.relativePublishTimeDescription ?? '',
    }));

    // Déduplication par id
    const dedupedMap = new Map<string, GoogleReviewItem>();
    for (const item of mapped) dedupedMap.set(item.id, item);

    // Tri par date de publication décroissante
    const reviews = Array.from(dedupedMap.values()).sort(
      (a, b) => new Date(b.publishTime).getTime() - new Date(a.publishTime).getTime()
    );

    return {
      averageRating:    Math.round((data.rating ?? 0) * 10) / 10,
      totalReviewCount: data.userRatingCount ?? 0,
      reviews,
      mapsUri:          data.googleMapsUri ?? null,
      updatedAt:        new Date().toISOString(),
    };
  } catch (err) {
    console.error('[google-reviews] Échec du fetch Places API', err);
    return null;
  }
}

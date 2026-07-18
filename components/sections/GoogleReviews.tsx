import { Suspense } from 'react';
import { getGoogleReviews, type GoogleReviewItem } from '@/lib/google-reviews';
import GoogleReviewsSkeleton from './GoogleReviewsSkeleton';

const REVIEW_URL = 'https://g.page/r/CbgXlHuDVjDzEBI/review';

function Stars({ rating, label }: { rating: number; label: string }) {
  return (
    <span className="google-review-stars">
      <span aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} style={{ color: i < rating ? '#f59e0b' : 'rgba(26,26,24,0.18)' }}>
            ★
          </span>
        ))}
      </span>
      <span className="google-reviews-sr-only">{label}</span>
    </span>
  );
}

function AuthorAvatar({ review }: { review: GoogleReviewItem }) {
  if (review.authorPhotoUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- domaine photo Google non whitelisté dans next.config.mjs
      <img
        src={review.authorPhotoUrl}
        alt=""
        loading="lazy"
        decoding="async"
        width={48}
        height={48}
        className="google-review-card__avatar"
      />
    );
  }

  return (
    <div className="google-review-card__avatar google-review-card__avatar-fallback" aria-hidden="true">
      {review.authorName.charAt(0).toUpperCase()}
    </div>
  );
}

async function GoogleReviewsContent() {
  const data = await getGoogleReviews();
  const reviews = data?.reviews ?? [];

  const schema = data
    ? {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Pixeloria',
        url: 'https://pixeloria.fr',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: data.averageRating,
          reviewCount: data.totalReviewCount,
        },
        review: data.reviews.map((r) => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: r.authorName },
          reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
          reviewBody: r.text,
          datePublished: r.publishTime,
        })),
      }
    : null;

  return (
    <section id="avis-google" className="section google-reviews-section">
      <div className="container">
        <div className="google-reviews-header reveal">
          <span className="section-eyebrow">Avis clients</span>
          <h2>Ce que disent nos clients sur Google</h2>
          <p className="google-reviews-sub">
            Des avis vérifiés, publiés directement par nos clients sur notre fiche Google.
          </p>

          {data && data.averageRating > 0 && (
            <div className="google-reviews-rating">
              <Stars
                rating={Math.round(data.averageRating)}
                label={`Note moyenne : ${data.averageRating} sur 5, basée sur ${data.totalReviewCount} avis`}
              />
              <span className="google-reviews-rating__value" aria-hidden="true">
                {data.averageRating.toFixed(1)}/5 · {data.totalReviewCount} avis
              </span>
            </div>
          )}
        </div>

        {reviews.length > 0 && (
          <div className="google-reviews-grid">
            {reviews.map((review) => (
              <article key={review.id} className="google-review-card reveal">
                <div className="google-review-card__top">
                  <AuthorAvatar review={review} />
                  <div className="google-review-card__meta">
                    <strong className="google-review-card__name">{review.authorName}</strong>
                    <span className="google-review-card__badge">
                      <span aria-hidden="true">G</span> Avis Google
                    </span>
                  </div>
                </div>
                <Stars rating={review.rating} label={`Note : ${review.rating} sur 5`} />
                {review.text && <p className="google-review-card__quote">{review.text}</p>}
                <time className="google-review-card__date" dateTime={review.publishTime}>
                  {new Date(review.publishTime).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              </article>
            ))}
          </div>
        )}

        <div className="google-reviews-cta reveal">
          <a href={REVIEW_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            ⭐ Laisser un avis Google
          </a>
          {data?.mapsUri && (
            <a href={data.mapsUri} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Voir tous les avis Google
            </a>
          )}
        </div>
      </div>

      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
    </section>
  );
}

export default function GoogleReviews() {
  return (
    <Suspense fallback={<GoogleReviewsSkeleton />}>
      <GoogleReviewsContent />
    </Suspense>
  );
}

import { Suspense } from 'react';
import { getGoogleReviews, type GoogleReviewItem } from '@/lib/google-reviews';
import GoogleReviewsSkeleton from './GoogleReviewsSkeleton';

const REVIEW_URL = 'https://g.page/r/CbgXlHuDVjDzEBI/review';

const COPY = {
  fr: {
    eyebrow: 'Avis clients',
    title: 'Ce que disent nos clients sur Google',
    sub: 'Des avis vérifiés, publiés directement par nos clients sur notre fiche Google.',
    ratingLabel: (avg: number, count: number) => `Note moyenne : ${avg} sur 5, basée sur ${count} avis`,
    ratingSuffix: 'avis',
    reviewBadge: 'Avis Google',
    starLabel: (rating: number) => `Note : ${rating} sur 5`,
    dateLocale: 'fr-FR',
    ctaLeave: '⭐ Laisser un avis Google',
    ctaSeeAll: 'Voir tous les avis Google',
  },
  en: {
    eyebrow: 'Client reviews',
    title: 'What our clients say on Google',
    sub: 'Verified reviews, published directly by our clients on our Google profile.',
    ratingLabel: (avg: number, count: number) => `Average rating: ${avg} out of 5, based on ${count} reviews`,
    ratingSuffix: 'reviews',
    reviewBadge: 'Google Review',
    starLabel: (rating: number) => `Rating: ${rating} out of 5`,
    dateLocale: 'en-GB',
    ctaLeave: '⭐ Leave a Google review',
    ctaSeeAll: 'See all Google reviews',
  },
} as const;

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

async function GoogleReviewsContent({ locale }: { locale: 'fr' | 'en' }) {
  const t = COPY[locale];
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
          <span className="section-eyebrow">{t.eyebrow}</span>
          <h2>{t.title}</h2>
          <p className="google-reviews-sub">{t.sub}</p>

          {data && data.averageRating > 0 && (
            <div className="google-reviews-rating">
              <Stars
                rating={Math.round(data.averageRating)}
                label={t.ratingLabel(data.averageRating, data.totalReviewCount)}
              />
              <span className="google-reviews-rating__value" aria-hidden="true">
                {data.averageRating.toFixed(1)}/5 · {data.totalReviewCount} {t.ratingSuffix}
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
                      <span aria-hidden="true">G</span> {t.reviewBadge}
                    </span>
                  </div>
                </div>
                <Stars rating={review.rating} label={t.starLabel(review.rating)} />
                {review.text && <p className="google-review-card__quote">{review.text}</p>}
                <time className="google-review-card__date" dateTime={review.publishTime}>
                  {new Date(review.publishTime).toLocaleDateString(t.dateLocale, {
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
            {t.ctaLeave}
          </a>
          {data?.mapsUri && (
            <a href={data.mapsUri} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              {t.ctaSeeAll}
            </a>
          )}
        </div>
      </div>

      {schema && (
        <script
          type="application/ld+json"
          // Le texte des avis vient de Google (tiers) : on échappe `<` pour empêcher
          // toute évasion de la balise <script> (ex. un avis contenant "</script>").
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
        />
      )}
    </section>
  );
}

export default function GoogleReviews({ locale = 'fr' }: { locale?: 'fr' | 'en' }) {
  return (
    <Suspense fallback={<GoogleReviewsSkeleton locale={locale} />}>
      <GoogleReviewsContent locale={locale} />
    </Suspense>
  );
}

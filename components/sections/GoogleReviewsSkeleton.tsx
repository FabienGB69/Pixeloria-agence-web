/**
 * Skeleton de secours pour <GoogleReviews /> pendant le fetch de l'API Google Places.
 * Purement présentationnel : dimensions calées sur la vraie carte pour éviter le layout shift.
 */
export default function GoogleReviewsSkeleton() {
  return (
    <section className="section google-reviews-section" aria-busy="true">
      <div className="container">
        <div className="google-reviews-header">
          <span className="section-eyebrow">Avis clients</span>
          <div className="gr-skel-line gr-skel-line--title gr-pulse" aria-hidden="true" />
          <div className="gr-skel-line gr-skel-line--sub gr-pulse" aria-hidden="true" />
          <span className="google-reviews-sr-only">Chargement des avis Google…</span>
        </div>

        <div className="google-reviews-grid" aria-hidden="true">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="google-review-card google-review-card--skeleton">
              <div className="google-review-card__top">
                <div className="gr-skel-avatar gr-pulse" />
                <div className="google-review-card__meta">
                  <div className="gr-skel-line gr-skel-line--name gr-pulse" />
                  <div className="gr-skel-line gr-skel-line--stars gr-pulse" />
                </div>
              </div>
              <div className="gr-skel-line gr-pulse" />
              <div className="gr-skel-line gr-pulse" />
              <div className="gr-skel-line gr-skel-line--short gr-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section-tinted">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Témoignages</span>
          <h2>Ce que disent nos clients</h2>
          <p className="section-sub">
            Nos clients sont les meilleurs ambassadeurs de notre travail.
            Découvrez leurs retours ou laissez le vôtre.
          </p>
        </div>

        {/* Review request CTA */}
        <div className="review-cta reveal">
          <div className="review-cta-inner glass-card">
            <div className="review-cta-icon" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none">
                <path d="M24 6l4.2 8.8L38 16.2l-7 6.8 1.6 9.6L24 28.2l-8.6 4.4 1.6-9.6-7-6.8 9.8-1.4z"
                  stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none" />
              </svg>
            </div>
            <div className="review-cta-content">
              <h3>Vous avez travaillé avec nous ?</h3>
              <p>
                Votre avis compte énormément — il aide d&apos;autres artisans et PME
                à choisir le bon partenaire web.
                Laissez un avis Google en 30 secondes.
              </p>
              <a
                href="https://g.page/r/PIXELORIA/review"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="btn-icon-left" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 2l2.4 5 5.6.8-4 3.9.9 5.5L10 14.7l-5 2.5.9-5.5L2 7.8 7.6 7z"
                    fill="currentColor" />
                </svg>
                Laisser un avis Google
              </a>
              <p className="review-note">
                Vous êtes déjà client et vos avis n&apos;apparaissent pas encore ici.
                Contactez-nous à{' '}
                <a href="mailto:contact@pixeloria.fr?subject=Demande%20de%20devis%20%E2%80%94%20Pixeloria&body=Bonjour%2C%0A%0AJe%20souhaite%20obtenir%20un%20devis%20pour%20mon%20projet%20web.%0A%0ACordialement%2C">contact@pixeloria.fr</a>{' '}
                pour les mettre en avant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

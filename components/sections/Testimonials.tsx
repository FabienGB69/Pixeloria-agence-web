function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M10 2l2.4 5 5.6.8-4 3.9.9 5.5L10 14.7l-5 2.5.9-5.5L2 7.8 7.6 7z" fill="currentColor" />
    </svg>
  );
}

function FiveStars() {
  return (
    <div className="stars" aria-label="5 étoiles">
      <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section section-tinted">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Témoignages</span>
          <h2>Ce que disent nos clients</h2>
        </div>

        <div className="testimonials-grid">
          <article className="testimonial-card reveal">
            <FiveStars />
            <blockquote>
              &ldquo;Pixeloria a transformé notre vision en une interface bluffante.
              Notre taux de conversion a augmenté de 67&nbsp;% en trois mois.
              Une équipe créative et ultra-réactive.&rdquo;
            </blockquote>
            <div className="testimonial-author">
              <div className="author-avatar" data-initials="AL"></div>
              <div>
                <strong>Alexia Laurent</strong>
                <span>CEO — Nebula CRM</span>
              </div>
            </div>
          </article>

          <article className="testimonial-card reveal">
            <FiveStars />
            <blockquote>
              &ldquo;Le design mobile-first de Studio Vanta est exactement ce qu&apos;on
              espérait. Processus fluide, livrables exemplaires. Je recommande
              Pixeloria sans réserve.&rdquo;
            </blockquote>
            <div className="testimonial-author">
              <div className="author-avatar" data-initials="KM"></div>
              <div>
                <strong>Karim Mansouri</strong>
                <span>Fondateur — Studio Vanta</span>
              </div>
            </div>
          </article>

          <article className="testimonial-card reveal">
            <FiveStars />
            <blockquote>
              &ldquo;Architecture de contenu pensée pour l&apos;engagement, design
              éditorial distingué. Pixeloria a su comprendre l&apos;ADN de notre
              média et le traduire en pixels.&rdquo;
            </blockquote>
            <div className="testimonial-author">
              <div className="author-avatar" data-initials="SB"></div>
              <div>
                <strong>Sophie Beaumont</strong>
                <span>Directrice — Pulse Magazine</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

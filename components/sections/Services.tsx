export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Services</span>
          <h2>Un studio complet pour assembler votre design</h2>
          <p className="section-sub">
            De l&apos;identité de marque à l&apos;expérience utilisateur, nous créons
            des produits digitaux qui convertissent.
          </p>
        </div>

        <div className="pricing-cards">
          <div className="pricing-card">
            <p className="pricing-label">One-Shot</p>
            <p className="pricing-price"><small className="pricing-from">à partir de</small> 490 € <span>TTC</span></p>
            <ul>
              <li>Site livré en 5 jours</li>
              <li>Design sur-mesure</li>
              <li>SEO technique de base</li>
              <li>Domaine conservé</li>
            </ul>
            <a href="/refonte?offre=oneshot" className="btn btn-secondary">Démarrer →</a>
          </div>
          <div className="pricing-card pricing-card--featured">
            <span className="pricing-badge">Recommandé</span>
            <p className="pricing-label">Maintenance</p>
            <p className="pricing-price">49 € <span>/ mois</span></p>
            <ul>
              <li>Même site inclus</li>
              <li>Hébergement inclus</li>
              <li>Mises à jour mensuelles</li>
              <li>Support réactif</li>
            </ul>
            <a href="/refonte?offre=abo" className="btn btn-primary">Démarrer →</a>
          </div>
        </div>

        <div className="services-grid">
          <article className="service-card reveal" data-index="0">
            <div className="service-icon">
              <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <rect x="6" y="6" width="36" height="36" rx="10" stroke="currentColor" strokeWidth="2.2" />
                <circle cx="24" cy="24" r="7" stroke="currentColor" strokeWidth="2.2" />
                <path d="M24 6v5M24 37v5M6 24h5M37 24h5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Branding digital</h3>
            <p>
              Positionnement, système de logo, palette, tone of voice et
              assets social media — une identité qui marque les esprits.
            </p>
            <ul className="card-tags">
              <li>Logo</li><li>Charte</li><li>Motion</li>
            </ul>
          </article>

          <article className="service-card service-card-featured reveal" data-index="1">
            <div className="service-icon">
              <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <rect x="4" y="8" width="40" height="28" rx="6" stroke="currentColor" strokeWidth="2.2" />
                <path d="M16 40h16M24 36v4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                <rect x="12" y="16" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <rect x="28" y="16" width="8" height="4" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <rect x="28" y="24" width="8" height="4" rx="2" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </div>
            <div className="badge-featured">Plus demandé</div>
            <h3>UI / UX design</h3>
            <p>
              Wireframes, prototypes interactifs et interfaces modernes
              optimisées pour la conversion et l&apos;expérience utilisateur.
            </p>
            <ul className="card-tags">
              <li>Figma</li><li>Prototype</li><li>UX Research</li>
            </ul>
          </article>

          <article className="service-card reveal" data-index="2">
            <div className="service-icon">
              <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M16 20l-6 4 6 4M32 20l6 4-6 4M26 14l-4 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="4" y="4" width="40" height="40" rx="10" stroke="currentColor" strokeWidth="2.2" />
              </svg>
            </div>
            <h3>Intégration web</h3>
            <p>
              Pages ultra-rapides, optimisées SEO et maintenables avec des
              composants réutilisables et du code propre.
            </p>
            <ul className="card-tags">
              <li>HTML/CSS</li><li>React</li><li>Perf</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

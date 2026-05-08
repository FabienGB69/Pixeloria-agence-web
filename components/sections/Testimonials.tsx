const trustPoints = [
  {
    title: 'Interlocuteur unique',
    desc: 'Vous échangez directement avec la personne qui comprend votre besoin et pilote votre projet.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Offres lisibles',
    desc: "Vous savez ce qui est inclus, ce qui ne l'est pas, et quelle formule correspond à votre situation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Design professionnel',
    desc: 'Votre site doit inspirer confiance dès les premières secondes, sur ordinateur comme sur mobile.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 22h8M12 18v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Vision métier',
    desc: 'Pixeloria comprend les contraintes des artisans, TPE et PME : temps limité, besoin de clarté, budget maîtrisé.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21V9l9-6 9 6v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="9" y="14" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="testimonials-halo testimonials-halo--top" aria-hidden="true" />
      <div className="testimonials-halo testimonials-halo--bottom" aria-hidden="true" />

      <div className="container">
        <div className="testimonials-layout">

          {/* Left editorial */}
          <div className="testimonials-editorial reveal">
            <span className="testimonials-badge">Confiance</span>
            <h2>Pourquoi nous faire confiance&nbsp;?</h2>
            <p className="testimonials-sub">
              Pixeloria accompagne les artisans, indépendants et PME avec une approche simple,
              claire et orientée résultat.
            </p>
            <p className="testimonials-body">
              Un site web ne doit pas seulement être joli. Il doit être clair, rapide à comprendre,
              adapté à votre métier et pensé pour transformer vos visiteurs en demandes de contact.
              Avec Pixeloria, vous avancez étape par étape, avec un interlocuteur unique, une méthode
              simple et des offres lisibles.
            </p>
            <div className="testimonials-cta-group">
              <a href="#contact" className="btn btn-primary">
                Discuter de mon projet
              </a>
              <a href="#services" className="btn btn-secondary">
                Voir les offres
              </a>
            </div>
          </div>

          {/* Right trust card */}
          <div className="trust-card reveal">
            <div className="tc-halo" aria-hidden="true" />
            <div className="tc-card-header">
              <div className="tc-shield-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l7 3v5c0 5-3.5 9-7 10C8.5 19 5 15 5 10V5l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="tc-label">Méthode Pixeloria</p>
                <h3>Une approche pensée pour les pros</h3>
              </div>
            </div>
            <p className="tc-intro">
              Pixeloria privilégie les sites utiles, crédibles et faciles à faire évoluer,
              sans complexité inutile.
            </p>
            <div className="tc-grid">
              {trustPoints.map((pt) => (
                <div key={pt.title} className="tc-point">
                  <div className="tc-point-icon" aria-hidden="true">{pt.icon}</div>
                  <strong>{pt.title}</strong>
                  <p>{pt.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  const projects = [
    {
      type: 'Refonte',
      year: '2025',
      client: 'Escalee & Goûts',
      sector: 'Conciergerie / Tourisme',
      url: 'https://www.escaleetgouts.fr/',
      summary: 'Refonte complète d\'un site de conciergerie pour une expérience haut de gamme.',
      bullets: [
        'Design premium orienté conversion',
        'Navigation simplifiée sur mobile',
        'SEO technique revu de zéro',
        'Pages de destination locales',
      ],
    },
    {
      type: 'Refonte',
      year: '2025',
      client: 'Lenora Conciergerie',
      sector: 'Conciergerie',
      url: 'https://lenora-conciergerie.vercel.app/',
      summary: 'Modernisation d\'un site de conciergerie pour renforcer la crédibilité et les prises de contact.',
      bullets: [
        'Identité visuelle épurée et professionnelle',
        'Formulaire de contact optimisé',
        'Responsive mobile-first',
        'Temps de chargement divisé par 2',
      ],
    },
    {
      type: 'Création',
      year: '2025',
      client: 'Content by Denise',
      sector: 'Rédaction & Contenu',
      url: 'https://contentbydenise.vercel.app/',
      summary: 'Création d\'un portfolio professionnel pour une rédactrice freelance.',
      bullets: [
        'Branding unique et mémorable',
        'Portfolio de contenus mis en valeur',
        'Appels à l\'action orientés leads',
        'Optimisation SEO dès le lancement',
      ],
    },
  ];

  return (
    <section id="portfolio" className="section section-dark">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow eyebrow-dark">Portfolio</span>
          <h2 className="text-light">Sites réalisés pour nos clients</h2>
          <p className="section-sub text-light-muted">
            Des projets concrets, des résultats mesurables —{' '}
            projetez-vous sur ce qu&apos;on peut faire pour vous.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <article
              key={p.client}
              className={`project-card reveal${i === 1 ? ' project-card-lg' : ''}`}
            >
              <div className="project-meta">
                <span className="tag">{p.type}</span>
                <span className="project-year">{p.year}</span>
              </div>

              <div className="project-sector text-light-muted" style={{ fontSize: '0.78rem', marginBottom: '0.5rem' }}>
                {p.sector}
              </div>

              <h3 className="text-light">{p.client}</h3>
              <p className="text-light-muted" style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                {p.summary}
              </p>

              <ul className="project-bullets">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <a
                href={p.url}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le site
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        <div className="portfolio-cta reveal">
          <a href="#contact" className="btn btn-outline-light">
            Lancer mon projet
            <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

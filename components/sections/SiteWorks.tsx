export default function SiteWorks() {
  return (
    <section id="site-works" className="section section-tinted">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Notre philosophie</span>
          <h2>Un site internet doit travailler pour vous</h2>
        </div>

        <div className="siteworks-layout">
          <div className="siteworks-text reveal">
            <p className="siteworks-intro">
              Un bon site ne sert pas seulement à présenter votre entreprise. Il doit rassurer
              vos prospects, montrer vos réalisations, expliquer clairement vos services, être
              lisible sur mobile, faciliter la prise de contact et soutenir votre visibilité locale.
            </p>
            <p>
              Chez Pixeloria, chaque page est pensée avec un objectif clair&nbsp;: aider vos
              visiteurs à comprendre votre offre et à passer à l&apos;action.
            </p>
            <a href="#services" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
              Voir les offres
              <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <ul className="siteworks-pillars reveal reveal-right">
            {[
              'Rassurer vos prospects',
              'Mettre en avant vos services',
              'Valoriser vos réalisations',
              'Faciliter les demandes de contact',
              'Être parfaitement lisible sur mobile',
              'Soutenir votre visibilité locale sur Google',
            ].map((item) => (
              <li key={item} className="siteworks-pillar">
                <span className="siteworks-pillar-check" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="hero section">
      <div className="container hero-inner">

        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Spécialiste web pour TPE, PME &amp; artisans
          </div>

          <h1>
            Création et refonte de sites internet pour{' '}
            <em className="gradient-text">TPE, PME et artisans</em>{' '}
            locaux.
          </h1>

          <p className="hero-sub">
            Un site professionnel, clair et efficace pour rassurer vos prospects, améliorer votre visibilité locale et générer plus de demandes de contact.
          </p>

          <p className="hero-reassurance">
            Sans gros budget de départ. Offres simples. Accompagnement clair. Site maintenu selon l&apos;offre choisie.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <span>Demander un audit gratuit</span>
              <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#services" className="btn btn-ghost">
              Voir les offres
              <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <ul className="hero-microbene">
            <li>
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Site vitrine professionnel
            </li>
            <li>
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Budget maîtrisé
            </li>
            <li>
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              SEO local selon l&apos;offre choisie
            </li>
          </ul>

          <div className="hero-metrics">
            <div className="metric">
              <strong className="metric-value">490 €</strong>
              <span>à partir de · TTC</span>
            </div>
            <div className="metric-divider" aria-hidden="true"></div>
            <div className="metric">
              <strong className="metric-value">89 €</strong>
              <span>/ mois · formule mensuelle</span>
            </div>
            <div className="metric-divider" aria-hidden="true"></div>
            <div className="metric">
              <strong className="metric-value">48h</strong>
              <span>délai de réponse audit</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-card glass-card">
            <div className="hero-card-header">
              <span className="chip">Votre site en ligne</span>
              <div className="traffic-lights" aria-hidden="true">
                <span></span><span></span><span></span>
              </div>
            </div>
            <h2>Site Sérénité</h2>
            <p>Design sur-mesure · SEO local · Support réactif</p>

            <ul className="feature-list">
              <li>
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                Jusqu&apos;à 5 pages sur-mesure
              </li>
              <li>
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                SEO local de base inclus
              </li>
              <li>
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                Hébergement + domaine offerts
              </li>
              <li>
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                Support WhatsApp sous 24 h
              </li>
            </ul>

            <div className="mini-chart" aria-hidden="true">
              <div className="chart-bar" style={{ ['--h' as string]: '30%' }}></div>
              <div className="chart-bar" style={{ ['--h' as string]: '45%' }}></div>
              <div className="chart-bar" style={{ ['--h' as string]: '55%' }}></div>
              <div className="chart-bar" style={{ ['--h' as string]: '70%' }}></div>
              <div className="chart-bar" style={{ ['--h' as string]: '82%' }}></div>
              <div className="chart-bar" style={{ ['--h' as string]: '95%' }} data-active></div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="float-badge float-badge-1" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M10 2l2.4 5 5.6.8-4 3.9.9 5.5L10 14.7l-5 2.5.9-5.5L2 7.8 7.6 7z" fill="currentColor" />
            </svg>
            100% satisfaction
          </div>
          <div className="float-badge float-badge-2" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.8" />
              <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            Livré en 5–10 jours
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section className="hero section">
      <div className="container hero-inner">

        <div className="hero-text reveal">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Spécialiste web pour artisans &amp; PME
          </div>

          <h1>
            Des sites qui{' '}
            <em className="gradient-text">amènent</em>{' '}
            des clients.
          </h1>

          <p className="hero-sub">
            Pixeloria crée des sites web qui génèrent des leads — design
            premium, SEO optimisé, livré en 5 jours. À partir de
            490&nbsp;€&nbsp;TTC ou 49&nbsp;€/mois sans engagement.
          </p>

          <div className="hero-actions">
            <a href="/refonte" className="btn btn-primary">
              <span>Lancer mon projet</span>
              <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="#portfolio" className="btn btn-ghost">
              <svg className="btn-icon-left" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.6" />
                <path d="M8 7l5 3-5 3V7Z" fill="currentColor" />
              </svg>
              Voir les designs
            </a>
          </div>

          <div className="hero-metrics">
            <div className="metric">
              <strong className="metric-value">490 €</strong>
              <span>site one-shot TTC</span>
            </div>
            <div className="metric-divider" aria-hidden="true"></div>
            <div className="metric">
              <strong className="metric-value">49 €</strong>
              <span>/ mois sans engagement</span>
            </div>
            <div className="metric-divider" aria-hidden="true"></div>
            <div className="metric">
              <strong className="metric-value">48h</strong>
              <span>délai de réponse audit</span>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal reveal-right">
          <div className="hero-card glass-card">
            <div className="hero-card-header">
              <span className="chip">Design Assembly</span>
              <div className="traffic-lights" aria-hidden="true">
                <span></span><span></span><span></span>
              </div>
            </div>
            <h2>Pixeloria Dashboard</h2>
            <p>Direction artistique + UI kit + intégration responsive.</p>

            <ul className="feature-list">
              <li>
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                Système visuel cohérent
              </li>
              <li>
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                Composants prêts à évoluer
              </li>
              <li>
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                Animations fluides
              </li>
              <li>
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
                Performance Lighthouse 95+
              </li>
            </ul>

            <div className="mini-chart" aria-hidden="true">
              <div className="chart-bar" style={{ ['--h' as string]: '40%' }}></div>
              <div className="chart-bar" style={{ ['--h' as string]: '65%' }}></div>
              <div className="chart-bar" style={{ ['--h' as string]: '50%' }}></div>
              <div className="chart-bar" style={{ ['--h' as string]: '80%' }}></div>
              <div className="chart-bar" style={{ ['--h' as string]: '60%' }}></div>
              <div className="chart-bar" style={{ ['--h' as string]: '95%' }} data-active></div>
            </div>
          </div>

          {/* Floating badges */}
          <div className="float-badge float-badge-1" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="none">
              <path d="M10 2l2.4 5 5.6.8-4 3.9.9 5.5L10 14.7l-5 2.5.9-5.5L2 7.8 7.6 7z" fill="currentColor" />
            </svg>
            98% satisfaction
          </div>
          <div className="float-badge float-badge-2" aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.8" />
              <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            Livraison rapide
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

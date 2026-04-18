export default function Portfolio() {
  return (
    <section id="portfolio" className="section section-dark">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow eyebrow-dark">Portfolio</span>
          <h2 className="text-light">Designs assemblés pour des marques ambitieuses</h2>
          <p className="section-sub text-light-muted">
            Chaque projet est une collaboration unique pour atteindre des
            résultats mesurables.
          </p>
        </div>

        <div className="portfolio-grid">
          <article className="project-card reveal">
            <div className="project-meta">
              <span className="tag">SaaS</span>
              <span className="project-year">2024</span>
            </div>
            <div className="project-visual pv-1" aria-hidden="true">
              <div className="pv-bar" style={{ ['--w' as string]: '75%' }}></div>
              <div className="pv-bar" style={{ ['--w' as string]: '55%' }}></div>
              <div className="pv-bar" style={{ ['--w' as string]: '90%' }}></div>
              <div className="pv-circles">
                <span></span><span></span><span></span>
              </div>
            </div>
            <h3>Nebula CRM</h3>
            <p>Refonte complète du dashboard avec +45&nbsp;% de rétention.</p>
            <a href="#contact" className="project-link">
              Discuter de votre projet
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </article>

          <article className="project-card project-card-lg reveal">
            <div className="project-meta">
              <span className="tag">E-commerce</span>
              <span className="project-year">2024</span>
            </div>
            <div className="project-visual pv-2" aria-hidden="true">
              <div className="pv-phone">
                <div className="pv-phone-inner">
                  <div className="pv-block"></div>
                  <div className="pv-block pv-block-sm"></div>
                  <div className="pv-block pv-block-img"></div>
                  <div className="pv-btn"></div>
                </div>
              </div>
            </div>
            <h3>Studio Vanta</h3>
            <p>Expérience premium mobile-first et tunnel d&apos;achat simplifié.</p>
            <a href="#contact" className="project-link">
              Discuter de votre projet
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </article>

          <article className="project-card reveal">
            <div className="project-meta">
              <span className="tag">Media</span>
              <span className="project-year">2023</span>
            </div>
            <div className="project-visual pv-3" aria-hidden="true">
              <div className="pv-lines">
                <span style={{ ['--w' as string]: '80%' }}></span>
                <span style={{ ['--w' as string]: '60%' }}></span>
                <span style={{ ['--w' as string]: '70%' }}></span>
                <span style={{ ['--w' as string]: '45%' }}></span>
              </div>
            </div>
            <h3>Pulse Magazine</h3>
            <p>Design éditorial moderne et architecture de contenu optimisée.</p>
            <a href="#contact" className="project-link">
              Discuter de votre projet
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </article>
        </div>

        <div className="portfolio-cta reveal">
          <a href="#contact" className="btn btn-outline-light">
            Voir tous les projets
            <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

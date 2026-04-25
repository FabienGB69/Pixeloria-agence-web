export default function SiteWorks() {
  return (
    <section id="site-works" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Notre philosophie</span>
          <h2>Un site internet doit travailler pour vous</h2>
        </div>

        <div className="siteworks-layout">
          <div className="siteworks-text reveal">
            <p className="siteworks-intro">
              Un site vitrine, c&apos;est bien. Un site qui génère des appels, des
              demandes de devis et des clients, c&apos;est mieux.
            </p>
            <p>
              Chez Pixeloria, chaque page est pensée pour convertir les
              visiteurs en prospects. On ne fait pas juste du &quot;joli&quot; —
              on crée des outils de communication efficaces qui travaillent
              24h/24 à votre place.
            </p>
            <p>
              SEO local, temps de chargement rapide, appels à l&apos;action clairs,
              formulaires optimisés : tout est conçu pour que vos futurs clients
              vous trouvent et vous contactent facilement.
            </p>
            <a href="#services" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
              Voir nos offres
              <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="siteworks-pillars reveal reveal-right">
            <div className="siteworks-pillar">
              <div className="siteworks-pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M16 3L3 10v6c0 7.5 5.6 14.5 13 16.5C23.4 30.5 29 23.5 29 16v-6L16 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M11 16l3.5 3.5 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <strong>Crédibilité immédiate</strong>
                <p>Un design soigné inspire confiance — vos prospects jugent votre sérieux en 3 secondes.</p>
              </div>
            </div>
            <div className="siteworks-pillar">
              <div className="siteworks-pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12 12-5.4 12-12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M22 4l6 6-6 6M28 10H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <strong>Visibilité Google</strong>
                <p>SEO local de base inclus dès la livraison pour apparaître dans les recherches de votre zone.</p>
              </div>
            </div>
            <div className="siteworks-pillar">
              <div className="siteworks-pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="6" width="24" height="20" rx="4" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M4 12h24M12 6v6M20 6v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <strong>Toujours disponible</strong>
                <p>Votre site présente vos services, répond aux questions et collecte des contacts 24h/24, 7j/7.</p>
              </div>
            </div>
            <div className="siteworks-pillar">
              <div className="siteworks-pillar-icon" aria-hidden="true">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M6 22l6-6 4 4 6-8 4 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <div>
                <strong>Résultats mesurables</strong>
                <p>Analytics, Search Console, reporting mensuel — on vous montre ce qui fonctionne.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

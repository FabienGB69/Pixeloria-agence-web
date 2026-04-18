export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Process</span>
          <h2>Comment Pixeloria assemble votre site</h2>
          <p className="section-sub">
            Un processus éprouvé en trois étapes pour transformer votre
            vision en produit digital.
          </p>
        </div>

        <div className="process-grid">
          <div className="process-step reveal" data-step="01">
            <div className="process-icon">
              <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.2" />
                <path d="M16 24l6 6 10-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="process-connector" aria-hidden="true"></div>
            <h3>Audit &amp; vision</h3>
            <p>On aligne vos objectifs business, votre image de marque et votre audience cible pour définir une stratégie claire.</p>
            <ul className="process-tags">
              <li>Brief stratégique</li>
              <li>Analyse concurrentielle</li>
              <li>Moodboard</li>
            </ul>
          </div>

          <div className="process-step reveal" data-step="02">
            <div className="process-icon">
              <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <rect x="8" y="8" width="32" height="32" rx="8" stroke="currentColor" strokeWidth="2.2" />
                <path d="M16 20h16M16 24h10M16 28h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="process-connector" aria-hidden="true"></div>
            <h3>Design system</h3>
            <p>On construit les composants, styles et animations pour votre univers — un design system réutilisable et évolutif.</p>
            <ul className="process-tags">
              <li>UI Kit Figma</li>
              <li>Tokens &amp; composants</li>
              <li>Prototype interactif</li>
            </ul>
          </div>

          <div className="process-step reveal" data-step="03">
            <div className="process-icon">
              <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <path d="M8 36l10-14 8 8 6-8 8 14H8Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
                <circle cx="36" cy="14" r="5" stroke="currentColor" strokeWidth="2.2" />
              </svg>
            </div>
            <h3>Build &amp; lancement</h3>
            <p>On intègre, optimise, teste et publie. Votre site est livré avec documentation et formation pour la prise en main.</p>
            <ul className="process-tags">
              <li>Intégration HTML/CSS</li>
              <li>Optimisation SEO &amp; perf</li>
              <li>Formation client</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

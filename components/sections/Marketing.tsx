export default function Marketing() {
  return (
    <section id="marketing" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Marketing et Visibilité</span>
          <h2>Copywriting et SEO — votre voix, votre visibilité</h2>
          <p className="section-intro">
            Un beau site sans visiteurs, c&apos;est une vitrine dans un désert. On aligne
            copywriting percutant et SEO technique pour que votre site <em>attire</em>,{' '}
            <em>convainque</em> et <em>convertisse</em> — durablement.
          </p>
        </div>

        <div className="marketing-grid">
          {/* Copywriting column */}
          <div className="marketing-pillar reveal">
            <div className="marketing-pillar-header">
              <div className="marketing-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                </svg>
              </div>
              <h3>Copywriting</h3>
            </div>
            <p>Des mots qui vendent. On rédige des textes orientés conversion qui parlent directement à vos clients idéaux.</p>
            <ul className="marketing-features">
              <li>
                <span className="feature-dot" aria-hidden="true"></span>
                <div>
                  <strong>Pages de vente et landing pages</strong>
                  <span>Accroches, storytelling, CTA irrésistibles</span>
                </div>
              </li>
              <li>
                <span className="feature-dot" aria-hidden="true"></span>
                <div>
                  <strong>Tone of voice et brand messaging</strong>
                  <span>Charte éditoriale, positionnement verbal, slogan</span>
                </div>
              </li>
              <li>
                <span className="feature-dot" aria-hidden="true"></span>
                <div>
                  <strong>Email et séquences automatisées</strong>
                  <span>Nurturing, onboarding, relance panier</span>
                </div>
              </li>
            </ul>
          </div>

          {/* SEO column */}
          <div className="marketing-pillar reveal">
            <div className="marketing-pillar-header">
              <div className="marketing-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <polyline points="11 8 11 11 13 13" />
                </svg>
              </div>
              <h3>SEO</h3>
            </div>
            <p>Être trouvé, c&apos;est la première vente. On optimise votre présence sur Google de A à Z — technique, contenu et autorité.</p>
            <ul className="marketing-features">
              <li>
                <span className="feature-dot" aria-hidden="true"></span>
                <div>
                  <strong>Audit SEO complet</strong>
                  <span>Analyse technique, Core Web Vitals, balises, maillage</span>
                </div>
              </li>
              <li>
                <span className="feature-dot" aria-hidden="true"></span>
                <div>
                  <strong>Recherche de mots-clés</strong>
                  <span>Intention de recherche, volume, concurrence</span>
                </div>
              </li>
              <li>
                <span className="feature-dot" aria-hidden="true"></span>
                <div>
                  <strong>Optimisation on-page</strong>
                  <span>Titres, métas, structure Hn, données structurées</span>
                </div>
              </li>
              <li>
                <span className="feature-dot" aria-hidden="true"></span>
                <div>
                  <strong>Stratégie de contenu SEO</strong>
                  <span>Clusters thématiques, blog, link building éditorial</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Results banner */}
        <div className="marketing-results reveal">
          <div className="marketing-result-item">
            <strong>+180%</strong>
            <span>trafic organique moyen en 6 mois</span>
          </div>
          <div className="marketing-result-divider" aria-hidden="true"></div>
          <div className="marketing-result-item">
            <strong>Top 3</strong>
            <span>positionnement Google sur mots-clés cibles</span>
          </div>
          <div className="marketing-result-divider" aria-hidden="true"></div>
          <div className="marketing-result-item">
            <strong>x2.8</strong>
            <span>taux de conversion page de vente</span>
          </div>
        </div>
        <p className="marketing-disclaimer">Résultats observés chez nos clients — variables selon le secteur et la concurrence.</p>

        {/* CTA */}
        <div className="marketing-cta reveal">
          <p>Audit SEO gratuit inclus — recevez votre rapport personnalisé sous 48h.</p>
          <a href="#contact" className="btn btn-primary">Demander mon audit gratuit →</a>
        </div>
      </div>
    </section>
  );
}

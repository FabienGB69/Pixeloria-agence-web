const miniCards = [
  {
    title: 'Clarté du message',
    desc: 'Votre offre est-elle comprise en quelques secondes ?',
  },
  {
    title: 'Lisibilité mobile',
    desc: 'Votre site inspire-t-il confiance sur smartphone ?',
  },
  {
    title: "Appels à l'action",
    desc: 'Vos visiteurs savent-ils quoi faire ensuite ?',
  },
  {
    title: 'SEO local',
    desc: 'Votre activité est-elle compréhensible pour Google ?',
  },
];

export default function AuditGratuit() {
  return (
    <section id="audit-gratuit" className="audit-premium reveal">
      {/* Blobs décoratifs */}
      <div className="audit-blob audit-blob--1" aria-hidden="true" />
      <div className="audit-blob audit-blob--2" aria-hidden="true" />

      <div className="audit-premium-card">

        {/* Colonne gauche — contenu */}
        <div>
          <span className="audit-premium-badge">Audit offert</span>

          <h2 className="audit-premium-title">
            Recevez un audit clair de votre site internet
          </h2>

          <p className="audit-premium-desc">
            Vous avez déjà un site, mais il ne génère pas assez de contacts&nbsp;?
            Pixeloria analyse votre présence en ligne et vous transmet des pistes concrètes
            pour améliorer la clarté, la confiance et la conversion.
          </p>

          <div className="audit-mini-cards">
            {miniCards.map((card) => (
              <div key={card.title} className="audit-mini-card">
                <strong>{card.title}</strong>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Colonne droite — CTA */}
        <div className="audit-cta-panel">
          <div className="audit-cta-inner">
            <p className="audit-cta-label">Mini-audit gratuit</p>

            <h3 className="audit-cta-title">
              Obtenez 3 à 5 pistes d&apos;amélioration concrètes
            </h3>

            <p className="audit-cta-desc">
              Un premier retour simple, lisible et exploitable pour identifier
              ce qui peut freiner vos demandes de contact.
            </p>

            <ul className="audit-cta-list">
              <li>Analyse rapide de votre page d&apos;accueil</li>
              <li>Points de friction visibles</li>
              <li>Recommandations simples à prioriser</li>
            </ul>

            <a href="#contact" className="audit-cta-btn">
              Demander mon audit gratuit
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <p className="audit-cta-reassurance">
              Réponse rapide avec une première orientation claire selon votre besoin.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

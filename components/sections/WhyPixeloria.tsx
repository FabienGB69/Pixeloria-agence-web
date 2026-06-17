export default function WhyPixeloria() {
  const reasons = [
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.2"/>
          <path d="M15 24l6 6 12-12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Une offre accessible',
      desc: "Pas besoin d'investir plusieurs milliers d'euros pour avoir un site professionnel. Pixeloria propose des solutions adaptées aux budgets des artisans et TPE.",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect x="6" y="10" width="36" height="28" rx="6" stroke="currentColor" strokeWidth="2.2"/>
          <path d="M18 24l4 4 8-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Un site pensé pour générer des contacts',
      desc: "Votre site ne doit pas seulement être esthétique. Il doit rassurer vos visiteurs, présenter clairement vos services et faciliter la prise de contact.",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M24 6C14 6 6 14 6 24s8 18 18 18 18-8 18-18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
          <path d="M30 6l8 8-8 8M38 14H24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Une approche locale et concrète',
      desc: "Pixeloria accompagne les entreprises locales avec une approche pragmatique, orientée visibilité, crédibilité et demandes de contact.",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M24 4L6 12v10c0 12 7.5 22 18 25 10.5-3 18-13 18-25V12L24 4z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
          <path d="M16 24l5 5 11-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Maintenance et sérénité',
      desc: "Avec les offres mensuelles, votre site reste maintenu, sécurisé et évolutif dans le temps.",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M24 8C15 8 8 15 8 24s7 16 16 16 16-7 16-16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
          <path d="M30 10l8 2-2 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 18v6l4 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
        </svg>
      ),
      title: 'SEO local structuré',
      desc: "Votre site est construit pour aider Google à comprendre votre activité, vos services et vos zones d'intervention.",
    },
  ];

  return (
    <section id="why-pixeloria" className="section section-tinted">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Pourquoi nous choisir</span>
          <h2>Pourquoi choisir Pixeloria&nbsp;?</h2>
          <p className="section-sub">
            Pixeloria propose une approche simple, claire et adaptée aux petites entreprises
            qui veulent un site professionnel sans complexité inutile.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((r, i) => (
            <article key={i} className="why-card reveal">
              <div className="why-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

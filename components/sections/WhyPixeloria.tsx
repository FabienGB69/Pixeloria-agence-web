export default function WhyPixeloria() {
  const reasons = [
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M24 4L4 14v10c0 11 8.4 21.3 20 23.7C35.6 45.3 44 35 44 24V14L24 4z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
          <path d="M16 24l5 5 11-10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Spécialisé TPE & artisans',
      desc: 'Nous ne faisons pas du sur-mesure pour tout le monde. On se concentre sur les besoins réels des petites entreprises et artisans locaux.',
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.2" />
          <path d="M24 14v10l7 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Livraison rapide',
      desc: 'Votre site est en ligne en 5 à 10 jours ouvrés. Pas de délais interminables, pas de surprises en cours de route.',
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <rect x="6" y="10" width="36" height="28" rx="6" stroke="currentColor" strokeWidth="2.2" />
          <path d="M6 18h36" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="13" cy="14" r="1.5" fill="currentColor" />
          <circle cx="19" cy="14" r="1.5" fill="currentColor" />
          <circle cx="25" cy="14" r="1.5" fill="currentColor" />
        </svg>
      ),
      title: 'Prix transparents, sans surprise',
      desc: "Pas de frais cachés, pas de devis incompréhensible. Vous savez exactement ce que vous payez et ce que vous obtenez.",
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M38 20c0 12-14 22-14 22S10 32 10 20a14 14 0 0128 0z" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="24" cy="20" r="5" stroke="currentColor" strokeWidth="2.2" />
        </svg>
      ),
      title: 'SEO local de base inclus',
      desc: 'Chaque site est optimisé pour être trouvé dans votre zone géographique sur Google — sans supplément dans les formules Sérénité et Croissance.',
    },
    {
      icon: (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M12 36l8-8 6 6 10-14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="6" y="6" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="2.2" />
        </svg>
      ),
      title: 'Un interlocuteur unique',
      desc: 'Pas de délégation en cascade. Vous travaillez directement avec le créateur du site — réactif, disponible sur WhatsApp sous 24h.',
    },
  ];

  return (
    <section id="why-pixeloria" className="section section-tinted">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Pourquoi nous choisir</span>
          <h2>Pourquoi choisir Pixeloria&nbsp;?</h2>
          <p className="section-sub">
            Des milliers d&apos;agences web existent. Voici ce qui nous différencie
            pour les artisans et petites entreprises.
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

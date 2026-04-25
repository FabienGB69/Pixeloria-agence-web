const profiles = [
  { emoji: '🔨', label: 'Artisans du bâtiment', desc: 'Plombier, électricien, maçon, peintre, menuisier…' },
  { emoji: '🏗️', label: 'Entreprises de rénovation', desc: 'Rénovation intérieure, isolation, carrelage…' },
  { emoji: '🛒', label: 'Commerçants locaux', desc: 'Boutique de quartier, fleuriste, librairie…' },
  { emoji: '🤝', label: 'Professions de service', desc: 'Nettoyage, déménagement, informatique…' },
  { emoji: '🏢', label: 'TPE et PME', desc: 'Toute entreprise locale souhaitant plus de visibilité.' },
  { emoji: '💼', label: 'Indépendants', desc: 'Freelance, consultant, coach, formateur…' },
  { emoji: '🏡', label: 'Conciergeries', desc: 'Location saisonnière, conciergerie privée…' },
  { emoji: '🏠', label: 'Agences immobilières', desc: 'Agent immo, mandataire, promoteur local…' },
  { emoji: '📦', label: 'Prestataires locaux', desc: 'Tout professionnel cherchant à être trouvé en ligne.' },
];

export default function ForWho() {
  return (
    <section id="for-who" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Pour qui&nbsp;?</span>
          <h2>Pour qui sont nos offres&nbsp;?</h2>
          <p className="section-sub">
            Pixeloria accompagne les entreprises locales qui veulent moderniser leur image,
            améliorer leur présence en ligne et recevoir plus de demandes de contact.
          </p>
        </div>

        <div className="forwho-grid">
          {profiles.map((p, i) => (
            <article key={i} className="forwho-card reveal">
              <span className="forwho-emoji" aria-hidden="true">{p.emoji}</span>
              <h3>{p.label}</h3>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>

        <div className="forwho-cta reveal">
          <p>Votre activité ne figure pas dans la liste&nbsp;? Pas de panique.</p>
          <a href="#contact" className="btn btn-primary">
            Parlez-nous de votre projet
            <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

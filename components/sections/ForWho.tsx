export default function ForWho() {
  const profiles = [
    { emoji: '🔨', label: 'Artisan du bâtiment', desc: 'Plombier, électricien, maçon, menuisier…' },
    { emoji: '🍽️', label: 'Restaurant & traiteur', desc: 'Café, pizzeria, food truck, chef à domicile…' },
    { emoji: '💆', label: 'Bien-être & beauté', desc: 'Coiffeur, esthéticien, coach sportif, kiné…' },
    { emoji: '🏡', label: 'Immobilier local', desc: "Agent immo, conciergerie, location saisonnière…" },
    { emoji: '⚖️', label: 'Professions libérales', desc: 'Comptable, avocat, notaire, consultant…' },
    { emoji: '🛒', label: 'Commerce local', desc: 'Boutique de quartier, fleuriste, librairie…' },
    { emoji: '🚗', label: 'Auto & mécanique', desc: 'Garage, carrosserie, auto-école…' },
    { emoji: '📦', label: 'Prestataire de services', desc: 'Déménageur, nettoyage, informatique…' },
    { emoji: '🎨', label: 'Créatif & freelance', desc: 'Graphiste, photographe, rédacteur…' },
  ];

  return (
    <section id="for-who" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Pour qui&nbsp;?</span>
          <h2>Fait pour les entreprises qui ont besoin d&apos;être trouvées en ligne</h2>
          <p className="section-sub">
            Vous avez une activité locale, vous voulez plus de clients — et vous n&apos;avez
            pas le temps de gérer un site vous-même. On s&apos;occupe de tout.
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

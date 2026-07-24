import Link from 'next/link';

const steps = [
  {
    num: '01',
    title: 'Audit et cadrage',
    desc: "On échange sur votre activité, vos objectifs, vos clients et vos priorités pour définir une direction claire.",
    goal: 'Poser les bonnes bases avant de créer.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M16 24l6 6 10-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Structure et contenus',
    desc: "On organise les pages, les messages clés, les appels à l'action et les éléments de réassurance.",
    goal: 'Rendre votre offre claire et convaincante.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="8" y="8" width="32" height="32" rx="8" stroke="currentColor" strokeWidth="2.2"/>
        <path d="M16 20h16M16 24h10M16 28h13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Création ou refonte',
    desc: "Le site est conçu avec un design moderne, responsive et cohérent avec votre image de marque.",
    goal: 'Inspirer confiance dès les premières secondes.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M16 20l-6 4 6 4M32 20l6 4-6 4M26 14l-4 20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="4" y="4" width="40" height="40" rx="10" stroke="currentColor" strokeWidth="2.2"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Mise en ligne et suivi',
    desc: "Le site est vérifié, optimisé techniquement puis mis en ligne. Le suivi dépend ensuite de l'offre choisie.",
    goal: 'Partir avec un site propre, fiable et prêt à convertir.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M8 36l10-14 8 8 6-8 8 14H8Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
        <circle cx="36" cy="14" r="5" stroke="currentColor" strokeWidth="2.2"/>
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="section section-tinted">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Process</span>
          <h2>Comment se déroule votre projet&nbsp;?</h2>
          <p className="section-sub">
            Une méthode simple, transparente et pensée pour avancer vite, sans vous perdre dans la technique.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <div key={step.num} className="process-card reveal" data-step={step.num}>
              <span className="process-num" aria-hidden="true">{step.num}</span>
              <div className="process-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <p className="process-goal">
                <span>Objectif</span> : {step.goal}
              </p>
            </div>
          ))}
        </div>

        <div className="process-reassurance reveal">
          <p>
            À chaque étape, vous validez les décisions importantes. Pixeloria s&apos;occupe de la structure, du design, de l&apos;intégration et des optimisations essentielles pour vous livrer un site clair, professionnel et exploitable rapidement.
          </p>
          <div className="process-cta">
            <a href="#contact" className="btn btn-primary">
              Discuter de mon projet
            </a>
            <Link href="/offres" className="btn btn-secondary">
              Voir les offres
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

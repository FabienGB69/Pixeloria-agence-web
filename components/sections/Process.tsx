export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Audit et cadrage',
      desc: 'Nous échangeons sur votre activité, vos objectifs, vos services et vos besoins prioritaires.',
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
      desc: 'Nous organisons les pages, les messages clés, les appels à l\'action et les éléments de réassurance.',
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
      desc: 'Le site est conçu avec un design clair, responsive et adapté à votre image.',
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
      desc: 'Le site est mis en ligne, vérifié techniquement et suivi selon l\'offre choisie.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M8 36l10-14 8 8 6-8 8 14H8Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
          <circle cx="36" cy="14" r="5" stroke="currentColor" strokeWidth="2.2"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Process</span>
          <h2>Comment se déroule votre projet&nbsp;?</h2>
          <p className="section-sub">
            Un processus simple et transparent, pensé pour vous accompagner à chaque étape.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, i) => (
            <div key={step.num} className="process-step reveal" data-step={step.num}>
              <div className="process-icon">{step.icon}</div>
              {i < steps.length - 1 && <div className="process-connector" aria-hidden="true"></div>}
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

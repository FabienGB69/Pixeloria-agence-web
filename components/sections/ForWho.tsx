import Link from 'next/link';

const targetAudiences = [
  {
    slug: 'artisan-batiment',
    emoji: '🔨',
    title: 'Artisans du bâtiment',
    description: 'Couvreur, plombier, électricien, peintre, menuisier...',
    cta: 'Voir un exemple de site',
    href: '/exemples/artisan-batiment',
  },
  {
    slug: 'entreprise-renovation',
    emoji: '🏗️',
    title: 'Entreprises de rénovation',
    description: 'Rénovation intérieure, isolation, carrelage, second œuvre...',
    cta: 'Voir un exemple de site',
    href: '/exemples/entreprise-renovation',
  },
  {
    slug: 'conciergerie',
    emoji: '🏡',
    title: 'Conciergeries',
    description: 'Location saisonnière, gestion voyageurs, propriétaires, automatisation...',
    cta: 'Voir un exemple anonymisé',
    href: '/exemples/conciergerie',
    badge: 'Cas anonymisé',
  },
  {
    slug: 'agence-immobiliere',
    emoji: '🏠',
    title: 'Agences immobilières',
    description: 'Agent immobilier, mandataire, promoteur local...',
    cta: 'Voir un exemple de site',
    href: '/exemples/agence-immobiliere',
  },
  {
    slug: 'commerce-local',
    emoji: '🛒',
    title: 'Commerçants locaux',
    description: 'Boutique de quartier, fleuriste, librairie, commerce de proximité...',
    cta: 'Voir un exemple de site',
    href: '/exemples/commerce-local',
  },
  {
    slug: 'independant',
    emoji: '💼',
    title: 'Indépendants',
    description: 'Freelance, consultant, coach, formateur...',
    cta: 'Voir un exemple de site',
    href: '/exemples/independant',
  },
];

export default function ForWho() {
  return (
    <section id="for-who" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Pour qui&nbsp;?</span>
          <h2>Pour qui sont nos offres&nbsp;?</h2>
          <p className="section-sub">
            Pixeloria accompagne les professionnels locaux qui veulent moderniser leur image,
            améliorer leur présence en ligne et recevoir plus de demandes de contact.
          </p>
          <p className="forwho-hint">
            Cliquez sur votre métier pour voir un exemple de site adapté à votre activité.
          </p>
        </div>

        <div className="forwho-grid forwho-grid--3col">
          {targetAudiences.map((item) => (
            <Link key={item.slug} href={item.href} className="forwho-link-card reveal">
              {item.badge && (
                <span className="forwho-card-badge">{item.badge}</span>
              )}
              <div className="forwho-card-body">
                <div className="forwho-link-icon" aria-hidden="true">{item.emoji}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="forwho-link-cta">
                {item.cta}
                <svg className="forwho-link-arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="forwho-cta reveal">
          <p>Votre activité ne figure pas dans la liste&nbsp;? Pas de panique.</p>
          <p className="forwho-cta-sub">
            Chaque projet peut être adapté à votre métier, votre zone géographique et vos objectifs.
          </p>
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

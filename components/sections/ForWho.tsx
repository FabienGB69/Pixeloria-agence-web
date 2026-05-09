import Link from 'next/link';

const targetAudiences = [
  {
    slug: 'artisan-batiment',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 18l4-4 8-8 4 4-8 8z" />
        <path d="M14 6l4 4" />
        <path d="M17 3l4 4-1.5 1.5-4-4z" />
      </svg>
    ),
    title: 'Artisans du bâtiment',
    description: 'Couvreur, plombier, électricien, peintre, menuisier...',
    cta: 'Voir un exemple de site',
    href: '/exemples/artisan-batiment',
  },
  {
    slug: 'entreprise-renovation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 17v-2a8 8 0 1116 0v2" />
        <path d="M2 17h20v2H2z" />
        <path d="M12 7V3" />
        <path d="M6.5 10.5A5 5 0 0112 7a5 5 0 015.5 3.5" />
      </svg>
    ),
    title: 'Entreprises de rénovation',
    description: 'Rénovation intérieure, isolation, carrelage, second œuvre...',
    cta: 'Voir un exemple de site',
    href: '/exemples/entreprise-renovation',
  },
  {
    slug: 'conciergerie',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
    title: 'Conciergeries',
    description: 'Location saisonnière, gestion voyageurs, automatisation...',
    cta: 'Voir un exemple anonymisé',
    href: '/exemples/conciergerie',
  },
  {
    slug: 'agence-immobiliere',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Agences immobilières',
    description: 'Agent immobilier, mandataire, promoteur local...',
    cta: 'Voir un exemple de site',
    href: '/exemples/agence-immobiliere',
  },
  {
    slug: 'commerce-local',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
      </svg>
    ),
    title: 'Commerçants locaux',
    description: 'Boutique de quartier, fleuriste, librairie, commerce de proximité...',
    cta: 'Voir un exemple de site',
    href: '/exemples/commerce-local',
  },
  {
    slug: 'independant',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
      </svg>
    ),
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
            Pixeloria accompagne les entreprises locales qui veulent moderniser leur image,
            améliorer leur présence en ligne et recevoir plus de demandes de contact.
          </p>
        </div>

        <div className="forwho-grid">
          {targetAudiences.map((item) => (
            <Link key={item.slug} href={item.href} className="forwho-link-card reveal">
              <div className="forwho-link-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
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

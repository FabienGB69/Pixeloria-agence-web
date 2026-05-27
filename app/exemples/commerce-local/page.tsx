import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getDemoImages } from '@/lib/demo-images';

export const metadata: Metadata = {
  title: "Exemple de site pour commerce local — Démo Pixeloria",
  description: "Visualisez à quoi ressemble un site professionnel pour commerce local créé par Pixeloria : produits, livraison, click & collect, avis et contact.",
  openGraph: {
    url: "https://pixeloria.fr/exemples/commerce-local",
    locale: "fr_FR",
    siteName: "Pixeloria",
  },
};

const services = [
  {
    title: "Épicerie Fine",
    desc: "Sélection de produits régionaux, bio et artisanaux. Fromages, charcuteries, conserves, condiments, épices rares.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      </svg>
    ),
  },
  {
    title: "Vins &amp; Spiritueux",
    desc: "Cave à vins soigneusement sélectionnés, bières artisanales locales, spiritueux et liqueurs de la région. Conseils personnalisés.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 22h8M12 11v11M5 11l7-9 7 9H5z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Traiteur &amp; Snacking",
    desc: "Plats maison préparés chaque matin. Sandwichs, salades composées, quiches et tartes salées. Idéal pour la pause déjeuner.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <line x1="6" y1="1" x2="6" y2="4" stroke="currentColor" strokeWidth="1.8"/>
        <line x1="10" y1="1" x2="10" y2="4" stroke="currentColor" strokeWidth="1.8"/>
        <line x1="14" y1="1" x2="14" y2="4" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
  {
    title: "Livraison à Domicile",
    desc: "Vos courses livrées à domicile en 2h dans Annecy et les environs. Commande en ligne ou par téléphone dès 9h.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="1" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <path d="M16 8l5 3-5 3V8z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <circle cx="5" cy="18" r="2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <circle cx="19" cy="18" r="2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      </svg>
    ),
  },
  {
    title: "Click &amp; Collect",
    desc: "Commandez en ligne ou par téléphone, votre commande est prête en 30 minutes. Retirez-la en magasin sans attente.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Ateliers Dégustation",
    desc: "Soirées dégustation vins, fromages, huiles d&apos;olive et produits du terroir. En groupe (jusqu&apos;à 15 personnes) ou privatisé.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <path d="M12 2v2M8 2v2M16 2v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const realisations = [
  {
    label: "Rayon fromages",
    location: "En magasin",
    surface: "15 références",
    gradientBefore: "linear-gradient(135deg, #44403c 0%, #57534e 40%, #3d3835 100%)",
    gradientAfter: "linear-gradient(135deg, #16a34a 0%, #15803d 40%, #166534 100%)",
    labelBefore: "Avant — Rayon vide, peu de choix",
    labelAfter: "Après — Sélection soignée de 15 fromages",
  },
  {
    label: "Cave à vins",
    location: "En magasin",
    surface: "80+ références",
    gradientBefore: "linear-gradient(135deg, #374151 0%, #4b5563 40%, #6b7280 100%)",
    gradientAfter: "linear-gradient(135deg, #22c55e 0%, #16a34a 40%, #15803d 100%)",
    labelBefore: "Avant — Cave désorganisée, accès difficile",
    labelAfter: "Après — Cave curatée, 80+ références commentées",
  },
  {
    label: "Comptoir traiteur",
    location: "En magasin",
    surface: "5 plats / jour",
    gradientBefore: "linear-gradient(160deg, #6b7280 0%, #9ca3af 40%, #71717a 100%)",
    gradientAfter: "linear-gradient(160deg, #86efac 0%, #4ade80 40%, #22c55e 100%)",
    labelBefore: "Avant — Comptoir vide en milieu de journée",
    labelAfter: "Après — Traiteur maison complet, sold out avant 13h",
  },
  {
    label: "Épicerie fine",
    location: "En magasin",
    surface: "200+ produits",
    gradientBefore: "linear-gradient(180deg, #292524 0%, #3d3834 50%, #44403c 100%)",
    gradientAfter: "linear-gradient(180deg, #bbf7d0 0%, #86efac 40%, #4ade80 100%)",
    labelBefore: "Avant — Linéaires clairsemés",
    labelAfter: "Après — Mise en scène produits, 200+ références",
  },
];

const reviews = [
  {
    author: "Léa T.",
    location: "Annecy",
    text: "Les meilleurs produits locaux de la région ! Marie connaît chaque producteur par son prénom. Les fromages sont exceptionnels et les conseils toujours avisés.",
    date: "il y a 1 semaine",
  },
  {
    author: "Paul G.",
    location: "Annecy-le-Vieux",
    text: "Livraison impeccable, arrivée dans les délais, produits bien emballés et frais. L&apos;application de commande est simple et pratique. Je recommande !",
    date: "il y a 3 semaines",
  },
  {
    author: "Sylvie B.",
    location: "Cran-Gevrier",
    text: "Atelier dégustation vins et fromages — soirée parfaite en famille. Marie est passionnée et communicative. On a adoré, on va revenir !",
    date: "il y a 2 mois",
  },
  {
    author: "Marc R.",
    location: "Pringy",
    text: "Commande click &amp; collect toujours prête à l&apos;heure. Belle sélection de bières artisanales introuvables en grande surface. Merci !",
    date: "il y a 6 semaines",
  },
  {
    author: "Aurélie D.",
    location: "Seynod",
    text: "Mon épicerie du cœur. Je reviens chaque semaine et je découvre toujours de nouveaux produits. L&apos;équipe est adorable et passionnée.",
    date: "il y a 3 mois",
  },
];

const zones = [
  'Annecy', 'Annecy-le-Vieux', 'Cran-Gevrier', 'Seynod', 'Pringy', 'Meythet',
  'Poisy', 'Argonay', 'Épagny Metz-Tessy', 'Chapeiry', 'Veyrier-du-Lac',
  'Saint-Jorioz', 'Menthon-Saint-Bernard', 'Talloires',
];

function Stars() {
  return (
    <div className="demo-stars" aria-label="5 étoiles sur 5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10 1l2.4 5.4 5.6.8-4 3.9.9 5.5L10 13.8l-5 2.8.9-5.5-4-3.9 5.6-.8z" />
        </svg>
      ))}
    </div>
  );
}

export default function CommerceLocalDemoPage() {
  const demoImages = getDemoImages('commerce-local');
  return (
    <div className="demo-root">
      <div className="demo-banner" role="banner" aria-label="Aperçu créé par Pixeloria">
        <div className="demo-banner-inner">
          <div className="demo-banner-text">
            <span className="demo-banner-pill">✦ Aperçu Pixeloria</span>
            <span className="demo-banner-msg">Voici à quoi ressemblerait votre site — chaque élément est personnalisé pour votre activité</span>
          </div>
          <div className="demo-banner-actions">
            <Link href="/#contact" className="demo-banner-cta">Demander mon site →</Link>
            <Link href="/" className="demo-banner-back" aria-label="Retour à la page métier">← Retour</Link>
          </div>
        </div>
      </div>

      <div className="demo-site demo-site--artisan-clear" lang="fr" style={{ '--dz-primary': '#16A34A', '--dz-primary-dark': '#15803D' } as React.CSSProperties}>
        <header className="demo-header" id="demo-top">
          <div className="demo-header-inner">
            <div className="demo-brand">
              <div className="demo-brand-mono" aria-hidden="true">EM</div>
              <div>
                <span className="demo-brand-name">L&apos;Épicerie de Marie</span>
                <span className="demo-brand-tagline">Épicerie fine · Produits locaux · Annecy</span>
              </div>
            </div>
            <nav className="demo-nav" aria-label="Navigation du site démo">
              <a href="#demo-services">Nos produits</a>
              <a href="#demo-realisations">Réalisations</a>
              <a href="#demo-avis">Avis</a>
              <a href="#demo-zone">Zone</a>
              <a href="#demo-contact">Contact</a>
            </nav>
            <a href="tel:0450123456" className="demo-phone-cta">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="16" height="16">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              04 50 12 34 56
            </a>
          </div>
        </header>

        <main>
          <section className="demo-hero" id="demo-hero" aria-label="Section principale">
            <div className="demo-hero-bg" aria-hidden="true" />
            <div className="demo-hero-overlay" aria-hidden="true" />
            <div className="demo-hero-inner">
              <div className="demo-hero-content">
                <div className="demo-hero-badge">
                  <span>✓ Producteurs locaux</span>
                  <span className="demo-badge-sep" aria-hidden="true">·</span>
                  <span>✓ Livraison à domicile</span>
                  <span className="demo-badge-sep" aria-hidden="true">·</span>
                  <span>✓ Ouvert 7j/7</span>
                </div>
                <h1 className="demo-hero-craft">Épicerie Fine &amp; Saveurs Locales</h1>
                <p className="demo-hero-name">L&apos;Épicerie de Marie</p>
                <p className="demo-hero-sub">Votre épicerie de quartier à Annecy depuis 2015. Sélection rigoureuse de produits locaux, bio et artisanaux de la région.</p>
                <div className="demo-hero-visual">
                  <Image src={demoImages.hero.src} alt={demoImages.hero.alt} width={900} height={560} className="demo-hero-inline-image" />
                </div>
                <div className="demo-hero-ctas">
                  <a href="#demo-contact" className="demo-btn demo-btn--primary demo-btn--lg">
                    Commander ou nous contacter
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a href="tel:0450123456" className="demo-btn demo-btn--outline">
                    Appeler
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                      <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="demo-hero-card" aria-hidden="true">
                <div className="demo-hero-card-inner">
                  <div className="demo-google-rating">
                    <Stars />
                    <strong>4,9 / 5</strong>
                    <span>127 avis Google</span>
                  </div>
                  <div className="demo-hero-card-divider" />
                  <div className="demo-hero-trust-list">
                    <div className="demo-trust-row"><span className="demo-trust-dot" />Produits locaux &amp; bio sélectionnés</div>
                    <div className="demo-trust-row"><span className="demo-trust-dot" />Livraison à domicile en 2h</div>
                    <div className="demo-trust-row"><span className="demo-trust-dot" />Click &amp; Collect en 30 min</div>
                    <div className="demo-trust-row"><span className="demo-trust-dot" />Producteurs partenaires connus</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="demo-section" id="demo-services" aria-labelledby="demo-services-title">
            <div className="demo-container">
              <div className="demo-section-heading">
                <span className="demo-eyebrow">Ce que nous proposons</span>
                <h2 id="demo-services-title">Nos produits &amp; services</h2>
                <p>L&apos;Épicerie de Marie, c&apos;est un commerce de proximité qui valorise les producteurs locaux et propose des produits bio, artisanaux et de saison.</p>
              </div>
              <div className="demo-services-grid">
                {services.map((s) => (
                  <div key={s.title} className="demo-service-card">
                    <div className="demo-service-icon">{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                ))}
              </div>
              <div className="demo-illustrations-grid" aria-label="Illustrations métier">
                {demoImages.gallery.map((img) => (
                  <div key={img.src} className="demo-illustration-card">
                    <Image src={img.src} alt={img.alt} width={520} height={360} className="demo-illustration-image" />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="demo-section demo-section--tinted" id="demo-realisations" aria-labelledby="demo-real-title">
            <div className="demo-container">
              <div className="demo-section-heading">
                <span className="demo-eyebrow">Notre univers</span>
                <h2 id="demo-real-title">Notre sélection</h2>
                <p>Un commerce de cœur, des produits qui ont une histoire. Voici quelques aperçus de notre sélection et de notre comptoir.</p>
              </div>
              <div className="demo-gallery-grid">
                {realisations.map((r) => (
                  <div key={r.label} className="demo-gallery-card">
                    <div className="demo-gallery-photos">
                      <div className="demo-gallery-photo demo-gallery-photo--before" style={{ background: r.gradientBefore }}>
                        <span className="demo-gallery-photo-label demo-gallery-photo-label--before">Avant</span>
                        <span className="demo-gallery-photo-desc">{r.labelBefore}</span>
                      </div>
                      <div className="demo-gallery-photo demo-gallery-photo--after" style={{ background: r.gradientAfter }}>
                        <span className="demo-gallery-photo-label demo-gallery-photo-label--after">Après</span>
                        <span className="demo-gallery-photo-desc">{r.labelAfter}</span>
                      </div>
                    </div>
                    <div className="demo-gallery-info">
                      <strong>{r.label}</strong>
                      <span>{r.location} · {r.surface}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="demo-stats-bar" aria-label="Chiffres clés">
            <div className="demo-stat">
              <strong>10 ans</strong>
              <span>d&apos;existence</span>
            </div>
            <div className="demo-stat-sep" aria-hidden="true" />
            <div className="demo-stat">
              <strong>80+</strong>
              <span>producteurs partenaires</span>
            </div>
            <div className="demo-stat-sep" aria-hidden="true" />
            <div className="demo-stat">
              <strong>4,9 ★</strong>
              <span>avis Google</span>
            </div>
            <div className="demo-stat-sep" aria-hidden="true" />
            <div className="demo-stat">
              <strong>Bio &amp; Local</strong>
              <span>certifié</span>
            </div>
          </div>

          <section className="demo-section" id="demo-avis" aria-labelledby="demo-avis-title">
            <div className="demo-container">
              <div className="demo-section-heading">
                <span className="demo-eyebrow">Avis Google</span>
                <h2 id="demo-avis-title">Ils nous font confiance</h2>
                <p>127 avis clients vérifiés sur Google — note moyenne 4,9 / 5.</p>
              </div>
              <div className="demo-reviews-grid">
                {reviews.map((r) => (
                  <div key={r.author} className="demo-review-card">
                    <div className="demo-review-header">
                      <div className="demo-review-avatar" aria-hidden="true">{r.author.charAt(0)}</div>
                      <div>
                        <strong className="demo-review-name">{r.author}</strong>
                        <span className="demo-review-location">{r.location}</span>
                      </div>
                      <Stars />
                    </div>
                    <p className="demo-review-text">&ldquo;{r.text}&rdquo;</p>
                    <span className="demo-review-date">{r.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="demo-guarantees-bar" aria-label="Certifications et garanties">
            <div className="demo-guarantee">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="22" height="22">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Producteurs locaux certifiés
            </div>
            <div className="demo-guarantee">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="22" height="22">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              80% produits bio
            </div>
            <div className="demo-guarantee">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="22" height="22">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/>
                <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Livraison en 2h
            </div>
            <div className="demo-guarantee">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="22" height="22">
                <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Ouvert 7j/7
            </div>
          </div>

          <section className="demo-section demo-section--tinted" id="demo-zone" aria-labelledby="demo-zone-title">
            <div className="demo-container">
              <div className="demo-zone-layout">
                <div className="demo-zone-text">
                  <span className="demo-eyebrow">Où nous intervenons</span>
                  <h2 id="demo-zone-title">Zone d&apos;intervention</h2>
                  <p>Nous livrons à domicile sur Annecy et les communes limitrophes dans un rayon de 20 km. Commandez avant 16h pour une livraison le jour même.</p>
                  <div className="demo-zone-chips">
                    {zones.map((z) => (
                      <span key={z} className="demo-zone-chip">{z}</span>
                    ))}
                  </div>
                </div>
                <div className="demo-zone-map" aria-hidden="true">
                  <div className="demo-map-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <span>Annecy &amp; environs</span>
                    <span className="demo-map-radius">Rayon 20 km</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="demo-section demo-section--tinted" id="demo-contact" aria-labelledby="demo-contact-title">
            <div className="demo-container">
              <div className="demo-contact-grid">
                <div className="demo-contact-info">
                  <span className="demo-eyebrow">Commandez ou contactez-nous</span>
                  <h2 id="demo-contact-title">Commander ou nous contacter</h2>
                  <p>Réponse sous 2h en journée. Livraison sous 2h dans Annecy.</p>
                  <div className="demo-contact-channels">
                    <div className="demo-contact-channel">
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="18" height="18">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <div>
                        <strong>Appel direct</strong>
                        <a href="tel:0450123456">04 50 12 34 56</a>
                      </div>
                    </div>
                    <div className="demo-contact-channel">
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="18" height="18">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <div>
                        <strong>Email</strong>
                        <a href="mailto:bonjour@epicerie-de-marie.fr">bonjour@epicerie-de-marie.fr</a>
                      </div>
                    </div>
                  </div>
                  <p className="demo-contact-avail">
                    <span className="demo-avail-dot" aria-hidden="true" />
                    Disponible — ouvert 7j/7, 9h–20h
                  </p>
                </div>
                <div className="demo-form-wrapper">
                  <form className="demo-form" aria-label="Formulaire de contact">
                    <div className="demo-form-row">
                      <div className="demo-form-group">
                        <label htmlFor="demo-nom">Nom complet</label>
                        <input id="demo-nom" type="text" className="demo-input" placeholder="Jean Dupont" />
                      </div>
                      <div className="demo-form-group">
                        <label htmlFor="demo-tel">Téléphone</label>
                        <input id="demo-tel" type="tel" className="demo-input" placeholder="06 12 34 56 78" />
                      </div>
                    </div>
                    <div className="demo-form-group">
                      <label htmlFor="demo-email">Email</label>
                      <input id="demo-email" type="email" className="demo-input" placeholder="jean@exemple.fr" />
                    </div>
                    <div className="demo-form-group">
                      <label htmlFor="demo-type">Type de demande</label>
                      <select id="demo-type" className="demo-input demo-select">
                        <option value="">Choisir…</option>
                        <option value="livraison">Livraison à domicile</option>
                        <option value="click-collect">Click &amp; Collect</option>
                        <option value="traiteur">Traiteur / Plateau repas</option>
                        <option value="atelier">Atelier dégustation</option>
                        <option value="commande-speciale">Commande spéciale</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    <div className="demo-form-group">
                      <label htmlFor="demo-message">Votre message</label>
                      <textarea id="demo-message" className="demo-input demo-textarea" rows={4} placeholder="Dites-nous ce dont vous avez besoin : produits souhaités, quantités, date de livraison…" />
                    </div>
                    <button type="button" className="demo-btn demo-btn--primary demo-btn--full">
                      Envoyer ma demande
                      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                        <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <p className="demo-form-note">Réponse sous 2h · Livraison possible le jour même</p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="demo-footer">
          <div className="demo-container demo-footer-inner">
            <div>
              <div className="demo-brand demo-brand--footer">
                <div className="demo-brand-mono" aria-hidden="true">EM</div>
                <div>
                  <span className="demo-brand-name">L&apos;Épicerie de Marie</span>
                  <span className="demo-brand-tagline">Épicerie fine · Produits locaux · Annecy</span>
                </div>
              </div>
              <p className="demo-footer-siret">SIRET : 678 901 234 00056 — RCS Annecy</p>
              <p className="demo-footer-siret">Membre réseau Bienvenue à la Ferme</p>
            </div>
            <div>
              <p className="demo-footer-col-title">Nos rayons</p>
              <ul className="demo-footer-links">
                <li><a href="#demo-services">Épicerie fine</a></li>
                <li><a href="#demo-services">Vins &amp; spiritueux</a></li>
                <li><a href="#demo-services">Traiteur</a></li>
                <li><a href="#demo-services">Ateliers</a></li>
              </ul>
            </div>
            <div>
              <p className="demo-footer-col-title">Contact</p>
              <ul className="demo-footer-links">
                <li><a href="tel:0450123456">04 50 12 34 56</a></li>
                <li><a href="mailto:bonjour@epicerie-de-marie.fr">bonjour@epicerie-de-marie.fr</a></li>
                <li><span>Annecy et environs (livraison 20 km)</span></li>
              </ul>
            </div>
          </div>
          <div className="demo-footer-bottom">
            <p>© 2025 L&apos;Épicerie de Marie · <span>Site créé par <Link href="/">Pixeloria</Link></span></p>
          </div>
        </footer>
      </div>

      <section className="demo-back-cta" aria-label="Créez votre site avec Pixeloria">
        <div className="demo-back-cta-inner">
          <div className="demo-back-cta-badge">✦ Aperçu créé par Pixeloria</div>
          <h2>Vous voulez un site comme celui-ci pour votre commerce ?</h2>
          <p>Cette démo illustre ce que Pixeloria peut créer pour vous — avec votre nom, vos photos, vos services et votre zone d&apos;intervention. Chaque site est fait sur mesure.</p>
          <div className="demo-back-cta-actions">
            <Link href="/#contact" className="btn btn-primary btn-lg">
              Demander mon site sur mesure
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="btn-icon">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/#services" className="btn btn-secondary">Voir les offres Pixeloria</Link>
          </div>
          <div className="demo-back-cta-trust">
            <span>✓ Devis gratuit sous 48h</span>
            <span>✓ Site livré en 5–10 jours</span>
            <span>✓ Dès 89 €/mois tout inclus</span>
          </div>
        </div>
      </section>
    </div>
  );
}

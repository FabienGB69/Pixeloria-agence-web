import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Exemple de site pour indépendant consultant — Démo Pixeloria',
  description:
    'Visualisez à quoi ressemble un site professionnel pour consultant indépendant créé par Pixeloria : services, missions, témoignages et contact.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/exemples/independant',
    title: 'Exemple de site pour indépendant consultant — Démo Pixeloria',
    description:
      'Visualisez à quoi ressemble un site professionnel pour consultant indépendant créé par Pixeloria.',
    locale: 'fr_FR',
    siteName: 'Pixeloria',
  },
};

const services = [
  {
    title: 'Stratégie Digitale',
    desc: "Audit de votre présence en ligne, définition des objectifs SMART, plan d'action 90 jours. Clarté avant tout.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Création de Contenu',
    desc: 'Articles de blog, posts réseaux sociaux, newsletters. Contenu adapté à votre audience, rédigé pour convertir.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Publicité en Ligne (Ads)',
    desc: 'Campagnes Google Ads et Meta Ads. Ciblage précis, créatifs optimisés, ROI suivi et maximisé chaque semaine.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="16 7 22 7 22 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'SEO & Référencement',
    desc: 'Audit technique SEO, optimisation du contenu, netlinking. Visibilité sur Google durable et mesurable.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Formation Marketing',
    desc: 'Ateliers pratiques pour vos équipes. Réseaux sociaux, email marketing, analytics. Formats demi-journée ou journée.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Reporting & Analyse',
    desc: 'Tableau de bord personnalisé Google Analytics / Search Console, suivi des KPIs, reporting mensuel clair et lisible.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const realisations = [
  {
    label: 'Visibilité Google',
    location: 'Client e-commerce',
    surface: '× 2,3 trafic',
    gradientBefore: 'linear-gradient(135deg, #44403c 0%, #57534e 40%, #3d3835 100%)',
    gradientAfter: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 40%, #5b21b6 100%)',
    labelBefore: 'Avant — Page 3 Google, 200 visites/mois',
    labelAfter: 'Après — Page 1 sur 5 requêtes cibles, 460 visites/mois',
  },
  {
    label: 'Réseaux sociaux',
    location: 'Artisan local',
    surface: '+480 abonnés',
    gradientBefore: 'linear-gradient(135deg, #374151 0%, #4b5563 40%, #6b7280 100%)',
    gradientAfter: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 40%, #6d28d9 100%)',
    labelBefore: 'Avant — Compte inactif, 12 abonnés',
    labelAfter: 'Après — Communauté engagée, 492 abonnés',
  },
  {
    label: 'Campagne Google Ads',
    location: 'Cabinet médical',
    surface: 'ROI × 3,8',
    gradientBefore: 'linear-gradient(160deg, #6b7280 0%, #9ca3af 40%, #71717a 100%)',
    gradientAfter: 'linear-gradient(160deg, #a78bfa 0%, #8b5cf6 40%, #7c3aed 100%)',
    labelBefore: 'Avant — Budget mal alloué, CPA élevé',
    labelAfter: 'Après — CPA divisé par 2, ROI × 3,8',
  },
  {
    label: 'Stratégie contenu',
    location: 'Coach indépendant',
    surface: '+12 leads/mois',
    gradientBefore: 'linear-gradient(180deg, #292524 0%, #3d3834 50%, #44403c 100%)',
    gradientAfter: 'linear-gradient(180deg, #c4b5fd 0%, #a78bfa 40%, #8b5cf6 100%)',
    labelBefore: 'Avant — Pas de contenu, aucun lead entrant',
    labelAfter: 'Après — Blog + newsletter, 12 leads qualifiés/mois',
  },
];

const reviews = [
  {
    author: 'Olivier P.',
    location: 'Lyon 6e',
    text: "Sophie a transformé notre visibilité en ligne en 6 mois. Notre trafic a doublé et nos demandes de contact ont augmenté de 70%. Investissement vraiment rentable.",
    date: 'il y a 1 mois',
  },
  {
    author: 'Claire N.',
    location: 'Villeurbanne',
    text: "Formation réseaux sociaux très pratique et adaptée à notre secteur. On a enfin une vraie stratégie éditoriale. Merci Sophie pour cette journée enrichissante !",
    date: 'il y a 3 semaines',
  },
  {
    author: 'Étienne D.',
    location: 'Caluire',
    text: "Campagne Google Ads gérée avec beaucoup de rigueur. Budget bien utilisé, résultats au rendez-vous. Je renouvelle la mission sans hésiter.",
    date: 'il y a 2 mois',
  },
  {
    author: 'Laure M.',
    location: 'Bron',
    text: "Audit SEO très détaillé et plan d'action clair. Sophie explique avec pédagogie, sans jargon. Idéal pour quelqu'un qui n'y connaît pas grand-chose.",
    date: 'il y a 5 semaines',
  },
  {
    author: 'Maxime R.',
    location: 'Lyon 3e',
    text: "Accompagnement 3 mois sur la stratégie digitale globale. Sophie est disponible, rigoureuse et obtient des résultats concrets. Je recommande sans réserve.",
    date: 'il y a 4 mois',
  },
];

const zones = [
  'Lyon', 'Villeurbanne', 'Caluire-et-Cuire', 'Bron', 'Vénissieux',
  'Décines-Charpieu', 'Meyzieu', 'Saint-Priest', 'Rillieux-la-Pape', 'Oullins',
  'Pierre-Bénite', 'Tassin-la-Demi-Lune', 'Écully', 'Francheville',
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

export default function IndependantDemoPage() {
  return (
    <div className="demo-root">

      {/* ── Pixeloria demo banner ── */}
      <div className="demo-banner" role="banner" aria-label="Aperçu créé par Pixeloria">
        <div className="demo-banner-inner">
          <div className="demo-banner-text">
            <span className="demo-banner-pill">✦ Aperçu Pixeloria</span>
            <span className="demo-banner-msg">
              Voici à quoi ressemblerait votre site — chaque élément est personnalisé pour votre activité
            </span>
          </div>
          <div className="demo-banner-actions">
            <Link href="/#contact" className="demo-banner-cta">
              Demander mon site →
            </Link>
            <Link href="/exemples/independant" className="demo-banner-back" aria-label="Retour à la page métier">
              ← Retour
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          FAKE CLIENT SITE — Sophie Martin Digital
          ══════════════════════════════════════ */}
      <div
        className="demo-site"
        lang="fr"
        style={{ '--dz-primary': '#7C3AED', '--dz-primary-dark': '#6D28D9' } as React.CSSProperties}
      >

        {/* ── Fake header ── */}
        <header className="demo-header" id="demo-top">
          <div className="demo-header-inner">
            <div className="demo-brand">
              <div className="demo-brand-mono" aria-hidden="true">SM</div>
              <div>
                <span className="demo-brand-name">Sophie Martin Digital</span>
                <span className="demo-brand-tagline">Stratégie digitale · Marketing · Lyon</span>
              </div>
            </div>

            <nav className="demo-nav" aria-label="Navigation du site démo">
              <a href="#demo-services">Prestations</a>
              <a href="#demo-realisations">Résultats</a>
              <a href="#demo-avis">Avis</a>
              <a href="#demo-zone">Zone</a>
              <a href="#demo-contact">Contact</a>
            </nav>

            <a href="tel:0782345690" className="demo-phone-cta" aria-label="Appeler le 07 82 34 56 90">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="16" height="16">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              07 82 34 56 90
            </a>
          </div>
        </header>

        {/* ── Hero ── */}
        <section className="demo-hero" id="demo-hero" aria-label="Section principale">
          <div className="demo-hero-bg" aria-hidden="true" />
          <div className="demo-hero-overlay" aria-hidden="true" />

          <div className="demo-hero-inner">
            <div className="demo-hero-content">
              <div className="demo-hero-badge">
                <span>✓ 8 ans d&apos;expérience</span>
                <span className="demo-badge-sep" aria-hidden="true">·</span>
                <span>✓ 50+ clients accompagnés</span>
                <span className="demo-badge-sep" aria-hidden="true">·</span>
                <span>✓ Certifiée Google &amp; Meta</span>
              </div>

              <h1 className="demo-hero-craft">
                Stratégie Digitale · Marketing en Ligne
              </h1>

              <p className="demo-hero-name">Sophie Martin Digital</p>

              <p className="demo-hero-sub">
                Consultante indépendante à Lyon. J&apos;aide les TPE et PME à développer leur présence
                en ligne et à trouver de nouveaux clients grâce au digital.
              </p>

              <div className="demo-hero-ctas">
                <a href="#demo-contact" className="demo-btn demo-btn--primary demo-btn--lg">
                  Parler de votre projet
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#demo-realisations" className="demo-btn demo-btn--outline">
                  Voir les résultats
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
                  <span>38 avis Google</span>
                </div>
                <div className="demo-hero-card-divider" />
                <div className="demo-hero-trust-list">
                  <div className="demo-trust-row">
                    <span className="demo-trust-dot" />
                    Audit offert pour tout nouveau client
                  </div>
                  <div className="demo-trust-row">
                    <span className="demo-trust-dot" />
                    Disponible 5j/7, réponse sous 24h
                  </div>
                  <div className="demo-trust-row">
                    <span className="demo-trust-dot" />
                    Missions sur-mesure, sans forfait rigide
                  </div>
                  <div className="demo-trust-row">
                    <span className="demo-trust-dot" />
                    Certifiée Google Ads &amp; Meta Business
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="demo-section" id="demo-services" aria-labelledby="demo-services-title">
          <div className="demo-container">
            <div className="demo-section-heading">
              <span className="demo-eyebrow">Ce que je propose</span>
              <h2 id="demo-services-title">Mes prestations</h2>
              <p>
                Consultante indépendante, je propose des missions sur-mesure adaptées à la taille
                et aux objectifs de chaque entreprise.
              </p>
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
          </div>
        </section>

        {/* ── Réalisations ── */}
        <section className="demo-section demo-section--tinted" id="demo-realisations" aria-labelledby="demo-real-title">
          <div className="demo-container">
            <div className="demo-section-heading">
              <span className="demo-eyebrow">Résultats concrets</span>
              <h2 id="demo-real-title">Avant / après mes missions</h2>
              <p>
                Des résultats mesurables sur des missions réelles. Chaque projet est unique —
                voici quelques exemples de ce qui est possible.
              </p>
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

        {/* ── Stats bar ── */}
        <div className="demo-stats-bar" aria-label="Chiffres clés">
          <div className="demo-stat">
            <strong>8 ans</strong>
            <span>d&apos;expérience</span>
          </div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat">
            <strong>50+</strong>
            <span>clients accompagnés</span>
          </div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat">
            <strong>4,9 ★</strong>
            <span>avis Google</span>
          </div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat">
            <strong>Google & Meta</strong>
            <span>certifiée</span>
          </div>
        </div>

        {/* ── Avis clients ── */}
        <section className="demo-section" id="demo-avis" aria-labelledby="demo-avis-title">
          <div className="demo-container">
            <div className="demo-section-heading">
              <span className="demo-eyebrow">Avis Google</span>
              <h2 id="demo-avis-title">Ils me font confiance</h2>
              <p>38 avis clients vérifiés sur Google — note moyenne 4,9 / 5.</p>
            </div>

            <div className="demo-reviews-grid">
              {reviews.map((r) => (
                <div key={r.author} className="demo-review-card">
                  <div className="demo-review-header">
                    <div className="demo-review-avatar" aria-hidden="true">
                      {r.author.charAt(0)}
                    </div>
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

        {/* ── Garanties ── */}
        <div className="demo-guarantees-bar" aria-label="Certifications et garanties">
          <div className="demo-guarantee">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
              <path d="M12 2l7 3v5c0 5-3.5 9-7 10C8.5 19 5 15 5 10V5l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Certifiée Google Ads
          </div>
          <div className="demo-guarantee">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Certifiée Meta Business
          </div>
          <div className="demo-guarantee">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
              <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
              <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            SIRET vérifié
          </div>
          <div className="demo-guarantee">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" stroke="currentColor" strokeWidth="1.8" />
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Disponible sous 24h
          </div>
        </div>

        {/* ── Zone d'intervention ── */}
        <section className="demo-section demo-section--tinted" id="demo-zone" aria-labelledby="demo-zone-title">
          <div className="demo-container">
            <div className="demo-zone-layout">
              <div className="demo-zone-text">
                <span className="demo-eyebrow">Où j&apos;interviens</span>
                <h2 id="demo-zone-title">Zone d&apos;intervention</h2>
                <p>
                  Basée à Lyon, j&apos;interviens en présentiel dans le Grand Lyon et en remote
                  partout en France et en Europe francophone. Pas de limite géographique pour
                  les missions 100% en ligne.
                </p>
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
                  <span>Grand Lyon &amp; Remote</span>
                  <span className="demo-map-radius">Partout en France</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact / Mission ── */}
        <section className="demo-section demo-section--dark" id="demo-contact" aria-labelledby="demo-contact-title">
          <div className="demo-container">
            <div className="demo-contact-grid">
              <div className="demo-contact-info">
                <span className="demo-eyebrow">Premier échange offert</span>
                <h2 id="demo-contact-title">Parler de votre projet</h2>
                <p>Réponse sous 24h. Appel découverte de 30 minutes offert pour discuter de votre projet.</p>

                <div className="demo-contact-channels">
                  <a href="tel:0782345690" className="demo-channel">
                    <div className="demo-channel-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Appel direct</strong>
                      <span>07 82 34 56 90</span>
                    </div>
                  </a>
                  <a href="mailto:sophie@martin-digital.fr" className="demo-channel">
                    <div className="demo-channel-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Email</strong>
                      <span>sophie@martin-digital.fr</span>
                    </div>
                  </a>
                </div>

                <p className="demo-contact-avail">
                  <span className="demo-avail-dot" aria-hidden="true" />
                  Disponible — réponse sous 24h, lun.–ven.
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
                    <label htmlFor="demo-mission">Type de mission</label>
                    <select id="demo-mission" className="demo-input demo-select">
                      <option value="">Choisir une prestation…</option>
                      <option>Stratégie digitale</option>
                      <option>SEO & Référencement</option>
                      <option>Publicité en ligne (Ads)</option>
                      <option>Création de contenu</option>
                      <option>Formation marketing</option>
                      <option>Audit</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div className="demo-form-group">
                    <label htmlFor="demo-message">Votre projet</label>
                    <textarea
                      id="demo-message"
                      className="demo-input demo-textarea"
                      rows={4}
                      placeholder="Décrivez votre projet ou votre besoin : secteur, taille de l'entreprise, objectifs, budget indicatif…"
                    />
                  </div>
                  <button type="button" className="demo-btn demo-btn--primary demo-btn--full">
                    Envoyer ma demande
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <p className="demo-form-note">Premier appel découverte offert · Réponse sous 24h</p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="demo-footer">
          <div className="demo-container demo-footer-inner">
            <div>
              <div className="demo-brand demo-brand--footer">
                <div className="demo-brand-mono" aria-hidden="true">SM</div>
                <div>
                  <span className="demo-brand-name">Sophie Martin Digital</span>
                  <span className="demo-brand-tagline">Stratégie digitale · Marketing · Lyon</span>
                </div>
              </div>
              <p className="demo-footer-siret">SIRET : 789 012 345 00067 — Auto-entrepreneur, Lyon</p>
              <p className="demo-footer-siret">Certifiée Google Ads &amp; Meta Business Partner</p>
            </div>

            <div>
              <p className="demo-footer-col-title">Prestations</p>
              <ul className="demo-footer-links">
                <li><a href="#demo-services">Stratégie digitale</a></li>
                <li><a href="#demo-services">SEO &amp; Référencement</a></li>
                <li><a href="#demo-services">Publicité Ads</a></li>
                <li><a href="#demo-services">Formation</a></li>
              </ul>
            </div>

            <div>
              <p className="demo-footer-col-title">Contact</p>
              <ul className="demo-footer-links">
                <li><a href="tel:0782345690">07 82 34 56 90</a></li>
                <li><a href="mailto:sophie@martin-digital.fr">sophie@martin-digital.fr</a></li>
                <li>Lyon &amp; remote (partout en France)</li>
              </ul>
            </div>
          </div>
          <div className="demo-footer-bottom">
            <p>© 2025 Sophie Martin Digital · <span>Site créé par <Link href="/">Pixeloria</Link></span></p>
          </div>
        </footer>

      </div>
      {/* ── fin demo-site ── */}

      {/* ── Back to Pixeloria CTA ── */}
      <section className="demo-back-cta" aria-label="Créez votre site avec Pixeloria">
        <div className="demo-back-cta-inner">
          <div className="demo-back-cta-badge">✦ Aperçu créé par Pixeloria</div>
          <h2>Vous voulez un site comme celui-ci pour votre activité indépendante&nbsp;?</h2>
          <p>
            Cette démo illustre ce que Pixeloria peut créer pour vous — avec votre nom, vos
            services et votre positionnement. Chaque site est fait sur mesure.
          </p>
          <div className="demo-back-cta-actions">
            <Link href="/#contact" className="btn btn-primary btn-lg">
              Demander mon site sur mesure
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="btn-icon">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/#services" className="btn btn-secondary">
              Voir les offres Pixeloria
            </Link>
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

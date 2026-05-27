import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Exemple de site pour conciergerie — Démo Pixeloria',
  description:
    'Visualisez à quoi ressemble un site professionnel pour conciergerie Airbnb et location courte durée créé par Pixeloria : services, biens, témoignages, contact.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/exemples/conciergerie',
    title: 'Exemple de site pour conciergerie — Démo Pixeloria',
    description:
      'Visualisez à quoi ressemble un site professionnel pour conciergerie Airbnb et location courte durée créé par Pixeloria.',
    locale: 'fr_FR',
    siteName: 'Pixeloria',
  },
};

const services = [
  {
    title: 'Accueil & Check-in',
    desc: 'Accueil personnalisé de vos voyageurs 7j/7. Remise des clés, présentation du logement, conseils locaux.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Ménage & Linge',
    desc: 'Nettoyage professionnel après chaque séjour. Linge de maison fourni, lavé et plié entre chaque rotation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Gestion des Réservations',
    desc: 'Synchronisation multiplateforme : Airbnb, Booking, VRBO. Zéro double réservation, tarification optimisée.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Maintenance & Dépannage',
    desc: 'Suivi technique de votre bien. Intervention sous 4h en cas de problème. Réseau d\'artisans partenaires.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Photos & Listing Optimisés',
    desc: 'Shooting photo professionnel et rédaction d\'annonces percutantes pour maximiser votre visibilité et vos réservations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Optimisation des Revenus',
    desc: 'Tarification dynamique, taux d\'occupation maximisé. En moyenne +35 à +50% de revenus pour nos propriétaires.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="16 7 22 7 22 13" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const realisations = [
  {
    label: 'Villa Cannes',
    location: 'Cannes',
    surface: '4 chambres',
    gradientBefore: 'linear-gradient(135deg, #44403c 0%, #57534e 40%, #3d3835 100%)',
    gradientAfter: 'linear-gradient(135deg, #0d9488 0%, #0f766e 40%, #134e4a 100%)',
    labelBefore: 'Avant — Bien non optimisé, 40% d\'occupation',
    labelAfter: 'Après — 85%+ d\'occupation, revenus +50%',
  },
  {
    label: 'Studio Nice Centre',
    location: 'Nice',
    surface: '1 pièce',
    gradientBefore: 'linear-gradient(135deg, #374151 0%, #4b5563 40%, #6b7280 100%)',
    gradientAfter: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 40%, #0f766e 100%)',
    labelBefore: 'Avant — Photos médiocres, peu de réservations',
    labelAfter: 'Après — Listing optimisé, réservations en flux',
  },
  {
    label: 'Appartement Antibes',
    location: 'Antibes',
    surface: 'T3',
    gradientBefore: 'linear-gradient(160deg, #6b7280 0%, #9ca3af 40%, #71717a 100%)',
    gradientAfter: 'linear-gradient(160deg, #06b6d4 0%, #0891b2 40%, #0e7490 100%)',
    labelBefore: 'Avant — Gestion en direct, stress quotidien',
    labelAfter: 'Après — Gestion déléguée, revenus stables',
  },
  {
    label: 'Maison Mougins',
    location: 'Mougins',
    surface: '3 chambres',
    gradientBefore: 'linear-gradient(180deg, #292524 0%, #3d3834 50%, #44403c 100%)',
    gradientAfter: 'linear-gradient(180deg, #5eead4 0%, #2dd4bf 40%, #14b8a6 100%)',
    labelBefore: 'Avant — Autogestion chronophage',
    labelAfter: 'Après — Tranquillité totale, revenus optimisés',
  },
];

const reviews = [
  {
    author: 'Philippe R.',
    location: 'Cannes',
    text: 'Blue Prestige gère ma villa depuis 2 ans. Mes revenus ont augmenté de 45% et je n\'ai plus rien à gérer. L\'équipe est réactive et d\'une totale transparence.',
    date: 'il y a 1 mois',
  },
  {
    author: 'Isabelle M.',
    location: 'Nice',
    text: 'Mon appartement est mieux entretenu qu\'avant que je le loue moi-même ! Les photos sont superbes, les voyageurs adorent. Taux d\'occupation exceptionnel.',
    date: 'il y a 3 semaines',
  },
  {
    author: 'Jean-Luc V.',
    location: 'Antibes',
    text: 'Réactifs, professionnels, honnêtes. Confier mon T3 à Blue Prestige est la meilleure décision que j\'aie prise. Je recommande sans la moindre hésitation.',
    date: 'il y a 2 mois',
  },
  {
    author: 'Marina D.',
    location: 'Mougins',
    text: 'Mauvaise expérience avec un autre gestionnaire, puis j\'ai découvert Blue Prestige. Différence de jour et nuit. Communication parfaite, comptes rendus mensuels.',
    date: 'il y a 6 semaines',
  },
  {
    author: 'Alain B.',
    location: 'Cannes',
    text: '12 ans de location saisonnière en gestion personnelle, puis j\'ai rencontré Blue Prestige. Je regrette de ne pas l\'avoir fait plus tôt !',
    date: 'il y a 4 mois',
  },
];

const zones = [
  'Cannes', 'Antibes', 'Nice', 'Juan-les-Pins', 'Vallauris',
  'Golfe-Juan', 'Mougins', 'Grasse', 'Valbonne', 'Le Cannet',
  'Mandelieu-la-Napoule', 'Saint-Raphaël', 'Fréjus', 'Menton',
];

function Stars() {
  return (
    <div className="demo-stars" aria-label="5 étoiles sur 5">
      {[1,2,3,4,5].map((i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10 1l2.4 5.4 5.6.8-4 3.9.9 5.5L10 13.8l-5 2.8.9-5.5-4-3.9 5.6-.8z" />
        </svg>
      ))}
    </div>
  );
}

export default function ConciergeriedemoPage() {
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
            <Link href="/exemples/conciergerie" className="demo-banner-back" aria-label="Retour à la page métier">
              ← Retour
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          FAKE CLIENT SITE — Blue Prestige Conciergerie
          ══════════════════════════════════════ */}
      <div
        className="demo-site"
        lang="fr"
        style={{ '--dz-primary': '#0D9488', '--dz-primary-dark': '#0F766E' } as React.CSSProperties}
      >

        {/* ── Fake header ── */}
        <header className="demo-header" id="demo-top">
          <div className="demo-header-inner">
            <div className="demo-brand">
              <div className="demo-brand-mono" aria-hidden="true">BP</div>
              <div>
                <span className="demo-brand-name">Blue Prestige Conciergerie</span>
                <span className="demo-brand-tagline">Conciergerie · Gestion locative · Côte d&apos;Azur</span>
              </div>
            </div>

            <nav className="demo-nav" aria-label="Navigation du site démo">
              <a href="#demo-services">Services</a>
              <a href="#demo-realisations">Biens gérés</a>
              <a href="#demo-avis">Avis</a>
              <a href="#demo-zone">Zone</a>
              <a href="#demo-contact">Contact</a>
            </nav>

            <a href="tel:0693456789" className="demo-phone-cta" aria-label="Appeler le 06 93 45 67 89">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="16" height="16">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              06 93 45 67 89
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
                <span>✓ Gestionnaire agréé</span>
                <span className="demo-badge-sep" aria-hidden="true">·</span>
                <span>✓ Assurance pro</span>
                <span className="demo-badge-sep" aria-hidden="true">·</span>
                <span>✓ Disponible 7j/7</span>
              </div>

              <h1 className="demo-hero-craft">
                Conciergerie Premium Airbnb &amp; Courte Durée
              </h1>

              <p className="demo-hero-name">Blue Prestige Conciergerie</p>

              <p className="demo-hero-sub">
                Gestion complète de votre bien en location saisonnière sur la Côte d&apos;Azur.
                Nous gérons tout, vous encaissez.
              </p>

              <div className="demo-hero-ctas">
                <a href="#demo-contact" className="demo-btn demo-btn--primary demo-btn--lg">
                  Confier mon bien
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#demo-realisations" className="demo-btn demo-btn--outline">
                  Voir nos biens gérés
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
                  <span>83 avis voyageurs</span>
                </div>
                <div className="demo-hero-card-divider" />
                <div className="demo-hero-trust-list">
                  <div className="demo-trust-row">
                    <span className="demo-trust-dot" />
                    Bilan mensuel détaillé
                  </div>
                  <div className="demo-trust-row">
                    <span className="demo-trust-dot" />
                    Disponible 7j/7, 365j/an
                  </div>
                  <div className="demo-trust-row">
                    <span className="demo-trust-dot" />
                    Ménage professionnel inclus
                  </div>
                  <div className="demo-trust-row">
                    <span className="demo-trust-dot" />
                    Intervention sous 4h en urgence
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
              <span className="demo-eyebrow">Ce que nous faisons</span>
              <h2 id="demo-services-title">Nos services</h2>
              <p>Une gestion complète de A à Z pour maximiser vos revenus et vous libérer de toutes les contraintes opérationnelles.</p>
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
              <span className="demo-eyebrow">Biens gérés</span>
              <h2 id="demo-real-title">Avant / après confiage</h2>
              <p>La différence que fait une gestion professionnelle. Nos propriétaires constatent en moyenne +40% de revenus après nous avoir confié leur bien.</p>
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
            <strong>120+</strong>
            <span>biens gérés</span>
          </div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat">
            <strong>1 200+</strong>
            <span>séjours réalisés</span>
          </div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat">
            <strong>4,9 ★</strong>
            <span>avis voyageurs</span>
          </div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat">
            <strong>+40%</strong>
            <span>revenus en moyenne</span>
          </div>
        </div>

        {/* ── Avis clients ── */}
        <section className="demo-section" id="demo-avis" aria-labelledby="demo-avis-title">
          <div className="demo-container">
            <div className="demo-section-heading">
              <span className="demo-eyebrow">Avis Google</span>
              <h2 id="demo-avis-title">Ce que disent nos propriétaires</h2>
              <p>83 avis vérifiés sur Google — note moyenne 4,9 / 5.</p>
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
            Assurance professionnelle
          </div>
          <div className="demo-guarantee">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Gestionnaire agréé
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
            Disponible 7j/7
          </div>
        </div>

        {/* ── Zone d'intervention ── */}
        <section className="demo-section demo-section--tinted" id="demo-zone" aria-labelledby="demo-zone-title">
          <div className="demo-container">
            <div className="demo-zone-layout">
              <div className="demo-zone-text">
                <span className="demo-eyebrow">Où nous intervenons</span>
                <h2 id="demo-zone-title">Zone d&apos;intervention</h2>
                <p>
                  Nous gérons votre bien sur toute la Côte d&apos;Azur, du Var aux Alpes-Maritimes.
                  Nos équipes sont basées localement à Cannes, Nice et Antibes.
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
                  <span>Côte d&apos;Azur</span>
                  <span className="demo-map-radius">Rayon 80 km</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="demo-section demo-section--dark" id="demo-contact" aria-labelledby="demo-contact-title">
          <div className="demo-container">
            <div className="demo-contact-grid">
              <div className="demo-contact-info">
                <span className="demo-eyebrow">Sans engagement</span>
                <h2 id="demo-contact-title">Confiez-nous votre bien</h2>
                <p>Réponse sous 24h. Bilan de rentabilité offert pour tout nouveau bien.</p>

                <div className="demo-contact-channels">
                  <a href="tel:0693456789" className="demo-channel">
                    <div className="demo-channel-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Appel direct</strong>
                      <span>06 93 45 67 89</span>
                    </div>
                  </a>
                  <a href="mailto:contact@blue-prestige.fr" className="demo-channel">
                    <div className="demo-channel-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Email</strong>
                      <span>contact@blue-prestige.fr</span>
                    </div>
                  </a>
                </div>

                <p className="demo-contact-avail">
                  <span className="demo-avail-dot" aria-hidden="true" />
                  Disponible — réponse sous 24h, 7j/7
                </p>
              </div>

              <div className="demo-form-wrapper">
                <form className="demo-form" aria-label="Formulaire de demande">
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
                    <label htmlFor="demo-type">Type de bien</label>
                    <select id="demo-type" className="demo-input demo-select">
                      <option value="">Choisir un type…</option>
                      <option>Studio / T1</option>
                      <option>T2</option>
                      <option>T3+</option>
                      <option>Villa / Maison</option>
                      <option>Chambre privée</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div className="demo-form-group">
                    <label htmlFor="demo-message">Votre message</label>
                    <textarea
                      id="demo-message"
                      className="demo-input demo-textarea"
                      rows={4}
                      placeholder="Décrivez votre bien : localisation, type, période de disponibilité, objectifs…"
                    />
                  </div>
                  <button type="button" className="demo-btn demo-btn--primary demo-btn--full">
                    Envoyer ma demande
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <p className="demo-form-note">Réponse garantie sous 24h · Bilan de rentabilité offert</p>
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
                <div className="demo-brand-mono" aria-hidden="true">BP</div>
                <div>
                  <span className="demo-brand-name">Blue Prestige Conciergerie</span>
                  <span className="demo-brand-tagline">Conciergerie · Gestion locative · Côte d&apos;Azur</span>
                </div>
              </div>
              <p className="demo-footer-siret">SIRET : 567 890 123 00034 — RCS Cannes</p>
              <p className="demo-footer-siret">Assurance pro Hiscox n° XXXXXXXXXX</p>
            </div>

            <div>
              <p className="demo-footer-col-title">Services</p>
              <ul className="demo-footer-links">
                <li><a href="#demo-services">Accueil &amp; Check-in</a></li>
                <li><a href="#demo-services">Ménage &amp; Linge</a></li>
                <li><a href="#demo-services">Gestion réservations</a></li>
                <li><a href="#demo-services">Maintenance</a></li>
              </ul>
            </div>

            <div>
              <p className="demo-footer-col-title">Contact</p>
              <ul className="demo-footer-links">
                <li><a href="tel:0693456789">06 93 45 67 89</a></li>
                <li><a href="mailto:contact@blue-prestige.fr">contact@blue-prestige.fr</a></li>
                <li>Côte d&apos;Azur — Cannes, Nice, Antibes</li>
              </ul>
            </div>
          </div>
          <div className="demo-footer-bottom">
            <p>© 2025 Blue Prestige Conciergerie · <span>Site créé par <Link href="/">Pixeloria</Link></span></p>
          </div>
        </footer>

      </div>
      {/* ── fin demo-site ── */}

      {/* ── Back to Pixeloria CTA ── */}
      <section className="demo-back-cta" aria-label="Créez votre site avec Pixeloria">
        <div className="demo-back-cta-inner">
          <div className="demo-back-cta-badge">✦ Aperçu créé par Pixeloria</div>
          <h2>Vous voulez un site comme celui-ci pour votre conciergerie&nbsp;?</h2>
          <p>
            Cette démo illustre ce que Pixeloria peut créer pour vous — avec votre nom, vos biens,
            vos services et votre zone. Chaque site est fait sur mesure.
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

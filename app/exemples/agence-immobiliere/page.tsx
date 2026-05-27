import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Exemple de site pour agence immobilière — Démo Pixeloria',
  description:
    "Visualisez à quoi ressemble un site professionnel pour agence immobilière créé par Pixeloria : vente, location, gestion locative, estimation et contact.",
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/exemples/agence-immobiliere',
    title: 'Exemple de site pour agence immobilière — Démo Pixeloria',
    description:
      'Visualisez à quoi ressemble un site professionnel pour agence immobilière créé par Pixeloria.',
    locale: 'fr_FR',
    siteName: 'Pixeloria',
  },
};

const services = [
  {
    title: 'Vente Immobilière',
    desc: 'Estimation gratuite, mandat simple ou exclusif, diffusion sur tous les portails, suivi personnalisé jusqu\'à la signature.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Location Longue Durée',
    desc: 'Constitution du dossier locataire, état des lieux, rédaction du bail, encaissement des loyers et quittances.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="1" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <path d="M16 8l5 3-5 3V8z" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Gestion Locative',
    desc: 'Encaissement des loyers, quittances, déclaration fiscale, suivi des réparations. Tranquillité d\'esprit garantie.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Estimation Gratuite',
    desc: 'Évaluation précise de votre bien selon les données du marché local. Rapport détaillé remis sous 48h.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="1.8" fill="none"/>
      </svg>
    ),
  },
  {
    title: 'Home Staging',
    desc: 'Valorisation de votre bien avant la mise en vente ou en location. Photos professionnelles incluses.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l9 5v8l-9 5-9-5V8l9-5z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round"/>
        <path d="M12 3v13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Conseil en Investissement',
    desc: 'Sélection de biens rentables, calcul du rendement locatif, accompagnement juridique et fiscal.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        <polyline points="16 7 22 7 22 13" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const realisations = [
  {
    label: 'Appartement T3',
    location: 'Nantes Centre',
    surface: '65 m²',
    gradientBefore: 'linear-gradient(135deg, #44403c 0%, #57534e 40%, #3d3835 100%)',
    gradientAfter: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 40%, #1e40af 100%)',
    labelBefore: 'Avant — Bien en attente, visite peu convaincante',
    labelAfter: 'Après — Vendu en 18 jours au prix demandé',
  },
  {
    label: 'Maison 5 pièces',
    location: 'Rezé',
    surface: '110 m²',
    gradientBefore: 'linear-gradient(135deg, #374151 0%, #4b5563 40%, #6b7280 100%)',
    gradientAfter: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 40%, #1d4ed8 100%)',
    labelBefore: 'Avant — Présentation non valorisée',
    labelAfter: 'Après — Home staging, vendu +5% vs estimation',
  },
  {
    label: 'Studio meublé',
    location: 'Saint-Herblain',
    surface: '28 m²',
    gradientBefore: 'linear-gradient(160deg, #6b7280 0%, #9ca3af 40%, #71717a 100%)',
    gradientAfter: 'linear-gradient(160deg, #60a5fa 0%, #3b82f6 40%, #2563eb 100%)',
    labelBefore: 'Avant — Vacant depuis 3 mois',
    labelAfter: 'Après — Loué en 8 jours, locataire qualifié',
  },
  {
    label: 'Local commercial',
    location: 'Orvault',
    surface: '85 m²',
    gradientBefore: 'linear-gradient(180deg, #292524 0%, #3d3834 50%, #44403c 100%)',
    gradientAfter: 'linear-gradient(180deg, #1d4ed8 0%, #1e40af 50%, #1e3a8a 100%)',
    labelBefore: 'Avant — Non occupé depuis 8 mois',
    labelAfter: 'Après — Bailleur commercial signé, gestion assurée',
  },
];

const reviews = [
  {
    author: 'Céline M.',
    location: 'Nantes',
    text: 'Vente de mon appartement en 3 semaines au prix demandé. Marie de l\'agence est une vraie professionnelle, toujours disponible et très rassurante.',
    date: 'il y a 2 semaines',
  },
  {
    author: 'Thomas R.',
    location: 'Rezé',
    text: 'Gestion locative depuis 3 ans, zéro impayé, locataires sélectionnés avec soin. La tranquillité d\'esprit à un prix très raisonnable.',
    date: 'il y a 1 mois',
  },
  {
    author: 'Fatima O.',
    location: 'Saint-Herblain',
    text: 'Location de mon studio en 8 jours. État des lieux très précis, contrat clair, suivi parfait depuis. Je recommande Dumont Immobilier.',
    date: 'il y a 5 semaines',
  },
  {
    author: 'David L.',
    location: 'Orvault',
    text: 'Investissement locatif conseillé par Dumont. Rendement meilleur que prévu, accompagnement complet de A à Z. Agence sérieuse et compétente.',
    date: 'il y a 3 mois',
  },
  {
    author: 'Pauline F.',
    location: 'Nantes',
    text: 'Achat de notre première maison facilité par toute l\'équipe Dumont. Toujours disponibles, très pédagogiques avec les primo-accédants.',
    date: 'il y a 4 mois',
  },
];

const zones = [
  'Nantes', 'Rezé', 'Saint-Herblain', 'Orvault', 'Carquefou',
  'Sainte-Luce-sur-Loire', 'La Chapelle-sur-Erdre', 'Vertou', 'Bouguenais', 'Couëron',
  'Saint-Sébastien-sur-Loire', 'Brains', 'Sucé-sur-Erdre', 'Treillières',
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

export default function AgenceImmobiliereDemoPage() {
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
            <Link href="/exemples/agence-immobiliere" className="demo-banner-back" aria-label="Retour à la page métier">
              ← Retour
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          FAKE CLIENT SITE — Dumont Immobilier
          ══════════════════════════════════════ */}
      <div
        className="demo-site demo-site--artisan-clear"
        lang="fr"
        style={{ '--dz-primary': '#2563EB', '--dz-primary-dark': '#1D4ED8' } as React.CSSProperties}
      >

        {/* ── Fake header ── */}
        <header className="demo-header" id="demo-top">
          <div className="demo-header-inner">
            <div className="demo-brand">
              <div className="demo-brand-mono" aria-hidden="true">DI</div>
              <div>
                <span className="demo-brand-name">Dumont Immobilier</span>
                <span className="demo-brand-tagline">Vente · Location · Gestion · Nantes</span>
              </div>
            </div>

            <nav className="demo-nav" aria-label="Navigation du site démo">
              <a href="#demo-services">Services</a>
              <a href="#demo-realisations">Réalisations</a>
              <a href="#demo-avis">Avis</a>
              <a href="#demo-zone">Zone</a>
              <a href="#demo-contact">Contact</a>
            </nav>

            <a href="tel:0240123456" className="demo-phone-cta" aria-label="Appeler le 02 40 12 34 56">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="16" height="16">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              02 40 12 34 56
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
                <span>✓ Agent certifié loi Hoguet</span>
                <span className="demo-badge-sep" aria-hidden="true">·</span>
                <span>✓ Adhérent FNAIM</span>
                <span className="demo-badge-sep" aria-hidden="true">·</span>
                <span>✓ Cartes T &amp; G</span>
              </div>

              <h1 className="demo-hero-craft">
                Vente, Location &amp; Gestion Immobilière
              </h1>

              <p className="demo-hero-name">Dumont Immobilier</p>

              <p className="demo-hero-sub">
                Votre agence immobilière à Nantes depuis 2001.
                22 ans d&apos;expérience au service de vos projets immobiliers.
              </p>

              <div className="demo-hero-ctas">
                <a href="#demo-contact" className="demo-btn demo-btn--primary demo-btn--lg">
                  Demander une estimation
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="tel:0240123456" className="demo-btn demo-btn--outline">
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
                  <strong>4,8 / 5</strong>
                  <span>104 avis Google</span>
                </div>
                <div className="demo-hero-card-divider" />
                <div className="demo-hero-trust-list">
                  <div className="demo-trust-row">
                    <span className="demo-trust-dot" />
                    Estimation gratuite sous 48h
                  </div>
                  <div className="demo-trust-row">
                    <span className="demo-trust-dot" />
                    Diffusion sur tous les portails
                  </div>
                  <div className="demo-trust-row">
                    <span className="demo-trust-dot" />
                    Gestion locative sans stress
                  </div>
                  <div className="demo-trust-row">
                    <span className="demo-trust-dot" />
                    22 ans d&apos;expertise locale
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
              <span className="demo-eyebrow">Ce que nous proposons</span>
              <h2 id="demo-services-title">Nos services</h2>
              <p>De l&apos;estimation à la signature, en passant par la gestion locative et le conseil en investissement, nous vous accompagnons à chaque étape.</p>
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
              <h2 id="demo-real-title">Nos réalisations</h2>
              <p>Quelques exemples de biens que nous avons vendus, loués ou mis en gestion. Chaque transaction est unique — voici les résultats obtenus.</p>
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
            <strong>22 ans</strong>
            <span>d&apos;activité</span>
          </div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat">
            <strong>1 200+</strong>
            <span>transactions</span>
          </div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat">
            <strong>4,8 ★</strong>
            <span>avis Google</span>
          </div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat">
            <strong>FNAIM</strong>
            <span>membre adhérent</span>
          </div>
        </div>

        {/* ── Avis clients ── */}
        <section className="demo-section" id="demo-avis" aria-labelledby="demo-avis-title">
          <div className="demo-container">
            <div className="demo-section-heading">
              <span className="demo-eyebrow">Avis Google</span>
              <h2 id="demo-avis-title">Ils nous font confiance</h2>
              <p>104 avis clients vérifiés sur Google — note moyenne 4,8 / 5.</p>
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
            Carte professionnelle T
          </div>
          <div className="demo-guarantee">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
              <path d="M12 2l7 3v5c0 5-3.5 9-7 10C8.5 19 5 15 5 10V5l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Carte professionnelle G
          </div>
          <div className="demo-guarantee">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Adhérent FNAIM
          </div>
          <div className="demo-guarantee">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" stroke="currentColor" strokeWidth="1.8" />
              <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            Estimation sous 48h
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
                  Agence basée à Nantes, nous intervenons dans tout le Grand Nantes et les communes
                  de Loire-Atlantique. Connaissance approfondie du marché local.
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
                  <span>Grand Nantes</span>
                  <span className="demo-map-radius">Loire-Atlantique</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="demo-section demo-section--tinted" id="demo-contact" aria-labelledby="demo-contact-title">
          <div className="demo-container">
            <div className="demo-contact-grid">
              <div className="demo-contact-info">
                <span className="demo-eyebrow">Gratuit &amp; sans engagement</span>
                <h2 id="demo-contact-title">Demander une estimation</h2>
                <p>Réponse sous 48h. Estimation gratuite et rapport détaillé du marché local.</p>

                <div className="demo-contact-channels">
                  <a href="tel:0240123456" className="demo-channel">
                    <div className="demo-channel-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Appel direct</strong>
                      <span>02 40 12 34 56</span>
                    </div>
                  </a>
                  <a href="mailto:contact@dumont-immobilier.fr" className="demo-channel">
                    <div className="demo-channel-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Email</strong>
                      <span>contact@dumont-immobilier.fr</span>
                    </div>
                  </a>
                </div>

                <p className="demo-contact-avail">
                  <span className="demo-avail-dot" aria-hidden="true" />
                  Disponible du lundi au samedi, 9h–19h
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
                    <label htmlFor="demo-type">Type de demande</label>
                    <select id="demo-type" className="demo-input demo-select">
                      <option value="">Choisir…</option>
                      <option>Vente de bien</option>
                      <option>Location longue durée</option>
                      <option>Gestion locative</option>
                      <option>Achat / Investissement</option>
                      <option>Estimation gratuite</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div className="demo-form-group">
                    <label htmlFor="demo-message">Votre projet</label>
                    <textarea
                      id="demo-message"
                      className="demo-input demo-textarea"
                      rows={4}
                      placeholder="Décrivez votre projet : type de bien, surface, localisation, objectifs…"
                    />
                  </div>
                  <button type="button" className="demo-btn demo-btn--primary demo-btn--full">
                    Envoyer ma demande
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <p className="demo-form-note">Estimation gratuite · Réponse sous 48h · Sans engagement</p>
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
                <div className="demo-brand-mono" aria-hidden="true">DI</div>
                <div>
                  <span className="demo-brand-name">Dumont Immobilier</span>
                  <span className="demo-brand-tagline">Vente · Location · Gestion · Nantes</span>
                </div>
              </div>
              <p className="demo-footer-siret">SIRET : 234 567 890 00015 — RCS Nantes</p>
              <p className="demo-footer-siret">Carte professionnelle T n° CPI 44012 2021 000 047 XXX</p>
            </div>

            <div>
              <p className="demo-footer-col-title">Nos services</p>
              <ul className="demo-footer-links">
                <li><a href="#demo-services">Vente</a></li>
                <li><a href="#demo-services">Location</a></li>
                <li><a href="#demo-services">Gestion locative</a></li>
                <li><a href="#demo-services">Estimation</a></li>
              </ul>
            </div>

            <div>
              <p className="demo-footer-col-title">Contact</p>
              <ul className="demo-footer-links">
                <li><a href="tel:0240123456">02 40 12 34 56</a></li>
                <li><a href="mailto:contact@dumont-immobilier.fr">contact@dumont-immobilier.fr</a></li>
                <li>Nantes et Grand Nantes</li>
              </ul>
            </div>
          </div>
          <div className="demo-footer-bottom">
            <p>© 2025 Dumont Immobilier · <span>Site créé par <Link href="/">Pixeloria</Link></span></p>
          </div>
        </footer>

      </div>
      {/* ── fin demo-site ── */}

      {/* ── Back to Pixeloria CTA ── */}
      <section className="demo-back-cta" aria-label="Créez votre site avec Pixeloria">
        <div className="demo-back-cta-inner">
          <div className="demo-back-cta-badge">✦ Aperçu créé par Pixeloria</div>
          <h2>Vous voulez un site comme celui-ci pour votre agence immobilière&nbsp;?</h2>
          <p>
            Cette démo illustre ce que Pixeloria peut créer pour vous — avec votre identité visuelle,
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

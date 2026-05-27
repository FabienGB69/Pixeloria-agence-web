import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Exemple de site pour artisan bâtiment — Démo Pixeloria',
  description:
    'Visualisez à quoi ressemble un site professionnel pour artisan du bâtiment créé par Pixeloria : maçon, carreleur, rénovation. Démo interactive avec toutes les sections clés.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/exemples/artisan-batiment',
    title: 'Exemple de site pour artisan bâtiment — Démo Pixeloria',
    description:
      'Visualisez à quoi ressemble un site professionnel pour artisan du bâtiment créé par Pixeloria.',
    locale: 'fr_FR',
    siteName: 'Pixeloria',
  },
};

const services = [
  {
    title: 'Maçonnerie',
    desc: 'Murs porteurs, dalles, chapes et murets. Intervention propre et chantier sécurisé.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="14" width="20" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="4" y="8" width="16" height="5" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="6" y="3" width="12" height="4" rx="1" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Carrelage',
    desc: 'Pose de carrelage sol et mur pour cuisine, salle de bain, entrée ou terrasse.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13" y="2" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="2" y="13" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13" y="13" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Rénovation',
    desc: 'Rénovation de pièces de vie avec coordination claire et planning respecté.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21V9l9-6 9 6v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="14" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Isolation',
    desc: 'Isolation des murs et combles pour améliorer le confort et réduire la facture chauffage.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12h18M3 7h18M3 17h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Plâtrerie',
    desc: 'Cloisons, doublages et enduits prêts à peindre pour un rendu net et durable.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l9 5v8l-9 5-9-5V8l9-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 3v13M3 8l9 5 9-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Dallage extérieur',
    desc: 'Création de terrasse, allée ou cour avec finitions antidérapantes et faciles d\'entretien.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2 12h20M2 17h20M7 12V7M12 12V7M17 12V7M4 7h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const realisations = [
  {
    label: 'Terrasse dallée',
    location: 'Caluire-et-Cuire',
    surface: '45 m²',
    gradientBefore: 'linear-gradient(135deg, #44403c 0%, #57534e 40%, #3d3835 100%)',
    gradientAfter: 'linear-gradient(135deg, #d97706 0%, #b45309 30%, #92400e 70%, #78350f 100%)',
    labelBefore: 'Avant — Dalle fissurée et mousseuse',
    labelAfter: 'Après — Dallage neuf point à point',
  },
  {
    label: 'Salle de bain',
    location: 'Lyon 6e',
    surface: '8 m²',
    gradientBefore: 'linear-gradient(135deg, #374151 0%, #4b5563 40%, #6b7280 100%)',
    gradientAfter: 'linear-gradient(135deg, #e7e5e4 0%, #d6d3d1 30%, #a8a29e 70%, #78716c 100%)',
    labelBefore: 'Avant — Faïence dégradée et joints noirs',
    labelAfter: 'Après — Carrelage grand format posé',
  },
  {
    label: 'Façade enduite',
    location: 'Bron',
    surface: '120 m²',
    gradientBefore: 'linear-gradient(160deg, #6b7280 0%, #9ca3af 40%, #71717a 100%)',
    gradientAfter: 'linear-gradient(160deg, #fef3c7 0%, #fde68a 30%, #fbbf24 60%, #f59e0b 100%)',
    labelBefore: 'Avant — Façade fissurée et décollée',
    labelAfter: 'Après — Enduit taloché ton pierre',
  },
  {
    label: 'Mur de clôture',
    location: 'Décines',
    surface: '30 ml',
    gradientBefore: 'linear-gradient(180deg, #78716c 0%, #57534e 50%, #44403c 100%)',
    gradientAfter: 'linear-gradient(180deg, #d6d3d1 0%, #a8a29e 40%, #78716c 100%)',
    labelBefore: 'Avant — Parpaings bruts non finalisés',
    labelAfter: 'Après — Clôture maçonnée enduite',
  },
];

const reviews = [
  {
    author: 'Michel D.',
    location: 'Lyon 3e',
    text: 'Travail très soigné pour ma terrasse de 40 m². Marc est ponctuel, propre et le résultat est parfait. Je recommande sans hésiter pour tous travaux de dallage.',
    date: 'il y a 2 semaines',
  },
  {
    author: 'Sophie L.',
    location: 'Caluire',
    text: 'Rénovation complète de notre salle de bain : dépose, évacuations, carrelage et plâtrerie. Délais tenus, équipe sérieuse. Très contente du résultat.',
    date: 'il y a 1 mois',
  },
  {
    author: 'Pierre-Antoine G.',
    location: 'Bron',
    text: 'Chantier de façade impeccable. Estimation précise, pas de mauvaise surprise. Le voisinage a même demandé la carte. Excellent artisan.',
    date: 'il y a 6 semaines',
  },
  {
    author: 'Émilie V.',
    location: 'Lyon 8e',
    text: 'Isolation des combles et pose de carrelage en une même intervention. Très professionnel, explique bien les solutions. Rapport qualité/prix excellent.',
    date: 'il y a 2 mois',
  },
  {
    author: 'Laurent B.',
    location: 'Vénissieux',
    text: 'Mur de clôture de 25 mètres réalisé en 3 jours. Finition soignée, joints bien faits. Artisan qui prend vraiment son travail au sérieux.',
    date: 'il y a 3 mois',
  },
];

const zones = [
  'Lyon', 'Villeurbanne', 'Caluire-et-Cuire', 'Bron', 'Vénissieux',
  'Décines-Charpieu', 'Meyzieu', 'Saint-Priest', 'Rillieux-la-Pape', 'Oullins',
  'Pierre-Bénite', 'Chassieu', 'Mions', 'Corbas', 'Genas',
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

export default function ArtisanBatimentDemoPage() {
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
            <Link href="/" className="demo-banner-back" aria-label="Retour à l&apos;accueil">
              ← Retour à l&apos;accueil
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          FAKE CLIENT SITE — Lebrun Bâtiment
          ══════════════════════════════════════ */}
      <div className="demo-site demo-site--artisan-clear" lang="fr">

        {/* ── Fake header ── */}
        <header className="demo-header" id="demo-top">
          <div className="demo-header-inner">
            <div className="demo-brand">
              <div className="demo-brand-mono" aria-hidden="true">LB</div>
              <div>
                <span className="demo-brand-name">Lebrun Bâtiment</span>
                <span className="demo-brand-tagline">Maçon · Carreleur · Lyon</span>
              </div>
            </div>

            <nav className="demo-nav" aria-label="Navigation du site démo">
              <a href="#demo-services">Nos services</a>
              <a href="#demo-realisations">Réalisations</a>
              <a href="#demo-avis">Avis</a>
              <a href="#demo-zone">Zone</a>
              <a href="#demo-contact">Contact</a>
            </nav>

            <a href="tel:0612345678" className="demo-phone-cta" aria-label="Appeler le 06 12 34 56 78">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="16" height="16">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              06 12 34 56 78
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
                <span>✓ Devis gratuit</span>
                <span className="demo-badge-sep" aria-hidden="true">·</span>
                <span>✓ Réponse rapide</span>
                <span className="demo-badge-sep" aria-hidden="true">·</span>
                <span>✓ Assurance décennale</span>
                <span className="demo-badge-sep" aria-hidden="true">·</span>
                <span>✓ Intervention locale</span>
              </div>

              <h1 className="demo-hero-craft">
                Vos travaux de rénovation entre de bonnes mains
              </h1>

              <p className="demo-hero-name">Lebrun Bâtiment</p>

              <p className="demo-hero-sub">
                Artisan du bâtiment, nous intervenons pour vos projets de rénovation, réparation et aménagement. Demandez un devis clair et rapide.
              </p>

              <div className="demo-hero-ctas">
                <a href="#demo-contact" className="demo-btn demo-btn--primary demo-btn--lg">
                  Demander un devis gratuit
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="tel:0612345678" className="demo-btn demo-btn--outline">
                  Appeler l&apos;artisan
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="demo-hero-card" aria-hidden="true">
              <div className="demo-hero-card-inner">
                <div className="demo-google-rating">
                  <Stars />
                  <strong>4,9 / 5</strong>
                  <span>47 avis Google</span>
                </div>
                <div className="demo-hero-card-divider" />
                <div className="demo-hero-trust-list">
                  <div className="demo-trust-row">
                    <span className="demo-trust-dot" />
                    Devis gratuit sous 48h
                  </div>
                  <div className="demo-trust-row">
                    <span className="demo-trust-dot" />
                    Disponible du lun. au sam.
                  </div>
                  <div className="demo-trust-row">
                    <span className="demo-trust-dot" />
                    Pas d&apos;avance sur travaux
                  </div>
                  <div className="demo-trust-row">
                    <span className="demo-trust-dot" />
                    Garantie décennale incluse
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
              <span className="demo-eyebrow">Prestations claires</span>
              <h2 id="demo-services-title">Nos prestations</h2>
              <p>Des travaux à prévoir ? Demandez votre devis gratuit.</p>
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
              <span className="demo-eyebrow">Preuves concrètes</span>
              <h2 id="demo-real-title">Nos réalisations</h2>
              <p>Des chantiers propres, des délais annoncés, un devis clair.</p>
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
            <strong>15 ans</strong>
            <span>d&apos;expérience</span>
          </div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat">
            <strong>200+</strong>
            <span>chantiers réalisés</span>
          </div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat">
            <strong>4,9 ★</strong>
            <span>avis Google</span>
          </div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat">
            <strong>Assuré</strong>
            <span>décennale + RC pro</span>
          </div>
        </div>

        {/* ── Avis clients ── */}
        <section className="demo-section" id="demo-avis" aria-labelledby="demo-avis-title">
          <div className="demo-container">
            <div className="demo-section-heading">
              <span className="demo-eyebrow">Avis Google</span>
              <h2 id="demo-avis-title">Besoin d&apos;un avis avant de lancer les travaux ?</h2>
              <p>Lisez les retours de clients proches de chez vous avant de demander votre devis.</p>
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
            Assurance décennale
          </div>
          <div className="demo-guarantee">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Qualibat N° 4142
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
            Devis sous 48h
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
                  Intervention autour de Lyon et dans les communes voisines.
                  Déplacement inclus dans un rayon de 40 km.
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
                  <span>Grand Lyon</span>
                  <span className="demo-map-radius">Rayon 40 km</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact / Devis ── */}
        <section className="demo-section demo-section--tinted" id="demo-contact" aria-labelledby="demo-contact-title">
          <div className="demo-container">
            <div className="demo-contact-grid">
              <div className="demo-contact-info">
                <span className="demo-eyebrow">Gratuit &amp; sans engagement</span>
                <h2 id="demo-contact-title">Demander un devis</h2>
                <p>Expliquez-nous votre projet, on vous rappelle rapidement.</p>

                <div className="demo-contact-channels">
                  <a href="tel:0612345678" className="demo-channel">
                    <div className="demo-channel-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Appel direct</strong>
                      <span>06 12 34 56 78</span>
                    </div>
                  </a>
                  <a href="mailto:contact@lebrun-batiment.fr" className="demo-channel">
                    <div className="demo-channel-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Email</strong>
                      <span>contact@lebrun-batiment.fr</span>
                    </div>
                  </a>
                </div>

                <p className="demo-contact-avail">
                  <span className="demo-avail-dot" aria-hidden="true" />
                  Disponible — réponse rapide sous 48h
                </p>
              </div>

              <div className="demo-form-wrapper">
                <form className="demo-form" aria-label="Formulaire de demande de devis">
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
                    <label htmlFor="demo-travaux">Type de travaux</label>
                    <select id="demo-travaux" className="demo-input demo-select">
                      <option value="">Choisir une prestation…</option>
                      <option>Maçonnerie</option>
                      <option>Carrelage</option>
                      <option>Rénovation complète</option>
                      <option>Isolation</option>
                      <option>Plâtrerie</option>
                      <option>Dallage extérieur</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div className="demo-form-group">
                    <label htmlFor="demo-message">Description des travaux</label>
                    <textarea
                      id="demo-message"
                      className="demo-input demo-textarea"
                      rows={4}
                      placeholder="Décrivez votre projet : surface, localisation, contraintes particulières…"
                    />
                  </div>
                  <button type="button" className="demo-btn demo-btn--primary demo-btn--full">
                    Envoyer ma demande de devis
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <p className="demo-form-note">Réponse sous 48h · Devis gratuit · Sans engagement</p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer artisan ── */}
        <footer className="demo-footer">
          <div className="demo-container demo-footer-inner">
            <div>
              <div className="demo-brand demo-brand--footer">
                <div className="demo-brand-mono" aria-hidden="true">LB</div>
                <div>
                  <span className="demo-brand-name">Lebrun Bâtiment</span>
                  <span className="demo-brand-tagline">Maçon · Carreleur · Lyon</span>
                </div>
              </div>
              <p className="demo-footer-siret">SIRET : 412 345 678 00010 — RCS Lyon</p>
              <p className="demo-footer-siret">Assurance décennale Allianz n° XXXXXXXXXXX</p>
            </div>

            <div>
              <p className="demo-footer-col-title">Prestations</p>
              <ul className="demo-footer-links">
                <li><a href="#demo-services">Maçonnerie</a></li>
                <li><a href="#demo-services">Carrelage</a></li>
                <li><a href="#demo-services">Rénovation</a></li>
                <li><a href="#demo-services">Isolation</a></li>
              </ul>
            </div>

            <div>
              <p className="demo-footer-col-title">Contact</p>
              <ul className="demo-footer-links">
                <li><a href="tel:0612345678">06 12 34 56 78</a></li>
                <li><a href="mailto:contact@lebrun-batiment.fr">contact@lebrun-batiment.fr</a></li>
                <li>Lyon et Grand Lyon</li>
              </ul>
            </div>
          </div>
          <div className="demo-footer-bottom">
            <p>© 2025 Lebrun Bâtiment · <span>Site créé par <Link href="/">Pixeloria</Link></span></p>
          </div>
        </footer>

      </div>
      {/* ── fin demo-site ── */}

      {/* ── Back to Pixeloria CTA ── */}
      <section className="demo-back-cta" aria-label="Créez votre site avec Pixeloria">
        <div className="demo-back-cta-inner">
          <div className="demo-back-cta-badge">✦ Aperçu créé par Pixeloria</div>
          <h2>Vous voulez plus d&apos;appels et plus de demandes de devis&nbsp;?</h2>
          <p>
            Cette démo illustre ce que Pixeloria peut créer pour vous — avec votre nom, vos photos,
            vos services et votre zone d&apos;intervention. Chaque site est fait sur mesure.
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

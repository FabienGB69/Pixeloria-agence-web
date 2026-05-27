import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getDemoImages } from '@/lib/demo-images';

export const metadata: Metadata = {
  title: 'Exemple de site pour entreprise de rénovation — Démo Pixeloria',
  description:
    'Visualisez à quoi ressemble un site professionnel pour entreprise de rénovation créé par Pixeloria : second œuvre, isolation, carrelage, demandes de devis.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/exemples/entreprise-renovation',
    title: 'Exemple de site pour entreprise de rénovation — Démo Pixeloria',
    description:
      'Visualisez à quoi ressemble un site professionnel pour entreprise de rénovation créé par Pixeloria.',
    locale: 'fr_FR',
    siteName: 'Pixeloria',
  },
};

const services = [
  {
    title: 'Second Œuvre',
    desc: 'Cloisons, doublages, plâtrerie, faux-plafonds. Coordination tous corps d&apos;état.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="14" width="20" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="4" y="8" width="16" height="5" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="6" y="3" width="12" height="4" rx="1" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Isolation Thermique',
    desc: 'ITE, isolation combles, sous-sol. Éligible MaPrimeRénov\' et CEE.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12h18M3 7h18M3 17h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Carrelage &amp; Revêtements',
    desc: 'Pose carrelage sol/mur, parquet, stratifié. Toutes surfaces.',
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
    title: 'Peinture Intérieure',
    desc: 'Enduits, mise en peinture, papier-peint. Finitions haut de gamme.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L3 14.67V21h6.33l10.06-10.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Menuiserie Intérieure',
    desc: 'Portes, placards, escaliers, dressing sur mesure.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="8" height="18" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13" y="3" width="8" height="18" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Plomberie &amp; Électricité',
    desc: 'Mise aux normes, remplacement équipements, coordination sous-traitants.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const realisations = [
  {
    label: 'Salon réaménagé',
    location: 'Mérignac',
    surface: '45 m²',
    gradientBefore: 'linear-gradient(135deg, #78716c 0%, #57534e 40%, #44403c 100%)',
    gradientAfter: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 40%, #fbbf24 100%)',
    labelBefore: 'Avant — Papier-peint désuet et moquette',
    labelAfter: 'Après — Peinture moderne, parquet posé',
  },
  {
    label: 'Salle de bain rénovée',
    location: 'Bordeaux Caudéran',
    surface: '7 m²',
    gradientBefore: 'linear-gradient(135deg, #374151 0%, #4b5563 40%, #6b7280 100%)',
    gradientAfter: 'linear-gradient(135deg, #f5f5f4 0%, #e7e5e4 30%, #d6d3d1 100%)',
    labelBefore: 'Avant — Faïence ancienne, robinetterie usée',
    labelAfter: 'Après — Carrelage grand format, douche à l\'italienne',
  },
  {
    label: 'Cuisine refaite',
    location: 'Pessac',
    surface: '14 m²',
    gradientBefore: 'linear-gradient(135deg, #6b7280 0%, #9ca3af 40%, #71717a 100%)',
    gradientAfter: 'linear-gradient(135deg, #d4a15b 0%, #b8783e 40%, #92400e 100%)',
    labelBefore: 'Avant — Meubles datés, carrelage fissuré',
    labelAfter: 'Après — Cuisine neuve, plan de travail béton',
  },
  {
    label: 'Combles aménagés',
    location: 'Talence',
    surface: '35 m²',
    gradientBefore: 'linear-gradient(180deg, #292524 0%, #3d3834 50%, #44403c 100%)',
    gradientAfter: 'linear-gradient(180deg, #fbbf24 0%, #f59e0b 40%, #d97706 100%)',
    labelBefore: 'Avant — Combles bruts non isolés',
    labelAfter: 'Après — Suite parentale aménagée',
  },
];

const reviews = [
  {
    author: 'Nathalie P.',
    location: 'Bordeaux',
    text: 'Rénovation complète de notre appartement de 75 m². Moreau Rénovation a géré tous les corps de métier, respecté les délais et le budget. Résultat impeccable.',
    date: 'il y a 3 semaines',
  },
  {
    author: 'François D.',
    location: 'Mérignac',
    text: 'Isolation thermique + peinture de notre maison. Travail très propre, les ouvriers laissaient le chantier rangé chaque soir. Prix juste et devis précis.',
    date: 'il y a 2 mois',
  },
  {
    author: 'Claire & Stéphane M.',
    location: 'Pessac',
    text: 'Cuisine et salle de bain entièrement refaites en même temps. Planning bien géré, pas de mauvaise surprise. On est ravis du résultat final.',
    date: 'il y a 6 semaines',
  },
  {
    author: 'Bruno L.',
    location: 'Talence',
    text: 'Aménagement de combles de 35 m². Excellent conseil sur la disposition, finition parfaite. L\'équipe est ponctuelle et professionnelle.',
    date: 'il y a 3 mois',
  },
  {
    author: 'Audrey V.',
    location: 'Bordeaux Caudéran',
    text: 'Second œuvre complet après un dégât des eaux. Tout a été géré rapidement, du plâtre à la peinture. Vraiment merci !',
    date: 'il y a 4 mois',
  },
];

const zones = [
  'Bordeaux', 'Mérignac', 'Pessac', 'Talence', 'Bègles',
  'Villenave-d\'Ornon', 'Gradignan', 'Le Bouscat', 'Eysines', 'Bruges',
  'Saint-Médard-en-Jalles', 'Martignas-sur-Jalle', 'Blanquefort', 'Cenon', 'Lormont',
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

export default function EntrepriseRenovationDemoPage() {
  const demoImages = getDemoImages('entreprise-renovation');
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
          FAKE CLIENT SITE — Moreau Rénovation
          ══════════════════════════════════════ */}
      <div
        className="demo-site demo-site--artisan-clear"
        lang="fr"
        style={{ '--dz-primary': '#D97706', '--dz-primary-dark': '#B45309' } as React.CSSProperties}
      >

        {/* ── Fake header ── */}
        <header className="demo-header" id="demo-top">
          <div className="demo-header-inner">
            <div className="demo-brand">
              <div className="demo-brand-mono" aria-hidden="true">MR</div>
              <div>
                <span className="demo-brand-name">Moreau Rénovation</span>
                <span className="demo-brand-tagline">Rénovation · Second œuvre · Bordeaux</span>
              </div>
            </div>

            <nav className="demo-nav" aria-label="Navigation du site démo">
              <a href="#demo-services">Prestations</a>
              <a href="#demo-realisations">Réalisations</a>
              <a href="#demo-avis">Avis</a>
              <a href="#demo-zone">Zone</a>
              <a href="#demo-contact">Contact</a>
            </nav>

            <a href="tel:0556789012" className="demo-phone-cta" aria-label="Appeler le 05 56 78 90 12">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="16" height="16">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              05 56 78 90 12
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
                <span>✓ RGE certifié</span>
                <span className="demo-badge-sep" aria-hidden="true">·</span>
                <span>✓ Assurance décennale</span>
                <span className="demo-badge-sep" aria-hidden="true">·</span>
                <span>✓ 18 ans d&apos;expérience</span>
              </div>

              <h1 className="demo-hero-craft">
                Rénovation Intérieure · Second Œuvre
              </h1>

              <p className="demo-hero-name">Moreau Rénovation</p>

              <p className="demo-hero-sub">
                Entreprise de rénovation à Bordeaux depuis 2007. Coordination complète de vos travaux pour des résultats soignés.
              </p>

              <div className="demo-hero-visual">
                <Image src={demoImages.hero.src} alt={demoImages.hero.alt} width={900} height={560} className="demo-hero-inline-image" />
              </div>

              <div className="demo-hero-ctas">
                <a href="#demo-contact" className="demo-btn demo-btn--primary demo-btn--lg">
                  Demander un devis gratuit
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="tel:0556789012" className="demo-btn demo-btn--outline">
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
                  <span>62 avis Google</span>
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
              <span className="demo-eyebrow">Ce que nous faisons</span>
              <h2 id="demo-services-title">Nos prestations</h2>
              <p>Entreprise de rénovation générale intervenant sur tous vos travaux de second œuvre, isolation, revêtements et finitions intérieures.</p>
            </div>

            <div className="demo-services-grid">
              {services.map((s) => (
                <div key={s.title} className="demo-service-card">
                  <div className="demo-service-icon">{s.icon}</div>
                  <h3 dangerouslySetInnerHTML={{ __html: s.title }} />
                  <p dangerouslySetInnerHTML={{ __html: s.desc }} />
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

        {/* ── Réalisations ── */}
        <section className="demo-section demo-section--tinted" id="demo-realisations" aria-labelledby="demo-real-title">
          <div className="demo-container">
            <div className="demo-section-heading">
              <span className="demo-eyebrow">Chantiers terminés</span>
              <h2 id="demo-real-title">Nos réalisations</h2>
              <p>Photos avant / après de chantiers récents dans la métropole de Bordeaux. Chaque projet est unique — voici quelques exemples concrets.</p>
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
            <strong>18 ans</strong>
            <span>d&apos;expérience</span>
          </div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat">
            <strong>350+</strong>
            <span>chantiers réalisés</span>
          </div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat">
            <strong>4,8 ★</strong>
            <span>avis Google</span>
          </div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat">
            <strong>RGE</strong>
            <span>certifié</span>
          </div>
        </div>

        {/* ── Avis clients ── */}
        <section className="demo-section" id="demo-avis" aria-labelledby="demo-avis-title">
          <div className="demo-container">
            <div className="demo-section-heading">
              <span className="demo-eyebrow">Avis Google</span>
              <h2 id="demo-avis-title">Ils nous font confiance</h2>
              <p>62 avis clients vérifiés sur Google — note moyenne 4,8 / 5.</p>
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
            Certification RGE
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
                  Artisan basé à Bordeaux, j&apos;interviens dans toute la métropole de Bordeaux et les communes limitrophes.
                  Déplacement inclus dans un rayon de 40 km autour de Bordeaux.
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
                  <span>Bordeaux Métropole</span>
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
                <p>Réponse sous 48h. Devis détaillé, clair et sans surprise.</p>

                <div className="demo-contact-channels">
                  <a href="tel:0556789012" className="demo-channel">
                    <div className="demo-channel-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Appel direct</strong>
                      <span>05 56 78 90 12</span>
                    </div>
                  </a>
                  <a href="mailto:contact@moreau-renovation.fr" className="demo-channel">
                    <div className="demo-channel-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Email</strong>
                      <span>contact@moreau-renovation.fr</span>
                    </div>
                  </a>
                </div>

                <p className="demo-contact-avail">
                  <span className="demo-avail-dot" aria-hidden="true" />
                  Disponible — on vous rappelle rapidement
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
                      <input id="demo-tel" type="tel" className="demo-input" placeholder="05 56 78 90 12" />
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
                      <option>Second œuvre</option>
                      <option>Isolation</option>
                      <option>Carrelage &amp; revêtements</option>
                      <option>Peinture</option>
                      <option>Menuiserie</option>
                      <option>Rénovation complète</option>
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

        {/* ── Footer ── */}
        <footer className="demo-footer">
          <div className="demo-container demo-footer-inner">
            <div>
              <div className="demo-brand demo-brand--footer">
                <div className="demo-brand-mono" aria-hidden="true">MR</div>
                <div>
                  <span className="demo-brand-name">Moreau Rénovation</span>
                  <span className="demo-brand-tagline">Rénovation · Second œuvre · Bordeaux</span>
                </div>
              </div>
              <p className="demo-footer-siret">SIRET : 534 678 901 00023 — RCS Bordeaux</p>
              <p className="demo-footer-siret">Assurance décennale Maaf n° XXXXXXXXXXX</p>
            </div>

            <div>
              <p className="demo-footer-col-title">Prestations</p>
              <ul className="demo-footer-links">
                <li><a href="#demo-services">Second œuvre</a></li>
                <li><a href="#demo-services">Isolation</a></li>
                <li><a href="#demo-services">Carrelage</a></li>
                <li><a href="#demo-services">Peinture</a></li>
              </ul>
            </div>

            <div>
              <p className="demo-footer-col-title">Contact</p>
              <ul className="demo-footer-links">
                <li><a href="tel:0556789012">05 56 78 90 12</a></li>
                <li><a href="mailto:contact@moreau-renovation.fr">contact@moreau-renovation.fr</a></li>
                <li>Bordeaux et Bordeaux Métropole</li>
              </ul>
            </div>
          </div>
          <div className="demo-footer-bottom">
            <p>© 2025 Moreau Rénovation · <span>Site créé par <Link href="/">Pixeloria</Link></span></p>
          </div>
        </footer>

      </div>
      {/* ── fin demo-site ── */}

      {/* ── Back to Pixeloria CTA ── */}
      <section className="demo-back-cta" aria-label="Créez votre site avec Pixeloria">
        <div className="demo-back-cta-inner">
          <div className="demo-back-cta-badge">✦ Aperçu créé par Pixeloria</div>
          <h2>Vous voulez un site comme celui-ci pour votre entreprise&nbsp;?</h2>
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

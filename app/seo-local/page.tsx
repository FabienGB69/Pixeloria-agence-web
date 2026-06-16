import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'SEO local pour artisans, TPE et PME | Pixeloria',
  description:
    'Référencement local Google pour artisans, TPE et PME : optimisation Google Business Profile, mots-clés locaux et visibilité dans votre zone d\'intervention.',
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO local pour TPE et PME',
  provider: {
    '@type': 'Organization',
    name: 'Pixeloria',
    url: 'https://pixeloria.fr',
  },
  description:
    'Référencement local Google pour artisans, TPE et PME. Optimisation Google Business Profile, pages de zones d\'intervention et suivi mensuel de positionnement.',
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
  serviceType: 'Référencement local SEO',
};

export default function SeoLocalPage() {
  return (
    <>
      <JsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <Header />
      <main>

        {/* 1. Hero */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <nav className="breadcrumb" aria-label="Fil d'Ariane">
                <Link href="/">Accueil</Link>
                <span aria-hidden="true"> › </span>
                <span>SEO local</span>
              </nav>
              <span className="eyebrow">Référencement local</span>
              <h1>SEO local pour artisans, TPE et PME</h1>
              <p className="page-hero-sub">
                Être trouvé sur Google par vos clients locaux — sans attendre des mois.
              </p>
              <div className="page-hero-actions">
                <Link href="/#contact" className="btn btn-primary btn-lg">
                  Demander un audit gratuit
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/offres" className="btn btn-secondary btn-lg">
                  Voir nos offres
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Pour qui ? */}
        <section className="section section-tinted">
          <div className="container">
            <h2 className="section-heading">
              Le SEO local concerne tous les professionnels de proximité
            </h2>
            <p className="section-sub">
              Que vous soyez artisan, professionnel de santé ou commerçant, vos clients vous cherchent d&apos;abord sur Google avant de vous appeler.
            </p>
            <div className="artisan-types-grid">
              <span className="artisan-type-tag">Plombier</span>
              <span className="artisan-type-tag">Électricien</span>
              <span className="artisan-type-tag">Menuisier</span>
              <span className="artisan-type-tag">Peintre</span>
              <span className="artisan-type-tag">Restaurant</span>
              <span className="artisan-type-tag">Coiffeur</span>
              <span className="artisan-type-tag">Kinésithérapeute</span>
              <span className="artisan-type-tag">Comptable</span>
              <span className="artisan-type-tag">Agent immobilier</span>
              <span className="artisan-type-tag">Toute TPE locale</span>
            </div>
          </div>
        </section>

        {/* 3. Ce que le SEO local améliore concrètement */}
        <section className="section">
          <div className="container">
            <h2 className="section-heading">Ce que le SEO local améliore concrètement</h2>
            <p className="section-sub">
              Des actions ciblées qui augmentent votre visibilité là où vos clients vous cherchent.
            </p>
            <div className="benefits-grid">
              <div className="benefit-card">
                <span className="benefit-num">01</span>
                <h3>Apparaître dans les recherches locales</h3>
                <p>
                  Quand quelqu&apos;un cherche votre métier + votre ville, votre site doit être visible. Nous optimisons votre présence pour ces requêtes à fort potentiel.
                </p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">02</span>
                <h3>Google Business Profile optimisé</h3>
                <p>
                  Fiche Google bien renseignée = plus d&apos;appels directs et d&apos;itinéraires. Nous configurons et maintenons votre profil pour maximiser sa visibilité.
                </p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">03</span>
                <h3>Pages de service géolocalisées</h3>
                <p>
                  Des pages dédiées à vos zones d&apos;intervention améliorent votre positionnement local et permettent aux clients de vous trouver dans chaque secteur.
                </p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">04</span>
                <h3>Avis clients mis en valeur</h3>
                <p>
                  Les avis Google influencent à la fois le référencement et la décision d&apos;achat. Nous mettons en place une stratégie pour collecter et valoriser vos avis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Ce que comprend le SEO local Pixeloria */}
        <section className="section section-tinted">
          <div className="container">
            <h2 className="section-heading">Ce que comprend le SEO local Pixeloria</h2>
            <p className="section-sub">
              Un accompagnement complet, de l&apos;audit initial au suivi mensuel de vos positions.
            </p>
            <div className="includes-grid">
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">🗺️</span>
                <span>Optimisation Google Business Profile</span>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">🔍</span>
                <span>Mots-clés locaux ciblés</span>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">📄</span>
                <span>Pages de zones d&apos;intervention</span>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">⭐</span>
                <span>Stratégie avis clients</span>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">🏷️</span>
                <span>Balisage schema.org local</span>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">📈</span>
                <span>Suivi de positionnement mensuel</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Ce que le SEO local ne garantit pas */}
        <section className="section">
          <div className="container">
            <h2 className="section-heading">Ce que nous ne promettons pas</h2>
            <div
              className="page-cta-block"
              style={{ textAlign: 'left', maxWidth: '720px', margin: '2rem 0 0' }}
            >
              <p>
                Aucune agence sérieuse ne peut garantir la première position sur Google. Le SEO local
                améliore votre visibilité, mais les résultats dépendent de votre secteur, de la
                concurrence locale et de la régularité des actions menées.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Nous vous donnons une estimation honnête dès l&apos;audit.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Tarifs */}
        <section className="section section-tinted">
          <div className="container">
            <h2 className="section-heading">SEO local inclus dans nos offres</h2>
            <p className="section-sub">
              Le référencement local est intégré à notre Option Visibilité mensuelle, sans supplément.
            </p>
            <div className="pricing-cards">
              <div className="pricing-card pricing-card--featured">
                <span className="pricing-badge">Offre principale</span>
                <span className="pricing-label">Site Artisan</span>
                <div className="pricing-price">199 <span>€ TTC</span></div>
                <p className="pricing-sublabel">Paiement unique — livraison en 72 h</p>
                <ul>
                  <li>Site vitrine jusqu&apos;à 3 pages</li>
                  <li>Design responsive sur-mesure</li>
                  <li>Formulaire de contact</li>
                  <li>Mise en ligne incluse</li>
                </ul>
                <Link href="/offres" className="btn btn-primary">
                  Voir le détail
                </Link>
              </div>
              <div className="pricing-card">
                <span className="pricing-label">Option Visibilité</span>
                <div className="pricing-price">89 <span>€/mois</span></div>
                <p className="pricing-sublabel">Maintenance, modifications et SEO local inclus</p>
                <ul>
                  <li>Optimisation Google Business Profile</li>
                  <li>Mots-clés locaux ciblés</li>
                  <li>Maintenance mensuelle</li>
                  <li>Support réactif</li>
                </ul>
                <Link href="/offres" className="btn btn-secondary">
                  Voir le détail
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CTA final */}
        <section className="section">
          <div className="container">
            <div className="page-cta-block">
              <h2>Obtenez un audit SEO local gratuit</h2>
              <p>
                On analyse votre visibilité actuelle et on vous dit exactement ce qu&apos;on peut améliorer — sans engagement.
              </p>
              <Link href="/#contact" className="btn btn-primary btn-lg">
                Demander mon audit gratuit
                <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <p className="page-cta-note">
                📞 06 00 00 00 00 &nbsp;·&nbsp; ✉️ contact@pixeloria.fr
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

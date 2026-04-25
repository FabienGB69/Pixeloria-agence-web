import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Création de site internet pour TPE et PME | Pixeloria',
  description:
    'Pixeloria crée des sites internet professionnels pour TPE et PME. Visibilité locale, génération de contacts, design sur-mesure. À partir de 490 € TTC, livré en 5 à 10 jours.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/creation-site-internet-tpe-pme',
    title: 'Création de site internet pour TPE et PME | Pixeloria',
    description:
      'Site internet professionnel pour TPE et PME. Responsive, SEO local, formulaire de contact. À partir de 490 € TTC.',
    locale: 'fr_FR',
    siteName: 'Pixeloria',
  },
};

const sectors = [
  'Bâtiment & travaux',
  'Commerce & retail',
  'Restauration & traiteur',
  'Services aux entreprises',
  'Santé & bien-être',
  'Immobilier',
  'Formation & coaching',
  'Professions libérales',
  'Artisanat & création',
  'Autres TPE/PME locales',
];

const benefits = [
  {
    title: 'Crédibilité immédiate',
    desc: 'Un site professionnel rassure vos prospects dès le premier clic. Sans site, vous perdez des clients avant même d\'avoir pu les convaincre.',
  },
  {
    title: 'Visibilité locale sur Google',
    desc: 'Être trouvé par vos clients dans votre zone d\'intervention. Un site optimisé localement vous place devant vos concurrents absents du web.',
  },
  {
    title: 'Génération de contacts',
    desc: 'Formulaire, téléphone, WhatsApp — chaque visiteur peut vous contacter simplement, depuis n\'importe quel appareil, à n\'importe quelle heure.',
  },
  {
    title: 'Image cohérente avec votre activité',
    desc: 'Un design sur-mesure qui reflète votre positionnement, vos valeurs et votre secteur. Pas un template générique, mais un site qui vous ressemble.',
  },
];

export default function CreationSiteTpePmePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Création de site internet pour TPE et PME',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
      telephone: '+33786125313',
      email: 'contact@pixeloria.fr',
    },
    description: 'Création de sites internet professionnels pour TPE et PME de tous secteurs d\'activité.',
    areaServed: 'France',
    offers: [
      { '@type': 'Offer', name: 'Site Essentiel', price: '490', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Site Sérénité', price: '89', priceCurrency: 'EUR', priceSpecification: { '@type': 'UnitPriceSpecification', referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitCode: 'MON' } } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <JsonLd />
      <Header />
      <main>

        {/* Hero */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <nav className="breadcrumb" aria-label="Fil d'Ariane">
                <Link href="/">Accueil</Link>
                <span aria-hidden="true"> › </span>
                <span>Création site TPE PME</span>
              </nav>
              <span className="eyebrow">TPE &amp; PME</span>
              <h1>Création de site internet pour TPE et PME</h1>
              <p className="page-hero-sub">
                Un site professionnel, lisible sur mobile, optimisé pour votre visibilité
                locale et conçu pour générer des contacts qualifiés. À partir de
                490&nbsp;€&nbsp;TTC ou 89&nbsp;€/mois.
              </p>
              <div className="page-hero-actions">
                <a href="/#contact" className="btn btn-primary">
                  Demander un audit gratuit
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <Link href="/offres" className="btn btn-secondary">Voir les offres</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pour quels secteurs ? */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Votre secteur</span>
              <h2>Un site adapté à votre secteur d&apos;activité</h2>
              <p className="section-sub">
                Pixeloria accompagne les TPE et PME de tous secteurs qui veulent
                une présence en ligne professionnelle et efficace.
              </p>
            </div>
            <ul className="artisan-types-grid">
              {sectors.map((sector) => (
                <li key={sector} className="artisan-type-tag">{sector}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bénéfices */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Pourquoi un site internet&nbsp;?</span>
              <h2>Ce qu&apos;un bon site apporte à votre TPE / PME</h2>
            </div>
            <div className="benefits-grid">
              {benefits.map((b, i) => (
                <div key={i} className="benefit-card">
                  <span className="benefit-num">0{i + 1}</span>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ce qui est inclus */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Ce qui est inclus</span>
              <h2>Un site vitrine pensé pour votre entreprise</h2>
              <p className="section-sub">
                Chaque site créé par Pixeloria intègre les éléments essentiels pour
                présenter votre activité et faciliter les prises de contact.
              </p>
            </div>
            <div className="includes-grid">
              {[
                { icon: '🖥️', label: 'Design sur-mesure', desc: 'Un design unique qui reflète votre identité visuelle et votre secteur.' },
                { icon: '📱', label: 'Responsive mobile-first', desc: 'Lisible et agréable sur mobile, tablette et ordinateur.' },
                { icon: '📞', label: 'Bouton d\'appel & WhatsApp', desc: 'Un clic suffit pour vous contacter depuis n\'importe quel mobile.' },
                { icon: '📋', label: 'Formulaire de contact', desc: 'Les demandes arrivent directement dans votre boîte email.' },
                { icon: '🔍', label: 'SEO local de base', desc: 'Votre site est optimisé pour être trouvé dans votre zone géographique.' },
                { icon: '🔒', label: 'Sécurité & hébergement', desc: 'Certificat SSL, hébergement fiable et performant inclus.' },
              ].map((item) => (
                <div key={item.label} className="include-item">
                  <span className="include-icon" aria-hidden="true">{item.icon}</span>
                  <strong>{item.label}</strong>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Tarifs</span>
              <h2>Choisissez votre formule</h2>
              <p className="section-sub">
                Deux approches selon votre besoin : un site livré en une fois, ou un
                accompagnement mensuel avec maintenance et SEO local.
              </p>
            </div>
            <div className="pricing-cards">
              <div className="pricing-card">
                <p className="pricing-label">Site Essentiel</p>
                <p className="pricing-price">490 € <span>TTC</span></p>
                <p className="pricing-sublabel">Paiement unique — sans abonnement</p>
                <ul>
                  <li>Jusqu&apos;à 3 pages</li>
                  <li>Design responsive sur-mesure</li>
                  <li>Formulaire de contact</li>
                  <li>Bouton d&apos;appel &amp; WhatsApp</li>
                  <li>Mise en ligne incluse</li>
                  <li>Optimisation technique de base</li>
                </ul>
                <a href="/#contact" className="btn btn-secondary">Choisir Site Essentiel →</a>
              </div>
              <div className="pricing-card pricing-card--featured">
                <span className="pricing-badge">Recommandé</span>
                <p className="pricing-label">Site Sérénité</p>
                <p className="pricing-price">89 € <span>TTC / mois</span></p>
                <p className="pricing-sublabel">Engagement recommandé : 12 mois</p>
                <ul>
                  <li>Jusqu&apos;à 5 pages sur-mesure</li>
                  <li>Maintenance &amp; mises à jour incluses</li>
                  <li>Hébergement + domaine offerts</li>
                  <li>SEO local de base inclus</li>
                  <li>Formulaire de contact avancé</li>
                  <li>Bouton d&apos;appel &amp; WhatsApp</li>
                  <li>Support WhatsApp sous 24 h</li>
                </ul>
                <a href="/#contact" className="btn btn-primary">Choisir Site Sérénité →</a>
              </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <Link href="/offres" style={{ color: 'var(--primary)', textDecoration: 'underline', fontSize: '0.9rem' }}>
                Voir toutes les offres dont Site Croissance à 159 €/mois →
              </Link>
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="section section-tinted">
          <div className="container">
            <div className="page-cta-block">
              <h2>Votre site TPE/PME en 5 à 10 jours</h2>
              <p>
                Décrivez-nous votre activité et vos objectifs. Nous vous proposons
                une solution adaptée à votre secteur et à votre budget, sans engagement.
              </p>
              <a href="/#contact" className="btn btn-primary btn-lg">
                Demander un audit gratuit
                <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <p className="page-cta-note">
                <a href="tel:+33786125313">07 86 12 53 13</a>
                {' · '}
                <a href="mailto:contact@pixeloria.fr">contact@pixeloria.fr</a>
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import { hreflangLanguages } from '@/lib/hreflang';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Création de site internet pour artisans et TPE | Pixeloria',
  description:
    'Pixeloria crée des sites internet professionnels pour artisans et TPE. Visibilité locale, génération de contacts, design sur-mesure. Site Artisan à 199 € TTC, livré en 72 h.',
  alternates: {
    canonical: 'https://pixeloria.fr/creation-site-internet-tpe-pme',
    languages: hreflangLanguages('/creation-site-internet-tpe-pme'),
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/creation-site-internet-tpe-pme',
    title: 'Création de site internet pour artisans et TPE | Pixeloria',
    description:
      'Site internet professionnel pour artisans et TPE. Responsive, SEO local, formulaire de contact. Site Artisan à 199 € TTC, livré en 72 h.',
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
  'Autres TPE locales',
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
    name: 'Création de site internet pour artisans et TPE',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
      telephone: '+33601777633',
      email: 'contact@pixeloria.fr',
    },
    description: 'Création de sites internet professionnels pour artisans et TPE de tous secteurs d\'activité.',
    areaServed: 'France',
    offers: [
      { '@type': 'Offer', name: 'Site Artisan', price: '199', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Option Visibilité', price: '49', priceCurrency: 'EUR', priceSpecification: { '@type': 'UnitPriceSpecification', referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitCode: 'MON' } } },
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
                <span>Création site artisans et TPE</span>
              </nav>
              <span className="eyebrow">Artisans et TPE</span>
              <h1>Création de site internet pour artisans et TPE</h1>
              <p className="page-hero-sub">
                Un site professionnel, lisible sur mobile, optimisé pour votre visibilité
                locale et conçu pour générer des contacts qualifiés. Site Artisan
                à 199&nbsp;€&nbsp;TTC, livré en 72 h.
              </p>
              <div className="page-hero-actions">
                <Link href="/#contact" className="btn btn-primary">
                  Demander un audit gratuit
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
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
                Pixeloria accompagne les artisans et TPE de tous secteurs qui veulent
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
              <h2>Ce qu&apos;un bon site apporte à votre activité</h2>
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
              <h2>Une offre simple, sans surprise</h2>
              <p className="section-sub">
                Un site livré en 72 h, paiement unique. Une option mensuelle pour maintenir
                votre visibilité et garder votre site à jour.
              </p>
            </div>
            <div className="pricing-cards">
              <div className="pricing-card pricing-card--featured">
                <span className="pricing-badge">Offre principale</span>
                <p className="pricing-label">Site Artisan</p>
                <p className="pricing-price">199 € <span>TTC</span></p>
                <p className="pricing-sublabel">Paiement unique — livraison en 72 h</p>
                <ul>
                  <li>Jusqu&apos;à 3 pages</li>
                  <li>Design responsive sur-mesure</li>
                  <li>Formulaire de contact</li>
                  <li>Bouton d&apos;appel et WhatsApp</li>
                  <li>Mise en ligne incluse</li>
                  <li>Optimisation technique de base</li>
                </ul>
                <Link href="/#contact" className="btn btn-primary">Choisir Site Artisan →</Link>
              </div>
              <div className="pricing-card">
                <p className="pricing-label">Option Visibilité</p>
                <p className="pricing-price">49 € <span>TTC / mois</span></p>
                <p className="pricing-sublabel">Maintenance, modifications et suivi SEO</p>
                <ul>
                  <li>Maintenance et mises à jour incluses</li>
                  <li>Hébergement + domaine offerts</li>
                  <li>SEO local de base inclus</li>
                  <li>Formulaire de contact avancé</li>
                  <li>Bouton d&apos;appel et WhatsApp</li>
                  <li>Support WhatsApp sous 24 h</li>
                </ul>
                <Link href="/#contact" className="btn btn-secondary">Ajouter l&apos;Option Visibilité →</Link>
              </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <Link href="/offres" style={{ color: 'var(--primary)', textDecoration: 'underline', fontSize: '0.9rem' }}>
                Voir le détail de nos offres →
              </Link>
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="section section-tinted">
          <div className="container">
            <div className="page-cta-block">
              <h2>Votre site artisan en 72 h</h2>
              <p>
                Décrivez-nous votre activité et vos objectifs. Nous vous proposons
                une solution adaptée à votre secteur et à votre budget, sans engagement.
              </p>
              <Link href="/#contact" className="btn btn-primary btn-lg">
                Demander un audit gratuit
                <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <p className="page-cta-note">
                <a href="tel:+33601777633">06 01 77 76 33</a>
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

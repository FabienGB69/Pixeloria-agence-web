import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Création de site internet pour artisans | Pixeloria',
  description:
    'Pixeloria crée des sites internet professionnels pour artisans du bâtiment, plombiers, électriciens, peintres, menuisiers et artisans locaux. Design responsive, SEO local de base. Site Artisan à 199 € TTC, livré en 72 h.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/creation-site-internet-artisan',
    title: 'Création de site internet pour artisans | Pixeloria',
    description:
      'Site internet professionnel pour artisans. Responsive, SEO local, formulaire de contact. Site Artisan à 199 € TTC, livré en 72 h.',
    locale: 'fr_FR',
    siteName: 'Pixeloria',
  },
};

const artisanTypes = [
  'Plombier', 'Électricien', 'Maçon', 'Peintre', 'Menuisier',
  'Charpentier', 'Carreleur', 'Plaquiste', 'Couvreur', 'Serrurier',
  'Climaticien', 'Chauffagiste',
];

const benefits = [
  {
    title: 'Être trouvé par vos clients locaux',
    desc: 'Un client qui cherche un plombier ou un électricien dans sa ville commence souvent par Google. Un site optimisé localement vous donne une visibilité concrète.',
  },
  {
    title: 'Présenter vos services clairement',
    desc: 'Vos zones d\'intervention, vos spécialités, vos tarifs indicatifs, vos certifications — tout ce qui rassure un prospect avant de vous appeler.',
  },
  {
    title: 'Recevoir des demandes de contact',
    desc: 'Formulaire, bouton d\'appel direct, bouton WhatsApp — chaque visiteur a un moyen simple de vous contacter, depuis n\'importe quel appareil.',
  },
  {
    title: 'Valoriser vos réalisations',
    desc: 'Une galerie photo de vos chantiers, c\'est la preuve de votre savoir-faire. Bien plus convaincante qu\'un simple texte.',
  },
];

export default function CreationSiteArtisanPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Création de site internet pour artisans',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
      telephone: '+33786125313',
      email: 'contact@pixeloria.fr',
    },
    description: 'Création de sites internet professionnels pour artisans du bâtiment et indépendants locaux.',
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
                <span>Création de site internet pour artisans</span>
              </nav>
              <span className="eyebrow">Artisans et indépendants</span>
              <h1>Création de site internet pour artisans</h1>
              <p className="page-hero-sub">
                Un site professionnel, lisible sur mobile et optimisé pour être trouvé par vos
                clients locaux. Formulaire de contact, bouton d&apos;appel, galerie de réalisations.
                Site Artisan à 199&nbsp;€&nbsp;TTC, livré en 72 h. Option Visibilité à 49&nbsp;€/mois.
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

        {/* Pour quels artisans ? */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Votre métier</span>
              <h2>Un site adapté à votre activité d&apos;artisan</h2>
              <p className="section-sub">
                Pixeloria accompagne les artisans de tous corps de métier qui veulent
                une présence en ligne professionnelle sans gros investissement.
              </p>
            </div>
            <ul className="artisan-types-grid">
              {artisanTypes.map((type) => (
                <li key={type} className="artisan-type-tag">{type}</li>
              ))}
              <li className="artisan-type-tag artisan-type-tag--more">Et bien d&apos;autres…</li>
            </ul>
          </div>
        </section>

        {/* Pourquoi un site ? */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Pourquoi un site internet&nbsp;?</span>
              <h2>Ce qu&apos;un bon site apporte à un artisan</h2>
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

        {/* Ce qu'inclut le site */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Ce qui est inclus</span>
              <h2>Un site vitrine pensé pour les artisans</h2>
              <p className="section-sub">
                Chaque site créé par Pixeloria intègre les éléments essentiels pour
                présenter votre activité et faciliter les prises de contact.
              </p>
            </div>
            <div className="includes-grid">
              {[
                { icon: '📱', label: 'Design responsive', desc: 'Lisible sur mobile, tablette et ordinateur.' },
                { icon: '📞', label: 'Bouton d\'appel direct', desc: 'Un clic suffit pour vous appeler depuis un mobile.' },
                { icon: '💬', label: 'Formulaire de contact', desc: 'Les demandes arrivent directement par email.' },
                { icon: '📸', label: 'Galerie réalisations', desc: 'Mettez en avant vos chantiers avec des photos.' },
                { icon: '⭐', label: 'Avis Google intégrés', desc: 'Affichez vos avis clients pour rassurer les prospects.' },
                { icon: '📍', label: 'SEO local de base', desc: 'Votre site est optimisé pour votre zone d\'intervention.' },
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

        {/* Offres */}
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
                  <li>Bouton d&apos;appel direct</li>
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
                  <li>Galerie réalisations</li>
                  <li>Avis Google intégrés</li>
                  <li>SEO local de base inclus</li>
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
              <h2>Prêt à créer votre site&nbsp;?</h2>
              <p>
                Dites-nous en quelques mots votre activité et votre zone d&apos;intervention.
                Nous vous répondons rapidement avec une première orientation.
              </p>
              <Link href="/#contact" className="btn btn-primary btn-lg">
                Demander un audit gratuit
                <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
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

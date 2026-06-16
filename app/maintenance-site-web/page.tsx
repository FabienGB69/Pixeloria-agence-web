import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Maintenance de site internet pour TPE, PME et artisans | Pixeloria',
  description:
    'Pixeloria assure la maintenance de votre site internet : mises à jour, sécurité, hébergement, sauvegardes et support réactif WhatsApp. À partir de 89 €/mois.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/maintenance-site-web',
    title: 'Maintenance de site internet pour TPE, PME et artisans | Pixeloria',
    description:
      'Maintenance site internet : mises à jour, sécurité, hébergement, support WhatsApp sous 24 h. À partir de 89 €/mois.',
    locale: 'fr_FR',
    siteName: 'Pixeloria',
  },
};

const signals = [
  'Un site non maintenu devient lent et vulnérable',
  'Les plugins et CMS obsolètes sont une porte d\'entrée pour les hackers',
  'Les contenus figés nuisent au référencement naturel (SEO)',
  'Un site planté un vendredi soir sans support, c\'est du chiffre d\'affaires perdu',
  'Le domaine et l\'hébergement peuvent expirer sans prévenir',
  'Les formulaires de contact tombent en panne silencieusement',
];

const benefits = [
  {
    title: 'Mises à jour régulières',
    desc: 'CMS, plugins, dépendances — tout est maintenu à jour pour garantir performances et compatibilité.',
  },
  {
    title: 'Sécurité & sauvegardes',
    desc: 'Sauvegardes automatiques, certificat SSL actif, surveillance continue. Votre site est protégé.',
  },
  {
    title: 'Hébergement & domaine inclus',
    desc: 'Pas de facture surprise. L\'hébergement et le nom de domaine sont gérés et inclus par Pixeloria.',
  },
  {
    title: 'Support WhatsApp sous 24 h',
    desc: 'Une question, un problème ? Envoyez-nous un message sur WhatsApp, nous répondons rapidement.',
  },
];

export default function MaintenanceSiteWebPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Maintenance de site internet',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
      telephone: '+33786125313',
      email: 'contact@pixeloria.fr',
    },
    description: 'Maintenance de site internet pour TPE, PME et artisans : mises à jour, sécurité, hébergement, sauvegardes et support WhatsApp.',
    areaServed: 'France',
    offers: [
      {
        '@type': 'Offer',
        name: 'Option Visibilité',
        price: '89',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitCode: 'MON' },
        },
      },
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
                <span>Maintenance site internet</span>
              </nav>
              <span className="eyebrow">Sérénité technique</span>
              <h1>Maintenance de site internet pour artisans, TPE et PME</h1>
              <p className="page-hero-sub">
                Votre site toujours à jour, sécurisé et disponible — sans que vous ayez à vous
                en occuper. Pixeloria prend en charge la maintenance complète de votre site web
                pour que vous puissiez vous concentrer sur votre activité.
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

        {/* Pourquoi la maintenance est indispensable */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Pourquoi agir maintenant&nbsp;?</span>
              <h2>La maintenance, ce n&apos;est pas optionnel</h2>
              <p className="section-sub">
                Un site laissé sans suivi devient rapidement un problème. Voici les risques
                concrets auxquels vous vous exposez sans maintenance régulière.
              </p>
            </div>
            <ul className="signals-grid">
              {signals.map((s) => (
                <li key={s} className="signal-item">
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 3v8M10 14v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.6"/>
                  </svg>
                  {s}
                </li>
              ))}
            </ul>
            <p style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/#contact" className="btn btn-primary">
                Confier la maintenance de mon site
              </Link>
            </p>
          </div>
        </section>

        {/* Ce que comprend la maintenance Pixeloria */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Notre engagement</span>
              <h2>Ce que comprend la maintenance Pixeloria</h2>
              <p className="section-sub">
                Un service complet pour que votre site reste performant, sécurisé et opérationnel,
                jour après jour.
              </p>
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
              <h2>Tout ce dont votre site a besoin, inclus</h2>
              <p className="section-sub">
                Une formule tout-en-un pour ne plus jamais vous soucier de la technique.
              </p>
            </div>
            <div className="includes-grid">
              {[
                { icon: '🔒', label: 'Sécurité & mises à jour', desc: 'Plugins, CMS et certificat SSL toujours à jour et surveillés.' },
                { icon: '☁️', label: 'Hébergement inclus', desc: 'Hébergement performant géré par Pixeloria, sans frais supplémentaire.' },
                { icon: '🌐', label: 'Domaine inclus', desc: 'Votre nom de domaine est renouvelé automatiquement, sans rupture.' },
                { icon: '💾', label: 'Sauvegardes régulières', desc: 'Vos données sont sauvegardées régulièrement pour une restauration rapide si besoin.' },
                { icon: '💬', label: 'Support WhatsApp 24 h', desc: 'Contactez-nous directement sur WhatsApp, réponse sous 24 heures ouvrées.' },
                { icon: '📊', label: 'Rapport mensuel d\'activité', desc: 'Un bilan mensuel clair&nbsp;: visites, actions réalisées, état de votre site.' },
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
              <h2>Une option claire pour maintenir votre visibilité</h2>
              <p className="section-sub">
                Une offre tout-en-un, sans surprise, pour une tranquillité d&apos;esprit totale.
              </p>
            </div>
            <div className="pricing-cards">
              <div className="pricing-card pricing-card--featured">
                <span className="pricing-badge">Option mensuelle</span>
                <p className="pricing-label">Option Visibilité</p>
                <p className="pricing-price">89 € <span>TTC / mois</span></p>
                <p className="pricing-sublabel">Maintenance, modifications et suivi SEO</p>
                <ul>
                  <li>Maintenance &amp; mises à jour incluses</li>
                  <li>Hébergement inclus</li>
                  <li>Domaine inclus</li>
                  <li>Sauvegardes régulières</li>
                  <li>Support WhatsApp sous 24 h</li>
                  <li>Modifications mensuelles incluses</li>
                  <li>SEO local de base</li>
                </ul>
                <Link href="/#contact" className="btn btn-primary">Souscrire à l&apos;Option Visibilité →</Link>
              </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <Link href="/offres" style={{ color: 'var(--primary)', textDecoration: 'underline', fontSize: '0.9rem' }}>
                Comparer toutes les formules Pixeloria →
              </Link>
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="section section-tinted">
          <div className="container">
            <div className="page-cta-block">
              <h2>Votre site entre de bonnes mains</h2>
              <p>
                Confiez-nous la maintenance de votre site et oubliez les soucis techniques.
                Mises à jour, sécurité, hébergement — on s&apos;occupe de tout, vous vous
                concentrez sur votre activité.
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

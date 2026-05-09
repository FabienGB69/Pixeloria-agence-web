import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/JsonLd';
import { industryPages, getIndustryPage } from '@/lib/industry-pages';

export const dynamicParams = false;

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return industryPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getIndustryPage(params.slug);
  if (!page) return {};
  return {
    title: page.seoTitle,
    description: page.seoDescription,
    openGraph: {
      type: 'website',
      url: `https://pixeloria.fr/exemples/${page.slug}`,
      title: page.seoTitle,
      description: page.seoDescription,
      locale: 'fr_FR',
      siteName: 'Pixeloria',
    },
  };
}

const offerColors: Record<string, string> = {
  'Site Essentiel': 'exemple-offer--essentiel',
  'Site Sérénité': 'exemple-offer--serenite',
  'Site Croissance': 'exemple-offer--croissance',
};

export default function ExempleMetierPage({ params }: Props) {
  const page = getIndustryPage(params.slug);
  if (!page) notFound();

  const isConciergerie = page.slug === 'conciergerie';

  // SECURITE : serviceSchema doit uniquement contenir des données
  // issues de industryPages (tableau statique). Ne jamais injecter
  // de données utilisateur ou externe dans cet objet.
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.title,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
      telephone: '+33786125313',
      email: 'contact@pixeloria.fr',
    },
    description: page.seoDescription,
    areaServed: 'France',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <JsonLd />
      <Header />
      <main>

        {/* Hero */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <Link href="/" className="exemple-back">
                ← Retour aux offres Pixeloria
              </Link>

              <span className="eyebrow" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                {page.badge}
              </span>

              <h1>{page.title}</h1>

              <p className="page-hero-sub">{page.subtitle}</p>

              {isConciergerie && (
                <p className="exemple-anon-notice">
                  Cette page est une projection anonymisée basée sur une expérience réelle
                  de gestion et d&apos;optimisation dans la location courte durée.
                </p>
              )}

              <div className="page-hero-actions">
                <a href="/#contact" className="btn btn-primary">
                  {page.primaryCta}
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <Link href="/offres" className="btn btn-secondary">
                  Voir les offres Pixeloria
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Aperçu du site */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Structure du site</span>
              <h2>À quoi ressemble ce type de site&nbsp;?</h2>
              <p className="section-sub">
                Voici les sections clés qu&apos;un site Pixeloria intégrerait pour ce métier.
                Chaque site est conçu sur mesure selon votre activité réelle.
              </p>
            </div>

            <div className="exemple-mockup">
              {/* Browser chrome */}
              <div className="exemple-mockup-bar" aria-hidden="true">
                <div className="exemple-mockup-dots">
                  <span /><span /><span />
                </div>
                <div className="exemple-mockup-url">votrenom.fr</div>
              </div>

              {/* Fake nav */}
              <div className="exemple-mockup-nav" aria-hidden="true">
                <div className="exemple-mockup-logo" />
                <div className="exemple-mockup-navlinks">
                  <div /><div /><div />
                </div>
                <div className="exemple-mockup-cta-mini" />
              </div>

              {/* Hero preview */}
              <div className="exemple-mockup-hero" aria-hidden="true">
                <div className="exemple-mockup-hero-text">
                  <div className="emh-tag" />
                  <div className="emh-h1 emh-h1--1" />
                  <div className="emh-h1 emh-h1--2" />
                  <div className="emh-sub emh-sub--1" />
                  <div className="emh-sub emh-sub--2" />
                  <div className="emh-btns">
                    <div className="emh-btn emh-btn--solid" />
                    <div className="emh-btn emh-btn--ghost" />
                  </div>
                </div>
                <div className="exemple-mockup-hero-img" />
              </div>

              {/* Sections list */}
              <div className="exemple-mockup-sections">
                {page.sections.map((section, i) => (
                  <div key={i} className="exemple-mockup-section-item">
                    <span className="exemple-mockup-section-dot" aria-hidden="true" />
                    <span>{section}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Objectif métier */}
        <section className="section">
          <div className="container">
            <div className="exemple-objective-layout">
              <div className="exemple-objective-text">
                <span className="eyebrow">Objectif</span>
                <h2>{page.objectiveTitle}</h2>
                <p>{page.objectiveText}</p>
              </div>
              <div className="exemple-features-list">
                <p className="exemple-features-title">Fonctionnalités incluses</p>
                <ul>
                  {page.features.map((f, i) => (
                    <li key={i}>
                      <svg className="exemple-check" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Offre recommandée */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Recommandation</span>
              <h2>L&apos;offre Pixeloria adaptée à ce métier</h2>
            </div>
            <div className={`exemple-offer-card ${offerColors[page.recommendedOffer] ?? ''}`}>
              <div className="exemple-offer-header">
                <div>
                  <p className="exemple-offer-label">{page.recommendedOffer}</p>
                  <p className="exemple-offer-price">{page.recommendedPrice}</p>
                </div>
                <span className="exemple-offer-badge">Recommandé pour vous</span>
              </div>
              <p className="exemple-offer-reason">{page.offerReason}</p>
              <div className="exemple-offer-actions">
                <a href="/#contact" className="btn btn-primary">
                  Choisir {page.recommendedOffer} →
                </a>
                <Link href="/offres" className="btn btn-secondary">
                  Comparer toutes les offres
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="section">
          <div className="container">
            <div className="page-cta-block">
              <h2>Vous voulez un site adapté à votre métier&nbsp;?</h2>
              <p>
                Pixeloria vous aide à créer un site clair, professionnel et pensé pour
                générer plus de demandes de contact.
              </p>
              <div className="page-cta-block-actions">
                <a href="/#contact" className="btn btn-primary btn-lg">
                  Discuter de mon projet
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <Link href="/#services" className="btn btn-secondary">
                  Retour aux offres
                </Link>
              </div>
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

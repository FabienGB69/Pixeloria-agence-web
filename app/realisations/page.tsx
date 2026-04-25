import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Études de cas client — transformations réalisées par Pixeloria | Pixeloria',
  description:
    'Découvrez comment Pixeloria transforme des sites existants ou crée des sites vitrines pour des conciergeries, freelances et TPE. Études de cas avec contexte, problèmes identifiés et résultats.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/realisations',
    title: 'Études de cas client — transformations réalisées par Pixeloria | Pixeloria',
    description:
      'Refonte et création de sites pour conciergeries, freelances et TPE locales. Études de cas détaillées.',
    locale: 'fr_FR',
    siteName: 'Pixeloria',
  },
};

const etudes = [
  {
    type: 'Refonte',
    year: '2026',
    sector: 'Conciergerie / Tourisme',
    client: 'Escalee & Goûts',
    slug: 'escalee-gouts',
    url: 'https://www.escaleetgouts.fr/',
    summary: 'Refonte complète d\'un site de conciergerie haut de gamme pour améliorer l\'image, la lisibilité mobile et les demandes de contact.',
    axes: [
      'Design haut de gamme aligné avec le positionnement',
      'Expérience mobile pensée pour faciliter la prise de contact',
      'Base SEO restructurée pour une meilleure visibilité locale',
      'Parcours de contact simplifié',
    ],
  },
  {
    type: 'Refonte',
    year: '2026',
    sector: 'Conciergerie',
    client: 'Lenora Conciergerie',
    slug: 'lenora-conciergerie',
    url: 'https://lenora-conciergerie.vercel.app/',
    summary: 'Modernisation d\'un site de conciergerie pour renforcer la crédibilité, clarifier l\'offre et faciliter les prises de contact.',
    axes: [
      'Identité visuelle épurée et professionnelle',
      'Offre de services lisible dès l\'accueil',
      'Navigation simplifiée',
      'Parcours de contact simplifié pour réduire les frictions',
    ],
  },
  {
    type: 'Création complète',
    year: '2026',
    sector: 'Rédaction & Contenu',
    client: 'Content by Denise',
    slug: 'content-by-denise',
    url: 'https://contentbydenise.vercel.app/',
    summary: 'Création d\'un portfolio professionnel pour une rédactrice freelance : identité visuelle, mise en valeur des travaux, appels à l\'action orientés leads.',
    axes: [
      'Branding sur-mesure adapté au positionnement créatif',
      'Portfolio de contenus structuré',
      'Appels à l\'action orientés demandes de mission',
      'Base SEO posée dès le lancement',
    ],
  },
];

export default function RealisationsPage() {
  return (
    <>
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
                <span>Études de cas</span>
              </nav>
              <span className="eyebrow">Preuve d&apos;expertise</span>
              <h1>Études de cas client</h1>
              <p className="page-hero-sub">
                Découvrez comment Pixeloria transforme des sites existants ou crée des sites
                vitrines plus clairs, plus modernes et mieux structurés pour inspirer confiance
                et générer davantage de demandes de contact.
              </p>
              <div className="page-hero-actions">
                <a href="/#contact" className="btn btn-primary btn-lg">
                  Demander un audit gratuit
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Grille études de cas */}
        <section className="section">
          <div className="container">
            <div className="etude-grid">
              {etudes.map((e) => (
                <article key={e.slug} className="etude-card">
                  <div className="etude-meta">
                    <span className="tag">{e.type}</span>
                    <span className="etude-year">{e.year}</span>
                    <span className="etude-sector">{e.sector}</span>
                  </div>

                  <h2 className="etude-title">{e.client}</h2>
                  <p className="etude-summary">{e.summary}</p>

                  <ul className="etude-axes">
                    {e.axes.map((axe) => (
                      <li key={axe}>{axe}</li>
                    ))}
                  </ul>

                  <div className="etude-actions">
                    <Link href={`/realisations/${e.slug}`} className="btn btn-primary">
                      Voir la transformation
                      <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                    <a
                      href={e.url}
                      className="etude-link-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir le site final ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA global — Partie 10 */}
        <section className="section section-tinted">
          <div className="container">
            <div className="page-cta-block">
              <h2>Vous voulez savoir ce qui bloque votre site actuel&nbsp;?</h2>
              <p>
                Pixeloria peut analyser votre site et vous transmettre 3 à 5 pistes concrètes
                pour améliorer sa clarté, sa crédibilité et sa capacité à générer des demandes
                de contact.
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

import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/JsonLd';
import { breadcrumbList } from '@/lib/breadcrumb';

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

type Etude = {
  type: string;
  year: string;
  sector: string;
  client: string;
  slug?: string;
  url: string;
  summary: string;
  axes: string[];
  status?: string;
  previewImage?: string;
  previewImageAlt?: string;
};

const etudes: Etude[] = [
  {
    type: 'Plateforme web',
    year: '2026',
    sector: 'Automobile / Sécurité routière',
    client: 'EAD France',
    url: 'https://eadfrance.fr',
    summary: 'Conception d\'une plateforme nationale de recherche et de comparaison d\'installateurs d\'éthylotest anti-démarrage agréés en France, avec simulateur interactif et prise de rendez-vous.',
    axes: [
      'Recherche géolocalisée par ville, code postal ou département',
      'Comparateur d\'installateurs (tarifs, délais, disponibilités)',
      'Simulateur interactif pour orienter les conducteurs concernés',
      'Pages locales SEO et espace dédié aux professionnels',
    ],
    status: 'Plateforme en ligne',
    // TODO: pas de capture d'écran réelle disponible pour l'instant (Chromium bloqué par le sandbox,
    // net::ERR_CONNECTION_RESET alors que curl fonctionne) — voir rapport de session.
    // Ajouter previewImage + previewImageAlt (assets/portfolio/ead-france-preview.webp) une fois capturée manuellement.
  },
  {
    type: 'Création complète',
    year: '2026',
    sector: 'Ménage à domicile / Service à la personne',
    client: 'Fée du Ménage',
    url: 'https://www.lafeedumenage.fr',
    summary: 'Création d\'un site vitrine rassurant et optimisé pour une aide ménagère indépendante à Lyon, afin de présenter ses prestations, valoriser ses avis clients et générer davantage de demandes de devis locales.',
    axes: [
      'Mise en avant de 30 ans d\'expérience et des avis clients vérifiés',
      'Présentation claire des prestations (ménage régulier, grand nettoyage, Airbnb…)',
      'Formulaire de devis, contact téléphonique et bouton WhatsApp intégrés',
      'Référencement local optimisé pour Lyon 9e et les communes alentour',
    ],
    status: 'Site en ligne',
    // TODO: pas de capture d'écran réelle disponible pour l'instant (Chromium bloqué par le sandbox,
    // net::ERR_CONNECTION_RESET alors que curl fonctionne) — voir rapport de session.
    // Ajouter previewImage + previewImageAlt (assets/portfolio/fee-du-menage-preview.webp) une fois capturée manuellement.
  },
  {
    type: 'Création complète',
    year: '2026',
    sector: 'Maçonnerie / Travaux extérieurs',
    client: 'EI Maigret',
    url: 'https://ei-maigret.fr',
    summary: 'Création d\'un site internet moderne pour un artisan spécialisé dans la maçonnerie, le terrassement, le ravalement à la chaux et les aménagements extérieurs à Jouarre (Seine-et-Marne).',
    axes: [
      'Présentation claire des prestations et du savoir-faire',
      'Galerie de réalisations pour rassurer les prospects',
      'Formulaire de demande de devis et intégration WhatsApp',
      'Optimisation mobile et référencement local dès le lancement',
    ],
    status: 'En cours de création',
    // TODO: pas de capture d'écran réelle disponible pour l'instant — voir rapport de session.
    // Ajouter previewImage + previewImageAlt (assets/portfolio/ei-maigret-preview.webp) une fois capturée manuellement.
  },
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
  {
    type: 'Création complète',
    year: '2026',
    sector: 'Conciergerie courte durée',
    client: 'Qit Concierge',
    slug: 'qit-concierge',
    url: 'https://qitconcierge.fr',
    summary: 'Création d\'un site internet professionnel pour présenter une offre de conciergerie spécialisée dans la location courte durée, avec un positionnement clair et des appels à l\'action orientés propriétaires.',
    axes: [
      'Design professionnel adapté aux propriétaires Airbnb / Booking',
      'Présentation structurée des services de gestion locative',
      'Parcours de contact simplifié pour générer des leads qualifiés',
      'Base SEO locale posée dès le lancement',
    ],
  },
];

const breadcrumbSchema = breadcrumbList([
  { name: 'Accueil', url: 'https://pixeloria.fr/' },
  { name: 'Réalisations', url: 'https://pixeloria.fr/realisations' },
]);

export default function RealisationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
                <Link href="/#contact" className="btn btn-primary btn-lg">
                  Demander un audit gratuit
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Grille études de cas */}
        <section className="section">
          <div className="container">
            <div className="etude-grid">
              {etudes.map((e) => (
                <article key={e.slug ?? e.client} className="etude-card">
                  <div className="etude-meta">
                    <span className="tag">{e.type}</span>
                    {e.status && <span className="tag tag-status">{e.status}</span>}
                    <span className="etude-year">{e.year}</span>
                    <span className="etude-sector">{e.sector}</span>
                  </div>

                  {e.previewImage && (
                    <a
                      href={e.url}
                      className="project-preview"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Voir le site ${e.client}`}
                    >
                      <Image
                        src={e.previewImage}
                        alt={e.previewImageAlt ?? `Aperçu du site ${e.client}`}
                        width={600}
                        height={400}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading="lazy"
                      />
                    </a>
                  )}

                  <h2 className="etude-title">{e.client}</h2>
                  <p className="etude-summary">{e.summary}</p>

                  <ul className="etude-axes">
                    {e.axes.map((axe) => (
                      <li key={axe}>{axe}</li>
                    ))}
                  </ul>

                  <div className="etude-actions">
                    {e.slug && (
                      <Link href={`/realisations/${e.slug}`} className="btn btn-primary">
                        Voir la transformation
                        <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    )}
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

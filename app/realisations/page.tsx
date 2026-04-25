import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Réalisations — sites internet créés par Pixeloria | Pixeloria',
  description:
    'Découvrez les sites internet créés par Pixeloria pour artisans, TPE et PME : design responsive, SEO local, formulaire de contact. Exemples concrets de réalisations.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/realisations',
    title: 'Réalisations — sites internet créés par Pixeloria | Pixeloria',
    description:
      'Exemples de sites internet créés par Pixeloria pour artisans, TPE et PME. Design responsive et SEO local.',
    locale: 'fr_FR',
    siteName: 'Pixeloria',
  },
};

const realisations = [
  {
    client: 'Plombier Paris 15e',
    description:
      'Site vitrine 4 pages avec bouton d\'appel direct, formulaire de contact et galerie de chantiers. Référencement local dans le 15e arrondissement.',
    tags: ['Artisan', 'Site Sérénité'],
  },
  {
    client: 'Électricien Lyon',
    description:
      'Site 3 pages présentant les services, les zones d\'intervention et un formulaire de devis rapide. Optimisé pour la recherche locale sur l\'agglomération lyonnaise.',
    tags: ['Artisan', 'Site Essentiel'],
  },
  {
    client: 'Cabinet de kinésithérapie Grenoble',
    description:
      'Site professionnel avec prise de contact en ligne, présentation de l\'équipe et des spécialités. Adapté à une patientèle locale exigeante.',
    tags: ['TPE', 'Site Sérénité'],
  },
  {
    client: 'Menuiserie Favre (Drôme)',
    description:
      'Site vitrine valorisant les savoir-faire artisanaux avec galerie photo de créations sur-mesure. SEO renforcé sur le département de la Drôme.',
    tags: ['Artisan', 'Site Croissance'],
  },
  {
    client: 'Agence immobilière Valence',
    description:
      'Site présentant l\'agence, les biens disponibles et l\'équipe de conseillers. Formulaire de contact et intégration d\'un outil d\'estimation en ligne.',
    tags: ['PME', 'Site Sérénité'],
  },
  {
    client: 'Restaurant Le Mas des Oliviers',
    description:
      'Site vitrine mettant en avant la carte, les menus et les événements. Réservation par téléphone facilitée grâce au bouton d\'appel direct.',
    tags: ['TPE', 'Site Essentiel'],
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
                <span>Réalisations</span>
              </nav>
              <span className="eyebrow">Notre portfolio</span>
              <h1>Sites internet créés par Pixeloria</h1>
              <p className="page-hero-sub">
                Des exemples concrets de sites réalisés pour des artisans, des TPE et des PME.
                Design responsive, SEO local et formulaire de contact : des sites pensés pour
                générer de vrais contacts.
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

        {/* Portfolio grid */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Exemples de projets</span>
              <h2>Quelques-unes de nos réalisations</h2>
              <p className="section-sub">
                Chaque site est conçu sur-mesure selon l&apos;activité, la zone géographique
                et les objectifs du client. Voici une sélection représentative.
              </p>
            </div>
            <div className="portfolio-grid">
              {realisations.map((item) => (
                <div key={item.client} className="portfolio-card">
                  <div
                    className="portfolio-card-img"
                    style={{
                      background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                      minHeight: '180px',
                      borderRadius: 'var(--radius) var(--radius) 0 0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span
                      style={{
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '1rem',
                        textAlign: 'center',
                        padding: '1rem',
                      }}
                    >
                      {item.client}
                    </span>
                  </div>
                  <div className="portfolio-card-body">
                    <h3>{item.client}</h3>
                    <p>{item.description}</p>
                    <div className="portfolio-tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className="portfolio-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA bloc */}
        <section className="section section-tinted">
          <div className="container">
            <div className="page-cta-block">
              <h2>Votre site pourrait être ici</h2>
              <p>
                Pixeloria accompagne artisans, TPE et PME de A à Z&nbsp;: conception,
                développement, mise en ligne et suivi. Obtenez un premier retour gratuit
                sur votre projet ou votre site actuel.
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

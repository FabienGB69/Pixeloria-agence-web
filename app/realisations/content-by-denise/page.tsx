import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Création site portfolio freelance | Étude de cas Pixeloria',
  description:
    'Découvrez comment Pixeloria a créé un portfolio professionnel pour valoriser une activité de rédaction, clarifier l\'offre et faciliter les prises de contact.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/realisations/content-by-denise',
    title: 'Création site portfolio freelance | Étude de cas Pixeloria',
    description:
      'Découvrez comment Pixeloria a créé un portfolio professionnel pour valoriser une activité de rédaction, clarifier l\'offre et faciliter les prises de contact.',
    locale: 'fr_FR',
    siteName: 'Pixeloria',
  },
  alternates: {
    canonical: 'https://pixeloria.fr/realisations/content-by-denise',
  },
};

export default function ContentByDenisePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>

        {/* 1. Hero */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <nav className="breadcrumb" aria-label="Fil d&apos;Ariane">
                <Link href="/">Accueil</Link>
                <span aria-hidden="true"> › </span>
                <Link href="/realisations">Réalisations</Link>
                <span aria-hidden="true"> › </span>
                <span>Content by Denise</span>
              </nav>
              <span className="eyebrow">Création complète · Rédaction et Contenu · 2026</span>
              <h1>Création complète&nbsp;: site portfolio Content by Denise</h1>
              <p className="page-hero-sub">
                Content by Denise est une rédactrice freelance spécialisée dans la création de
                contenus web et éditoriaux. Elle avait besoin d&apos;un portfolio professionnel
                pour valoriser son expertise et générer des demandes de mission.
              </p>
              <div className="page-hero-actions">
                <Link href="/#contact" className="btn btn-primary btn-lg">
                  Demander un audit gratuit
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M4 10h12M11 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                <a
                  href="https://contentbydenise.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                >
                  Voir le site →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Contexte du projet */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2>Contexte du projet</h2>
            </div>
            <p>
              Denise est rédactrice web et éditoriale freelance. Elle travaille pour des agences,
              des startups et des TPE sur des missions de contenu variées — articles de blog,
              pages web, newsletters, scripts. Sans site propre, elle dépendait des plateformes
              de freelancing pour trouver ses clients. L&apos;objectif&nbsp;: créer un portfolio
              qui la présente de manière professionnelle, valorise ses spécialités et facilite
              les prises de contact.
            </p>
          </div>
        </section>

        {/* 3. Objectifs de la création */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <h2>Objectifs de la création</h2>
            </div>
            <ul>
              <li>Créer une identité visuelle mémorable adaptée au secteur de la rédaction</li>
              <li>Mettre en valeur les spécialités et types de contenus proposés</li>
              <li>Présenter des exemples de travaux de façon claire et convaincante</li>
              <li>Faciliter la prise de contact pour des demandes de devis</li>
              <li>
                Poser une base SEO solide pour être trouvée sur les recherches rédactrice
                freelance
              </li>
            </ul>
          </div>
        </section>

        {/* 4. De zéro au site final */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Création complète</span>
              <h2>De zéro au site final</h2>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card">
                <span className="benefit-num">01</span>
                <h3>Identité visuelle</h3>
                <p>
                  Création d&apos;une direction artistique cohérente avec le positionnement
                  créatif de Denise.
                </p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">02</span>
                <h3>Structure des pages</h3>
                <p>
                  Architecture pensée pour guider le visiteur de la découverte des spécialités
                  à la demande de contact.
                </p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">03</span>
                <h3>Portfolio de contenus</h3>
                <p>
                  Section dédiée à la mise en valeur des travaux réalisés, avec exemples
                  et descriptions.
                </p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">04</span>
                <h3>Appels à l&apos;action orientés leads</h3>
                <p>
                  CTA clairs à chaque étape pour transformer un visiteur en prospect.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Ce qui a été intégré */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <h2>Ce qui a été intégré</h2>
            </div>
            <div className="includes-grid">
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">✍️</span>
                <div>
                  <strong>Portfolio structuré</strong>
                  <p>Présentation claire des travaux par type de contenu.</p>
                </div>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">🎨</span>
                <div>
                  <strong>Identité sur-mesure</strong>
                  <p>
                    Direction artistique originale adaptée au positionnement de la rédactrice.
                  </p>
                </div>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">📞</span>
                <div>
                  <strong>Contact simplifié</strong>
                  <p>Formulaire de contact et bouton email directement accessibles.</p>
                </div>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">🔍</span>
                <div>
                  <strong>Base SEO</strong>
                  <p>
                    Structure optimisée pour les recherches rédactrice freelance et copywriter
                    web.
                  </p>
                </div>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">📱</span>
                <div>
                  <strong>Responsive mobile</strong>
                  <p>Site lisible et agréable sur tous les appareils.</p>
                </div>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">🚀</span>
                <div>
                  <strong>Mise en ligne rapide</strong>
                  <p>Site créé et mis en ligne en moins de 10 jours.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Aperçu du site final */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2>Le résultat final</h2>
              <p className="section-sub">
                Un portfolio clair, moderne et professionnel qui reflète le positionnement de
                Denise et facilite les prises de contact pour des missions de rédaction.
              </p>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <a
                href="https://contentbydenise.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Voir le site Content by Denise →
              </a>
            </div>
            <div
              style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                height: '280px',
                borderRadius: 'var(--radius)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  textAlign: 'center',
                }}
              >
                contentbydenise.vercel.app
              </span>
            </div>
          </div>
        </section>

        {/* 7. Résultat */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <h2>Résultat de la création</h2>
              <p className="section-sub">Résultats qualitatifs après la mise en ligne.</p>
            </div>
            <ul className="result-badges">
              <li>Portfolio professionnel et mémorable</li>
              <li>Offre clairement présentée dès l&apos;accueil</li>
              <li>Prise de contact facilitée</li>
              <li>Visibilité organique initiée dès le lancement</li>
            </ul>
          </div>
        </section>

        {/* 8. Autres études de cas */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2>Voir d&apos;autres transformations</h2>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/realisations/escalee-gouts" className="btn btn-secondary">
                Escalee & Goûts →
              </Link>
              <Link href="/realisations/lenora-conciergerie" className="btn btn-secondary">
                Lenora Conciergerie →
              </Link>
            </div>
          </div>
        </section>

        {/* 9. CTA final */}
        <section className="section section-tinted">
          <div className="container">
            <div className="page-cta-block">
              <h2>Votre activité mérite un site qui vous ressemble</h2>
              <p>
                Pixeloria crée des sites web sur-mesure adaptés à votre activité, votre
                positionnement et vos objectifs. Demandez un premier échange gratuit.
              </p>
              <Link href="/#contact" className="btn btn-primary btn-lg">
                Demander un audit gratuit
                <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M4 10h12M11 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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

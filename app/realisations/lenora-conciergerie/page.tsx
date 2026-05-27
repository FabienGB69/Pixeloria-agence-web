import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/JsonLd';
import CaseStudyImage from '@/components/ui/CaseStudyImage';

export const metadata: Metadata = {
  title: 'Refonte site internet conciergerie | Étude de cas Pixeloria',
  description:
    'Découvrez comment Pixeloria a modernisé un site de conciergerie pour renforcer la crédibilité, simplifier la navigation et faciliter les demandes de contact.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/realisations/lenora-conciergerie',
    title: 'Refonte site internet conciergerie | Étude de cas Pixeloria',
    description:
      'Découvrez comment Pixeloria a modernisé un site de conciergerie pour renforcer la crédibilité, simplifier la navigation et faciliter les demandes de contact.',
    locale: 'fr_FR',
    siteName: 'Pixeloria',
  },
};

export default function LenoraConciergeriePage() {
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
                <span>Lenora Conciergerie</span>
              </nav>
              <span className="eyebrow">Refonte · Conciergerie · 2026</span>
              <h1>Avant / Après&nbsp;: refonte du site Lenora Conciergerie</h1>
              <p className="page-hero-sub">
                Lenora Conciergerie propose des services à domicile et d&apos;assistance pour particuliers. Leur site existant manquait de clarté et de modernité pour convaincre de nouveaux clients.
              </p>
              <div className="page-hero-actions">
                <Link href="/#contact" className="btn btn-primary btn-lg">
                  Demander un audit gratuit
                </Link>
                <a
                  href="https://lenora-conciergerie.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-lg"
                >
                  Voir le site final →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Contexte du projet */}
        <section className="section">
          <div className="container">
            <h2 className="section-heading">Contexte du projet</h2>
            <p className="section-sub">
              Lenora Conciergerie accompagne des particuliers dans la gestion de leurs tâches du quotidien — assistance administrative, coordination de services, soutien à domicile. La société avait un site web existant mais son design vieillissant et sa structure peu claire rendaient difficile la conversion des visiteurs en clients.
            </p>
          </div>
        </section>

        {/* 3. Problèmes identifiés */}
        <section className="section section-tinted">
          <div className="container">
            <h2 className="section-heading">Problèmes identifiés sur l&apos;ancien site</h2>
            <ul>
              <li>Design peu moderne et peu rassurant</li>
              <li>Navigation perfectible</li>
              <li>Offre de services difficile à identifier rapidement</li>
              <li>Expérience mobile à améliorer</li>
              <li>Parcours de contact peu direct</li>
              <li>Manque de réassurance et de preuve sociale</li>
              <li>Structure SEO à renforcer</li>
            </ul>
          </div>
        </section>

        {/* 4. Objectifs de la refonte */}
        <section className="section">
          <div className="container">
            <h2 className="section-heading">Objectifs de la transformation</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <span className="benefit-num">01</span>
                <h3>Moderniser l&apos;image de marque</h3>
                <p>Projeter une image professionnelle, rassurante et cohérente avec les services proposés.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">02</span>
                <h3>Clarifier l&apos;offre de services</h3>
                <p>Permettre aux visiteurs d&apos;identifier en quelques secondes ce que fait Lenora Conciergerie et pour qui.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">03</span>
                <h3>Simplifier la navigation</h3>
                <p>Réduire le nombre de clics pour accéder à l&apos;information et au formulaire de contact.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">04</span>
                <h3>Améliorer la lisibilité mobile</h3>
                <p>Garantir une expérience fluide sur smartphone, là où beaucoup de prospects découvrent le service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Comparatif avant / après */}
        <section className="section section-tinted">
          <div className="container">
            <h2 className="section-heading">Comparatif avant / après</h2>
            <div className="case-study-comparison">
              <div className="case-study-col case-study-col--before">
                <span className="case-study-badge">Avant</span>
                <CaseStudyImage
                  src="/assets/portfolio/lenora-avant.webp"
                  alt="Capture de l'ancien site Lenora Conciergerie avant la refonte"
                  className="case-study-img"
                />
                <ul>
                  <li>Design peu rassurant</li>
                  <li>Offre floue</li>
                  <li>Navigation confuse</li>
                  <li>Mobile perfectible</li>
                </ul>
              </div>
              <div className="case-study-col case-study-col--after">
                <span className="case-study-badge case-study-badge--after">Après</span>
                <a
                  href="https://lenora-conciergerie.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-study-site-link"
                >
                  Voir le site final →
                </a>
                <ul>
                  <li>Design professionnel et chaleureux</li>
                  <li>Offre lisible dès l&apos;accueil</li>
                  <li>Navigation épurée</li>
                  <li>Expérience mobile améliorée</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Ce qui a été amélioré */}
        <section className="section">
          <div className="container">
            <h2 className="section-heading">Ce qui a été amélioré</h2>
            <div className="includes-grid">
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">🎨</span>
                <div>
                  <strong>Design</strong>
                  <p>Refonte complète avec une charte graphique chaleureuse et professionnelle adaptée aux services à la personne.</p>
                </div>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">🗂️</span>
                <div>
                  <strong>Structure</strong>
                  <p>Pages réorganisées autour des services proposés, avec une hiérarchie claire de l&apos;information.</p>
                </div>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">📞</span>
                <div>
                  <strong>Conversion</strong>
                  <p>Parcours de contact simplifié pour réduire les frictions — formulaire allégé, téléphone visible en permanence.</p>
                </div>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">🔍</span>
                <div>
                  <strong>SEO local</strong>
                  <p>Base SEO restructurée pour une meilleure visibilité locale sur les recherches conciergerie à domicile.</p>
                </div>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">📱</span>
                <div>
                  <strong>Mobile</strong>
                  <p>Expérience mobile pensée pour faciliter la prise de contact depuis un smartphone.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Résultat */}
        <section className="section section-tinted">
          <div className="container">
            <h2 className="section-heading">Résultat de la transformation</h2>
            <p className="section-sub">Gains qualitatifs après la refonte.</p>
            <ul className="result-badges">
              <li>Image professionnelle et rassurante</li>
              <li>Offre claire et compréhensible en quelques secondes</li>
              <li>Navigation plus fluide</li>
              <li>Expérience mobile améliorée</li>
              <li>Parcours de contact plus direct</li>
            </ul>
          </div>
        </section>

        {/* 8. Liens vers autres études de cas */}
        <section className="section">
          <div className="container">
            <h2 className="section-heading">Voir d&apos;autres transformations</h2>
            <div className="page-hero-actions">
              <Link href="/realisations/escalee-gouts" className="btn btn-secondary">
                Escalee &amp; Goûts
              </Link>
              <Link href="/realisations/content-by-denise" className="btn btn-secondary">
                Content by Denise
              </Link>
            </div>
          </div>
        </section>

        {/* 9. CTA final */}
        <section className="section section-tinted">
          <div className="container">
            <div className="page-cta-block">
              <h2>Votre site mérite aussi une transformation claire et efficace</h2>
              <p>
                Pixeloria peut analyser votre site actuel et vous transmettre des pistes concrètes pour améliorer sa clarté, sa crédibilité et sa capacité à générer des contacts.
              </p>
              <Link href="/#contact" className="btn btn-primary btn-lg">
                Demander un audit gratuit
              </Link>
              <p className="page-cta-note">
                07 86 12 53 13 · contact@pixeloria.fr
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

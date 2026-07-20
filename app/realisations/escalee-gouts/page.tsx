import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/JsonLd';
import CaseStudyImage from '@/components/ui/CaseStudyImage';

export const metadata: Metadata = {
  title: 'Refonte site internet conciergerie tourisme | Étude de cas Pixeloria',
  description:
    'Découvrez comment Pixeloria a repensé un site de conciergerie touristique pour améliorer son image, sa lisibilité mobile, son SEO local et son parcours de contact.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/realisations/escalee-gouts',
    title: 'Refonte site internet conciergerie tourisme | Étude de cas Pixeloria',
    description:
      'Découvrez comment Pixeloria a repensé un site de conciergerie touristique pour améliorer son image, sa lisibilité mobile, son SEO local et son parcours de contact.',
    locale: 'fr_FR',
    siteName: 'Pixeloria',
  },
};

export default function EscaleeGoutsPage() {
  return (
    <>
      <JsonLd />
      <Header />

      <main>
        {/* ── 1. Hero ── */}
        <section className="page-hero section">
          <div className="container">
            <nav className="breadcrumb" aria-label="Fil d&apos;Ariane">
              <Link href="/">Accueil</Link>
              <span aria-hidden="true"> › </span>
              <Link href="/realisations">Réalisations</Link>
              <span aria-hidden="true"> › </span>
              <span>Escalee & Goûts</span>
            </nav>

            <div className="page-hero-inner">
              <p className="eyebrow">Refonte · Conciergerie / Tourisme · 2026</p>
              <h1>Avant / Après&nbsp;: refonte du site Escalee & Goûts</h1>
              <p className="page-hero-sub">
                Escalee & Goûts propose des expériences de conciergerie haut de gamme. Leur ancien
                site ne reflétait pas le niveau de service proposé et rendait difficile la prise de
                contact pour les vacanciers.
              </p>
              <div className="page-hero-actions">
                <Link href="/#contact" className="btn btn-primary btn-lg">
                  Demander un audit gratuit
                </Link>
                <a
                  href="https://www.escaleetgouts.fr/"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le site final →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Contexte du projet ── */}
        <section className="section">
          <div className="container">
            <h2 className="section-heading">Contexte du projet</h2>
            <p className="section-sub">
              Escalee & Goûts accompagne des vacanciers exigeants dans leur séjour en Ardèche et en
              Drôme Provençale. La société proposait des services de conciergerie premium — accueil,
              activités, recommandations locales — mais son site donnait une image insuffisamment
              professionnelle pour convaincre une clientèle haut de gamme de confier leur séjour à
              cette structure.
            </p>
          </div>
        </section>

        {/* ── 3. Problèmes identifiés ── */}
        <section className="section section-tinted">
          <div className="container">
            <h2 className="section-heading">Problèmes identifiés sur l&apos;ancien site</h2>
            <ul>
              <li>Message peu clair sur les services proposés</li>
              <li>Design peu adapté à une clientèle haut de gamme</li>
              <li>Expérience mobile perfectible</li>
              <li>Appels à l&apos;action peu visibles</li>
              <li>Manque de réassurance pour des prospects exigeants</li>
              <li>Base SEO locale à renforcer</li>
              <li>Parcours de contact à simplifier</li>
            </ul>
          </div>
        </section>

        {/* ── 4. Objectifs de la refonte ── */}
        <section className="section">
          <div className="container">
            <h2 className="section-heading">Objectifs de la transformation</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <span className="benefit-num">01</span>
                <h3>Moderniser l&apos;image de marque</h3>
                <p>
                  Aligner le design avec le positionnement haut de gamme de la société.
                </p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">02</span>
                <h3>Clarifier l&apos;offre de services</h3>
                <p>
                  Permettre aux visiteurs de comprendre en quelques secondes ce qu&apos;Escalee & Goûts
                  propose.
                </p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">03</span>
                <h3>Faciliter les demandes de contact</h3>
                <p>
                  Simplifier le parcours pour qu&apos;un vacancier puisse contacter la conciergerie sans
                  friction.
                </p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">04</span>
                <h3>Renforcer la visibilité locale</h3>
                <p>
                  Améliorer la présence sur les recherches liées à la conciergerie en Ardèche et en
                  Drôme Provençale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Comparatif avant / après ── */}
        <section className="section section-tinted">
          <div className="container">
            <h2 className="section-heading">Comparatif avant / après</h2>
            {/* .case-study-comparison gère le grid responsive via styles.css */}
            <div className="case-study-comparison">
              {/* Colonne Avant */}
              <div className="case-study-col case-study-col--before">
                <span className="case-study-badge">Avant</span>
                <CaseStudyImage
                  src="/assets/portfolio/escalee-avant.webp"
                  alt="Site Escalee & Goûts avant refonte"
                  className="case-study-img"
                />
                <ul>
                  <li>Design peu adapté au positionnement</li>
                  <li>Navigation difficile</li>
                  <li>CTA peu visibles</li>
                  <li>Mobile perfectible</li>
                </ul>
              </div>

              {/* Colonne Après */}
              <div className="case-study-col case-study-col--after">
                <span className="case-study-badge case-study-badge--after">Après</span>
                <a
                  href="https://www.escaleetgouts.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-study-site-link"
                >
                  Voir le site final →
                </a>
                <ul>
                  <li>Design haut de gamme aligné</li>
                  <li>Navigation épurée</li>
                  <li>CTAs bien visibles</li>
                  <li>Expérience mobile optimisée</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. Ce qui a été amélioré ── */}
        <section className="section">
          <div className="container">
            <h2 className="section-heading">Ce qui a été amélioré</h2>
            <div className="includes-grid">
              <div className="include-item">
                <span className="include-icon">🎨</span>
                <div>
                  <strong>Design</strong>
                  <p>
                    Refonte visuelle complète avec une direction artistique haut de gamme adaptée au
                    positionnement conciergerie premium.
                  </p>
                </div>
              </div>
              <div className="include-item">
                <span className="include-icon">🗂️</span>
                <div>
                  <strong>Structure</strong>
                  <p>
                    Pages réorganisées pour guider le visiteur de la découverte des services à la
                    prise de contact.
                  </p>
                </div>
              </div>
              <div className="include-item">
                <span className="include-icon">📞</span>
                <div>
                  <strong>Conversion</strong>
                  <p>
                    Bouton de contact repositionné, formulaire simplifié, numéro de téléphone mis en
                    évidence.
                  </p>
                </div>
              </div>
              <div className="include-item">
                <span className="include-icon">🔍</span>
                <div>
                  <strong>SEO local</strong>
                  <p>
                    Base SEO restructurée pour une meilleure visibilité locale sur les recherches
                    conciergerie Ardèche et Drôme.
                  </p>
                </div>
              </div>
              <div className="include-item">
                <span className="include-icon">📱</span>
                <div>
                  <strong>Mobile</strong>
                  <p>
                    Expérience mobile pensée pour faciliter la prise de contact depuis un smartphone
                    en déplacement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. Résultat de la transformation ── */}
        <section className="section section-tinted">
          <div className="container">
            <h2 className="section-heading">Résultat de la transformation</h2>
            <p className="section-sub">Résultats qualitatifs constatés après la refonte.</p>
            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                listStyle: 'none',
                padding: 0,
                marginTop: '1.5rem',
              }}
            >
              <li className="result-badge">Image plus professionnelle et cohérente avec le positionnement</li>
              <li className="result-badge">Message clair dès la page d&apos;accueil</li>
              <li className="result-badge">Parcours de contact simplifié</li>
              <li className="result-badge">Base SEO structurée pour la visibilité locale</li>
            </ul>
          </div>
        </section>

        {/* ── 8. Autres études de cas ── */}
        <section className="section">
          <div className="container">
            <h2 className="section-heading">Voir d&apos;autres transformations</h2>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <Link href="/realisations/lenora-conciergerie" className="btn btn-secondary">
                Lenora Conciergerie
              </Link>
              <Link href="/realisations/content-by-denise" className="btn btn-secondary">
                Content by Denise
              </Link>
            </div>
          </div>
        </section>

        {/* ── 9. CTA final ── */}
        <section className="section section-tinted">
          <div className="container">
            <div className="page-cta-block">
              <h2>Votre site mérite aussi une transformation claire et efficace</h2>
              <p>
                Pixeloria peut analyser votre site actuel et vous transmettre des pistes concrètes
                pour améliorer sa clarté, sa crédibilité et sa capacité à générer des contacts.
              </p>
              <Link href="/#contact" className="btn btn-primary btn-lg">
                Demander un audit gratuit
              </Link>
              <p className="page-cta-note">
                📞 <a href="tel:0786125313">07 86 12 53 13</a> · ✉️{' '}
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

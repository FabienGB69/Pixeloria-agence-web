import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Qit Concierge — Création de site internet par Pixeloria',
  description:
    'Découvrez la création du site internet Qit Concierge par Pixeloria, un site professionnel dédié à la conciergerie courte durée et à la location Airbnb / Booking.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/realisations/qit-concierge',
    title: 'Qit Concierge — Création de site internet par Pixeloria',
    description:
      'Découvrez la création du site internet Qit Concierge par Pixeloria, un site professionnel dédié à la conciergerie courte durée et à la location Airbnb / Booking.',
    locale: 'fr_FR',
    siteName: 'Pixeloria',
  },
};

export default function QitConciergePage() {
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
                <span>Qit Concierge</span>
              </nav>
              <span className="eyebrow">Création complète · Conciergerie courte durée · 2026</span>
              <h1>Création d&apos;un site internet professionnel pour une conciergerie spécialisée en location courte durée</h1>
              <p className="page-hero-sub">
                Qit Concierge accompagne les propriétaires dans la gestion de leurs logements en
                location courte durée. Le site créé par Pixeloria leur permet de présenter
                clairement leur offre, de rassurer les propriétaires et de générer des demandes
                qualifiées.
              </p>
              <div className="page-hero-actions">
                <a
                  href="https://qitconcierge.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  Voir le site
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M4 10h12M11 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <Link href="/#contact" className="btn btn-secondary btn-lg">
                  Créer un site similaire
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Contexte */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2>Contexte du projet</h2>
            </div>
            <p>
              Qit Concierge avait besoin d&apos;un site internet clair et professionnel pour
              présenter son activité de conciergerie courte durée, rassurer les propriétaires et
              générer des demandes qualifiées.
            </p>
            <p style={{ marginTop: '1rem' }}>
              L&apos;enjeu était de créer une présence en ligne crédible, lisible et orientée
              conversion, avec une présentation simple des services proposés aux propriétaires :
              optimisation des annonces, gestion des voyageurs, check-in / check-out, ménage,
              communication, tarification et suivi opérationnel.
            </p>
          </div>
        </section>

        {/* 3. Objectifs */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <h2>Objectifs du site</h2>
            </div>
            <ul>
              <li>Créer une présence digitale professionnelle et crédible</li>
              <li>Clarifier l&apos;offre de conciergerie auprès des propriétaires</li>
              <li>Rassurer les prospects en valorisant le sérieux de la prestation</li>
              <li>Présenter les services de gestion locative courte durée</li>
              <li>Faciliter la prise de contact et la génération de leads</li>
              <li>Optimiser le site pour une lecture rapide sur mobile</li>
              <li>Poser une base SEO locale propre dès le lancement</li>
            </ul>
          </div>
        </section>

        {/* 4. Travail réalisé */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Création complète</span>
              <h2>Ce qui a été réalisé</h2>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card">
                <span className="benefit-num">01</span>
                <h3>Création complète</h3>
                <p>
                  Site créé de zéro, avec une identité visuelle cohérente et un design
                  professionnel adapté au secteur de la conciergerie.
                </p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">02</span>
                <h3>Structure des contenus</h3>
                <p>
                  Architecture pensée pour guider le propriétaire de la découverte des services
                  jusqu&apos;à la demande de contact.
                </p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">03</span>
                <h3>Présentation des services</h3>
                <p>
                  Mise en avant claire des prestations : gestion des annonces, accueil voyageurs,
                  ménage, communication et tarification.
                </p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">04</span>
                <h3>Appels à l&apos;action orientés leads</h3>
                <p>
                  CTA positionnés pour transformer un propriétaire curieux en prospect qualifié.
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
                <span className="include-icon" aria-hidden="true">🏠</span>
                <div>
                  <strong>Présentation services</strong>
                  <p>Services de conciergerie détaillés, clairs et orientés bénéfices propriétaires.</p>
                </div>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">🎨</span>
                <div>
                  <strong>Design professionnel</strong>
                  <p>
                    Direction visuelle moderne adaptée au positionnement haut de gamme de
                    la conciergerie.
                  </p>
                </div>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">📞</span>
                <div>
                  <strong>Contact simplifié</strong>
                  <p>Formulaire de contact et accès directs pour faciliter les prises de contact rapides.</p>
                </div>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">🔍</span>
                <div>
                  <strong>Base SEO locale</strong>
                  <p>
                    Structure SEO optimisée pour les recherches conciergerie courte durée et
                    gestion locative.
                  </p>
                </div>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">📱</span>
                <div>
                  <strong>Responsive mobile</strong>
                  <p>Site optimisé pour une lecture fluide et agréable sur tous les appareils.</p>
                </div>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">🚀</span>
                <div>
                  <strong>Mise en ligne rapide</strong>
                  <p>Site conçu, développé et mis en ligne en moins de 10 jours.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Résultat */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2>Le résultat final</h2>
              <p className="section-sub">
                Qit Concierge dispose désormais d&apos;un site internet professionnel, clair et
                orienté conversion. Le site permet de présenter l&apos;activité, de valoriser les
                services de conciergerie et d&apos;inciter les propriétaires à prendre contact
                pour déléguer la gestion de leur location courte durée.
              </p>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <a
                href="https://qitconcierge.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Voir le site Qit Concierge →
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
                qitconcierge.fr
              </span>
            </div>
          </div>
        </section>

        {/* 7. Résultats qualitatifs */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <h2>Ce que le site apporte</h2>
              <p className="section-sub">Bénéfices concrets après la mise en ligne.</p>
            </div>
            <ul className="result-badges">
              <li>Présence digitale professionnelle et crédible</li>
              <li>Offre de services lisible dès l&apos;accueil</li>
              <li>Prise de contact facilitée pour les propriétaires</li>
              <li>Base SEO locale posée dès le lancement</li>
            </ul>
          </div>
        </section>

        {/* 8. Voir d'autres réalisations */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <h2>Voir d&apos;autres réalisations</h2>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/realisations/escalee-gouts" className="btn btn-secondary">
                Escalée &amp; Goûts →
              </Link>
              <Link href="/realisations/lenora-conciergerie" className="btn btn-secondary">
                Lenora Conciergerie →
              </Link>
              <Link href="/realisations/content-by-denise" className="btn btn-secondary">
                Content by Denise →
              </Link>
            </div>
          </div>
        </section>

        {/* 9. CTA final */}
        <section className="section section-tinted">
          <div className="container">
            <div className="page-cta-block">
              <h2>Vous voulez créer un site internet comme Qit Concierge&nbsp;?</h2>
              <p>
                Pixeloria crée votre site internet professionnel rapidement, avec une approche
                claire, moderne et pensée pour générer des contacts qualifiés.
              </p>
              <Link href="/#contact" className="btn btn-primary btn-lg">
                Demander mon site
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

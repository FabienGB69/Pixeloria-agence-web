import type { Metadata } from 'next';
import Link from 'next/link';
import { hreflangLanguages } from '@/lib/hreflang';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Refonte de site internet pour artisans et TPE | Pixeloria',
  description:
    'Votre site actuel ne génère pas assez de contacts ? Pixeloria refond les sites internet des artisans et TPE : design moderne, SEO local, responsive mobile. Site Artisan à 199 € TTC, livré en 72 h.',
  alternates: {
    canonical: 'https://pixeloria.fr/refonte-site-internet',
    languages: hreflangLanguages('/refonte-site-internet'),
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/refonte-site-internet',
    title: 'Refonte de site internet pour artisans et TPE | Pixeloria',
    description:
      'Refonte de site internet professionnelle pour artisans et TPE. Design moderne, SEO local, responsive. Site Artisan à 199 € TTC, livré en 72 h.',
    locale: 'fr_FR',
    siteName: 'Pixeloria',
  },
};

const signals = [
  'Votre site n\'est pas lisible sur mobile',
  'Vous ne recevez pas assez de demandes de contact',
  'Le design est vieillissant ou peu professionnel',
  'Votre site n\'apparaît pas sur Google dans votre zone',
  'Les informations affichées sont obsolètes',
  'Vos concurrents ont un site plus moderne que le vôtre',
  'Le chargement est lent et décourage les visiteurs',
  'Vous n\'arrivez pas à le modifier vous-même',
];

const steps = [
  {
    num: '01',
    title: 'Audit de votre site actuel',
    desc: 'Nous analysons rapidement votre site existant&nbsp;: contenu, structure, mobile, vitesse et SEO local.',
  },
  {
    num: '02',
    title: 'Définition des objectifs',
    desc: 'Nous échangeons sur vos services, vos clients cibles, vos zones d\'intervention et vos priorités.',
  },
  {
    num: '03',
    title: 'Conception et développement',
    desc: 'Votre nouveau site est conçu avec un design clair, responsive et orienté prise de contact.',
  },
  {
    num: '04',
    title: 'Mise en ligne et transfert',
    desc: 'Le nouveau site remplace l\'ancien sans perdre votre nom de domaine ni vos contenus utiles.',
  },
];

export default function RefontePageInternet() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Refonte de site internet',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
      telephone: '+33601777633',
      email: 'contact@pixeloria.fr',
    },
    description: 'Refonte de sites internet pour artisans et TPE locaux. Design moderne, SEO local, responsive mobile.',
    areaServed: 'France',
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
                <span>Refonte de site internet</span>
              </nav>
              <span className="eyebrow">Modernisez votre présence en ligne</span>
              <h1>Refonte de site internet pour artisans et TPE</h1>
              <p className="page-hero-sub">
                Votre site actuel ne génère pas assez de contacts ou donne une image peu
                professionnelle&nbsp;? Pixeloria refond votre site pour qu&apos;il soit
                moderne, rapide, lisible sur mobile et optimisé pour le SEO local.
                Refonte Artisan à 199&nbsp;€&nbsp;TTC, livrée en 72 h.
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

        {/* Signaux d'alerte */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Est-ce le bon moment&nbsp;?</span>
              <h2>Les signes qu&apos;il est temps de refondre votre site</h2>
              <p className="section-sub">
                Si vous vous reconnaissez dans l&apos;un de ces points, une refonte peut
                faire une vraie différence sur vos demandes de contact.
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
                Demander un audit gratuit de mon site
              </Link>
            </p>
          </div>
        </section>

        {/* Ce qu'inclut la refonte */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Ce qui est inclus</span>
              <h2>Ce que comprend une refonte Pixeloria</h2>
              <p className="section-sub">
                La refonte ne se limite pas à changer les couleurs. C&apos;est une remise à plat
                complète de la structure, du contenu et de la visibilité de votre site.
              </p>
            </div>
            <div className="includes-grid">
              {[
                { icon: '🎨', label: 'Nouveau design sur-mesure', desc: 'Un design moderne, cohérent avec votre image et vos services.' },
                { icon: '📱', label: 'Responsive mobile-first', desc: 'Priorité au mobile, là où la majorité de vos clients vous cherchent.' },
                { icon: '⚡', label: 'Vitesse optimisée', desc: 'Un site rapide, pour ne pas perdre les visiteurs impatients.' },
                { icon: '🔍', label: 'SEO local de base', desc: 'Structure, balises et contenu pensés pour votre zone d\'intervention.' },
                { icon: '🔗', label: 'Conservation du domaine', desc: 'Votre nom de domaine est conservé, sans rupture de visibilité.' },
                { icon: '📞', label: 'CTAs optimisés', desc: 'Formulaire, bouton d\'appel, WhatsApp — pour faciliter le contact à chaque étape.' },
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

        {/* Process refonte */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Comment ça se passe</span>
              <h2>Le déroulement d&apos;une refonte avec Pixeloria</h2>
            </div>
            <div className="process-grid">
              {steps.map((step) => (
                <div key={step.num} className="process-card" data-step={step.num}>
                  <span className="process-num" aria-hidden="true">{step.num}</span>
                  <div className="process-icon">
                    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.2"/>
                      <path d="M16 24l6 6 10-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
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
              <h2>Une offre simple pour refondre votre site</h2>
              <p className="section-sub">
                Une refonte livrée en 72 h, paiement unique. Une option mensuelle pour
                maintenir votre visibilité et garder votre site à jour.
              </p>
            </div>
            <div className="pricing-cards">
              <div className="pricing-card pricing-card--featured">
                <span className="pricing-badge">Offre principale</span>
                <p className="pricing-label">Site Artisan</p>
                <p className="pricing-price">199 € <span>TTC</span></p>
                <p className="pricing-sublabel">Paiement unique — livraison en 72 h</p>
                <ul>
                  <li>Refonte complète jusqu&apos;à 3 pages</li>
                  <li>Design responsive sur-mesure</li>
                  <li>Conservation de votre domaine</li>
                  <li>Formulaire de contact</li>
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
                  <li>SEO local de base inclus</li>
                  <li>Modifications mensuelles incluses</li>
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
              <h2>Vous avez un site qui ne génère pas assez de contacts&nbsp;?</h2>
              <p>
                Envoyez-nous l&apos;adresse de votre site actuel. Nous vous donnons un premier
                retour rapide et gratuit sur les axes d&apos;amélioration prioritaires.
              </p>
              <Link href="/#contact" className="btn btn-primary btn-lg">
                Demander mon audit gratuit
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

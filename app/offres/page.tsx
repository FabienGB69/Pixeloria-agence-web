import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Services from '@/components/sections/Services';
import ComparisonTable from '@/components/sections/ComparisonTable';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Offre Site Artisan — 199 € TTC | Pixeloria',
  description:
    'Pixeloria crée votre site professionnel artisan pour 199 € TTC, livré sous 72h. Bouton téléphone, WhatsApp, devis, Google Maps, SEO local.',
  alternates: {
    canonical: 'https://pixeloria.fr/offres',
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/offres',
    title: 'Offre Site Artisan — 199 € TTC | Pixeloria',
    description:
      'Site professionnel pour artisan à 199 € TTC, livré sous 72h. Tout inclus : devis, téléphone, WhatsApp, Google Maps, SEO local.',
    locale: 'fr_FR',
    siteName: 'Pixeloria',
  },
};

export default function OffresPage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        {/* Hero de page */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <nav className="breadcrumb" aria-label="Fil d'Ariane">
                <Link href="/">Accueil</Link>
                <span aria-hidden="true"> › </span>
                <span>Offres</span>
              </nav>
              <span className="eyebrow">Tarif et offre</span>
              <h1>Un site professionnel pour artisans, livré sous 72h</h1>
              <p className="page-hero-sub">
                Pixeloria aide les artisans et TPE à obtenir un site clair et efficace pour recevoir plus de demandes de devis. Prix fixe à 199 € TTC, sans abonnement imposé, sans frais cachés.
              </p>
            </div>
          </div>
        </section>

        {/* Les 3 offres */}
        <Services />
        <div className="container">
          <a href="/faq" className="offers-faq-link">Une question sur nos offres&nbsp;? Consulter la FAQ</a>
        </div>

        {/* Tableau comparatif */}
        <ComparisonTable />

        {/* Bloc de réassurance */}
        <section className="section">
          <div className="container">
            <div className="reassurance-band">
              <div className="reassurance-item">
                <strong>Pas d&apos;engagement caché</strong>
                <p>Les conditions sont claires avant le lancement. Résiliation possible sur préavis de 1 mois.</p>
              </div>
              <div className="reassurance-item">
                <strong>Site livré clé en main</strong>
                <p>Mise en ligne, configuration technique et accompagnement à la prise en main inclus.</p>
              </div>
              <div className="reassurance-item">
                <strong>Support réactif</strong>
                <p>Une question&nbsp;? Un problème&nbsp;? Réponse via WhatsApp sous 24&nbsp;h ouvrées.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* Contact — cible des CTA "#contact" de Services/ComparisonTable/FAQ ci-dessus */}
        <Contact />

        {/* CTA final */}
        <section className="section">
          <div className="container">
            <div className="page-cta-block">
              <h2>Pas encore sûr ? On répond à toutes vos questions.</h2>
              <p>
                Demandez un audit gratuit de votre situation. Nous vous orientons vers la formule
                la plus adaptée à votre activité et à votre budget.
              </p>
              <Link href="/#contact" className="btn btn-primary btn-lg">
                Demander un audit gratuit
                <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <p className="page-cta-note">Réponse rapide avec une orientation claire selon votre besoin.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

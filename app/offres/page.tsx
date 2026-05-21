import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Services from '@/components/sections/Services';
import ComparisonTable from '@/components/sections/ComparisonTable';
import FAQ from '@/components/sections/FAQ';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Nos offres de création et refonte de site internet | Pixeloria',
  description:
    'Découvrez les 3 formules Pixeloria : Site Essentiel à 490 € TTC, Site Sérénité à 89 €/mois et Site Croissance à 159 €/mois. Maintenance, SEO local et accompagnement inclus selon la formule.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/offres',
    title: 'Nos offres de création et refonte de site internet | Pixeloria',
    description:
      '3 formules claires pour créer ou refondre votre site. À partir de 490 € TTC ou 89 €/mois avec maintenance et SEO local.',
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
              <span className="eyebrow">Tarifs &amp; formules</span>
              <h1>Des offres claires pour créer ou refondre votre site internet</h1>
              <p className="page-hero-sub">
                Choisissez la formule adaptée à votre situation : une création simple en paiement
                unique, ou un accompagnement mensuel avec maintenance, SEO local et suivi.
                Tous les prix sont TTC, sans frais cachés.
              </p>
            </div>
          </div>
        </section>

        {/* Les 3 offres */}
        <Services />

        {/* Tableau comparatif */}
        <ComparisonTable />

        {/* Bloc de réassurance */}
        <section className="section">
          <div className="container">
            <div className="reassurance-band">
              <div className="reassurance-item">
                <strong>Pas d&apos;engagement caché</strong>
                <p>Les conditions sont claires avant le lancement. Résiliation possible sur préavis 1 mois.</p>
              </div>
              <div className="reassurance-item">
                <strong>Site livré clé en main</strong>
                <p>Mise en ligne, configuration technique et accompagnement à la prise en main inclus.</p>
              </div>
              <div className="reassurance-item">
                <strong>Support réactif</strong>
                <p>Une question ? Un problème ? Réponse via WhatsApp sous 24 h ouvrées.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* CTA final */}
        <section className="section">
          <div className="container">
            <div className="page-cta-block">
              <h2>Vous ne savez pas quelle formule choisir&nbsp;?</h2>
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

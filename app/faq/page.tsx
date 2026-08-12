import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { hreflangLanguages } from '@/lib/hreflang';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import Contact from '@/components/sections/Contact';
import { faqs } from '@/components/sections/faq-data';

const FAQ = dynamic(() => import('@/components/sections/FAQ'));

export const metadata: Metadata = {
  title: 'FAQ — Questions fréquentes · Pixeloria',
  description:
    'Toutes vos questions sur la création de site internet pour artisans et TPE : délais, prix, maintenance, SEO. Réponses claires et honnêtes.',
  alternates: {
    canonical: 'https://pixeloria.fr/faq',
    languages: hreflangLanguages('/faq'),
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ClientEffects />
      <Header />
      <main id="faq-page">
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <nav className="breadcrumb" aria-label="Fil d'Ariane">
                <Link href="/">Accueil</Link>
                <span aria-hidden="true"> › </span>
                <span>FAQ</span>
              </nav>
              <span className="eyebrow">Questions fréquentes</span>
              <h1>Questions fréquentes sur nos sites pour artisans et TPE</h1>
              <p className="page-hero-sub">
                Délais, prix, maintenance, SEO&nbsp;: nos réponses claires aux questions les plus posées.
              </p>
            </div>
          </div>
        </section>
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

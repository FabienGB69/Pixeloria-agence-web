import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Avis clients — Ce que disent nos artisans · Pixeloria',
  description: 'Découvrez les avis de nos clients artisans et TPE sur Pixeloria. Des témoignages réels sur la création de sites internet professionnels.',
  alternates: {
    canonical: 'https://pixeloria.fr/avis',
  },
};

export default function AvisPage() {
  return (
    <>
      <ClientEffects />
      <Header />
      <main id="avis-page">

        {/* ── HERO ── */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <span className="eyebrow">Retours d&apos;expérience</span>
              <h1>Avis de nos clients</h1>
              <p className="page-hero-sub">
                Des artisans, indépendants et TPE partagent leur expérience avec Pixeloria.
              </p>
            </div>
          </div>
        </section>

        <Testimonials />
        <section className="section" style={{ textAlign: 'center', padding: '2rem 1rem 4rem' }}>
          <div className="container">
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Vous êtes client Pixeloria&nbsp;?</p>
            <Link href="/temoignage" className="btn btn-secondary">
              Laisser votre avis →
            </Link>

            <div style={{ marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Vous avez travaillé avec Pixeloria&nbsp;? Partagez votre expérience ou consultez les avis de nos clients.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', justifyContent: 'center', marginTop: '1rem' }}>
                <a
                  href="https://g.page/r/CbgXlHuDVjDzEBI/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  aria-label="Laisser un avis Google sur Pixeloria"
                >
                  <span aria-hidden="true">G</span> Laisser un avis Google
                </a>
                {/* TODO: remplacer par l'URL publique Google Maps de Pixeloria permettant de consulter directement les avis. */}
                <a
                  href="https://g.page/r/CbgXlHuDVjDzEBI/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  aria-label="Voir les avis Google de Pixeloria"
                >
                  Voir nos avis Google
                </a>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

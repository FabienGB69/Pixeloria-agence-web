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
        <Testimonials />
        <section className="section" style={{ textAlign: 'center', padding: '2rem 1rem 4rem' }}>
          <div className="container">
            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Vous êtes client Pixeloria&nbsp;?</p>
            <Link href="/temoignage" className="btn btn-secondary">
              Laisser votre avis →
            </Link>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

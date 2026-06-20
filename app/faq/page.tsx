import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import Contact from '@/components/sections/Contact';

const FAQ = dynamic(() => import('@/components/sections/FAQ'));

export const metadata: Metadata = {
  title: 'FAQ — Questions fréquentes · Pixeloria',
  description:
    'Toutes vos questions sur la création de site internet pour artisans et TPE : délais, prix, maintenance, SEO. Réponses claires et honnêtes.',
  alternates: {
    canonical: 'https://pixeloria.fr/faq',
  },
};

export default function FaqPage() {
  return (
    <>
      <ClientEffects />
      <Header />
      <main id="faq-page">
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

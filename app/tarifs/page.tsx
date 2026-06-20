import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import Services from '@/components/sections/Services';
import ComparisonTable from '@/components/sections/ComparisonTable';
import ForWho from '@/components/sections/ForWho';
import AuditGratuit from '@/components/sections/AuditGratuit';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Tarifs — Site Artisan 199 € TTC · Pixeloria',
  description:
    'Découvrez nos offres : Site Artisan à 199 € TTC livré en 72 h, et Option Visibilité à 49 €/mois avec maintenance et SEO inclus.',
  alternates: {
    canonical: 'https://pixeloria.fr/tarifs',
  },
};

export default function TarifsPage() {
  return (
    <>
      <ClientEffects />
      <Header />
      <main id="tarifs">
        <Services />
        <ComparisonTable />
        <ForWho />
        <AuditGratuit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from 'next';
import { hreflangLanguages } from '@/lib/hreflang';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import Process from '@/components/sections/Process';
import SiteWorks from '@/components/sections/SiteWorks';
import WhyPixeloria from '@/components/sections/WhyPixeloria';
import Marketing from '@/components/sections/Marketing';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Comment ça marche — Notre process en 4 étapes · Pixeloria',
  description: 'Découvrez comment Pixeloria crée votre site internet en 4 étapes simples : audit, design, développement et livraison en 72 h.',
  alternates: {
    canonical: 'https://pixeloria.fr/comment-ca-marche',
    languages: hreflangLanguages('/comment-ca-marche'),
  },
};

export default function CommentCaMarchePage() {
  return (
    <>
      <ClientEffects />
      <Header />
      <main id="comment-ca-marche-page">
        <Process />
        <SiteWorks />
        <WhyPixeloria />
        <Marketing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

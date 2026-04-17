import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Marketing from '@/components/sections/Marketing';
import Portfolio from '@/components/sections/Portfolio';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Pixeloria | Agence web créative – Design, Marketing & SEO',
  description:
    'Pixeloria assemble design, branding, copywriting et SEO pour des marques ambitieuses. Création de sites web, refonte et visibilité digitale.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/',
    title: 'Pixeloria | Agence web créative – Design, Marketing & SEO',
    description:
      'Pixeloria assemble design, branding, copywriting et SEO pour des marques ambitieuses. Création de sites web, refonte et visibilité digitale.',
    images: [{ url: 'https://pixeloria.fr/assets/pixeloria-logo.svg' }],
    locale: 'fr_FR',
    siteName: 'Pixeloria',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pixeloria_fr',
    title: 'Pixeloria | Agence web créative – Design, Marketing & SEO',
    description:
      'Pixeloria assemble design, branding, copywriting et SEO pour des marques ambitieuses.',
    images: ['https://pixeloria.fr/assets/pixeloria-logo.svg'],
  },
};

export default function HomePage() {
  return (
    <>
      <ClientEffects />
      <JsonLd />
      <Header />
      <main id="home">
        <Hero />
        <Services />
        <Marketing />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyPixeloria from '@/components/sections/WhyPixeloria';
import SiteWorks from '@/components/sections/SiteWorks';
import ForWho from '@/components/sections/ForWho';
import Marketing from '@/components/sections/Marketing';
import Portfolio from '@/components/sections/Portfolio';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Pixeloria | Création & refonte de sites web pour TPE, PME et artisans',
  description:
    'Pixeloria crée des sites internet professionnels pour TPE, PME, artisans et commerces locaux. Design sur-mesure, SEO local inclus, livraison en 5 jours. À partir de 490 € TTC ou 89 €/mois.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/',
    title: 'Pixeloria | Création & refonte de sites web pour TPE, PME et artisans',
    description:
      'Sites internet professionnels pour TPE, PME et artisans locaux. SEO local inclus, livraison rapide, prix transparents. À partir de 490 € TTC.',
    images: [{ url: 'https://pixeloria.fr/assets/pixeloria-logo.svg' }],
    locale: 'fr_FR',
    siteName: 'Pixeloria',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pixeloria_fr',
    title: 'Pixeloria | Création & refonte de sites web pour TPE, PME et artisans',
    description:
      'Sites internet professionnels pour artisans et PME. SEO local, livraison rapide, à partir de 490 € TTC.',
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
        <WhyPixeloria />
        <SiteWorks />
        <ForWho />
        <Marketing />
        <Portfolio />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import LaunchBanner from '@/components/ui/LaunchBanner';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import WhyPixeloria from '@/components/sections/WhyPixeloria';
import GoogleReviews from '@/components/sections/GoogleReviews';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Pixeloria — Création & refonte de sites pour artisans',
  description:
    'Création et refonte de sites internet pour artisans et TPE. Site Artisan à 199 € TTC, livré en 72 h. Maintenance dès 49 €/mois.',
  alternates: {
    canonical: 'https://pixeloria.fr/',
    languages: {
      'fr-FR': 'https://pixeloria.fr/',
      'en-US': 'https://pixeloria.fr/en',
      'x-default': 'https://pixeloria.fr/en',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/',
    siteName: 'Pixeloria',
    locale: 'fr_FR',
    title: 'Pixeloria — Création & refonte de sites pour artisans',
    description:
      'Création et refonte de sites internet pour artisans et TPE. Site Artisan à 199 € TTC, livré en 72 h. Maintenance dès 49 €/mois.',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pixeloria_fr',
    title: 'Pixeloria — Création & refonte de sites internet pour artisans et TPE',
    description: 'Sites internet professionnels pour artisans et TPE. Création, refonte, maintenance et SEO.',
  },
};

export default function HomePage() {
  return (
    <>
      <ClientEffects />
      <JsonLd />
      <LaunchBanner />
      <Header />
      <main id="home">
        <Hero />
        <Services />
        <Process />
        <WhyPixeloria />
        <GoogleReviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

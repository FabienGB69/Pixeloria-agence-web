import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import LaunchBanner from '@/components/ui/LaunchBanner';
import Hero from '@/components/sections/Hero';
import Intro from '@/components/sections/Intro';
import Services from '@/components/sections/Services';
import ComparisonTable from '@/components/sections/ComparisonTable';
import WhyPixeloria from '@/components/sections/WhyPixeloria';
import SiteWorks from '@/components/sections/SiteWorks';
import ForWho from '@/components/sections/ForWho';
import AuditGratuit from '@/components/sections/AuditGratuit';
import Marketing from '@/components/sections/Marketing';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import JsonLd from '@/components/JsonLd';

const Portfolio = dynamic(() => import('@/components/sections/Portfolio'));
const FAQ = dynamic(() => import('@/components/sections/FAQ'));

export const metadata: Metadata = {
  title: 'Pixeloria — Création & refonte de sites internet pour artisans et TPE',
  description:
    'Création et refonte de sites internet professionnels pour artisans et TPE. Site Artisan à 199 € TTC, livré en 72 h. Option Visibilité à 49 €/mois avec maintenance et SEO inclus.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/',
    siteName: 'Pixeloria',
    locale: 'fr_FR',
    title: 'Pixeloria — Création & refonte de sites internet pour artisans et TPE',
    description:
      'Création et refonte de sites internet professionnels pour artisans et TPE. Site Artisan à 199 € TTC, livré en 72 h. Option Visibilité à 49 €/mois avec maintenance et SEO inclus.',
    images: [{
      url: 'https://pixeloria.fr/og/pixeloria-og-image.png',
      secureUrl: 'https://pixeloria.fr/og/pixeloria-og-image.png',
      width: 1200,
      height: 630,
      alt: 'Pixeloria — Création et refonte de sites internet pour artisans et TPE',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pixeloria_fr',
    title: 'Pixeloria — Création & refonte de sites internet pour artisans et TPE',
    description: 'Sites internet professionnels pour artisans et TPE. Création, refonte, maintenance et SEO.',
    images: [{
      url: 'https://pixeloria.fr/og/pixeloria-og-image.png',
      alt: 'Pixeloria — Création et refonte de sites internet pour artisans et TPE',
    }],
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
        <Intro />
        <Services />
        <ComparisonTable />
        <WhyPixeloria />
        <SiteWorks />
        <ForWho />
        <AuditGratuit />
        <Marketing />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

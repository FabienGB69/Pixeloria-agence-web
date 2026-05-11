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
  title: 'Création et refonte de sites internet pour TPE, PME et artisans | Pixeloria',
  description:
    'Pixeloria crée et refond des sites vitrines pour TPE, PME et artisans. Offre one-shot à 490 € TTC ou accompagnement mensuel dès 89 € TTC/mois avec maintenance et SEO local de base.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/',
    title: 'Création et refonte de sites internet pour TPE, PME et artisans | Pixeloria',
    description:
      'Un site professionnel, moderne et optimisé pour le SEO local, sans gros budget de départ.',
    images: [{ url: 'https://pixeloria.fr/assets/pixeloria-logo.svg' }],
    locale: 'fr_FR',
    siteName: 'Pixeloria',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pixeloria_fr',
    title: 'Création et refonte de sites internet pour TPE, PME et artisans | Pixeloria',
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

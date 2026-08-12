import type { Metadata } from 'next';
import Link from 'next/link';
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
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <nav className="breadcrumb" aria-label="Fil d'Ariane">
                <Link href="/">Accueil</Link>
                <span aria-hidden="true"> › </span>
                <span>Comment ça marche</span>
              </nav>
              <span className="eyebrow">Notre process</span>
              <h1>Comment ça marche&nbsp;: votre site en 4 étapes</h1>
              <p className="page-hero-sub">
                De l&apos;audit à la livraison, un parcours simple et transparent pour obtenir votre site en 72 h.
              </p>
            </div>
          </div>
        </section>
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

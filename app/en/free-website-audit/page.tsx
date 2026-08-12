import type { Metadata } from 'next';
import { hreflangSelf } from '@/lib/hreflang';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import FreeAuditForm from './FreeAuditForm';

export const metadata: Metadata = {
  title: 'Free Contractor Website Audit | Pixeloria',
  description:
    'Get a free, practical review of your contractor or trade business website. We identify three to five opportunities around mobile usability, calls to action, estimate requests, trust signals and local SEO.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/free-website-audit',
    locale: 'en_GB',
    siteName: 'Pixeloria',
    title: 'Free Contractor Website Audit | Pixeloria',
    description:
      'Get a free, practical review of your contractor or trade business website. Three to five actionable opportunities, no obligation.',
  },
  alternates: {
    canonical: 'https://pixeloria.fr/en/free-website-audit',
    languages: hreflangSelf('https://pixeloria.fr/en/free-website-audit'),
  },
};

export default function FreeWebsiteAuditPage() {
  return (
    <>
      <ClientEffects />
      <HeaderEn />
      <main id="free-website-audit">

        {/* ── HERO ── */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <span className="eyebrow">Free audit</span>
              <h1>Get a Free Contractor Website Audit</h1>
              <p className="page-hero-sub">
                Receive a short, practical review of your current website. We will
                identify three to five opportunities involving:
              </p>
              <ul className="audit-checklist">
                <li>Mobile usability</li>
                <li>Message clarity</li>
                <li>Calls to action</li>
                <li>Estimate request flow</li>
                <li>Trust signals</li>
                <li>Service-area visibility</li>
                <li>Local SEO structure</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── FORM ── */}
        <section className="section">
          <div className="container">
            <div className="contact-form-wrapper reveal" style={{ maxWidth: '640px', margin: '0 auto' }}>
              <FreeAuditForm />
            </div>
          </div>
        </section>

      </main>
      <Footer locale="en" />
    </>
  );
}

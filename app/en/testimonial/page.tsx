import type { Metadata } from 'next';
import Link from 'next/link';
import { hreflangLanguages } from '@/lib/hreflang';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import TestimonialForm from '@/components/forms/TestimonialForm';

export const metadata: Metadata = {
  title: 'Leave a Review — Share Your Experience | Pixeloria',
  description:
    'Had a website built with Pixeloria? Share your experience to help other tradespeople and small business owners make the right choice.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/testimonial',
    locale: 'en_GB',
    siteName: 'Pixeloria',
    title: 'Leave a Review — Share Your Experience | Pixeloria',
    description: 'Had a website built with Pixeloria? Share your experience.',
  },
  alternates: { canonical: 'https://pixeloria.fr/en/testimonial', languages: hreflangLanguages('/en/testimonial') },
  robots: { index: false, follow: false },
};

export default function TestimonialEnPage() {
  return (
    <>
      <ClientEffects />
      <HeaderEn />
      <main id="testimonial">

        {/* ── HERO ── */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <span className="eyebrow">Your experience</span>
              <h1>Share your review</h1>
              <p className="page-hero-sub">
                Your feedback helps other tradespeople and business owners make an informed choice. It takes two minutes.
              </p>
            </div>
          </div>
        </section>

        {/* ── FORM ── */}
        <section className="section temoignage-section">
          <div className="container">
            <div className="temoignage-layout">

              <div className="temoignage-intro reveal">
                <h2>Tell us about your experience</h2>
                <p>
                  What did you enjoy most working with Pixeloria? Did you see concrete results? Your honest review — whatever it says — helps us improve and helps future clients decide with confidence.
                </p>
                <ul className="temoignage-hints">
                  <li>What was the process like?</li>
                  <li>How quickly did your site go live?</li>
                  <li>Have you received more enquiries?</li>
                  <li>Would you recommend Pixeloria?</li>
                </ul>
                <p className="temoignage-privacy">
                  Your first name and trade will be displayed publicly. No email address or personal data will be shared.
                  <br />
                  <Link href="/politique-confidentialite">Privacy policy</Link>
                </p>
              </div>

              <div className="temoignage-form-wrap reveal">
                <TestimonialForm locale="en" />
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer locale="en" />
    </>
  );
}

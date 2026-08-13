import type { Metadata } from 'next';
import Link from 'next/link';
import { hreflangLanguages } from '@/lib/hreflang';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import ContactForm from '@/components/forms/ContactForm';
import GoogleReviews from '@/components/sections/GoogleReviews';

export const metadata: Metadata = {
  title: 'Client Reviews — What Our Clients Say | Pixeloria',
  description:
    'Read reviews from contractors and small business owners who trusted Pixeloria for their professional website. Real results, real stories.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/reviews',
    locale: 'en_US',
    siteName: 'Pixeloria',
    title: 'Client Reviews — What Our Clients Say | Pixeloria',
    description: 'Real reviews from contractors and small business owners who got their website with Pixeloria.',
  },
  alternates: { canonical: 'https://pixeloria.fr/en/reviews', languages: hreflangLanguages('/en/reviews') },
};

export default function ReviewsEnPage() {
  return (
    <>
      <ClientEffects />
      <HeaderEn />
      <main id="reviews">

        {/* ── HERO ── */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <span className="eyebrow">Reviews</span>
              <h1>What our clients say</h1>
              <p className="page-hero-sub">
                Tradespeople, freelancers and local business owners who trusted Pixeloria to build their online presence.
              </p>
              <div className="page-hero-actions">
                <a href="#contact" className="btn btn-primary">Start my project →</a>
                <Link href="/en/testimonial" className="btn btn-ghost">Share your experience</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <GoogleReviews locale="en" />

        {/* ── WHY CLIENTS TRUST US ── */}
        <section className="section section-tinted">
          <div className="container">
            <div className="testimonials-layout">
              <div className="testimonials-editorial reveal">
                <span className="testimonials-badge">Trust</span>
                <h2>Why work with us?</h2>
                <p className="testimonials-sub">
                  Pixeloria supports small businesses and freelancers with a simple, clear and results-driven approach.
                </p>
                <p className="testimonials-body">
                  A website should not just look good. It should be clear, quick to understand, adapted to your industry and designed to turn visitors into leads. With Pixeloria, you move forward step by step, with a single point of contact, a simple method and transparent pricing.
                </p>
                <div className="testimonials-cta-group">
                  <a href="#contact" className="btn btn-primary">Discuss my project</a>
                  <Link href="/en/pricing" className="btn btn-secondary">View pricing</Link>
                </div>
              </div>

              <div className="trust-card reveal">
                <div className="tc-halo" aria-hidden="true" />
                <div className="tc-card-header">
                  <div className="tc-shield-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 2l7 3v5c0 5-3.5 9-7 10C8.5 19 5 15 5 10V5l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="tc-label">The Pixeloria Method</p>
                    <h3>An approach built for business owners</h3>
                  </div>
                </div>
                <p className="tc-intro">
                  Pixeloria focuses on websites that are useful, credible and easy to evolve — without unnecessary complexity.
                </p>
                <div className="tc-grid">
                  {[
                    { icon: '⚡', title: 'Fast delivery', desc: 'Your site online within days, not weeks.' },
                    { icon: '💲', title: 'Fixed price', desc: 'One flat price, agreed upfront. No hidden costs.' },
                    { icon: '📍', title: 'Local SEO', desc: 'Built to rank in your local area on Google.' },
                    { icon: '🔒', title: 'You own it', desc: 'All files and logins are yours from day one.' },
                  ].map((pt) => (
                    <div key={pt.title} className="tc-point">
                      <div className="tc-point-icon" aria-hidden="true">{pt.icon}</div>
                      <strong>{pt.title}</strong>
                      <p>{pt.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA SUBMIT ── */}
        <section className="section section-dark">
          <div className="container">
            <div className="audit-inner reveal">
              <div className="audit-text">
                <span className="eyebrow">Share your story</span>
                <h2>Have you worked with Pixeloria?</h2>
                <p>We would love to hear about your experience. Your feedback helps other business owners make the right choice.</p>
              </div>
              <Link href="/en/testimonial" className="btn btn-primary">Leave a review →</Link>

              <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
                <p>Have you worked with Pixeloria? Share your experience or read our customer reviews.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginTop: '1rem' }}>
                  <a
                    href="https://g.page/r/CbgXlHuDVjDzEBI/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    aria-label="Leave a Google review for Pixeloria"
                  >
                    <span aria-hidden="true">G</span> Leave a Google review
                  </a>
                  {/* TODO: replace with Pixeloria's public Google Maps URL for viewing reviews directly. */}
                  <a
                    href="https://g.page/r/CbgXlHuDVjDzEBI/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    aria-label="See Google reviews for Pixeloria"
                  >
                    View our Google reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-layout">
              <div className="contact-text reveal">
                <span className="eyebrow">Contact</span>
                <h2>Ready to get started?</h2>
                <p>Tell us about your project. We reply within 48 hours.</p>
                <div className="contact-reassurance">
                  <p>✓ Free, no-commitment estimate</p>
                  <p>✓ Reply within 48h</p>
                  <p>✓ All communication in English</p>
                </div>
              </div>
              <div className="contact-form-wrap reveal">
                <ContactForm locale="en" />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer locale="en" />
    </>
  );
}

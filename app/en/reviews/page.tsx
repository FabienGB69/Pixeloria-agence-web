import type { Metadata } from 'next';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import ContactFormEn from '@/app/en/ContactFormEn';

export const metadata: Metadata = {
  title: 'Client Reviews — What Our Clients Say | Pixeloria',
  description:
    'Read reviews from tradespeople and micro-business owners who trusted Pixeloria for their professional website. Real results, real stories.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/reviews',
    locale: 'en_GB',
    siteName: 'Pixeloria',
    title: 'Client Reviews — What Our Clients Say | Pixeloria',
    description: 'Real reviews from tradespeople and small business owners who got their website with Pixeloria.',
  },
  alternates: { canonical: 'https://pixeloria.fr/en/reviews' },
};

const reviews = [
  {
    name: 'Marie L.',
    trade: 'House painter, Lyon',
    rating: 5,
    text: 'I had my website live in less than a week. Before, I had nothing online. Now I get enquiries directly through my site every week. The investment paid for itself within the first month.',
  },
  {
    name: 'Jean-Pierre B.',
    trade: 'Plumber, Grenoble',
    rating: 5,
    text: 'Simple process, clear price, fast delivery. I was sceptical at first but the result is professional and my customers trust the site immediately. Exactly what I needed.',
  },
  {
    name: 'Sophie M.',
    trade: 'Concierge services, Annecy',
    rating: 5,
    text: 'Pixeloria understood my business straight away. The site reflects exactly who I am and what I offer. My online image has completely changed.',
  },
  {
    name: 'Thomas R.',
    trade: 'Landscape gardener, Valence',
    rating: 5,
    text: 'Very reactive team, honest communication, no technical jargon. The Visibility Option is worth it — my Google ranking has improved month by month.',
  },
  {
    name: 'Isabelle C.',
    trade: 'Freelance copywriter',
    rating: 5,
    text: 'As an English-speaking business owner in France, finding a web agency that communicates in English was a relief. Pixeloria delivered exactly what they promised.',
  },
  {
    name: 'Marc D.',
    trade: 'Electrician, Saint-Étienne',
    rating: 5,
    text: 'I was worried it would be complicated but it was straightforward from start to finish. Three days after sending my brief, my site was live.',
  },
];

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

        {/* ── REVIEWS GRID ── */}
        <section className="section testimonials-section" id="testimonials">
          <div className="testimonials-halo testimonials-halo--top" aria-hidden="true" />
          <div className="testimonials-halo testimonials-halo--bottom" aria-hidden="true" />
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Client stories</span>
              <h2>Real results for real businesses</h2>
            </div>
            <div
              className="reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem',
                marginTop: '3rem',
              }}
            >
              {reviews.map((review) => (
                <div
                  key={review.name}
                  className="why-card"
                  style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                >
                  <div style={{ display: 'flex', gap: '0.25rem' }}>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i} style={{ color: '#fbbf24' }}>★</span>
                    ))}
                  </div>
                  <p style={{ fontStyle: 'italic', lineHeight: 1.6, flex: 1 }}>
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div>
                    <strong style={{ display: 'block', color: 'var(--primary)' }}>{review.name}</strong>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{review.trade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                  A website should not just look good. It should be clear, quick to understand, adapted to your industry and designed to turn visitors into enquiries. With Pixeloria, you move forward step by step, with a single point of contact, a simple method and transparent pricing.
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
                    { icon: '💶', title: 'Fixed price', desc: 'What we quote is what you pay. No surprises.' },
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
                <p>Tell us about your project. We reply within 24 hours.</p>
                <div className="contact-reassurance">
                  <p>✓ Free, no-commitment quote</p>
                  <p>✓ Reply within 24h</p>
                  <p>✓ All communication in English</p>
                </div>
              </div>
              <div className="contact-form-wrap reveal">
                <ContactFormEn />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

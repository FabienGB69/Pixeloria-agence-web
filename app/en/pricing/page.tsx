import type { Metadata } from 'next';
import Link from 'next/link';
import { hreflangLanguages } from '@/lib/hreflang';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import ContactFormEn from '@/app/en/ContactFormEn';
import TrackOnMount from '@/components/analytics/TrackOnMount';

export const metadata: Metadata = {
  title: 'Pricing — Starter, Growth & Website Care Plans | Pixeloria',
  description:
    'Starter Website at $499 one-time, Growth Website at $899 one-time, and Website Care & Local Visibility at $79/month. No long-term contract required to launch.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/pricing',
    locale: 'en_GB',
    siteName: 'Pixeloria',
    title: 'Pricing — Starter, Growth & Website Care Plans | Pixeloria',
    description: 'Starter Website $499, Growth Website $899, and Website Care & Local Visibility $79/month.',
  },
  alternates: { canonical: 'https://pixeloria.fr/en/pricing', languages: hreflangLanguages('/en/pricing') },
};

export default function PricingEnPage() {
  return (
    <>
      <TrackOnMount page="pricing" />
      <ClientEffects />
      <HeaderEn />
      <main id="pricing">

        {/* ── HERO ── */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <span className="eyebrow">Pricing</span>
              <h1>Simple, transparent pricing</h1>
              <p className="page-hero-sub">
                Two website plans for contractors and local service businesses, each a single upfront price — plus an optional monthly plan to keep your site working for you.
              </p>
              <div className="page-hero-actions">
                <a href="#contact" className="btn btn-primary">Request a free audit →</a>
                <Link href="/en/reviews" className="btn btn-ghost">Read client reviews</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── PACKAGES ── */}
        <section className="section" id="packages">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Our offer</span>
              <h2>Website plans for contractors and local service businesses</h2>
              <p className="section-sub">
                Fixed prices, no forced subscription. What you see is what you pay.
              </p>
            </div>

            <div className="pricing-cards pricing-cards--three">

              <div className="pricing-card reveal">
                <p className="pricing-label">Starter Website</p>
                <p className="pricing-price">$499 <span>one-time</span></p>
                <p className="pricing-sublabel">One-time payment — live 5 business days after we receive your content</p>
                <p className="pricing-accroche">
                  A one-page website for contractors, built to generate estimate requests.
                </p>
                <p className="pricing-list-title">Included:</p>
                <ul>
                  <li>One-page contractor website</li>
                  <li>Up to 6 sections</li>
                  <li>Mobile-first design</li>
                  <li>Click-to-call button</li>
                  <li>Estimate request form</li>
                  <li>Service-area section</li>
                  <li>Services section</li>
                  <li>Customer review section</li>
                  <li>Project gallery</li>
                  <li>Basic on-page SEO</li>
                  <li>Analytics setup</li>
                  <li>Website launch</li>
                </ul>
                <p className="pricing-note">Ready-to-launch website, live, mobile-optimized and Google-ready.</p>
                <a href="#contact" className="btn btn-primary">Get Your Website →</a>
              </div>

              <div className="pricing-card pricing-card--featured reveal">
                <span className="pricing-badge">Most Popular</span>
                <p className="pricing-label">Growth Website</p>
                <p className="pricing-price">$899 <span>one-time</span></p>
                <p className="pricing-sublabel">One-time payment — live in 1–3 weeks depending on scope</p>
                <p className="pricing-accroche">
                  A multi-page website for contractors and home-service businesses who want a stronger local search presence.
                </p>
                <p className="pricing-list-title">Included:</p>
                <ul>
                  <li>Up to 5 pages</li>
                  <li>Custom conversion-focused design</li>
                  <li>Individual service pages</li>
                  <li>Service-area structure</li>
                  <li>Lead-generation forms</li>
                  <li>Customer reviews</li>
                  <li>Project gallery</li>
                  <li>Technical SEO</li>
                  <li>Keyword mapping</li>
                  <li>Schema markup</li>
                  <li>Analytics setup</li>
                  <li>Google Search Console setup</li>
                  <li>Website launch</li>
                </ul>
                <p className="pricing-note">Built to rank locally and convert visitors into booked jobs.</p>
                <a href="#contact" className="btn btn-primary">Start My Website →</a>
              </div>

              <div className="pricing-card reveal">
                <p className="pricing-label">Website Care &amp; Local Visibility</p>
                <p className="pricing-price">$79 <span>/month</span></p>
                <p className="pricing-sublabel">Add-on to either website</p>
                <p className="pricing-accroche">
                  Your site stays online, secure and up to date — without you having to think about it.
                </p>
                <p className="pricing-list-title">Included:</p>
                <ul>
                  <li>Hosting management</li>
                  <li>Technical maintenance</li>
                  <li>Security updates</li>
                  <li>Backups</li>
                  <li>Content edits</li>
                  <li>Service-area updates</li>
                  <li>Conversion checks</li>
                  <li>Basic local SEO improvements</li>
                  <li>Search Console monitoring</li>
                  <li>Monthly performance summary</li>
                </ul>
                <p className="pricing-note">Cancel anytime — no long-term contract.</p>
                <a href="#contact" className="btn btn-secondary">Add Website Care →</a>
              </div>

            </div>

            <p className="pricing-disclaimer reveal">
              All prices are in USD · <a href="#contact">Contact us</a> for a free, no-obligation estimate.
            </p>

            <a href="/en/faq" className="offers-faq-link">Questions about our packages? View the FAQ</a>
          </div>
        </section>

        {/* ── COMPARISON ── */}
        <section className="section section-tinted" id="comparison">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Comparison</span>
              <h2>Starter Website vs Growth Website</h2>
            </div>

            <div className="comparison-table-wrap reveal" style={{ overflowX: 'auto' }}>
              <table className="comparison-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-muted)' }}>Feature</th>
                    <th style={{ textAlign: 'center', padding: '1rem', color: 'var(--primary)' }}>Starter Website<br /><small>$499 one-time</small></th>
                    <th style={{ textAlign: 'center', padding: '1rem', color: 'var(--accent)' }}>Growth Website<br /><small>$899 one-time</small></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['One-page website', true, false],
                    ['Up to 5 pages', false, true],
                    ['Mobile-first, responsive design', true, true],
                    ['Custom conversion-focused design', false, true],
                    ['Individual service pages', false, true],
                    ['Service-area section', true, true],
                    ['Estimate / lead-generation forms', true, true],
                    ['Customer reviews', true, true],
                    ['Project gallery', true, true],
                    ['On-page SEO', true, true],
                    ['Technical SEO & keyword mapping', false, true],
                    ['Schema markup', false, true],
                    ['Analytics setup', true, true],
                    ['Google Search Console setup', false, true],
                    ['Website launch', true, true],
                  ].map(([feature, starter, growth]) => (
                    <tr key={String(feature)} style={{ borderTop: '1px solid var(--border)' }}>
                      <td style={{ padding: '0.875rem 1rem', color: 'var(--text)' }}>{feature as string}</td>
                      <td style={{ textAlign: 'center', padding: '0.875rem 1rem' }}>
                        {starter ? <span style={{ color: 'var(--primary)' }}>✓</span> : <span style={{ color: 'var(--text-muted)', opacity: 0.3 }}>—</span>}
                      </td>
                      <td style={{ textAlign: 'center', padding: '0.875rem 1rem' }}>
                        {growth ? <span style={{ color: 'var(--accent)' }}>✓</span> : <span style={{ opacity: 0.3 }}>—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── WHO IT'S FOR ── */}
        <section className="section" id="who">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Who we work with</span>
              <h2>Built for contractors and local service businesses</h2>
              <p className="section-sub">
                If you run a contracting, home-service or local service business, these plans are designed for you.
              </p>
            </div>
            <div className="for-who-grid reveal">
              {[
                { icon: '🏗️', label: 'Contractors & builders' },
                { icon: '🔧', label: 'Plumbers & electricians' },
                { icon: '🎨', label: 'Painters & decorators' },
                { icon: '🌳', label: 'Gardeners & landscapers' },
                { icon: '🏠', label: 'Concierge services' },
                { icon: '🛒', label: 'Retail & local shops' },
                { icon: '🍽️', label: 'Caterers & food businesses' },
                { icon: '💼', label: 'Freelancers & consultants' },
              ].map(({ icon, label }) => (
                <div key={label} className="for-who-item">
                  <span className="for-who-icon">{icon}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FREE AUDIT CTA ── */}
        <section className="section section-dark">
          <div className="container">
            <div className="audit-inner reveal">
              <div className="audit-text">
                <span className="eyebrow">Free offer</span>
                <h2>Get a free website audit</h2>
                <p>
                  Send us your current website (or describe your project) and we will come back to you within 48 hours with honest, actionable feedback — no strings attached.
                </p>
              </div>
              <a href="#contact" className="btn btn-primary">Request my free audit →</a>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-layout">
              <div className="contact-text reveal">
                <span className="eyebrow">Contact</span>
                <h2>Let&apos;s talk about your project</h2>
                <p>Tell us about your business and what you need. We reply within 48h.</p>
                <div className="contact-reassurance">
                  <p>✓ Free, no-commitment consultation</p>
                  <p>✓ Reply within 48h</p>
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
      <Footer locale="en" />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import ContactFormEn from '@/app/en/ContactFormEn';

export const metadata: Metadata = {
  title: 'Pricing — Professional Website Packages | Pixeloria',
  description:
    'Artisan Site at €199 inc. VAT, delivered in 72h. Optional Visibility Option at €49/month with maintenance and local SEO. No forced subscription.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/pricing',
    locale: 'en_GB',
    siteName: 'Pixeloria',
    title: 'Pricing — Professional Website Packages | Pixeloria',
    description: 'Artisan Site at €199 inc. VAT, delivered in 72h. Optional Visibility Option at €49/month.',
  },
  alternates: { canonical: 'https://pixeloria.fr/en/pricing' },
};

export default function PricingEnPage() {
  return (
    <>
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
                One clear package for tradespeople and micro-businesses. A one-off website fee, and an optional monthly add-on if you want us to keep it growing.
              </p>
              <div className="page-hero-actions">
                <a href="#contact" className="btn btn-primary">Get a free quote →</a>
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
              <h2>A professional website for tradespeople, delivered in 72h</h2>
              <p className="section-sub">
                Fixed price, no forced subscription. What we quote is what you pay.
              </p>
            </div>

            <div className="pricing-cards pricing-cards--two">

              <div className="pricing-card pricing-card--featured reveal">
                <span className="pricing-badge">The artisan offer</span>
                <p className="pricing-label">Artisan Site</p>
                <p className="pricing-price">€199 <span>inc. VAT</span></p>
                <p className="pricing-sublabel">One-off payment — delivered in 72h</p>
                <p className="pricing-accroche">
                  A professional website for tradespeople, built to generate quote requests.
                </p>
                <p className="pricing-list-title">Included:</p>
                <ul>
                  <li>One page professional website</li>
                  <li>Up to 5 sections</li>
                  <li>Modern design</li>
                  <li>Mobile-ready</li>
                  <li>Phone button</li>
                  <li>WhatsApp button</li>
                  <li>Quote form</li>
                  <li>Google Maps</li>
                  <li>Services list</li>
                  <li>Service area</li>
                  <li>Client reviews</li>
                  <li>Legal notices</li>
                  <li>Go-live</li>
                  <li>Basic local SEO</li>
                </ul>
                <p className="pricing-note">Ready-to-go website, live, mobile-optimised and Google-ready.</p>
                <a href="#contact" className="btn btn-primary">Start my website →</a>
              </div>

              <div className="pricing-card reveal">
                <p className="pricing-label">Visibility Option</p>
                <p className="pricing-price">€49 <span>inc. VAT / month</span></p>
                <p className="pricing-sublabel">Add-on to the Artisan Site</p>
                <p className="pricing-accroche">
                  Your site stays up to date, secure and optimised — without you having to think about it.
                </p>
                <p className="pricing-list-title">Included:</p>
                <ul>
                  <li>Technical maintenance</li>
                  <li>Regular backups</li>
                  <li>Minor corrections</li>
                  <li>Small text, photo or service updates</li>
                  <li>Contact details & opening hours updates</li>
                  <li>Add or update service areas</li>
                  <li>Mobile display check</li>
                  <li>Progressive local SEO optimisation</li>
                  <li>Priority support by message</li>
                </ul>
                <p className="pricing-list-title" style={{ marginTop: '0.75rem' }}>Not included:</p>
                <ul>
                  <li>Full redesign</li>
                  <li>New complex pages</li>
                  <li>Google Ads</li>
                  <li>Social media management</li>
                  <li>Blog articles</li>
                </ul>
                <p className="pricing-note">No commitment · Cancel at any time.</p>
                <a href="#contact" className="btn btn-secondary">Add Visibility Option →</a>
              </div>

            </div>

            <p className="pricing-disclaimer reveal">
              All prices include VAT · <a href="#contact">Contact us</a> for a free personalised quote.
            </p>

            <a href="/en/faq" className="offers-faq-link">Questions about our packages? View the FAQ</a>
          </div>
        </section>

        {/* ── COMPARISON ── */}
        <section className="section section-tinted" id="comparison">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Comparison</span>
              <h2>Artisan Site vs Visibility Option</h2>
            </div>

            <div className="comparison-table-wrap reveal" style={{ overflowX: 'auto' }}>
              <table className="comparison-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '1rem', color: 'var(--text-muted)' }}>Feature</th>
                    <th style={{ textAlign: 'center', padding: '1rem', color: 'var(--primary)' }}>Artisan Site<br /><small>€199 one-off</small></th>
                    <th style={{ textAlign: 'center', padding: '1rem', color: 'var(--accent)' }}>+ Visibility<br /><small>€49/month</small></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Professional website', true, true],
                    ['Mobile-optimised design', true, true],
                    ['Phone & WhatsApp buttons', true, true],
                    ['Quote form', true, true],
                    ['Basic local SEO', true, true],
                    ['Go-live on your domain', true, true],
                    ['Monthly maintenance', false, true],
                    ['Content updates', false, true],
                    ['Progressive SEO', false, true],
                    ['Priority support', false, true],
                    ['Regular backups', false, true],
                  ].map(([feature, artisan, visibility]) => (
                    <tr key={String(feature)} style={{ borderTop: '1px solid var(--border)' }}>
                      <td style={{ padding: '0.875rem 1rem', color: 'var(--text)' }}>{feature as string}</td>
                      <td style={{ textAlign: 'center', padding: '0.875rem 1rem' }}>
                        {artisan ? <span style={{ color: 'var(--primary)' }}>✓</span> : <span style={{ color: 'var(--text-muted)', opacity: 0.3 }}>—</span>}
                      </td>
                      <td style={{ textAlign: 'center', padding: '0.875rem 1rem' }}>
                        {visibility ? <span style={{ color: 'var(--accent)' }}>✓</span> : <span style={{ opacity: 0.3 }}>—</span>}
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
              <h2>Built for tradespeople and micro-businesses</h2>
              <p className="section-sub">
                If you work with your hands, run a local service or own a small shop, this package is designed for you.
              </p>
            </div>
            <div className="for-who-grid reveal">
              {[
                { icon: '🏗️', label: 'Contractors & builders' },
                { icon: '🔧', label: 'Plumbers & electricians' },
                { icon: '🎨', label: 'Painters & decorators' },
                { icon: '🌳', label: 'Gardeners & landscapers' },
                { icon: '🏠', label: 'Concierge services' },
                { icon: '🛒', label: 'Local shops & artisans' },
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
                <p>Tell us about your business and what you need. We reply within 24h.</p>
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

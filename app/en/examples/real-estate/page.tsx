import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getDemoImages } from '@/lib/demo-images';

export const metadata: Metadata = {
  title: 'Demo website for estate agents | Pixeloria',
  description:
    'See what a professional website looks like for an estate agent — created by Pixeloria. Full demo with services, transactions, reviews and contact.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/examples/real-estate',
    title: 'Demo website for estate agents | Pixeloria',
    description:
      'See what a professional website looks like for an estate agent — created by Pixeloria.',
    locale: 'en_GB',
    siteName: 'Pixeloria',
  },
};

const services = [
  {
    title: 'Property Sales',
    desc: 'Free valuation, flexible mandate, listings on all major portals, dedicated negotiator from start to completion.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.8" />
        <polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Long-Term Lettings',
    desc: 'Tenant screening, inventory, lease preparation, rent collection and receipts. End-to-end letting service.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 8l5 3-5 3V8z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Property Management',
    desc: 'Rent collection, receipts, tax support, maintenance coordination. Peace of mind — hands-off ownership.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Free Valuation',
    desc: 'Accurate market valuation with a detailed written report, including local comparables. Ready within 48 hours.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Home Staging',
    desc: 'Property styling before sale — declutter, rearrange, dress. Professional photos included to maximise appeal.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l9 5v8l-9 5-9-5V8l9-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 3v13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Investment Advice',
    desc: 'High-yield property selection, rental return calculation, full legal guidance. Build your portfolio with confidence.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <polyline points="16 7 22 7 22 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const projects = [
  {
    label: 'Paris 11th, T3',
    location: 'Paris 11th',
    surface: '65 m²',
    gradientBefore: 'linear-gradient(135deg, #44403c 0%, #57534e 40%, #3d3835 100%)',
    gradientAfter: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 40%, #1e40af 100%)',
    labelBefore: 'Before — On market 60 days, no offers',
    labelAfter: 'After — Sold in 18 days at asking price',
  },
  {
    label: 'Boulogne house',
    location: 'Boulogne-Billancourt',
    surface: '120 m²',
    gradientBefore: 'linear-gradient(135deg, #374151 0%, #4b5563 40%, #6b7280 100%)',
    gradientAfter: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 40%, #1d4ed8 100%)',
    labelBefore: 'Before — Unloved presentation, low interest',
    labelAfter: 'After — Home staged, sold 5% above estimate',
  },
  {
    label: 'Paris 20th studio',
    location: 'Paris 20th',
    surface: '28 m²',
    gradientBefore: 'linear-gradient(160deg, #6b7280 0%, #9ca3af 40%, #71717a 100%)',
    gradientAfter: 'linear-gradient(160deg, #60a5fa 0%, #3b82f6 40%, #2563eb 100%)',
    labelBefore: 'Before — Vacant 3 months, no tenant',
    labelAfter: 'After — Let in 8 days, qualified tenant',
  },
  {
    label: 'Vincennes office',
    location: 'Vincennes',
    surface: '90 m²',
    gradientBefore: 'linear-gradient(180deg, #292524 0%, #3d3834 50%, #44403c 100%)',
    gradientAfter: 'linear-gradient(180deg, #1d4ed8 0%, #1e40af 50%, #1e3a8a 100%)',
    labelBefore: 'Before — Empty 8 months, no management',
    labelAfter: 'After — Commercial lease signed, managed',
  },
];

const reviews = [
  {
    author: 'Catherine D.',
    location: 'Paris 11th',
    text: "Flat sold in 3 weeks at asking price. No nasty surprises. Sophie at Sterling kept me informed at every step — a true professional.",
    date: '2 weeks ago',
  },
  {
    author: 'Andrew M.',
    location: 'Boulogne',
    text: "Three years of property management, zero rent arrears, carefully vetted tenants. Peace of mind at a very fair price.",
    date: '1 month ago',
  },
  {
    author: 'Pauline S.',
    location: 'Paris 20th',
    text: "Studio let very quickly. Thorough inventory, clear lease, great ongoing support. Highly recommended.",
    date: '5 weeks ago',
  },
  {
    author: 'Thomas L.',
    location: 'Vincennes',
    text: "Buy-to-let investment guided by Sterling. Better yield than expected, full support from start to finish.",
    date: '3 months ago',
  },
  {
    author: 'Isabelle W.',
    location: 'Paris 16th',
    text: "Bought our first home with Sterling. Always available, patient with first-time buyers and very knowledgeable.",
    date: '4 months ago',
  },
];

const areas = [
  'Paris', 'Boulogne-Billancourt', 'Neuilly-sur-Seine', 'Vincennes', 'Saint-Cloud',
  'Levallois-Perret', 'Issy-les-Moulineaux', 'Vanves', 'Malakoff', 'Montrouge',
  'Clamart', 'Châtillon', 'Bagneux', 'Fontenay-sous-Bois',
];

function Stars() {
  return (
    <div className="demo-stars" aria-label="5 stars out of 5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10 1l2.4 5.4 5.6.8-4 3.9.9 5.5L10 13.8l-5 2.8.9-5.5-4-3.9 5.6-.8z" />
        </svg>
      ))}
    </div>
  );
}

export default function RealEstateDemoPage() {

  const demoImages = getDemoImages('real-estate');  return (
    <div className="demo-root">

      <div className="demo-banner" role="banner" aria-label="Preview by Pixeloria">
        <div className="demo-banner-inner">
          <div className="demo-banner-text">
            <span className="demo-banner-pill">✦ Pixeloria Preview</span>
            <span className="demo-banner-msg">This is what your website could look like — every element personalised for your business</span>
          </div>
          <div className="demo-banner-actions">
            <Link href="/en#contact" className="demo-banner-cta">Get my website →</Link>
            <Link href="/en" className="demo-banner-back" aria-label="Back to industry page">← Back</Link>
          </div>
        </div>
      </div>

      <div
        className="demo-site demo-site--artisan-clear"
        lang="en"
        style={{ '--dz-primary': '#2563EB', '--dz-primary-dark': '#1D4ED8' } as React.CSSProperties}
      >
        <header className="demo-header" id="demo-top">
          <div className="demo-header-inner">
            <div className="demo-brand">
              <div className="demo-brand-mono" aria-hidden="true">SP</div>
              <div>
                <span className="demo-brand-name">Sterling Properties</span>
                <span className="demo-brand-tagline">Buy · Sell · Manage · Paris</span>
              </div>
            </div>
            <nav className="demo-nav" aria-label="Demo site navigation">
              <a href="#demo-services">Services</a>
              <a href="#demo-realisations">Transactions</a>
              <a href="#demo-avis">Reviews</a>
              <a href="#demo-zone">Areas</a>
              <a href="#demo-contact">Contact</a>
            </nav>
            <a href="tel:+33142345678" className="demo-phone-cta">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="16" height="16">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +33 1 42 34 56 78
            </a>
          </div>
        </header>

        <main>
          <section className="demo-hero" id="demo-hero" aria-label="Main section">
            <div className="demo-hero-bg" aria-hidden="true" />
            <div className="demo-hero-overlay" aria-hidden="true" />
            <div className="demo-hero-inner">
              <div className="demo-hero-content">
                <div className="demo-hero-badge">
                  <span>✓ Loi Hoguet licensed</span>
                  <span className="demo-badge-sep" aria-hidden="true">·</span>
                  <span>✓ FNAIM member</span>
                  <span className="demo-badge-sep" aria-hidden="true">·</span>
                  <span>✓ Professional cards T &amp; G</span>
                </div>
                <h1 className="demo-hero-craft">Real Estate Sales · Lettings · Management</h1>
                <p className="demo-hero-name">Sterling Properties</p>
                <p className="demo-hero-sub">
                  Independent estate agency based in Paris since 1998.
                  26 years of expertise in the Paris property market.
                </p>
                <div className="demo-hero-visual">
                  <Image src={demoImages.hero.src} alt={demoImages.hero.alt} width={900} height={560} className="demo-hero-inline-image" />
                </div>
                <div className="demo-hero-ctas">
                  <a href="#demo-contact" className="demo-btn demo-btn--primary demo-btn--lg">
                    Request a free valuation
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a href="tel:+33142345678" className="demo-btn demo-btn--outline">
                    See our transactions
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                      <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="demo-hero-card" aria-hidden="true">
                <div className="demo-hero-card-inner">
                  <div className="demo-google-rating">
                    <Stars />
                    <strong>4.8 / 5</strong>
                    <span>156 Google reviews</span>
                  </div>
                  <div className="demo-hero-card-divider" />
                  <div className="demo-hero-trust-list">
                    <div className="demo-trust-row"><span className="demo-trust-dot" />Free valuation within 48h</div>
                    <div className="demo-trust-row"><span className="demo-trust-dot" />Listed on all major portals</div>
                    <div className="demo-trust-row"><span className="demo-trust-dot" />Property management — no stress</div>
                    <div className="demo-trust-row"><span className="demo-trust-dot" />26 years of local market expertise</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="demo-section" id="demo-services" aria-labelledby="demo-services-title">
            <div className="demo-container">
              <div className="demo-section-heading">
                <span className="demo-eyebrow">What we do</span>
                <h2 id="demo-services-title">Our services</h2>
                <p>A full-service estate agency covering sales, lettings, management and investment advice across Paris and the inner suburbs.</p>
              </div>
              <div className="demo-services-grid">
                {services.map((s) => (
                  <div key={s.title} className="demo-service-card">
                    <div className="demo-service-icon">{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="demo-illustrations-grid" aria-label="Business illustrations">
              {demoImages.gallery.map((img) => (
                <div key={img.src} className="demo-illustration-card">
                  <Image src={img.src} alt={img.alt} width={520} height={360} className="demo-illustration-image" />
                </div>
              ))}
            </div>
          </section>

          <section className="demo-section demo-section--tinted" id="demo-realisations" aria-labelledby="demo-real-title">
            <div className="demo-container">
              <div className="demo-section-heading">
                <span className="demo-eyebrow">Concrete results</span>
                <h2 id="demo-real-title">Our transactions</h2>
                <p>A selection of properties we have sold, let or taken under management. Each transaction is different — here are some highlights.</p>
              </div>
              <div className="demo-gallery-grid">
                {projects.map((r) => (
                  <div key={r.label} className="demo-gallery-card">
                    <div className="demo-gallery-photos">
                      <div className="demo-gallery-photo demo-gallery-photo--before" style={{ background: r.gradientBefore }}>
                        <span className="demo-gallery-photo-label demo-gallery-photo-label--before">Before</span>
                        <span className="demo-gallery-photo-desc">{r.labelBefore}</span>
                      </div>
                      <div className="demo-gallery-photo demo-gallery-photo--after" style={{ background: r.gradientAfter }}>
                        <span className="demo-gallery-photo-label demo-gallery-photo-label--after">After</span>
                        <span className="demo-gallery-photo-desc">{r.labelAfter}</span>
                      </div>
                    </div>
                    <div className="demo-gallery-info">
                      <strong>{r.label}</strong>
                      <span>{r.location} · {r.surface}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="demo-stats-bar" aria-label="Key figures">
            <div className="demo-stat"><strong>26 years</strong><span>in business</span></div>
            <div className="demo-stat-sep" aria-hidden="true" />
            <div className="demo-stat"><strong>2,000+</strong><span>transactions</span></div>
            <div className="demo-stat-sep" aria-hidden="true" />
            <div className="demo-stat"><strong>4.8 ★</strong><span>Google</span></div>
            <div className="demo-stat-sep" aria-hidden="true" />
            <div className="demo-stat"><strong>FNAIM</strong><span>member</span></div>
          </div>

          <section className="demo-section" id="demo-avis" aria-labelledby="demo-avis-title">
            <div className="demo-container">
              <div className="demo-section-heading">
                <span className="demo-eyebrow">Google Reviews</span>
                <h2 id="demo-avis-title">What our clients say</h2>
                <p>156 verified client reviews on Google — average 4.8 / 5.</p>
              </div>
              <div className="demo-reviews-grid">
                {reviews.map((r) => (
                  <div key={r.author} className="demo-review-card">
                    <div className="demo-review-header">
                      <div className="demo-review-avatar" aria-hidden="true">{r.author.charAt(0)}</div>
                      <div>
                        <strong className="demo-review-name">{r.author}</strong>
                        <span className="demo-review-location">{r.location}</span>
                      </div>
                      <Stars />
                    </div>
                    <p className="demo-review-text">&ldquo;{r.text}&rdquo;</p>
                    <span className="demo-review-date">{r.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="demo-guarantees-bar" aria-label="Certifications and guarantees">
            <div className="demo-guarantee">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
                <path d="M12 2l7 3v5c0 5-3.5 9-7 10C8.5 19 5 15 5 10V5l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Professional card T
            </div>
            <div className="demo-guarantee">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Professional card G
            </div>
            <div className="demo-guarantee">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              FNAIM member
            </div>
            <div className="demo-guarantee">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              Valuation within 48h
            </div>
          </div>

          <section className="demo-section demo-section--tinted" id="demo-zone" aria-labelledby="demo-zone-title">
            <div className="demo-container">
              <div className="demo-zone-layout">
                <div className="demo-zone-text">
                  <span className="demo-eyebrow">Where we work</span>
                  <h2 id="demo-zone-title">Coverage area</h2>
                  <p>Agency based in Paris (11th), covering central Paris and the inner western and eastern suburbs.</p>
                  <div className="demo-zone-chips">
                    {areas.map((z) => (<span key={z} className="demo-zone-chip">{z}</span>))}
                  </div>
                </div>
                <div className="demo-zone-map" aria-hidden="true">
                  <div className="demo-map-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <span>Paris &amp; suburbs</span>
                    <span className="demo-map-radius">20 km radius</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="demo-section demo-section--tinted" id="demo-contact" aria-labelledby="demo-contact-title">
            <div className="demo-container">
              <div className="demo-contact-grid">
                <div className="demo-contact-info">
                  <span className="demo-eyebrow">Free &amp; no obligation</span>
                  <h2 id="demo-contact-title">Request a valuation or a callback</h2>
                  <p>Response within 48h. Free valuation — detailed market report included.</p>
                  <div className="demo-contact-channels">
                    <a href="tel:+33142345678" className="demo-channel">
                      <div className="demo-channel-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div><strong>Direct call</strong><span>+33 1 42 34 56 78</span></div>
                    </a>
                    <a href="mailto:hello@sterling-properties.fr" className="demo-channel">
                      <div className="demo-channel-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div><strong>Email</strong><span>hello@sterling-properties.fr</span></div>
                    </a>
                  </div>
                  <p className="demo-contact-avail">
                    <span className="demo-avail-dot" aria-hidden="true" />
                    Available Mon to Sat, 9am–7pm
                  </p>
                </div>
                <div className="demo-form-wrapper">
                  <form className="demo-form" aria-label="Valuation request form">
                    <div className="demo-form-row">
                      <div className="demo-form-group">
                        <label htmlFor="demo-nom">Full name</label>
                        <input id="demo-nom" type="text" className="demo-input" placeholder="John Smith" />
                      </div>
                      <div className="demo-form-group">
                        <label htmlFor="demo-tel">Phone</label>
                        <input id="demo-tel" type="tel" className="demo-input" placeholder="+33 6 12 34 56 78" />
                      </div>
                    </div>
                    <div className="demo-form-group">
                      <label htmlFor="demo-email">Email</label>
                      <input id="demo-email" type="email" className="demo-input" placeholder="john@example.com" />
                    </div>
                    <div className="demo-form-group">
                      <label htmlFor="demo-type">Type of enquiry</label>
                      <select id="demo-type" className="demo-input demo-select">
                        <option value="">Choose…</option>
                        <option>Sell my property</option>
                        <option>Let my property</option>
                        <option>Property management</option>
                        <option>Buy / Invest</option>
                        <option>Free valuation</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="demo-form-group">
                      <label htmlFor="demo-message">Your project</label>
                      <textarea id="demo-message" className="demo-input demo-textarea" rows={4} placeholder="Tell us about your property or project: type, size, location, goals…" />
                    </div>
                    <button type="button" className="demo-btn demo-btn--primary demo-btn--full">
                      Send my enquiry
                      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                        <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <p className="demo-form-note">Free valuation · Response within 48h · No obligation</p>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="demo-footer">
          <div className="demo-container demo-footer-inner">
            <div>
              <div className="demo-brand demo-brand--footer">
                <div className="demo-brand-mono" aria-hidden="true">SP</div>
                <div>
                  <span className="demo-brand-name">Sterling Properties</span>
                  <span className="demo-brand-tagline">Buy · Sell · Manage · Paris</span>
                </div>
              </div>
              <p className="demo-footer-siret">SIRET: 234 567 890 00015 — Trade register Paris</p>
              <p className="demo-footer-siret">Professional cards T &amp; G — CPI 75012 2021 000 XXXXX</p>
            </div>
            <div>
              <p className="demo-footer-col-title">Our services</p>
              <ul className="demo-footer-links">
                <li><a href="#demo-services">Sales</a></li>
                <li><a href="#demo-services">Lettings</a></li>
                <li><a href="#demo-services">Management</a></li>
                <li><a href="#demo-services">Valuation</a></li>
              </ul>
            </div>
            <div>
              <p className="demo-footer-col-title">Contact</p>
              <ul className="demo-footer-links">
                <li><a href="tel:+33142345678">+33 1 42 34 56 78</a></li>
                <li><a href="mailto:hello@sterling-properties.fr">hello@sterling-properties.fr</a></li>
                <li>Paris &amp; inner suburbs</li>
              </ul>
            </div>
          </div>
          <div className="demo-footer-bottom">
            <p>© 2025 Sterling Properties · <span>Website by <Link href="/en">Pixeloria</Link></span></p>
          </div>
        </footer>
      </div>

      <section className="demo-back-cta" aria-label="Create your website with Pixeloria">
        <div className="demo-back-cta-inner">
          <div className="demo-back-cta-badge">✦ Preview created by Pixeloria</div>
          <h2>Want a website like this for your estate agency?</h2>
          <p>This demo shows what Pixeloria can create for you — with your brand, your services and your market. Every site is tailor-made.</p>
          <div className="demo-back-cta-actions">
            <Link href="/en#contact" className="btn btn-primary btn-lg">
              Get my tailor-made website
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="btn-icon">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/en#services" className="btn btn-secondary">View Pixeloria packages</Link>
          </div>
          <div className="demo-back-cta-trust">
            <span>✓ Free quote within 48h</span>
            <span>✓ Site delivered in 5–10 days</span>
            <span>✓ From €89/month all-inclusive</span>
          </div>
        </div>
      </section>

    </div>
  );
}

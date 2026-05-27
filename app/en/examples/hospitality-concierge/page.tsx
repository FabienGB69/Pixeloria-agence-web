import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Demo website for holiday rental concierge | Pixeloria',
  description:
    'See what a professional website looks like for an Airbnb concierge and property management company — created by Pixeloria.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/examples/hospitality-concierge',
    title: 'Demo website for holiday rental concierge | Pixeloria',
    description:
      'See what a professional website looks like for a short-stay property management business — created by Pixeloria.',
    locale: 'en_GB',
    siteName: 'Pixeloria',
  },
};

const services = [
  {
    title: 'Guest Arrivals',
    desc: "Personal welcome, key handover and property introduction — 7 days a week, any time of day.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Cleaning & Linen',
    desc: 'Professional clean after every stay. Fresh hotel-quality linen supplied and laundered for each rotation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Booking Management',
    desc: 'Multi-platform sync: Airbnb, Booking.com, VRBO. No double bookings, dynamic optimised pricing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Maintenance & Repairs',
    desc: 'We monitor your property and respond within 4 hours when problems arise. Partner tradesman network on call.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Professional Photography',
    desc: 'Pro photo shoot and optimised listings that stand out on every platform and attract more bookings.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Revenue Optimisation',
    desc: 'Dynamic pricing, maximised occupancy and 24/7 guest communications. Average +40% revenue for our owners.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="16 7 22 7 22 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const projects = [
  {
    label: 'Nice villa',
    location: 'Nice',
    surface: '4 bedrooms',
    gradientBefore: 'linear-gradient(135deg, #44403c 0%, #57534e 40%, #3d3835 100%)',
    gradientAfter: 'linear-gradient(135deg, #0d9488 0%, #0f766e 40%, #134e4a 100%)',
    labelBefore: 'Before — Unoptimised, 40% occupancy',
    labelAfter: 'After — 85%+ occupancy, revenue +50%',
  },
  {
    label: 'Monaco studio',
    location: 'Monaco',
    surface: '1 room',
    gradientBefore: 'linear-gradient(135deg, #374151 0%, #4b5563 40%, #6b7280 100%)',
    gradientAfter: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 40%, #0f766e 100%)',
    labelBefore: 'Before — Poor listing, few bookings',
    labelAfter: 'After — Optimised listing, fully booked',
  },
  {
    label: 'Antibes flat',
    location: 'Antibes',
    surface: '3-bed',
    gradientBefore: 'linear-gradient(160deg, #6b7280 0%, #9ca3af 40%, #71717a 100%)',
    gradientAfter: 'linear-gradient(160deg, #06b6d4 0%, #0891b2 40%, #0e7490 100%)',
    labelBefore: 'Before — Owner-managed, stressful',
    labelAfter: 'After — Fully managed, consistent income',
  },
  {
    label: 'Cannes house',
    location: 'Cannes',
    surface: '3 bedrooms',
    gradientBefore: 'linear-gradient(180deg, #292524 0%, #3d3834 50%, #44403c 100%)',
    gradientAfter: 'linear-gradient(180deg, #5eead4 0%, #2dd4bf 40%, #14b8a6 100%)',
    labelBefore: 'Before — Self-managed, time-consuming',
    labelAfter: 'After — Stress-free management, more revenue',
  },
];

const reviews = [
  {
    author: 'Robert H.',
    location: 'Nice',
    text: "Azure Coast has managed my villa for 18 months. Revenue up 45%, zero hassle. The team is incredibly responsive and professional.",
    date: '1 month ago',
  },
  {
    author: 'Claire L.',
    location: 'Antibes',
    text: "My flat is better looked after than when I lived there myself. The photos are stunning and guests love it. Occupancy rate is outstanding.",
    date: '3 weeks ago',
  },
  {
    author: 'Marc V.',
    location: 'Cannes',
    text: "Responsive, professional, honest. Handing over my property to Azure Coast was the best decision I made.",
    date: '2 months ago',
  },
  {
    author: 'Patricia O.',
    location: 'Monaco',
    text: "Bad experience with a previous manager, then found Azure Coast. Night and day difference. Perfect communication and monthly reports.",
    date: '6 weeks ago',
  },
  {
    author: 'Jean-Pierre B.',
    location: 'Saint-Jean-Cap-Ferrat',
    text: "12 years of self-managed holiday lets, then I met Azure Coast. I wish I had done it sooner!",
    date: '4 months ago',
  },
];

const areas = [
  'Nice', 'Cannes', 'Antibes', 'Monaco', 'Saint-Jean-Cap-Ferrat',
  'Villefranche-sur-Mer', 'Menton', 'Grasse', 'Mougins', 'Valbonne',
  'Juan-les-Pins', 'Golfe-Juan', 'Le Cannet', 'Saint-Raphaël',
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

export default function HospitalityConciergeDemoPage() {
  return (
    <div className="demo-root">

      <div className="demo-banner" role="banner" aria-label="Preview by Pixeloria">
        <div className="demo-banner-inner">
          <div className="demo-banner-text">
            <span className="demo-banner-pill">✦ Pixeloria Preview</span>
            <span className="demo-banner-msg">
              This is what your website could look like — every element personalised for your business
            </span>
          </div>
          <div className="demo-banner-actions">
            <Link href="/en#contact" className="demo-banner-cta">Get my website →</Link>
            <Link href="/en/examples/hospitality-concierge" className="demo-banner-back" aria-label="Back to industry page">← Back</Link>
          </div>
        </div>
      </div>

      <div
        className="demo-site"
        lang="en"
        style={{ '--dz-primary': '#0D9488', '--dz-primary-dark': '#0F766E' } as React.CSSProperties}
      >
        <header className="demo-header" id="demo-top">
          <div className="demo-header-inner">
            <div className="demo-brand">
              <div className="demo-brand-mono" aria-hidden="true">AC</div>
              <div>
                <span className="demo-brand-name">Azure Coast Concierge</span>
                <span className="demo-brand-tagline">Property Management · Short Stays · Côte d&apos;Azur</span>
              </div>
            </div>
            <nav className="demo-nav" aria-label="Demo site navigation">
              <a href="#demo-services">Services</a>
              <a href="#demo-realisations">Properties</a>
              <a href="#demo-avis">Reviews</a>
              <a href="#demo-zone">Areas</a>
              <a href="#demo-contact">Contact</a>
            </nav>
            <a href="tel:+33693456789" className="demo-phone-cta">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="16" height="16">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +33 6 93 45 67 89
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
                  <span>✓ Licensed property manager</span>
                  <span className="demo-badge-sep" aria-hidden="true">·</span>
                  <span>✓ Professional insurance</span>
                  <span className="demo-badge-sep" aria-hidden="true">·</span>
                  <span>✓ 7-day availability</span>
                </div>
                <h1 className="demo-hero-craft">Premium Short-Stay Property Management</h1>
                <p className="demo-hero-name">Azure Coast Concierge</p>
                <p className="demo-hero-sub">
                  Full-service Airbnb and holiday rental management on the French Riviera.
                  We handle everything — you collect the income.
                </p>
                <div className="demo-hero-ctas">
                  <a href="#demo-contact" className="demo-btn demo-btn--primary demo-btn--lg">
                    Enquire about management
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a href="#demo-realisations" className="demo-btn demo-btn--outline">
                    See managed properties
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
                    <strong>4.9 / 5</strong>
                    <span>91 guest reviews</span>
                  </div>
                  <div className="demo-hero-card-divider" />
                  <div className="demo-hero-trust-list">
                    <div className="demo-trust-row"><span className="demo-trust-dot" />Detailed monthly financial reports</div>
                    <div className="demo-trust-row"><span className="demo-trust-dot" />Available 7 days a week, 365 days a year</div>
                    <div className="demo-trust-row"><span className="demo-trust-dot" />Professional cleaning included</div>
                    <div className="demo-trust-row"><span className="demo-trust-dot" />Emergency response within 4 hours</div>
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
                <p>Complete short-stay property management — from guest arrivals to revenue optimisation. You own it, we run it.</p>
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
          </section>

          <section className="demo-section demo-section--tinted" id="demo-realisations" aria-labelledby="demo-real-title">
            <div className="demo-container">
              <div className="demo-section-heading">
                <span className="demo-eyebrow">Managed properties</span>
                <h2 id="demo-real-title">Before &amp; after management</h2>
                <p>The difference professional management makes. Our owners see an average 40% revenue increase after handing over their property to us.</p>
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
            <div className="demo-stat"><strong>120+</strong><span>properties managed</span></div>
            <div className="demo-stat-sep" aria-hidden="true" />
            <div className="demo-stat"><strong>1,400+</strong><span>stays completed</span></div>
            <div className="demo-stat-sep" aria-hidden="true" />
            <div className="demo-stat"><strong>4.9 ★</strong><span>guest rating</span></div>
            <div className="demo-stat-sep" aria-hidden="true" />
            <div className="demo-stat"><strong>+40%</strong><span>average revenue increase</span></div>
          </div>

          <section className="demo-section" id="demo-avis" aria-labelledby="demo-avis-title">
            <div className="demo-container">
              <div className="demo-section-heading">
                <span className="demo-eyebrow">Owner Reviews</span>
                <h2 id="demo-avis-title">What our owners say</h2>
                <p>91 verified owner reviews on Google — average 4.9 / 5.</p>
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
              Professional insurance
            </div>
            <div className="demo-guarantee">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Licensed manager
            </div>
            <div className="demo-guarantee">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              SIRET verified
            </div>
            <div className="demo-guarantee">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              7-day availability
            </div>
          </div>

          <section className="demo-section demo-section--tinted" id="demo-zone" aria-labelledby="demo-zone-title">
            <div className="demo-container">
              <div className="demo-zone-layout">
                <div className="demo-zone-text">
                  <span className="demo-eyebrow">Where we work</span>
                  <h2 id="demo-zone-title">Coverage area</h2>
                  <p>We manage properties across the French Riviera, from the Var to the Italian border. Local teams based in Nice, Cannes and Antibes.</p>
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
                    <span>French Riviera</span>
                    <span className="demo-map-radius">80 km coverage</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="demo-section demo-section--dark" id="demo-contact" aria-labelledby="demo-contact-title">
            <div className="demo-container">
              <div className="demo-contact-grid">
                <div className="demo-contact-info">
                  <span className="demo-eyebrow">No obligation</span>
                  <h2 id="demo-contact-title">Entrust your property to us</h2>
                  <p>Response within 24h. Free rental income assessment for every new property enquiry.</p>
                  <div className="demo-contact-channels">
                    <a href="tel:+33693456789" className="demo-channel">
                      <div className="demo-channel-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div><strong>Direct call</strong><span>+33 6 93 45 67 89</span></div>
                    </a>
                    <a href="mailto:hello@azure-coast-concierge.com" className="demo-channel">
                      <div className="demo-channel-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div><strong>Email</strong><span>hello@azure-coast-concierge.com</span></div>
                    </a>
                  </div>
                  <p className="demo-contact-avail">
                    <span className="demo-avail-dot" aria-hidden="true" />
                    Available — response within 24h, 7 days a week
                  </p>
                </div>
                <div className="demo-form-wrapper">
                  <form className="demo-form" aria-label="Property management enquiry form">
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
                      <label htmlFor="demo-type">Property type</label>
                      <select id="demo-type" className="demo-input demo-select">
                        <option value="">Choose…</option>
                        <option>Studio / 1-bed</option>
                        <option>2-bed flat</option>
                        <option>3-bed+</option>
                        <option>Villa / House</option>
                        <option>Private room</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="demo-form-group">
                      <label htmlFor="demo-message">Your message</label>
                      <textarea id="demo-message" className="demo-input demo-textarea" rows={4} placeholder="Tell us about your property: location, size, availability, your goals…" />
                    </div>
                    <button type="button" className="demo-btn demo-btn--primary demo-btn--full">
                      Send my enquiry
                      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                        <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <p className="demo-form-note">Response within 24h · Free income assessment</p>
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
                <div className="demo-brand-mono" aria-hidden="true">AC</div>
                <div>
                  <span className="demo-brand-name">Azure Coast Concierge</span>
                  <span className="demo-brand-tagline">Property Management · Short Stays · Côte d&apos;Azur</span>
                </div>
              </div>
              <p className="demo-footer-siret">SIRET: 567 890 123 00034 — Trade register Nice</p>
              <p className="demo-footer-siret">Professional insurance Hiscox ref. XXXXXXXXXX</p>
            </div>
            <div>
              <p className="demo-footer-col-title">Services</p>
              <ul className="demo-footer-links">
                <li><a href="#demo-services">Guest arrivals</a></li>
                <li><a href="#demo-services">Cleaning &amp; linen</a></li>
                <li><a href="#demo-services">Booking management</a></li>
                <li><a href="#demo-services">Maintenance</a></li>
              </ul>
            </div>
            <div>
              <p className="demo-footer-col-title">Contact</p>
              <ul className="demo-footer-links">
                <li><a href="tel:+33693456789">+33 6 93 45 67 89</a></li>
                <li><a href="mailto:hello@azure-coast-concierge.com">hello@azure-coast-concierge.com</a></li>
                <li>French Riviera — Nice, Cannes, Antibes</li>
              </ul>
            </div>
          </div>
          <div className="demo-footer-bottom">
            <p>© 2025 Azure Coast Concierge · <span>Website by <Link href="/en">Pixeloria</Link></span></p>
          </div>
        </footer>
      </div>

      <section className="demo-back-cta" aria-label="Create your website with Pixeloria">
        <div className="demo-back-cta-inner">
          <div className="demo-back-cta-badge">✦ Preview created by Pixeloria</div>
          <h2>Want a website like this for your concierge business?</h2>
          <p>This demo shows what Pixeloria can create for you — with your brand, your properties and your services. Every site is tailor-made.</p>
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

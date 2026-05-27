import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Demo website for local shops | Pixeloria',
  description:
    'See what a professional website looks like for a local shop or deli — created by Pixeloria. Full demo with products, delivery, reviews and contact.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/examples/local-shops',
    title: 'Demo website for local shops | Pixeloria',
    description: 'See what a professional website looks like for a local shop or deli — created by Pixeloria.',
    locale: 'en_GB',
    siteName: 'Pixeloria',
  },
};

const services = [
  {
    title: 'Fine Groceries',
    desc: 'Curated regional, organic and artisan products. Cheeses, charcuterie, preserves, condiments and rare spices.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.8" />
        <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Wine & Spirits',
    desc: 'Wine cellar, craft beers, local spirits. Expert recommendations from our in-house sommelier.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 22h8M12 11v11M5 11l7-9 7 9H5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Deli & Takeaway',
    desc: 'Home-made dishes prepared fresh every morning. Sandwiches, salads, quiches. Perfect for a working lunch.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" stroke="currentColor" strokeWidth="1.8" />
        <line x1="6" y1="1" x2="6" y2="4" stroke="currentColor" strokeWidth="1.8" />
        <line x1="10" y1="1" x2="10" y2="4" stroke="currentColor" strokeWidth="1.8" />
        <line x1="14" y1="1" x2="14" y2="4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Home Delivery',
    desc: 'Order online or by phone. Delivery within 2 hours across Bordeaux and surrounding communes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="1" y="3" width="15" height="13" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 8l5 3-5 3V8z" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="5" cy="18" r="2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="19" cy="18" r="2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Click & Collect',
    desc: 'Order online and collect in-store. Ready in 30 minutes — skip the queue, just pick it up.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Tasting Events',
    desc: 'Wine, cheese and olive oil evenings. Private or group bookings for up to 20 people.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
];

const projects = [
  {
    label: 'Cheese counter',
    location: 'In store',
    surface: '15 varieties',
    gradientBefore: 'linear-gradient(135deg, #44403c 0%, #57534e 40%, #3d3835 100%)',
    gradientAfter: 'linear-gradient(135deg, #16a34a 0%, #15803d 40%, #166534 100%)',
    labelBefore: 'Before — Empty counter, limited choice',
    labelAfter: 'After — Curated selection of 15 cheeses',
  },
  {
    label: 'Wine cellar',
    location: 'In store',
    surface: '80+ references',
    gradientBefore: 'linear-gradient(135deg, #374151 0%, #4b5563 40%, #6b7280 100%)',
    gradientAfter: 'linear-gradient(135deg, #22c55e 0%, #16a34a 40%, #15803d 100%)',
    labelBefore: 'Before — Disorganised, hard to browse',
    labelAfter: 'After — Curated cellar, 80+ labelled references',
  },
  {
    label: 'Deli counter',
    location: 'In store',
    surface: '5 dishes/day',
    gradientBefore: 'linear-gradient(160deg, #6b7280 0%, #9ca3af 40%, #71717a 100%)',
    gradientAfter: 'linear-gradient(160deg, #86efac 0%, #4ade80 40%, #22c55e 100%)',
    labelBefore: 'Before — Empty counter at midday',
    labelAfter: 'After — Full deli, sold out before 1pm',
  },
  {
    label: 'Fine grocery',
    location: 'In store',
    surface: '200+ products',
    gradientBefore: 'linear-gradient(180deg, #292524 0%, #3d3834 50%, #44403c 100%)',
    gradientAfter: 'linear-gradient(180deg, #bbf7d0 0%, #86efac 40%, #4ade80 100%)',
    labelBefore: 'Before — Sparse shelves',
    labelAfter: 'After — Beautiful product staging, 200+ lines',
  },
];

const reviews = [
  {
    author: 'Laura K.',
    location: 'Bordeaux',
    text: "Best local produce in the city! The team knows every producer personally. The cheese is exceptional and the advice always spot on.",
    date: '1 week ago',
  },
  {
    author: 'Chris P.',
    location: 'Pessac',
    text: "Delivery was perfect — on time, everything packed carefully. The ordering app is simple and works well. Highly recommended.",
    date: '3 weeks ago',
  },
  {
    author: 'Martine B.',
    location: 'Mérignac',
    text: "Wine and cheese tasting evening — a perfect family night out. The team is passionate and enthusiastic. We will be back!",
    date: '2 months ago',
  },
  {
    author: 'Steve R.',
    location: 'Gradignan',
    text: "Click & Collect always ready on time. Great selection of craft beers you cannot find anywhere else.",
    date: '6 weeks ago',
  },
  {
    author: 'Aurélie D.',
    location: 'Bègles',
    text: "My favourite shop. I come every week and always discover something new. The team is lovely.",
    date: '3 months ago',
  },
];

const areas = [
  'Bordeaux', 'Mérignac', 'Pessac', 'Bègles', 'Gradignan',
  'Villenave-d\'Ornon', 'Talence', 'Le Bouscat', 'Eysines', 'Bruges',
  'Saint-Médard-en-Jalles', 'Floirac', 'Lormont', 'Cenon',
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

export default function LocalShopsDemoPage() {
  return (
    <div className="demo-root">

      <div className="demo-banner" role="banner" aria-label="Preview by Pixeloria">
        <div className="demo-banner-inner">
          <div className="demo-banner-text">
            <span className="demo-banner-pill">✦ Pixeloria Preview</span>
            <span className="demo-banner-msg">This is what your website could look like — every element personalised for your business</span>
          </div>
          <div className="demo-banner-actions">
            <Link href="/en#contact" className="demo-banner-cta">Get my website →</Link>
            <Link href="/en/examples/local-shops" className="demo-banner-back" aria-label="Back to industry page">← Back</Link>
          </div>
        </div>
      </div>

      <div
        className="demo-site"
        lang="en"
        style={{ '--dz-primary': '#16A34A', '--dz-primary-dark': '#15803D' } as React.CSSProperties}
      >
        <header className="demo-header" id="demo-top">
          <div className="demo-header-inner">
            <div className="demo-brand">
              <div className="demo-brand-mono" aria-hidden="true">SQ</div>
              <div>
                <span className="demo-brand-name">The Spice Quarter</span>
                <span className="demo-brand-tagline">Deli · Fine Food · Bordeaux</span>
              </div>
            </div>
            <nav className="demo-nav" aria-label="Demo site navigation">
              <a href="#demo-services">Our range</a>
              <a href="#demo-realisations">Selection</a>
              <a href="#demo-avis">Reviews</a>
              <a href="#demo-zone">Delivery</a>
              <a href="#demo-contact">Contact</a>
            </nav>
            <a href="tel:+33556123456" className="demo-phone-cta">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="16" height="16">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +33 5 56 12 34 56
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
                  <span>✓ Local producers</span>
                  <span className="demo-badge-sep" aria-hidden="true">·</span>
                  <span>✓ Home delivery</span>
                  <span className="demo-badge-sep" aria-hidden="true">·</span>
                  <span>✓ Open 7 days</span>
                </div>
                <h1 className="demo-hero-craft">Fine Food · Local Produce · Specialty Deli</h1>
                <p className="demo-hero-name">The Spice Quarter</p>
                <p className="demo-hero-sub">
                  Bordeaux&apos;s favourite neighbourhood deli since 2014. Handpicked local,
                  organic and artisan products from independent producers.
                </p>
                <div className="demo-hero-ctas">
                  <a href="#demo-contact" className="demo-btn demo-btn--primary demo-btn--lg">
                    Order or get in touch
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a href="#demo-realisations" className="demo-btn demo-btn--outline">
                    See our selection
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
                    <span>148 Google reviews</span>
                  </div>
                  <div className="demo-hero-card-divider" />
                  <div className="demo-hero-trust-list">
                    <div className="demo-trust-row"><span className="demo-trust-dot" />Locally sourced &amp; organic products</div>
                    <div className="demo-trust-row"><span className="demo-trust-dot" />Home delivery within 2 hours</div>
                    <div className="demo-trust-row"><span className="demo-trust-dot" />Click &amp; Collect in 30 minutes</div>
                    <div className="demo-trust-row"><span className="demo-trust-dot" />100+ partner producers</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="demo-section" id="demo-services" aria-labelledby="demo-services-title">
            <div className="demo-container">
              <div className="demo-section-heading">
                <span className="demo-eyebrow">What we offer</span>
                <h2 id="demo-services-title">Our products &amp; services</h2>
                <p>A neighbourhood shop with a soul — local producers, seasonal products and old-fashioned service.</p>
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
                <span className="demo-eyebrow">Our world</span>
                <h2 id="demo-real-title">Our selection</h2>
                <p>A shop with a story, products with a soul. A glimpse of our selection and our counter.</p>
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
            <div className="demo-stat"><strong>10 years</strong><span>trading</span></div>
            <div className="demo-stat-sep" aria-hidden="true" />
            <div className="demo-stat"><strong>100+</strong><span>partner producers</span></div>
            <div className="demo-stat-sep" aria-hidden="true" />
            <div className="demo-stat"><strong>4.9 ★</strong><span>Google</span></div>
            <div className="demo-stat-sep" aria-hidden="true" />
            <div className="demo-stat"><strong>Organic &amp; Local</strong><span>certified</span></div>
          </div>

          <section className="demo-section" id="demo-avis" aria-labelledby="demo-avis-title">
            <div className="demo-container">
              <div className="demo-section-heading">
                <span className="demo-eyebrow">Google Reviews</span>
                <h2 id="demo-avis-title">What our customers say</h2>
                <p>148 verified customer reviews on Google — average 4.9 / 5.</p>
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

          <div className="demo-guarantees-bar" aria-label="Certifications and commitments">
            <div className="demo-guarantee">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
                <path d="M12 2l7 3v5c0 5-3.5 9-7 10C8.5 19 5 15 5 10V5l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Certified local producers
            </div>
            <div className="demo-guarantee">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              80% organic products
            </div>
            <div className="demo-guarantee">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              2h delivery
            </div>
            <div className="demo-guarantee">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              Open 7 days
            </div>
          </div>

          <section className="demo-section demo-section--tinted" id="demo-zone" aria-labelledby="demo-zone-title">
            <div className="demo-container">
              <div className="demo-zone-layout">
                <div className="demo-zone-text">
                  <span className="demo-eyebrow">Delivery area</span>
                  <h2 id="demo-zone-title">Coverage area</h2>
                  <p>We deliver to your door across Bordeaux and surrounding communes within a 20 km radius. Order before 4pm for same-day delivery.</p>
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
                    <span>Bordeaux &amp; suburbs</span>
                    <span className="demo-map-radius">20 km radius</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="demo-section demo-section--dark" id="demo-contact" aria-labelledby="demo-contact-title">
            <div className="demo-container">
              <div className="demo-contact-grid">
                <div className="demo-contact-info">
                  <span className="demo-eyebrow">Order or contact us</span>
                  <h2 id="demo-contact-title">Place an order or get in touch</h2>
                  <p>Response within 2 hours during opening hours. Same-day delivery available.</p>
                  <div className="demo-contact-channels">
                    <a href="tel:+33556123456" className="demo-channel">
                      <div className="demo-channel-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div><strong>Direct call</strong><span>+33 5 56 12 34 56</span></div>
                    </a>
                    <a href="mailto:hello@thespicequarter.fr" className="demo-channel">
                      <div className="demo-channel-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div><strong>Email</strong><span>hello@thespicequarter.fr</span></div>
                    </a>
                  </div>
                  <p className="demo-contact-avail">
                    <span className="demo-avail-dot" aria-hidden="true" />
                    Available — open 7 days, 9am–8pm
                  </p>
                </div>
                <div className="demo-form-wrapper">
                  <form className="demo-form" aria-label="Order or contact form">
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
                        <option>Home delivery</option>
                        <option>Click &amp; Collect</option>
                        <option>Catering / platter</option>
                        <option>Tasting event</option>
                        <option>Special order</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="demo-form-group">
                      <label htmlFor="demo-message">Your message</label>
                      <textarea id="demo-message" className="demo-input demo-textarea" rows={4} placeholder="Tell us what you need: products, quantities, delivery date…" />
                    </div>
                    <button type="button" className="demo-btn demo-btn--primary demo-btn--full">
                      Send my enquiry
                      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                        <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <p className="demo-form-note">Response within 2h · Same-day delivery available</p>
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
                <div className="demo-brand-mono" aria-hidden="true">SQ</div>
                <div>
                  <span className="demo-brand-name">The Spice Quarter</span>
                  <span className="demo-brand-tagline">Deli · Fine Food · Bordeaux</span>
                </div>
              </div>
              <p className="demo-footer-siret">SIRET: 678 901 234 00056 — Trade register Bordeaux</p>
              <p className="demo-footer-siret">Member of the Bienvenue à la Ferme network</p>
            </div>
            <div>
              <p className="demo-footer-col-title">Our range</p>
              <ul className="demo-footer-links">
                <li><a href="#demo-services">Fine groceries</a></li>
                <li><a href="#demo-services">Wine &amp; spirits</a></li>
                <li><a href="#demo-services">Deli</a></li>
                <li><a href="#demo-services">Tasting events</a></li>
              </ul>
            </div>
            <div>
              <p className="demo-footer-col-title">Contact</p>
              <ul className="demo-footer-links">
                <li><a href="tel:+33556123456">+33 5 56 12 34 56</a></li>
                <li><a href="mailto:hello@thespicequarter.fr">hello@thespicequarter.fr</a></li>
                <li>Bordeaux &amp; suburbs (20 km delivery)</li>
              </ul>
            </div>
          </div>
          <div className="demo-footer-bottom">
            <p>© 2025 The Spice Quarter · <span>Website by <Link href="/en">Pixeloria</Link></span></p>
          </div>
        </footer>
      </div>

      <section className="demo-back-cta" aria-label="Create your website with Pixeloria">
        <div className="demo-back-cta-inner">
          <div className="demo-back-cta-badge">✦ Preview created by Pixeloria</div>
          <h2>Want a website like this for your local shop?</h2>
          <p>This demo shows what Pixeloria can create for you — with your name, your products and your delivery area. Every site is tailor-made.</p>
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

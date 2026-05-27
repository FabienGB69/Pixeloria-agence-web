import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Demo website for building contractors | Pixeloria',
  description:
    'See what a professional website looks like for a building contractor, created by Pixeloria. Full demo with header, hero, services, gallery, reviews and contact form.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/examples/contractors',
    title: 'Demo website for building contractors | Pixeloria',
    description:
      'See what a professional website looks like for a building contractor — created by Pixeloria.',
    locale: 'en_GB',
    siteName: 'Pixeloria',
  },
};

const services = [
  {
    title: 'Bricklaying',
    desc: 'Walls, foundations, screed slabs, partitions. New builds and renovation handled with care.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="14" width="20" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="4" y="8" width="16" height="5" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="6" y="3" width="12" height="4" rx="1" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Tiling',
    desc: 'Floor and wall tiling, all surfaces. Porcelain stoneware, marble, ceramic.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13" y="2" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="2" y="13" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13" y="13" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Renovation',
    desc: 'Full structural refurbishment, second fix, interior fit-out across all trades.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21V9l9-6 9 6v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="14" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Insulation',
    desc: 'External insulation, loft and under-floor insulation. Eligible for energy grants.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12h18M3 7h18M3 17h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Plastering',
    desc: 'Stud walls, skim coat, ceilings, dry lining. Smooth, clean finish every time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l9 5v8l-9 5-9-5V8l9-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 3v13M3 8l9 5 9-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'External Paving',
    desc: 'Terraces, driveways, courtyards and paths. Paving slabs, block paving, natural stone.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2 12h20M2 17h20M7 12V7M12 12V7M17 12V7M4 7h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const realisations = [
  {
    label: 'Garden terrace',
    location: 'Meyreuil',
    surface: '50 m²',
    gradientBefore: 'linear-gradient(135deg, #44403c 0%, #57534e 40%, #3d3835 100%)',
    gradientAfter: 'linear-gradient(135deg, #d97706 0%, #b45309 30%, #92400e 70%, #78350f 100%)',
    labelBefore: 'Before — Cracked, mossy slab',
    labelAfter: 'After — New stone terrace',
  },
  {
    label: 'Bathroom',
    location: 'Aix Centre',
    surface: '9 m²',
    gradientBefore: 'linear-gradient(135deg, #374151 0%, #4b5563 40%, #6b7280 100%)',
    gradientAfter: 'linear-gradient(135deg, #e7e5e4 0%, #d6d3d1 30%, #a8a29e 70%, #78716c 100%)',
    labelBefore: 'Before — Worn tiles, black grout',
    labelAfter: 'After — Large-format tiling',
  },
  {
    label: 'Rendered facade',
    location: 'Pertuis',
    surface: '130 m²',
    gradientBefore: 'linear-gradient(160deg, #6b7280 0%, #9ca3af 40%, #71717a 100%)',
    gradientAfter: 'linear-gradient(160deg, #fef3c7 0%, #fde68a 30%, #fbbf24 60%, #f59e0b 100%)',
    labelBefore: 'Before — Cracked, peeling render',
    labelAfter: 'After — Stone-effect textured render',
  },
  {
    label: 'Boundary wall',
    location: 'Venelles',
    surface: '32 ml',
    gradientBefore: 'linear-gradient(180deg, #78716c 0%, #57534e 50%, #44403c 100%)',
    gradientAfter: 'linear-gradient(180deg, #d6d3d1 0%, #a8a29e 40%, #78716c 100%)',
    labelBefore: 'Before — Bare concrete blocks',
    labelAfter: 'After — Rendered masonry wall',
  },
];

const reviews = [
  {
    author: 'Mark T.',
    location: 'Aix Centre',
    text: 'Excellent work on our 50 m² garden terrace. David was punctual, tidy and the result is exactly what we wanted. Would not hesitate to recommend.',
    date: '2 weeks ago',
  },
  {
    author: 'Christine L.',
    location: 'Meyreuil',
    text: 'Full bathroom renovation — stripping, drainage, tiling and plastering. Timelines met, professional team. Delighted with the result.',
    date: '1 month ago',
  },
  {
    author: 'Pierre-André G.',
    location: 'Pertuis',
    text: 'Facade render on a 130 m² house. Precise quote, no nasty surprises. The neighbours asked for his card. Excellent tradesman.',
    date: '6 weeks ago',
  },
  {
    author: 'Emma V.',
    location: 'Venelles',
    text: 'Loft insulation and kitchen tiling done in the same visit. Very professional, explains things clearly. Excellent value.',
    date: '2 months ago',
  },
  {
    author: 'James B.',
    location: 'Aix-les-Milles',
    text: '25-metre boundary wall built in 3 days. Neat finish, good pointing. A craftsman who really takes pride in his work.',
    date: '3 months ago',
  },
];

const zones = [
  'Aix-en-Provence', 'Meyreuil', 'Pertuis', 'Venelles', 'Puyricard',
  'Gardanne', 'Rousset', 'Trets', 'Fuveau', 'Bouc-Bel-Air',
  'Vitrolles', 'Marignane', 'Cabriès', 'Les Milles', 'La Barque',
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

export default function ContractorsDemoPage() {
  return (
    <div className="demo-root">

      {/* ── Pixeloria demo banner ── */}
      <div className="demo-banner" role="banner" aria-label="Preview created by Pixeloria">
        <div className="demo-banner-inner">
          <div className="demo-banner-text">
            <span className="demo-banner-pill">✦ Pixeloria Preview</span>
            <span className="demo-banner-msg">
              This is what your website would look like — every element is customised for your trade
            </span>
          </div>
          <div className="demo-banner-actions">
            <Link href="/en#contact" className="demo-banner-cta">
              Get my website →
            </Link>
            <Link href="/en" className="demo-banner-back" aria-label="Back to examples page">
              ← Back
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          FAKE CLIENT SITE — Johnson Building
          ══════════════════════════════════════ */}
      <div className="demo-site demo-site--artisan-clear" lang="en">

        {/* ── Fake header ── */}
        <header className="demo-header" id="demo-top">
          <div className="demo-header-inner">
            <div className="demo-brand">
              <div className="demo-brand-mono" aria-hidden="true">JB</div>
              <div>
                <span className="demo-brand-name">Johnson Building</span>
                <span className="demo-brand-tagline">Builder · Tiler · Aix-en-Provence</span>
              </div>
            </div>

            <nav className="demo-nav" aria-label="Demo site navigation">
              <a href="#demo-services">Services</a>
              <a href="#demo-realisations">Projects</a>
              <a href="#demo-avis">Reviews</a>
              <a href="#demo-zone">Coverage</a>
              <a href="#demo-contact">Contact</a>
            </nav>

            <a href="tel:+33612345678" className="demo-phone-cta" aria-label="Call +33 6 12 34 56 78">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="16" height="16">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +33 6 12 34 56 78
            </a>
          </div>
        </header>

        {/* ── Hero ── */}
        <section className="demo-hero" id="demo-hero" aria-label="Main section">
          <div className="demo-hero-bg" aria-hidden="true" />
          <div className="demo-hero-overlay" aria-hidden="true" />

          <div className="demo-hero-inner">
            <div className="demo-hero-content">
              <div className="demo-hero-badge">
                <span>✓ Free quote</span>
                <span className="demo-badge-sep" aria-hidden="true">·</span>
                <span>✓ Quick response</span>
                <span className="demo-badge-sep" aria-hidden="true">·</span>
                <span>✓ Decennial insurance</span>
                <span className="demo-badge-sep" aria-hidden="true">·</span>
                <span>✓ Local coverage</span>
              </div>

              <h1 className="demo-hero-craft">
                Your renovation work in safe hands
              </h1>

              <p className="demo-hero-name">Johnson Building</p>

              <p className="demo-hero-sub">
                Local building contractor for renovation, repairs and home improvements.
                Request a clear quote and get a quick callback.
              </p>

              <div className="demo-hero-ctas">
                <a href="#demo-contact" className="demo-btn demo-btn--primary demo-btn--lg">
                  Request a free quote
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="tel:+33612345678" className="demo-btn demo-btn--outline">
                  Call the contractor
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="demo-hero-card" aria-hidden="true">
              <div className="demo-hero-card-inner">
                <div className="demo-google-rating">
                  <Stars />
                  <strong>4.9 / 5</strong>
                  <span>38 Google reviews</span>
                </div>
                <div className="demo-hero-card-divider" />
                <div className="demo-hero-trust-list">
                  <div className="demo-trust-row">
                    <span className="demo-trust-dot" />
                    Free quote within 48h
                  </div>
                  <div className="demo-trust-row">
                    <span className="demo-trust-dot" />
                    Available Mon to Sat
                  </div>
                  <div className="demo-trust-row">
                    <span className="demo-trust-dot" />
                    No upfront payment required
                  </div>
                  <div className="demo-trust-row">
                    <span className="demo-trust-dot" />
                    Decennial guarantee included
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="demo-section" id="demo-services" aria-labelledby="demo-services-title">
          <div className="demo-container">
            <div className="demo-section-heading">
              <span className="demo-eyebrow">What we do</span>
              <h2 id="demo-services-title">Our services</h2>
              <p>Planning work at home? Ask for your free quote.</p>
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

        {/* ── Projects / Gallery ── */}
        <section className="demo-section demo-section--tinted" id="demo-realisations" aria-labelledby="demo-real-title">
          <div className="demo-container">
            <div className="demo-section-heading">
              <span className="demo-eyebrow">Completed work</span>
              <h2 id="demo-real-title">Our projects</h2>
              <p>Clean sites, realistic timelines and clear quotes.</p>
            </div>

            <div className="demo-gallery-grid">
              {realisations.map((r) => (
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

        {/* ── Stats bar ── */}
        <div className="demo-stats-bar" aria-label="Key figures">
          <div className="demo-stat">
            <strong>12 years</strong>
            <span>experience</span>
          </div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat">
            <strong>150+</strong>
            <span>projects completed</span>
          </div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat">
            <strong>4.9 ★</strong>
            <span>Google reviews</span>
          </div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat">
            <strong>Insured</strong>
            <span>Decennial + public liability</span>
          </div>
        </div>

        {/* ── Reviews ── */}
        <section className="demo-section" id="demo-avis" aria-labelledby="demo-avis-title">
          <div className="demo-container">
            <div className="demo-section-heading">
              <span className="demo-eyebrow">Google Reviews</span>
              <h2 id="demo-avis-title">Need reassurance before starting work?</h2>
              <p>Read recent reviews from homeowners in your area.</p>
            </div>

            <div className="demo-reviews-grid">
              {reviews.map((r) => (
                <div key={r.author} className="demo-review-card">
                  <div className="demo-review-header">
                    <div className="demo-review-avatar" aria-hidden="true">
                      {r.author.charAt(0)}
                    </div>
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

        {/* ── Guarantees bar ── */}
        <div className="demo-guarantees-bar" aria-label="Certifications and guarantees">
          <div className="demo-guarantee">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
              <path d="M12 2l7 3v5c0 5-3.5 9-7 10C8.5 19 5 15 5 10V5l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Decennial insurance
          </div>
          <div className="demo-guarantee">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Qualibat No. 4142
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
            Quote within 48h
          </div>
        </div>

        {/* ── Coverage area ── */}
        <section className="demo-section demo-section--tinted" id="demo-zone" aria-labelledby="demo-zone-title">
          <div className="demo-container">
            <div className="demo-zone-layout">
              <div className="demo-zone-text">
                <span className="demo-eyebrow">Where I work</span>
                <h2 id="demo-zone-title">Coverage area</h2>
                <p>
                  We cover Aix-en-Provence and nearby towns.
                  Travel included within a 35 km radius.
                </p>
                <div className="demo-zone-chips">
                  {zones.map((z) => (
                    <span key={z} className="demo-zone-chip">{z}</span>
                  ))}
                </div>
              </div>
              <div className="demo-zone-map" aria-hidden="true">
                <div className="demo-map-placeholder">
                  <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <span>Aix-en-Provence area</span>
                  <span className="demo-map-radius">35 km radius</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact / Quote ── */}
        <section className="demo-section demo-section--tinted" id="demo-contact" aria-labelledby="demo-contact-title">
          <div className="demo-container">
            <div className="demo-contact-grid">
              <div className="demo-contact-info">
                <span className="demo-eyebrow">Free &amp; no obligation</span>
                <h2 id="demo-contact-title">Request a quote</h2>
                <p>Tell us about your project and we’ll call you back quickly.</p>

                <div className="demo-contact-channels">
                  <a href="tel:+33612345678" className="demo-channel">
                    <div className="demo-channel-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Direct call</strong>
                      <span>+33 6 12 34 56 78</span>
                    </div>
                  </a>
                  <a href="mailto:info@johnsonbuilding.fr" className="demo-channel">
                    <div className="demo-channel-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <strong>Email</strong>
                      <span>info@johnsonbuilding.fr</span>
                    </div>
                  </a>
                </div>

                <p className="demo-contact-avail">
                  <span className="demo-avail-dot" aria-hidden="true" />
                  Available — quick response within 48h
                </p>
              </div>

              <div className="demo-form-wrapper">
                <form className="demo-form" aria-label="Quote request form">
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
                    <label htmlFor="demo-travaux">Type of work</label>
                    <select id="demo-travaux" className="demo-input demo-select">
                      <option value="">Choose a service…</option>
                      <option>Bricklaying</option>
                      <option>Tiling</option>
                      <option>Full renovation</option>
                      <option>Insulation</option>
                      <option>Plastering</option>
                      <option>External paving</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="demo-form-group">
                    <label htmlFor="demo-message">Project description</label>
                    <textarea
                      id="demo-message"
                      className="demo-input demo-textarea"
                      rows={4}
                      placeholder="Describe your project: surface area, location, any particular constraints…"
                    />
                  </div>
                  <button type="button" className="demo-btn demo-btn--primary demo-btn--full">
                    Send my quote request
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <p className="demo-form-note">Response guaranteed within 48h · No upfront payment required</p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="demo-footer">
          <div className="demo-container demo-footer-inner">
            <div>
              <div className="demo-brand demo-brand--footer">
                <div className="demo-brand-mono" aria-hidden="true">JB</div>
                <div>
                  <span className="demo-brand-name">Johnson Building</span>
                  <span className="demo-brand-tagline">Builder · Tiler · Aix-en-Provence</span>
                </div>
              </div>
              <p className="demo-footer-siret">SIRET: 412 345 678 00010 — Trade register Aix-en-Provence</p>
              <p className="demo-footer-siret">Decennial insurance AXA ref. XXXXXXXXXX</p>
            </div>

            <div>
              <p className="demo-footer-col-title">Services</p>
              <ul className="demo-footer-links">
                <li><a href="#demo-services">Bricklaying</a></li>
                <li><a href="#demo-services">Tiling</a></li>
                <li><a href="#demo-services">Renovation</a></li>
                <li><a href="#demo-services">Insulation</a></li>
              </ul>
            </div>

            <div>
              <p className="demo-footer-col-title">Contact</p>
              <ul className="demo-footer-links">
                <li><a href="tel:+33612345678">+33 6 12 34 56 78</a></li>
                <li><a href="mailto:info@johnsonbuilding.fr">info@johnsonbuilding.fr</a></li>
                <li>Aix-en-Provence &amp; Bouches-du-Rhône</li>
              </ul>
            </div>
          </div>
          <div className="demo-footer-bottom">
            <p>© 2025 Johnson Building · <span>Site created by <Link href="/en">Pixeloria</Link></span></p>
          </div>
        </footer>

      </div>
      {/* ── end demo-site ── */}

      {/* ── Back to Pixeloria CTA ── */}
      <section className="demo-back-cta" aria-label="Create your site with Pixeloria">
        <div className="demo-back-cta-inner">
          <div className="demo-back-cta-badge">✦ Preview created by Pixeloria</div>
          <h2>Want a website like this for your trade business?</h2>
          <p>
            This demo shows what Pixeloria can create for you — with your name, your photos,
            your services and your coverage area. Every site is tailor-made.
          </p>
          <div className="demo-back-cta-actions">
            <Link href="/en#contact" className="btn btn-primary btn-lg">
              Get my tailor-made website
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="btn-icon">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/en#services" className="btn btn-secondary">
              View Pixeloria packages
            </Link>
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

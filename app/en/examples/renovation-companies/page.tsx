import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getDemoImages } from '@/lib/demo-images';

export const metadata: Metadata = {
  title: 'Demo website for renovation companies | Pixeloria',
  description:
    'See what a professional website looks like for a renovation company — created by Pixeloria. Full demo with services, gallery, reviews and contact.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/examples/renovation-companies',
    title: 'Demo website for renovation companies | Pixeloria',
    description:
      'See what a professional website looks like for a renovation company — created by Pixeloria.',
    locale: 'en_GB',
    siteName: 'Pixeloria',
  },
};

const services = [
  {
    title: 'Dry Works',
    desc: 'Partition walls, plasterboard, false ceilings, rendering. Clean finish guaranteed on every project.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l9 5v8l-9 5-9-5V8l9-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 3v13M3 8l9 5 9-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Thermal Insulation',
    desc: "External insulation, loft and basement insulation. Eligible for energy grants (CEE, MaPrimeRénov').",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 12h18M3 7h18M3 17h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Tiling & Flooring',
    desc: 'Floor and wall tiles, hardwood, laminate. All surfaces, all room types.',
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
    title: 'Painting & Decoration',
    desc: 'Skim coat, ceilings, walls and joinery. Premium finishes delivered to spec.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L3 14.67V21h6.33l10.06-10.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Interior Joinery',
    desc: 'Doors, built-in wardrobes, staircases, custom bespoke pieces crafted to your space.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="8" height="18" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13" y="3" width="8" height="18" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 12h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Plumbing & Electrical',
    desc: 'Standards compliance, equipment replacement, subcontractor coordination handled for you.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const projects = [
  {
    label: 'Living room',
    location: 'Caluire',
    surface: '48 m²',
    gradientBefore: 'linear-gradient(135deg, #78716c 0%, #57534e 40%, #44403c 100%)',
    gradientAfter: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 40%, #fbbf24 100%)',
    labelBefore: 'Before — Old wallpaper, worn carpet',
    labelAfter: 'After — Modern paint, new flooring',
  },
  {
    label: 'Bathroom',
    location: 'Lyon 6th',
    surface: '8 m²',
    gradientBefore: 'linear-gradient(135deg, #374151 0%, #4b5563 40%, #6b7280 100%)',
    gradientAfter: 'linear-gradient(135deg, #f5f5f4 0%, #e7e5e4 30%, #d6d3d1 100%)',
    labelBefore: 'Before — Dated tiles, worn fixtures',
    labelAfter: 'After — Italian shower, large-format tiles',
  },
  {
    label: 'Kitchen',
    location: 'Écully',
    surface: '16 m²',
    gradientBefore: 'linear-gradient(135deg, #6b7280 0%, #9ca3af 40%, #71717a 100%)',
    gradientAfter: 'linear-gradient(135deg, #d4a15b 0%, #b8783e 40%, #92400e 100%)',
    labelBefore: 'Before — Dated units, cracked tiles',
    labelAfter: 'After — New kitchen, concrete worktop',
  },
  {
    label: 'Attic conversion',
    location: 'Bron',
    surface: '38 m²',
    gradientBefore: 'linear-gradient(180deg, #292524 0%, #3d3834 50%, #44403c 100%)',
    gradientAfter: 'linear-gradient(180deg, #fbbf24 0%, #f59e0b 40%, #d97706 100%)',
    labelBefore: 'Before — Raw, uninsulated loft space',
    labelAfter: 'After — Master suite with en-suite',
  },
];

const reviews = [
  {
    author: 'Emma T.',
    location: 'Lyon 8th',
    text: "Full flat renovation (80 m²). Harrison managed everything — plastering, tiling and painting. On time, on budget, outstanding finish.",
    date: '3 weeks ago',
  },
  {
    author: 'James R.',
    location: 'Caluire',
    text: "Loft conversion done in under 6 weeks. Very tidy team, project manager always available. Exactly what we wanted.",
    date: '2 months ago',
  },
  {
    author: 'Sophie W.',
    location: 'Écully',
    text: "Kitchen and bathroom at the same time — no chaos, no stress. Everything was coordinated perfectly. We'll use Harrison again.",
    date: '5 weeks ago',
  },
  {
    author: 'Philippe & Anne D.',
    location: 'Bron',
    text: "Insulation and full redecoration of our house. Very competitive quote, no hidden extras. The team are real professionals.",
    date: '3 months ago',
  },
  {
    author: 'Caroline M.',
    location: 'Lyon 7th',
    text: "Water damage repair — plasterboard, tiles and paint. Work done quickly and cleanly. Very reassuring team in a stressful moment.",
    date: '4 months ago',
  },
];

const areas = [
  'Lyon', 'Villeurbanne', 'Caluire', 'Bron', 'Écully',
  'Tassin-la-Demi-Lune', 'Oullins', 'Saint-Fons', 'Vénissieux', 'Décines',
  'Meyzieu', 'Saint-Priest', 'Francheville', 'Craponne',
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

export default function RenovationCompaniesDemoPage() {

  const demoImages = getDemoImages('renovation-companies');  return (
    <div className="demo-root">

      {/* ── Pixeloria demo banner ── */}
      <div className="demo-banner" role="banner" aria-label="Preview by Pixeloria">
        <div className="demo-banner-inner">
          <div className="demo-banner-text">
            <span className="demo-banner-pill">✦ Pixeloria Preview</span>
            <span className="demo-banner-msg">
              This is what your website could look like — every element personalised for your business
            </span>
          </div>
          <div className="demo-banner-actions">
            <Link href="/en#contact" className="demo-banner-cta">
              Get my website →
            </Link>
            <Link href="/en" className="demo-banner-back" aria-label="Back to home">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          FAKE CLIENT SITE — Harrison Renovations
          ══════════════════════════════════════ */}
      <div
        className="demo-site demo-site--artisan-clear"
        lang="en"
        style={{ '--dz-primary': '#D97706', '--dz-primary-dark': '#B45309' } as React.CSSProperties}
      >

        {/* ── Fake header ── */}
        <header className="demo-header" id="demo-top">
          <div className="demo-header-inner">
            <div className="demo-brand">
              <div className="demo-brand-mono" aria-hidden="true">HR</div>
              <div>
                <span className="demo-brand-name">Harrison Renovations</span>
                <span className="demo-brand-tagline">Renovation · Fit-out · Lyon</span>
              </div>
            </div>

            <nav className="demo-nav" aria-label="Demo site navigation">
              <a href="#demo-services">Services</a>
              <a href="#demo-realisations">Work</a>
              <a href="#demo-avis">Reviews</a>
              <a href="#demo-zone">Areas</a>
              <a href="#demo-contact">Contact</a>
            </nav>

            <a href="tel:+33472123456" className="demo-phone-cta" aria-label="Call +33 4 72 12 34 56">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="16" height="16">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +33 4 72 12 34 56
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
                <span>✓ RGE certified</span>
                <span className="demo-badge-sep" aria-hidden="true">·</span>
                <span>✓ Decennial insurance</span>
                <span className="demo-badge-sep" aria-hidden="true">·</span>
                <span>✓ 20 years experience</span>
              </div>

              <h1 className="demo-hero-craft">
                Interior Renovation · General Fit-Out
              </h1>

              <p className="demo-hero-name">Harrison Renovations</p>

              <p className="demo-hero-sub">
                Renovation contractor based in Lyon since 2005. We manage all trades —
                one point of contact from quote to handover.
              </p>

              <div className="demo-hero-visual">
                <Image src={demoImages.hero.src} alt={demoImages.hero.alt} width={900} height={560} className="demo-hero-inline-image" />
              </div>

              <div className="demo-hero-ctas">
                <a href="#demo-contact" className="demo-btn demo-btn--primary demo-btn--lg">
                  Request a free quote
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="tel:+33472123456" className="demo-btn demo-btn--outline">
                  Call the company
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
                  <span>78 Google reviews</span>
                </div>
                <div className="demo-hero-card-divider" />
                <div className="demo-hero-trust-list">
                  <div className="demo-trust-row"><span className="demo-trust-dot" />Free quote within 48h</div>
                  <div className="demo-trust-row"><span className="demo-trust-dot" />Available Mon to Sat</div>
                  <div className="demo-trust-row"><span className="demo-trust-dot" />No upfront payment required</div>
                  <div className="demo-trust-row"><span className="demo-trust-dot" />Decennial guarantee included</div>
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
              <p>
                A versatile renovation contractor handling all trades across interior fit-out,
                insulation, tiling, decoration and joinery.
              </p>
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

        {/* ── Work / Gallery ── */}
        <section className="demo-section demo-section--tinted" id="demo-realisations" aria-labelledby="demo-real-title">
          <div className="demo-container">
            <div className="demo-section-heading">
              <span className="demo-eyebrow">Completed projects</span>
              <h2 id="demo-real-title">Our work</h2>
              <p>
                Before and after photos from recent projects across Greater Lyon.
                Every project is unique — here are some examples.
              </p>
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

        {/* ── Stats bar ── */}
        <div className="demo-stats-bar" aria-label="Key figures">
          <div className="demo-stat"><strong>20 years</strong><span>experience</span></div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat"><strong>400+</strong><span>projects completed</span></div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat"><strong>4.8 ★</strong><span>Google reviews</span></div>
          <div className="demo-stat-sep" aria-hidden="true" />
          <div className="demo-stat"><strong>RGE</strong><span>certified</span></div>
        </div>

        {/* ── Reviews ── */}
        <section className="demo-section" id="demo-avis" aria-labelledby="demo-avis-title">
          <div className="demo-container">
            <div className="demo-section-heading">
              <span className="demo-eyebrow">Google Reviews</span>
              <h2 id="demo-avis-title">What our clients say</h2>
              <p>78 verified client reviews on Google — average 4.8 / 5.</p>
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

        {/* ── Guarantees ── */}
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
            RGE certified
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
                <span className="demo-eyebrow">Where we work</span>
                <h2 id="demo-zone-title">Coverage area</h2>
                <p>
                  Based in Lyon, we work across Greater Lyon and surrounding communes within a 40 km radius.
                  Travel costs included in all quotes.
                </p>
                <div className="demo-zone-chips">
                  {areas.map((z) => (
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
                  <span>Greater Lyon</span>
                  <span className="demo-map-radius">40 km radius</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="demo-section demo-section--tinted" id="demo-contact" aria-labelledby="demo-contact-title">
          <div className="demo-container">
            <div className="demo-contact-grid">
              <div className="demo-contact-info">
                <span className="demo-eyebrow">Free &amp; no obligation</span>
                <h2 id="demo-contact-title">Request a quote</h2>
                <p>Response within 48h. Detailed, transparent quote — no hidden extras.</p>
                <div className="demo-contact-channels">
                  <a href="tel:+33472123456" className="demo-channel">
                    <div className="demo-channel-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div><strong>Direct call</strong><span>+33 4 72 12 34 56</span></div>
                  </a>
                  <a href="mailto:info@harrison-renovations.fr" className="demo-channel">
                    <div className="demo-channel-icon">
                      <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div><strong>Email</strong><span>info@harrison-renovations.fr</span></div>
                  </a>
                </div>
                <p className="demo-contact-avail">
                  <span className="demo-avail-dot" aria-hidden="true" />
                  Available — response within 48h
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
                    <label htmlFor="demo-type">Type of work</label>
                    <select id="demo-type" className="demo-input demo-select">
                      <option value="">Choose…</option>
                      <option>Dry works &amp; plastering</option>
                      <option>Insulation</option>
                      <option>Tiling &amp; flooring</option>
                      <option>Painting &amp; decoration</option>
                      <option>Interior joinery</option>
                      <option>Full renovation</option>
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
                <div className="demo-brand-mono" aria-hidden="true">HR</div>
                <div>
                  <span className="demo-brand-name">Harrison Renovations</span>
                  <span className="demo-brand-tagline">Renovation · Fit-out · Lyon</span>
                </div>
              </div>
              <p className="demo-footer-siret">SIRET: 534 678 901 00023 — Trade register Lyon</p>
              <p className="demo-footer-siret">Decennial insurance Maaf ref. XXXXXXXXXX</p>
            </div>
            <div>
              <p className="demo-footer-col-title">Services</p>
              <ul className="demo-footer-links">
                <li><a href="#demo-services">Dry works</a></li>
                <li><a href="#demo-services">Insulation</a></li>
                <li><a href="#demo-services">Tiling</a></li>
                <li><a href="#demo-services">Painting</a></li>
              </ul>
            </div>
            <div>
              <p className="demo-footer-col-title">Contact</p>
              <ul className="demo-footer-links">
                <li><a href="tel:+33472123456">+33 4 72 12 34 56</a></li>
                <li><a href="mailto:info@harrison-renovations.fr">info@harrison-renovations.fr</a></li>
                <li>Lyon &amp; Greater Lyon</li>
              </ul>
            </div>
          </div>
          <div className="demo-footer-bottom">
            <p>© 2025 Harrison Renovations · <span>Website by <Link href="/en">Pixeloria</Link></span></p>
          </div>
        </footer>

      </div>

      {/* ── Back to Pixeloria CTA ── */}
      <section className="demo-back-cta" aria-label="Create your website with Pixeloria">
        <div className="demo-back-cta-inner">
          <div className="demo-back-cta-badge">✦ Preview created by Pixeloria</div>
          <h2>Want a website like this for your renovation business?</h2>
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

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Demo website for freelancers and consultants | Pixeloria',
  description:
    'See what a professional website looks like for a freelance consultant — created by Pixeloria. Full demo with services, results, reviews and contact.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/examples/freelancers-consultants',
    title: 'Demo website for freelancers and consultants | Pixeloria',
    description: 'See what a professional website looks like for a freelance consultant — created by Pixeloria.',
    locale: 'en_GB',
    siteName: 'Pixeloria',
  },
};

const services = [
  {
    title: 'Digital Strategy',
    desc: 'Online audit, objective setting, 90-day action plan. Clarity before action — no vague recommendations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Content Creation',
    desc: 'Blog articles, social media posts, newsletters. Content tuned to your audience and designed to convert.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Online Advertising',
    desc: 'Google Ads and Meta Ads campaigns. Precise targeting, optimised creatives, ROI tracked and maximised weekly.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="16 7 22 7 22 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'SEO',
    desc: 'Technical audit, content optimisation, link building. Lasting, measurable Google visibility.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Marketing Training',
    desc: 'Practical workshops for in-house teams. Social media, email marketing, analytics. Half-day or full-day formats.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Reporting & Analytics',
    desc: 'Custom dashboard, KPI tracking, clear monthly reports. You always know where your budget is going.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const projects = [
  {
    label: 'Google visibility',
    location: 'E-commerce client',
    surface: '×2.3 traffic',
    gradientBefore: 'linear-gradient(135deg, #44403c 0%, #57534e 40%, #3d3835 100%)',
    gradientAfter: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 40%, #5b21b6 100%)',
    labelBefore: 'Before — Page 3 on Google, 200 visits/month',
    labelAfter: 'After — Page 1 on 5 target queries, 460 visits/month',
  },
  {
    label: 'Social media',
    location: 'Local tradesman',
    surface: '+480 followers',
    gradientBefore: 'linear-gradient(135deg, #374151 0%, #4b5563 40%, #6b7280 100%)',
    gradientAfter: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 40%, #6d28d9 100%)',
    labelBefore: 'Before — Dormant account, 12 followers',
    labelAfter: 'After — Engaged community, 492 followers',
  },
  {
    label: 'Google Ads campaign',
    location: 'Medical clinic',
    surface: 'ROI ×3.8',
    gradientBefore: 'linear-gradient(160deg, #6b7280 0%, #9ca3af 40%, #71717a 100%)',
    gradientAfter: 'linear-gradient(160deg, #a78bfa 0%, #8b5cf6 40%, #7c3aed 100%)',
    labelBefore: 'Before — Poor budget allocation, high CPA',
    labelAfter: 'After — CPA halved, ROI ×3.8',
  },
  {
    label: 'Content strategy',
    location: 'Independent coach',
    surface: '+12 leads/month',
    gradientBefore: 'linear-gradient(180deg, #292524 0%, #3d3834 50%, #44403c 100%)',
    gradientAfter: 'linear-gradient(180deg, #c4b5fd 0%, #a78bfa 40%, #8b5cf6 100%)',
    labelBefore: 'Before — No content, no inbound leads',
    labelAfter: 'After — Blog + newsletter, 12 qualified leads/month',
  },
];

const reviews = [
  {
    author: 'Oliver P.',
    location: 'Paris 8th',
    text: "Morgan transformed our online visibility in 6 months. Web traffic doubled, enquiries up 70%. A genuinely worthwhile investment.",
    date: '1 month ago',
  },
  {
    author: 'Claire N.',
    location: 'Levallois',
    text: "Social media workshop — practical, tailored to our sector. We finally have a real content strategy. Thank you!",
    date: '3 weeks ago',
  },
  {
    author: 'Étienne D.',
    location: 'Neuilly',
    text: "Google Ads campaign managed with precision. Budget well spent, results as promised. We are renewing the engagement.",
    date: '2 months ago',
  },
  {
    author: 'Laura M.',
    location: 'Boulogne',
    text: "Very thorough SEO audit and clear action plan. Morgan explains without jargon — ideal for non-technical people.",
    date: '5 weeks ago',
  },
  {
    author: 'Max R.',
    location: 'Paris 3rd',
    text: "3-month digital strategy engagement. Morgan is available, rigorous and delivers real results. Highly recommended.",
    date: '4 months ago',
  },
];

const areas = [
  'Paris', 'Boulogne-Billancourt', 'Neuilly-sur-Seine', 'Levallois-Perret',
  'Issy-les-Moulineaux', 'Vincennes', 'Montreuil', 'Pantin',
  'Saint-Denis', 'Créteil', 'Nanterre', 'Courbevoie', 'Puteaux', 'La Défense',
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

export default function FreelancersConsultantsDemoPage() {
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
            <Link href="/en" className="demo-banner-back" aria-label="Back to industry page">← Back</Link>
          </div>
        </div>
      </div>

      <div
        className="demo-site demo-site--artisan-clear"
        lang="en"
        style={{ '--dz-primary': '#7C3AED', '--dz-primary-dark': '#6D28D9' } as React.CSSProperties}
      >
        <header className="demo-header" id="demo-top">
          <div className="demo-header-inner">
            <div className="demo-brand">
              <div className="demo-brand-mono" aria-hidden="true">MD</div>
              <div>
                <span className="demo-brand-name">Morgan Digital Studio</span>
                <span className="demo-brand-tagline">Digital Strategy · Content · Paris</span>
              </div>
            </div>
            <nav className="demo-nav" aria-label="Demo site navigation">
              <a href="#demo-services">Services</a>
              <a href="#demo-realisations">Results</a>
              <a href="#demo-avis">Reviews</a>
              <a href="#demo-zone">Areas</a>
              <a href="#demo-contact">Contact</a>
            </nav>
            <a href="tel:+33782345690" className="demo-phone-cta">
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" width="16" height="16">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +33 7 82 34 56 90
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
                  <span>✓ 9 years experience</span>
                  <span className="demo-badge-sep" aria-hidden="true">·</span>
                  <span>✓ 60+ clients</span>
                  <span className="demo-badge-sep" aria-hidden="true">·</span>
                  <span>✓ Google &amp; Meta certified</span>
                </div>
                <h1 className="demo-hero-craft">Digital Strategy · Online Marketing</h1>
                <p className="demo-hero-name">Morgan Digital Studio</p>
                <p className="demo-hero-sub">
                  Independent digital consultant based in Paris. I help SMEs and solopreneurs
                  build their online presence and attract the right clients.
                </p>
                <div className="demo-hero-ctas">
                  <a href="#demo-contact" className="demo-btn demo-btn--primary demo-btn--lg">
                    Tell me about your project
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a href="tel:+33782345690" className="demo-btn demo-btn--outline">
                    See the results
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
                    <span>43 Google reviews</span>
                  </div>
                  <div className="demo-hero-card-divider" />
                  <div className="demo-hero-trust-list">
                    <div className="demo-trust-row"><span className="demo-trust-dot" />Free discovery call for new clients</div>
                    <div className="demo-trust-row"><span className="demo-trust-dot" />Available Mon–Fri, response within 24h</div>
                    <div className="demo-trust-row"><span className="demo-trust-dot" />Flexible engagements, no rigid packages</div>
                    <div className="demo-trust-row"><span className="demo-trust-dot" />Google Ads &amp; Meta Business certified</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="demo-section" id="demo-services" aria-labelledby="demo-services-title">
            <div className="demo-container">
              <div className="demo-section-heading">
                <span className="demo-eyebrow">What I offer</span>
                <h2 id="demo-services-title">My services</h2>
                <p>Independent consultant offering bespoke engagements adapted to the size and objectives of every business.</p>
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
                <span className="demo-eyebrow">Concrete results</span>
                <h2 id="demo-real-title">Before &amp; after my projects</h2>
                <p>Measurable results from real engagements. Every project is unique — here are some examples of what is possible.</p>
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
            <div className="demo-stat"><strong>9 years</strong><span>experience</span></div>
            <div className="demo-stat-sep" aria-hidden="true" />
            <div className="demo-stat"><strong>60+</strong><span>clients</span></div>
            <div className="demo-stat-sep" aria-hidden="true" />
            <div className="demo-stat"><strong>4.9 ★</strong><span>Google</span></div>
            <div className="demo-stat-sep" aria-hidden="true" />
            <div className="demo-stat"><strong>Google &amp; Meta</strong><span>certified</span></div>
          </div>

          <section className="demo-section" id="demo-avis" aria-labelledby="demo-avis-title">
            <div className="demo-container">
              <div className="demo-section-heading">
                <span className="demo-eyebrow">Google Reviews</span>
                <h2 id="demo-avis-title">What my clients say</h2>
                <p>43 verified client reviews on Google — average 4.9 / 5.</p>
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
              Google Ads certified
            </div>
            <div className="demo-guarantee">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Meta Business certified
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
              Response within 24h
            </div>
          </div>

          <section className="demo-section demo-section--tinted" id="demo-zone" aria-labelledby="demo-zone-title">
            <div className="demo-container">
              <div className="demo-zone-layout">
                <div className="demo-zone-text">
                  <span className="demo-eyebrow">Where I work</span>
                  <h2 id="demo-zone-title">Coverage area</h2>
                  <p>Based in Paris, I work on-site in the Paris region and remotely across France and Europe. No geographic limit for fully remote engagements.</p>
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
                    <span>Paris &amp; Remote</span>
                    <span className="demo-map-radius">Across France</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="demo-section demo-section--tinted" id="demo-contact" aria-labelledby="demo-contact-title">
            <div className="demo-container">
              <div className="demo-contact-grid">
                <div className="demo-contact-info">
                  <span className="demo-eyebrow">Free discovery call</span>
                  <h2 id="demo-contact-title">Tell me about your project</h2>
                  <p>Response within 24h. Free 30-minute discovery call for every new enquiry.</p>
                  <div className="demo-contact-channels">
                    <a href="tel:+33782345690" className="demo-channel">
                      <div className="demo-channel-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div><strong>Direct call</strong><span>+33 7 82 34 56 90</span></div>
                    </a>
                    <a href="mailto:hello@morgandigital.fr" className="demo-channel">
                      <div className="demo-channel-icon">
                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div><strong>Email</strong><span>hello@morgandigital.fr</span></div>
                    </a>
                  </div>
                  <p className="demo-contact-avail">
                    <span className="demo-avail-dot" aria-hidden="true" />
                    Available — response within 24h, Mon–Fri
                  </p>
                </div>
                <div className="demo-form-wrapper">
                  <form className="demo-form" aria-label="Project enquiry form">
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
                      <label htmlFor="demo-type">Type of project</label>
                      <select id="demo-type" className="demo-input demo-select">
                        <option value="">Choose…</option>
                        <option>Digital strategy</option>
                        <option>SEO</option>
                        <option>Online advertising</option>
                        <option>Content creation</option>
                        <option>Training</option>
                        <option>Audit</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="demo-form-group">
                      <label htmlFor="demo-message">Your project</label>
                      <textarea id="demo-message" className="demo-input demo-textarea" rows={4} placeholder="Tell me about your business: sector, size, goals, indicative budget…" />
                    </div>
                    <button type="button" className="demo-btn demo-btn--primary demo-btn--full">
                      Send my enquiry
                      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                        <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <p className="demo-form-note">Free discovery call · Response within 24h</p>
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
                <div className="demo-brand-mono" aria-hidden="true">MD</div>
                <div>
                  <span className="demo-brand-name">Morgan Digital Studio</span>
                  <span className="demo-brand-tagline">Digital Strategy · Content · Paris</span>
                </div>
              </div>
              <p className="demo-footer-siret">SIRET: 789 012 345 00067 — Self-employed, Paris</p>
              <p className="demo-footer-siret">Certified Google Ads &amp; Meta Business Partner</p>
            </div>
            <div>
              <p className="demo-footer-col-title">Services</p>
              <ul className="demo-footer-links">
                <li><a href="#demo-services">Digital strategy</a></li>
                <li><a href="#demo-services">SEO</a></li>
                <li><a href="#demo-services">Advertising</a></li>
                <li><a href="#demo-services">Training</a></li>
              </ul>
            </div>
            <div>
              <p className="demo-footer-col-title">Contact</p>
              <ul className="demo-footer-links">
                <li><a href="tel:+33782345690">+33 7 82 34 56 90</a></li>
                <li><a href="mailto:hello@morgandigital.fr">hello@morgandigital.fr</a></li>
                <li>Paris &amp; remote (all of France)</li>
              </ul>
            </div>
          </div>
          <div className="demo-footer-bottom">
            <p>© 2025 Morgan Digital Studio · <span>Website by <Link href="/en">Pixeloria</Link></span></p>
          </div>
        </footer>
      </div>

      <section className="demo-back-cta" aria-label="Create your website with Pixeloria">
        <div className="demo-back-cta-inner">
          <div className="demo-back-cta-badge">✦ Preview created by Pixeloria</div>
          <h2>Want a website like this for your freelance business?</h2>
          <p>This demo shows what Pixeloria can create for you — with your name, your services and your positioning. Every site is tailor-made.</p>
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

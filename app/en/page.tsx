import Link from 'next/link';
import { OFFERS_US } from '@/lib/pricing-us';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import GoogleReviews from '@/components/sections/GoogleReviews';
import ContactForm from '@/components/forms/ContactForm';
import { TrackedOfferAction, TrackedContactChannel } from '@/components/analytics/TrackedAction';

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Pixeloria',
  url: 'https://pixeloria.fr/en',
  logo: 'https://pixeloria.fr/assets/pixeloria-logo.svg',
  description:
    'Pixeloria builds conversion-focused websites for contractors and local service businesses.',
  areaServed: { '@type': 'Country', name: 'United States' },
  sameAs: [
    'https://x.com/pixeloriaaw',
    'https://www.instagram.com/pixeloria.fr',
    'https://www.linkedin.com/company/pixeloria',
    'https://www.facebook.com/pixeloria.fr',
  ],
};

const faqs = [
  {
    q: 'How much does a contractor website cost?',
    a: `Pixeloria contractor websites start at ${OFFERS_US.starter.price} for a one-page website. Multi-page websites start at ${OFFERS_US.growth.price}. The final price depends on the number of pages, required integrations and content needs.`,
  },
  {
    q: 'How long does it take to build a contractor website?',
    a: 'A one-page contractor website can generally be delivered within five business days after all required information has been received. Larger websites may require one to three weeks.',
  },
  {
    q: 'Do you work with businesses across the United States?',
    a: 'Yes. Pixeloria works remotely with contractors and local service businesses across the United States.',
  },
  {
    q: 'Do I own my website?',
    a: 'Yes. The client owns the website content, domain and agreed project deliverables after full payment.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Yes. Pixeloria can redesign outdated contractor websites while preserving useful content and improving mobile usability, clarity and lead generation.',
  },
  {
    q: 'Is local SEO included?',
    a: 'Basic on-page and local SEO structure is included according to the selected package. Ongoing SEO, content creation and link acquisition require a separate service.',
  },
  {
    q: 'Do you guarantee Google rankings?',
    a: 'No legitimate agency can guarantee a specific organic Google ranking. Pixeloria improves the technical structure, content relevance and usability of the website without promising a specific position.',
  },
  {
    q: 'Do you provide Google Ads?',
    a: 'Google Ads management is not included in the standard website packages.',
  },
];

const faqPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const solutionBlocks = [
  {
    title: 'Clear Service Positioning',
    desc: 'Visitors understand what you do and who you serve within seconds.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Mobile Lead Generation',
    desc: 'Prominent call buttons and short estimate forms reduce friction.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Local Search Structure',
    desc: 'Services and service areas are clearly organized for customers and search engines.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Trust and Proof',
    desc: 'Reviews, completed projects, credentials and service guarantees help customers make a decision.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const trustPoints = [
  {
    title: 'Direct communication with the website builder',
    desc: 'You talk directly with the person building your site — no account managers relaying messages.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Clear project scope',
    desc: 'What is included, what is not, and what a scope change would involve is agreed before work starts.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Transparent pricing',
    desc: 'One-time package pricing, stated up front, with no hidden fees added later.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7v10M9 9.5c0-1.4 1.3-2.5 3-2.5s3 .9 3 2.2c0 3-6 1.5-6 4.3 0 1.3 1.3 2.3 3 2.3s3-1 3-2.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Mobile-first design',
    desc: 'Every page is built and tested for how customers actually browse: on a phone.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 18h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Contractor industry knowledge',
    desc: 'Websites are structured around how contractors and home-service businesses actually get hired.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21V9l9-6 9 6v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="14" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: 'Website ownership',
    desc: 'The content, domain and agreed deliverables belong to you once the project is paid in full.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Remote collaboration',
    desc: 'Projects run entirely by email, form and video call — built around your schedule and time zone.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2 12h20M12 3a15 15 0 010 18M12 3a15 15 0 000 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Written project process',
    desc: 'Scope, timeline and deliverables are confirmed in writing before any work begins.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const contractorCategories = [
  { label: 'Roofing contractors', href: '/en/roofing-websites' },
  { label: 'General contractors', href: '/en/general-contractor-websites' },
  { label: 'Remodeling companies', href: '/en/remodeling-contractor-websites' },
  { label: 'Gutter companies', href: '/en/gutter-company-websites' },
  { label: 'HVAC contractors', href: '/en/hvac-websites' },
  { label: 'Plumbers', href: '/en/plumber-websites' },
  { label: 'Electricians', href: '/en/electrician-websites' },
  { label: 'Painters', href: '/en/painting-contractor-websites' },
  { label: 'Landscapers', href: '/en/landscaping-websites' },
  { label: 'Cleaning companies' },
];

const auditMiniCards = [
  { title: 'Service clarity', desc: 'Can a visitor tell what you do and where you work in seconds?' },
  { title: 'Mobile experience', desc: 'Is it easy to call or request an estimate from a phone?' },
  { title: 'Calls to action', desc: 'Do visitors know exactly what to do next?' },
  { title: 'Local search readiness', desc: 'Is your business structured clearly for local search?' },
];

export default function EnHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
      />
      <ClientEffects />
      <HeaderEn />
      <main id="home">

        {/* ── HERO ── */}
        <section className="hero section" id="hero">
          <div className="container hero-inner">

            <div className="hero-text">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                Websites for contractors and local service businesses
              </div>

              <h1>
                Websites Built to Turn Local Searches Into{' '}
                <em className="gradient-text">Calls and Estimate Requests.</em>
              </h1>

              <p className="hero-sub">
                Pixeloria builds fast, mobile-first websites for roofing contractors, home-service companies and local businesses across the United States. Every website is designed to build trust, explain your services clearly and make it easy for customers to contact you.
              </p>

              <div className="hero-actions">
                <Link href="/en/free-website-audit" className="btn btn-primary">
                  <span>Get a Free Website Audit</span>
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <a href="#packages" className="btn btn-ghost">
                  View Website Packages
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              <ul className="hero-microbene">
                <li>
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Mobile-first design
                </li>
                <li>
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Built for lead generation
                </li>
                <li>
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Clear one-time pricing
                </li>
                <li>
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Direct communication
                </li>
                <li>
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Available across the United States
                </li>
              </ul>

              <div className="hero-metrics">
                <div className="metric">
                  <strong className="metric-value">{OFFERS_US.starter.price}</strong>
                  <span>Starter Website</span>
                </div>
                <div className="metric-divider" aria-hidden="true"></div>
                <div className="metric">
                  <strong className="metric-value">{OFFERS_US.growth.price}</strong>
                  <span>Growth Website</span>
                </div>
                <div className="metric-divider" aria-hidden="true"></div>
                <div className="metric">
                  <strong className="metric-value">5 days</strong>
                  <span>Starter delivery time</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card glass-card">
                <div className="hero-card-header">
                  <span className="chip">Your website, built for leads</span>
                  <div className="traffic-lights" aria-hidden="true">
                    <span></span><span></span><span></span>
                  </div>
                </div>
                <h2>Contractor Website</h2>
                <p>Custom design · Local SEO structure · Mobile-first</p>

                <ul className="feature-list">
                  <li>
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    Up to 5 custom pages
                  </li>
                  <li>
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    Click-to-call &amp; estimate request form
                  </li>
                  <li>
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    Local SEO structure included
                  </li>
                  <li>
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    Direct communication with your builder
                  </li>
                </ul>

                <div className="mini-chart" aria-hidden="true">
                  <div className="chart-bar" style={{ ['--h' as string]: '30%' }}></div>
                  <div className="chart-bar" style={{ ['--h' as string]: '45%' }}></div>
                  <div className="chart-bar" style={{ ['--h' as string]: '55%' }}></div>
                  <div className="chart-bar" style={{ ['--h' as string]: '70%' }}></div>
                  <div className="chart-bar" style={{ ['--h' as string]: '82%' }}></div>
                  <div className="chart-bar" style={{ ['--h' as string]: '95%' }} data-active></div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="float-badge float-badge-1" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M10 2l2.4 5 5.6.8-4 3.9.9 5.5L10 14.7l-5 2.5.9-5.5L2 7.8 7.6 7z" fill="currentColor" />
                </svg>
                Mobile-first design
              </div>
              <div className="float-badge float-badge-2" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                Starter sites ready in 5 business days
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="scroll-hint" aria-hidden="true">
            <span>Scroll</span>
            <div className="scroll-line"></div>
          </div>
        </section>

        {/* ── QUICK ANSWER ── */}
        <section className="section-intro section" id="quick-answer">
          <div className="container">
            <div className="intro-content reveal">
              <p className="intro-lead">
                A contractor website is a lead-generation website designed to present your services, establish trust and encourage local customers to call or request an estimate.
              </p>
              <p className="intro-body">
                A strong contractor website includes clear service pages, a defined service area, customer reviews, completed projects, mobile-friendly call buttons and a short estimate request form — all built to turn a phone search into a booked job.
              </p>
            </div>
          </div>
        </section>

        {/* ── PROBLEM ── */}
        <section className="section" id="problem">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">The Problem</span>
              <h2>Your Website Should Help You Win More Jobs</h2>
              <p className="section-sub">
                A contractor website should do more than look professional. It should immediately show customers what services you provide, where you work, why they should trust your company, how to request an estimate and how to call you from a mobile phone. If your website is outdated, slow or difficult to use, potential customers may contact a competitor instead.
              </p>
            </div>
          </div>
        </section>

        {/* ── SOLUTION ── */}
        <section id="solution" className="section section-tinted">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Our Approach</span>
              <h2>Built for the Way Local Customers Search</h2>
              <p className="section-sub">
                Most customers looking for a contractor search on their phone, compare several companies and contact the business that appears trustworthy and easy to reach. Pixeloria creates websites designed around that customer journey.
              </p>
            </div>

            <div className="why-grid">
              {solutionBlocks.map((block) => (
                <div key={block.title} className="why-card reveal">
                  <div className="why-icon">{block.icon}</div>
                  <h3>{block.title}</h3>
                  <p>{block.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PACKAGES ── */}
        <section className="section" id="packages">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Website Packages</span>
              <h2>Clear, One-Time Pricing for Contractor Websites</h2>
              <p className="section-sub">
                Pixeloria helps contractors and local service businesses get a clear, professional and effective website built to generate calls and estimate requests. No payment integration on this page — every package starts with a conversation.
              </p>
            </div>

            <div className="pricing-cards pricing-cards--three">

              {/* Starter Website */}
              <div className="pricing-card reveal">
                <p className="pricing-label">Starter Website</p>
                <p className="pricing-price">{OFFERS_US.starter.price} <span>{OFFERS_US.starter.suffix}</span></p>
                <p className="pricing-sublabel">One-page contractor website</p>
                <p className="pricing-accroche">
                  A focused, mobile-first website built to generate calls and estimate requests.
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
                <p className="pricing-note">Delivered five business days after all content is received.</p>
                <TrackedOfferAction
                  href="/en/free-website-audit"
                  className="btn btn-secondary"
                  offerName="Starter Website"
                  offerPrice="499 one-time"
                >
                  Get Your Website →
                </TrackedOfferAction>
              </div>

              {/* Growth Website — featured */}
              <div className="pricing-card pricing-card--featured reveal">
                <span className="pricing-badge">Most Popular</span>
                <p className="pricing-label">Growth Website</p>
                <p className="pricing-price">{OFFERS_US.growth.price} <span>{OFFERS_US.growth.suffix}</span></p>
                <p className="pricing-sublabel">Up to 5 pages</p>
                <p className="pricing-accroche">
                  A multi-page website with individual service pages, built to generate more qualified leads.
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
                <p className="pricing-note">Delivered in one to three weeks, depending on scope.</p>
                <TrackedOfferAction
                  href="/en/free-website-audit"
                  className="btn btn-primary"
                  offerName="Growth Website"
                  offerPrice="899 one-time"
                >
                  Start My Website →
                </TrackedOfferAction>
              </div>

              {/* Website Care & Local Visibility */}
              <div className="pricing-card reveal">
                <p className="pricing-label">Website Care &amp; Local Visibility</p>
                <p className="pricing-price">{OFFERS_US.care.price} <span>/ month</span></p>
                <p className="pricing-sublabel">Ongoing care for your website</p>
                <p className="pricing-accroche">
                  Your site stays secure, up to date and locally optimized — without you having to think about it.
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
                <p className="pricing-note">Cancel anytime. No guaranteed Google rankings — no agency can promise that honestly.</p>
                <TrackedOfferAction
                  href="#contact"
                  className="btn btn-secondary"
                  offerName="Website Care & Local Visibility"
                  offerPrice="79 / month"
                  as="anchor"
                >
                  Ask About Care Plan →
                </TrackedOfferAction>
              </div>

            </div>

            <p className="pricing-disclaimer reveal">
              All prices are in USD &middot; <Link href="/en/pricing">See full pricing details</Link> &middot; <a href="#contact">Contact us</a> for a free estimate.
            </p>
          </div>
        </section>

        {/* ── CONTRACTOR SPECIALIZATION ── */}
        <section className="section section-tinted" id="who">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Who We Build For</span>
              <h2>Websites for Contractors and Home-Service Businesses</h2>
              <p className="section-sub">
                Pixeloria builds websites for service-area businesses that rely on local customers finding them, trusting them and calling them.
              </p>
            </div>

            <div
              className="reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem',
                marginTop: '2.5rem',
              }}
            >
              {contractorCategories.map(({ label, href }) =>
                href ? (
                  <Link
                    key={label}
                    href={href}
                    className="why-card"
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    <h3 style={{ color: 'var(--text)', margin: 0 }}>{label}</h3>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        marginTop: '0.75rem',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--primary)',
                      }}
                    >
                      Learn more
                      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                ) : (
                  <div key={label} className="why-card">
                    <h3 style={{ color: 'var(--text)', margin: 0 }}>{label}</h3>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* ── FREE AUDIT PREMIUM ── */}
        <section id="audit-gratuit" className="audit-premium reveal">
          <div className="audit-blob audit-blob--1" aria-hidden="true" />
          <div className="audit-blob audit-blob--2" aria-hidden="true" />

          <div className="audit-premium-card">
            <div>
              <span className="audit-premium-badge">Free audit</span>

              <h2 className="audit-premium-title">
                Get a Free Website Audit
              </h2>

              <p className="audit-premium-desc">
                Already have a website but not getting enough calls or estimate requests? Pixeloria reviews your current site and gives you concrete recommendations to improve clarity, trust and lead generation.
              </p>

              <div className="audit-mini-cards">
                {auditMiniCards.map((card) => (
                  <div key={card.title} className="audit-mini-card">
                    <strong>{card.title}</strong>
                    <p>{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="audit-cta-panel">
              <div className="audit-cta-inner">
                <p className="audit-cta-label">Free website audit</p>

                <h3 className="audit-cta-title">
                  Get 3 to 5 Concrete Improvement Ideas
                </h3>

                <p className="audit-cta-desc">
                  A simple, readable and actionable first review to identify what may be holding back your calls and estimate requests.
                </p>

                <ul className="audit-cta-list">
                  <li>Quick review of your homepage</li>
                  <li>Visible friction points</li>
                  <li>Simple recommendations to prioritize</li>
                </ul>

                <Link href="/en/free-website-audit" className="audit-cta-btn">
                  Get My Free Website Audit
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>

                <p className="audit-cta-reassurance">
                  A quick, clear first recommendation tailored to your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="section" id="process">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">How It Works</span>
              <h2>From First Message to Live Website</h2>
              <p className="section-sub">Four straightforward steps, no complexity.</p>
            </div>

            <div className="process-grid">
              <div className="process-card reveal">
                <div className="process-num">01</div>
                <div className="process-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>You reach out</h3>
                <p>Fill in the form or send an email. Tell us about your business, your service area and what you need. We respond within 48 hours.</p>
              </div>

              <div className="process-card reveal">
                <div className="process-num">02</div>
                <div className="process-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>We agree on a clear plan</h3>
                <p>A short brief, a fixed estimate, a timeline. Everything in writing before any work begins. No ambiguity.</p>
              </div>

              <div className="process-card reveal">
                <div className="process-num">03</div>
                <div className="process-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>We build and show you</h3>
                <p>You see your site take shape and give feedback. Revisions are included. We do not disappear mid-project.</p>
              </div>

              <div className="process-card reveal">
                <div className="process-num">04</div>
                <div className="process-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Your site goes live</h3>
                <p>We handle deployment, final checks and hand everything over to you. You are in control from day one.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY WORK WITH PIXELORIA ── */}
        <section id="why" className="section testimonials-section">
          <div className="testimonials-halo testimonials-halo--top" aria-hidden="true" />
          <div className="testimonials-halo testimonials-halo--bottom" aria-hidden="true" />

          <div className="container">
            <div className="testimonials-layout">

              {/* Left editorial */}
              <div className="testimonials-editorial reveal">
                <span className="testimonials-badge">Why Pixeloria</span>
                <h2>Why Work With Pixeloria?</h2>
                <p className="testimonials-sub">
                  Pixeloria is a France-based web design studio serving contractors and local service businesses remotely across the United States.
                </p>
                <p className="testimonials-body">
                  European design standards, direct communication and a streamlined remote process — without a local office, an account manager or a call center in between. You work directly with the person building your website, from the first message to launch.
                </p>
                <div className="testimonials-cta-group">
                  <Link href="/en/about" className="btn btn-primary">
                    About Pixeloria
                  </Link>
                  <a href="#packages" className="btn btn-secondary">
                    View Packages
                  </a>
                </div>
              </div>

              {/* Right trust card */}
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
                    <h3>Built for Business Owners, Not Web Insiders</h3>
                  </div>
                </div>
                <p className="tc-intro">
                  Pixeloria focuses on websites that are useful, credible and easy to maintain — without unnecessary complexity.
                </p>
                <div className="tc-grid">
                  {trustPoints.map((pt) => (
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

        {/* ── PORTFOLIO ── */}
        <section id="portfolio" className="section section-tinted">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Our Work</span>
              <h2>Professional Websites, Built to Convert</h2>
              <p className="section-sub">
                Pixeloria designs and builds custom websites — from single-page starter sites to multi-page lead-generation websites. Every project is designed around clarity, trust and making it easy for a customer to get in touch.
              </p>
            </div>

            <div className="why-grid reveal">
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
                    <path d="M8 22h8M12 18v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Custom design</h3>
                <p>Every website is designed around your services and your service area — not a generic template.</p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M11 18h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Built for mobile</h3>
                <p>Most local searches happen on a phone. Every site is built and tested mobile-first.</p>
              </div>
              <div className="why-card">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h3>Structured for local SEO</h3>
                <p>Service and service-area pages are organized to help customers and search engines understand your business.</p>
              </div>
            </div>

            <div className="portfolio-cta reveal">
              <Link href="/realisations" className="btn btn-secondary">
                See Our Work
              </Link>
              <Link href="/en/free-website-audit" className="btn btn-primary">
                Get a Free Website Audit
                <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── REVIEWS ── */}
        <GoogleReviews locale="en" />

        {/* ── FAQ ── */}
        <section className="section section-tinted faq-section" id="faq">
          <div className="container">
            <div className="faq-layout">
              <div className="faq-sidebar reveal">
                <span className="faq-badge">FAQ</span>
                <h2>Common Questions</h2>
                <p className="faq-sub">
                  Straight answers to the things most contractors ask before starting a project with Pixeloria.
                </p>
                <div className="faq-reassurance">
                  <p>
                    Got a question we haven&apos;t covered? Ask directly — no jargon, no sales pitch.
                  </p>
                  <a href="#contact" className="btn btn-primary">
                    Ask a Question
                  </a>
                </div>
              </div>

              <div className="faq-accordion reveal">
                {faqs.map(({ q, a }, i) => (
                  <details key={i} className="faq-item">
                    <summary className="faq-question">
                      <span>{q}</span>
                      <svg className="faq-chevron" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </summary>
                    <div className="faq-answer">
                      <p>{a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="section section-dark" id="contact">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <span className="eyebrow reveal">Get in Touch</span>
                <h2 className="reveal">Tell Us About Your Project</h2>
                <p className="reveal">
                  Fill in the form and we will get back to you within 48 hours with a clear first recommendation — no sales call, no obligation.
                </p>

                <div className="contact-channels reveal">
                  <TrackedContactChannel
                    href="mailto:contact@pixeloria.fr"
                    className="channel-item"
                    kind="email"
                    source="homepage_contact"
                  >
                    <span className="channel-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <strong>Email</strong>
                      <span>contact@pixeloria.fr</span>
                    </div>
                  </TrackedContactChannel>
                  <TrackedContactChannel
                    href="mailto:contact@pixeloria.fr?subject=Schedule%20a%20call"
                    className="channel-item"
                    kind="call"
                    source="homepage_contact"
                  >
                    <span className="channel-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </span>
                    <div>
                      <strong>Schedule a call</strong>
                      <span>Email us your availability</span>
                    </div>
                  </TrackedContactChannel>
                </div>

                <p className="contact-availability reveal">
                  <span className="avail-dot" aria-hidden="true" />
                  Available across the United States — usually respond within 48h
                </p>
              </div>

              <div className="contact-form-wrapper reveal">
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

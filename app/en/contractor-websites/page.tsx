import type { Metadata } from 'next';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Contractor Website Design That Generates Leads | Pixeloria',
  description:
    'Professional websites for general contractors, remodelers, roofers and specialty trades. Mobile-first design built to generate phone calls and estimate requests for US contractors.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/contractor-websites',
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/contractor-websites',
    title: 'Contractor Website Design That Generates Leads | Pixeloria',
    description:
      'Professional websites for general contractors, remodelers, roofers and specialty trades. Mobile-first design built to generate phone calls and estimate requests for US contractors.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

const contractorTypes = [
  { label: 'General contractors', href: '/en/general-contractor-websites' },
  { label: 'Roofing contractors', href: '/en/roofing-websites' },
  { label: 'Remodeling companies', href: '/en/remodeling-contractor-websites' },
  { label: 'Gutter companies', href: '/en/gutter-company-websites' },
  { label: 'Painting contractors', href: '/en/painting-contractor-websites' },
  { label: 'Other specialty trades' },
];

const strongWebsiteItems = [
  {
    title: 'Mobile Lead Generation',
    desc: 'A visible call button and a short estimate form make it easy for a homeowner to reach you the moment they land on your site.',
  },
  {
    title: 'Local Search Structure',
    desc: 'Services and service areas are organized clearly so both visitors and search engines understand where and what you do.',
  },
  {
    title: 'Trust and Proof',
    desc: 'Reviews, completed projects and clear credentials help a prospect decide to call you instead of a competitor.',
  },
  {
    title: 'Clear Service Positioning',
    desc: 'A visitor should understand what you build or repair, and for whom, within a few seconds of landing on your site.',
  },
];

const includeItems = [
  {
    label: 'Service pages',
    desc: 'Dedicated pages for each core service you offer, from remodeling to repairs and installations.',
  },
  {
    label: 'Service area page',
    desc: 'A clear list of the towns and counties you cover, so prospects know you serve their area.',
  },
  {
    label: 'Completed projects gallery',
    desc: 'Photos of finished jobs to build trust with homeowners and property managers before they call.',
  },
  {
    label: 'Customer reviews',
    desc: 'Reviews displayed where prospects can see them before they decide to reach out.',
  },
  {
    label: 'Mobile call button',
    desc: 'A tap-to-call button, always visible, for visitors browsing on a phone.',
  },
  {
    label: 'Short estimate form',
    desc: 'A simple form so prospects can request an estimate without picking up the phone.',
  },
];

const faqs = [
  {
    q: 'How much does a contractor website cost?',
    a: 'Pixeloria contractor websites start at $499 for a one-page website. Multi-page websites with individual service pages start at $899.',
  },
  {
    q: 'How long does it take to build a contractor website?',
    a: 'A one-page contractor website can generally be delivered within five business days after we receive all required content. Larger multi-page websites may take one to three weeks.',
  },
  {
    q: 'Can you redesign my existing contractor website?',
    a: 'Yes. Pixeloria can redesign outdated contractor websites while improving mobile usability, lead generation and local search structure.',
  },
  {
    q: 'Do you offer local SEO for contractors?',
    a: 'Basic local SEO structure is included in our website packages. Ongoing SEO and content strategy are available as a separate service.',
  },
  {
    q: 'Do you guarantee first-page Google rankings?',
    a: 'No legitimate agency can guarantee a specific Google ranking. We focus on building a technically strong, well-structured website that supports your visibility over time.',
  },
];

export default function ContractorWebsitesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Contractor website design',
    provider: {
      '@type': 'Organization',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
    },
    description:
      'Website design services for general contractors, remodelers, roofers and specialty trade contractors.',
    areaServed: { '@type': 'Country', name: 'United States' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HeaderEn />
      <main>

        {/* Hero */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/en">Home</Link>
                <span aria-hidden="true"> › </span>
                <span>Contractor Websites</span>
              </nav>
              <span className="eyebrow">Contractors</span>
              <h1>Contractor Websites Built to Generate More Leads</h1>
              <p className="page-hero-sub">
                Pixeloria creates fast, professional websites for general contractors,
                remodelers, roofers and specialty trade contractors across the United States.
                Every contractor website is structured to showcase your services, service
                area, completed projects, customer reviews and estimate request process.
              </p>
              <div className="page-hero-actions">
                <Link href="/en/free-website-audit" className="btn btn-primary">
                  Get a Free Website Audit
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/en/pricing" className="btn btn-secondary">See Pricing</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="section">
          <div className="container">
            <div className="include-item" style={{ maxWidth: '760px' }}>
              <strong>Quick answer</strong>
              <p>
                A contractor website is a lead-generation website designed to present your
                services, build trust with local customers, and turn visitors into phone
                calls and estimate requests. A strong contractor website includes service
                pages, a service-area section, reviews, completed projects, mobile call
                buttons and a short estimate form.
              </p>
            </div>
          </div>
        </section>

        {/* Contractor Trades We Build Websites For */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Who we build for</span>
              <h2>Contractor Trades We Build Websites For</h2>
              <p className="section-sub">
                Pixeloria builds websites for companies that provide contracting services —
                Pixeloria itself does not perform contracting work. Our job is to design and
                build the website your contracting business uses to win jobs.
              </p>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.25rem',
                marginTop: '2.5rem',
              }}
            >
              {contractorTypes.map(({ label, href }) =>
                href ? (
                  <Link key={label} href={href} className="why-card" style={{ textDecoration: 'none', display: 'block' }}>
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

        {/* What Makes a Strong Contractor Website */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">The essentials</span>
              <h2>What Makes a Strong Contractor Website</h2>
              <p className="section-sub">
                Most customers looking for a contractor search on their phone and contact the
                business that appears trustworthy and easy to reach. A strong contractor
                website is built around that behavior.
              </p>
            </div>
            <div className="benefits-grid">
              {strongWebsiteItems.map((f, i) => (
                <div key={f.title} className="benefit-card">
                  <span className="benefit-num">0{i + 1}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Every Contractor Website Should Include */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">What&apos;s included</span>
              <h2>What Every Contractor Website Should Include</h2>
              <p className="section-sub">
                These are the elements prospects look for before they decide to call a
                contracting company.
              </p>
            </div>
            <div className="includes-grid">
              {includeItems.map((item) => (
                <div key={item.label} className="include-item">
                  <strong>{item.label}</strong>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Pricing</span>
              <h2>Contractor Website Pricing</h2>
              <p className="section-sub">
                Simple, one-time pricing to launch your contractor website, plus an optional
                monthly plan to keep it maintained and locally visible.
              </p>
            </div>
            <div className="pricing-cards pricing-cards--three">
              <div className="pricing-card">
                <p className="pricing-label">Starter Website</p>
                <p className="pricing-price">$499 <span>one-time</span></p>
                <p className="pricing-sublabel">A focused one-page contractor website</p>
                <ul>
                  <li>One-page website</li>
                  <li>Mobile-first responsive design</li>
                  <li>Mobile call button</li>
                  <li>Short estimate form</li>
                </ul>
                <Link href="/en/free-website-audit" className="btn btn-secondary">Get Started →</Link>
              </div>
              <div className="pricing-card pricing-card--featured">
                <span className="pricing-badge">Most Popular</span>
                <p className="pricing-label">Growth Website</p>
                <p className="pricing-price">$899 <span>one-time</span></p>
                <p className="pricing-sublabel">A multi-page website with individual service pages</p>
                <ul>
                  <li>Multiple service pages</li>
                  <li>Service area page</li>
                  <li>Completed projects gallery</li>
                  <li>Customer reviews section</li>
                  <li>Local SEO structure included</li>
                </ul>
                <Link href="/en/free-website-audit" className="btn btn-primary">Get Started →</Link>
              </div>
              <div className="pricing-card">
                <p className="pricing-label">Website Care & Local Visibility</p>
                <p className="pricing-price">$79 <span>/month</span></p>
                <p className="pricing-sublabel">Ongoing maintenance and local visibility support</p>
                <ul>
                  <li>Hosting and maintenance</li>
                  <li>Content updates</li>
                  <li>Local visibility support</li>
                  <li>No ranking guarantees</li>
                </ul>
                <Link href="/en/free-website-audit" className="btn btn-secondary">Add This Plan →</Link>
                <p className="page-cta-note">Cancel anytime.</p>
              </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <Link href="/en/pricing" style={{ color: 'var(--primary)', textDecoration: 'underline', fontSize: '0.9rem' }}>
                See full pricing details →
              </Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">FAQ</span>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-accordion">
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
        </section>

        {/* State pages list */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">State pages</span>
              <h2>We Also Serve Contractors In</h2>
            </div>
            <ul className="artisan-types-grid">
              <li className="artisan-type-tag"><Link href="/en/contractor-websites/georgia">Georgia</Link></li>
              <li className="artisan-type-tag"><Link href="/en/contractor-websites/colorado">Colorado</Link></li>
              <li className="artisan-type-tag"><Link href="/en/contractor-websites/texas">Texas</Link></li>
              <li className="artisan-type-tag"><Link href="/en/contractor-websites/florida">Florida</Link></li>
              <li className="artisan-type-tag"><Link href="/en/contractor-websites/north-carolina">North Carolina</Link></li>
            </ul>
          </div>
        </section>
        {/* /State pages list */}

        {/* Final CTA */}
        <section className="section">
          <div className="container">
            <div className="page-cta-block">
              <h2>Request a Free Contractor Website Audit</h2>
              <p>
                Send us your current website, or tell us about your contracting business if
                you don&apos;t have one yet. We&apos;ll give you honest, no-obligation
                feedback on what would help you generate more leads.
              </p>
              <Link href="/en/free-website-audit" className="btn btn-primary btn-lg">
                Request My Free Audit
                <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer locale="en" />
    </>
  );
}

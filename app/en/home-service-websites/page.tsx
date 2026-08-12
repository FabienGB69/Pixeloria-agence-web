import type { Metadata } from 'next';
import { OFFERS_US } from '@/lib/pricing-us';
import { hreflangSelf } from '@/lib/hreflang';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Home Service Business Website Design That Generates Leads | Pixeloria',
  description:
    'Professional websites for plumbers, electricians, HVAC contractors, landscapers and cleaning companies. Mobile-first design built to generate phone calls and service requests for US home-service businesses.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/home-service-websites',
    languages: hreflangSelf('https://pixeloria.fr/en/home-service-websites'),
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/home-service-websites',
    title: 'Home Service Business Website Design That Generates Leads | Pixeloria',
    description:
      'Professional websites for plumbers, electricians, HVAC contractors, landscapers and cleaning companies. Mobile-first design built to generate phone calls and service requests for US home-service businesses.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

const homeServiceTypes = [
  { label: 'Plumbers', href: '/en/plumber-websites' },
  { label: 'Electricians', href: '/en/electrician-websites' },
  { label: 'HVAC contractors', href: '/en/hvac-websites' },
  { label: 'Landscapers', href: '/en/landscaping-websites' },
  { label: 'Cleaning companies' },
  { label: 'Other home-service trades' },
];

const strongWebsiteItems = [
  {
    title: 'Recurring Service Calls',
    desc: 'Home-service work is often repeat business. Your website should make it just as easy for a returning customer to book a visit as it is for a first-time visitor to call.',
  },
  {
    title: 'Service-Area Coverage',
    desc: 'A clear list of the towns and neighborhoods you serve helps customers confirm you work in their area before they reach out.',
  },
  {
    title: 'Same-Day and Emergency Messaging',
    desc: 'If you offer same-day or emergency service, your website should say so clearly, so customers with an urgent need know to call you.',
  },
  {
    title: 'Trust and Proof',
    desc: 'Reviews, licensing details and completed jobs help a homeowner feel confident calling you into their home.',
  },
];

const includeItems = [
  {
    label: 'Service pages',
    desc: 'Dedicated pages for each service you offer, from routine maintenance to repairs and installations.',
  },
  {
    label: 'Service area page',
    desc: 'A clear list of the towns and neighborhoods you cover, so customers know you serve their area.',
  },
  {
    label: 'Completed jobs gallery',
    desc: 'Photos of finished work to build trust with homeowners before they call.',
  },
  {
    label: 'Customer reviews',
    desc: 'Reviews displayed where prospects can see them before they decide to reach out.',
  },
  {
    label: 'Mobile call button',
    desc: 'A tap-to-call button, always visible, for customers browsing on a phone.',
  },
  {
    label: 'Short service request form',
    desc: 'A simple form so customers can request service without picking up the phone.',
  },
];

const faqs = [
  {
    q: 'How much does a home service business website cost?',
    a: `Pixeloria home service websites start at ${OFFERS_US.starter.price} for a one-page website. Multi-page websites with individual service pages start at ${OFFERS_US.growth.price}.`,
  },
  {
    q: 'How long does it take to build a home service website?',
    a: 'A one-page website can generally be delivered within five business days after we receive all required content. Larger multi-page websites may take one to three weeks.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Yes. Pixeloria can redesign outdated home-service websites while improving mobile usability, lead generation and local search structure.',
  },
  {
    q: 'Can my website highlight same-day or emergency service?',
    a: 'Yes. If your business offers same-day or emergency service, we can feature it prominently so customers with an urgent need can find and contact you quickly.',
  },
  {
    q: 'Do you guarantee first-page Google rankings?',
    a: 'No legitimate agency can guarantee a specific Google ranking. We focus on building a technically strong, well-structured website that supports your visibility over time.',
  },
];

export default function HomeServiceWebsitesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Home service business website design',
    provider: {
      '@type': 'Organization',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
    },
    description:
      'Website design services for plumbers, electricians, HVAC contractors, landscapers, cleaning companies and other home-service businesses.',
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
                <span>Home Service Websites</span>
              </nav>
              <span className="eyebrow">Home service businesses</span>
              <h1>Home Service Websites Built to Generate More Calls</h1>
              <p className="page-hero-sub">
                Pixeloria creates fast, professional websites for plumbers, electricians,
                HVAC contractors, landscapers, cleaning companies and other home-service
                businesses across the United States. Every website is structured to
                showcase your services, service area, reviews and service request process.
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
                A home service business website is a lead-generation website designed to
                present your services, build trust with local customers, and turn visitors
                into phone calls and service requests. A strong home-service website
                includes service pages, a service-area section, reviews, completed jobs,
                mobile call buttons and a short service request form.
              </p>
            </div>
          </div>
        </section>

        {/* Home Service Trades We Build Websites For */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Who we build for</span>
              <h2>Home Service Trades We Build Websites For</h2>
              <p className="section-sub">
                Pixeloria builds websites for companies that provide home services —
                Pixeloria itself does not perform plumbing, electrical, HVAC, landscaping
                or cleaning work. Our job is to design and build the website your business
                uses to win jobs.
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
              {homeServiceTypes.map(({ label, href }) =>
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

        {/* What Makes a Strong Home Service Website */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">The essentials</span>
              <h2>What Makes a Strong Home Service Website</h2>
              <p className="section-sub">
                Home-service customers often need help quickly, and many become repeat
                customers over time. A strong website is built around both situations.
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

        {/* What Every Home Service Website Should Include */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">What&apos;s included</span>
              <h2>What Every Home Service Website Should Include</h2>
              <p className="section-sub">
                These are the elements customers look for before they decide to call a
                home-service company.
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
              <h2>Home Service Website Pricing</h2>
              <p className="section-sub">
                Simple, one-time pricing to launch your home-service website, plus an
                optional monthly plan to keep it maintained and locally visible.
              </p>
            </div>
            <div className="pricing-cards pricing-cards--three">
              <div className="pricing-card">
                <p className="pricing-label">Starter Website</p>
                <p className="pricing-price">{OFFERS_US.starter.price} <span>{OFFERS_US.starter.suffix}</span></p>
                <p className="pricing-sublabel">A focused one-page home-service website</p>
                <ul>
                  <li>One-page website</li>
                  <li>Mobile-first responsive design</li>
                  <li>Mobile call button</li>
                  <li>Short service request form</li>
                </ul>
                <Link href="/en/free-website-audit" className="btn btn-secondary">Get Started →</Link>
              </div>
              <div className="pricing-card pricing-card--featured">
                <span className="pricing-badge">Most Popular</span>
                <p className="pricing-label">Growth Website</p>
                <p className="pricing-price">{OFFERS_US.growth.price} <span>{OFFERS_US.growth.suffix}</span></p>
                <p className="pricing-sublabel">A multi-page website with individual service pages</p>
                <ul>
                  <li>Multiple service pages</li>
                  <li>Service area page</li>
                  <li>Completed jobs gallery</li>
                  <li>Customer reviews section</li>
                  <li>Local SEO structure included</li>
                </ul>
                <Link href="/en/free-website-audit" className="btn btn-primary">Get Started →</Link>
              </div>
              <div className="pricing-card">
                <p className="pricing-label">Website Care & Local Visibility</p>
                <p className="pricing-price">{OFFERS_US.care.price} <span>{OFFERS_US.care.suffix}</span></p>
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

        {/* Final CTA */}
        <section className="section">
          <div className="container">
            <div className="page-cta-block">
              <h2>Request a Free Home Service Website Audit</h2>
              <p>
                Send us your current website, or tell us about your business if you
                don&apos;t have one yet. We&apos;ll give you honest, no-obligation feedback
                on what would help you generate more leads.
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

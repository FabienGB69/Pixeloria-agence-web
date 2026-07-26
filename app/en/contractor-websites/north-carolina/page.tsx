import type { Metadata } from 'next';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Website Design for Contractors in North Carolina | Pixeloria',
  description:
    'Remote website design services for North Carolina contractors — Charlotte, Raleigh-Durham and Greensboro. No local office; we work by video call, email and a clear written process, with a 48-hour reply commitment.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/contractor-websites/north-carolina',
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/contractor-websites/north-carolina',
    title: 'Website Design for Contractors in North Carolina | Pixeloria',
    description:
      'Remote website design services for North Carolina contractors — Charlotte, Raleigh-Durham and Greensboro. No local office; we work by video call, email and a clear written process, with a 48-hour reply commitment.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

const demandItems = [
  {
    title: 'General contractors and remodelers',
    desc: 'North Carolina is one of the fastest-growing states in the country for in-migration, with strong new-construction and remodeling demand concentrated around Charlotte and the Raleigh-Durham Research Triangle.',
  },
  {
    title: 'Coastal roofers and storm-damage repair',
    desc: 'Eastern and coastal North Carolina see meaningful hurricane exposure, which keeps roofing and storm-damage repair searches active for contractors serving those counties.',
  },
  {
    title: 'Piedmont remodelers and specialty trades',
    desc: 'In the Piedmont and western regions, demand is driven more by population growth and new-construction activity than by storm damage, so remodeling, additions and specialty trade work lead the search volume there.',
  },
];

const metros = [
  'Charlotte', 'Raleigh-Durham (Research Triangle)', 'Greensboro', 'Coastal / Eastern NC', 'Piedmont region',
];

const processSteps = [
  {
    num: '01',
    title: 'We talk through your project',
    desc: 'A short video call or email exchange to understand your services, whether you are on the coast or in the Piedmont, and what your website needs to accomplish.',
  },
  {
    num: '02',
    title: 'We send a written proposal',
    desc: 'You receive a clear, fixed-price proposal in writing. No in-person meeting is needed to move forward.',
  },
  {
    num: '03',
    title: 'We build and share a preview',
    desc: 'We design your site and send a live preview link so you can review every page from your phone or computer.',
  },
  {
    num: '04',
    title: 'You approve, we launch',
    desc: 'Once you give the green light, we publish the site and hand over full access. Every exchange happens by email and video call.',
  },
];

const faqs = [
  {
    q: 'Do you have an office in North Carolina?',
    a: 'No. Pixeloria works remotely with contractors across North Carolina and the rest of the United States. There is no in-person office visit — every project runs through video calls, email and a written proposal.',
  },
  {
    q: 'Do you build differently for coastal versus Piedmont contractors?',
    a: 'Yes, where it matters. Coastal and eastern North Carolina contractors often benefit from a storm-damage or roofing focus, while Piedmont and western contractors typically see more demand tied to new construction and remodeling. We tailor the site content to match.',
  },
  {
    q: 'How much does a website cost for a North Carolina contractor?',
    a: 'Pixeloria websites start at $499 for a one-page site. Multi-page websites with individual service pages start at $899. See our full pricing for details.',
  },
  {
    q: 'How long does it take to get a North Carolina contractor website live?',
    a: 'A one-page website can generally be delivered within five business days once we have your content. Larger multi-page websites may take one to three weeks.',
  },
  {
    q: 'Do you guarantee first-page Google rankings in North Carolina?',
    a: 'No legitimate agency can guarantee a specific Google ranking. We focus on building a technically strong, well-structured website that supports your visibility over time.',
  },
];

export default function NorthCarolinaContractorWebsitesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Contractor website design in North Carolina',
    provider: {
      '@type': 'Organization',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
    },
    description:
      'Remote website design services for general contractors, roofers, remodelers and specialty trade contractors serving North Carolina.',
    areaServed: { '@type': 'State', name: 'North Carolina' },
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
                <Link href="/en/contractor-websites">Contractor Websites</Link>
                <span aria-hidden="true"> › </span>
                <span>North Carolina</span>
              </nav>
              <span className="eyebrow">North Carolina contractors</span>
              <h1>Website Design for Contractors in North Carolina</h1>
              <p className="page-hero-sub">
                Remote website design services for North Carolina contractors.
                Pixeloria has no physical office in North Carolina — we work with
                roofers, general contractors, remodelers and specialty trades across
                Charlotte, Raleigh-Durham, Greensboro and beyond entirely by video
                call, email and a clear written process.
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
                Pixeloria is a remote web design studio — we do not have a physical
                office or local presence anywhere in North Carolina. We serve North
                Carolina contractors the same way we serve clients across the rest of
                the United States: through video calls, email and a documented,
                written project process, with a 48-hour reply commitment on every
                request.
              </p>
            </div>
          </div>
        </section>

        {/* Contractor Types & Demand Drivers */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Who we build for</span>
              <h2>Contractor Websites Built for the North Carolina Market</h2>
              <p className="section-sub">
                North Carolina is one of the fastest-growing states for in-migration,
                and what drives demand differs by region — from coastal storm repair
                to Piedmont new construction.
              </p>
            </div>
            <div className="benefits-grid">
              {demandItems.map((f, i) => (
                <div key={f.title} className="benefit-card">
                  <span className="benefit-num">0{i + 1}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metro Areas */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Service areas</span>
              <h2>Metro Markets We Help Contractors Reach in North Carolina</h2>
              <p className="section-sub">
                Whether you are on the coast or in the Piedmont, your website clearly
                states the specific area or areas you cover, so homeowners know you
                serve their part of the state.
              </p>
            </div>
            <ul className="artisan-types-grid">
              {metros.map((metro) => (
                <li key={metro} className="artisan-type-tag">{metro}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Remote Process */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">How it works</span>
              <h2>How We Work Remotely With North Carolina Contractors</h2>
              <p className="section-sub">
                No office visit is required. Every step of the project happens by
                video call, email and a written process you can review at your own
                pace, wherever in North Carolina you are based.
              </p>
            </div>
            <div className="benefits-grid">
              {processSteps.map((step) => (
                <div key={step.num} className="benefit-card">
                  <span className="benefit-num">{step.num}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="include-item" style={{ maxWidth: '760px', marginTop: '2rem' }}>
              <strong>Availability</strong>
              <p>
                We reply within 48 hours to every project request, and we schedule
                video calls to fit Eastern Time business hours so they work with
                your day.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Pricing</span>
              <h2>North Carolina Contractor Website Pricing</h2>
              <p className="section-sub">
                Simple, one-time pricing to launch your website, plus an optional
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

        {/* Final CTA */}
        <section className="section">
          <div className="container">
            <div className="page-cta-block">
              <h2>Request a Free Website Audit</h2>
              <p>
                Send us your current website, or tell us about your North Carolina
                contracting business if you don&apos;t have one yet. We&apos;ll give
                you honest, no-obligation feedback — by email, wherever you&apos;re
                based.
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

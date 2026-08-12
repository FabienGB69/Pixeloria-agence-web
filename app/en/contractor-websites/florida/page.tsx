import type { Metadata } from 'next';
import { OFFERS_US } from '@/lib/pricing-us';
import Link from 'next/link';
import { breadcrumbList } from '@/lib/breadcrumb';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Website Design for Contractors in Florida | Pixeloria',
  description:
    'Remote website design services for Florida contractors — Miami, Orlando, Tampa and Jacksonville. No local office; we work by video call, email and a clear written process, with a 48-hour reply commitment.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/contractor-websites/florida',
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/contractor-websites/florida',
    title: 'Website Design for Contractors in Florida | Pixeloria',
    description:
      'Remote website design services for Florida contractors — Miami, Orlando, Tampa and Jacksonville. No local office; we work by video call, email and a clear written process, with a 48-hour reply commitment.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

const demandItems = [
  {
    title: 'Roofers and storm-damage specialists',
    desc: 'Named storms and hurricane season are the dominant driver of contractor searches in Florida. Roof replacement, storm damage repair and insurance claim assistance are among the most searched services in the state — your site should lead with them.',
  },
  {
    title: 'General contractors and remodelers',
    desc: "Florida's population is growing fast, driven by both retirees and new relocations. That growth creates steady demand for remodeling, additions and general contracting work well beyond storm season.",
  },
  {
    title: 'Year-round exterior trades',
    desc: 'Unlike northern states, Florida has no winter shutdown for outdoor and exterior work. Painting, decking, pressure washing and other exterior trades can market and book work all twelve months of the year.',
  },
];

const metros = [
  'Miami', 'Orlando', 'Tampa', 'Jacksonville', 'Coastal Florida',
];

const processSteps = [
  {
    num: '01',
    title: 'We talk through your project',
    desc: 'A short video call or email exchange to understand your services, your service area and what a strong website needs to do for your business.',
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
    q: 'Do you have an office in Florida?',
    a: 'No. Pixeloria works remotely with contractors across Florida and the rest of the United States. There is no in-person office visit — every project runs through video calls, email and a written proposal.',
  },
  {
    q: 'Can you help highlight storm and hurricane-related services?',
    a: 'Yes. Given how much Florida contractor demand is tied to hurricane season, we can build dedicated pages for storm damage repair, roof replacement and insurance claim assistance so those searches lead directly to your site.',
  },
  {
    q: 'How much does a website cost for a Florida contractor?',
    a: `Pixeloria websites start at ${OFFERS_US.starter.price} for a one-page site. Multi-page websites with individual service pages start at ${OFFERS_US.growth.price}. See our full pricing for details.`,
  },
  {
    q: 'How long does it take to get a Florida contractor website live?',
    a: 'A one-page website can generally be delivered within five business days once we have your content. Larger multi-page websites may take one to three weeks.',
  },
  {
    q: 'Do you guarantee first-page Google rankings in Florida?',
    a: 'No legitimate agency can guarantee a specific Google ranking. We focus on building a technically strong, well-structured website that supports your visibility over time.',
  },
];

export default function FloridaContractorWebsitesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Contractor website design in Florida',
    provider: {
      '@type': 'Organization',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
    },
    description:
      'Remote website design services for general contractors, roofers, remodelers and specialty trade contractors serving Florida.',
    areaServed: { '@type': 'State', name: 'Florida' },
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

  const breadcrumbSchema = breadcrumbList([
    { name: 'Home', url: 'https://pixeloria.fr/en' },
    { name: 'Contractor Websites', url: 'https://pixeloria.fr/en/contractor-websites' },
    { name: 'Florida', url: 'https://pixeloria.fr/en/contractor-websites/florida' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
                <span>Florida</span>
              </nav>
              <span className="eyebrow">Florida contractors</span>
              <h1>Website Design for Contractors in Florida</h1>
              <p className="page-hero-sub">
                Remote website design services for Florida contractors. Pixeloria has
                no physical office in Florida — we work with roofers, general
                contractors, remodelers and specialty trades across Miami, Orlando,
                Tampa, Jacksonville and beyond entirely by video call, email and a
                clear written process.
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
                office or local presence anywhere in Florida. We serve Florida
                contractors the same way we serve clients across the rest of the
                United States: through video calls, email and a documented, written
                project process, with a 48-hour reply commitment on every request.
              </p>
            </div>
          </div>
        </section>

        {/* Contractor Types & Demand Drivers */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Who we build for</span>
              <h2>Contractor Websites Built for the Florida Market</h2>
              <p className="section-sub">
                Hurricane exposure and rapid population growth shape what Florida
                homeowners search for. Your website should be built around both.
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
              <h2>Metro Markets We Help Contractors Reach in Florida</h2>
              <p className="section-sub">
                Whether you serve one metro or several, your website clearly states
                the specific area or areas you cover, so homeowners know you serve
                their part of the state.
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
              <h2>How We Work Remotely With Florida Contractors</h2>
              <p className="section-sub">
                No office visit is required. Every step of the project happens by
                video call, email and a written process you can review at your own
                pace, wherever in Florida you are based.
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
                video calls to fit Eastern Time business hours so they work with your
                day, including during hurricane season when timing matters most.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Pricing</span>
              <h2>Florida Contractor Website Pricing</h2>
              <p className="section-sub">
                Simple, one-time pricing to launch your website, plus an optional
                monthly plan to keep it maintained and locally visible.
              </p>
            </div>
            <div className="pricing-cards pricing-cards--three">
              <div className="pricing-card">
                <p className="pricing-label">Starter Website</p>
                <p className="pricing-price">{OFFERS_US.starter.price} <span>{OFFERS_US.starter.suffix}</span></p>
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
                <p className="pricing-price">{OFFERS_US.growth.price} <span>{OFFERS_US.growth.suffix}</span></p>
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
              <h2>Request a Free Website Audit</h2>
              <p>
                Send us your current website, or tell us about your Florida
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

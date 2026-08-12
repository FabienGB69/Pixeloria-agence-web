import type { Metadata } from 'next';
import Link from 'next/link';
import { breadcrumbList } from '@/lib/breadcrumb';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Website Design for Contractors in Texas | Pixeloria',
  description:
    'Remote website design services for Texas contractors — Houston, Dallas-Fort Worth, San Antonio and Austin. No local office; we work by video call, email and a clear written process, with a 48-hour reply commitment.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/contractor-websites/texas',
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/contractor-websites/texas',
    title: 'Website Design for Contractors in Texas | Pixeloria',
    description:
      'Remote website design services for Texas contractors — Houston, Dallas-Fort Worth, San Antonio and Austin. No local office; we work by video call, email and a clear written process, with a 48-hour reply commitment.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

const demandItems = [
  {
    title: 'Roofers and storm-damage repair',
    desc: 'Gulf Coast metros like Houston and Corpus Christi see regular hurricane and severe hail activity. That drives sustained search demand for roof replacement, storm-damage repair and insurance claim assistance — your website needs to speak directly to that.',
  },
  {
    title: 'General contractors and remodelers',
    desc: 'Texas is one of the fastest-growing states in the country, with heavy new-construction and remodeling activity across every major metro. A clear, professional website helps you stand out in a market where homeowners have plenty of contractors to choose from.',
  },
  {
    title: 'Specialty trades',
    desc: 'Painting, gutters, fencing, decking and other specialty trades all compete for the same mobile searches. A well-structured site with clear services and a visible call button matters as much for a specialty trade as for a general contractor.',
  },
];

const metros = [
  'Houston', 'Dallas-Fort Worth', 'San Antonio', 'Austin', 'Corpus Christi', 'Gulf Coast region',
];

const processSteps = [
  {
    num: '01',
    title: 'We talk through your project',
    desc: 'A short video call or email exchange to understand your services, the metro areas or counties you actually serve, and what you want your website to do for you.',
  },
  {
    num: '02',
    title: 'We send a written proposal',
    desc: 'You get a clear, fixed-price proposal in writing — no in-person meeting required, no surprises later.',
  },
  {
    num: '03',
    title: 'We build and share a preview',
    desc: 'We design your site and send you a live preview link so you can review every page from your phone or computer, wherever you are in Texas.',
  },
  {
    num: '04',
    title: 'You approve, we launch',
    desc: 'Once you sign off, we publish the site and hand over full access. All communication along the way happens by email and video call.',
  },
];

const faqs = [
  {
    q: 'Do you have an office in Texas?',
    a: 'No. Pixeloria works remotely with contractors across Texas and the rest of the United States. There is no in-person office visit — every project is handled by video call, email and a written proposal.',
  },
  {
    q: 'Texas is a huge state — do you build one website for the whole state?',
    a: 'No. Because Texas is so large and spread out, we build your website around the specific metro area or areas you actually serve, such as Houston, Dallas-Fort Worth, San Antonio or Austin, so prospects immediately understand where you work.',
  },
  {
    q: 'How much does a website cost for a Texas contractor?',
    a: 'Pixeloria websites start at $499 for a one-page site. Multi-page websites with individual service pages start at $899. See our full pricing for details.',
  },
  {
    q: 'How long does it take to get a Texas contractor website live?',
    a: 'A one-page website can generally be delivered within five business days once we have your content. Larger multi-page websites may take one to three weeks.',
  },
  {
    q: 'Do you guarantee first-page Google rankings in Texas?',
    a: 'No legitimate agency can guarantee a specific Google ranking. We focus on building a technically strong, well-structured website that supports your visibility over time.',
  },
];

export default function TexasContractorWebsitesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Contractor website design in Texas',
    provider: {
      '@type': 'Organization',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
    },
    description:
      'Remote website design services for general contractors, roofers, remodelers and specialty trade contractors serving Texas.',
    areaServed: { '@type': 'State', name: 'Texas' },
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
    { name: 'Texas', url: 'https://pixeloria.fr/en/contractor-websites/texas' },
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
                <span>Texas</span>
              </nav>
              <span className="eyebrow">Texas contractors</span>
              <h1>Website Design for Contractors in Texas</h1>
              <p className="page-hero-sub">
                Remote website design services for Texas contractors. Pixeloria has no
                physical office in Texas — we work with roofers, general contractors,
                remodelers and specialty trades across Houston, Dallas-Fort Worth, San
                Antonio, Austin and beyond entirely by video call, email and a clear
                written process.
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
                office or local presence anywhere in Texas. We serve Texas contractors
                the same way we serve clients across the rest of the United States:
                through video calls, email and a documented, written project process.
                Every website is built around the specific metro area or areas a
                contractor actually serves, since Texas is too large and spread out
                for a one-size-fits-all service area.
              </p>
            </div>
          </div>
        </section>

        {/* Contractor Types & Demand Drivers */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Who we build for</span>
              <h2>Contractor Websites Built for the Texas Market</h2>
              <p className="section-sub">
                Texas is one of the fastest-growing and most competitive contractor
                markets in the country. What homeowners search for varies by region —
                your website should reflect that.
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
              <h2>Metro Markets We Help Contractors Reach in Texas</h2>
              <p className="section-sub">
                Texas is geographically enormous — a plumber based in Dallas does not
                serve Houston, and a roofer in San Antonio does not serve Austin. Your
                website is built to clearly state the specific area or areas you cover.
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
              <h2>How We Work Remotely With Texas Contractors</h2>
              <p className="section-sub">
                No office visit is required. Every step of the project happens by
                video call, email and a written process you can review at your own
                pace — wherever in Texas you are based.
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
                video calls to fit Central and Mountain time zone business hours so
                they work with your day.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Pricing</span>
              <h2>Texas Contractor Website Pricing</h2>
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
                Send us your current website, or tell us about your Texas contracting
                business if you don&apos;t have one yet. We&apos;ll give you honest,
                no-obligation feedback — by email, wherever you&apos;re based.
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

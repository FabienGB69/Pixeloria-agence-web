import type { Metadata } from 'next';
import Link from 'next/link';
import { breadcrumbList } from '@/lib/breadcrumb';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Website Design for Contractors in Colorado | Pixeloria',
  description:
    'Remote website design services for Colorado contractors — Denver, Colorado Springs, Aurora and Fort Collins. Mobile-first websites built to generate calls and estimate requests, delivered remotely with no local office required.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/contractor-websites/colorado',
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/contractor-websites/colorado',
    title: 'Website Design for Contractors in Colorado | Pixeloria',
    description:
      'Remote website design services for Colorado contractors — Denver, Colorado Springs, Aurora and Fort Collins. Mobile-first websites built to generate calls and estimate requests, delivered remotely with no local office required.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

const contractorTypes = [
  { label: 'Roofing contractors', href: '/en/roofing-websites' },
  { label: 'General contractors' },
  { label: 'Remodeling companies' },
  { label: 'Exterior and siding contractors' },
  { label: 'Gutter companies' },
  { label: 'Painting contractors' },
];

const marketContext = [
  {
    title: 'One of the most hail-prone regions in the US',
    desc: 'The Denver metro and the broader Front Range corridor are among the most hail-prone regions in the entire United States, making hailstorms a dominant, well-documented driver of roofing and exterior-contractor demand in Colorado specifically.',
  },
  {
    title: 'High-altitude and mountain construction',
    desc: 'Mountain communities require weather-resistant materials and work within shorter seasonal windows, distinct from the year-round pace of Front Range metro work — a genuinely Colorado-specific consideration.',
  },
  {
    title: 'Front Range population growth',
    desc: 'Strong, sustained population growth along the Denver-Boulder-Colorado Springs corridor is driving general contractor and remodeling demand well beyond just roofing.',
  },
  {
    title: 'Secondary metro markets',
    desc: 'Colorado Springs, Aurora and Fort Collins are established, growing markets alongside Denver, each with steady contractor demand.',
  },
];

const metros = ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins'];

const includeItems = [
  {
    label: 'Service pages',
    desc: 'Dedicated pages for each core service you offer, from roofing and remodeling to exterior repairs and installations.',
  },
  {
    label: 'Service area page',
    desc: 'A clear list of the Colorado towns and counties you cover, so prospects know you serve their area.',
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
    q: 'Do you have an office in Colorado?',
    a: 'No, Pixeloria works remotely with contractors across Colorado and the rest of the United States. All collaboration happens through video calls, email and shared project tools — there is no in-person office visit.',
  },
  {
    q: 'How does the remote process work?',
    a: 'We gather your services, service area and content through a short form and email, review your project on a video call if helpful, and send drafts for feedback online. You never need to meet us in person to get a finished website.',
  },
  {
    q: 'How much does a contractor website cost?',
    a: 'Pixeloria contractor websites start at $499 for a one-page website. Multi-page websites with individual service pages start at $899. See our pricing page for full details.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'A one-page contractor website can generally be delivered within five business days after we receive all required content. Larger multi-page websites may take one to three weeks.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Yes. Pixeloria can redesign outdated contractor websites while improving mobile usability, lead generation and local search structure — all handled remotely.',
  },
];

export default function ContractorWebsitesColoradoPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Contractor website design for Colorado',
    provider: {
      '@type': 'Organization',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
    },
    description:
      'Remote website design services for general contractors, remodelers, roofers and specialty trade contractors in Colorado.',
    areaServed: { '@type': 'State', name: 'Colorado' },
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
    { name: 'Colorado', url: 'https://pixeloria.fr/en/contractor-websites/colorado' },
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
                <span>Colorado</span>
              </nav>
              <span className="eyebrow">Colorado</span>
              <h1>Website Design for Contractors in Colorado</h1>
              <p className="page-hero-sub">
                Remote website design services for Colorado contractors. Pixeloria builds fast,
                professional websites for roofers, general contractors and remodelers serving
                Denver, Colorado Springs, Aurora, Fort Collins and the rest of Colorado — all
                work is done remotely, with no local office or in-person visit required.
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
                Pixeloria designs and builds websites for contractors operating in Colorado,
                entirely remotely. We do not have a physical office in the state — every
                project is handled through video calls, email and online project tools, and
                every website is structured around Colorado&apos;s service areas, from the
                Denver metro to Colorado Springs and Fort Collins.
              </p>
            </div>
          </div>
        </section>

        {/* Contractor Trades We Build Websites For */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Who we build for</span>
              <h2>Contractor Trades We Build Websites For in Colorado</h2>
              <p className="section-sub">
                Pixeloria builds websites for companies that provide contracting services —
                Pixeloria itself does not perform contracting work. Our job is to design and
                build the website your Colorado contracting business uses to win jobs.
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

        {/* Colorado Market Context */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Local context</span>
              <h2>What Drives Contractor Demand in Colorado</h2>
              <p className="section-sub">
                Colorado&apos;s contractor market has its own distinct drivers. Your website
                should speak to the real conditions homeowners and property managers in the
                state are searching around.
              </p>
            </div>
            <div className="benefits-grid">
              {marketContext.map((f, i) => (
                <div key={f.title} className="benefit-card">
                  <span className="benefit-num">0{i + 1}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metro Markets Served */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Service area</span>
              <h2>Main Metro Markets We Serve</h2>
              <p className="section-sub">
                We design contractor websites for businesses serving these Colorado markets,
                and any other city or county across the state.
              </p>
            </div>
            <ul className="artisan-types-grid">
              {metros.map((m) => (
                <li key={m} className="artisan-type-tag">{m}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Remote Collaboration Process */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">How it works</span>
              <h2>A Fully Remote Collaboration Process</h2>
              <p className="section-sub">
                Pixeloria has no office in Colorado. Every project is handled remotely, from
                first contact to launch, using clear written communication and simple online
                tools.
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
              <div className="why-card">
                <h3 style={{ color: 'var(--text)', margin: 0 }}>Video calls</h3>
                <p>We discuss your services, service area and goals over a video call whenever it&apos;s useful — no in-person visit needed.</p>
              </div>
              <div className="why-card">
                <h3 style={{ color: 'var(--text)', margin: 0 }}>Email and written briefs</h3>
                <p>Content, photos and feedback are collected through email and simple forms, so everything stays clear and documented.</p>
              </div>
              <div className="why-card">
                <h3 style={{ color: 'var(--text)', margin: 0 }}>Online project tools</h3>
                <p>Drafts are shared online for your review, so you can approve each step from your phone or computer, wherever you are.</p>
              </div>
            </div>
            <div className="include-item" style={{ maxWidth: '760px', marginTop: '2rem' }}>
              <strong>Our response commitment</strong>
              <p>We reply within 48 hours to every project inquiry from Colorado contractors, with a clear next step — no waiting, no chasing.</p>
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
                contracting company in Colorado.
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
              <h2>Colorado Contractor Website Pricing</h2>
              <p className="section-sub">
                Simple, one-time pricing to launch your contractor website remotely, plus an
                optional monthly plan to keep it maintained and locally visible.
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
              <h2>Request a Free Contractor Website Audit</h2>
              <p>
                Send us your current website, or tell us about your Colorado contracting
                business if you don&apos;t have one yet. We&apos;ll give you honest,
                no-obligation feedback on what would help you generate more leads — all
                handled remotely.
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

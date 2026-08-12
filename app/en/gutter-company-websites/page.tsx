import type { Metadata } from 'next';
import { hreflangSelf } from '@/lib/hreflang';
import { OFFERS_US } from '@/lib/pricing-us';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Gutter Company Website Design That Generates Leads | Pixeloria',
  description:
    'Focused, mobile-first websites for gutter installation, repair and cleaning companies. Built to turn seasonal search traffic into estimate requests, with a website plan sized to your ticket size.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/gutter-company-websites',
    languages: hreflangSelf('https://pixeloria.fr/en/gutter-company-websites'),
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/gutter-company-websites',
    title: 'Gutter Company Website Design That Generates Leads | Pixeloria',
    description:
      'Focused, mobile-first websites for gutter installation, repair and cleaning companies. Built to turn seasonal search traffic into estimate requests, with a website plan sized to your ticket size.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

const includeItems = [
  {
    label: 'Clear service list',
    desc: 'Gutter installation, gutter repair, gutter cleaning, seamless gutters and gutter guard installation, each named plainly on the homepage.',
  },
  {
    label: 'Service area section',
    desc: 'The towns or county you cover, so homeowners can confirm you serve their address before they call.',
  },
  {
    label: 'Mobile call button',
    desc: 'A tap-to-call button that stays visible, since most estimate requests start on a phone.',
  },
  {
    label: 'Short estimate form',
    desc: 'A quick way to request a gutter estimate for visitors who would rather not call.',
  },
  {
    label: 'Before/after photos',
    desc: 'A small gallery of completed gutter jobs — new runs, guards installed, downspouts rerouted.',
  },
  {
    label: 'Seasonal messaging',
    desc: 'Homepage copy that speaks to whichever season it is: spring and fall cleaning, or post-storm inspection.',
  },
];

const seasonalAngles = [
  {
    title: 'Spring and fall cleaning',
    desc: 'The two heaviest search windows for gutter cleaning. Your homepage and estimate form should be ready to catch that traffic both times a year, not just once.',
  },
  {
    title: 'Gutter guard installation',
    desc: 'A specific page for gutter guards captures homeowners comparing a one-time cleaning against a longer-term fix.',
  },
  {
    title: 'After a roof job or a storm',
    desc: 'Many homeowners search for a gutter company right around the time they search for a roofer — after a new roof install or after storm damage. A clear, findable gutter site catches that adjacent search intent.',
  },
];

const localSeoItems = [
  { label: 'Service area page', desc: 'A dedicated page listing every town or county you serve.' },
  { label: 'Google Business Profile alignment', desc: 'Business name, address and services kept consistent between your website and your profile.' },
  { label: 'Gutter service schema markup', desc: 'Structured data describing your services and service area to search engines.' },
  { label: 'Reviews displayed clearly', desc: 'Customer reviews shown where a homeowner comparing gutter companies will see them.' },
];

const faqs = [
  {
    q: 'How much does a gutter company website cost?',
    a: `Pixeloria gutter company websites start at ${OFFERS_US.starter.price} for a focused one-page website. Multi-page websites with individual service pages start at ${OFFERS_US.growth.price}. Full pricing details are on our pricing page.`,
  },
  {
    q: 'Is a one-page website enough for a gutter company?',
    a: 'Often, yes. Gutter work is typically a smaller, more focused service than roofing or remodeling, so a single well-structured page covering your services, service area, photos and an estimate form is frequently all a gutter company needs. We can also build a multi-page site if you offer a wider range of services.',
  },
  {
    q: 'How long does it take to build a gutter company website?',
    a: 'A one-page gutter website can generally be delivered within five business days after we receive your content. Multi-page websites may take one to three weeks.',
  },
  {
    q: 'Can you redesign my existing gutter company website?',
    a: 'Yes. Pixeloria can redesign an outdated gutter company website while improving mobile usability, lead generation and local search structure.',
  },
  {
    q: 'Do you guarantee first-page Google rankings?',
    a: 'No legitimate agency can guarantee a specific Google ranking. We focus on building a technically strong, well-structured website that supports your visibility over time.',
  },
];

export default function GutterCompanyWebsitesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Gutter company website design',
    provider: {
      '@type': 'Organization',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
    },
    description: 'Website design services for gutter installation, repair and cleaning companies.',
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
                <span>Gutter Company Websites</span>
              </nav>
              <span className="eyebrow">Gutter companies</span>
              <h1>Gutter Company Website Design That Generates Leads</h1>
              <p className="page-hero-sub">
                Pixeloria builds focused, mobile-first websites for gutter installation,
                repair and cleaning companies across the United States. Gutter work tends
                to be a smaller, more seasonal service than a full roof or remodel — so
                your website should be simple, fast, and built around one goal: getting a
                homeowner to request an estimate.
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
                A gutter company website should clearly list your services (installation,
                repair, cleaning, gutter guards), show your service area, display reviews and
                a few before/after photos, and offer both a mobile call button and a short
                estimate form. Because gutter work usually has a smaller average ticket than
                roofing or remodeling, a single, focused page is often enough — and because
                many gutter companies offer annual cleaning contracts, the site should make
                that recurring service easy to find and request.
              </p>
            </div>
          </div>
        </section>

        {/* Website Design for Gutter Companies */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Built for gutter companies</span>
              <h2>Website Design for Gutter Companies</h2>
              <p className="section-sub">
                Pixeloria builds websites for companies that provide gutter services —
                Pixeloria itself does not install or repair gutters. Our job is to design and
                build the website your gutter business uses to win jobs.
              </p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card">
                <span className="benefit-num">01</span>
                <h3>Sized to your ticket</h3>
                <p>Gutter jobs are typically smaller than a full roof or remodel. A focused one-page site is often the right fit, rather than an oversized multi-page build.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">02</span>
                <h3>Seasonal by design</h3>
                <p>Demand for gutter cleaning and gutter guards peaks in spring and fall. Your homepage messaging can be updated to match the season.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">03</span>
                <h3>Built to convert</h3>
                <p>Every page is designed around one goal: turning a visitor into a phone call or an estimate request.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Demand and Adjacent Searches */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Seasonal & adjacent demand</span>
              <h2>Seasonal Demand and Adjacent Searches</h2>
              <p className="section-sub">
                Gutter searches follow a pattern that a generic website often misses.
              </p>
            </div>
            <div className="benefits-grid">
              {seasonalAngles.map((f, i) => (
                <div key={f.title} className="benefit-card">
                  <span className="benefit-num">0{i + 1}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
            <ul className="artisan-types-grid" style={{ marginTop: '1.5rem' }}>
              <li className="artisan-type-tag">Gutter installation</li>
              <li className="artisan-type-tag">Gutter repair</li>
              <li className="artisan-type-tag">Gutter cleaning</li>
              <li className="artisan-type-tag">Seamless gutters</li>
              <li className="artisan-type-tag">Gutter guard installation</li>
              <li className="artisan-type-tag">Downspout repair</li>
              <li className="artisan-type-tag">Annual cleaning contracts</li>
              <li className="artisan-type-tag">Storm-related gutter damage</li>
            </ul>
          </div>
        </section>

        {/* What Every Gutter Company Website Should Include */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">The essentials</span>
              <h2>What Every Gutter Company Website Should Include</h2>
              <p className="section-sub">
                These are the elements homeowners look for before they decide to request an
                estimate from a gutter company.
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

        {/* Recurring Cleaning Contracts and Website Care */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Recurring service</span>
              <h2>Recurring Cleaning Contracts and Website Care</h2>
              <p className="section-sub">
                Many gutter companies offer annual or seasonal cleaning contracts to keep
                customers coming back twice a year. A website that clearly explains that
                option — and that is itself kept up to date season after season — reinforces
                the same recurring relationship you&apos;re asking customers for. That&apos;s
                the idea behind our Website Care & Local Visibility plan: your site stays
                current for the same reason your customers stay on a cleaning schedule.
              </p>
            </div>
          </div>
        </section>

        {/* Local SEO Structure for Gutter Companies */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Local visibility</span>
              <h2>Local SEO Structure for Gutter Companies</h2>
              <p className="section-sub">
                Every gutter website we build starts with a local SEO structure so your
                service area is clear to both visitors and search engines. No agency can
                guarantee a specific ranking — what we can do is build the technical
                foundation that supports your visibility over time.
              </p>
            </div>
            <div className="includes-grid">
              {localSeoItems.map((item) => (
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
              <h2>Gutter Company Website Pricing</h2>
              <p className="section-sub">
                Because gutter work is often a single, focused service, our Starter Website
                is a strong fit for many gutter companies. Larger operations offering
                multiple services may prefer the Growth Website.
              </p>
            </div>
            <p style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
              Starter Website: {OFFERS_US.starter.price} one-time. Growth Website: {OFFERS_US.growth.price} one-time (most popular).
              Website Care &amp; Local Visibility: {OFFERS_US.care.price}/month, cancel anytime.
            </p>
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
              <h2>Request a Free Gutter Company Website Audit</h2>
              <p>
                Send us your current website, or tell us about your gutter business if you
                don&apos;t have one yet. We&apos;ll give you honest, no-obligation feedback on
                what would help you generate more estimate requests.
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

import type { Metadata } from 'next';
import { hreflangSelf } from '@/lib/hreflang';
import { OFFERS_US } from '@/lib/pricing-us';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'HVAC Website Design That Generates Leads | Pixeloria',
  description:
    'Mobile-first HVAC websites built around urgent, right-now searches — AC failure in summer, heating failure in winter — with prominent click-to-call and clear emergency-service structure.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/hvac-websites',
    languages: hreflangSelf('https://pixeloria.fr/en/hvac-websites'),
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/hvac-websites',
    title: 'HVAC Website Design That Generates Leads | Pixeloria',
    description:
      'Mobile-first HVAC websites built around urgent, right-now searches — AC failure in summer, heating failure in winter — with prominent click-to-call and clear emergency-service structure.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

const includeItems = [
  {
    label: 'Service pages',
    desc: 'Dedicated pages for AC repair, heating repair, installation and maintenance, so each search lands on the right page.',
  },
  {
    label: 'Prominent mobile call button',
    desc: 'A tap-to-call button visible on every screen — critical when a visitor is dealing with a broken AC or furnace right now.',
  },
  {
    label: 'Emergency service messaging',
    desc: 'If your company offers emergency or after-hours service, that should be stated clearly near the top of the homepage, not buried in a footer.',
  },
  {
    label: 'Maintenance plan page',
    desc: 'A page describing your seasonal maintenance or service-agreement program, if you offer one, so return customers can find it easily.',
  },
  {
    label: 'Service area section',
    desc: 'The towns or county you cover, so homeowners can confirm service before they call.',
  },
  {
    label: 'Short estimate form',
    desc: 'A simple form for non-urgent requests like installation quotes, alongside the call button for urgent ones.',
  },
];

const urgencyAngles = [
  {
    title: 'Summer AC failure',
    desc: 'When an air conditioner fails in summer heat, homeowners search and call immediately. Your site needs to answer that urgency in seconds, not paragraphs.',
  },
  {
    title: 'Winter heating failure',
    desc: 'The same urgency applies in reverse during cold months. A heating failure search behaves like an emergency search, and your homepage should read that way too.',
  },
  {
    title: 'Mobile click-to-call first',
    desc: 'Because so many HVAC searches happen in the moment, the mobile call button matters more here than on almost any other trade site we build.',
  },
];

const localSeoItems = [
  { label: 'Service area pages', desc: 'Individual pages for each town or county your company serves.' },
  { label: 'Google Business Profile alignment', desc: 'Business name, address and services kept consistent with your website.' },
  { label: 'HVAC service schema markup', desc: 'Structured data that describes your services and service area to search engines.' },
  { label: 'Reviews displayed clearly', desc: 'Customer reviews shown where a homeowner comparing HVAC companies will see them.' },
];

const faqs = [
  {
    q: 'How much does an HVAC website cost?',
    a: `Pixeloria HVAC websites start at ${OFFERS_US.starter.price} for a one-page website. Multi-page websites with individual service pages start at ${OFFERS_US.growth.price}. Full pricing details are on our pricing page.`,
  },
  {
    q: 'How long does it take to build an HVAC website?',
    a: 'A one-page HVAC website can generally be delivered within five business days after we receive all required content. Larger multi-page websites may take one to three weeks.',
  },
  {
    q: 'Can you add emergency service messaging to my website?',
    a: 'Yes. If your company offers emergency or after-hours HVAC service, we can make sure that is stated clearly near the top of your homepage rather than buried in the site.',
  },
  {
    q: 'Can you redesign my existing HVAC website?',
    a: 'Yes. Pixeloria can redesign an outdated HVAC website while improving mobile usability, click-to-call visibility and local search structure.',
  },
  {
    q: 'Do you guarantee first-page Google rankings?',
    a: 'No legitimate agency can guarantee a specific Google ranking. We focus on building a technically strong, well-structured website that supports your visibility over time.',
  },
];

export default function HvacWebsitesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'HVAC contractor website design',
    provider: {
      '@type': 'Organization',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
    },
    description: 'Website design services for HVAC installation, repair and maintenance companies.',
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
                <span>HVAC Websites</span>
              </nav>
              <span className="eyebrow">HVAC contractors</span>
              <h1>HVAC Website Design That Generates Leads</h1>
              <p className="page-hero-sub">
                Pixeloria builds fast, mobile-first websites for HVAC companies across the
                United States. HVAC searches are often urgent — an AC failure in summer heat
                or a heating failure in winter cold both drive a &quot;right now&quot; search
                — so your website has to make calling you effortless from the first second.
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
                An HVAC website should include service pages for repair, installation and
                maintenance, a service area section, reviews, and — because HVAC demand is
                often urgent — a mobile call button that is impossible to miss. If your
                company offers emergency service, that should be stated clearly near the top
                of the homepage. Many HVAC companies also run maintenance or service-agreement
                programs, and the site should give that recurring service its own clear place.
              </p>
            </div>
          </div>
        </section>

        {/* Website Design for HVAC Contractors */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Built for HVAC</span>
              <h2>Website Design for HVAC Contractors</h2>
              <p className="section-sub">
                Pixeloria builds websites for companies that provide HVAC services — Pixeloria
                itself does not install or repair heating and cooling systems. Our job is to
                design and build the website your HVAC business uses to win jobs.
              </p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card">
                <span className="benefit-num">01</span>
                <h3>Mobile-first, call-first</h3>
                <p>Most HVAC searches happen on a phone, often in the middle of a breakdown. The call button is designed to be the first thing a visitor sees.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">02</span>
                <h3>Two seasons of urgency</h3>
                <p>Unlike many trades, HVAC has two peak urgency windows a year — summer AC failures and winter heating failures — and your site should be ready for both.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">03</span>
                <h3>Built to convert</h3>
                <p>Every page is designed around one goal: turning a visitor into a phone call or a service request.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Urgency-Driven Search Behavior */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Urgency & emergency search</span>
              <h2>Urgency-Driven Search Behavior</h2>
              <p className="section-sub">
                HVAC customers rarely browse casually. Your website should be built around
                how urgently they need an answer.
              </p>
            </div>
            <div className="benefits-grid">
              {urgencyAngles.map((f, i) => (
                <div key={f.title} className="benefit-card">
                  <span className="benefit-num">0{i + 1}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
            <ul className="artisan-types-grid" style={{ marginTop: '1.5rem' }}>
              <li className="artisan-type-tag">AC repair</li>
              <li className="artisan-type-tag">Heating repair</li>
              <li className="artisan-type-tag">HVAC installation</li>
              <li className="artisan-type-tag">Emergency HVAC service</li>
              <li className="artisan-type-tag">Furnace repair</li>
              <li className="artisan-type-tag">AC installation</li>
              <li className="artisan-type-tag">Seasonal maintenance</li>
              <li className="artisan-type-tag">Service agreements</li>
            </ul>
          </div>
        </section>

        {/* What Every HVAC Website Should Include */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">The essentials</span>
              <h2>What Every HVAC Website Should Include</h2>
              <p className="section-sub">
                These are the elements homeowners look for before they decide to call an
                HVAC company.
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

        {/* Maintenance Programs and Recurring Website Care */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Recurring service</span>
              <h2>Maintenance Programs and Recurring Website Care</h2>
              <p className="section-sub">
                Many HVAC companies run a seasonal maintenance or service-agreement program —
                a well-known part of the industry, built around recurring tune-ups rather than
                one-off repairs. Pixeloria does not offer or manage that program for you, but
                we make sure your website gives it a clear, findable place in your site
                structure. It&apos;s a natural match for our own Website Care &amp; Local
                Visibility plan: your maintenance program keeps customers coming back on a
                schedule, and that plan keeps your website current on a schedule too.
              </p>
            </div>
          </div>
        </section>

        {/* Local SEO Structure for HVAC Companies */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Local visibility</span>
              <h2>Local SEO Structure for HVAC Companies</h2>
              <p className="section-sub">
                Every HVAC website we build starts with a local SEO structure so your service
                area is clear to both visitors and search engines. No agency can guarantee a
                specific ranking — what we can do is build the technical foundation that
                supports your visibility over time.
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
              <h2>HVAC Website Pricing</h2>
              <p className="section-sub">
                Simple, one-time pricing to launch your HVAC website, plus an optional
                monthly plan to keep it maintained and locally visible.
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
              <h2>Request a Free HVAC Website Audit</h2>
              <p>
                Send us your current website, or tell us about your HVAC business if you
                don&apos;t have one yet. We&apos;ll give you honest, no-obligation feedback on
                what would help you generate more calls and service requests.
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

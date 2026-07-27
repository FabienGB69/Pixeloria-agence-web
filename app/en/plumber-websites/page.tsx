import type { Metadata } from 'next';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Plumber Website Design That Generates Leads | Pixeloria',
  description:
    'Fast, mobile-first plumbing websites built around emergency call urgency and clear trust signals. Website design for US plumbing companies that turns searches into phone calls.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/plumber-websites',
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/plumber-websites',
    title: 'Plumber Website Design That Generates Leads | Pixeloria',
    description:
      'Fast, mobile-first plumbing websites built around emergency call urgency and clear trust signals. Website design for US plumbing companies that turns searches into phone calls.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

const urgencyReasons = [
  {
    title: 'Emergency-driven searches',
    desc: 'A large share of plumbing searches happen mid-crisis — a burst pipe, no hot water, a major leak. Visitors are looking for a phone number, not a long read.',
  },
  {
    title: 'Speed on mobile matters more here',
    desc: 'Someone searching for a plumber during an emergency is usually on a phone, often with a slow connection, and will not wait for a slow-loading site.',
  },
  {
    title: 'Trust built quickly',
    desc: 'Plumbing customers are inviting someone into their home, frequently during a stressful moment. Clear, professional presentation and visible licensing information build confidence fast.',
  },
  {
    title: 'A path for planned work too',
    desc: 'Not every visitor has an emergency. Fixture installations, repiping and water heater replacements need their own clear service pages alongside the emergency messaging.',
  },
];

const includeItems = [
  {
    label: 'Hard-to-miss call button',
    desc: 'A tap-to-call button that stays visible on every page and every scroll position, sized so it cannot be missed on a phone screen.',
  },
  {
    label: 'Fast-loading mobile pages',
    desc: 'A lightweight, optimized build so pages load quickly even on a weak mobile connection — critical when someone is searching mid-emergency.',
  },
  {
    label: 'Licensing and insurance display',
    desc: 'License number and insurance information shown clearly, so homeowners feel confident before they call.',
  },
  {
    label: 'Service pages',
    desc: 'Dedicated pages for drain cleaning, water heater repair, leak detection, repiping and other core plumbing services.',
  },
  {
    label: 'Service area page',
    desc: 'A clear list of the towns and counties you cover, so homeowners know you serve their area.',
  },
  {
    label: 'Customer reviews',
    desc: 'Reviews displayed where prospects can see them before they decide to call.',
  },
];

const faqs = [
  {
    q: 'How much does a plumbing website cost?',
    a: 'Pixeloria plumbing websites start at $499 for a one-page website. Multi-page websites with individual service pages start at $899.',
  },
  {
    q: 'How long does it take to build a plumbing website?',
    a: 'A one-page plumbing website can generally be delivered within five business days after we receive all required content. Larger multi-page websites may take one to three weeks.',
  },
  {
    q: 'Can you redesign my existing plumbing website?',
    a: 'Yes. Pixeloria can redesign outdated plumbing websites while improving mobile speed, call button placement and local search structure.',
  },
  {
    q: 'Can my website highlight emergency plumbing service?',
    a: 'Yes. If you offer emergency or same-day plumbing service, we place that messaging and a prominent call button where visitors see it first, since many plumbing searches happen mid-emergency.',
  },
  {
    q: 'Do you guarantee first-page Google rankings?',
    a: 'No legitimate agency can guarantee a specific Google ranking. We focus on building a technically strong, fast-loading website that supports your visibility over time.',
  },
];

export default function PlumberWebsitesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Plumber website design',
    provider: {
      '@type': 'Organization',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
    },
    description: 'Website design services for plumbing companies, built around emergency call urgency and trust signals.',
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
                <span>Plumber Websites</span>
              </nav>
              <span className="eyebrow">Plumbing companies</span>
              <h1>Plumber Website Design That Generates Leads</h1>
              <p className="page-hero-sub">
                Pixeloria builds fast, mobile-first websites for plumbing companies across the
                United States. Plumbing searches skew heavily toward emergencies, so every site
                is structured around an unmissable call button, quick mobile load times and
                clear trust signals — alongside the pages planned-project customers need too.
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
                A plumbing website should put a mobile call button in front of every visitor
                immediately, since most plumbing searches are emergencies like a burst pipe or a
                major leak. It should also load quickly on mobile, display licensing and
                insurance information clearly, and include service pages, a service-area list
                and reviews so homeowners can trust the company before they call.
              </p>
            </div>
          </div>
        </section>

        {/* Why Plumbing Websites Need a Different Approach */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Built for urgency</span>
              <h2>Why Plumbing Websites Need a Different Approach</h2>
              <p className="section-sub">
                Pixeloria builds websites for companies that provide plumbing services —
                Pixeloria itself does not perform plumbing work. Because so many plumbing
                searches happen in the middle of a crisis, the priorities for a plumbing
                website are different from a planned-project trade.
              </p>
            </div>
            <div className="benefits-grid">
              {urgencyReasons.map((f, i) => (
                <div key={f.title} className="benefit-card">
                  <span className="benefit-num">0{i + 1}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plumbing Searches Your Website Should Speak To */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Local search</span>
              <h2>Plumbing Searches Your Website Should Speak To</h2>
              <p className="section-sub">
                Homeowners searching for plumbing help are usually looking for one of these
                situations. Your website should speak directly to each one.
              </p>
            </div>
            <ul className="artisan-types-grid">
              <li className="artisan-type-tag">Burst pipe repair</li>
              <li className="artisan-type-tag">No hot water</li>
              <li className="artisan-type-tag">Emergency plumber</li>
              <li className="artisan-type-tag">Leak detection</li>
              <li className="artisan-type-tag">Drain cleaning</li>
              <li className="artisan-type-tag">Water heater repair</li>
              <li className="artisan-type-tag">Repiping</li>
              <li className="artisan-type-tag">Sewer line repair</li>
              <li className="artisan-type-tag">Fixture installation</li>
              <li className="artisan-type-tag">Residential plumbing</li>
              <li className="artisan-type-tag">Commercial plumbing</li>
            </ul>
          </div>
        </section>

        {/* What Every Plumbing Website Should Include */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">The essentials</span>
              <h2>What Every Plumbing Website Should Include</h2>
              <p className="section-sub">
                These are the elements that matter most when a visitor could be dealing with
                an active leak right now.
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
              <h2>Plumbing Website Pricing</h2>
              <p className="section-sub">
                Simple, one-time pricing to launch your plumbing website, plus an optional
                monthly plan to keep it fast, maintained and locally visible.
              </p>
            </div>
            <div className="pricing-cards pricing-cards--three">
              <div className="pricing-card">
                <p className="pricing-label">Starter Website</p>
                <p className="pricing-price">$499 <span>one-time</span></p>
                <p className="pricing-sublabel">A focused one-page plumbing website</p>
                <ul>
                  <li>One-page website</li>
                  <li>Mobile-first responsive design</li>
                  <li>Prominent mobile call button</li>
                  <li>Fast-loading pages</li>
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
                  <li>Licensing and insurance display</li>
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
              <h2>Request a Free Plumbing Website Audit</h2>
              <p>
                Send us your current website, or tell us about your plumbing business if you
                don&apos;t have one yet. We&apos;ll give you honest, no-obligation feedback on
                what would help you generate more calls.
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

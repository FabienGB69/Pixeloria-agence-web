import type { Metadata } from 'next';
import { hreflangSelf } from '@/lib/hreflang';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Electrician Website Design That Generates Leads | Pixeloria',
  description:
    'Electrician websites structured around both emergency repairs and planned projects like panel upgrades and EV charger installation, with clear licensing display. Website design for US electrical companies.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/electrician-websites',
    languages: hreflangSelf('https://pixeloria.fr/en/electrician-websites'),
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/electrician-websites',
    title: 'Electrician Website Design That Generates Leads | Pixeloria',
    description:
      'Electrician websites structured around both emergency repairs and planned projects like panel upgrades and EV charger installation, with clear licensing display. Website design for US electrical companies.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

const emergencyFeatures = [
  {
    title: 'Power outage repair',
    desc: 'A clear path for customers dealing with a sudden power outage or a circuit that will not reset.',
  },
  {
    title: 'Exposed wiring and safety hazards',
    desc: 'A visible way to reach you fast when a customer spots exposed wiring, sparking or another safety hazard.',
  },
  {
    title: 'Prominent mobile call button',
    desc: 'A tap-to-call button that stays visible, since emergency electrical searches need an immediate way to reach you.',
  },
];

const plannedFeatures = [
  {
    title: 'Panel upgrades',
    desc: 'A dedicated page explaining electrical panel upgrades for homes with outdated or undersized panels.',
  },
  {
    title: 'EV charger installation',
    desc: 'A page for EV charger installation — a genuinely growing niche and a search term worth naming directly on its own page.',
  },
  {
    title: 'Whole-home rewiring and smart-home installs',
    desc: 'Separate coverage of whole-home rewiring and smart-home installations, since these are longer, planned projects rather than same-day calls.',
  },
];

const includeItems = [
  {
    label: 'Clear emergency vs. planned split',
    desc: 'Emergency repair services and planned-project services presented as distinct paths, since they are different customer journeys with different urgency levels.',
  },
  {
    label: 'Licensing and certification display',
    desc: 'License number and certifications shown clearly — this matters more for electrical work than most trades, given the safety stakes involved.',
  },
  {
    label: 'Service pages',
    desc: 'Dedicated pages for panel upgrades, EV charger installation, rewiring, lighting installation and other core services.',
  },
  {
    label: 'Service area page',
    desc: 'A clear list of the towns and counties you cover, so customers know you serve their area.',
  },
  {
    label: 'Mobile call button',
    desc: 'A tap-to-call button, always visible, for customers browsing on a phone.',
  },
  {
    label: 'Customer reviews',
    desc: 'Reviews displayed where prospects can see them before they decide to reach out.',
  },
];

const faqs = [
  {
    q: 'How much does an electrician website cost?',
    a: 'Pixeloria electrician websites start at $499 for a one-page website. Multi-page websites with individual service pages start at $899.',
  },
  {
    q: 'How long does it take to build an electrician website?',
    a: 'A one-page electrician website can generally be delivered within five business days after we receive all required content. Larger multi-page websites may take one to three weeks.',
  },
  {
    q: 'Can you redesign my existing electrician website?',
    a: 'Yes. Pixeloria can redesign outdated electrician websites, including separating emergency and planned-project services more clearly and improving local search structure.',
  },
  {
    q: 'Can my website have a page for EV charger installation?',
    a: 'Yes. EV charger installation is a growing search term, and we can build it a dedicated page separate from your general electrical service pages.',
  },
  {
    q: 'Do you guarantee first-page Google rankings?',
    a: 'No legitimate agency can guarantee a specific Google ranking. We focus on building a technically strong, well-structured website that supports your visibility over time.',
  },
];

export default function ElectricianWebsitesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Electrician website design',
    provider: {
      '@type': 'Organization',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
    },
    description:
      'Website design services for electrical companies, structured around both emergency repairs and planned electrical projects.',
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
                <span>Electrician Websites</span>
              </nav>
              <span className="eyebrow">Electrical companies</span>
              <h1>Electrician Website Design That Generates Leads</h1>
              <p className="page-hero-sub">
                Pixeloria builds websites for electrical companies across the United States.
                Electrical work covers two very different customer journeys — urgent repairs
                and planned projects like panel upgrades or EV charger installation — so every
                site is structured to present both clearly, alongside visible licensing
                information.
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
                An electrician website should clearly separate emergency electrical repairs
                (power outages, exposed wiring, safety hazards) from planned projects (panel
                upgrades, EV charger installation, rewiring, smart-home installs), since these
                are different customer journeys with different urgency levels. It should also
                display licensing and certification information clearly, given the safety
                stakes of electrical work, plus a mobile call button, service pages and reviews.
              </p>
            </div>
          </div>
        </section>

        {/* Two Kinds of Electrical Searches */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Two customer journeys</span>
              <h2>Two Kinds of Electrical Searches: Emergency and Planned</h2>
              <p className="section-sub">
                Pixeloria builds websites for companies that provide electrical services —
                Pixeloria itself does not perform electrical work. Emergency and planned-project
                customers are looking for very different things, and your website should present
                each one clearly rather than blending them together.
              </p>
            </div>
            <div className="benefits-grid">
              {emergencyFeatures.map((f, i) => (
                <div key={f.title} className="benefit-card">
                  <span className="benefit-num">0{i + 1}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="benefits-grid" style={{ marginTop: '1.5rem' }}>
              {plannedFeatures.map((f, i) => (
                <div key={f.title} className="benefit-card">
                  <span className="benefit-num">0{i + 1}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Electrical Searches Your Website Should Speak To */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Local search</span>
              <h2>Electrical Searches Your Website Should Speak To</h2>
              <p className="section-sub">
                Customers searching for electrical help are usually looking for one of these
                situations. Your website should speak directly to each one.
              </p>
            </div>
            <ul className="artisan-types-grid">
              <li className="artisan-type-tag">Emergency electrician</li>
              <li className="artisan-type-tag">Power outage repair</li>
              <li className="artisan-type-tag">Exposed wiring repair</li>
              <li className="artisan-type-tag">Panel upgrades</li>
              <li className="artisan-type-tag">EV charger installation</li>
              <li className="artisan-type-tag">Whole-home rewiring</li>
              <li className="artisan-type-tag">Smart-home installation</li>
              <li className="artisan-type-tag">Lighting installation</li>
              <li className="artisan-type-tag">Residential electrical</li>
              <li className="artisan-type-tag">Commercial electrical</li>
            </ul>
          </div>
        </section>

        {/* What Every Electrician Website Should Include */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">The essentials</span>
              <h2>What Every Electrician Website Should Include</h2>
              <p className="section-sub">
                These are the elements customers look for before they decide to call an
                electrical company.
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
              <h2>Electrician Website Pricing</h2>
              <p className="section-sub">
                Simple, one-time pricing to launch your electrician website, plus an optional
                monthly plan to keep it maintained and locally visible.
              </p>
            </div>
            <div className="pricing-cards pricing-cards--three">
              <div className="pricing-card">
                <p className="pricing-label">Starter Website</p>
                <p className="pricing-price">$499 <span>one-time</span></p>
                <p className="pricing-sublabel">A focused one-page electrician website</p>
                <ul>
                  <li>One-page website</li>
                  <li>Mobile-first responsive design</li>
                  <li>Mobile call button</li>
                  <li>Licensing display</li>
                </ul>
                <Link href="/en/free-website-audit" className="btn btn-secondary">Get Started →</Link>
              </div>
              <div className="pricing-card pricing-card--featured">
                <span className="pricing-badge">Most Popular</span>
                <p className="pricing-label">Growth Website</p>
                <p className="pricing-price">$899 <span>one-time</span></p>
                <p className="pricing-sublabel">A multi-page website with individual service pages</p>
                <ul>
                  <li>Separate emergency and planned-project pages</li>
                  <li>Service area page</li>
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
              <h2>Request a Free Electrician Website Audit</h2>
              <p>
                Send us your current website, or tell us about your electrical business if you
                don&apos;t have one yet. We&apos;ll give you honest, no-obligation feedback on
                what would help you generate more leads.
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

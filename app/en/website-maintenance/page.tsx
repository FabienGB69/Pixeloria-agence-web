import type { Metadata } from 'next';
import Link from 'next/link';
import { hreflangLanguages } from '@/lib/hreflang';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Website Maintenance for Tradespeople & Small Businesses | Pixeloria',
  description:
    'Pixeloria handles your website maintenance: hosting, security updates, backups and content updates. Website Care & Local Visibility from $79/month.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/website-maintenance',
    languages: hreflangLanguages('/en/website-maintenance'),
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/website-maintenance',
    title: 'Website Maintenance for Tradespeople & Small Businesses | Pixeloria',
    description:
      'Website maintenance: hosting, security updates, backups and monthly reporting. Website Care & Local Visibility from $79/month.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

const signals = [
  'An unmaintained site becomes slow and vulnerable',
  'Outdated plugins and CMS are an open door for hackers',
  'Stale content hurts your organic search ranking (SEO)',
  'A site down on a Friday night with no support means lost revenue',
  'Your domain and hosting can expire without warning',
  'Contact forms fail silently',
];

const benefits = [
  {
    title: 'Regular updates',
    desc: 'CMS, plugins, dependencies — everything is kept up to date to guarantee performance and compatibility.',
  },
  {
    title: 'Security & backups',
    desc: 'Automatic backups, active SSL certificate, continuous monitoring. Your site is protected.',
  },
  {
    title: 'Hosting & domain included',
    desc: 'No surprise invoices. Hosting and the domain name are managed and included by Pixeloria.',
  },
  {
    title: 'Content & service-area updates',
    desc: 'Text edits, service-area updates and small changes are included in your plan.',
  },
];

export default function WebsiteMaintenancePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website maintenance',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
      telephone: '+33786125313',
      email: 'contact@pixeloria.fr',
    },
    description: 'Website maintenance for tradespeople and small businesses: hosting, security updates, backups and monthly reporting.',
    areaServed: { '@type': 'Country', name: 'United States' },
    offers: [
      {
        '@type': 'Offer',
        name: 'Website Care & Local Visibility',
        price: '79',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitCode: 'MON' },
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <HeaderEn />
      <main>

        {/* Hero */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/en">Home</Link>
                <span aria-hidden="true"> › </span>
                <span>Website maintenance</span>
              </nav>
              <span className="eyebrow">Technical peace of mind</span>
              <h1>Website maintenance for tradespeople and small businesses</h1>
              <p className="page-hero-sub">
                Your site always up to date, secure and available — without you having to
                think about it. Pixeloria takes care of your website&apos;s full maintenance
                so you can focus on your business.
              </p>
              <div className="page-hero-actions">
                <Link href="/en#contact" className="btn btn-primary">
                  Request a free audit
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/en/offers" className="btn btn-secondary">See our offers</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi la maintenance est indispensable */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Why act now?</span>
              <h2>Maintenance isn&apos;t optional</h2>
              <p className="section-sub">
                A site left unattended quickly becomes a problem. Here are the concrete
                risks you face without regular maintenance.
              </p>
            </div>
            <ul className="signals-grid">
              {signals.map((s) => (
                <li key={s} className="signal-item">
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 3v8M10 14v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.6"/>
                  </svg>
                  {s}
                </li>
              ))}
            </ul>
            <p style={{ textAlign: 'center', marginTop: '2rem' }}>
              <Link href="/en#contact" className="btn btn-primary">
                Hand off my site&apos;s maintenance
              </Link>
            </p>
          </div>
        </section>

        {/* Ce que comprend la maintenance Pixeloria */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Our commitment</span>
              <h2>What Pixeloria maintenance includes</h2>
              <p className="section-sub">
                A complete service so your site stays fast, secure and operational,
                day after day.
              </p>
            </div>
            <div className="benefits-grid">
              {benefits.map((b, i) => (
                <div key={i} className="benefit-card">
                  <span className="benefit-num">0{i + 1}</span>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ce qui est inclus */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">What&apos;s included</span>
              <h2>Everything your site needs, included</h2>
              <p className="section-sub">
                An all-in-one plan so you never have to worry about the technical side again.
              </p>
            </div>
            <div className="includes-grid">
              {[
                { icon: '🔒', label: 'Security & updates', desc: 'Plugins, CMS and SSL certificate always up to date and monitored.' },
                { icon: '☁️', label: 'Hosting included', desc: 'High-performance hosting managed by Pixeloria, at no extra cost.' },
                { icon: '🌐', label: 'Domain included', desc: 'Your domain name is renewed automatically, with no disruption.' },
                { icon: '💾', label: 'Regular backups', desc: 'Your data is backed up regularly for a quick restore if needed.' },
                { icon: '📝', label: 'Content edits included', desc: 'Text, image and service-area updates included, so your site stays accurate.' },
                { icon: '📊', label: 'Monthly performance summary', desc: 'A clear monthly summary: visits, actions taken, site status.' },
              ].map((item) => (
                <div key={item.label} className="include-item">
                  <span className="include-icon" aria-hidden="true">{item.icon}</span>
                  <strong>{item.label}</strong>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tarifs */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Pricing</span>
              <h2>A clear option to maintain your visibility</h2>
              <p className="section-sub">
                An all-in-one offer, no surprises, for total peace of mind.
              </p>
            </div>
            <div className="pricing-cards">
              <div className="pricing-card pricing-card--featured">
                <span className="pricing-badge">Monthly option</span>
                <p className="pricing-label">Website Care &amp; Local Visibility</p>
                <p className="pricing-price">$79 <span>/month</span></p>
                <p className="pricing-sublabel">Hosting, maintenance and local SEO included</p>
                <ul>
                  <li>Hosting management included</li>
                  <li>Security updates &amp; backups</li>
                  <li>Content &amp; service-area updates</li>
                  <li>Basic local SEO improvements</li>
                  <li>Monthly performance summary</li>
                  <li>Cancel anytime</li>
                </ul>
                <Link href="/en#contact" className="btn btn-primary">Subscribe to Website Care &amp; Local Visibility →</Link>
              </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <Link href="/en/offers" style={{ color: 'var(--primary)', textDecoration: 'underline', fontSize: '0.9rem' }}>
                Compare all Pixeloria plans →
              </Link>
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="section section-tinted">
          <div className="container">
            <div className="page-cta-block">
              <h2>Your site, in good hands</h2>
              <p>
                Hand us your site&apos;s maintenance and forget the technical worries.
                Updates, security, hosting — we handle everything, so you can
                focus on your business.
              </p>
              <Link href="/en#contact" className="btn btn-primary btn-lg">
                Request a free audit
                <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <p className="page-cta-note">
                <a href="tel:+33786125313">+33 7 86 12 53 13</a>
                {' · '}
                <a href="mailto:contact@pixeloria.fr">contact@pixeloria.fr</a>
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer locale="en" />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Website Creation for Tradespeople & Small Businesses | Pixeloria',
  description:
    'Pixeloria builds professional websites for tradespeople and small businesses. Local visibility, lead generation, bespoke design. Artisan Site at €199 inc. VAT, delivered in 72h.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/website-creation-small-business',
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/website-creation-small-business',
    title: 'Website Creation for Tradespeople & Small Businesses | Pixeloria',
    description:
      'A professional website for tradespeople and small businesses. Responsive, local SEO, contact form. Artisan Site at €199 inc. VAT, delivered in 72h.',
    locale: 'en_GB',
    siteName: 'Pixeloria',
  },
};

const sectors = [
  'Construction & building works',
  'Retail & shops',
  'Restaurants & catering',
  'Business services',
  'Health & wellness',
  'Real estate',
  'Training & coaching',
  'Professional services',
  'Crafts & makers',
  'Other local small businesses',
];

const benefits = [
  {
    title: 'Instant credibility',
    desc: 'A professional website reassures your prospects from the first click. Without a site, you lose customers before you even get the chance to convince them.',
  },
  {
    title: 'Local visibility on Google',
    desc: 'Get found by customers in your service area. A locally-optimised site puts you ahead of competitors with no web presence.',
  },
  {
    title: 'Lead generation',
    desc: 'Form, phone, WhatsApp — every visitor can reach you easily, from any device, at any time.',
  },
  {
    title: 'An image that matches your business',
    desc: 'A bespoke design that reflects your positioning, your values and your industry. Not a generic template, but a site that looks like you.',
  },
];

export default function WebsiteCreationSmallBusinessPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website creation for tradespeople and small businesses',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
      telephone: '+33786125313',
      email: 'contact@pixeloria.fr',
    },
    description: 'Professional website creation for tradespeople and small businesses across all industries.',
    areaServed: 'France',
    offers: [
      { '@type': 'Offer', name: 'Artisan Site', price: '199', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: 'Visibility Option', price: '49', priceCurrency: 'EUR', priceSpecification: { '@type': 'UnitPriceSpecification', referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitCode: 'MON' } } },
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
                <span>Website creation for small businesses</span>
              </nav>
              <span className="eyebrow">Tradespeople & small businesses</span>
              <h1>Website creation for tradespeople and small businesses</h1>
              <p className="page-hero-sub">
                A professional website, readable on mobile, optimised for your
                local visibility and designed to generate qualified enquiries. Artisan Site
                at €199 inc. VAT, delivered in 72h.
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

        {/* Pour quels secteurs ? */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Your industry</span>
              <h2>A website tailored to your industry</h2>
              <p className="section-sub">
                Pixeloria supports tradespeople and small businesses across every industry
                who want a professional, effective online presence.
              </p>
            </div>
            <ul className="artisan-types-grid">
              {sectors.map((sector) => (
                <li key={sector} className="artisan-type-tag">{sector}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Bénéfices */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Why a website?</span>
              <h2>What a good website brings to your business</h2>
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
              <h2>A showcase website designed for your business</h2>
              <p className="section-sub">
                Every website Pixeloria builds includes the essentials to
                present your business and make it easy for customers to reach you.
              </p>
            </div>
            <div className="includes-grid">
              {[
                { icon: '🖥️', label: 'Bespoke design', desc: 'A unique design that reflects your visual identity and industry.' },
                { icon: '📱', label: 'Mobile-first responsive', desc: 'Clear and pleasant on mobile, tablet and desktop.' },
                { icon: '📞', label: 'Call & WhatsApp button', desc: 'One tap to reach you from any mobile.' },
                { icon: '📋', label: 'Contact form', desc: 'Enquiries land straight in your inbox.' },
                { icon: '🔍', label: 'Basic local SEO', desc: 'Your site is optimised to be found in your geographic area.' },
                { icon: '🔒', label: 'Security & hosting', desc: 'SSL certificate, reliable, high-performance hosting included.' },
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
              <h2>A simple offer, no surprises</h2>
              <p className="section-sub">
                A website delivered in 72h, one-off payment. An optional monthly plan to
                keep your visibility and your site up to date.
              </p>
            </div>
            <div className="pricing-cards">
              <div className="pricing-card pricing-card--featured">
                <span className="pricing-badge">Main offer</span>
                <p className="pricing-label">Artisan Site</p>
                <p className="pricing-price">€199 <span>inc. VAT</span></p>
                <p className="pricing-sublabel">One-off payment — delivered in 72h</p>
                <ul>
                  <li>Up to 3 pages</li>
                  <li>Bespoke responsive design</li>
                  <li>Contact form</li>
                  <li>Call and WhatsApp button</li>
                  <li>Go-live included</li>
                  <li>Basic technical optimisation</li>
                </ul>
                <Link href="/en#contact" className="btn btn-primary">Choose Artisan Site →</Link>
              </div>
              <div className="pricing-card">
                <p className="pricing-label">Visibility Option</p>
                <p className="pricing-price">€49 <span>inc. VAT / month</span></p>
                <p className="pricing-sublabel">Maintenance, updates and SEO follow-up</p>
                <ul>
                  <li>Maintenance and updates included</li>
                  <li>Hosting + domain included</li>
                  <li>Basic local SEO included</li>
                  <li>Advanced contact form</li>
                  <li>Call and WhatsApp button</li>
                  <li>WhatsApp support within 24h</li>
                </ul>
                <Link href="/en#contact" className="btn btn-secondary">Add Visibility Option →</Link>
              </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <Link href="/en/offers" style={{ color: 'var(--primary)', textDecoration: 'underline', fontSize: '0.9rem' }}>
                See our full offer details →
              </Link>
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="section section-tinted">
          <div className="container">
            <div className="page-cta-block">
              <h2>Your tradesperson site in 72h</h2>
              <p>
                Tell us about your business and your goals. We&apos;ll suggest a
                solution suited to your industry and your budget, with no commitment.
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

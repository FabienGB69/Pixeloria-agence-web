import type { Metadata } from 'next';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Website Creation for Tradespeople | Pixeloria',
  description:
    'Pixeloria builds professional websites for builders, plumbers, electricians, painters, joiners and local tradespeople. Responsive design, basic local SEO. Artisan Site at €199 inc. VAT, delivered in 72h.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/website-creation-tradespeople',
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/website-creation-tradespeople',
    title: 'Website Creation for Tradespeople | Pixeloria',
    description:
      'A professional website for tradespeople. Responsive, local SEO, contact form. Artisan Site at €199 inc. VAT, delivered in 72h.',
    locale: 'en_GB',
    siteName: 'Pixeloria',
  },
};

const tradeTypes = [
  'Plumber', 'Electrician', 'Builder', 'Painter & decorator', 'Joiner',
  'Carpenter', 'Tiler', 'Plasterer', 'Roofer', 'Locksmith',
  'HVAC engineer', 'Heating engineer',
];

const benefits = [
  {
    title: 'Get found by local customers',
    desc: 'A customer looking for a plumber or electrician in their town usually starts on Google. A locally-optimised site gives you real visibility.',
  },
  {
    title: 'Present your services clearly',
    desc: 'Your service area, specialities, indicative pricing, certifications — everything that reassures a prospect before they call you.',
  },
  {
    title: 'Receive enquiries directly',
    desc: 'Form, direct call button, WhatsApp button — every visitor has a simple way to reach you, from any device.',
  },
  {
    title: 'Showcase your work',
    desc: 'A photo gallery of your past projects is proof of your craft. Far more convincing than plain text.',
  },
];

export default function WebsiteCreationTradespeoplePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website creation for tradespeople',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
      telephone: '+33786125313',
      email: 'contact@pixeloria.fr',
    },
    description: 'Professional website creation for tradespeople and local independent professionals.',
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
                <span>Website creation for tradespeople</span>
              </nav>
              <span className="eyebrow">Tradespeople & independents</span>
              <h1>Website creation for tradespeople</h1>
              <p className="page-hero-sub">
                A professional website, readable on mobile and optimised to be found by your
                local customers. Contact form, call button, project gallery.
                Artisan Site at €199 inc. VAT, delivered in 72h. Visibility Option at €49/month.
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

        {/* Pour quels artisans ? */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Your trade</span>
              <h2>A website tailored to your trade</h2>
              <p className="section-sub">
                Pixeloria supports tradespeople across every trade who want a
                professional online presence without a big investment.
              </p>
            </div>
            <ul className="artisan-types-grid">
              {tradeTypes.map((type) => (
                <li key={type} className="artisan-type-tag">{type}</li>
              ))}
              <li className="artisan-type-tag artisan-type-tag--more">And many more…</li>
            </ul>
          </div>
        </section>

        {/* Pourquoi un site ? */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Why a website?</span>
              <h2>What a good website brings to a tradesperson</h2>
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

        {/* Ce qu'inclut le site */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">What&apos;s included</span>
              <h2>A showcase website designed for tradespeople</h2>
              <p className="section-sub">
                Every website Pixeloria builds includes the essentials to
                present your business and make it easy for customers to reach you.
              </p>
            </div>
            <div className="includes-grid">
              {[
                { icon: '📱', label: 'Responsive design', desc: 'Readable on mobile, tablet and desktop.' },
                { icon: '📞', label: 'Direct call button', desc: 'One tap to call you from a mobile.' },
                { icon: '💬', label: 'Contact form', desc: 'Enquiries land straight in your inbox.' },
                { icon: '📸', label: 'Project gallery', desc: 'Showcase your past projects with photos.' },
                { icon: '⭐', label: 'Google reviews built in', desc: 'Display your client reviews to reassure prospects.' },
                { icon: '📍', label: 'Basic local SEO', desc: 'Your site is optimised for your service area.' },
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

        {/* Offres */}
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
                  <li>Direct call button</li>
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
                  <li>Project gallery</li>
                  <li>Google reviews built in</li>
                  <li>Basic local SEO included</li>
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
              <h2>Ready to build your website?</h2>
              <p>
                Tell us a little about your trade and your service area.
                We&apos;ll reply quickly with an initial recommendation.
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

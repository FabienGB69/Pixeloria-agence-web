import type { Metadata } from 'next';
import { OFFERS_US } from '@/lib/pricing-us';
import { PROVIDER_US } from '@/lib/organization';
import Link from 'next/link';
import { hreflangLanguages } from '@/lib/hreflang';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Website Creation for Contractors & Small Businesses | Pixeloria',
  description:
    `Pixeloria builds professional websites for contractors and local service businesses. Local visibility, lead generation, custom design. Starter Website at ${OFFERS_US.starter.price}, live 5 business days after we receive your content.`,
  alternates: {
    canonical: 'https://pixeloria.fr/en/website-creation-small-business',
    languages: hreflangLanguages('/en/website-creation-small-business'),
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/website-creation-small-business',
    title: 'Website Creation for Contractors & Small Businesses | Pixeloria',
    description:
      `A professional website for contractors and small businesses. Responsive, local SEO, estimate request form. Starter Website at ${OFFERS_US.starter.price}, live 5 business days after we receive your content.`,
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
    desc: 'Get found by customers in your service area. A locally-optimized site puts you ahead of competitors with no web presence.',
  },
  {
    title: 'Lead generation',
    desc: 'Estimate request form and phone — every visitor can reach you easily, from any device, at any time.',
  },
  {
    title: 'An image that matches your business',
    desc: 'A custom design that reflects your positioning, your values and your industry. Not a generic template, but a site that looks like you.',
  },
];

export default function WebsiteCreationSmallBusinessPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website creation for contractors and small businesses',
    provider: PROVIDER_US,
    description: 'Professional website creation for contractors and small businesses across all industries.',
    areaServed: { '@type': 'Country', name: 'United States' },
    offers: [
      { '@type': 'Offer', name: OFFERS_US.starter.title, price: String(OFFERS_US.starter.amount), priceCurrency: OFFERS_US.starter.currency },
      { '@type': 'Offer', name: OFFERS_US.care.title, price: String(OFFERS_US.care.amount), priceCurrency: OFFERS_US.care.currency, priceSpecification: { '@type': 'UnitPriceSpecification', referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitCode: 'MON' } } },
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
              <span className="eyebrow">Contractors & small businesses</span>
              <h1>Website creation for contractors and small businesses</h1>
              <p className="page-hero-sub">
                A professional website, built mobile-first, optimized for your
                local visibility and designed to generate qualified estimate requests. Starter Website
                at {OFFERS_US.starter.price}, live 5 business days after we receive your content.
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
                Pixeloria supports contractors and small businesses across every industry
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
              <h2>What&apos;s included in your website</h2>
              <p className="section-sub">
                Every website Pixeloria builds includes the essentials to
                present your business and make it easy for customers to reach you.
              </p>
            </div>
            <div className="includes-grid">
              {[
                { icon: '🖥️', label: 'Custom design', desc: 'A unique design that reflects your visual identity and industry.' },
                { icon: '📱', label: 'Mobile-first responsive', desc: 'Clear and pleasant on mobile, tablet and desktop.' },
                { icon: '📞', label: 'Click-to-call button', desc: 'One tap to reach you from any mobile.' },
                { icon: '📋', label: 'Estimate request form', desc: 'Estimate requests land straight in your inbox.' },
                { icon: '🔍', label: 'Basic on-page SEO', desc: 'Your site is optimized to be found in your geographic area.' },
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
                The Starter Website is live 5 business days after we receive your content, one-time payment. Add Website Care &amp; Local Visibility to keep your site working every month.
              </p>
            </div>
            <div className="pricing-cards">
              <div className="pricing-card pricing-card--featured">
                <span className="pricing-badge">Main offer</span>
                <p className="pricing-label">Starter Website</p>
                <p className="pricing-price">{OFFERS_US.starter.price} <span>{OFFERS_US.starter.suffix}</span></p>
                <p className="pricing-sublabel">One-time payment — live 5 business days after we receive your content</p>
                <ul>
                  <li>One-page contractor website</li>
                  <li>Up to 6 sections</li>
                  <li>Mobile-first design</li>
                  <li>Click-to-call button</li>
                  <li>Estimate request form</li>
                  <li>Basic on-page SEO</li>
                </ul>
                <Link href="/en#contact" className="btn btn-primary">Get Your Website →</Link>
              </div>
              <div className="pricing-card">
                <p className="pricing-label">Website Care &amp; Local Visibility</p>
                <p className="pricing-price">{OFFERS_US.care.price} <span>{OFFERS_US.care.suffix}</span></p>
                <p className="pricing-sublabel">Add-on to your Starter Website</p>
                <ul>
                  <li>Hosting management</li>
                  <li>Technical maintenance</li>
                  <li>Security updates & backups</li>
                  <li>Basic local SEO improvements</li>
                  <li>Content edits</li>
                  <li>Priority email support</li>
                </ul>
                <Link href="/en#contact" className="btn btn-secondary">Add Website Care →</Link>
              </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              Want more pages, custom design and technical SEO?{' '}
              <Link href="/en/pricing" style={{ color: 'var(--primary)', textDecoration: 'underline', fontSize: '0.9rem' }}>
                See the Growth Website plan →
              </Link>
            </p>
          </div>
        </section>

        {/* CTA final */}
        <section className="section section-tinted">
          <div className="container">
            <div className="page-cta-block">
              <h2>Your contractor website, live fast</h2>
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
                <a href="tel:+33601777633">+33 6 01 77 76 33</a>
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

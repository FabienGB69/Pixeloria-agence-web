import type { Metadata } from 'next';
import { OFFERS_US } from '@/lib/pricing-us';
import Link from 'next/link';
import { hreflangLanguages } from '@/lib/hreflang';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Website Creation for Contractors & Tradespeople | Pixeloria',
  description:
    `Pixeloria builds professional websites for builders, plumbers, electricians, painters, joiners and other contractors. Responsive design, basic local SEO. Starter Website at ${OFFERS_US.starter.price}, live 5 business days after we receive your content.`,
  alternates: {
    canonical: 'https://pixeloria.fr/en/website-creation-tradespeople',
    languages: hreflangLanguages('/en/website-creation-tradespeople'),
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/website-creation-tradespeople',
    title: 'Website Creation for Contractors & Tradespeople | Pixeloria',
    description:
      `A professional website for contractors. Responsive, local SEO, estimate request form. Starter Website at ${OFFERS_US.starter.price}, live 5 business days after we receive your content.`,
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
    desc: 'A customer looking for a plumber or electrician in their town usually starts on Google. A locally-optimized site gives you real visibility.',
  },
  {
    title: 'Present your services clearly',
    desc: 'Your service area, specialties, indicative pricing, certifications — everything that reassures a prospect before they call you.',
  },
  {
    title: 'Receive inquiries directly',
    desc: 'Estimate request form and direct call button — every visitor has a simple way to reach you, from any device.',
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
    name: 'Website creation for contractors and tradespeople',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
      email: 'contact@pixeloria.fr',
    },
    description: 'Professional website creation for contractors and local independent tradespeople.',
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
                <span>Website creation for tradespeople</span>
              </nav>
              <span className="eyebrow">Contractors & tradespeople</span>
              <h1>Website creation for contractors</h1>
              <p className="page-hero-sub">
                A professional website, built mobile-first and optimized to be found by your
                local customers. Estimate request form, click-to-call button, project gallery.
                Starter Website at {OFFERS_US.starter.price}, live 5 business days after we receive your content. Add Website Care & Local Visibility at {OFFERS_US.care.price}/month.
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
                Pixeloria supports contractors across every trade who want a
                professional online presence built to generate calls and estimate requests.
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
              <h2>What a good website brings to a contractor</h2>
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
              <h2>What&apos;s included in your website</h2>
              <p className="section-sub">
                Every website Pixeloria builds includes the essentials to
                present your business and make it easy for customers to reach you.
              </p>
            </div>
            <div className="includes-grid">
              {[
                { icon: '📱', label: 'Responsive design', desc: 'Readable on mobile, tablet and desktop.' },
                { icon: '📞', label: 'Direct call button', desc: 'One tap to call you from a mobile.' },
                { icon: '💬', label: 'Estimate request form', desc: 'Estimate requests land straight in your inbox.' },
                { icon: '📸', label: 'Project gallery', desc: 'Showcase your past projects with photos.' },
                { icon: '⭐', label: 'Customer review section', desc: 'Display your customer reviews to reassure prospects.' },
                { icon: '📍', label: 'Basic on-page SEO', desc: 'Your site is optimized for your service area.' },
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
                  <li>Content edits</li>
                  <li>Basic local SEO improvements</li>
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

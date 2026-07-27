import type { Metadata } from 'next';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Website Redesign for Tradespeople & Small Businesses | Pixeloria',
  description:
    'Is your current website not generating enough leads? Pixeloria redesigns websites for contractors and small businesses: modern design, local SEO, mobile-responsive. Starter Website redesigns from $499, delivered within 5 business days.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/website-redesign',
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/website-redesign',
    title: 'Website Redesign for Tradespeople & Small Businesses | Pixeloria',
    description:
      'Professional website redesign for contractors and small businesses. Modern design, local SEO, responsive. Starter Website redesigns from $499, delivered within 5 business days.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

const signals = [
  'Your site isn\'t readable on mobile',
  'You\'re not getting enough leads',
  'The design looks dated or unprofessional',
  'Your site doesn\'t show up on Google in your area',
  'The information on it is out of date',
  'Your competitors have a more modern site than yours',
  'It loads slowly and puts visitors off',
  'You can\'t update it yourself',
];

const steps = [
  {
    num: '01',
    title: 'Audit of your current site',
    desc: 'We quickly review your existing site: content, structure, mobile experience, speed and local SEO.',
  },
  {
    num: '02',
    title: 'Defining your goals',
    desc: 'We discuss your services, target customers, service area and priorities.',
  },
  {
    num: '03',
    title: 'Design and development',
    desc: 'Your new site is built with a clear, responsive design focused on generating leads.',
  },
  {
    num: '04',
    title: 'Go-live and migration',
    desc: 'The new site replaces the old one without losing your domain name or your useful content.',
  },
];

export default function WebsiteRedesignPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website redesign',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
      telephone: '+33786125313',
      email: 'contact@pixeloria.fr',
    },
    description: 'Website redesign for local tradespeople and small businesses. Modern design, local SEO, mobile-responsive.',
    areaServed: { '@type': 'Country', name: 'United States' },
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
                <span>Website redesign</span>
              </nav>
              <span className="eyebrow">Modernise your online presence</span>
              <h1>Website redesign for tradespeople and small businesses</h1>
              <p className="page-hero-sub">
                Is your current site not generating enough leads, or giving an unprofessional
                impression? Pixeloria redesigns your site to make it modern, fast, mobile-friendly
                and optimized for local SEO. Website redesigns start at $499, delivered within
                5 business days.
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

        {/* Signaux d'alerte */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Is now the right time?</span>
              <h2>Signs it&apos;s time to redesign your website</h2>
              <p className="section-sub">
                If any of these sound familiar, a redesign could make a real
                difference to the leads you receive.
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
                Request a free audit of my site
              </Link>
            </p>
          </div>
        </section>

        {/* Ce qu'inclut la refonte */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">What&apos;s included</span>
              <h2>What a Pixeloria redesign includes</h2>
              <p className="section-sub">
                A redesign isn&apos;t just about changing the colors. It&apos;s a full reset
                of your site&apos;s structure, content and visibility.
              </p>
            </div>
            <div className="includes-grid">
              {[
                { icon: '🎨', label: 'Bespoke new design', desc: 'A modern design, consistent with your image and your services.' },
                { icon: '📱', label: 'Mobile-first responsive', desc: 'Mobile takes priority, where most of your customers find you.' },
                { icon: '⚡', label: 'Optimized speed', desc: 'A fast site, so you don\'t lose impatient visitors.' },
                { icon: '🔍', label: 'Basic local SEO', desc: 'Structure, tags and content designed for your service area.' },
                { icon: '🔗', label: 'Domain kept', desc: 'Your domain name is kept, with no loss of visibility.' },
                { icon: '📞', label: 'Optimized CTAs', desc: 'Estimate request form and click-to-call — making contact easy at every step.' },
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

        {/* Process refonte */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">How it works</span>
              <h2>How a redesign with Pixeloria unfolds</h2>
            </div>
            <div className="process-grid">
              {steps.map((step) => (
                <div key={step.num} className="process-card" data-step={step.num}>
                  <span className="process-num" aria-hidden="true">{step.num}</span>
                  <div className="process-icon">
                    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
                      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.2"/>
                      <path d="M16 24l6 6 10-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
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
              <h2>A simple offer to redesign your website</h2>
              <p className="section-sub">
                A redesign starting at $499, one-time payment. An optional monthly plan to
                keep your site updated and locally visible.
              </p>
            </div>
            <div className="pricing-cards">
              <div className="pricing-card pricing-card--featured">
                <span className="pricing-badge">Main offer</span>
                <p className="pricing-label">Starter Website</p>
                <p className="pricing-price">$499</p>
                <p className="pricing-sublabel">One-time payment — delivered within 5 business days</p>
                <ul>
                  <li>One-page site redesign, up to 6 sections</li>
                  <li>Mobile-first responsive design</li>
                  <li>Your domain kept</li>
                  <li>Estimate request form</li>
                  <li>Basic on-page SEO</li>
                </ul>
                <Link href="/en#contact" className="btn btn-primary">Choose Starter Website →</Link>
              </div>
              <div className="pricing-card">
                <p className="pricing-label">Website Care &amp; Local Visibility</p>
                <p className="pricing-price">$79 <span>/month</span></p>
                <p className="pricing-sublabel">Hosting, maintenance and local SEO included</p>
                <ul>
                  <li>Hosting management &amp; security updates</li>
                  <li>Backups and technical maintenance</li>
                  <li>Content &amp; service-area updates</li>
                  <li>Basic local SEO improvements</li>
                  <li>Monthly performance summary — cancel anytime</li>
                </ul>
                <Link href="/en#contact" className="btn btn-secondary">Add Website Care &amp; Local Visibility →</Link>
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
              <h2>Is your site not generating enough leads?</h2>
              <p>
                Send us your current site&apos;s address. We&apos;ll give you fast, free
                initial feedback on the priority areas to improve.
              </p>
              <Link href="/en#contact" className="btn btn-primary btn-lg">
                Request my free audit
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

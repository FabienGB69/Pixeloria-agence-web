import type { Metadata } from 'next';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Local SEO for Tradespeople & Small Businesses | Pixeloria',
  description:
    'Local Google search visibility for tradespeople and small businesses: Google Business Profile optimization, local keywords and visibility in your service area.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/local-seo',
  },
};

const jsonLdData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Local SEO for tradespeople and small businesses',
  provider: {
    '@type': 'Organization',
    name: 'Pixeloria',
    url: 'https://pixeloria.fr',
  },
  description:
    'Local Google search visibility for tradespeople and small businesses. Google Business Profile optimization, service-area pages and monthly ranking tracking.',
  areaServed: {
    '@type': 'Country',
    name: 'France',
  },
  serviceType: 'Local SEO',
};

export default function LocalSeoEnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <HeaderEn />
      <main>

        {/* 1. Hero */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/en">Home</Link>
                <span aria-hidden="true"> › </span>
                <span>Local SEO</span>
              </nav>
              <span className="eyebrow">Local search visibility</span>
              <h1>Local SEO for tradespeople and small businesses</h1>
              <p className="page-hero-sub">
                Get found on Google by your local customers — without waiting months.
              </p>
              <div className="page-hero-actions">
                <Link href="/en#contact" className="btn btn-primary btn-lg">
                  Request a free audit
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/en/offers" className="btn btn-secondary btn-lg">
                  See our offers
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Pour qui ? */}
        <section className="section section-tinted">
          <div className="container">
            <h2 className="section-heading">
              Local SEO matters for every local-facing business
            </h2>
            <p className="section-sub">
              Whether you&apos;re a tradesperson, a health professional or a shop owner, your customers search Google first before calling you.
            </p>
            <div className="artisan-types-grid">
              <span className="artisan-type-tag">Plumber</span>
              <span className="artisan-type-tag">Electrician</span>
              <span className="artisan-type-tag">Joiner</span>
              <span className="artisan-type-tag">Painter</span>
              <span className="artisan-type-tag">Restaurant</span>
              <span className="artisan-type-tag">Hairdresser</span>
              <span className="artisan-type-tag">Physiotherapist</span>
              <span className="artisan-type-tag">Accountant</span>
              <span className="artisan-type-tag">Estate agent</span>
              <span className="artisan-type-tag">Any local small business</span>
            </div>
          </div>
        </section>

        {/* 3. Ce que le SEO local améliore concrètement */}
        <section className="section">
          <div className="container">
            <h2 className="section-heading">What local SEO concretely improves</h2>
            <p className="section-sub">
              Targeted actions that increase your visibility exactly where your customers are looking for you.
            </p>
            <div className="benefits-grid">
              <div className="benefit-card">
                <span className="benefit-num">01</span>
                <h3>Show up in local searches</h3>
                <p>
                  When someone searches your trade + your town, your site needs to be visible. We optimize your presence for these high-potential searches.
                </p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">02</span>
                <h3>Optimized Google Business Profile</h3>
                <p>
                  A well-filled-out Google listing means more direct calls and directions. We set up and maintain your profile to maximise its visibility.
                </p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">03</span>
                <h3>Geo-targeted service pages</h3>
                <p>
                  Dedicated pages for your service areas improve your local ranking and let customers find you in each area you cover.
                </p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">04</span>
                <h3>Client reviews showcased</h3>
                <p>
                  Google reviews influence both your ranking and buying decisions. We put a strategy in place to collect and showcase your reviews.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Ce que comprend le SEO local Pixeloria */}
        <section className="section section-tinted">
          <div className="container">
            <h2 className="section-heading">What Pixeloria local SEO includes</h2>
            <p className="section-sub">
              Complete support, from the initial audit to monthly tracking of your rankings.
            </p>
            <div className="includes-grid">
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">🗺️</span>
                <span>Google Business Profile optimization</span>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">🔍</span>
                <span>Targeted local keywords</span>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">📄</span>
                <span>Service-area pages</span>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">⭐</span>
                <span>Client reviews strategy</span>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">🏷️</span>
                <span>Local schema.org markup</span>
              </div>
              <div className="include-item">
                <span className="include-icon" aria-hidden="true">📈</span>
                <span>Monthly ranking tracking</span>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Ce que le SEO local ne garantit pas */}
        <section className="section">
          <div className="container">
            <h2 className="section-heading">What we don&apos;t promise</h2>
            <div
              className="page-cta-block"
              style={{ textAlign: 'left', maxWidth: '720px', margin: '2rem 0 0' }}
            >
              <p>
                No serious agency can guarantee the #1 spot on Google. Local SEO
                improves your visibility, but results depend on your industry, local
                competition and how consistently the work is carried out.
              </p>
              <p style={{ marginTop: '1rem' }}>
                We give you an honest estimate from the very first audit.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Tarifs */}
        <section className="section section-tinted">
          <div className="container">
            <h2 className="section-heading">Local SEO included in our offers</h2>
            <p className="section-sub">
              Local SEO is included in our monthly Website Care &amp; Local Visibility plan, at no extra cost.
            </p>
            <div className="pricing-cards">
              <div className="pricing-card pricing-card--featured">
                <span className="pricing-badge">Main offer</span>
                <span className="pricing-label">Starter Website</span>
                <div className="pricing-price">$499</div>
                <p className="pricing-sublabel">One-time payment — delivered within 5 business days</p>
                <ul>
                  <li>One-page website, up to 6 sections</li>
                  <li>Mobile-first responsive design</li>
                  <li>Estimate request form</li>
                  <li>Launch included</li>
                </ul>
                <Link href="/en/offers" className="btn btn-primary">
                  See details
                </Link>
              </div>
              <div className="pricing-card">
                <span className="pricing-label">Website Care &amp; Local Visibility</span>
                <div className="pricing-price">$79 <span>/month</span></div>
                <p className="pricing-sublabel">Maintenance, updates and local SEO included</p>
                <ul>
                  <li>Google Business Profile optimization</li>
                  <li>Targeted local keywords</li>
                  <li>Monthly maintenance</li>
                  <li>Monthly performance summary</li>
                </ul>
                <Link href="/en/offers" className="btn btn-secondary">
                  See details
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7. CTA final */}
        <section className="section">
          <div className="container">
            <div className="page-cta-block">
              <h2>Get a free local SEO audit</h2>
              <p>
                We&apos;ll review your current visibility and tell you exactly what we can improve — no commitment.
              </p>
              <Link href="/en#contact" className="btn btn-primary btn-lg">
                Request my free audit
                <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <p className="page-cta-note">
                📞 +33 7 86 12 53 13 &nbsp;·&nbsp; ✉️ contact@pixeloria.fr
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer locale="en" />
    </>
  );
}

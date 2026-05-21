import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Websites for Real Estate Professionals | Pixeloria',
  description:
    'Stand out online, present your listings clearly and generate more property enquiries. Professional websites for estate agents, property consultants and real estate professionals.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/examples/real-estate',
    languages: {
      'fr-FR': 'https://pixeloria.fr/exemples/immobilier',
      'en-GB': 'https://pixeloria.fr/en/examples/real-estate',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/examples/real-estate',
    title: 'Websites for Real Estate Professionals | Pixeloria',
    description:
      'Stand out online, present your listings clearly and generate more property enquiries.',
    locale: 'en_GB',
    siteName: 'Pixeloria',
  },
};

const painPoints = [
  {
    title: 'Stuck on generic platform profiles',
    desc: 'Directory listings and portal profiles look the same as every other agent. You have no control over the design, content or impression you make.',
  },
  {
    title: 'No personal brand',
    desc: 'In real estate, people buy from people they trust. Without a personal website, there is no place to tell your story, share your track record or build that connection.',
  },
  {
    title: 'Poor local visibility',
    desc: 'Buyers and sellers search for local expertise. If your name does not appear when they search for a property professional in your area, you are missing opportunities.',
  },
  {
    title: 'Difficult to showcase sold properties and results',
    desc: 'Your results speak for themselves — but only if people can see them. A website gives you the space to present your track record in a compelling way.',
  },
];

const benefits = [
  {
    title: 'Build a personal brand that stands out',
    desc: 'A website designed around you — your expertise, your market knowledge, your personality — not a template shared with a thousand other agents.',
  },
  {
    title: 'Present listings cleanly',
    desc: 'Clear property pages with photos, key details and a simple enquiry form. Easy for buyers to browse, easy for sellers to see the quality of your work.',
  },
  {
    title: 'Rank for local property searches',
    desc: 'Local SEO targeting searches like "estate agent in [city]" or "buy a property in [area]" so new clients find you without a referral.',
  },
  {
    title: 'Showcase your track record',
    desc: 'Sold properties, client testimonials, time-on-market stats — concrete evidence of your expertise.',
  },
  {
    title: 'Generate valuation and viewing requests',
    desc: 'Simple, well-placed forms that capture seller and buyer enquiries without friction.',
  },
  {
    title: 'Fast, mobile-optimised experience',
    desc: 'Buyers browse listings on their phones. Your site needs to be fast, clear and easy to use on any screen.',
  },
];

const siteStructure = [
  'Homepage — who you are, where you operate, what makes you different',
  'Current listings — clean property cards with photos, price and key details',
  'Sold properties — proof of your track record',
  'Services page — sales, lettings, valuations, buyer representation…',
  'About page — your background, local expertise, professional accreditations',
  'Market insights — optional blog or area guides to build authority',
  'Testimonials — from buyers and sellers you have worked with',
  'Valuation request form — for sellers looking for a market assessment',
  'Contact page — phone, email, office location',
];

export default function RealEstatePage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/en">Home</Link>
                <span aria-hidden="true"> › </span>
                <Link href="/en#packages">Examples</Link>
                <span aria-hidden="true"> › </span>
                <span aria-current="page">Real estate</span>
              </nav>

              <span className="eyebrow" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                For real estate professionals
              </span>

              <h1>Websites for real estate agents and property professionals</h1>

              <p className="page-hero-sub">
                Stand out online, present your listings clearly and generate more property enquiries.
              </p>

              <div className="page-hero-actions">
                <Link href="/en#contact" className="btn btn-primary btn-lg">
                  Discuss my project
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/en#packages" className="btn btn-ghost btn-lg">
                  View packages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Common challenges</span>
              <h2>What real estate professionals struggle with online</h2>
              <p className="section-sub">
                Portals and directories are a start, but they will never build your personal brand or your pipeline.
              </p>
            </div>

            <div className="examples-grid">
              {painPoints.map((point, i) => (
                <div key={i} className="examples-card">
                  <h3>{point.title}</h3>
                  <p>{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pixeloria solution */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">How Pixeloria helps</span>
              <h2>Your own platform, your own brand</h2>
              <p className="section-sub">
                A professional website that gives you complete control over how you present yourself to buyers and sellers.
              </p>
            </div>

            <div className="examples-grid examples-grid--wide">
              {benefits.map((benefit, i) => (
                <div key={i} className="examples-feature">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Site structure */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Recommended structure</span>
              <h2>What your website needs</h2>
              <p className="section-sub">
                The pages that real estate professionals need to build credibility and generate consistent enquiries.
              </p>
            </div>

            <ul className="examples-list">
              {siteStructure.map((item, i) => (
                <li key={i} className="examples-list-item">
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="examples-check">
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Recommended package */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Recommended package</span>
              <h2>The right plan for a property professional</h2>
            </div>

            <div className="examples-offer-card">
              <div className="examples-offer-header">
                <div>
                  <p className="examples-offer-label">Care or Growth Website</p>
                  <p className="examples-offer-price">€89–159<span>/month</span></p>
                </div>
                <span className="examples-offer-badge">Recommended for you</span>
              </div>
              <p className="examples-offer-reason">
                For most independent agents, the Care plan (€89/mo) gives you a professional website
                with ongoing maintenance and the ability to update listings regularly. If you want to
                actively grow your presence in local search and attract more seller mandates and buyer
                enquiries organically, the Growth plan (€159/mo) adds continuous SEO work — which in
                real estate, where competition is fierce, makes a measurable difference over time.
              </p>
              <div className="examples-offer-actions">
                <Link href="/en#contact" className="btn btn-primary">
                  Find the right package →
                </Link>
                <Link href="/en#packages" className="btn btn-ghost btn-lg">
                  Compare all packages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Explore Pixeloria</span>
              <h2>More from Pixeloria</h2>
            </div>
            <nav className="examples-nav-links" aria-label="Related pages">
              <Link href="/en">English home</Link>
              <Link href="/en#packages">Packages &amp; pricing</Link>
              <Link href="/en#case-studies">Case studies</Link>
              <Link href="/en#contact">Contact us</Link>
            </nav>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section">
          <div className="container">
            <div className="page-cta-block">
              <h2>Want a website adapted to your business?</h2>
              <p>
                Pixeloria builds websites for real estate professionals in France and across Europe.
                More visibility, more enquiries, more mandates.
              </p>
              <div className="page-hero-actions">
                <Link href="/en#contact" className="btn btn-primary btn-lg">
                  Discuss my project
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/en#packages" className="btn btn-ghost btn-lg">
                  View packages
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

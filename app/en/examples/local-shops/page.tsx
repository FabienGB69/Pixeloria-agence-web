import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Websites for Local Shops and Retailers | Pixeloria',
  description:
    'Help local customers find you, understand what you sell and visit your shop. Professional websites for independent retailers, boutiques and local businesses.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/examples/local-shops',
    languages: {
      'fr-FR': 'https://pixeloria.fr/exemples/commerce-local',
      'en-GB': 'https://pixeloria.fr/en/examples/local-shops',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/examples/local-shops',
    title: 'Websites for Local Shops and Retailers | Pixeloria',
    description:
      'Help local customers find you, understand what you sell and visit your shop.',
    locale: 'en_GB',
    siteName: 'Pixeloria',
  },
};

const painPoints = [
  {
    title: 'Invisible on Google Maps and Search',
    desc: 'People search "bookshop near me" or "florist in [town]" before visiting. Without a website, you are missing the customers who are actively looking for what you sell.',
  },
  {
    title: 'No online presence beyond social media',
    desc: 'Instagram and Facebook are useful, but they are not searchable in the same way. A website makes you findable on Google and gives you a permanent home online that you control.',
  },
  {
    title: 'Hard to show opening hours, stock or services',
    desc: 'Customers want to know if you are open, what you carry and how to reach you — before they make the trip. If that information is buried in a social bio, they go elsewhere.',
  },
  {
    title: 'Competing with online retailers',
    desc: 'You offer something that Amazon cannot — local expertise, personal service and a real experience. Your website needs to communicate that clearly.',
  },
];

const benefits = [
  {
    title: 'Show up in local searches',
    desc: 'Google Business Profile integration and local SEO so customers nearby can find you when they search for what you sell.',
  },
  {
    title: 'Clear opening hours and location',
    desc: 'Your address, opening times, phone number and map — easy to find on any device, updated whenever you need.',
  },
  {
    title: 'Showcase your products and collections',
    desc: 'A product showcase or category overview that gives customers a taste of what you stock — without necessarily building a full e-commerce shop.',
  },
  {
    title: 'Promote events and offers',
    desc: 'Sales, seasonal promotions, in-store events — a simple way to keep customers informed and give them a reason to visit.',
  },
  {
    title: 'Build a mailing list',
    desc: 'A simple newsletter sign-up so you can reach loyal customers directly — no algorithm deciding who sees your posts.',
  },
  {
    title: 'Stand out from the high street',
    desc: 'A website with personality and clear values — sustainable sourcing, local produce, handmade goods — helps you attract the customers who will become regulars.',
  },
];

const siteStructure = [
  'Homepage — your shop, your story, your products at a glance',
  'Products or collections — overview of what you sell, organised by category',
  'About page — your background, your values, what makes your shop worth visiting',
  'Opening hours and location — clear, easy to find, always up to date',
  'Events and offers — seasonal promotions, workshops, in-store events',
  'Contact page — phone, email and map',
  'Newsletter sign-up — simple form to build your customer list',
];

export default function LocalShopsPage() {
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
                <span aria-current="page">Local shops</span>
              </nav>

              <span className="eyebrow" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                For local shops &amp; independent retailers
              </span>

              <h1>Websites for local shops and independent retailers</h1>

              <p className="page-hero-sub">
                Help local customers find you, understand what you sell and visit your shop.
              </p>

              <div className="page-hero-actions">
                <a href="/en#contact" className="btn btn-primary btn-lg">
                  Discuss my project
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
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
              <h2>What local retailers struggle with online</h2>
              <p className="section-sub">
                You are great at running your shop. Getting local customers to find it online before a competitor does is a different challenge.
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
              <h2>A website that brings customers through your door</h2>
              <p className="section-sub">
                Simple, fast and built to drive foot traffic and local awareness.
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
                The key pages for a local shop website — clean, fast and easy to keep up to date.
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
              <h2>The right plan for a local shop</h2>
            </div>

            <div className="examples-offer-card">
              <div className="examples-offer-header">
                <div>
                  <p className="examples-offer-label">Essential or Care Website</p>
                  <p className="examples-offer-price">€490 <span>one-off</span> or €89<span>/month</span></p>
                </div>
                <span className="examples-offer-badge">Recommended for you</span>
              </div>
              <p className="examples-offer-reason">
                If you need a clean, professional website quickly and just want it to work — the Essential
                plan (€490 one-off) is a straightforward starting point. You get a well-built site with basic
                local SEO. If you want ongoing updates — new products, seasonal promotions, changing opening hours
                — without having to think about it, the Care plan (€89/mo) includes hosting, maintenance and
                regular content updates on request. Most local shops find the Care plan more practical over time.
              </p>
              <div className="examples-offer-actions">
                <a href="/en#contact" className="btn btn-primary">
                  Find the right package →
                </a>
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
                Pixeloria builds websites for local shops and independent retailers in France and across Europe.
                More visibility, more footfall.
              </p>
              <div className="page-hero-actions">
                <a href="/en#contact" className="btn btn-primary btn-lg">
                  Discuss my project
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
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

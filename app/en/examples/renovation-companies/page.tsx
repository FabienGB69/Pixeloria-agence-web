import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Websites for Renovation Companies | Pixeloria',
  description:
    'A clear, modern website that showcases your renovation projects and turns visitors into customers. Local SEO included to outrank competitors in your area.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/examples/renovation-companies',
    languages: {
      'fr-FR': 'https://pixeloria.fr/exemples/renovation',
      'en-GB': 'https://pixeloria.fr/en/examples/renovation-companies',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/examples/renovation-companies',
    title: 'Websites for Renovation Companies | Pixeloria',
    description:
      'A clear, modern website that showcases your renovation projects and turns visitors into customers.',
    locale: 'en_GB',
    siteName: 'Pixeloria',
  },
};

const painPoints = [
  {
    title: 'Your portfolio is invisible online',
    desc: 'You have completed dozens of high-quality projects, but without a website, only past customers can see them. New prospects have nothing to go on.',
  },
  {
    title: 'Competitors outranking you on Google',
    desc: 'Renovation is a competitive local market. If your rivals have a polished, SEO-optimised site and you do not, they get the call first.',
  },
  {
    title: 'The trust gap without reviews',
    desc: 'Renovation is a high-ticket purchase. Customers need to feel confident before committing. A site with real testimonials and project photos builds that confidence.',
  },
  {
    title: 'Hard to stand out from the crowd',
    desc: 'Many renovation companies look the same. A well-designed website with a clear identity helps customers remember you and choose you.',
  },
];

const benefits = [
  {
    title: 'Showcase your best projects',
    desc: 'A dedicated portfolio section with before/after photos and project details — the strongest selling tool a renovation company can have.',
  },
  {
    title: 'Rank higher in local search',
    desc: 'Local SEO targeting the areas you serve, so when someone searches "renovation company in [city]" your site appears.',
  },
  {
    title: 'Turn visitors into enquiries',
    desc: 'Clear calls to action, a simple quote request form and your phone number on every page.',
  },
  {
    title: 'Collect and display reviews',
    desc: 'Testimonials from satisfied clients displayed prominently — the fastest way to close the trust gap with new prospects.',
  },
  {
    title: 'Present your service areas clearly',
    desc: 'Dedicated pages for each area you cover help you appear in more local searches and signal to customers that you work in their zone.',
  },
  {
    title: 'Mobile-first design',
    desc: 'Most renovation enquiries start on a smartphone. Your site will look and work perfectly on any device.',
  },
];

const siteStructure = [
  'Homepage — your positioning, key services and a strong visual impression',
  'Portfolio / Projects — gallery organised by type (kitchen, bathroom, full renovation…)',
  'Services page — what you offer, how you work and what customers can expect',
  'Service areas — dedicated pages for each city or region you cover',
  'About — your team, your story, your certifications',
  'Testimonials / Reviews — written reviews and star ratings',
  'Quote request form — simple form to capture qualified leads',
  'Contact page — phone, email, location and map',
];

export default function RenovationCompaniesPage() {
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
                <span aria-current="page">Renovation companies</span>
              </nav>

              <span className="eyebrow" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                For renovation &amp; building companies
              </span>

              <h1>Professional websites for renovation and building companies</h1>

              <p className="page-hero-sub">
                A clear, modern website that showcases your projects and turns visitors into customers.
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
              <h2>What renovation companies struggle with online</h2>
              <p className="section-sub">
                You deliver great work on site. Getting that work seen by the right people online is a different skill.
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
              <h2>A website that works as hard as your team</h2>
              <p className="section-sub">
                Built to generate enquiries, rank in local search and present your work professionally.
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
                The pages and sections that renovation companies need to convert visitors into clients.
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
              <h2>The right plan for a renovation business</h2>
            </div>

            <div className="examples-offer-card">
              <div className="examples-offer-header">
                <div>
                  <p className="examples-offer-label">Growth Website</p>
                  <p className="examples-offer-price">€159<span>/month</span></p>
                </div>
                <span className="examples-offer-badge">Recommended for you</span>
              </div>
              <p className="examples-offer-reason">
                Renovation is a local business — your customers search by city and postcode. The Growth plan
                includes ongoing local SEO work, so your site climbs the rankings in the areas you serve
                and keeps generating enquiries month after month. It also covers maintenance, updates and
                performance monitoring, so you can focus on running your projects.
              </p>
              <div className="examples-offer-actions">
                <Link href="/en#contact" className="btn btn-primary">
                  Get started with Growth →
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
                Pixeloria builds websites for renovation and building companies in France and across Europe.
                More visibility, more enquiries.
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

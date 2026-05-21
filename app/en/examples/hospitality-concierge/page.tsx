import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Websites for Hospitality and Concierge Businesses | Pixeloria',
  description:
    'A polished, professional website that reflects your premium service and converts visitors into clients. Built for concierge services, rental management and hospitality businesses.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/examples/hospitality-concierge',
    languages: {
      'fr-FR': 'https://pixeloria.fr/exemples/conciergerie',
      'en-GB': 'https://pixeloria.fr/en/examples/hospitality-concierge',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/examples/hospitality-concierge',
    title: 'Websites for Hospitality and Concierge Businesses | Pixeloria',
    description:
      'A polished, professional website that reflects your premium service and converts visitors into clients.',
    locale: 'en_GB',
    siteName: 'Pixeloria',
  },
};

const painPoints = [
  {
    title: 'Your brand does not come across online',
    desc: 'You offer a premium, personal service. A generic website — or no website at all — undercuts the quality you deliver in person.',
  },
  {
    title: 'Hard to explain your offer clearly',
    desc: 'Concierge and property management services can be complex. A well-structured site helps prospects understand exactly what you do and who you do it for.',
  },
  {
    title: 'Low trust for new clients',
    desc: 'Property owners are handing you access to their biggest asset. A professional website with testimonials, accreditations and a clear process builds the trust needed to get that first call.',
  },
  {
    title: 'Losing out to bigger operators',
    desc: 'Larger platforms and competitors have polished digital presence. A well-designed site levels the playing field and positions you as the premium local choice.',
  },
];

const benefits = [
  {
    title: 'A premium look that matches your service',
    desc: 'Clean, sophisticated design that communicates quality — the same standard your clients expect from you in person.',
  },
  {
    title: 'Clear explanation of your services',
    desc: 'Structured service pages that walk prospects through what you offer, how it works and what they get — no ambiguity.',
  },
  {
    title: 'Social proof that closes deals',
    desc: 'Testimonials from property owners, occupancy stats, accreditations and partnership logos — everything that builds confidence.',
  },
  {
    title: 'Local SEO for your area',
    desc: 'Ranking for searches like "concierge service in [city]" or "short-term rental management" in the areas you operate.',
  },
  {
    title: 'Easy contact and onboarding',
    desc: 'A simple form or booking request so new clients can reach out without friction. First impressions matter.',
  },
  {
    title: 'Multilingual-ready',
    desc: 'If you work with international property owners or guests, we can build your site in multiple languages from the start.',
  },
];

const siteStructure = [
  'Homepage — brand positioning, key services, trust signals and a clear call to action',
  'Services page — property check-ins, key holding, cleaning coordination, guest management…',
  'How it works — a step-by-step process that demystifies your service for new clients',
  'Results / Case studies — occupancy rates, guest reviews, revenue uplift for property owners',
  'Testimonials — written reviews from satisfied property owners',
  'About page — who you are, your local expertise, your team',
  'FAQ — answers to the most common questions from property owners',
  'Contact / Enquiry form — simple form to start the conversation',
];

export default function HospitalityConciergePage() {
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
                <span aria-current="page">Hospitality &amp; concierge</span>
              </nav>

              <span className="eyebrow" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                For hospitality &amp; concierge businesses
              </span>

              <h1>Premium websites for hospitality and concierge businesses</h1>

              <p className="page-hero-sub">
                A polished, professional website that reflects your premium service and converts
                visitors into clients.
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
              <h2>Why hospitality businesses struggle to convert online</h2>
              <p className="section-sub">
                You deliver an exceptional experience. Your website needs to communicate that before anyone picks up the phone.
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
              <h2>A website as polished as your service</h2>
              <p className="section-sub">
                Designed to position you as the premium local choice and turn website visitors into enquiries.
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
                The pages and sections that concierge and hospitality businesses need to build trust and generate leads.
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
              <h2>The right plan for a premium concierge service</h2>
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
                Premium positioning requires ongoing effort. The Growth plan combines a high-quality website
                with continuous local SEO so you stay visible when property owners in your area are searching
                for a concierge service. As your service evolves — new locations, new services, new testimonials
                — your website evolves with it. All maintenance and updates are included.
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
                Pixeloria builds websites for hospitality and concierge businesses in France and across Europe.
                Premium design, real results.
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

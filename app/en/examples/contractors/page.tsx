import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Websites for Contractors and Tradespeople | Pixeloria',
  description:
    'A professional website for your contracting or trade business. Show your services clearly, build trust and get more enquiries — without spending hours on admin.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/examples/contractors',
    languages: {
      'fr-FR': 'https://pixeloria.fr/exemples/artisan',
      'en-GB': 'https://pixeloria.fr/en/examples/contractors',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/examples/contractors',
    title: 'Websites for Contractors and Tradespeople | Pixeloria',
    description:
      'A professional website for your contracting or trade business. Show your services clearly, build trust and get more enquiries.',
    locale: 'en_GB',
    siteName: 'Pixeloria',
  },
};

const painPoints = [
  {
    title: 'No website, or an outdated one',
    desc: 'Customers search online before calling. If they cannot find you — or your site looks like it was built in 2010 — they call someone else.',
  },
  {
    title: 'Hard to explain what you do',
    desc: 'You cover multiple trades or work areas. A clear service page avoids the "do you do X?" calls and filters for the right jobs.',
  },
  {
    title: 'Not enough enquiries',
    desc: 'Word of mouth is great, but it has a ceiling. A site on Google means people who have never heard of you can still find and contact you.',
  },
  {
    title: 'Poor mobile experience',
    desc: 'Most people searching for a contractor are on their phone. A site that is hard to use on mobile loses them in seconds.',
  },
];

const benefits = [
  {
    title: 'Show up on Google',
    desc: 'Basic local SEO so people searching "electrician near me" or "plumber in [city]" can actually find you.',
  },
  {
    title: 'Make it easy to call or message',
    desc: 'Click-to-call button, WhatsApp link and a simple contact form — available 24/7, even when you are on a job.',
  },
  {
    title: 'Present your services clearly',
    desc: 'What you do, where you work, your certifications and any indicative pricing — everything a prospect needs before picking up the phone.',
  },
  {
    title: 'Show your work',
    desc: 'A photo gallery of completed jobs is worth more than any text. Real proof of what you can deliver.',
  },
  {
    title: 'Build trust without effort',
    desc: 'Customer testimonials, trade association logos and clear contact details all add up to a business that looks reliable.',
  },
  {
    title: 'Works on every device',
    desc: 'Fast, responsive design that looks good on phones, tablets and desktops — no pinching or zooming required.',
  },
];

const siteStructure = [
  'Homepage — clear headline, key services, one strong call to action',
  'Services page — detail each trade or service you offer',
  'Service areas — the towns, cities or postcodes you cover',
  'Gallery — before/after photos and completed project shots',
  'About page — your experience, qualifications and why customers trust you',
  'Testimonials — real reviews from past customers',
  'Contact page — form, phone number and map',
];

export default function ContractorsPage() {
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
                <span aria-current="page">Contractors</span>
              </nav>

              <span className="eyebrow" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                For contractors &amp; tradespeople
              </span>

              <h1>Websites built for contractors and tradespeople</h1>

              <p className="page-hero-sub">
                Show your services clearly, build trust and make it easy for customers to contact you
                — even when you&apos;re on site.
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
              <h2>What holds most contractors back online</h2>
              <p className="section-sub">
                You are good at your trade. The problem is getting the right customers to find and trust you.
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
              <h2>What your website will do for your business</h2>
              <p className="section-sub">
                A straightforward website that works while you are on the tools.
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
                Every contractor site is built to order, but these are the pages most trade businesses need.
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
              <h2>The right plan for a busy tradesperson</h2>
            </div>

            <div className="examples-offer-card">
              <div className="examples-offer-header">
                <div>
                  <p className="examples-offer-label">Care Website</p>
                  <p className="examples-offer-price">€89<span>/month</span></p>
                </div>
                <span className="examples-offer-badge">Recommended for you</span>
              </div>
              <p className="examples-offer-reason">
                When you are on site all day, the last thing you want is to worry about software updates,
                security patches or a site that suddenly goes down. The Care plan includes ongoing maintenance
                and hosting — your site stays live and up to date without you lifting a finger.
                If something breaks or needs changing, you contact us and we handle it.
              </p>
              <div className="examples-offer-actions">
                <Link href="/en#contact" className="btn btn-primary">
                  Get started with Care →
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
              <h2>Want a website adapted to your trade?</h2>
              <p>
                Pixeloria builds straightforward, professional websites for contractors across France
                and Europe. More enquiries, less hassle.
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

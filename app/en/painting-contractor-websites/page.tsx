import type { Metadata } from 'next';
import { OFFERS_US } from '@/lib/pricing-us';
import { hreflangSelf } from '@/lib/hreflang';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Painting Contractor Website Design That Generates Leads | Pixeloria',
  description:
    'Professional painting contractor websites built around before-and-after photos, clear interior and exterior service pages, and the trust signals homeowners look for when comparing painters.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/painting-contractor-websites',
    languages: hreflangSelf('https://pixeloria.fr/en/painting-contractor-websites'),
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/painting-contractor-websites',
    title: 'Painting Contractor Website Design That Generates Leads | Pixeloria',
    description:
      'Professional painting contractor websites built around before-and-after photos, clear interior and exterior service pages, and the trust signals homeowners look for when comparing painters.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

const interiorFeatures = [
  {
    title: 'Interior Painting',
    desc: 'A dedicated page for walls, ceilings, trim and cabinet painting — a largely year-round service, not limited by weather or season.',
  },
  {
    title: 'Flexible Scheduling',
    desc: 'Messaging that highlights how interior work can be scheduled around a customer calendar, not the weather.',
  },
];

const exteriorFeatures = [
  {
    title: 'Exterior Painting',
    desc: 'A separate page for siding, trim, decks and fences, noting clearly that exterior work is more weather and season dependent.',
  },
  {
    title: 'Seasonal Booking Windows',
    desc: 'Messaging that helps homeowners understand the best window for exterior work in their area, so they book early rather than waiting.',
  },
];

const customerFeatures = [
  {
    title: 'Residential Painting',
    desc: 'Pages built around the services homeowners search for, from single rooms to full-house interior and exterior projects.',
  },
  {
    title: 'Commercial Painting',
    desc: 'A separate commercial painting section for property managers and business owners, distinct from residential service pages.',
  },
];

const includeItems = [
  {
    label: 'Before-and-after gallery',
    desc: 'Side-by-side photos of past projects — one of the most persuasive tools in this trade, since the transformation is immediate and dramatic.',
  },
  {
    label: 'Interior & exterior service pages',
    desc: 'Separate pages for interior and exterior painting, since the two services differ in season, timeline and considerations.',
  },
  {
    label: 'Residential & commercial sections',
    desc: 'Clearly separated content for homeowners and for property managers or business owners.',
  },
  {
    label: 'Customer reviews',
    desc: 'Reviews displayed where prospects can see them before they decide to reach out — important in a market where homeowners often compare several painters.',
  },
  {
    label: 'Mobile call button',
    desc: 'A tap-to-call button, always visible, for visitors browsing on a phone.',
  },
  {
    label: 'Short estimate request form',
    desc: 'A simple form so homeowners can request an estimate without picking up the phone.',
  },
];

const faqs = [
  {
    q: 'How much does a painting contractor website cost?',
    a: `Pixeloria painting contractor websites start at ${OFFERS_US.starter.price} for a one-page website. Multi-page websites with individual service pages and a before-and-after gallery start at ${OFFERS_US.growth.price}.`,
  },
  {
    q: 'How long does it take to build a painting contractor website?',
    a: 'A one-page website can generally be delivered within five business days after we receive all required content. Larger multi-page websites with a full gallery may take one to three weeks.',
  },
  {
    q: 'Can you redesign my existing painting website?',
    a: 'Yes. Pixeloria can redesign outdated painting contractor websites while improving mobile usability, lead generation and local search structure.',
  },
  {
    q: 'Can my website show before-and-after photos of my painting projects?',
    a: 'Yes. Before-and-after photos are one of the most effective ways to build trust with homeowners, and we design the gallery to be front and center on your website.',
  },
  {
    q: 'Do you guarantee first-page Google rankings?',
    a: 'No legitimate agency can guarantee a specific Google ranking. We focus on building a technically strong, well-structured website that supports your visibility over time.',
  },
];

export default function PaintingContractorWebsitesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Painting contractor website design',
    provider: {
      '@type': 'Organization',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
    },
    description:
      'Website design services for residential and commercial painting contractors, covering interior and exterior painting.',
    areaServed: { '@type': 'Country', name: 'United States' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HeaderEn />
      <main>

        {/* Hero */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/en">Home</Link>
                <span aria-hidden="true"> › </span>
                <span>Painting Contractor Websites</span>
              </nav>
              <span className="eyebrow">Painting contractors</span>
              <h1>Painting Contractor Website Design That Generates Leads</h1>
              <p className="page-hero-sub">
                Pixeloria creates fast, professional websites for residential and
                commercial painting contractors across the United States. Every
                painting contractor website is built around before-and-after photos,
                clear interior and exterior service pages, and the trust signals
                homeowners look for when they&apos;re comparing several painters.
              </p>
              <div className="page-hero-actions">
                <Link href="/en/free-website-audit" className="btn btn-primary">
                  Get a Free Website Audit
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/en/pricing" className="btn btn-secondary">See Pricing</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="section">
          <div className="container">
            <div className="include-item" style={{ maxWidth: '760px' }}>
              <strong>Quick answer</strong>
              <p>
                Painting is one of the easiest trades for homeowners to compare,
                since most people request estimates from several painters before
                choosing one. A strong painting contractor website needs to stand
                out immediately — starting with a before-and-after gallery, since
                transformation photos are one of the most persuasive tools in this
                trade. The site should also separate interior painting, which is
                largely year-round, from exterior painting, which is more weather
                and season dependent, and address residential and commercial
                customers separately, alongside reviews, a service area page and a
                simple estimate request form.
              </p>
            </div>
          </div>
        </section>

        {/* Website Design for Painting Contractors */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Built for painters</span>
              <h2>Website Design for Painting Contractors</h2>
              <p className="section-sub">
                Pixeloria builds websites for companies that provide painting
                services — Pixeloria itself does not perform painting work. Our
                job is to design and build the website your painting business uses
                to win jobs.
              </p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card">
                <span className="benefit-num">01</span>
                <h3>Mobile-first design</h3>
                <p>Most homeowners search for a painter on their phone. Your site is built to load fast and read clearly on mobile first.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">02</span>
                <h3>Clear service structure</h3>
                <p>Interior painting, exterior painting, and residential and commercial work each get their own clear, easy-to-find page.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">03</span>
                <h3>Built to convert</h3>
                <p>Every page is designed around one goal: turning a visitor into a phone call or an estimate request.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Before & After: Your Strongest Sales Tool */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Visual proof</span>
              <h2>Before &amp; After: Your Strongest Sales Tool</h2>
              <p className="section-sub">
                Few trades have a persuasion tool as powerful as painting. A room or
                exterior transformed by fresh paint is an immediate, dramatic
                visual — arguably more compelling than in most other trades. Your
                website should put this front and center rather than treating it as
                an afterthought.
              </p>
            </div>
            <div className="includes-grid">
              <div className="include-item">
                <strong>Side-by-side comparisons</strong>
                <p>Before-and-after photo pairs displayed prominently, not buried in a generic photo page.</p>
              </div>
              <div className="include-item">
                <strong>Room-by-room and full-exterior transformations</strong>
                <p>Galleries organized so visitors can find examples close to their own project — a kitchen, a living room, a full exterior repaint.</p>
              </div>
              <div className="include-item">
                <strong>Recent work kept current</strong>
                <p>A gallery structure that makes it easy to add your most recent completed jobs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interior vs. Exterior Painting */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Interior & exterior</span>
              <h2>Interior vs. Exterior Painting Website Features</h2>
              <p className="section-sub">
                Interior and exterior painting are different services with
                different seasons and considerations. Your website should address
                both clearly, not blend them into one generic page.
              </p>
            </div>
            <div className="benefits-grid">
              {interiorFeatures.map((f, i) => (
                <div key={f.title} className="benefit-card">
                  <span className="benefit-num">0{i + 1}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="benefits-grid" style={{ marginTop: '1.5rem' }}>
              {exteriorFeatures.map((f, i) => (
                <div key={f.title} className="benefit-card">
                  <span className="benefit-num">0{i + 1}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Residential and Commercial Painting */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Residential & commercial</span>
              <h2>Residential and Commercial Painting Website Features</h2>
              <p className="section-sub">
                Residential and commercial painting customers look for different
                information. Your website should address both, clearly separated.
              </p>
            </div>
            <div className="benefits-grid">
              {customerFeatures.map((f, i) => (
                <div key={f.title} className="benefit-card">
                  <span className="benefit-num">0{i + 1}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standing Out */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Winning the job</span>
              <h2>Standing Out When Homeowners Compare Several Painters</h2>
              <p className="section-sub">
                Painting has a relatively low barrier for homeowners to get
                multiple estimates, so differentiation and trust signals carry
                outsized weight in winning the job. Your website should make it
                easy for a visitor to see why you&apos;re the right choice before they
                even pick up the phone.
              </p>
            </div>
            <div className="includes-grid">
              {includeItems.map((item) => (
                <div key={item.label} className="include-item">
                  <strong>{item.label}</strong>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Pricing</span>
              <h2>Painting Contractor Website Pricing</h2>
              <p className="section-sub">
                Simple, one-time pricing to launch your painting contractor
                website, plus an optional monthly plan to keep it maintained and
                locally visible.
              </p>
            </div>
            <div className="pricing-cards pricing-cards--three">
              <div className="pricing-card">
                <p className="pricing-label">Starter Website</p>
                <p className="pricing-price">{OFFERS_US.starter.price} <span>{OFFERS_US.starter.suffix}</span></p>
                <p className="pricing-sublabel">A focused one-page painting contractor website</p>
                <ul>
                  <li>One-page website</li>
                  <li>Mobile-first responsive design</li>
                  <li>Mobile call button</li>
                  <li>Short estimate request form</li>
                </ul>
                <Link href="/en/free-website-audit" className="btn btn-secondary">Get Started →</Link>
              </div>
              <div className="pricing-card pricing-card--featured">
                <span className="pricing-badge">Most Popular</span>
                <p className="pricing-label">Growth Website</p>
                <p className="pricing-price">{OFFERS_US.growth.price} <span>{OFFERS_US.growth.suffix}</span></p>
                <p className="pricing-sublabel">A multi-page website with a before-and-after gallery</p>
                <ul>
                  <li>Multiple service pages</li>
                  <li>Before-and-after gallery</li>
                  <li>Interior & exterior service pages</li>
                  <li>Customer reviews section</li>
                  <li>Local SEO structure included</li>
                </ul>
                <Link href="/en/free-website-audit" className="btn btn-primary">Get Started →</Link>
              </div>
              <div className="pricing-card">
                <p className="pricing-label">Website Care & Local Visibility</p>
                <p className="pricing-price">{OFFERS_US.care.price} <span>{OFFERS_US.care.suffix}</span></p>
                <p className="pricing-sublabel">Ongoing maintenance and local visibility support</p>
                <ul>
                  <li>Hosting and maintenance</li>
                  <li>Content updates</li>
                  <li>Local visibility support</li>
                  <li>No ranking guarantees</li>
                </ul>
                <Link href="/en/free-website-audit" className="btn btn-secondary">Add This Plan →</Link>
                <p className="page-cta-note">Cancel anytime.</p>
              </div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <Link href="/en/pricing" style={{ color: 'var(--primary)', textDecoration: 'underline', fontSize: '0.9rem' }}>
                See full pricing details →
              </Link>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">FAQ</span>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-accordion">
              {faqs.map(({ q, a }, i) => (
                <details key={i} className="faq-item">
                  <summary className="faq-question">
                    <span>{q}</span>
                    <svg className="faq-chevron" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <div className="faq-answer">
                    <p>{a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section">
          <div className="container">
            <div className="page-cta-block">
              <h2>Request a Free Painting Contractor Website Audit</h2>
              <p>
                Send us your current website, or tell us about your painting
                business if you don&apos;t have one yet. We&apos;ll give you honest,
                no-obligation feedback on what would help you generate more leads.
              </p>
              <Link href="/en/free-website-audit" className="btn btn-primary btn-lg">
                Request My Free Audit
                <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer locale="en" />
    </>
  );
}

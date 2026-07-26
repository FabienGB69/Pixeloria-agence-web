import type { Metadata } from 'next';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Roofing Contractor Website Design That Generates Leads | Pixeloria',
  description:
    'Professional roofing websites built to generate phone calls, roof estimate requests and local leads. Mobile-first website design for US roofing contractors.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/roofing-websites',
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/roofing-websites',
    title: 'Roofing Contractor Website Design That Generates Leads | Pixeloria',
    description:
      'Professional roofing websites built to generate phone calls, roof estimate requests and local leads. Mobile-first website design for US roofing contractors.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

const includeItems = [
  {
    label: 'Service pages',
    desc: 'Dedicated pages for roof replacement, roof repair, storm damage repair and other core services.',
  },
  {
    label: 'Service area page',
    desc: 'A clear list of the towns and counties you cover, so homeowners know you serve their area.',
  },
  {
    label: 'Completed projects gallery',
    desc: 'Before/after photos of finished roofing jobs to build trust with homeowners.',
  },
  {
    label: 'Customer reviews',
    desc: 'Reviews displayed where prospects can see them before they decide to call.',
  },
  {
    label: 'Mobile call button',
    desc: 'A tap-to-call button, always visible, for visitors browsing on a phone.',
  },
  {
    label: 'Short estimate form',
    desc: 'A simple form so homeowners can request a roof estimate without picking up the phone.',
  },
];

const residentialFeatures = [
  {
    title: 'Residential roofing',
    desc: 'Pages built around the services homeowners search for: roof replacement, roof repair, shingle roofing, metal roofing and roof inspection.',
  },
  {
    title: 'Storm and hail damage',
    desc: 'A dedicated storm damage repair and hail damage roofing section, since these searches spike after severe weather and need fast, clear answers.',
  },
  {
    title: 'Emergency roof repair',
    desc: 'A visible path for urgent situations, so homeowners dealing with an active leak or emergency roof repair can reach you immediately.',
  },
  {
    title: 'Insurance claim assistance',
    desc: 'A page explaining how your company supports homeowners through insurance claim assistance for storm or hail-related roof damage.',
  },
];

const commercialFeatures = [
  {
    title: 'Commercial roofing',
    desc: 'A separate commercial roofing section for property managers and business owners, distinct from residential service pages.',
  },
  {
    title: 'Roof inspection requests',
    desc: 'A simple way for commercial clients to request a roof inspection or maintenance visit.',
  },
  {
    title: 'Project documentation',
    desc: 'Space to showcase completed commercial projects, scopes of work and past clients.',
  },
];

const localSeoItems = [
  { label: 'Service area pages', desc: 'Individual pages for each town or county your company serves.' },
  { label: 'Google Business Profile alignment', desc: 'Business name, address and services kept consistent with your website.' },
  { label: 'Roofing schema markup', desc: 'Structured data that describes your services and service area to search engines.' },
  { label: 'Reviews and licensing details', desc: 'Reviews and licensing or insurance information displayed where visitors expect them.' },
];

const faqs = [
  {
    q: 'How much does a roofing website cost?',
    a: 'Pixeloria roofing websites start at $499 for a one-page website. Multi-page websites with individual service pages start at $899.',
  },
  {
    q: 'How long does it take to build a roofing website?',
    a: 'A one-page roofing website can generally be delivered within five business days after we receive all required content. Larger multi-page websites may take one to three weeks.',
  },
  {
    q: 'Can you redesign my existing roofing website?',
    a: 'Yes. Pixeloria can redesign outdated roofing websites while improving mobile usability, lead generation and local search structure.',
  },
  {
    q: 'Do you offer local SEO for roofing companies?',
    a: 'Basic local SEO structure is included in our website packages. Ongoing SEO and content strategy are available as a separate service.',
  },
  {
    q: 'Do you guarantee first-page Google rankings?',
    a: 'No legitimate agency can guarantee a specific Google ranking. We focus on building a technically strong, well-structured website that supports your visibility over time.',
  },
];

export default function RoofingWebsitesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Roofing contractor website design',
    provider: {
      '@type': 'Organization',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
    },
    description: 'Website design services for residential and commercial roofing contractors.',
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
                <span>Roofing Websites</span>
              </nav>
              <span className="eyebrow">Roofing contractors</span>
              <h1>Roofing Contractor Websites Built to Generate More Leads</h1>
              <p className="page-hero-sub">
                Pixeloria creates fast, professional websites for residential and commercial
                roofing contractors across the United States. Every roofing website is
                structured to showcase your services, service area, completed projects,
                customer reviews and estimate request process.
              </p>
              <div className="page-hero-actions">
                <Link href="/en/free-website-audit" className="btn btn-primary">
                  Get a Free Website Audit
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/en/offers" className="btn btn-secondary">See Pricing</Link>
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
                A roofing contractor website is a lead-generation website designed to present
                roofing services, establish trust and encourage homeowners or property managers
                to call or request an estimate. A strong roofing website should include service
                pages, service areas, reviews, completed projects, licensing information when
                applicable, mobile call buttons and a short estimate form.
              </p>
            </div>
          </div>
        </section>

        {/* Website Design for Roofing Contractors */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Built for roofers</span>
              <h2>Website Design for Roofing Contractors</h2>
              <p className="section-sub">
                Pixeloria builds websites for companies that provide roofing services —
                Pixeloria itself does not perform roofing work. Our job is to design and build
                the website your roofing business uses to win jobs.
              </p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card">
                <span className="benefit-num">01</span>
                <h3>Mobile-first design</h3>
                <p>Most homeowners search for a roofer on their phone. Your site is built to load fast and read clearly on mobile first.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">02</span>
                <h3>Clear service structure</h3>
                <p>Roof replacement, roof repair, storm damage repair and other services each get their own clear, easy-to-find page.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">03</span>
                <h3>Built to convert</h3>
                <p>Every page is designed around one goal: turning a visitor into a phone call or an estimate request.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Turn Local Roofing Searches Into Estimate Requests */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Local search</span>
              <h2>Turn Local Roofing Searches Into Estimate Requests</h2>
              <p className="section-sub">
                Homeowners searching for roofing help are usually looking for one of these
                situations. Your website should speak directly to each one.
              </p>
            </div>
            <ul className="artisan-types-grid">
              <li className="artisan-type-tag">Roof replacement</li>
              <li className="artisan-type-tag">Roof repair</li>
              <li className="artisan-type-tag">Storm damage repair</li>
              <li className="artisan-type-tag">Hail damage roofing</li>
              <li className="artisan-type-tag">Emergency roof repair</li>
              <li className="artisan-type-tag">Roof inspection</li>
              <li className="artisan-type-tag">Residential roofing</li>
              <li className="artisan-type-tag">Commercial roofing</li>
              <li className="artisan-type-tag">Metal roofing</li>
              <li className="artisan-type-tag">Shingle roofing</li>
            </ul>
          </div>
        </section>

        {/* What Every Roofing Website Should Include */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">The essentials</span>
              <h2>What Every Roofing Website Should Include</h2>
              <p className="section-sub">
                These are the elements homeowners look for before they decide to call a
                roofing company.
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

        {/* Residential and Commercial Roofing Website Features */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Residential & commercial</span>
              <h2>Residential and Commercial Roofing Website Features</h2>
              <p className="section-sub">
                Residential and commercial roofing customers look for different information.
                Your website should address both, clearly separated.
              </p>
            </div>
            <div className="benefits-grid">
              {residentialFeatures.map((f, i) => (
                <div key={f.title} className="benefit-card">
                  <span className="benefit-num">0{i + 1}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="benefits-grid" style={{ marginTop: '1.5rem' }}>
              {commercialFeatures.map((f, i) => (
                <div key={f.title} className="benefit-card">
                  <span className="benefit-num">0{i + 1}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local SEO Structure for Roofing Companies */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Local visibility</span>
              <h2>Local SEO Structure for Roofing Companies</h2>
              <p className="section-sub">
                Every roofing website we build starts with a local SEO structure so your
                service area is clear to both visitors and search engines. No agency can
                guarantee a specific ranking — what we can do is build the technical
                foundation that supports your visibility over time.
              </p>
            </div>
            <div className="includes-grid">
              {localSeoItems.map((item) => (
                <div key={item.label} className="include-item">
                  <strong>{item.label}</strong>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roofing Website Pricing */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Pricing</span>
              <h2>Roofing Website Pricing</h2>
              <p className="section-sub">
                Simple, one-time pricing to launch your roofing website, plus an optional
                monthly plan to keep it maintained and locally visible.
              </p>
            </div>
            <div className="pricing-cards pricing-cards--three">
              <div className="pricing-card">
                <p className="pricing-label">Starter Website</p>
                <p className="pricing-price">$499 <span>one-time</span></p>
                <p className="pricing-sublabel">A focused one-page roofing website</p>
                <ul>
                  <li>One-page website</li>
                  <li>Mobile-first responsive design</li>
                  <li>Mobile call button</li>
                  <li>Short estimate form</li>
                </ul>
                <Link href="/en/free-website-audit" className="btn btn-secondary">Get Started →</Link>
              </div>
              <div className="pricing-card pricing-card--featured">
                <span className="pricing-badge">Most Popular</span>
                <p className="pricing-label">Growth Website</p>
                <p className="pricing-price">$899 <span>one-time</span></p>
                <p className="pricing-sublabel">A multi-page website with individual service pages</p>
                <ul>
                  <li>Multiple service pages</li>
                  <li>Service area page</li>
                  <li>Completed projects gallery</li>
                  <li>Customer reviews section</li>
                  <li>Local SEO structure included</li>
                </ul>
                <Link href="/en/free-website-audit" className="btn btn-primary">Get Started →</Link>
              </div>
              <div className="pricing-card">
                <p className="pricing-label">Website Care & Local Visibility</p>
                <p className="pricing-price">$79 <span>/month</span></p>
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
              <Link href="/en/offers" style={{ color: 'var(--primary)', textDecoration: 'underline', fontSize: '0.9rem' }}>
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
              <h2>Request a Free Roofing Website Audit</h2>
              <p>
                Send us your current website, or tell us about your roofing business if you
                don&apos;t have one yet. We&apos;ll give you honest, no-obligation feedback on
                what would help you generate more leads.
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

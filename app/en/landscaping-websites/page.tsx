import type { Metadata } from 'next';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Landscaping Website Design That Generates Leads | Pixeloria',
  description:
    'Professional landscaping websites built to present one-time design and installation projects alongside recurring maintenance plans, with seasonal messaging that drives calls and estimate requests.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/landscaping-websites',
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/landscaping-websites',
    title: 'Landscaping Website Design That Generates Leads | Pixeloria',
    description:
      'Professional landscaping websites built to present one-time design and installation projects alongside recurring maintenance plans, with seasonal messaging that drives calls and estimate requests.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

const serviceTypes = [
  'Landscape design',
  'Landscape installation',
  'Hardscaping',
  'Patios & walkways',
  'Lawn maintenance',
  'Seasonal cleanup',
  'Irrigation systems',
  'Mulching & planting',
  'Tree & shrub care',
  'Lawn care programs',
];

const projectFeatures = [
  {
    title: 'Landscape Design & Installation',
    desc: 'A photo-heavy portfolio showcasing completed yards, gardens and outdoor spaces — this is often the single biggest factor in whether a homeowner reaches out for a design or installation project.',
  },
  {
    title: 'Hardscaping & Outdoor Living',
    desc: 'Dedicated pages for patios, walkways, retaining walls and other one-time installation projects, supported by completed-project photos.',
  },
  {
    title: 'Project Estimate Requests',
    desc: 'A simple way for homeowners to request an estimate for a specific design or installation project, separate from the maintenance sign-up path.',
  },
];

const maintenanceFeatures = [
  {
    title: 'Lawn Care & Maintenance Plans',
    desc: 'A simpler, subscription-style page presenting recurring mowing, edging and lawn care plans — a much more transactional page than the project portfolio.',
  },
  {
    title: 'Seasonal Cleanup Service',
    desc: 'A dedicated section for spring and fall cleanup, timed to when customers are actively searching for this service.',
  },
  {
    title: 'Easy Sign-Up',
    desc: 'A short form so customers can start recurring service without needing a full design consultation.',
  },
];

const includeItems = [
  {
    label: 'Project portfolio',
    desc: 'A photo gallery of completed design and installation projects — yards, gardens and hardscaping — organized to stay easy to browse.',
  },
  {
    label: 'Maintenance service page',
    desc: 'A clear, simple page for recurring lawn care and maintenance plans, kept separate from one-time project work.',
  },
  {
    label: 'Service area page',
    desc: 'A clear list of the towns and neighborhoods you cover, so customers know you serve their area.',
  },
  {
    label: 'Seasonal messaging',
    desc: 'Timely messaging for spring — typically the busiest season for landscaping searches — plus fall cleanup and other seasonal services.',
  },
  {
    label: 'Customer reviews',
    desc: 'Reviews displayed where prospects can see them before they decide to reach out.',
  },
  {
    label: 'Mobile call button',
    desc: 'A tap-to-call button, always visible, for visitors browsing on a phone.',
  },
  {
    label: 'Project estimate form',
    desc: 'A short form for homeowners requesting an estimate on a design or installation project.',
  },
  {
    label: 'Maintenance sign-up form',
    desc: 'A separate, simpler form for customers who just want to start recurring lawn care or maintenance service.',
  },
];

const localSeoItems = [
  { label: 'Service area pages', desc: 'Individual pages for each town or county your company serves.' },
  { label: 'Google Business Profile alignment', desc: 'Business name, address and services kept consistent with your website.' },
  { label: 'Landscaping schema markup', desc: 'Structured data that describes your services and service area to search engines.' },
  { label: 'Reviews on display', desc: 'Reviews shown where visitors expect them, alongside your completed project photos.' },
];

const faqs = [
  {
    q: 'How much does a landscaping website cost?',
    a: 'Pixeloria landscaping websites start at $499 for a one-page website. Multi-page websites with individual service pages and a full project portfolio start at $899.',
  },
  {
    q: 'How long does it take to build a landscaping website?',
    a: 'A one-page landscaping website can generally be delivered within five business days after we receive all required content. Larger multi-page websites with a project portfolio may take one to three weeks.',
  },
  {
    q: 'Can you redesign my existing landscaping website?',
    a: 'Yes. Pixeloria can redesign outdated landscaping websites while improving mobile usability, lead generation and local search structure.',
  },
  {
    q: 'Can my website handle both project estimates and maintenance sign-ups?',
    a: 'Yes. We build these as two clearly separated paths — a photo-heavy portfolio and estimate request for one-time design and installation projects, and a simpler, subscription-style page for recurring maintenance service.',
  },
  {
    q: 'Do you guarantee first-page Google rankings?',
    a: 'No legitimate agency can guarantee a specific Google ranking. We focus on building a technically strong, well-structured website that supports your visibility over time.',
  },
];

export default function LandscapingWebsitesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Landscaping company website design',
    provider: {
      '@type': 'Organization',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
    },
    description:
      'Website design services for landscaping companies, covering both one-time design and installation projects and recurring lawn care and maintenance service.',
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
                <span>Landscaping Websites</span>
              </nav>
              <span className="eyebrow">Landscaping companies</span>
              <h1>Landscaping Website Design That Generates Leads</h1>
              <p className="page-hero-sub">
                Pixeloria creates fast, professional websites for landscaping companies
                across the United States. Every landscaping website is structured to
                present both your one-time design and installation projects and your
                recurring maintenance plans clearly, with seasonal messaging that
                matches when customers are actually searching.
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
                A landscaping company website needs to work for two very different
                customers: homeowners planning a one-time design and installation
                project, and property owners looking for ongoing lawn care or
                maintenance service. Because one-time projects are highly visual and
                maintenance is more transactional, a strong landscaping website
                should present the two offerings separately — a photo-heavy project
                portfolio for design and installation work, and a simpler,
                subscription-style page for recurring maintenance — alongside a
                service area page, reviews, seasonal messaging for your busiest
                season and a mobile call button.
              </p>
            </div>
          </div>
        </section>

        {/* Website Design for Landscaping Companies */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Built for landscapers</span>
              <h2>Website Design for Landscaping Companies</h2>
              <p className="section-sub">
                Pixeloria builds websites for companies that provide landscaping
                services — Pixeloria itself does not perform landscaping work. Our
                job is to design and build the website your landscaping business
                uses to win jobs.
              </p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card">
                <span className="benefit-num">01</span>
                <h3>Mobile-first design</h3>
                <p>Most homeowners search for a landscaper on their phone. Your site is built to load fast and read clearly on mobile first.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">02</span>
                <h3>Two journeys, clearly separated</h3>
                <p>Project work and maintenance service are presented as two distinct paths, so neither customer type gets lost in the other&apos;s content.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">03</span>
                <h3>Seasonal messaging</h3>
                <p>Your homepage and service pages can highlight the spring surge, seasonal cleanup and other timely services when customers are actively searching.</p>
              </div>
            </div>
          </div>
        </section>

        {/* One-Time Projects vs. Recurring Maintenance */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Two business models, one website</span>
              <h2>One-Time Projects and Recurring Maintenance</h2>
              <p className="section-sub">
                Landscaping companies typically run two different businesses under
                one roof: visual, portfolio-driven design and installation projects,
                and simpler, subscription-style maintenance contracts. Your website
                should speak to both without conflating them.
              </p>
            </div>
            <div className="benefits-grid">
              {projectFeatures.map((f, i) => (
                <div key={f.title} className="benefit-card">
                  <span className="benefit-num">0{i + 1}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
            <div className="benefits-grid" style={{ marginTop: '1.5rem' }}>
              {maintenanceFeatures.map((f, i) => (
                <div key={f.title} className="benefit-card">
                  <span className="benefit-num">0{i + 1}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Landscaping Services We Build Websites For */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Services we cover</span>
              <h2>Landscaping Services We Build Websites For</h2>
              <p className="section-sub">
                Whether it&apos;s a one-time project or an ongoing maintenance service,
                your website should give each service its own clear, easy-to-find page.
              </p>
            </div>
            <ul className="artisan-types-grid">
              {serviceTypes.map((label) => (
                <li key={label} className="artisan-type-tag">{label}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* What Every Landscaping Website Should Include */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">The essentials</span>
              <h2>What Every Landscaping Website Should Include</h2>
              <p className="section-sub">
                These are the elements customers look for before they decide to
                reach out to a landscaping company.
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

        {/* Local SEO Structure for Landscaping Companies */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Local visibility</span>
              <h2>Local SEO Structure for Landscaping Companies</h2>
              <p className="section-sub">
                Every landscaping website we build starts with a local SEO structure
                so your service area is clear to both visitors and search engines.
                No agency can guarantee a specific ranking — what we can do is build
                the technical foundation that supports your visibility over time.
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

        {/* Pricing */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Pricing</span>
              <h2>Landscaping Website Pricing</h2>
              <p className="section-sub">
                Simple, one-time pricing to launch your landscaping website, plus an
                optional monthly plan to keep it maintained and locally visible.
              </p>
            </div>
            <div className="pricing-cards pricing-cards--three">
              <div className="pricing-card">
                <p className="pricing-label">Starter Website</p>
                <p className="pricing-price">$499 <span>one-time</span></p>
                <p className="pricing-sublabel">A focused one-page landscaping website</p>
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
                <p className="pricing-price">$899 <span>one-time</span></p>
                <p className="pricing-sublabel">A multi-page website with a project portfolio and maintenance page</p>
                <ul>
                  <li>Multiple service pages</li>
                  <li>Project portfolio and maintenance page</li>
                  <li>Service area page</li>
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
              <h2>Request a Free Landscaping Website Audit</h2>
              <p>
                Send us your current website, or tell us about your landscaping
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

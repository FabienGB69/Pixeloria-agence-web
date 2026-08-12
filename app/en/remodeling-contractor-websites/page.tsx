import type { Metadata } from 'next';
import { hreflangSelf } from '@/lib/hreflang';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Remodeling Contractor Website Design That Generates Leads | Pixeloria',
  description:
    'Portfolio-first websites for kitchen, bath and whole-home remodeling contractors, built around a strong photo gallery and content that earns trust over a longer research process. Mobile-first website design for US remodeling contractors.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/remodeling-contractor-websites',
    languages: hreflangSelf('https://pixeloria.fr/en/remodeling-contractor-websites'),
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/remodeling-contractor-websites',
    title: 'Remodeling Contractor Website Design That Generates Leads | Pixeloria',
    description:
      'Portfolio-first websites for kitchen, bath and whole-home remodeling contractors, built around a strong photo gallery and content that earns trust over a longer research process. Mobile-first website design for US remodeling contractors.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

const includeItems = [
  {
    label: 'Photo gallery, front and center',
    desc: 'A large, well-organized gallery of finished kitchens, bathrooms and whole-home remodels — the single most important element for this trade.',
  },
  {
    label: 'Before/after showcases',
    desc: 'Side-by-side before/after photos for individual projects, so visitors can see the transformation, not just the final result.',
  },
  {
    label: 'Detailed service pages',
    desc: 'Dedicated pages for kitchen remodeling, bathroom remodeling and whole-home remodeling, with enough detail to support a longer decision process.',
  },
  {
    label: 'Process explanation',
    desc: 'A clear, step-by-step overview of how a project moves from initial estimate to completion, so homeowners know what to expect.',
  },
  {
    label: 'Service area page',
    desc: 'A clear list of the towns and counties your company serves.',
  },
  {
    label: 'Estimate request form',
    desc: 'A simple form so homeowners can request a project estimate once they are ready to reach out.',
  },
];

const galleryFeatures = [
  {
    title: 'Gallery-first design',
    desc: 'Remodeling is a highly visual, aesthetic-driven decision. The homepage and navigation are built to lead visitors to your photo gallery quickly, not bury it.',
  },
  {
    title: 'Before/after storytelling',
    desc: 'Before/after pairs for kitchens, bathrooms and whole-home projects help homeowners picture what is possible with their own space.',
  },
  {
    title: 'Organized by room and project type',
    desc: 'Projects grouped by category — kitchens, bathrooms, additions, whole-home — so visitors can find examples closest to what they are planning.',
  },
];

const trustFeatures = [
  {
    title: 'Built for a longer consideration window',
    desc: 'Homeowners often research remodeling contractors for weeks or months, comparing portfolios and reviews closely before committing. Your website should support that research, not rush it.',
  },
  {
    title: 'Detailed, informative service pages',
    desc: 'In-depth service pages that answer the questions homeowners have during a long research process, rather than short, urgency-driven pages.',
  },
  {
    title: 'Clear process and expectations',
    desc: 'A visible explanation of your process — estimate, design, construction, walkthrough — builds confidence with homeowners who are still comparing contractors.',
  },
  {
    title: 'Financing mentioned where relevant',
    desc: 'If your business offers or references financing options, your website can note this neutrally as information for homeowners planning a larger project.',
  },
];

const localSeoItems = [
  { label: 'Service area pages', desc: 'Individual pages for each town or county your company serves.' },
  { label: 'Google Business Profile alignment', desc: 'Business name, address and services kept consistent with your website.' },
  { label: 'Structured data for services', desc: 'Structured data that describes your services and service area to search engines.' },
  { label: 'Reviews displayed prominently', desc: 'Reviews displayed where homeowners expect them during their research.' },
];

const faqs = [
  {
    q: 'How much does a remodeling contractor website cost?',
    a: 'Pixeloria remodeling websites start at $499 for a one-page website. Multi-page websites with individual service pages and a full photo gallery start at $899.',
  },
  {
    q: 'How long does it take to build a remodeling contractor website?',
    a: 'A one-page website can generally be delivered within five business days after we receive all required content. Larger multi-page websites with a full gallery may take one to three weeks, depending on the number of project photos.',
  },
  {
    q: 'Can you redesign my existing remodeling website?',
    a: 'Yes. Pixeloria can redesign outdated remodeling websites while improving the photo gallery, mobile usability and local search structure.',
  },
  {
    q: 'Does my website need to mention financing?',
    a: 'If your business offers or references financing options for larger remodeling projects, we can include that information on your website. Pixeloria does not provide or arrange financing itself.',
  },
  {
    q: 'Do you guarantee first-page Google rankings?',
    a: 'No legitimate agency can guarantee a specific Google ranking. We focus on building a technically strong, well-structured website that supports your visibility over time.',
  },
];

export default function RemodelingContractorWebsitesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Remodeling contractor website design',
    provider: {
      '@type': 'Organization',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
    },
    description: 'Website design services for kitchen, bathroom and whole-home remodeling contractors.',
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
                <span>Remodeling Contractor Websites</span>
              </nav>
              <span className="eyebrow">Remodeling contractors</span>
              <h1>Remodeling Contractor Website Design That Generates Leads</h1>
              <p className="page-hero-sub">
                Pixeloria builds websites for kitchen, bathroom and whole-home remodeling
                contractors across the United States. Remodeling is a visual, aesthetic-driven
                decision, so every website is built around a strong photo gallery and content
                that earns trust over the weeks or months homeowners spend researching before
                they commit.
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
                A remodeling contractor website should be built around a strong photo gallery,
                since kitchen, bath and whole-home remodeling is a highly visual purchase
                decision that homeowners research for weeks or months before committing. It
                should include before/after showcases, detailed service pages, a clear process
                explanation, reviews, a service area page and a simple way to request a project
                estimate.
              </p>
            </div>
          </div>
        </section>

        {/* Website Design for Remodeling Contractors */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Built for remodelers</span>
              <h2>Website Design for Remodeling Contractors</h2>
              <p className="section-sub">
                Pixeloria builds websites for companies that provide remodeling services —
                Pixeloria itself does not perform remodeling work. Our job is to design and
                build the website your remodeling business uses to win projects.
              </p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-card">
                <span className="benefit-num">01</span>
                <h3>Mobile-first design</h3>
                <p>Most homeowners browse remodeling photos and portfolios on their phone. Your site is built to load fast and display photos clearly on mobile first.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">02</span>
                <h3>A portfolio, not a brochure</h3>
                <p>Kitchen remodeling, bathroom remodeling and whole-home remodeling each get their own page, backed by a photo gallery that does the selling.</p>
              </div>
              <div className="benefit-card">
                <span className="benefit-num">03</span>
                <h3>Built to earn trust over time</h3>
                <p>Since homeowners compare contractors closely before committing, every page is designed to build confidence — not push for an immediate call.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Your Photo Gallery Comes First */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Gallery-first</span>
              <h2>Your Photo Gallery Comes First</h2>
              <p className="section-sub">
                For remodeling, a strong project gallery is arguably the single most important
                element on the website — more so than for a trade like emergency plumbing,
                where speed matters more than aesthetics.
              </p>
            </div>
            <div className="benefits-grid">
              {galleryFeatures.map((f, i) => (
                <div key={f.title} className="benefit-card">
                  <span className="benefit-num">0{i + 1}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Every Remodeling Website Should Include */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">The essentials</span>
              <h2>What Every Remodeling Contractor Website Should Include</h2>
              <p className="section-sub">
                These are the elements homeowners look for while comparing remodeling
                contractors during a long research process.
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

        {/* Building Trust Over a Longer Research Window */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Trust over time</span>
              <h2>Building Trust Over a Longer Research Window</h2>
              <p className="section-sub">
                Remodeling projects are considered purchases. Your website should support that
                research process rather than push for an urgent, same-day call.
              </p>
            </div>
            <div className="benefits-grid">
              {trustFeatures.map((f, i) => (
                <div key={f.title} className="benefit-card">
                  <span className="benefit-num">0{i + 1}</span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local SEO Structure for Remodeling Companies */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Local visibility</span>
              <h2>Local SEO Structure for Remodeling Companies</h2>
              <p className="section-sub">
                Every remodeling website we build starts with a local SEO structure so your
                service area is clear to both visitors and search engines. No agency can
                guarantee a specific ranking — what we can do is build the technical foundation
                that supports your visibility over time.
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
              <h2>Remodeling Contractor Website Pricing</h2>
              <p className="section-sub">
                Simple, one-time pricing to launch your website, plus an optional monthly plan
                to keep it maintained and locally visible.
              </p>
            </div>
            <div className="pricing-cards pricing-cards--three">
              <div className="pricing-card">
                <p className="pricing-label">Starter Website</p>
                <p className="pricing-price">$499 <span>one-time</span></p>
                <p className="pricing-sublabel">A focused one-page website</p>
                <ul>
                  <li>One-page website</li>
                  <li>Mobile-first responsive design</li>
                  <li>Photo gallery</li>
                  <li>Estimate request form</li>
                </ul>
                <Link href="/en/free-website-audit" className="btn btn-secondary">Get Started →</Link>
              </div>
              <div className="pricing-card pricing-card--featured">
                <span className="pricing-badge">Most Popular</span>
                <p className="pricing-label">Growth Website</p>
                <p className="pricing-price">$899 <span>one-time</span></p>
                <p className="pricing-sublabel">A multi-page website with a full before/after gallery</p>
                <ul>
                  <li>Multiple service pages</li>
                  <li>Service area page</li>
                  <li>Full before/after gallery</li>
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
              <h2>Request a Free Remodeling Website Audit</h2>
              <p>
                Send us your current website, or tell us about your remodeling business if you
                don&apos;t have one yet. We&apos;ll give you honest, no-obligation feedback on
                what would help your photo gallery and content generate more leads.
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

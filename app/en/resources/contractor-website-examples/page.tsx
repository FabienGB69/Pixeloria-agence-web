import type { Metadata } from 'next';
import Link from 'next/link';
import { breadcrumbList } from '@/lib/breadcrumb';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: '15 Contractor Website Best Practices | Pixeloria',
  description:
    '15 best-practice patterns that make a contractor website effective — from above-the-fold calls to action to service-area pages, reviews and mobile speed.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/resources/contractor-website-examples',
  },
  openGraph: {
    type: 'article',
    url: 'https://pixeloria.fr/en/resources/contractor-website-examples',
    title: '15 Contractor Website Best Practices | Pixeloria',
    description:
      '15 best-practice patterns that make a contractor website effective — from above-the-fold calls to action to service-area pages, reviews and mobile speed.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

const practices = [
  {
    title: 'A clear, above-the-fold call to action',
    desc: 'Visitors should see a call button or estimate form without scrolling — the very first screen they land on.',
  },
  {
    title: 'A dedicated service-area section',
    desc: 'A clear list of the towns, counties or zip codes covered, so visitors know immediately whether the business serves their area.',
  },
  {
    title: 'Individual service pages',
    desc: 'Each core service gets its own page rather than a single paragraph, making it easier for visitors and search engines to understand the offering.',
  },
  {
    title: 'A visible, tap-friendly phone number',
    desc: 'A phone number formatted as a tap-to-call link, staying reachable as the visitor scrolls on mobile.',
  },
  {
    title: 'A short estimate request form',
    desc: 'A form asking only for the essentials — name, phone, and a brief project description — so visitors who prefer not to call can still reach out.',
  },
  {
    title: 'Completed project photos',
    desc: 'Real photos of finished work, ideally organized by service, giving visitors a concrete sense of quality.',
  },
  {
    title: 'Customer reviews displayed on-site',
    desc: 'A handful of genuine reviews shown directly on the website, not only linked out to a separate profile.',
  },
  {
    title: 'Licensing and insurance information where relevant',
    desc: 'For trades where this applies, license numbers and insurance details displayed clearly build trust with visitors comparing options.',
  },
  {
    title: 'Fast mobile load times',
    desc: 'Pages that load quickly on a phone, since most visitors are searching on the go and will leave a slow site before it finishes loading.',
  },
  {
    title: 'A simple, consistent navigation menu',
    desc: 'A short menu covering services, service area, reviews and contact — visitors should never have to guess where to find something.',
  },
  {
    title: 'A dedicated contact or estimate page',
    desc: 'One clear page that brings together the phone number, form and service area, so it can be linked from anywhere on the site.',
  },
  {
    title: 'Local SEO structure and schema markup',
    desc: 'Structured data describing the business, services and service area to search engines, supporting long-term visibility.',
  },
  {
    title: 'Clear, jargon-free service descriptions',
    desc: 'Plain-language explanations of each service, written for homeowners rather than for other contractors.',
  },
  {
    title: 'Before/after or in-progress photos',
    desc: 'Visual proof of the work itself, which tends to build more confidence than text descriptions alone.',
  },
  {
    title: 'A dedicated emergency or urgent-request path',
    desc: 'For trades where urgent situations happen, a visible way for visitors to flag an urgent need instead of using the standard estimate form.',
  },
];

const faqs = [
  {
    q: 'Are these real websites you reviewed?',
    a: 'No. These are 15 best-practice patterns we see work well across contractor and home-service websites in general, not a list of specific named companies or a review of live sites.',
  },
  {
    q: 'Do I need all 15 of these on my website at once?',
    a: 'Not necessarily. A focused one-page starter site can cover the core patterns — a call to action, service area, contact form and reviews. The rest, like individual service pages and deeper local SEO structure, are often added as a business grows into a larger site.',
  },
  {
    q: 'Which of these patterns matters most for a new website?',
    a: 'A visible call to action and a clear service-area section tend to matter most early on, since they directly affect whether a visitor contacts you at all.',
  },
  {
    q: 'Can Pixeloria build a website that follows these patterns?',
    a: 'Yes. Pixeloria websites for contractors and home-service businesses are built around exactly this kind of structure — clear calls to action, service pages, service-area sections, reviews and local SEO basics.',
  },
];

export default function ContractorWebsiteExamplesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  const breadcrumbSchema = breadcrumbList([
    { name: 'Home', url: 'https://pixeloria.fr/en' },
    { name: 'Resources', url: 'https://pixeloria.fr/en/resources' },
    { name: 'Contractor Website Best Practices', url: 'https://pixeloria.fr/en/resources/contractor-website-examples' },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
                <Link href="/en/resources">Resources</Link>
                <span aria-hidden="true"> › </span>
                <span>Contractor Website Best Practices</span>
              </nav>
              <span className="eyebrow">Best practices</span>
              <h1>15 Contractor Website Best Practices</h1>
              <p className="page-hero-sub">
                Effective contractor websites tend to share the same core patterns: a clear call
                to action, a service-area section, individual service pages, visible reviews and
                fast mobile performance. Below are 15 best-practice patterns — illustrated
                generically, not as a review of specific real websites — to check your own site
                against.
              </p>
              <div className="article-byline">
                <span><strong>Pixeloria Team</strong></span>
                <span aria-hidden="true">·</span>
                <span>Published July 2026</span>
                <span aria-hidden="true">·</span>
                <span>Updated July 2026</span>
              </div>
            </div>
          </div>
        </section>

        {/* Table of contents */}
        <section className="section" style={{ paddingBottom: 0 }}>
          <div className="container">
            <nav className="article-toc" aria-label="Table of contents">
              <p>In this article</p>
              <ol>
                <li><a href="#the-list">The 15 best-practice patterns</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Article body */}
        <section className="section" style={{ paddingTop: '1rem' }} id="the-list">
          <div className="container">
            <div className="article-body">
              <h2>The 15 best-practice patterns</h2>
              <p>
                These are principles we see consistently across effective contractor and
                home-service websites, described generically rather than as named examples of
                real, live sites.
              </p>
              <ol>
                {practices.map((p, i) => (
                  <li key={p.title}>
                    <strong>{i + 1}. {p.title}.</strong> {p.desc}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section-tinted" id="faq">
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
              <h2>See How These Patterns Come Together</h2>
              <p>
                Browse examples of completed Pixeloria projects, or request a free audit of your
                current website against these best practices.
              </p>
              <div className="page-hero-actions" style={{ justifyContent: 'center' }}>
                <Link href="/en/free-website-audit" className="btn btn-primary btn-lg">
                  Request My Free Audit
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/en/case-studies" className="btn btn-secondary">See Case Studies</Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer locale="en" />
    </>
  );
}

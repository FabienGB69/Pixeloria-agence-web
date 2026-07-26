import type { Metadata } from 'next';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'What Should a Contractor Website Include? | Pixeloria',
  description:
    'A full breakdown of what a contractor website needs: service pages, service-area structure, lead-generation forms, trust signals, mobile design and basic SEO.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/resources/contractor-website-guide',
  },
  openGraph: {
    type: 'article',
    url: 'https://pixeloria.fr/en/resources/contractor-website-guide',
    title: 'What Should a Contractor Website Include? | Pixeloria',
    description:
      'A full breakdown of what a contractor website needs: service pages, service-area structure, lead-generation forms, trust signals, mobile design and basic SEO.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

const faqs = [
  {
    q: 'Does every contractor website need all of these elements?',
    a: 'Not necessarily at launch. A one-page starter website can cover the essentials — services, service area, a call button and an estimate form. Trust signals, individual service pages and deeper SEO structure are usually added as the business and website grow.',
  },
  {
    q: 'What is the single most important element on a contractor website?',
    a: 'A clear, easy-to-find way to contact you — a visible phone number or estimate form near the top of the page. Most visitors decide within seconds whether to keep reading or leave, so the path to contact you should never be hidden.',
  },
  {
    q: 'Do I need customer reviews on my website if I already have them on Google?',
    a: 'It still helps to show a few reviews directly on your site. Visitors often check a website before opening a separate Google listing, so having reviews visible where they are already looking reduces friction.',
  },
  {
    q: 'Do I need licensing information on my website?',
    a: 'If your trade requires a license, displaying your license number and any relevant insurance information builds trust and is often expected by customers comparing contractors. Requirements vary by state and trade, so check what applies to your business.',
  },
];

export default function ContractorWebsiteGuidePage() {
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
                <span>Contractor Website Guide</span>
              </nav>
              <span className="eyebrow">Guide</span>
              <h1>What Should a Contractor Website Include?</h1>
              <p className="page-hero-sub">
                A contractor website should include clear service pages, a service-area section,
                mobile click-to-call and estimate request forms, customer reviews, completed
                project photos, and basic local SEO structure. Below is a full breakdown of what
                makes a contractor website effective.
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
              <p>In this guide</p>
              <ol>
                <li><a href="#service-pages">Service pages</a></li>
                <li><a href="#service-area">Service-area &amp; local structure</a></li>
                <li><a href="#lead-generation">Lead-generation elements</a></li>
                <li><a href="#trust-signals">Trust signals</a></li>
                <li><a href="#mobile-design">Mobile-first design</a></li>
                <li><a href="#seo-basics">Basic SEO &amp; schema markup</a></li>
                <li><a href="#mistakes">Common mistakes to avoid</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Article body */}
        <section className="section" style={{ paddingTop: '1rem' }}>
          <div className="container">
            <div className="article-body">

              <h2 id="service-pages">Service pages</h2>
              <p>
                Each core service you offer should have its own clear page or section — for
                example, separate pages for installation, repair and maintenance work rather than
                one vague &quot;services&quot; paragraph. This helps visitors quickly confirm you
                do the specific job they need, and it gives search engines a clear topic to match
                against local searches. Service pages should describe what the work involves, who
                it&apos;s for, and end with a way to get in touch.
              </p>

              <h2 id="service-area">Service-area &amp; local structure</h2>
              <p>
                Homeowners want to know before they call whether you actually work in their town.
                A dedicated service-area section — listing the cities, counties or zip codes you
                cover — removes that uncertainty immediately. For businesses covering several
                distinct regions, individual service-area pages can also support local search
                visibility, since each page can speak directly to that area.
              </p>

              <h2 id="lead-generation">Lead-generation elements</h2>
              <p>
                A contractor website exists to generate calls and estimate requests, so those
                actions need to be easy and visible. A tap-to-call button should stay reachable on
                mobile, ideally near the top of every page. A short estimate request form —
                asking only for what you truly need to follow up, such as name, phone and a brief
                project description — lowers the barrier for visitors who would rather not call
                right away.
              </p>

              <h2 id="trust-signals">Trust signals</h2>
              <p>
                Before hiring a contractor, most people look for some evidence that others have
                had a good experience. Customer reviews displayed on the site, photos of completed
                projects, and — where your trade requires it — visible licensing or insurance
                information all help a visitor feel confident enough to reach out. These signals
                work best placed near the sections where someone is deciding whether to contact
                you, not buried on a separate page no one visits.
              </p>

              <h2 id="mobile-design">Mobile-first design</h2>
              <p>
                Most people searching for a contractor do it from their phone, often while dealing
                with an urgent situation. A mobile-first design means the layout, buttons and forms
                are built to work cleanly on a small screen first, rather than shrinking a
                desktop layout down. Fast loading, large tap targets and a call button that stays
                visible while scrolling all matter more on mobile than they do on desktop.
              </p>

              <h2 id="seo-basics">Basic SEO &amp; schema markup</h2>
              <p>
                A contractor website should have clean page titles, descriptive headings and
                structured data (schema markup) that describes your business, services and service
                area to search engines. This is foundational technical work — it supports your
                visibility over time, but no legitimate agency can guarantee a specific ranking or
                position on Google. Basic SEO structure is about giving search engines accurate,
                well-organized information to work with.
              </p>

              <h2 id="mistakes">Common mistakes to avoid</h2>
              <ul>
                <li><strong>No visible phone number or call button.</strong> Visitors shouldn&apos;t have to search for how to reach you.</li>
                <li><strong>A single vague &quot;services&quot; page.</strong> Bundling every service into one paragraph makes it harder for visitors and search engines to understand what you actually do.</li>
                <li><strong>No service-area information.</strong> If it isn&apos;t clear you cover their town, many visitors will leave without asking.</li>
                <li><strong>Slow, image-heavy pages.</strong> A website that loads slowly on mobile loses visitors before they see anything else.</li>
                <li><strong>No estimate form, only a phone number.</strong> Some visitors prefer to submit a short form rather than call — offering both captures more leads.</li>
              </ul>

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
              <h2>Want Feedback on Your Own Website?</h2>
              <p>
                Send us your current website, or tell us about your business if you don&apos;t have
                one yet. We&apos;ll give you honest, no-obligation feedback on what would help you
                generate more leads — or see our{' '}
                <Link href="/en/pricing" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                  pricing
                </Link>{' '}
                for a starting point.
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

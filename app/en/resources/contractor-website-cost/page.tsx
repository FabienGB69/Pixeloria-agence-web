import type { Metadata } from 'next';
import Link from 'next/link';
import { breadcrumbList } from '@/lib/breadcrumb';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'How Much Does a Contractor Website Cost? | Pixeloria',
  description:
    'Pixeloria contractor websites start at $499 one-time, with a $899 option and a $79/month care plan. Here is what actually drives contractor website costs up or down.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/resources/contractor-website-cost',
  },
  openGraph: {
    type: 'article',
    url: 'https://pixeloria.fr/en/resources/contractor-website-cost',
    title: 'How Much Does a Contractor Website Cost? | Pixeloria',
    description:
      'Pixeloria contractor websites start at $499 one-time, with a $899 option and a $79/month care plan. Here is what actually drives contractor website costs up or down.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

const faqs = [
  {
    q: 'Is $499 a realistic price for a contractor website?',
    a: 'It is realistic for a focused, one-page website covering your services, service area, reviews and a contact form. The Pixeloria Starter Website at $499 one-time is built to that scope. Larger, multi-page websites with individual service pages cost more because there is simply more to design and build.',
  },
  {
    q: 'Why do some contractor websites cost so much more than others?',
    a: 'Cost generally scales with the number of pages, how custom the design is, whether individual service and service-area pages are built, and whether ongoing maintenance or local SEO support is included. A basic one-page site and a full multi-page site with technical SEO are different amounts of work.',
  },
  {
    q: 'Do I have to pay a monthly fee to have a contractor website?',
    a: 'No. The Pixeloria one-time packages ($499 or $899) get your website live without any required subscription. The $79/month Website Care & Local Visibility plan is optional and covers hosting, maintenance, content edits and ongoing local visibility support — you can cancel anytime.',
  },
  {
    q: 'What is included in the $79/month plan?',
    a: 'It covers hosting management, security updates, backups, content edits and basic local visibility support, so your site stays online and up to date without you having to manage it yourself.',
  },
];

export default function ContractorWebsiteCostPage() {
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
    { name: 'Contractor Website Cost', url: 'https://pixeloria.fr/en/resources/contractor-website-cost' },
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
                <span>Contractor Website Cost</span>
              </nav>
              <span className="eyebrow">Pricing</span>
              <h1>How Much Does a Contractor Website Cost?</h1>
              <p className="page-hero-sub">
                At Pixeloria, a contractor website costs $499 one-time for a focused one-page
                site, $899 one-time for a multi-page site with individual service pages, plus an
                optional $79/month plan for ongoing care and local visibility support. Actual
                costs across the industry vary based on scope — here is what drives that.
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
                <li><a href="#pixeloria-pricing">Pixeloria&apos;s contractor website pricing</a></li>
                <li><a href="#cost-drivers">What drives cost up or down</a></li>
                <li><a href="#one-time-vs-ongoing">One-time cost vs ongoing cost</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Article body */}
        <section className="section" style={{ paddingTop: '1rem' }}>
          <div className="container">
            <div className="article-body">

              <h2 id="pixeloria-pricing">Pixeloria&apos;s contractor website pricing</h2>
              <p>
                Pixeloria offers two one-time website packages and one optional monthly plan:
              </p>
              <ul>
                <li><strong>Starter Website — $499 one-time.</strong> A focused one-page website with mobile-first design, a click-to-call button and a short estimate form.</li>
                <li><strong>Growth Website — $899 one-time (Most Popular).</strong> A multi-page website with individual service pages, a service-area structure, customer reviews and basic technical SEO.</li>
                <li><strong>Website Care &amp; Local Visibility — $79/month.</strong> An optional add-on covering hosting, maintenance, content edits and local visibility support. Cancel anytime.</li>
              </ul>
              <p>
                See the full{' '}
                <Link href="/en/pricing" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                  pricing page
                </Link>{' '}
                for what is included in each plan.
              </p>

              <h2 id="cost-drivers">What drives cost up or down</h2>
              <p>
                Across the industry, contractor website pricing varies a lot, and the price
                mostly reflects scope rather than a fixed market rate. A few factors tend to move
                the price the most:
              </p>
              <ul>
                <li><strong>Number of pages.</strong> A single page covering your whole business costs less to design and build than a site with a dedicated page for every service and service area.</li>
                <li><strong>How custom the design is.</strong> A site built from a template with your branding applied is faster to produce than a fully custom layout designed around your specific business.</li>
                <li><strong>Lead-generation features.</strong> Estimate forms, click-to-call buttons and booking integrations add development work compared to a purely informational page.</li>
                <li><strong>Ongoing maintenance needs.</strong> A site that needs regular content updates, security monitoring and local SEO upkeep has an ongoing cost on top of the initial build.</li>
                <li><strong>Content you can provide.</strong> Sites that require original photography, copywriting or project documentation to be created from scratch generally take more time than sites where the business already has usable photos and details ready to go.</li>
              </ul>

              <h2 id="one-time-vs-ongoing">One-time cost vs ongoing cost</h2>
              <p>
                It helps to separate the cost of launching a website from the cost of keeping it
                running. The one-time cost covers design, build and launch — this is the $499 or
                $899 payment with Pixeloria. The ongoing cost covers hosting, security updates,
                backups and any content changes after launch. Some agencies bundle this into a
                required monthly contract; Pixeloria keeps it optional and cancel-anytime, so you
                are not locked into ongoing payments to keep the site you already paid for.
              </p>

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
              <h2>Get Clear, Honest Pricing for Your Website</h2>
              <p>
                Tell us about your business and what you need, and we&apos;ll give you honest,
                no-obligation feedback — plus exactly which plan fits your scope.
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

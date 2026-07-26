import type { Metadata } from 'next';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import ContactFormEn from '@/app/en/ContactFormEn';

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions | Pixeloria',
  description:
    'Answers to common questions about website creation, pricing, timelines, SEO and working with Pixeloria. Clear, honest answers — no jargon.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/faq',
    locale: 'en_US',
    siteName: 'Pixeloria',
    title: 'FAQ — Frequently Asked Questions | Pixeloria',
    description: 'Common questions about website creation, pricing, timelines and SEO. Clear, honest answers.',
  },
  alternates: { canonical: 'https://pixeloria.fr/en/faq' },
};

const faqs = [
  {
    q: 'How much does a website cost?',
    a: 'Pixeloria websites start at $499 for a one-page site. Multi-page websites start at $899. Ongoing website care starts at $79/month.',
  },
  {
    q: 'Do I own my website?',
    a: "Yes. You own your website, your content and all your login credentials. Pixeloria helps you build it, but it's entirely yours.",
  },
  {
    q: 'How long does it take?',
    a: 'A one-page website can generally be delivered within five business days after we receive all required content (logo, photos, texts, opening hours). Larger websites may take one to three weeks.',
  },
  {
    q: 'Can you guarantee first position on Google?',
    a: 'No. Anyone who promises a #1 ranking is not being honest with you. What Pixeloria delivers is a clean, well-structured, fast website built on sound SEO foundations — the kind Google rewards over time.',
  },
  {
    q: 'What is included in the Website Care & Local Visibility plan ($79/month)?',
    a: 'Website Care & Local Visibility includes hosting management, technical maintenance, security updates, backups, content edits, service-area updates, conversion checks, basic local SEO improvements and Search Console monitoring, plus a monthly performance summary. Cancel anytime.',
  },
  {
    q: 'Do you work with English-speaking clients outside France?',
    a: 'Yes. All communication, briefs and project handover documents are available in English. Pixeloria works with expats, international business owners and English-speaking brands operating in France or Europe.',
  },
  {
    q: 'Can I update the website myself after launch?',
    a: 'Yes. Depending on the plan, you can request content updates or manage basic changes yourself. The goal is always to keep the site easy to maintain.',
  },
  {
    q: 'What is the difference between a one-time website and ongoing website care?',
    a: 'A one-time website (Starter from $499, Growth from $899) is a one-time payment — your site goes live with no subscription required. Website Care & Local Visibility ($79/month) is an optional plan that keeps your site updated, secure and locally optimized over time. Cancel anytime.',
  },
  {
    q: 'Is a free audit really free?',
    a: 'Yes, completely. No strings attached. You will receive a short, honest assessment of your current website or project brief within 48 hours.',
  },
  {
    q: 'What industries do you work with?',
    a: 'Pixeloria works with contractors, tradespeople, renovation companies, hospitality and concierge businesses, and local shops — essentially any small business that needs a professional online presence.',
  },
  {
    q: 'What happens if I am not happy with the result?',
    a: 'Revisions are included in every project. The goal is for you to be genuinely satisfied with the result. If something is not right, we fix it — simple as that.',
  },
  {
    q: 'Do I need to provide photos and text?',
    a: "It helps, but it's not required. We can work with what you have — basic information about your business, services and location is enough to get started. We will guide you through the content process.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function FaqEnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ClientEffects />
      <HeaderEn />
      <main id="faq">

        {/* ── HERO ── */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <span className="eyebrow">FAQ</span>
              <h1>Frequently asked questions</h1>
              <p className="page-hero-sub">
                Straight answers to the things most people ask before starting a project with Pixeloria.
              </p>
            </div>
          </div>
        </section>

        {/* ── FAQ ACCORDION ── */}
        <section className="section section-tinted faq-section">
          <div className="container">
            <div className="faq-layout">
              <div className="faq-sidebar reveal">
                <span className="faq-badge">FAQ</span>
                <h2>Common questions</h2>
                <p className="faq-sub">
                  No jargon, no sales pitch. Just clear answers to the questions we hear most often.
                </p>
                <div className="faq-reassurance">
                  <p>Got a question we have not covered? Ask directly.</p>
                  <a href="#contact" className="btn btn-primary">Ask a question</a>
                </div>
              </div>

              <div className="faq-accordion reveal">
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
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-layout">
              <div className="contact-text reveal">
                <span className="eyebrow">Still have questions?</span>
                <h2>Let&apos;s talk</h2>
                <p>Send us your question and we will come back to you within 48 hours — clearly and without jargon.</p>
                <div className="contact-reassurance">
                  <p>✓ Free, no-commitment estimate</p>
                  <p>✓ Reply within 48h</p>
                  <p>✓ All communication in English</p>
                </div>
              </div>
              <div className="contact-form-wrap reveal">
                <ContactFormEn />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer locale="en" />
    </>
  );
}

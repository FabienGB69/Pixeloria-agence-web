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
    locale: 'en_GB',
    siteName: 'Pixeloria',
    title: 'FAQ — Frequently Asked Questions | Pixeloria',
    description: 'Common questions about website creation, pricing, timelines and SEO. Clear, honest answers.',
  },
  alternates: { canonical: 'https://pixeloria.fr/en/faq' },
};

const faqs = [
  {
    q: 'How much does a professional website cost?',
    a: 'Pixeloria offers an Artisan Site at €199 inc. VAT — a one-off payment with delivery in 72h. The optional Visibility Option at €49/month adds maintenance, updates and local follow-up. No forced subscription.',
  },
  {
    q: 'Do I own my website?',
    a: "Yes. You own your website, your content and all your login credentials. Pixeloria helps you build it, but it's entirely yours.",
  },
  {
    q: 'How long does it take to build a website?',
    a: 'A straightforward business website is typically ready within a few days to a couple of weeks, depending on the number of pages and how quickly content is approved.',
  },
  {
    q: 'Can you guarantee first position on Google?',
    a: 'No. Anyone who promises a #1 ranking is not being honest with you. What Pixeloria delivers is a clean, well-structured, fast website built on sound SEO foundations — the kind Google rewards over time.',
  },
  {
    q: 'What is included in the Visibility Option at €49/month?',
    a: 'The Visibility Option includes technical maintenance, regular backups, minor corrections, small text/photo/service updates, contact details and opening hours updates, service area updates, mobile display check, progressive local SEO optimisation, and priority support by message. No commitment — cancel at any time.',
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
    q: 'What is the difference between the Artisan Site and the Visibility Option?',
    a: 'The Artisan Site (€199 inc. VAT, delivered in 72h) is a one-off payment — your professional website, live, with no subscription. The Visibility Option (€49 inc. VAT/month) is an optional add-on that keeps your site up to date and grows your local visibility over time.',
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

export default function FaqEnPage() {
  return (
    <>
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
                <p>Send us your question and we will come back to you within 24 hours — clearly and without jargon.</p>
                <div className="contact-reassurance">
                  <p>✓ Free, no-commitment quote</p>
                  <p>✓ Reply within 24h</p>
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
      <Footer />
    </>
  );
}

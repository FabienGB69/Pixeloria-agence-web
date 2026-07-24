import type { Metadata } from 'next';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import ContactFormEn from '@/app/en/ContactFormEn';

export const metadata: Metadata = {
  title: 'About — The Agency Behind Your Website | Pixeloria',
  description:
    'Pixeloria is a web agency specialising in professional websites for tradespeople and micro-businesses. Based in France, working in English.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/about',
    locale: 'en_GB',
    siteName: 'Pixeloria',
    title: 'About — The Agency Behind Your Website | Pixeloria',
    description: 'Pixeloria builds professional websites for tradespeople and micro-businesses. Based in France, working in English.',
  },
  alternates: { canonical: 'https://pixeloria.fr/en/about' },
};

const skills = [
  {
    icon: '🎨',
    title: 'Design & UX',
    description: 'Modern, clear sites built to convert. Every page guides visitors towards getting in touch.',
  },
  {
    icon: '⚡',
    title: 'Performance',
    description: 'Lighthouse > 90, LCP < 2s, fast-loading pages on both mobile and desktop.',
  },
  {
    icon: '📍',
    title: 'Local SEO',
    description: 'Google Business Profile, geographic targeting, local pages and Schema.org structured data.',
  },
  {
    icon: '🔒',
    title: 'Security & maintenance',
    description: 'SSL certificate, regular updates, automatic backups and continuous monitoring.',
  },
  {
    icon: '📊',
    title: 'Tracking & analytics',
    description: 'Google Analytics 4, conversion events, lead and contact form tracking.',
  },
  {
    icon: '✉️',
    title: 'Integrations',
    description: 'Forms connected to your CRM, automated emails, WhatsApp Business, appointment booking.',
  },
];

const values = [
  {
    number: '01',
    title: 'Clarity above all',
    description:
      'A website should not impress — it should be understood. Every word and every button has a clear purpose.',
  },
  {
    number: '02',
    title: 'Concrete results',
    description:
      "We do not build pretty sites. We build sites that generate calls, quote requests and new clients.",
  },
  {
    number: '03',
    title: 'A relationship built on trust',
    description:
      'No jargon, no surprises. Clear pricing, deadlines respected, one single point of contact from start to finish.',
  },
];

export default function AboutEnPage() {
  return (
    <>
      <ClientEffects />
      <HeaderEn />
      <main id="about">

        {/* ── HERO ── */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <span className="eyebrow">About</span>
              <h1>The agency behind your web projects</h1>
              <p className="page-hero-sub">
                Pixeloria helps tradespeople, local retailers and micro-businesses build a serious online presence — without drowning in technical complexity.
              </p>
              <div className="page-hero-actions">
                <a href="#contact" className="btn btn-primary">Discuss my project →</a>
                <Link href="/en/pricing" className="btn btn-ghost">View pricing</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── ENGLISH-SPEAKING CLIENTS ── */}
        <section className="section section-dark" id="english-clients">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Working together</span>
              <h2>Working with English-speaking clients</h2>
              <p className="section-sub">
                Based in France, working in English. If you are an expat, an international business owner or an English-speaking brand operating in France or across Europe — you are in the right place.
              </p>
            </div>

            <div
              className="reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '1.5rem',
                marginTop: '2.5rem',
              }}
            >
              {[
                {
                  icon: '💬',
                  title: 'All communication in English',
                  body: 'Briefs, proposals, feedback rounds and project updates — everything is written and discussed in clear English.',
                },
                {
                  icon: '📄',
                  title: 'English website content',
                  body: 'We build bilingual or English-only sites tailored to your target audience — whether local French customers, international visitors or both.',
                },
                {
                  icon: '🌐',
                  title: 'International SEO',
                  body: 'Whether you want to rank in the UK, France or both, we set up the correct hreflang, market-specific keywords and local search signals.',
                },
                {
                  icon: '🛡️',
                  title: 'No language barrier',
                  body: 'No relying on automated translation or misunderstandings in back-and-forth emails. You get direct, fluent communication throughout.',
                },
              ].map(({ icon, title, body }) => (
                <div key={title} className="why-card">
                  <div className="why-icon" style={{ fontSize: '1.5rem' }}>{icon}</div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR SKILLS ── */}
        <section className="section" id="skills">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Expertise</span>
              <h2>Our technical strengths</h2>
              <p className="section-sub">
                Each website is built using best practices — performance, accessibility, SEO and security from day one.
              </p>
            </div>

            <div className="why-grid reveal">
              {skills.map(({ icon, title, description }) => (
                <div key={title} className="why-card">
                  <div className="why-icon" style={{ fontSize: '1.5rem' }}>{icon}</div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR VALUES ── */}
        <section className="section section-tinted" id="values">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Our values</span>
              <h2>What guides how we work</h2>
            </div>

            <div className="process-steps reveal">
              {values.map(({ number, title, description }) => (
                <div key={number} className="process-step">
                  <div className="process-step-number">{number}</div>
                  <div className="process-step-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-layout">
              <div className="contact-text reveal">
                <span className="eyebrow">Contact</span>
                <h2>Let&apos;s talk about your project</h2>
                <p>Tell us about your business and what you need. We reply within 48h.</p>
                <div className="contact-reassurance">
                  <p>✓ Free, no-commitment quote</p>
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

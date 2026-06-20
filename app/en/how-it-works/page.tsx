import type { Metadata } from 'next';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import ContactFormEn from '@/app/en/ContactFormEn';

export const metadata: Metadata = {
  title: 'How It Works — Website in 4 Simple Steps | Pixeloria',
  description:
    'From first contact to live website in 4 steps. Pixeloria delivers your professional website in 72 hours — design, content, launch.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/how-it-works',
    locale: 'en_GB',
    siteName: 'Pixeloria',
    title: 'How It Works — Website in 4 Simple Steps | Pixeloria',
    description: 'From first contact to live website in 4 steps. Delivered in 72 hours.',
  },
  alternates: { canonical: 'https://pixeloria.fr/en/how-it-works' },
};

const steps = [
  {
    number: '01',
    title: 'Tell us about your project',
    description:
      'Fill in the free quote form. Tell us what you do, your service area, your target customers and any examples of sites you like. No tech knowledge required.',
    detail: 'We reply within 24 hours with a clear proposal and a fixed price — no surprises.',
  },
  {
    number: '02',
    title: 'We design your website',
    description:
      'Once you approve the proposal, we get to work. We create your site using your logo, photos, services and key information.',
    detail: 'We keep you updated at each stage. You can give feedback before we finalise anything.',
  },
  {
    number: '03',
    title: 'You review and approve',
    description:
      'We send you a preview link so you can check every section of your site before it goes live. Revisions are included.',
    detail: 'We make the changes you request until you are fully satisfied.',
  },
  {
    number: '04',
    title: 'Your site goes live',
    description:
      'Once you give the green light, we publish your site on your domain. From that moment, it is live, indexed on Google and ready to receive enquiries.',
    detail: 'We hand over all login credentials. The site belongs to you.',
  },
];

export default function HowItWorksEnPage() {
  return (
    <>
      <ClientEffects />
      <HeaderEn />
      <main id="how-it-works">

        {/* ── HERO ── */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <span className="eyebrow">Process</span>
              <h1>Your website live in 4 steps</h1>
              <p className="page-hero-sub">
                No technical complexity. No lengthy meetings. Just a clear, simple process to get your professional website online — fast.
              </p>
              <div className="page-hero-actions">
                <a href="#contact" className="btn btn-primary">Start my project →</a>
                <Link href="/en/pricing" className="btn btn-ghost">View pricing</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS STEPS ── */}
        <section className="section" id="process">
          <div className="container">
            <div className="process-steps">
              {steps.map((step) => (
                <div key={step.number} className="process-step reveal">
                  <div className="process-step-number">{step.number}</div>
                  <div className="process-step-content">
                    <h2>{step.title}</h2>
                    <p>{step.description}</p>
                    <p className="process-step-detail" style={{ color: 'var(--text-muted)', marginTop: '0.5rem', fontSize: '0.9375rem' }}>
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Timeline</span>
              <h2>How long does it take?</h2>
            </div>
            <div
              className="reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                marginTop: '2.5rem',
              }}
            >
              {[
                { time: 'Day 1', label: 'Brief received', icon: '📋' },
                { time: 'Day 1–2', label: 'Design started', icon: '🎨' },
                { time: 'Day 2–3', label: 'Preview link sent', icon: '🔗' },
                { time: 'Day 3–4', label: 'Site goes live', icon: '🚀' },
              ].map(({ time, label, icon }) => (
                <div
                  key={time}
                  className="why-card"
                  style={{ textAlign: 'center' }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{icon}</div>
                  <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.25rem' }}>{time}</strong>
                  <p style={{ margin: 0 }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── YOUR WEBSITE SHOULD WORK FOR YOU ── */}
        <section className="section">
          <div className="container">
            <div className="siteworks-layout">
              <div className="siteworks-text reveal">
                <span className="eyebrow">Our philosophy</span>
                <h2>A website that works for your business</h2>
                <p className="siteworks-intro">
                  A good website does not just present your business. It should reassure your prospects, showcase your work, clearly explain your services, work perfectly on mobile, make it easy to get in touch and support your local visibility on Google.
                </p>
                <p>
                  At Pixeloria, every page is designed with one clear goal: help your visitors understand your offer and take action.
                </p>
                <Link href="/en/pricing" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
                  View pricing
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <ul className="siteworks-pillars reveal reveal-right">
                {[
                  'Reassure your prospects',
                  'Showcase your services clearly',
                  'Highlight your work and projects',
                  'Make it easy to get in touch',
                  'Work perfectly on mobile',
                  'Support your local Google visibility',
                ].map((item) => (
                  <li key={item} className="siteworks-pillar">
                    <span className="siteworks-pillar-check" aria-hidden="true">
                      <svg viewBox="0 0 20 20" fill="none">
                        <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-layout">
              <div className="contact-text reveal">
                <span className="eyebrow">Ready to start?</span>
                <h2>Let&apos;s get your site live</h2>
                <p>Tell us about your business. We reply within 24h with a fixed-price proposal.</p>
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

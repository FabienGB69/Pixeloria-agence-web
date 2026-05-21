import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import ContactFormEn from './ContactFormEn';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://pixeloria.fr/#organization',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
      logo: 'https://pixeloria.fr/assets/pixeloria-logo.svg',
      description:
        'Professional website design and redesign for small businesses, contractors and local brands. Based in France, working with English-speaking clients across Europe.',
      telephone: '+33786125313',
      email: 'contact@pixeloria.fr',
      areaServed: ['France', 'United Kingdom', 'Europe'],
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://pixeloria.fr/en#website',
      url: 'https://pixeloria.fr/en',
      name: 'Pixeloria — Website Design for Small Businesses',
      inLanguage: 'en',
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://pixeloria.fr/#localbusiness',
      name: 'Pixeloria',
      url: 'https://pixeloria.fr',
      image: 'https://pixeloria.fr/og/pixeloria-og-image.png',
      telephone: '+33786125313',
      email: 'contact@pixeloria.fr',
      priceRange: '€€',
      description:
        'Website creation and redesign for small businesses, tradespeople and local brands. Fixed pricing, no surprises.',
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a professional website cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pixeloria offers two options: a one-off creation from €490, or a monthly plan from €89/month that includes creation, maintenance and basic SEO — no long-term contract required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I own my website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. You own your website, your content and all your accesses. Pixeloria helps you build it, but it's entirely yours.",
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to build a website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A straightforward business website is typically ready within a few days to a couple of weeks, depending on the number of pages and how quickly content is approved.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you guarantee first position on Google?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Anyone who promises a #1 ranking is not being honest with you. What Pixeloria delivers is a clean, well-structured, fast website built on sound SEO foundations — the kind Google rewards over time.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is included in the €89/month plan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Care plan at €89/month includes website creation or redesign, ongoing maintenance, basic SEO and priority support. There is no long-term commitment.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with English-speaking clients outside France?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All communication, briefs and project handover documents are available in English. Pixeloria works with expats, international business owners and English-speaking brands operating in France or Europe.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I update the website myself after launch?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Depending on the plan, you can request content updates or manage basic changes yourself. The goal is always to keep the site easy to maintain.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between the Essential and Care plans?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Essential (€490 one-off) is a fixed-price build with no ongoing subscription. Care (€89/month) adds ongoing maintenance, SEO and support in a flexible monthly plan.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is a free audit really free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, completely. No strings attached. You will receive a short, honest assessment of your current website or project brief within 48 hours.',
          },
        },
        {
          '@type': 'Question',
          name: 'What industries do you work with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pixeloria works with contractors, tradespeople, renovation companies, hospitality and concierge businesses, estate agents, local shops and freelancers. Essentially any small business that needs a professional online presence.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if I am not happy with the result?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Revisions are included in every project. The goal is for you to be genuinely satisfied with the result. If something is not right, we fix it — simple as that.',
          },
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: 'How much does a professional website cost?',
    a: 'Pixeloria offers two options: a one-off creation from €490, or a monthly plan from €89/month that includes creation, maintenance and basic SEO — no long-term contract required.',
  },
  {
    q: 'Do I own my website?',
    a: "Yes. You own your website, your content and all your accesses. Pixeloria helps you build it, but it's entirely yours.",
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
    q: 'What is included in the €89/month plan?',
    a: 'The Care plan at €89/month includes website creation or redesign, ongoing maintenance, basic SEO and priority support. There is no long-term commitment.',
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
    q: 'What is the difference between the Essential and Care plans?',
    a: 'Essential (€490 one-off) is a fixed-price build with no ongoing subscription. Care (€89/month) adds ongoing maintenance, SEO and support in a flexible monthly plan.',
  },
  {
    q: 'Is a free audit really free?',
    a: 'Yes, completely. No strings attached. You will receive a short, honest assessment of your current website or project brief within 48 hours.',
  },
  {
    q: 'What industries do you work with?',
    a: 'Pixeloria works with contractors, tradespeople, renovation companies, hospitality and concierge businesses, estate agents, local shops and freelancers. Essentially any small business that needs a professional online presence.',
  },
  {
    q: 'What happens if I am not happy with the result?',
    a: 'Revisions are included in every project. The goal is for you to be genuinely satisfied with the result. If something is not right, we fix it — simple as that.',
  },
];

export default function EnHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientEffects />
      <HeaderEn />
      <main id="home">

        {/* ── HERO ── */}
        <section className="page-hero section" id="hero">
          <div className="container">
            <div className="page-hero-inner">
              <span className="eyebrow reveal">Website Design · Small Businesses</span>
              <h1 className="reveal">
                Professional websites for small businesses, contractors and local&nbsp;brands.
              </h1>
              <p className="page-hero-sub reveal">
                Fixed pricing, no jargon, no surprises. A website built the way your business actually works — clear, fast and built to bring in customers.
              </p>
              <div className="page-hero-actions reveal">
                <a href="#contact" className="btn btn-primary btn-lg">
                  Get a free audit
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="btn-icon">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#packages" className="btn btn-outline-light btn-lg">
                  View packages
                </a>
              </div>

              <div className="hero-trust reveal" style={{ marginTop: '2.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div className="trust-item">
                  <strong>48h</strong>
                  <span>first response</span>
                </div>
                <div className="trust-item">
                  <strong>€490</strong>
                  <span>starting price</span>
                </div>
                <div className="trust-item">
                  <strong>No</strong>
                  <span>long-term lock-in</span>
                </div>
                <div className="trust-item">
                  <strong>✓</strong>
                  <span>English-speaking team</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PACKAGES ── */}
        <section className="section section-dark" id="packages">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Pricing</span>
              <h2>Clear packages, no hidden fees</h2>
              <p className="section-sub">
                Choose between a one-off fixed price or a flexible monthly plan. Either way, you know exactly what you are paying for before we start.
              </p>
            </div>

            <div className="pricing-cards pricing-cards--three">

              {/* Essential */}
              <div className="pricing-card reveal">
                <p className="pricing-label">Essential</p>
                <p className="pricing-price">
                  €490<span> one-off</span>
                </p>
                <ul>
                  <li>Up to 5 pages</li>
                  <li>Mobile-friendly design</li>
                  <li>Contact form</li>
                  <li>Basic on-page SEO</li>
                  <li>Fast loading</li>
                  <li>1 round of revisions</li>
                  <li>You own everything</li>
                </ul>
                <a href="#contact" className="btn btn-outline-light" style={{ width: '100%', textAlign: 'center' }}>
                  Request a quote
                </a>
                <p className="pricing-note">Best for: brand-new businesses needing a clean, fast website to get online quickly.</p>
              </div>

              {/* Care — featured */}
              <div className="pricing-card pricing-card--featured reveal">
                <div className="pricing-badge">Most popular</div>
                <p className="pricing-label">Care</p>
                <p className="pricing-price">
                  €89<span>/month</span>
                </p>
                <ul>
                  <li>Website creation or redesign</li>
                  <li>Ongoing maintenance</li>
                  <li>Monthly SEO basics</li>
                  <li>Priority support</li>
                  <li>Content updates on request</li>
                  <li>Performance monitoring</li>
                  <li>No long-term commitment</li>
                </ul>
                <a href="#contact" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Start with Care
                </a>
                <p className="pricing-note">Best for: established businesses that want a reliable site and ongoing support without hiring internally.</p>
              </div>

              {/* Growth */}
              <div className="pricing-card reveal">
                <p className="pricing-label">Growth</p>
                <p className="pricing-price">
                  €159<span>/month</span>
                </p>
                <ul>
                  <li>Everything in Care</li>
                  <li>Local SEO strategy</li>
                  <li>Landing pages</li>
                  <li>Monthly performance report</li>
                  <li>Google Business optimisation</li>
                  <li>Conversion copywriting</li>
                  <li>Dedicated account manager</li>
                </ul>
                <a href="#contact" className="btn btn-outline-light" style={{ width: '100%', textAlign: 'center' }}>
                  Let&apos;s talk growth
                </a>
                <p className="pricing-note">Best for: businesses ready to actively grow their customer base through search and local visibility.</p>
              </div>

            </div>

            <p className="pricing-disclaimer reveal">
              Not sure which plan fits? <a href="#contact">Get a free audit</a> — we will give you an honest recommendation with no obligation.
            </p>
          </div>
        </section>

        {/* ── WHY PIXELORIA ── */}
        <section className="section" id="why">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Why Pixeloria</span>
              <h2>A website that actually works for your business</h2>
              <p className="section-sub">
                Not just a pretty page. A site designed to be found, trusted and to convert visitors into customers.
              </p>
            </div>

            <div className="why-grid">
              <div className="why-card reveal">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Fixed, transparent pricing</h3>
                <p>What we quote is what you pay. No scope creep, no surprise invoices at the end of the project.</p>
              </div>

              <div className="why-card reveal">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>Fast turnaround</h3>
                <p>Most websites go live within a few days to a couple of weeks. You will see progress updates throughout.</p>
              </div>

              <div className="why-card reveal">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h3>Local SEO that matters</h3>
                <p>We optimise for the searches your customers are actually making — local, specific and ready to buy.</p>
              </div>

              <div className="why-card reveal">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>You always own your site</h3>
                <p>All files, logins and content belong to you from day one. Walk away any time — your site comes with you.</p>
              </div>

              <div className="why-card reveal">
                <div className="why-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Direct communication</h3>
                <p>No account managers passing messages around. You speak directly with the person building your site.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHO WE WORK WITH ── */}
        <section className="section section-tinted" id="who">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Who we work with</span>
              <h2>Built for businesses like yours</h2>
              <p className="section-sub">
                Small teams, sole traders, local services. We know what works for each type of business.
              </p>
            </div>

            <div
              className="reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.25rem',
                marginTop: '2.5rem',
              }}
            >
              {[
                { label: 'Contractors & Tradespeople', desc: 'Electricians, plumbers, roofers — get found when local customers search.', href: '/en/examples/contractors' },
                { label: 'Renovation Companies', desc: 'Showcase your projects, build trust and convert enquiries into quotes.', href: '/en/examples/renovation-companies' },
                { label: 'Hospitality & Concierge', desc: 'Holiday lets, B&Bs and concierge services that need to inspire and convert.', href: '/en/examples/hospitality-concierge' },
                { label: 'Estate Agents & Property', desc: 'Present your listings and services with a professional, trustworthy presence.', href: '/en/examples/real-estate' },
                { label: 'Local Shops & Retail', desc: 'Bring footfall online — showcase products, opening hours and special offers.', href: '/en/examples/local-shops' },
                { label: 'Freelancers & Consultants', desc: 'Position yourself as the expert clients want to hire — not just another profile.', href: '/en/examples/freelancers-consultants' },
              ].map(({ label, desc, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="why-card"
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <h3 style={{ color: 'var(--text)', marginBottom: '0.5rem' }}>{label}</h3>
                  <p>{desc}</p>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      marginTop: '0.75rem',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: 'var(--primary)',
                    }}
                  >
                    See examples
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="section" id="process">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">How it works</span>
              <h2>From first message to live website</h2>
              <p className="section-sub">Four straightforward steps, no complexity.</p>
            </div>

            <div className="process-grid">
              <div className="process-card reveal">
                <div className="process-num">01</div>
                <div className="process-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>You reach out</h3>
                <p>Fill in the form or send an email. Tell us about your business, your goals and what you need. We respond within 48 hours.</p>
              </div>

              <div className="process-card reveal">
                <div className="process-num">02</div>
                <div className="process-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>We agree on a clear plan</h3>
                <p>A short brief, a fixed quote, a timeline. Everything in writing before any work begins. No ambiguity.</p>
              </div>

              <div className="process-card reveal">
                <div className="process-num">03</div>
                <div className="process-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                    <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3>We build and show you</h3>
                <p>You see your site take shape and give feedback. Revisions are included. We do not disappear mid-project.</p>
              </div>

              <div className="process-card reveal">
                <div className="process-num">04</div>
                <div className="process-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Your site goes live</h3>
                <p>We handle deployment, final checks and hand everything over to you. You are in control from day one.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── ENGLISH-SPEAKING CLIENTS REASSURANCE ── */}
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
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="24" height="24">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  title: 'All communication in English',
                  body: 'Briefs, proposals, feedback rounds and project updates — everything is written and discussed in clear English.',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="24" height="24">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  title: 'English website content',
                  body: 'We build bilingual or English-only sites tailored to your target audience — whether local French customers, international visitors or both.',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="24" height="24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ),
                  title: 'International SEO',
                  body: 'Whether you want to rank in the UK, France or both, we set up the correct hreflang, market-specific keywords and local search signals.',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="24" height="24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ),
                  title: 'No language barrier',
                  body: 'No relying on automated translation or misunderstandings in back-and-forth emails. You get direct, fluent communication throughout.',
                },
              ].map(({ icon, title, body }) => (
                <div key={title} className="why-card">
                  <div className="why-icon">{icon}</div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FREE AUDIT CTA ── */}
        <section className="section" id="audit">
          <div className="container">
            <div
              className="reveal"
              style={{
                background: 'linear-gradient(135deg, rgba(122,92,255,0.10) 0%, rgba(0,209,255,0.06) 100%)',
                border: '1px solid rgba(122,92,255,0.20)',
                borderRadius: 'var(--radius)',
                padding: '3rem 2.5rem',
                textAlign: 'center',
                maxWidth: '680px',
                margin: '0 auto',
              }}
            >
              <span className="eyebrow" style={{ justifyContent: 'center' }}>Free, no obligation</span>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', margin: '0.75rem 0 1rem' }}>
                Get a free audit of your website or project
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                Not sure where to start? Send us your current site or a quick description of your business. We will come back within 48 hours with a short, honest assessment — what is working, what is not and what we would recommend.
              </p>
              <a href="#contact" className="btn btn-primary btn-lg">
                Request my free audit
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="btn-icon">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="section section-tinted faq-section" id="faq">
          <div className="container">
            <div className="faq-layout">
              <div className="faq-sidebar reveal">
                <span className="faq-badge">FAQ</span>
                <h2>Common questions</h2>
                <p className="faq-sub">
                  Straight answers to the things most people ask before starting a project with Pixeloria.
                </p>
                <div className="faq-reassurance">
                  <p>
                    Got a question we haven&apos;t covered? Ask directly — no jargon, no sales pitch.
                  </p>
                  <a href="#contact" className="btn btn-primary">
                    Ask a question
                  </a>
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
        <section className="section section-dark" id="contact">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <span className="eyebrow reveal">Get in touch</span>
                <h2 className="reveal">Tell us about your project</h2>
                <p className="reveal">
                  Fill in the form and we will come back to you within 48 hours with a clear first recommendation — no sales call, no obligation.
                </p>

                <div className="contact-channels reveal">
                  <a href="mailto:contact@pixeloria.fr" className="channel-item">
                    <span className="channel-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <strong>Email</strong>
                      <span>contact@pixeloria.fr</span>
                    </div>
                  </a>
                </div>

                <p className="contact-availability reveal">
                  <span className="avail-dot" aria-hidden="true" />
                  Available — usually respond within 48h
                </p>
              </div>

              <div className="contact-form-wrapper reveal">
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

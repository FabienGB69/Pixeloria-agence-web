import Image from 'next/image';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import LaunchBannerEn from '@/components/ui/LaunchBannerEn';
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
            text: "Yes. You own your website, your content and all your login credentials. Pixeloria helps you build it, but it's entirely yours.",
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

const comparisonRows: { feature: string; essential: string; care: string; growth: string }[] = [
  { feature: 'Website creation or redesign', essential: 'Yes', care: 'Yes', growth: 'Yes' },
  { feature: 'Pages included', essential: 'Up to 3', care: 'Up to 5', growth: 'Up to 5' },
  { feature: 'Responsive design', essential: 'Yes', care: 'Yes', growth: 'Yes' },
  { feature: 'Contact form', essential: 'Yes', care: 'Yes', growth: 'Yes' },
  { feature: 'Direct call button', essential: 'Yes', care: 'Yes', growth: 'Yes' },
  { feature: 'WhatsApp button', essential: 'Option', care: 'Yes', growth: 'Yes' },
  { feature: 'Ongoing maintenance', essential: 'No', care: 'Yes', growth: 'Yes' },
  { feature: 'Backups', essential: 'No', care: 'Yes', growth: 'Yes' },
  { feature: 'Monthly minor updates', essential: 'No', care: 'Yes', growth: 'Yes' },
  { feature: 'Basic local SEO', essential: 'No', care: 'Yes', growth: 'Yes' },
  { feature: 'Advanced local SEO', essential: 'No', care: 'No', growth: 'Yes' },
  { feature: 'Google Business Profile optimisation', essential: 'No', care: 'No', growth: 'Yes' },
  { feature: 'Monthly content article', essential: 'No', care: 'No', growth: 'Yes' },
  { feature: 'Monthly performance report', essential: 'No', care: 'No', growth: 'Yes' },
];

function CompCell({ value }: { value: string }) {
  const isYes = value === 'Yes';
  const isNo = value === 'No';
  return (
    <td className={`ctable-cell${isYes ? ' ctable-cell--yes' : isNo ? ' ctable-cell--no' : ''}`}>
      {isYes ? (
        <svg viewBox="0 0 16 16" fill="none" aria-label="Yes">
          <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : isNo ? (
        <svg viewBox="0 0 16 16" fill="none" aria-label="No">
          <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) : (
        <span>{value}</span>
      )}
    </td>
  );
}

type PortfolioProject = {
  type: string;
  year: string;
  client: string;
  sector: string;
  slug: string;
  url: string;
  summary: string;
  bullets: string[];
  beforeImage?: string;
};

const portfolioProjects: PortfolioProject[] = [
  {
    type: 'Redesign',
    year: '2026',
    client: 'Escalee & Goûts',
    sector: 'CONCIERGE / TOURISM',
    slug: 'escalee-gouts',
    url: 'https://www.escaleetgouts.fr/',
    summary: 'Full redesign of a concierge services website for a premium, high-end experience.',
    bullets: [
      'Premium conversion-focused design',
      'Mobile experience optimised for easy contact',
      'SEO structure rebuilt for better local visibility',
      'Local landing pages',
    ],
    beforeImage: '/assets/portfolio/escalee-avant.webp',
  },
  {
    type: 'Redesign',
    year: '2026',
    client: 'Lenora Conciergerie',
    sector: 'CONCIERGE SERVICES',
    slug: 'lenora-conciergerie',
    url: 'https://lenora-conciergerie.vercel.app/',
    summary: 'Modernisation of a concierge website to strengthen credibility and increase enquiries.',
    bullets: [
      'Clean, professional visual identity',
      'Simplified contact journey to reduce friction',
      'Mobile experience built for easy contact',
      'Loading time optimised',
    ],
    beforeImage: '/assets/portfolio/lenora-avant.webp',
  },
  {
    type: 'Full creation',
    year: '2026',
    client: 'Content by Denise',
    sector: 'COPYWRITING & CONTENT',
    slug: 'content-by-denise',
    url: 'https://contentbydenise.vercel.app/',
    summary: 'Professional portfolio created for a freelance copywriter.',
    bullets: [
      'Unique, memorable branding',
      'Content portfolio showcased clearly',
      'Lead-oriented calls to action',
      'SEO optimised from launch',
    ],
  },
  {
    type: 'Full creation',
    year: '2026',
    client: 'Qit Concierge',
    sector: 'SHORT-TERM RENTAL CONCIERGE',
    slug: 'qit-concierge',
    url: 'https://qitconcierge.fr',
    summary: 'Complete website creation for a concierge specialising in short-term rental management.',
    bullets: [
      'Professional design aimed at property owners',
      'Clear presentation of property management services',
      'Simplified contact journey to generate leads',
      'Local SEO foundations from day one',
    ],
  },
];

const trustPoints = [
  {
    title: 'Single point of contact',
    desc: 'You communicate directly with the person who understands your needs and drives your project.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Clear packages',
    desc: 'You know exactly what is included, what is not, and which plan fits your situation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Professional design',
    desc: 'Your site should inspire trust within the first few seconds — on desktop and mobile alike.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 22h8M12 18v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Business understanding',
    desc: 'Pixeloria understands the constraints of small businesses: limited time, a need for clarity and a controlled budget.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21V9l9-6 9 6v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="14" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
];

const auditMiniCards = [
  { title: 'Message clarity', desc: 'Is your offer understood within a few seconds?' },
  { title: 'Mobile readability', desc: 'Does your site inspire trust on a smartphone?' },
  { title: 'Calls to action', desc: 'Do your visitors know what to do next?' },
  { title: 'Local SEO', desc: 'Is your business understandable to Google?' },
];

export default function EnHomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ClientEffects />
      <LaunchBannerEn />
      <HeaderEn />
      <main id="home">

        {/* ── HERO ── */}
        <section className="hero section" id="hero">
          <div className="container hero-inner">

            <div className="hero-text">
              <div className="hero-badge">
                <span className="badge-dot"></span>
                Website design for small businesses &amp; tradespeople
              </div>

              <h1>
                Professional websites for{' '}
                <em className="gradient-text">small businesses, contractors and local&nbsp;brands.</em>
              </h1>

              <p className="hero-sub">
                A professional, clear and effective website to reassure your prospects, improve your local visibility and generate more customer enquiries.
              </p>

              <p className="hero-reassurance">
                No large upfront budget. Simple packages. Clear support. Maintenance included on your chosen plan.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">
                  <span>Get a free audit</span>
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#packages" className="btn btn-ghost">
                  View packages
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              <ul className="hero-microbene">
                <li>
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Professional business website
                </li>
                <li>
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Controlled budget
                </li>
                <li>
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Local SEO included on eligible plans
                </li>
              </ul>

              <div className="hero-metrics">
                <div className="metric">
                  <strong className="metric-value">€490</strong>
                  <span>starting price · inc. VAT</span>
                </div>
                <div className="metric-divider" aria-hidden="true"></div>
                <div className="metric">
                  <strong className="metric-value">€89</strong>
                  <span>/ month · monthly plan</span>
                </div>
                <div className="metric-divider" aria-hidden="true"></div>
                <div className="metric">
                  <strong className="metric-value">48h</strong>
                  <span>audit response time</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-card glass-card">
                <div className="hero-card-header">
                  <span className="chip">Your site online</span>
                  <div className="traffic-lights" aria-hidden="true">
                    <span></span><span></span><span></span>
                  </div>
                </div>
                <h2>Serenity Website</h2>
                <p>Custom design · Local SEO · Responsive design</p>

                <ul className="feature-list">
                  <li>
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    Up to 5 custom pages
                  </li>
                  <li>
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    Basic local SEO included
                  </li>
                  <li>
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    Hosting + domain included
                  </li>
                  <li>
                    <svg viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                    WhatsApp support within 24h
                  </li>
                </ul>

                <div className="mini-chart" aria-hidden="true">
                  <div className="chart-bar" style={{ ['--h' as string]: '30%' }}></div>
                  <div className="chart-bar" style={{ ['--h' as string]: '45%' }}></div>
                  <div className="chart-bar" style={{ ['--h' as string]: '55%' }}></div>
                  <div className="chart-bar" style={{ ['--h' as string]: '70%' }}></div>
                  <div className="chart-bar" style={{ ['--h' as string]: '82%' }}></div>
                  <div className="chart-bar" style={{ ['--h' as string]: '95%' }} data-active></div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="float-badge float-badge-1" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M10 2l2.4 5 5.6.8-4 3.9.9 5.5L10 14.7l-5 2.5.9-5.5L2 7.8 7.6 7z" fill="currentColor" />
                </svg>
                100% satisfaction
              </div>
              <div className="float-badge float-badge-2" aria-hidden="true">
                <svg viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
                Delivered in 5–10 days
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="scroll-hint" aria-hidden="true">
            <span>Scroll</span>
            <div className="scroll-line"></div>
          </div>
        </section>

        {/* ── INTRO ── */}
        <section className="section-intro section">
          <div className="container">
            <div className="intro-content reveal">
              <p className="intro-lead">
                Pixeloria creates and redesigns professional showcase websites for small businesses, contractors and local companies that want to improve their image, be found on Google and receive more customer enquiries.
              </p>
              <p className="intro-body">
                Every site is designed to be clear, fast, mobile-friendly and tailored to the real needs of a small business: presenting your services, reassuring your prospects and making it easy to get in touch.
              </p>
            </div>
          </div>
        </section>

        {/* ── PACKAGES ── */}
        <section className="section" id="packages">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Our packages</span>
              <h2>Clear packages, no hidden fees</h2>
              <p className="section-sub">
                Choose between a one-off fixed price or a flexible monthly plan. Either way, you know exactly what you are paying for before we start.
              </p>
            </div>

            <div className="pricing-cards pricing-cards--three">

              {/* Essential */}
              <div className="pricing-card reveal">
                <p className="pricing-label">Essential</p>
                <p className="pricing-price">€490 <span>inc. VAT</span></p>
                <p className="pricing-sublabel">One-off payment — no subscription</p>
                <p className="pricing-accroche">
                  For businesses that want a clean, professional website delivered turnkey.
                </p>
                <p className="pricing-list-title">Included:</p>
                <ul>
                  <li>Website creation or redesign</li>
                  <li>Up to 3 pages</li>
                  <li>Responsive design (mobile, tablet, desktop)</li>
                  <li>Contact form</li>
                  <li>Direct call button</li>
                  <li>Site launch</li>
                  <li>Basic technical optimisation</li>
                  <li>Onboarding support</li>
                </ul>
                <p className="pricing-list-title pricing-list-title--excluded">Not included:</p>
                <ul className="pricing-excluded">
                  <li>Ongoing maintenance</li>
                  <li>Monthly SEO</li>
                  <li>Post-delivery edits</li>
                </ul>
                <p className="pricing-note">Ideal if you want a professional online presence without a monthly subscription.</p>
                <a href="#contact" className="btn btn-secondary">
                  Choose Essential →
                </a>
              </div>

              {/* Care — featured */}
              <div className="pricing-card pricing-card--featured reveal">
                <span className="pricing-badge">Recommended</span>
                <p className="pricing-label">Care</p>
                <p className="pricing-price">€89 <span>inc. VAT / month</span></p>
                <p className="pricing-sublabel">Recommended commitment: 12 months</p>
                <p className="pricing-accroche">
                  Your site created, maintained and optimised for basic local SEO — without a large upfront investment.
                </p>
                <p className="pricing-list-title">Included:</p>
                <ul>
                  <li>Website creation or redesign</li>
                  <li>Up to 5 pages</li>
                  <li>Responsive design</li>
                  <li>Contact form</li>
                  <li>Direct call button</li>
                  <li>WhatsApp button if needed</li>
                  <li>Google reviews integration</li>
                  <li>Work gallery</li>
                  <li>Technical maintenance included</li>
                  <li>Backups &amp; security</li>
                  <li>Monthly minor updates</li>
                  <li>Basic local SEO included</li>
                  <li>Google indexing</li>
                </ul>
                <p className="pricing-note">Ideal for businesses that want a professional, well-maintained website with a predictable monthly budget.</p>
                <a href="#contact" className="btn btn-primary">
                  Choose Care →
                </a>
              </div>

              {/* Growth */}
              <div className="pricing-card reveal">
                <span className="pricing-badge pricing-badge--alt">Most complete</span>
                <p className="pricing-label">Growth</p>
                <p className="pricing-price">€159 <span>inc. VAT / month</span></p>
                <p className="pricing-sublabel">Recommended commitment: 12 months</p>
                <p className="pricing-accroche">
                  For businesses that want to grow their local visibility with a site, monthly support and a content strategy.
                </p>
                <p className="pricing-list-title">Everything in Care, plus:</p>
                <ul>
                  <li>Advanced local SEO</li>
                  <li>Google Business Profile optimisation</li>
                  <li>Google Search Console monitoring</li>
                  <li>1 optimised article or page per month</li>
                  <li>Existing page optimisation</li>
                  <li>Simple monthly report</li>
                  <li>Advice to improve enquiries</li>
                  <li>Local visibility support</li>
                </ul>
                <p className="pricing-note">Ideal for small businesses ready to make their website a real driver of local visibility and lead generation.</p>
                <a href="#contact" className="btn btn-secondary">
                  Let&apos;s talk growth →
                </a>
              </div>

            </div>

            <p className="pricing-disclaimer reveal">
              All prices include VAT &middot; <a href="#contact">Contact us</a> for a free personalised quote.
            </p>
          </div>
        </section>

        {/* ── COMPARISON TABLE ── */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Compare</span>
              <h2>Compare packages</h2>
              <p className="section-sub">Choose the plan that fits your situation at a glance.</p>
            </div>

            <div className="ctable-wrap reveal">
              <table className="ctable">
                <thead>
                  <tr>
                    <th className="ctable-feature-col">Feature</th>
                    <th>Essential<br /><span className="ctable-price">€490 inc. VAT</span></th>
                    <th>Care<br /><span className="ctable-price">€89/month</span></th>
                    <th className="ctable-th--highlight">Growth<br /><span className="ctable-price">€159/month</span></th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature}>
                      <td className="ctable-feature">{row.feature}</td>
                      <CompCell value={row.essential} />
                      <CompCell value={row.care} />
                      <CompCell value={row.growth} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="ctable-cta reveal">
              <a href="#contact" className="btn btn-primary">
                Get a free audit
                <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── WHY PIXELORIA ── */}
        <section className="section" id="why">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Why Pixeloria</span>
              <h2>A website that actually works for your business</h2>
              <p className="section-sub">
                Not just a pretty page. A site designed to be found, earn trust and convert visitors into customers.
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

        {/* ── SITE WORKS ── */}
        <section id="site-works" className="section section-tinted">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Our philosophy</span>
              <h2>Your website should work for you</h2>
            </div>

            <div className="siteworks-layout">
              <div className="siteworks-text reveal">
                <p className="siteworks-intro">
                  A good website does not just present your business. It should reassure your prospects, showcase your work, clearly explain your services, work perfectly on mobile, make it easy to get in touch and support your local visibility on Google.
                </p>
                <p>
                  At Pixeloria, every page is designed with one clear goal: help your visitors understand your offer and take action.
                </p>
                <a href="#packages" className="btn btn-primary" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
                  View packages
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
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

        {/* ── WHO WE WORK WITH ── */}
        <section className="section" id="who">
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

        {/* ── FREE AUDIT PREMIUM ── */}
        <section id="audit-gratuit" className="audit-premium reveal">
          <div className="audit-blob audit-blob--1" aria-hidden="true" />
          <div className="audit-blob audit-blob--2" aria-hidden="true" />

          <div className="audit-premium-card">
            <div>
              <span className="audit-premium-badge">Free audit</span>

              <h2 className="audit-premium-title">
                Get a clear audit of your website
              </h2>

              <p className="audit-premium-desc">
                Already have a site but not generating enough enquiries? Pixeloria analyses your online presence and gives you concrete recommendations to improve clarity, trust and conversion.
              </p>

              <div className="audit-mini-cards">
                {auditMiniCards.map((card) => (
                  <div key={card.title} className="audit-mini-card">
                    <strong>{card.title}</strong>
                    <p>{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="audit-cta-panel">
              <div className="audit-cta-inner">
                <p className="audit-cta-label">Free mini-audit</p>

                <h3 className="audit-cta-title">
                  Get 3 to 5 concrete improvement ideas
                </h3>

                <p className="audit-cta-desc">
                  A simple, readable and actionable first review to identify what may be holding back your enquiries.
                </p>

                <ul className="audit-cta-list">
                  <li>Quick analysis of your homepage</li>
                  <li>Visible friction points</li>
                  <li>Simple recommendations to prioritise</li>
                </ul>

                <a href="#contact" className="audit-cta-btn">
                  Request my free audit
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                <p className="audit-cta-reassurance">
                  A quick, clear first recommendation tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── MARKETING & SEO ── */}
        <section id="marketing" className="section">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Marketing &amp; Visibility</span>
              <h2>Copywriting &amp; SEO — your voice, your visibility</h2>
              <p className="section-intro">
                A great website with no visitors is a shopfront in a desert. We align compelling copywriting and technical SEO so your site <em>attracts</em>,{' '}
                <em>convinces</em> and <em>converts</em> — durably.
              </p>
            </div>

            <div className="marketing-grid">
              {/* Copywriting column */}
              <div className="marketing-pillar reveal">
                <div className="marketing-pillar-header">
                  <div className="marketing-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                    </svg>
                  </div>
                  <h3>Copywriting</h3>
                </div>
                <p>Words that sell. We write conversion-focused copy that speaks directly to your ideal customers.</p>
                <ul className="marketing-features">
                  <li>
                    <span className="feature-dot" aria-hidden="true"></span>
                    <div>
                      <strong>Sales pages &amp; landing pages</strong>
                      <span>Headlines, storytelling, irresistible CTAs</span>
                    </div>
                  </li>
                  <li>
                    <span className="feature-dot" aria-hidden="true"></span>
                    <div>
                      <strong>Tone of voice &amp; brand messaging</strong>
                      <span>Editorial guidelines, positioning, tagline</span>
                    </div>
                  </li>
                  <li>
                    <span className="feature-dot" aria-hidden="true"></span>
                    <div>
                      <strong>Email &amp; automated sequences</strong>
                      <span>Nurturing, onboarding, follow-ups</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* SEO column */}
              <div className="marketing-pillar reveal">
                <div className="marketing-pillar-header">
                  <div className="marketing-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <polyline points="11 8 11 11 13 13" />
                    </svg>
                  </div>
                  <h3>SEO</h3>
                </div>
                <p>Being found is the first sale. We optimise your Google presence from A to Z — technical, content and authority.</p>
                <ul className="marketing-features">
                  <li>
                    <span className="feature-dot" aria-hidden="true"></span>
                    <div>
                      <strong>Full SEO audit</strong>
                      <span>Technical analysis, Core Web Vitals, tags, internal linking</span>
                    </div>
                  </li>
                  <li>
                    <span className="feature-dot" aria-hidden="true"></span>
                    <div>
                      <strong>Keyword research</strong>
                      <span>Search intent, volume, competition</span>
                    </div>
                  </li>
                  <li>
                    <span className="feature-dot" aria-hidden="true"></span>
                    <div>
                      <strong>On-page optimisation</strong>
                      <span>Titles, meta, heading structure, structured data</span>
                    </div>
                  </li>
                  <li>
                    <span className="feature-dot" aria-hidden="true"></span>
                    <div>
                      <strong>SEO content strategy</strong>
                      <span>Topic clusters, blog, editorial link building</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Results banner */}
            <div className="marketing-results reveal">
              <div className="marketing-result-item">
                <strong>+180%</strong>
                <span>average organic traffic in 6 months</span>
              </div>
              <div className="marketing-result-divider" aria-hidden="true"></div>
              <div className="marketing-result-item">
                <strong>Top 3</strong>
                <span>Google ranking on target keywords</span>
              </div>
              <div className="marketing-result-divider" aria-hidden="true"></div>
              <div className="marketing-result-item">
                <strong>x2.8</strong>
                <span>conversion rate on sales pages</span>
              </div>
            </div>
            <p className="marketing-disclaimer">Results from actual clients — individual outcomes vary by sector and competition.</p>

            {/* CTA */}
            <div className="marketing-cta reveal">
              <p>Free SEO audit included — receive your personalised report within 48h.</p>
              <a href="#contact" className="btn btn-primary">Request my free audit →</a>
            </div>
          </div>
        </section>

        {/* ── PORTFOLIO ── */}
        <section id="portfolio" className="section section-tinted">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Case studies</span>
              <h2>Client case studies</h2>
              <p className="section-sub">
                Discover how Pixeloria transforms existing sites or creates new showcase websites that are clearer, more modern and better structured — to build trust and generate more enquiries.
              </p>
            </div>

            <div className="portfolio-grid">
              {portfolioProjects.map((p, i) => (
                <article
                  key={p.client}
                  className={`project-card reveal${i === 1 ? ' project-card-lg' : ''}`}
                >
                  <div className="project-meta">
                    <span className="tag">{p.type}</span>
                    <span className="project-year">{p.year}</span>
                  </div>

                  <div className="project-sector" style={{ fontSize: '0.78rem', marginBottom: '0.5rem' }}>
                    {p.sector}
                  </div>

                  <h3>{p.client}</h3>
                  <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                    {p.summary}
                  </p>

                  <ul className="project-bullets">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  {p.beforeImage ? (
                    <div className="portfolio-comparison">
                      <div className="portfolio-thumb-wrap">
                        <span className="thumb-label thumb-label--before">Before</span>
                        <Image
                          className="portfolio-thumb"
                          src={p.beforeImage}
                          alt={`Site before redesign — ${p.client}`}
                          width={600}
                          height={450}
                          sizes="(max-width: 768px) 100vw, 300px"
                          loading="lazy"
                        />
                      </div>
                      <div className="portfolio-thumb-wrap">
                        <span className="thumb-label thumb-label--after">After</span>
                        <a
                          href={p.url}
                          className="portfolio-thumb portfolio-thumb--link"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View the redesigned site — ${p.client}`}
                        >
                          View site →
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="portfolio-creation-badge">Full creation</div>
                  )}

                  <a
                    href={p.url}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View the final site
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </article>
              ))}
            </div>

            <div className="portfolio-cta reveal">
              <a href="#contact" className="btn btn-primary">
                Request a free audit
                <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
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

        {/* ── TRUST / TESTIMONIALS ── */}
        <section id="testimonials" className="section testimonials-section">
          <div className="testimonials-halo testimonials-halo--top" aria-hidden="true" />
          <div className="testimonials-halo testimonials-halo--bottom" aria-hidden="true" />

          <div className="container">
            <div className="testimonials-layout">

              {/* Left editorial */}
              <div className="testimonials-editorial reveal">
                <span className="testimonials-badge">Trust</span>
                <h2>Why work with us?</h2>
                <p className="testimonials-sub">
                  Pixeloria supports small businesses and freelancers with a simple, clear and results-driven approach.
                </p>
                <p className="testimonials-body">
                  A website should not just look good. It should be clear, quick to understand, adapted to your industry and designed to turn visitors into enquiries. With Pixeloria, you move forward step by step, with a single point of contact, a simple method and transparent packages.
                </p>
                <div className="testimonials-cta-group">
                  <a href="#contact" className="btn btn-primary">
                    Discuss my project
                  </a>
                  <a href="#packages" className="btn btn-secondary">
                    View packages
                  </a>
                </div>
              </div>

              {/* Right trust card */}
              <div className="trust-card reveal">
                <div className="tc-halo" aria-hidden="true" />
                <div className="tc-card-header">
                  <div className="tc-shield-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path d="M12 2l7 3v5c0 5-3.5 9-7 10C8.5 19 5 15 5 10V5l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="tc-label">The Pixeloria Method</p>
                    <h3>An approach built for business owners</h3>
                  </div>
                </div>
                <p className="tc-intro">
                  Pixeloria focuses on websites that are useful, credible and easy to evolve — without unnecessary complexity.
                </p>
                <div className="tc-grid">
                  {trustPoints.map((pt) => (
                    <div key={pt.title} className="tc-point">
                      <div className="tc-point-icon" aria-hidden="true">{pt.icon}</div>
                      <strong>{pt.title}</strong>
                      <p>{pt.desc}</p>
                    </div>
                  ))}
                </div>
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

import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Websites for Freelancers and Consultants | Pixeloria',
  description:
    'A professional website that presents your expertise clearly and helps clients decide to work with you. Portfolio and consultant websites built for independent professionals.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/examples/freelancers-consultants',
    languages: {
      'fr-FR': 'https://pixeloria.fr/exemples/freelance',
      'en-GB': 'https://pixeloria.fr/en/examples/freelancers-consultants',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/examples/freelancers-consultants',
    title: 'Websites for Freelancers and Consultants | Pixeloria',
    description:
      'A professional website that presents your expertise clearly and helps clients decide to work with you.',
    locale: 'en_GB',
    siteName: 'Pixeloria',
  },
};

const painPoints = [
  {
    title: 'Losing clients to competitors with a better online presence',
    desc: 'You may have stronger skills, but if a prospect compares your LinkedIn profile to a competitor\'s polished website, they will often go with the one that looks more established.',
  },
  {
    title: 'Relying entirely on LinkedIn or referrals',
    desc: 'Referrals are valuable, but they put your pipeline at the mercy of other people\'s networks. A website gives you a channel that works for you regardless of who happens to mention your name.',
  },
  {
    title: 'No dedicated place to generate leads',
    desc: 'Social media and directories bring limited contact opportunities. A website with a clear contact form or booking link makes it easy for a prospect to take the next step at any time.',
  },
  {
    title: 'Hard to communicate your value and positioning',
    desc: 'A LinkedIn profile has constraints. A personal website gives you the space to explain your approach, your methodology and why someone should choose you over anyone else.',
  },
];

const benefits = [
  {
    title: 'Present your expertise with clarity',
    desc: 'A dedicated services page that explains what you do, who you work with and what outcomes clients can expect — not a vague list of skills.',
  },
  {
    title: 'Show your best work',
    desc: 'A portfolio or case studies section with concrete examples of projects, results and the problems you solved.',
  },
  {
    title: 'Build credibility before the first call',
    desc: 'Client testimonials, logos of companies you have worked with and any publications or speaking engagements — all the social proof that makes a prospect confident before reaching out.',
  },
  {
    title: 'Generate enquiries on autopilot',
    desc: 'A simple contact form or calendar booking link so prospects can reach you or schedule a call — even while you are busy on a project.',
  },
  {
    title: 'Control your positioning',
    desc: 'Your website, your rules. Define your niche, your rates, your ideal client — and attract the right work rather than fielding every request.',
  },
  {
    title: 'A professional address for all your communications',
    desc: 'Link your website in proposals, emails and directories. It signals that you take your work seriously.',
  },
];

const siteStructure = [
  'Homepage — who you are, what you do, who you work with and one clear call to action',
  'Services page — what you offer, how you work and what results clients can expect',
  'Portfolio or case studies — selected projects with context, your role and measurable outcomes',
  'About page — your background, your approach, why clients choose to work with you',
  'Testimonials — written quotes from clients, with name, company and context',
  'Contact page or booking link — easy way to start the conversation or schedule a call',
  'Optional: blog or resources — articles that demonstrate your expertise and improve search visibility',
];

export default function FreelancersConsultantsPage() {
  return (
    <>
      <Header />
      <main>

        {/* Hero */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/en">Home</Link>
                <span aria-hidden="true"> › </span>
                <Link href="/en#packages">Examples</Link>
                <span aria-hidden="true"> › </span>
                <span aria-current="page">Freelancers &amp; consultants</span>
              </nav>

              <span className="eyebrow" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                For freelancers &amp; independent consultants
              </span>

              <h1>Portfolio websites for freelancers and independent consultants</h1>

              <p className="page-hero-sub">
                A professional website that presents your expertise clearly and helps clients decide
                to work with you.
              </p>

              <div className="page-hero-actions">
                <a href="/en#contact" className="btn btn-primary btn-lg">
                  Discuss my project
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <Link href="/en#packages" className="btn btn-ghost btn-lg">
                  View packages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Common challenges</span>
              <h2>What holds freelancers and consultants back online</h2>
              <p className="section-sub">
                Your skills are not in question. What a website solves is visibility, credibility and consistent lead generation.
              </p>
            </div>

            <div className="examples-grid">
              {painPoints.map((point, i) => (
                <div key={i} className="examples-card">
                  <h3>{point.title}</h3>
                  <p>{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pixeloria solution */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">How Pixeloria helps</span>
              <h2>A website that works as your best business card</h2>
              <p className="section-sub">
                Built to show your expertise clearly and make it easy for the right clients to reach you.
              </p>
            </div>

            <div className="examples-grid examples-grid--wide">
              {benefits.map((benefit, i) => (
                <div key={i} className="examples-feature">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Site structure */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Recommended structure</span>
              <h2>What your website needs</h2>
              <p className="section-sub">
                A lean, focused structure that communicates your value without unnecessary complexity.
              </p>
            </div>

            <ul className="examples-list">
              {siteStructure.map((item, i) => (
                <li key={i} className="examples-list-item">
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="examples-check">
                    <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Recommended package */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Recommended package</span>
              <h2>The right plan for a self-employed professional</h2>
            </div>

            <div className="examples-offer-card">
              <div className="examples-offer-header">
                <div>
                  <p className="examples-offer-label">Essential Website</p>
                  <p className="examples-offer-price">€490<span> one-off</span></p>
                </div>
                <span className="examples-offer-badge">Recommended for you</span>
              </div>
              <p className="examples-offer-reason">
                As a freelancer or independent consultant, you want a quality website without a recurring
                monthly overhead eating into your margins. The Essential plan is a one-off investment — a
                well-built, professional site with basic SEO that you own outright. It covers everything
                you need to present yourself credibly: services, portfolio, testimonials and a contact form.
                If you later want ongoing support or SEO growth, upgrading to Care or Growth is straightforward.
              </p>
              <div className="examples-offer-actions">
                <a href="/en#contact" className="btn btn-primary">
                  Get started with Essential →
                </a>
                <Link href="/en#packages" className="btn btn-ghost btn-lg">
                  Compare all packages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Explore Pixeloria</span>
              <h2>More from Pixeloria</h2>
            </div>
            <nav className="examples-nav-links" aria-label="Related pages">
              <Link href="/en">English home</Link>
              <Link href="/en#packages">Packages &amp; pricing</Link>
              <Link href="/en#case-studies">Case studies</Link>
              <Link href="/en#contact">Contact us</Link>
            </nav>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section">
          <div className="container">
            <div className="page-cta-block">
              <h2>Want a website adapted to your business?</h2>
              <p>
                Pixeloria builds portfolio and professional websites for freelancers and consultants
                in France and across Europe. Clear, fast and built to convert.
              </p>
              <div className="page-hero-actions">
                <a href="/en#contact" className="btn btn-primary btn-lg">
                  Discuss my project
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <Link href="/en#packages" className="btn btn-ghost btn-lg">
                  View packages
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

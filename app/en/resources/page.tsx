import type { Metadata } from 'next';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Contractor Website Resources & Guides | Pixeloria',
  description:
    'Guides and articles for contractors and home-service businesses on what a website should include, how much it costs, and best practices to follow.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/resources',
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/resources',
    title: 'Contractor Website Resources & Guides | Pixeloria',
    description:
      'Guides and articles for contractors and home-service businesses on what a website should include, how much it costs, and best practices to follow.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

const articles = [
  {
    href: '/en/resources/contractor-website-guide',
    label: 'Guide',
    title: 'What Should a Contractor Website Include?',
    excerpt:
      'A full breakdown of what makes a contractor website effective — service pages, service-area structure, lead-generation forms, trust signals, mobile design and basic SEO.',
  },
  {
    href: '/en/resources/contractor-website-cost',
    label: 'Pricing',
    title: 'How Much Does a Contractor Website Cost?',
    excerpt:
      'Pixeloria pricing explained clearly, plus the general factors — pages, design, features and maintenance — that drive contractor website costs up or down.',
  },
  {
    href: '/en/resources/contractor-website-examples',
    label: 'Best practices',
    title: '15 Contractor Website Best Practices',
    excerpt:
      'Fifteen best-practice patterns that make contractor and home-service websites effective, from above-the-fold calls to action to local SEO structure.',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <HeaderEn />
      <main>

        {/* Hero */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/en">Home</Link>
                <span aria-hidden="true"> › </span>
                <span>Resources</span>
              </nav>
              <span className="eyebrow">Resources</span>
              <h1>Contractor Website Resources &amp; Guides</h1>
              <p className="page-hero-sub">
                Practical guides for contractors and home-service businesses on building an
                effective website — what to include, what it costs, and which patterns tend to
                work.
              </p>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="section">
          <div className="container">
            <div className="includes-grid">
              {articles.map((article) => (
                <div key={article.href} className="include-item">
                  <span className="eyebrow">{article.label}</span>
                  <strong>{article.title}</strong>
                  <p>{article.excerpt}</p>
                  <p style={{ marginTop: '0.75rem' }}>
                    <Link href={article.href} style={{ color: 'var(--primary)', textDecoration: 'underline', fontSize: '0.9rem' }}>
                      Read more →
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section section-tinted">
          <div className="container">
            <div className="page-cta-block">
              <h2>Want Feedback on Your Own Website?</h2>
              <p>
                Send us your current website, or tell us about your business if you don&apos;t
                have one yet, for honest, no-obligation feedback.
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

import type { Metadata } from 'next';
import { hreflangSelf } from '@/lib/hreflang';
import { breadcrumbList } from '@/lib/breadcrumb';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Website Design Concepts for Contractors | Pixeloria',
  description:
    'Concept and demo websites showing how Pixeloria designs contractor websites for the US market. No fabricated results, just sample projects and approach.',
  alternates: {
    canonical: 'https://pixeloria.fr/en/case-studies',
    languages: hreflangSelf('https://pixeloria.fr/en/case-studies'),
  },
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/case-studies',
    title: 'Website Design Concepts for Contractors | Pixeloria',
    description:
      'Concept and demo websites showing how Pixeloria designs contractor websites for the US market. No fabricated results, just sample projects and approach.',
    locale: 'en_US',
    siteName: 'Pixeloria',
  },
};

type Concept = {
  business: string;
  sector: string;
  label: string;
  problem: string;
  goals: string[];
  solution: string;
  pages: string[];
  technical: { label: string; desc: string }[];
  before: string[];
  after: string[];
};

const concepts: Concept[] = [
  {
    business: 'Summit Roofing Co.',
    sector: 'Roofing',
    label: 'Concept website',
    problem:
      'A typical independent roofing contractor might still be running on an old template site: slow to load, hard to read on a phone, no obvious way to request an estimate, and no page explaining which towns they actually serve. This concept illustrates how Pixeloria would approach that situation for a roofing business, built from scratch as a sample rather than for a paying client.',
    goals: [
      'Make it obvious, within seconds, how to request a roof estimate',
      'Read clearly and load fast on a phone, since most roofing searches happen on mobile',
      'Separate residential and commercial roofing services clearly',
      'Build trust with reviews and a completed-projects gallery',
    ],
    solution:
      "Modeled on Pixeloria's Growth Website plan: a multi-page site with dedicated service pages, a service-area structure, a review section and a project gallery, backed by a local SEO and schema markup foundation.",
    pages: ['Home', 'Roofing Services', 'Service Area', 'Reviews', 'Gallery', 'Contact'],
    technical: [
      { label: 'Mobile-first design', desc: 'Layout designed for phones first, since that is where most homeowners search for a roofer.' },
      { label: 'Click-to-call button', desc: 'A tap-to-call button stays visible for visitors browsing on mobile.' },
      { label: 'Estimate request form', desc: 'A short form so homeowners can request a roof estimate without picking up the phone.' },
      { label: 'Local SEO structure', desc: 'Service-area pages and consistent business information for local search.' },
      { label: 'Schema markup', desc: 'Structured data describing the roofing services and service area to search engines.' },
    ],
    before: [
      'Desktop-only layout that is hard to read on a phone',
      'Phone number buried at the bottom of the page',
      'No dedicated page for service area or completed jobs',
      'No form — the only option is to call during business hours',
    ],
    after: [
      'Mobile-first layout with a persistent click-to-call button',
      'Clear service-area section covering the towns served',
      'Estimate request form available on every page',
      'Reviews and a project gallery placed where visitors decide to reach out',
    ],
  },
  {
    business: 'Ironclad General Contracting',
    sector: 'General contracting',
    label: 'Unsolicited redesign concept',
    problem:
      'General contracting websites often go years without an update: dense blocks of text, no photos of past work, and no clear list of the services actually offered. This concept imagines a general contractor stuck with that kind of site, and shows — unprompted, without a real client behind it — the kind of redesign Pixeloria would propose.',
    goals: [
      'Replace a text-heavy layout with a clear, scannable homepage',
      'Present remodeling, additions and general contracting as distinct services',
      'Give visitors a single, simple way to request a quote',
      'Keep the whole experience mobile-first',
    ],
    solution:
      "Modeled on Pixeloria's Starter Website plan: a focused one-page site with clearly separated sections rather than a large multi-page build, suited to a business that wants a fast, affordable launch.",
    pages: ['Home (single page with sections: Services, Service Area, Reviews, Gallery, Contact)'],
    technical: [
      { label: 'Mobile-first responsive design', desc: 'The one-page layout is built to read clearly on a phone first.' },
      { label: 'Click-to-call button', desc: 'A tap-to-call button for visitors who would rather talk than fill out a form.' },
      { label: 'Estimate request form', desc: 'A short quote-request form built into the page.' },
      { label: 'Service-area section', desc: 'A clear section listing the areas covered, in place of a vague "service area available on request."' },
      { label: 'Basic on-page SEO', desc: 'Page structure and content set up for basic on-page search visibility.' },
    ],
    before: [
      'Long blocks of unstructured text with no clear service list',
      'No photos of past remodeling or construction work',
      'No indication of which areas the business actually serves',
      'No form — visitors have to find a phone number and call',
    ],
    after: [
      'Services broken into short, scannable sections',
      'A project gallery section for past work',
      'A clear service-area section',
      'A quote-request form and click-to-call button on the same page',
    ],
  },
];

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Website Design Concepts for Contractors',
  url: 'https://pixeloria.fr/en/case-studies',
  description:
    'Concept and demo websites illustrating how Pixeloria designs contractor websites for the US market.',
  inLanguage: 'en-US',
};

const breadcrumbSchema = breadcrumbList([
  { name: 'Home', url: 'https://pixeloria.fr/en' },
  { name: 'Case Studies', url: 'https://pixeloria.fr/en/case-studies' },
]);

export default function CaseStudiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <HeaderEn />
      <main>

        {/* Hero */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/en">Home</Link>
                <span aria-hidden="true"> › </span>
                <span>Case Studies</span>
              </nav>
              <span className="eyebrow">Concept & demo projects</span>
              <h1>Website Concepts &amp; Sample Projects</h1>
              <p className="page-hero-sub">
                Pixeloria is newly launching in the US contractor and home-service market, so we
                don&apos;t yet have a portfolio of real US clients to show. As we grow that side of
                the business, here&apos;s a look at the kind of website Pixeloria builds: two
                concept projects, built for fictional businesses, that walk through our approach
                from problem to finished page structure.
              </p>
            </div>
          </div>
        </section>

        {/* Honesty note */}
        <section className="section">
          <div className="container">
            <div className="include-item" style={{ maxWidth: '760px' }}>
              <strong>What these are — and aren&apos;t</strong>
              <p>
                Both projects below are a <strong>concept website</strong> and a{' '}
                <strong>demo project</strong>: illustrative sample homepages built around fictional
                businesses, not real paying clients. Nothing on this page reflects live traffic,
                leads or ranking results — a project that has never been deployed for an actual
                business can&apos;t honestly claim those. What it can show is how Pixeloria
                structures a site, what pages it includes, and which technical choices go into it.
              </p>
            </div>
          </div>
        </section>

        {concepts.map((c, i) => (
          <section key={c.business} className={`section ${i % 2 === 0 ? 'section-tinted' : ''}`}>
            <div className="container">
              <div className="pricing-card" style={{ maxWidth: '920px', margin: '0 auto', padding: '2.5rem 2rem' }}>
                <span className="pricing-badge">{c.label}</span>
                <p className="pricing-label">{c.sector}</p>
                <h2 style={{ marginBottom: '0.25rem' }}>{c.business}</h2>
                <p className="pricing-sublabel" style={{ margin: '0 0 1.5rem' }}>
                  Fictional business created for this {c.label.toLowerCase()} — not an actual Pixeloria client.
                </p>

                <p className="pricing-list-title">The typical problem</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {c.problem}
                </p>

                <p className="pricing-list-title">Goals for this concept</p>
                <ul style={{ marginBottom: '1.5rem' }}>
                  {c.goals.map((g) => <li key={g}>{g}</li>)}
                </ul>

                <p className="pricing-list-title">Pixeloria&apos;s approach</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {c.solution}
                </p>

                <p className="pricing-list-title">Pages built</p>
                <ul className="artisan-types-grid" style={{ marginBottom: '2rem' }}>
                  {c.pages.map((p) => <li key={p} className="artisan-type-tag">{p}</li>)}
                </ul>

                <p className="pricing-list-title">Technical improvements highlighted</p>
                <div className="includes-grid" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
                  {c.technical.map((t) => (
                    <div key={t.label} className="include-item">
                      <strong>{t.label}</strong>
                      <p>{t.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="pricing-list-title">Conceptual before / after</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '0.5rem 0 1rem' }}>
                  There is no real &quot;before&quot; screenshot here, since {c.business} is a{' '}
                  {c.label.toLowerCase()} and never had a live site of its own. This is a conceptual
                  comparison between a typical outdated contractor site and what Pixeloria would
                  build instead.
                </p>
                <div className="includes-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                  <div className="include-item">
                    <strong>Typical outdated site</strong>
                    <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.1rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.7 }}>
                      {c.before.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                  <div className="include-item">
                    <strong>What Pixeloria builds instead</strong>
                    <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.1rem', color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.7 }}>
                      {c.after.map((a) => <li key={a}>{a}</li>)}
                    </ul>
                  </div>
                </div>

                <p style={{ color: 'var(--text-subtle)', fontSize: '0.8rem', fontStyle: 'italic', marginTop: '1.5rem', marginBottom: 0 }}>
                  This {c.label.toLowerCase()} is designed to generate estimate requests and phone
                  calls once deployed — it does not have live analytics or results to report, since
                  it has not been launched for a real business.
                </p>
              </div>
            </div>
          </section>
        ))}

        {/* Final CTA */}
        <section className="section">
          <div className="container">
            <div className="page-cta-block">
              <h2>Want a Website Like This for Your Business?</h2>
              <p>
                These two sample projects show our approach. Send us your current website, or tell
                us about your business if you don&apos;t have one yet, and we&apos;ll give you
                honest, no-obligation feedback.
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

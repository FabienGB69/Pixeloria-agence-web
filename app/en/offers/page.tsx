import type { Metadata } from 'next';
import { OFFERS_US } from '@/lib/pricing-us';
import Link from 'next/link';
import { hreflangLanguages } from '@/lib/hreflang';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import ContactFormEn from '@/app/en/ContactFormEn';
import TrackOnMount from '@/components/analytics/TrackOnMount';

export const metadata: Metadata = {
  title: 'Website Offers — Starter, Growth & Care Plans | Pixeloria',
  description:
    `Starter Website at ${OFFERS_US.starter.price}, Growth Website at ${OFFERS_US.growth.price}, and Website Care & Local Visibility at ${OFFERS_US.care.price}/month. Transparent pricing for contractors and local service businesses.`,
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/offers',
    locale: 'en_GB',
    siteName: 'Pixeloria',
    title: 'Website Offers — Starter, Growth & Care Plans | Pixeloria',
    description: `Website plans for contractors and local service businesses: Starter Website ${OFFERS_US.starter.price}, Growth Website ${OFFERS_US.growth.price}, Website Care & Local Visibility ${OFFERS_US.care.price}/month.`,
  },
  alternates: { canonical: 'https://pixeloria.fr/en/offers', languages: hreflangLanguages('/en/offers') },
};

const comparisonRows: { feature: string; starter: boolean; growth: boolean }[] = [
  { feature: 'One-page website', starter: true, growth: false },
  { feature: 'Up to 5 pages', starter: false, growth: true },
  { feature: 'Mobile-first, responsive design', starter: true, growth: true },
  { feature: 'Custom conversion-focused design', starter: false, growth: true },
  { feature: 'Individual service pages', starter: false, growth: true },
  { feature: 'Service-area section', starter: true, growth: true },
  { feature: 'Estimate / lead-generation forms', starter: true, growth: true },
  { feature: 'Customer reviews', starter: true, growth: true },
  { feature: 'Project gallery', starter: true, growth: true },
  { feature: 'On-page SEO', starter: true, growth: true },
  { feature: 'Technical SEO & keyword mapping', starter: false, growth: true },
  { feature: 'Schema markup', starter: false, growth: true },
  { feature: 'Analytics setup', starter: true, growth: true },
  { feature: 'Google Search Console setup', starter: false, growth: true },
  { feature: 'Website launch', starter: true, growth: true },
];

function Cell({ value }: { value: boolean }) {
  return (
    <td className={`ctable-cell${value ? ' ctable-cell--yes' : ' ctable-cell--no'}`}>
      {value ? (
        <svg viewBox="0 0 16 16" fill="none" aria-label="Yes">
          <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 16 16" fill="none" aria-label="No">
          <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )}
    </td>
  );
}

export default function OffersEnPage() {
  return (
    <>
      <TrackOnMount page="offers" />
      <ClientEffects />
      <HeaderEn />
      <main>
        {/* Hero de page */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/en">Home</Link>
                <span aria-hidden="true"> › </span>
                <span>Offers</span>
              </nav>
              <span className="eyebrow">Pricing &amp; offer</span>
              <h1>Websites built to turn visitors into booked jobs</h1>
              <p className="page-hero-sub">
                Pixeloria builds websites for contractors and local service businesses that generate estimate requests and phone calls. Choose Starter or Growth, then add ongoing care to keep your site working for you.
              </p>
            </div>
          </div>
        </section>

        {/* Les offres */}
        <section className="section" id="services">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Our offer</span>
              <h2>Website plans for contractors and local service businesses</h2>
              <p className="section-sub">
                Two website options, each a single upfront price, plus an optional monthly care plan. No long-term contract required to launch.
              </p>
            </div>

            <div className="pricing-cards pricing-cards--three">
              <div className="pricing-card">
                <p className="pricing-label">Starter Website</p>
                <p className="pricing-price">{OFFERS_US.starter.price} <span>{OFFERS_US.starter.suffix}</span></p>
                <p className="pricing-sublabel">One-time payment — live 5 business days after we receive your content</p>
                <p className="pricing-accroche">
                  A one-page website built to turn visitors into estimate requests and phone calls.
                </p>
                <p className="pricing-list-title">Included:</p>
                <ul>
                  <li>One-page contractor website</li>
                  <li>Up to 6 sections</li>
                  <li>Mobile-first design</li>
                  <li>Click-to-call button</li>
                  <li>Estimate request form</li>
                  <li>Service-area section</li>
                  <li>Services section</li>
                  <li>Customer review section</li>
                  <li>Project gallery</li>
                  <li>Basic on-page SEO</li>
                  <li>Analytics setup</li>
                  <li>Website launch</li>
                </ul>
                <p className="pricing-note">Ready-to-launch website, live, mobile-optimized and built to generate calls.</p>
                <a href="#contact" className="btn btn-primary">Get Your Website →</a>
              </div>

              <div className="pricing-card pricing-card--featured">
                <span className="pricing-badge">Most Popular</span>
                <p className="pricing-label">Growth Website</p>
                <p className="pricing-price">{OFFERS_US.growth.price} <span>{OFFERS_US.growth.suffix}</span></p>
                <p className="pricing-sublabel">One-time payment — live in 1–3 weeks depending on scope</p>
                <p className="pricing-accroche">
                  A multi-page website built for contractors and home-service businesses who want a stronger local search presence.
                </p>
                <p className="pricing-list-title">Included:</p>
                <ul>
                  <li>Up to 5 pages</li>
                  <li>Custom conversion-focused design</li>
                  <li>Individual service pages</li>
                  <li>Service-area structure</li>
                  <li>Lead-generation forms</li>
                  <li>Customer reviews</li>
                  <li>Project gallery</li>
                  <li>Technical SEO</li>
                  <li>Keyword mapping</li>
                  <li>Schema markup</li>
                  <li>Analytics setup</li>
                  <li>Google Search Console setup</li>
                  <li>Website launch</li>
                </ul>
                <p className="pricing-note">Built to rank locally and convert visitors into booked jobs.</p>
                <a href="#contact" className="btn btn-primary">Start My Website →</a>
              </div>

              <div className="pricing-card">
                <p className="pricing-label">Website Care &amp; Local Visibility</p>
                <p className="pricing-price">{OFFERS_US.care.price} <span>{OFFERS_US.care.suffix}</span></p>
                <p className="pricing-sublabel">Add-on to either website</p>
                <p className="pricing-accroche">
                  Your site stays online, secure and up to date, with ongoing local SEO support.
                </p>
                <p className="pricing-list-title">Included:</p>
                <ul>
                  <li>Hosting management</li>
                  <li>Technical maintenance</li>
                  <li>Security updates</li>
                  <li>Backups</li>
                  <li>Content edits</li>
                  <li>Service-area updates</li>
                  <li>Conversion checks</li>
                  <li>Basic local SEO improvements</li>
                  <li>Search Console monitoring</li>
                  <li>Monthly performance summary</li>
                </ul>
                <p className="pricing-note">Cancel anytime — no long-term contract.</p>
                <a href="#contact" className="btn btn-secondary">Add Website Care →</a>
              </div>
            </div>

            <p className="pricing-disclaimer reveal">
              All prices are in USD ·{' '}
              <a href="#contact">Contact us</a> for a free, no-obligation estimate.
            </p>
          </div>
          <div className="container">
            <a href="/en/faq" className="offers-faq-link">Questions about our offers? View the FAQ</a>
          </div>
        </section>

        {/* Tableau comparatif */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Comparison</span>
              <h2>Starter Website vs Growth Website</h2>
              <p className="section-sub">Compare what&apos;s included in each website plan. Add Website Care &amp; Local Visibility to either one.</p>
            </div>

            <div className="ctable-wrap reveal">
              <table className="ctable">
                <thead>
                  <tr>
                    <th className="ctable-feature-col">Feature</th>
                    <th>Starter Website<br /><span className="ctable-price">{OFFERS_US.starter.price} {OFFERS_US.starter.suffix}</span></th>
                    <th className="ctable-th--highlight">Growth Website<br /><span className="ctable-price">{OFFERS_US.growth.price} {OFFERS_US.growth.suffix}</span></th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature}>
                      <td className="ctable-feature">{row.feature}</td>
                      <Cell value={row.starter} />
                      <Cell value={row.growth} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="ctable-cta reveal">
              <a href="#contact" className="btn btn-primary">
                Request a free audit
                <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Bloc de réassurance */}
        <section className="section">
          <div className="container">
            <div className="reassurance-band">
              <div className="reassurance-item">
                <strong>No hidden commitment</strong>
                <p>Terms are clear before launch. Cancel your Website Care plan anytime, no notice period required.</p>
              </div>
              <div className="reassurance-item">
                <strong>Turnkey delivery</strong>
                <p>Go-live, technical setup and onboarding support included.</p>
              </div>
              <div className="reassurance-item">
                <strong>Responsive support</strong>
                <p>A question? An issue? We offer priority email support for every project.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-layout">
              <div className="contact-text reveal">
                <span className="eyebrow">Contact</span>
                <h2>Not sure yet? We answer every question.</h2>
                <p>Request a free audit of your situation. We&apos;ll point you to the package best suited to your business and budget.</p>
                <div className="contact-reassurance">
                  <p>✓ Free, no-commitment consultation</p>
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

        {/* CTA final */}
        <section className="section">
          <div className="container">
            <div className="page-cta-block">
              <h2>Still have questions? We&apos;re here to help.</h2>
              <p>
                Request a free audit of your situation. We&apos;ll point you to the package best suited to your business and budget.
              </p>
              <Link href="/en#contact" className="btn btn-primary btn-lg">
                Request a free audit
                <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <p className="page-cta-note">A quick reply with clear guidance based on your needs.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer locale="en" />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';
import ClientEffects from '@/components/layout/ClientEffects';
import ContactFormEn from '@/app/en/ContactFormEn';

export const metadata: Metadata = {
  title: 'Artisan Site Offer — €199 inc. VAT | Pixeloria',
  description:
    'Pixeloria builds your professional tradesperson website for €199 inc. VAT, delivered in 72h. Phone button, WhatsApp, quote form, Google Maps, local SEO.',
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/en/offers',
    locale: 'en_GB',
    siteName: 'Pixeloria',
    title: 'Artisan Site Offer — €199 inc. VAT | Pixeloria',
    description: 'A professional tradesperson website for €199 inc. VAT, delivered in 72h. Everything included: quote form, phone, WhatsApp, Google Maps, local SEO.',
  },
  alternates: { canonical: 'https://pixeloria.fr/en/offers' },
};

const comparisonRows: { feature: string; artisan: boolean; visibility: boolean }[] = [
  { feature: 'One-page professional website', artisan: true, visibility: true },
  { feature: 'Up to 5 sections', artisan: true, visibility: true },
  { feature: 'Modern, responsive design', artisan: true, visibility: true },
  { feature: 'Phone & WhatsApp button', artisan: true, visibility: true },
  { feature: 'Quote form', artisan: true, visibility: true },
  { feature: 'Google Maps integration', artisan: true, visibility: true },
  { feature: 'Client reviews', artisan: true, visibility: true },
  { feature: 'Go-live included', artisan: true, visibility: true },
  { feature: 'Basic local SEO', artisan: true, visibility: true },
  { feature: 'Technical maintenance', artisan: false, visibility: true },
  { feature: 'Minor updates', artisan: false, visibility: true },
  { feature: 'Progressive SEO optimisation', artisan: false, visibility: true },
  { feature: 'Priority support', artisan: false, visibility: true },
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
              <h1>A professional website for tradespeople, delivered in 72h</h1>
              <p className="page-hero-sub">
                Pixeloria helps tradespeople and micro-businesses get a clear, effective website to receive more quote requests. Fixed price at €199 inc. VAT, no forced subscription, no hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* Les offres */}
        <section className="section" id="services">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">Our offer</span>
              <h2>A professional website for tradespeople, delivered in 72h</h2>
              <p className="section-sub">
                Pixeloria helps tradespeople and micro-businesses get a clear, effective website to receive more quote requests. One-off payment, no forced subscription.
              </p>
            </div>

            <div className="pricing-cards pricing-cards--two">
              <div className="pricing-card pricing-card--featured">
                <span className="pricing-badge">The artisan offer</span>
                <p className="pricing-label">Artisan Site</p>
                <p className="pricing-price">€199 <span>inc. VAT</span></p>
                <p className="pricing-sublabel">One-off payment — delivered in 72h</p>
                <p className="pricing-accroche">
                  A professional website designed to generate quote requests, delivered in 72h after we receive your content.
                </p>
                <p className="pricing-list-title">Included:</p>
                <ul>
                  <li>One-page professional website</li>
                  <li>Up to 5 sections</li>
                  <li>Modern design</li>
                  <li>Mobile version</li>
                  <li>Phone button</li>
                  <li>WhatsApp button</li>
                  <li>Quote form</li>
                  <li>Google Maps</li>
                  <li>Services list</li>
                  <li>Service area</li>
                  <li>Client reviews / trust signals</li>
                  <li>Simple legal notices</li>
                  <li>Go-live</li>
                  <li>Basic local SEO optimisation</li>
                </ul>
                <p className="pricing-note">Ready-to-go one-page website, live, mobile- and Google-optimised.</p>
                <a href="#contact" className="btn btn-primary">Start my website →</a>
              </div>

              <div className="pricing-card">
                <p className="pricing-label">Visibility Option</p>
                <p className="pricing-price">€49 <span>inc. VAT / month</span></p>
                <p className="pricing-sublabel">Add-on to the Artisan Site</p>
                <p className="pricing-accroche">
                  Your site stays up to date, secure and optimised, without you having to think about it.
                </p>
                <p className="pricing-sub-accroche">
                  Monthly peace of mind, so your site never sits abandoned after launch.
                </p>
                <p className="pricing-list-title">Included:</p>
                <ul>
                  <li>Technical site maintenance</li>
                  <li>Regular backups</li>
                  <li>Minor corrections</li>
                  <li>Small text, photo or service updates</li>
                  <li>Contact details, hours or call-button updates</li>
                  <li>Add or update service areas</li>
                  <li>Mobile display checks</li>
                  <li>Progressive local SEO optimisation</li>
                  <li>Priority support by message</li>
                </ul>
                <p className="pricing-list-title pricing-list-title--excluded">Not included:</p>
                <ul className="pricing-excluded">
                  <li>Full site redesign</li>
                  <li>Creation of complex new pages</li>
                  <li>Google Ads, social media management, blog articles</li>
                </ul>
                <p className="pricing-note">No commitment · Cancel any time.</p>
                <a href="#contact" className="btn btn-secondary">Add Visibility Option →</a>
              </div>
            </div>

            <p className="pricing-disclaimer reveal">
              All prices are inc. VAT · VAT applicable depending on your situation ·{' '}
              <a href="#contact">Contact us</a> for a free personalised quote.
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
              <h2>What&apos;s included</h2>
              <p className="section-sub">Everything is included in the base offer. The Visibility Option adds monthly follow-up.</p>
            </div>

            <div className="ctable-wrap reveal">
              <table className="ctable">
                <thead>
                  <tr>
                    <th className="ctable-feature-col">Feature</th>
                    <th>Artisan Site<br /><span className="ctable-price">€199 inc. VAT</span></th>
                    <th className="ctable-th--highlight">Visibility Option<br /><span className="ctable-price">+€49/month</span></th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature}>
                      <td className="ctable-feature">{row.feature}</td>
                      <Cell value={row.artisan} />
                      <Cell value={row.visibility} />
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
                <p>Terms are clear before launch. Cancel with one month&apos;s notice.</p>
              </div>
              <div className="reassurance-item">
                <strong>Turnkey delivery</strong>
                <p>Go-live, technical setup and onboarding support included.</p>
              </div>
              <div className="reassurance-item">
                <strong>Responsive support</strong>
                <p>A question? An issue? We reply via WhatsApp within 24 business hours.</p>
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

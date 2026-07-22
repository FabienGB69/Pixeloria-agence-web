import type { Metadata } from 'next';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Pixeloria',
  description: 'Privacy policy and processing of personal data — Pixeloria.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <HeaderEn />
      <main className="legal-page">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="legal-date">Last updated: April 2025</p>

          <section>
            <h2>1. Data controller</h2>
            <p>
              Pixeloria — <a href="mailto:contact@pixeloria.fr">contact@pixeloria.fr</a> —{' '}
              <a href="tel:+33786125313">+33 7 86 12 53 13</a>
            </p>
          </section>

          <section>
            <h2>2. Data collected</h2>
            <p>
              When you use the contact form, we collect: name, company, email address, phone number
              (optional) and the content of your message.
            </p>
          </section>

          <section>
            <h2>3. Purpose of processing</h2>
            <p>
              The data collected is used only to respond to your enquiries and to follow up on your
              project commercially. It is not used for prospecting purposes and is not shared with third
              parties.
            </p>
          </section>

          <section>
            <h2>4. Retention period</h2>
            <p>
              Your data is retained for the period necessary to process your request, and for a maximum
              of 3 years from the last contact.
            </p>
          </section>

          <section>
            <h2>5. Your rights</h2>
            <p>
              In accordance with the GDPR, you have the right to access, rectify, erase and object to the
              processing of your data. To exercise these rights, contact us at{' '}
              <a href="mailto:contact@pixeloria.fr">contact@pixeloria.fr</a>.
            </p>
          </section>

          <section>
            <h2>6. Hosting</h2>
            <p>
              This website is hosted by Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104,
              United States.
            </p>
          </section>

          <section id="cookies">
            <h2>7. Cookies and trackers</h2>
            <p>
              This website sets cookies and trackers falling into three categories:
            </p>
            <ul>
              <li>
                <strong>Necessary cookies (always active)</strong>: language preference, anti-bot form
                security (Cloudflare Turnstile).
              </li>
              <li>
                <strong>Audience-measurement cookies (subject to consent)</strong>: Google Analytics,
                Google Tag Manager.
              </li>
              <li>
                <strong>Social media cookies (subject to consent)</strong>: X (Twitter) widget displaying
                our latest posts.
              </li>
            </ul>
            <p>
              You can change your choice at any time via the &quot;Manage cookies&quot; link in the
              site&apos;s footer.
            </p>
          </section>

          <p style={{ marginTop: '2rem' }}>
            <Link href="/en">← Back to home</Link>
          </p>
        </div>
      </main>
      <Footer locale="en" />
    </>
  );
}

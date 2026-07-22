import type { Metadata } from 'next';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use — Pixeloria',
  description: 'Terms of Use for pixeloria.fr — rules governing the use of the service.',
};

export default function TermsOfUsePage() {
  return (
    <>
      <HeaderEn />
      <main style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <h1>Terms of Use</h1>
          <p><em>Last updated: April 2025</em></p>

          <h2>1. Purpose and acceptance</h2>
          <p>
            These Terms of Use set out the rules for accessing and using the website{' '}
            <strong>pixeloria.fr</strong>, published by GOMES FABIEN / Pixeloria. Accessing the site
            constitutes full and unreserved acceptance of these Terms of Use.
          </p>

          <h2>2. Access to the site</h2>
          <p>
            The site is accessible free of charge to any user with an internet connection. The Provider
            reserves the right to modify, suspend or interrupt access to the site at any time without
            notice, in particular for maintenance operations.
          </p>

          <h2>3. Intellectual property</h2>
          <p>
            All elements of the site (text, graphics, logo, code, structure) are protected by intellectual
            property law and are the exclusive property of GOMES FABIEN / Pixeloria. Any reproduction,
            even partial, without prior written authorization is prohibited.
          </p>

          <h2>4. Personal data and GDPR</h2>
          <p>
            Data collected through the forms (last name, first name, email, phone number) is used solely
            to process your contact or quote request. It is retained for a maximum period of 3 years and
            is never passed on to third parties for commercial purposes.
          </p>
          <p>
            In accordance with the GDPR and the French Data Protection Act (loi Informatique et Libertés),
            you have the following rights:
          </p>
          <ul>
            <li>Right of access to your data</li>
            <li>Right of rectification</li>
            <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
            <li>Right to restriction of processing</li>
            <li>Right to object</li>
            <li>Right to data portability</li>
          </ul>
          <p>
            To exercise these rights: <a href="mailto:contact@pixeloria.fr?subject=Demande%20de%20devis%20%E2%80%94%20Pixeloria&body=Bonjour%2C%0A%0AJe%20souhaite%20obtenir%20un%20devis%20pour%20mon%20projet%20web.%0A%0ACordialement%2C">contact@pixeloria.fr</a>.
            If a complaint remains unresolved, you may refer the matter to the CNIL (
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>).
          </p>

          <h2>5. Cookies</h2>
          <p>
            The site uses technical cookies essential to the proper functioning of the forms, as well as
            anonymized audience-measurement cookies via Vercel Analytics (no personally identifiable data
            is collected for this purpose). No advertising or targeting cookies are set. You can disable
            cookies in your browser settings.
          </p>

          <h2>6. Hyperlinks</h2>
          <p>
            The site may contain links to third-party websites. Pixeloria has no control over these sites
            and is not responsible for them. Creating deep links to pixeloria.fr requires prior written
            authorization.
          </p>

          <h2>7. Limitation of liability</h2>
          <p>
            Pixeloria strives to keep the information on the site accurate and up to date. However, no
            guarantee is given as to the completeness or accuracy of the information. Pixeloria cannot be
            held liable for direct or indirect damages arising from the use of the site.
          </p>

          <h2>8. Amendment of the Terms of Use</h2>
          <p>
            These Terms of Use may be amended at any time. The version in force is the one published on
            this page. Continued use of the site constitutes acceptance of the updated Terms of Use.
          </p>

          <h2>9. Governing law</h2>
          <p>
            These Terms of Use are governed by French law. In the event of an unresolved dispute, the
            courts of Lyon, France will have jurisdiction.
          </p>

          <p style={{ marginTop: '2rem' }}>
            <Link href="/en">← Back to home</Link>
          </p>
        </div>
      </main>
      <Footer locale="en" />
    </>
  );
}

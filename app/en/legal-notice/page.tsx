import type { Metadata } from 'next';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Notice — Pixeloria',
  description: 'Legal notice for the Pixeloria website, a web agency for tradespeople and small businesses.',
};

export default function LegalNoticePage() {
  return (
    <>
      <HeaderEn />
      <main style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <h1>Legal Notice</h1>

          <h2>1. Publisher</h2>
          <p>
            This website <strong>pixeloria.fr</strong> is published by:<br />
            <strong>GOMES FABIEN</strong> — trading under the commercial name <strong>Pixeloria</strong><br />
            Legal form: Sole trader (entrepreneur individuel)<br />
            Address: 61 C Avenue Gabriel Péri, 26600 Tain-l&apos;Hermitage, France<br />
            SIREN: 798 262 416<br />
            Trade register (RCS) number: 798 262 416 R.C.S. Lyon<br />
            RCS registration: Lyon Trade and Companies Registry, 19/01/2015<br />
            RNE registration: 15/01/2015<br />
            Intra-community VAT number: FR44798262416<br />
            Email: <a href="mailto:contact@pixeloria.fr?subject=Demande%20de%20devis%20%E2%80%94%20Pixeloria&body=Bonjour%2C%0A%0AJe%20souhaite%20obtenir%20un%20devis%20pour%20mon%20projet%20web.%0A%0ACordialement%2C">contact@pixeloria.fr</a><br />
            Phone: <a href="tel:+33786125313">+33 7 86 12 53 13</a>
          </p>

          <h2>2. Hosting</h2>
          <p>
            This website is hosted by:<br />
            <strong>Vercel Inc.</strong><br />
            440 N Barranca Ave #4133, Covina, CA 91723, United States<br />
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a>
          </p>

          <h2>3. Intellectual property</h2>
          <p>
            All content on this website (text, images, graphics, logo, icons, etc.) is the exclusive
            property of GOMES FABIEN / Pixeloria, unless otherwise stated. Any reproduction, distribution,
            modification, adaptation or commercial use without prior written authorization is strictly
            prohibited.
          </p>

          <h2>4. Personal data</h2>
          <p>
            Data collected through the contact forms is used solely to respond to your enquiries and is
            never disclosed to third parties. In accordance with the General Data Protection Regulation
            (GDPR), you have the right to access, rectify and delete your data. To exercise these rights,
            contact:{' '}
            <a href="mailto:contact@pixeloria.fr?subject=Demande%20de%20devis%20%E2%80%94%20Pixeloria&body=Bonjour%2C%0A%0AJe%20souhaite%20obtenir%20un%20devis%20pour%20mon%20projet%20web.%0A%0ACordialement%2C">contact@pixeloria.fr</a>.
          </p>

          <h2>5. Cookies</h2>
          <p>
            This website uses technical cookies necessary for it to function properly, as well as
            anonymized audience-measurement cookies (Vercel Analytics). No advertising cookies are set.
            You may configure your browser to refuse cookies.
          </p>

          <h2>6. Hyperlinks</h2>
          <p>
            Pixeloria cannot be held liable for the content of third-party websites linked to from
            pixeloria.fr.
          </p>

          <h2>7. Governing law</h2>
          <p>
            This website is governed by French law. Any dispute relating to its use falls under the
            exclusive jurisdiction of the courts of Lyon, France.
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

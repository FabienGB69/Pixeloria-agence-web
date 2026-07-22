import type { Metadata } from 'next';
import HeaderEn from '@/components/layout/HeaderEn';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Sale — Pixeloria',
  description: 'Terms of Sale for Pixeloria — website creation and redesign services.',
};

export default function TermsOfSalePage() {
  return (
    <>
      <HeaderEn />
      <main style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <h1>Terms of Sale</h1>
          <p><em>Last updated: April 2025</em></p>

          <h2>1. Purpose</h2>
          <p>
            These Terms of Sale govern the contractual relationship between GOMES FABIEN (Pixeloria, sole
            trader — SIREN 798 262 416 — 61 C Avenue Gabriel Péri, 26600 Tain-l&apos;Hermitage, France),
            hereinafter &quot;the Provider&quot;, and any individual or legal entity, hereinafter &quot;the
            Client&quot;, wishing to purchase its website creation, redesign or optimization services.
          </p>

          <h2>2. Orders and quotes</h2>
          <p>
            Every service is the subject of a written quote detailing the nature of the work, the
            deliverables, the timeline and the price. The quote is valid for 30 days from its date of
            issue. The order is firm upon receipt of the signed quote and the corresponding deposit.
          </p>

          <h2>3. Pricing and payment terms</h2>
          <p>
            Prices are stated in euros exclusive of tax. The applicable VAT is the rate in force on the
            date of invoicing. Unless otherwise agreed in the quote:
          </p>
          <ul>
            <li>30% on order (non-refundable deposit)</li>
            <li>40% at the midpoint (delivery of the approved design mock-up)</li>
            <li>30% on final delivery</li>
          </ul>
          <p>
            Invoices are payable by bank transfer within 15 days of their date of issue. Any late payment
            incurs late-payment penalties at the statutory rate in force, as well as a fixed recovery fee
            of €40.
          </p>

          <h2>4. Delivery timelines</h2>
          <p>
            The timelines stated in the quote are given for guidance only. They begin upon receipt of the
            deposit and of all necessary materials (content, access, brief). The Provider cannot be held
            liable for any delay attributable to the Client (delayed approval, late delivery of content,
            etc.).
          </p>

          <h2>5. Client obligations</h2>
          <p>
            The Client undertakes to provide accurate, complete and up-to-date information, to respond to
            approval requests within the agreed timeframes, and to guarantee that it holds the necessary
            rights over the content (text, images, trademarks) supplied to the Provider.
          </p>

          <h2>6. Intellectual property</h2>
          <p>
            The creations (mock-ups, source code, visuals) remain the property of the Provider until the
            service has been paid for in full. Upon full payment, the Client acquires a non-exclusive
            licence to use the deliverables for its own purposes. The Provider reserves the right to
            reference the project in its portfolio, unless the Client refuses in writing.
          </p>

          <h2>7. Liability</h2>
          <p>
            The Provider&apos;s liability is limited to the pre-tax amount of the service concerned. The
            Provider cannot be held liable for indirect damages (loss of revenue, loss of data, etc.). The
            Client is solely responsible for the content published on its site and for compliance with
            applicable legislation (GDPR, advertising law, etc.).
          </p>

          <h2>8. Termination</h2>
          <p>
            If the Client terminates the contract after work has begun, the deposit paid remains the
            property of the Provider as compensation. If additional work has been carried out, an invoice
            will be issued on a pro-rata basis.
          </p>

          <h2>9. Data protection (GDPR)</h2>
          <p>
            Personal data collected in the course of the business relationship is processed in accordance
            with the GDPR. It is retained for the applicable statutory period and is not passed on to
            third parties. To exercise your rights:{' '}
            <a href="mailto:contact@pixeloria.fr?subject=Demande%20de%20devis%20%E2%80%94%20Pixeloria&body=Bonjour%2C%0A%0AJe%20souhaite%20obtenir%20un%20devis%20pour%20mon%20projet%20web.%0A%0ACordialement%2C">contact@pixeloria.fr</a>.
          </p>

          <h2>10. Governing law and jurisdiction</h2>
          <p>
            These Terms of Sale are governed by French law. In the event of a dispute, and after any
            attempt at amicable resolution has failed, the courts of Lyon, France will have sole
            jurisdiction.
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

import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions Légales — Pixeloria',
  description: 'Mentions légales du site Pixeloria, agence web pour artisans et PME.',
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <h1>Mentions légales</h1>

          <h2>1. Éditeur du site</h2>
          <p>
            Le présent site <strong>pixeloria.fr</strong> est édité par :<br />
            <strong>GOMES FABIEN</strong> — exploitant sous l&apos;enseigne commerciale <strong>Pixeloria</strong><br />
            Forme juridique : Entrepreneur individuel<br />
            Adresse : 61 C Avenue Gabriel Péri, 26600 Tain-l&apos;Hermitage<br />
            SIREN : 798 262 416<br />
            Numéro RCS : 798 262 416 R.C.S. Lyon<br />
            Inscription au RCS : Greffe de Lyon, le 19/01/2015<br />
            Inscription au RNE : 15/01/2015<br />
            Numéro de TVA intracommunautaire : FR44798262416<br />
            Email : <a href="mailto:contact@pixeloria.fr">contact@pixeloria.fr</a><br />
            Téléphone : <a href="tel:+33786125313">07 86 12 53 13</a>
          </p>

          <h2>2. Hébergement</h2>
          <p>
            Ce site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">https://vercel.com</a>
          </p>

          <h2>3. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des contenus du site (textes, images, graphismes, logo, icônes, etc.) est la propriété
            exclusive de GOMES FABIEN / Pixeloria, sauf mention contraire. Toute reproduction, distribution,
            modification, adaptation ou utilisation à des fins commerciales sans autorisation écrite préalable
            est strictement interdite.
          </p>

          <h2>4. Données personnelles</h2>
          <p>
            Les données collectées via les formulaires de contact sont utilisées exclusivement pour répondre
            à vos demandes et ne sont jamais cédées à des tiers. Conformément au Règlement Général sur la
            Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification et de
            suppression de vos données. Pour exercer ces droits, contactez :{' '}
            <a href="mailto:contact@pixeloria.fr">contact@pixeloria.fr</a>.
          </p>

          <h2>5. Cookies</h2>
          <p>
            Ce site utilise des cookies techniques nécessaires à son bon fonctionnement ainsi que des cookies
            d&apos;analyse d&apos;audience anonymisée (Vercel Analytics). Aucun cookie publicitaire n&apos;est
            déposé. Vous pouvez configurer votre navigateur pour refuser les cookies.
          </p>

          <h2>6. Liens hypertextes</h2>
          <p>
            Pixeloria ne peut être tenu responsable du contenu des sites tiers vers lesquels des liens
            hypertextes pointent depuis pixeloria.fr.
          </p>

          <h2>7. Droit applicable</h2>
          <p>
            Le présent site est soumis au droit français. Tout litige relatif à son utilisation sera de la
            compétence exclusive des tribunaux de Lyon.
          </p>

          <p style={{ marginTop: '2rem' }}>
            <Link href="/">← Retour à l&apos;accueil</Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

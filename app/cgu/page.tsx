import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — Pixeloria",
  description: "CGU du site pixeloria.fr — règles d'utilisation du service.",
};

export default function CGUPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <h1>Conditions Générales d&apos;Utilisation</h1>
          <p><em>Dernière mise à jour : avril 2025</em></p>

          <h2>1. Objet et acceptation</h2>
          <p>
            Les présentes Conditions Générales d&apos;Utilisation (CGU) définissent les règles d&apos;accès et
            d&apos;utilisation du site <strong>pixeloria.fr</strong>, édité par GOMES FABIEN / Pixeloria.
            L&apos;accès au site implique l&apos;acceptation pleine et entière des présentes CGU.
          </p>

          <h2>2. Accès au site</h2>
          <p>
            Le site est accessible gratuitement à tout utilisateur disposant d&apos;un accès à Internet. Le
            Prestataire se réserve le droit de modifier, suspendre ou interrompre l&apos;accès au site à tout
            moment sans préavis, notamment pour des opérations de maintenance.
          </p>

          <h2>3. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des éléments du site (textes, graphismes, logo, code, structure) est protégé par le
            droit de la propriété intellectuelle et est la propriété exclusive de GOMES FABIEN / Pixeloria.
            Toute reproduction, même partielle, sans autorisation écrite préalable est interdite.
          </p>

          <h2>4. Données personnelles et RGPD</h2>
          <p>
            Les données collectées via les formulaires (nom, prénom, email, téléphone) sont destinées
            exclusivement au traitement de votre demande de contact ou de devis. Elles sont conservées
            pendant une durée maximale de 3 ans et ne sont jamais transmises à des tiers à des fins
            commerciales.
          </p>
          <p>
            Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
          </p>
          <ul>
            <li>Droit d&apos;accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l&apos;effacement (« droit à l&apos;oubli »)</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit d&apos;opposition</li>
            <li>Droit à la portabilité</li>
          </ul>
          <p>
            Pour exercer ces droits : <a href="mailto:contact@pixeloria.fr?subject=Demande%20de%20devis%20%E2%80%94%20Pixeloria&body=Bonjour%2C%0A%0AJe%20souhaite%20obtenir%20un%20devis%20pour%20mon%20projet%20web.%0A%0ACordialement%2C">contact@pixeloria.fr</a>.
            En cas de réclamation non résolue, vous pouvez saisir la CNIL (
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>).
          </p>

          <h2>5. Cookies</h2>
          <p>
            Le site utilise des cookies techniques indispensables au bon fonctionnement des formulaires, ainsi
            que des cookies d&apos;analyse d&apos;audience anonymisée via Vercel Analytics (aucune donnée
            personnellement identifiable n&apos;est collectée à cette fin). Aucun cookie publicitaire ou de
            ciblage n&apos;est déposé. Vous pouvez désactiver les cookies dans les paramètres de votre
            navigateur.
          </p>

          <h2>6. Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens vers des sites tiers. Pixeloria n&apos;exerce aucun contrôle sur ces
            sites et n&apos;en est pas responsable. La création de liens profonds vers pixeloria.fr nécessite
            une autorisation préalable écrite.
          </p>

          <h2>7. Limitation de responsabilité</h2>
          <p>
            Pixeloria s&apos;efforce de maintenir des informations exactes et à jour sur le site. Toutefois,
            aucune garantie n&apos;est donnée quant à l&apos;exhaustivité ou l&apos;exactitude des informations.
            Pixeloria ne peut être tenu responsable des dommages directs ou indirects liés à l&apos;utilisation
            du site.
          </p>

          <h2>8. Modification des CGU</h2>
          <p>
            Les présentes CGU peuvent être modifiées à tout moment. La version en vigueur est celle publiée
            sur cette page. L&apos;utilisation continue du site vaut acceptation des CGU mises à jour.
          </p>

          <h2>9. Droit applicable</h2>
          <p>
            Les présentes CGU sont soumises au droit français. En cas de litige non résolu amiablement,
            les tribunaux de Lyon seront compétents.
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

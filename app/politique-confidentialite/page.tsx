import type { Metadata } from 'next';
import { hreflangLanguages } from '@/lib/hreflang';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Pixeloria',
  description: 'Politique de confidentialité et traitement des données personnelles — Pixeloria.',
  alternates: {
    canonical: 'https://pixeloria.fr/politique-confidentialite',
    languages: hreflangLanguages('/politique-confidentialite'),
  },
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="legal-page">
      <div className="container">
        <h1>Politique de confidentialité</h1>
        <p className="legal-date">Dernière mise à jour : avril 2025</p>

        <section>
          <h2>1. Responsable du traitement</h2>
          <p>
            Pixeloria — <a href="mailto:contact@pixeloria.fr">contact@pixeloria.fr</a> —{' '}
            <a href="tel:+33786125313">07 86 12 53 13</a>
          </p>
        </section>

        <section>
          <h2>2. Données collectées</h2>
          <p>
            Lors de l&apos;utilisation du formulaire de contact, nous collectons : nom, entreprise,
            adresse e-mail, numéro de téléphone (facultatif) et le contenu de votre message.
          </p>
        </section>

        <section>
          <h2>3. Finalité du traitement</h2>
          <p>
            Les données collectées sont utilisées uniquement pour répondre à vos demandes et
            assurer le suivi commercial de votre projet. Elles ne sont pas utilisées à des fins
            de prospection ou partagées avec des tiers.
          </p>
        </section>

        <section>
          <h2>4. Durée de conservation</h2>
          <p>
            Vos données sont conservées pendant la durée nécessaire au traitement de votre
            demande, et au maximum 3 ans à compter du dernier contact.
          </p>
        </section>

        <section>
          <h2>5. Vos droits</h2>
          <p>
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
            d&apos;effacement et d&apos;opposition. Pour exercer ces droits, contactez-nous à{' '}
            <a href="mailto:contact@pixeloria.fr">contact@pixeloria.fr</a>.
          </p>
        </section>

        <section>
          <h2>6. Hébergement</h2>
          <p>
            Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco,
            CA 94104, États-Unis.
          </p>
        </section>

        <section id="cookies">
          <h2>7. Cookies et traceurs</h2>
          <p>
            Ce site dépose des cookies et traceurs relevant de trois catégories :
          </p>
          <ul>
            <li>
              <strong>Cookies nécessaires (toujours actifs)</strong> : préférence de langue,
              sécurité anti-bot des formulaires (Cloudflare Turnstile).
            </li>
            <li>
              <strong>Cookies de mesure d&apos;audience (soumis à consentement)</strong> : Google
              Analytics, Google Tag Manager.
            </li>
            <li>
              <strong>Cookies réseaux sociaux (soumis à consentement)</strong> : widget X
              (Twitter) affichant nos dernières publications.
            </li>
          </ul>
          <p>
            Vous pouvez modifier votre choix à tout moment via le lien « Gérer les cookies »
            présent dans le pied de page du site.
          </p>
        </section>

        <p style={{ marginTop: '2rem' }}>
          <Link href="/">← Retour à l&apos;accueil</Link>
        </p>
      </div>
    </main>
  );
}

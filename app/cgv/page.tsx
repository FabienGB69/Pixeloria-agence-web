import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente — Pixeloria',
  description: 'CGV de Pixeloria — prestations de création et refonte de sites web.',
  robots: { index: false, follow: false },
};

export default function CGVPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <h1>Conditions Générales de Vente</h1>
          <p><em>Dernière mise à jour : avril 2025</em></p>

          <h2>1. Objet</h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre
            GOMES FABIEN (Pixeloria, EI — SIREN 798 262 416 — 61 C Avenue Gabriel Péri, 26600 Tain-l&apos;Hermitage) ci-après « le Prestataire », et toute personne
            physique ou morale, ci-après « le Client », souhaitant acquérir ses services de création, refonte
            ou optimisation de sites web.
          </p>

          <h2>2. Commandes et devis</h2>
          <p>
            Toute prestation fait l&apos;objet d&apos;un devis écrit détaillant la nature des travaux, les
            livrables, les délais et le prix. Le devis est valable 30 jours à compter de sa date d&apos;émission.
            La commande est ferme à réception du devis signé et de l&apos;acompte correspondant.
          </p>

          <h2>3. Tarifs et modalités de paiement</h2>
          <p>
            Les prix sont exprimés en euros hors taxes (HT). La TVA applicable est celle en vigueur au jour
            de la facturation. Sauf accord contraire stipulé au devis :
          </p>
          <ul>
            <li>30 % à la commande (acompte non remboursable)</li>
            <li>40 % à mi-parcours (livraison de la maquette validée)</li>
            <li>30 % à la livraison finale</li>
          </ul>
          <p>
            Les factures sont payables par virement bancaire dans un délai de 15 jours à compter de leur date
            d&apos;émission. Tout retard de paiement entraîne des pénalités de retard au taux légal en vigueur,
            ainsi qu&apos;une indemnité forfaitaire de recouvrement de 40 €.
          </p>

          <h2>4. Délais de livraison</h2>
          <p>
            Les délais indiqués au devis sont donnés à titre indicatif. Ils débutent à compter de la réception
            de l&apos;acompte et de l&apos;ensemble des éléments nécessaires (contenus, accès, brief). Le Prestataire
            ne peut être tenu responsable de tout retard imputable au Client (retard de validation, fourniture
            tardive de contenus, etc.).
          </p>

          <h2>5. Obligations du Client</h2>
          <p>
            Le Client s&apos;engage à fournir des informations exactes, complètes et à jour, à répondre aux
            demandes de validation dans les délais convenus, et à garantir qu&apos;il dispose des droits
            nécessaires sur les contenus (textes, images, marques) fournis au Prestataire.
          </p>

          <h2>6. Propriété intellectuelle</h2>
          <p>
            Les créations (maquettes, code source, visuels) demeurent la propriété du Prestataire jusqu&apos;au
            règlement intégral de la prestation. À l&apos;issue du paiement complet, le Client acquiert une
            licence d&apos;exploitation non exclusive des livrables pour son usage propre. Le Prestataire se
            réserve le droit de mentionner le projet à titre de référence dans son portfolio, sauf refus
            écrit du Client.
          </p>

          <h2>7. Responsabilité</h2>
          <p>
            La responsabilité du Prestataire est limitée au montant HT de la prestation concernée. Le
            Prestataire ne peut être tenu responsable des dommages indirects (perte de chiffre d&apos;affaires,
            perte de données, etc.). Le Client est seul responsable du contenu publié sur son site et du
            respect de la législation applicable (RGPD, droit de la publicité, etc.).
          </p>

          <h2>8. Résiliation</h2>
          <p>
            En cas de résiliation à l&apos;initiative du Client après démarrage des travaux, l&apos;acompte versé
            reste acquis au Prestataire à titre de dédommagement. Si des travaux supplémentaires ont été
            réalisés, une facture au prorata sera émise.
          </p>

          <h2>9. Protection des données (RGPD)</h2>
          <p>
            Les données personnelles collectées lors de la relation commerciale sont traitées conformément au
            RGPD. Elles sont conservées pendant la durée légale applicable et ne sont pas transmises à des
            tiers. Pour exercer vos droits :{' '}
            <a href="mailto:contact@pixeloria.fr?subject=Demande%20de%20devis%20%E2%80%94%20Pixeloria&body=Bonjour%2C%0A%0AJe%20souhaite%20obtenir%20un%20devis%20pour%20mon%20projet%20web.%0A%0ACordialement%2C">contact@pixeloria.fr</a>.
          </p>

          <h2>10. Droit applicable et juridiction</h2>
          <p>
            Les présentes CGV sont soumises au droit français. En cas de litige, et après échec de toute
            tentative de résolution amiable, les tribunaux de Lyon seront seuls compétents.
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

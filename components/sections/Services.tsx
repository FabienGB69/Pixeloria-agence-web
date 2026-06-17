'use client';

import { trackOfferSelect } from '@/lib/gtm';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Notre offre</span>
          <h2>Un site professionnel pour artisans, livré en 72h</h2>
          <p className="section-sub">
            Pixeloria aide les artisans et TPE à obtenir un site clair et efficace pour recevoir plus de demandes de devis. Paiement unique, sans abonnement imposé.
          </p>
        </div>

        <div className="pricing-cards pricing-cards--two">

          {/* Offre principale — Site Artisan */}
          <div className="pricing-card pricing-card--featured">
            <span className="pricing-badge">L&apos;offre artisan</span>
            <p className="pricing-label">Site Artisan</p>
            <p className="pricing-price">199 € <span>TTC</span></p>
            <p className="pricing-sublabel">Paiement unique — livraison sous 72h</p>
            <p className="pricing-accroche">
              Un site professionnel pensé pour générer des demandes de devis, livré en 72h après réception de vos contenus.
            </p>
            <p className="pricing-list-title">Inclus :</p>
            <ul>
              <li>Site one page professionnel</li>
              <li>Jusqu&apos;à 5 sections</li>
              <li>Design moderne</li>
              <li>Version mobile</li>
              <li>Bouton téléphone</li>
              <li>Bouton WhatsApp</li>
              <li>Formulaire de devis</li>
              <li>Google Maps</li>
              <li>Prestations</li>
              <li>Zone d&apos;intervention</li>
              <li>Avis clients / réassurance</li>
              <li>Mentions légales simples</li>
              <li>Mise en ligne</li>
              <li>Optimisation SEO locale de base</li>
            </ul>
            <p className="pricing-note">Site one page clé en main, mis en ligne, optimisé pour le mobile et Google.</p>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={() => trackOfferSelect('Site Artisan', '199 TTC')}
            >
              Lancer mon site →
            </a>
          </div>

          {/* Option — Visibilité */}
          <div className="pricing-card">
            <p className="pricing-label">Option Visibilité</p>
            <p className="pricing-price">49 € <span>TTC / mois</span></p>
            <p className="pricing-sublabel">En complément du Site Artisan</p>
            <p className="pricing-accroche">
              Votre site reste à jour, sécurisé et optimisé, sans que vous ayez à vous en occuper.
            </p>
            <p className="pricing-sub-accroche">
              Une tranquillité mensuelle pour éviter d&apos;avoir un site abandonné après sa mise en ligne.
            </p>
            <p className="pricing-list-title">Inclus :</p>
            <ul>
              <li>Maintenance technique du site</li>
              <li>Sauvegardes régulières</li>
              <li>Corrections mineures</li>
              <li>Petites modifications de textes, photos ou prestations</li>
              <li>Mise à jour des coordonnées, horaires ou boutons d&apos;appel</li>
              <li>Ajout ou modification de zones d&apos;intervention</li>
              <li>Vérification de l&apos;affichage mobile</li>
              <li>Optimisation SEO locale progressive</li>
              <li>Assistance prioritaire par message</li>
            </ul>
            <p className="pricing-list-title pricing-list-title--excluded">Non inclus :</p>
            <ul className="pricing-excluded">
              <li>Refonte complète du site</li>
              <li>Création de nouvelles pages complexes</li>
              <li>Google Ads, gestion des réseaux sociaux, articles de blog</li>
            </ul>
            <p className="pricing-note">Sans engagement · Résiliable à tout moment.</p>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={() => trackOfferSelect('Option Visibilité', '49 TTC / mois')}
            >
              Ajouter l&apos;Option Visibilité →
            </a>
          </div>

        </div>

        <p className="pricing-disclaimer reveal">
          Tous les prix sont TTC &middot; TVA applicable selon votre situation &middot;{' '}
          <a href="#contact">Contactez-nous</a> pour un devis personnalisé gratuit.
        </p>
      </div>
    </section>
  );
}

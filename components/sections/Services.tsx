'use client';

import { trackOfferSelect } from '@/lib/gtm';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Nos offres</span>
          <h2>Des offres claires pour créer ou refondre votre site internet</h2>
          <p className="section-sub">
            Choisissez la formule adaptée à votre besoin&nbsp;: une création simple en
            paiement unique, ou un accompagnement mensuel avec maintenance et optimisation.
          </p>
        </div>

        <div className="pricing-cards pricing-cards--three">

          {/* Offre 1 — Site Essentiel */}
          <div className="pricing-card">
            <p className="pricing-label">Site Essentiel</p>
            <p className="pricing-price">490 € <span>TTC</span></p>
            <p className="pricing-sublabel">Paiement unique — sans abonnement</p>
            <p className="pricing-accroche">
              Pour les entreprises qui veulent un site vitrine simple, professionnel et livré clé en main.
            </p>
            <p className="pricing-list-title">Inclus :</p>
            <ul>
              <li>Création ou refonte d&apos;un site vitrine simple</li>
              <li>Jusqu&apos;à 3 pages</li>
              <li>Design responsive mobile, tablette et ordinateur</li>
              <li>Formulaire de contact</li>
              <li>Bouton d&apos;appel direct</li>
              <li>Mise en ligne du site</li>
              <li>Optimisation technique de base</li>
              <li>Accompagnement à la prise en main</li>
            </ul>
            <p className="pricing-list-title pricing-list-title--excluded">Non inclus :</p>
            <ul className="pricing-excluded">
              <li>Maintenance mensuelle</li>
              <li>SEO mensuel</li>
              <li>Modifications après livraison</li>
            </ul>
            <p className="pricing-note">Idéal si vous souhaitez une présence en ligne professionnelle, sans suivi mensuel.</p>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={() => trackOfferSelect('Site Essentiel', '490 TTC')}
            >
              Choisir Site Essentiel →
            </a>
          </div>

          {/* Offre 2 — Site Sérénité */}
          <div className="pricing-card pricing-card--featured">
            <span className="pricing-badge">Recommandé</span>
            <p className="pricing-label">Site Sérénité</p>
            <p className="pricing-price">89 € <span>TTC / mois</span></p>
            <p className="pricing-sublabel">Engagement recommandé : 12 mois</p>
            <p className="pricing-accroche">
              Votre site créé, maintenu et optimisé pour le SEO local de base, sans gros investissement au départ.
            </p>
            <p className="pricing-list-title">Inclus :</p>
            <ul>
              <li>Création ou refonte du site vitrine</li>
              <li>Jusqu&apos;à 5 pages</li>
              <li>Design responsive</li>
              <li>Formulaire de contact</li>
              <li>Bouton d&apos;appel direct</li>
              <li>Bouton WhatsApp si souhaité</li>
              <li>Intégration des avis Google</li>
              <li>Galerie réalisations</li>
              <li>Maintenance technique incluse</li>
              <li>Sauvegardes &amp; sécurité</li>
              <li>Petites modifications mensuelles</li>
              <li>SEO local de base inclus</li>
              <li>Indexation Google</li>
            </ul>
            <p className="pricing-note">Idéal pour les entreprises qui veulent un site professionnel maintenu dans le temps, avec un budget mensuel maîtrisé.</p>
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={() => trackOfferSelect('Site Sérénité', '89 TTC / mois')}
            >
              Choisir Site Sérénité →
            </a>
          </div>

          {/* Offre 3 — Site Croissance */}
          <div className="pricing-card">
            <span className="pricing-badge pricing-badge--alt">Le plus complet</span>
            <p className="pricing-label">Site Croissance</p>
            <p className="pricing-price">159 € <span>TTC / mois</span></p>
            <p className="pricing-sublabel">Engagement recommandé : 12 mois</p>
            <p className="pricing-accroche">
              Pour les entreprises qui veulent développer leur visibilité locale avec un site, un suivi mensuel et une stratégie de contenu.
            </p>
            <p className="pricing-list-title">Tout Site Sérénité, plus :</p>
            <ul>
              <li>SEO local renforcé</li>
              <li>Optimisation Google Business Profile</li>
              <li>Suivi Google Search Console</li>
              <li>Création d&apos;un contenu ou article optimisé par mois</li>
              <li>Optimisation des pages existantes</li>
              <li>Reporting mensuel simple</li>
              <li>Conseils pour améliorer les demandes de contact</li>
              <li>Accompagnement visibilité locale</li>
            </ul>
            <p className="pricing-note">Idéal pour les TPE, PME et artisans qui veulent faire de leur site un vrai levier de visibilité et de prospection locale.</p>
            <a
              href="#contact"
              className="btn btn-secondary"
              onClick={() => trackOfferSelect('Site Croissance', '159 TTC / mois')}
            >
              Choisir Site Croissance →
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

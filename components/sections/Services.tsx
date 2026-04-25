export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Nos offres</span>
          <h2>Une offre adaptée à chaque étape de votre développement</h2>
          <p className="section-sub">
            Que vous partiez de zéro ou que vous refassiez un site existant,
            nous avons la formule qui correspond à votre budget et vos objectifs.
          </p>
        </div>

        <div className="pricing-cards pricing-cards--three">
          {/* Offre 1 — Site Essentiel */}
          <div className="pricing-card">
            <p className="pricing-label">Site Essentiel</p>
            <p className="pricing-price">
              <small className="pricing-from">à partir de</small> 490 € <span>TTC</span>
            </p>
            <p className="pricing-sublabel">Paiement unique · sans abonnement</p>
            <ul>
              <li>3 pages (Accueil, Services, Contact)</li>
              <li>Design responsive sur-mesure</li>
              <li>Formulaire de contact inclus</li>
              <li>Mise en ligne sur votre domaine</li>
              <li>Optimisation vitesse de base</li>
            </ul>
            <p className="pricing-note">Idéal pour démarrer avec un site propre et professionnel.</p>
            <a href="#contact" className="btn btn-secondary">Demander un devis →</a>
          </div>

          {/* Offre 2 — Site Sérénité */}
          <div className="pricing-card pricing-card--featured">
            <span className="pricing-badge">Recommandé</span>
            <p className="pricing-label">Site Sérénité</p>
            <p className="pricing-price">89 € <span>/ mois TTC</span></p>
            <p className="pricing-sublabel">Engagement 12 mois recommandé</p>
            <ul>
              <li>Jusqu&apos;à 5 pages sur-mesure</li>
              <li>Hébergement + domaine offerts</li>
              <li>Maintenance &amp; mises à jour incluses</li>
              <li>Sauvegardes automatiques</li>
              <li>SEO local de base inclus</li>
              <li>Indexation Google &amp; Bing</li>
              <li>Support WhatsApp sous 24 h</li>
            </ul>
            <p className="pricing-note">La formule complète pour les artisans et PME qui veulent être trouvés sur Google.</p>
            <a href="#contact" className="btn btn-primary">Choisir cette offre →</a>
          </div>

          {/* Offre 3 — Site Croissance */}
          <div className="pricing-card">
            <p className="pricing-label">Site Croissance</p>
            <p className="pricing-price">
              <small className="pricing-from">à partir de</small> 149 € <span>/ mois TTC</span>
            </p>
            <p className="pricing-sublabel">Tout Sérénité +</p>
            <ul>
              <li>SEO local renforcé chaque mois</li>
              <li>Google Business Profile optimisé</li>
              <li>Search Console &amp; Analytics configurés</li>
              <li>1 article de blog / mois</li>
              <li>Reporting mensuel de performance</li>
              <li>Modifications illimitées mineures</li>
            </ul>
            <p className="pricing-note">Pour les entreprises qui veulent dominer les résultats Google dans leur zone.</p>
            <a href="#contact" className="btn btn-secondary">Choisir cette offre →</a>
          </div>
        </div>

        <p className="pricing-disclaimer reveal">
          Tous les prix sont TTC · TVA applicable selon votre situation ·{' '}
          <a href="#contact">Contactez-nous</a> pour un devis personnalisé gratuit.
        </p>
      </div>
    </section>
  );
}

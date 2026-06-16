export default function LaunchBanner() {
  return (
    <div className="launch-banner" role="banner" aria-label="Site Artisan Pixeloria">
      <div className="container launch-banner-inner">
        <div className="launch-banner-text">
          <strong className="launch-banner-title">Site Artisan — 199 € TTC</strong>
          <span className="launch-banner-desc">
            Site professionnel livré sous 72h · Bouton téléphone, WhatsApp, formulaire de devis, Google Maps inclus.
          </span>
        </div>
        <a href="#contact" className="btn btn-primary btn-sm">
          Lancer mon site →
        </a>
      </div>
    </div>
  );
}

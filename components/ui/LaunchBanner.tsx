export default function LaunchBanner() {
  return (
    <div className="launch-banner" role="banner" aria-label="Offre de lancement">
      <div className="container launch-banner-inner">
        <div className="launch-banner-text">
          <strong className="launch-banner-title">Offre de lancement Pixeloria</strong>
          <span className="launch-banner-desc">
            Votre site vitrine professionnel à partir de 89&nbsp;€&nbsp;TTC/mois.
            Création incluse, maintenance incluse et SEO local de base inclus.{' '}
            <em>Places limitées aux 10 premiers clients.</em>
          </span>
        </div>
        <a href="#contact" className="btn btn-primary btn-sm">
          Profiter de l&apos;offre de lancement
        </a>
      </div>
    </div>
  );
}

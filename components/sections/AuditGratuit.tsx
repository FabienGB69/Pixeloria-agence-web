export default function AuditGratuit() {
  return (
    <section id="audit-gratuit" className="section">
      <div className="container">
        <div className="audit-card reveal">
          <div className="audit-text">
            <span className="eyebrow">Audit offert</span>
            <h2>Demandez un audit gratuit de votre site</h2>
            <p>
              Vous avez déjà un site mais il ne génère pas assez de contacts&nbsp;?
              Pixeloria peut analyser rapidement votre site et vous transmettre des
              pistes concrètes d&apos;amélioration.
            </p>
            <p className="audit-scope-title">L&apos;audit peut porter sur :</p>
            <ul className="audit-scope">
              <li>La clarté de votre message</li>
              <li>La lisibilité mobile</li>
              <li>Les appels à l&apos;action</li>
              <li>La structure de vos pages</li>
              <li>Le SEO local</li>
              <li>La vitesse perçue</li>
              <li>La confiance et la réassurance</li>
            </ul>
          </div>
          <div className="audit-cta">
            <a href="#contact" className="btn btn-primary btn-lg">
              Demander mon audit gratuit
              <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <p className="audit-cta-note">Réponse rapide avec une première orientation claire selon votre besoin.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

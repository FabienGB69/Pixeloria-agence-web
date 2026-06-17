const rows: { feature: string; express: string; visibilite: string }[] = [
  { feature: 'Site one page professionnel', express: 'Oui', visibilite: 'Oui' },
  { feature: 'Jusqu\'à 5 sections', express: 'Oui', visibilite: 'Oui' },
  { feature: 'Design moderne responsive', express: 'Oui', visibilite: 'Oui' },
  { feature: 'Bouton téléphone & WhatsApp', express: 'Oui', visibilite: 'Oui' },
  { feature: 'Formulaire de devis', express: 'Oui', visibilite: 'Oui' },
  { feature: 'Google Maps intégré', express: 'Oui', visibilite: 'Oui' },
  { feature: 'Avis clients / réassurance', express: 'Oui', visibilite: 'Oui' },
  { feature: 'Mise en ligne incluse', express: 'Oui', visibilite: 'Oui' },
  { feature: 'SEO local de base', express: 'Oui', visibilite: 'Oui' },
  { feature: 'Maintenance technique', express: 'Non', visibilite: 'Oui' },
  { feature: 'Petites modifications', express: 'Non', visibilite: 'Oui' },
  { feature: 'Optimisation progressive', express: 'Non', visibilite: 'Oui' },
  { feature: 'Assistance prioritaire', express: 'Non', visibilite: 'Oui' },
];

function Cell({ value }: { value: string }) {
  const isOui = value === 'Oui';
  const isNon = value === 'Non';
  return (
    <td className={`ctable-cell${isOui ? ' ctable-cell--yes' : isNon ? ' ctable-cell--no' : ''}`}>
      {isOui ? (
        <svg viewBox="0 0 16 16" fill="none" aria-label="Oui">
          <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : isNon ? (
        <svg viewBox="0 0 16 16" fill="none" aria-label="Non">
          <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) : (
        <span>{value}</span>
      )}
    </td>
  );
}

export default function ComparisonTable() {
  return (
    <section className="section section-tinted">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Comparatif</span>
          <h2>Ce qui est inclus</h2>
          <p className="section-sub">Tout est inclus dans l&apos;offre de base. L&apos;option Visibilité ajoute le suivi mensuel.</p>
        </div>

        <div className="ctable-wrap reveal">
          <table className="ctable">
            <thead>
              <tr>
                <th className="ctable-feature-col">Fonctionnalité</th>
                <th>Site Artisan<br /><span className="ctable-price">199 € TTC</span></th>
                <th className="ctable-th--highlight">Option Visibilité<br /><span className="ctable-price">+49 €/mois</span></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <td className="ctable-feature">{row.feature}</td>
                  <Cell value={row.express} />
                  <Cell value={row.visibilite} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="ctable-cta reveal">
          <a href="#contact" className="btn btn-primary">
            Demander un audit gratuit
            <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

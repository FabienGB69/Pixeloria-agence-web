const rows: { feature: string; essentiel: string; serenite: string; croissance: string }[] = [
  { feature: 'Création ou refonte du site', essentiel: 'Oui', serenite: 'Oui', croissance: 'Oui' },
  { feature: 'Nombre de pages incluses', essentiel: 'Jusqu\'à 3', serenite: 'Jusqu\'à 5', croissance: 'Jusqu\'à 5' },
  { feature: 'Design responsive', essentiel: 'Oui', serenite: 'Oui', croissance: 'Oui' },
  { feature: 'Formulaire de contact', essentiel: 'Oui', serenite: 'Oui', croissance: 'Oui' },
  { feature: 'Bouton appel direct', essentiel: 'Oui', serenite: 'Oui', croissance: 'Oui' },
  { feature: 'Bouton WhatsApp', essentiel: 'Option', serenite: 'Oui', croissance: 'Oui' },
  { feature: 'Maintenance', essentiel: 'Non', serenite: 'Oui', croissance: 'Oui' },
  { feature: 'Sauvegardes', essentiel: 'Non', serenite: 'Oui', croissance: 'Oui' },
  { feature: 'Petites modifications mensuelles', essentiel: 'Non', serenite: 'Oui', croissance: 'Oui' },
  { feature: 'SEO local de base', essentiel: 'Non', serenite: 'Oui', croissance: 'Oui' },
  { feature: 'SEO local renforcé', essentiel: 'Non', serenite: 'Non', croissance: 'Oui' },
  { feature: 'Google Business Profile', essentiel: 'Non', serenite: 'Non', croissance: 'Oui' },
  { feature: 'Article ou contenu mensuel', essentiel: 'Non', serenite: 'Non', croissance: 'Oui' },
  { feature: 'Reporting mensuel', essentiel: 'Non', serenite: 'Non', croissance: 'Oui' },
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
          <h2>Comparez les formules</h2>
          <p className="section-sub">Choisissez en un coup d&apos;œil la formule qui correspond à votre situation.</p>
        </div>

        <div className="ctable-wrap reveal">
          <table className="ctable">
            <thead>
              <tr>
                <th className="ctable-feature-col">Fonctionnalité</th>
                <th>Site Essentiel<br /><span className="ctable-price">490 € TTC</span></th>
                <th>Site Sérénité<br /><span className="ctable-price">89 €/mois</span></th>
                <th className="ctable-th--highlight">Site Croissance<br /><span className="ctable-price">159 €/mois</span></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature}>
                  <td className="ctable-feature">{row.feature}</td>
                  <Cell value={row.essentiel} />
                  <Cell value={row.serenite} />
                  <Cell value={row.croissance} />
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

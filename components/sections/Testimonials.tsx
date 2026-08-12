import { getPublishedTestimonials } from '@/lib/notion';

// Repli affiché si Notion est indisponible ou si aucun témoignage n'est
// encore publié — jamais de section vide (voir issue #164).
const fallbackTestimonials = [
  {
    prenom:   'Félicité',
    activite: 'Conciergerie location courte durée',
    ville:    'Annonay',
    note:     5,
    avis:     "Avec mon nouveau site l'image et la visibilité de mon entreprise sont nettement améliorées. Mon activité a pris un coup d'élan depuis. Je recommande.",
  },
];

const trustPoints = [
  {
    title: 'Interlocuteur unique',
    desc: 'Vous échangez directement avec la personne qui comprend votre besoin et pilote votre projet.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Offres lisibles',
    desc: "Vous savez ce qui est inclus, ce qui ne l'est pas, et quelle formule correspond à votre situation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 10h8M8 14h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Design professionnel',
    desc: 'Votre site doit inspirer confiance dès les premières secondes, sur ordinateur comme sur mobile.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8 22h8M12 18v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Vision métier',
    desc: 'Pixeloria comprend les contraintes des artisans et TPE : temps limité, besoin de clarté, budget maîtrisé.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21V9l9-6 9 6v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="9" y="14" width="6" height="7" rx="1" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
];

function StarRating({ note }: { note: number }) {
  return (
    <span className="testimonial-stars" role="img" aria-label={`Note : ${note} sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} aria-hidden="true" style={{ color: i < note ? '#f59e0b' : 'rgba(255,255,255,0.2)' }}>
          ★
        </span>
      ))}
    </span>
  );
}

export default async function Testimonials() {
  const published = await getPublishedTestimonials();
  const testimonials = published.length > 0 ? published : fallbackTestimonials;

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="testimonials-halo testimonials-halo--top" aria-hidden="true" />
      <div className="testimonials-halo testimonials-halo--bottom" aria-hidden="true" />

      <div className="container">

        {/* Section header */}
        <div className="testimonials-header reveal">
          <span className="testimonials-badge">Avis clients</span>
          <h2>Ce que disent nos clients</h2>
          <p className="testimonials-sub">
            Des artisans, indépendants et TPE qui ont fait confiance à Pixeloria pour leur présence en ligne.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <article key={i} className="testimonial-card reveal">
              <StarRating note={t.note} />
              <blockquote className="testimonial-quote">
                <p>&laquo;&nbsp;{t.avis}&nbsp;&raquo;</p>
              </blockquote>
              <footer className="testimonial-author">
                <strong>{t.prenom}</strong>
                <span className="testimonial-sep" aria-hidden="true"> · </span>
                <span>{t.activite}</span>
                <span className="testimonial-sep" aria-hidden="true"> · </span>
                <span>{t.ville}</span>
              </footer>
            </article>
          ))}
        </div>

        {/* Trust points */}
        <div className="trust-card trust-card--wide reveal">
          <div className="tc-halo" aria-hidden="true" />
          <div className="tc-card-header">
            <div className="tc-shield-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2l7 3v5c0 5-3.5 9-7 10C8.5 19 5 15 5 10V5l7-3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
                <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="tc-label">Méthode Pixeloria</p>
              <h3>Une approche pensée pour les pros</h3>
            </div>
          </div>
          <p className="tc-intro">
            Pixeloria privilégie les sites utiles, crédibles et faciles à faire évoluer,
            sans complexité inutile.
          </p>
          <div className="tc-grid">
            {trustPoints.map((pt) => (
              <div key={pt.title} className="tc-point">
                <div className="tc-point-icon" aria-hidden="true">{pt.icon}</div>
                <strong>{pt.title}</strong>
                <p>{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

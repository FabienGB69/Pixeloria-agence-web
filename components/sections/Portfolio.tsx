'use client';

import Image from 'next/image';
import Link from 'next/link';
import { trackCaseStudyClick } from '@/lib/gtm';

type Project = {
  type: string;
  year: string;
  client: string;
  sector: string;
  slug: string;
  url: string;
  summary: string;
  bullets: string[];
  beforeImage?: string;
};

const projects: Project[] = [
  {
    type: 'Refonte',
    year: '2026',
    client: 'Escalee & Goûts',
    sector: 'CONCIERGERIE / TOURISME',
    slug: 'escalee-gouts',
    url: 'https://www.escaleetgouts.fr/',
    summary: 'Refonte complète d\'un site de conciergerie pour une expérience haut de gamme.',
    bullets: [
      'Design premium orienté conversion',
      'Expérience mobile pensée pour faciliter la prise de contact',
      'Base SEO restructurée pour une meilleure visibilité locale',
      'Pages de destination locales',
    ],
    beforeImage: '/assets/portfolio/escalee-avant.png',
  },
  {
    type: 'Refonte',
    year: '2026',
    client: 'Lenora Conciergerie',
    sector: 'CONCIERGERIE',
    slug: 'lenora-conciergerie',
    url: 'https://lenora-conciergerie.vercel.app/',
    summary: 'Modernisation d\'un site de conciergerie pour renforcer la crédibilité et les prises de contact.',
    bullets: [
      'Identité visuelle épurée et professionnelle',
      'Parcours de contact simplifié pour réduire les frictions',
      'Expérience mobile pensée pour faciliter la prise de contact',
      'Temps de chargement optimisé',
    ],
    beforeImage: '/assets/portfolio/lenora-avant.png',
  },
  {
    type: 'Création complète',
    year: '2026',
    client: 'Content by Denise',
    sector: 'RÉDACTION & CONTENU',
    slug: 'content-by-denise',
    url: 'https://contentbydenise.vercel.app/',
    summary: 'Création d\'un portfolio professionnel pour une rédactrice freelance.',
    bullets: [
      'Branding unique et mémorable',
      'Portfolio de contenus mis en valeur',
      'Appels à l\'action orientés leads',
      'Optimisation SEO dès le lancement',
    ],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section section-tinted">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">Études de cas</span>
          <h2>Études de cas client</h2>
          <p className="section-sub">
            Découvrez comment Pixeloria transforme des sites existants ou crée des sites vitrines
            plus clairs, plus modernes et mieux structurés pour inspirer confiance et générer
            davantage de demandes de contact.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <article
              key={p.client}
              className={`project-card reveal${i === 1 ? ' project-card-lg' : ''}`}
            >
              <div className="project-meta">
                <span className="tag">{p.type}</span>
                <span className="project-year">{p.year}</span>
              </div>

              <div className="project-sector" style={{ fontSize: '0.78rem', marginBottom: '0.5rem' }}>
                {p.sector}
              </div>

              <h3>{p.client}</h3>
              <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>
                {p.summary}
              </p>

              <ul className="project-bullets">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {p.beforeImage ? (
                <div className="portfolio-comparison">
                  <div className="portfolio-thumb-wrap">
                    <span className="thumb-label thumb-label--before">Avant</span>
                    <Image
                      className="portfolio-thumb"
                      src={p.beforeImage}
                      alt={`Site avant refonte — ${p.client}`}
                      width={600}
                      height={450}
                      onError={(e) => {
                        (e.currentTarget.closest('.portfolio-thumb-wrap') as HTMLElement | null)?.style.setProperty('display', 'none');
                      }}
                    />
                  </div>
                  <div className="portfolio-thumb-wrap">
                    <span className="thumb-label thumb-label--after">Après</span>
                    <a
                      href={p.url}
                      className="portfolio-thumb portfolio-thumb--link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Voir le site après refonte — ${p.client}`}
                    >
                      Voir le site →
                    </a>
                  </div>
                </div>
              ) : (
                <div className="portfolio-creation-badge">Création complète</div>
              )}

              {/* CTA principal → étude de cas */}
              <Link
                href={`/realisations/${p.slug}`}
                className="project-link"
                onClick={() => trackCaseStudyClick(p.client, p.type)}
              >
                Voir la transformation
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              {/* CTA secondaire → site final */}
              <a
                href={p.url}
                className="project-link-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le site final ↗
              </a>
            </article>
          ))}
        </div>

        <div className="portfolio-cta reveal">
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

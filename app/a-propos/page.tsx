import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "À propos — L'agence Pixeloria",
  description:
    "Qui sommes-nous ? Pixeloria est une agence web spécialisée dans la création de sites pour artisans, TPE et PME. Nos compétences, notre approche et nos valeurs.",
  openGraph: {
    type: 'website',
    url: 'https://pixeloria.fr/a-propos',
    title: "À propos — L'agence Pixeloria",
    description:
      'Pixeloria : création de sites web pour les professionnels locaux. Nos compétences, notre approche, nos valeurs.',
    locale: 'fr_FR',
    siteName: 'Pixeloria',
  },
};

const skills = [
  {
    icon: '🎨',
    title: 'Design & UX',
    description:
      'Sites modernes, clairs et pensés pour convertir. Chaque page guide le visiteur vers le contact.',
  },
  {
    icon: '⚡',
    title: 'Performance',
    description:
      'Lighthouse > 90, LCP < 2s, pages qui chargent vite sur mobile comme sur desktop.',
  },
  {
    icon: '📍',
    title: 'SEO local',
    description:
      'Google My Business, ciblage géographique, pages locales et données structurées Schema.org.',
  },
  {
    icon: '🔒',
    title: 'Sécurité & maintenance',
    description:
      'Certificat SSL, mises à jour régulières, sauvegardes automatiques et surveillance continue.',
  },
  {
    icon: '📊',
    title: 'Tracking & analytics',
    description:
      'Google Analytics 4, événements de conversion, suivi des leads et des formulaires de contact.',
  },
  {
    icon: '✉️',
    title: 'Intégrations',
    description:
      'Formulaires reliés à votre CRM, emails automatiques, WhatsApp Business, prise de rendez-vous.',
  },
];

const values = [
  {
    number: '01',
    title: 'Clarté avant tout',
    description:
      "Un site web ne doit pas impressionner — il doit être compris. Chaque mot, chaque bouton a un rôle précis.",
  },
  {
    number: '02',
    title: 'Résultats concrets',
    description:
      "On ne fait pas de sites « jolis ». On fait des sites qui génèrent des appels, des devis et des clients.",
  },
  {
    number: '03',
    title: 'Relation de confiance',
    description:
      "Pas de jargon, pas de surprise. Prix clairs, délais respectés, interlocuteur unique du début à la fin.",
  },
];

export default function AProposPage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>

        {/* Hero */}
        <section className="page-hero section">
          <div className="container">
            <div className="page-hero-inner">
              <span className="eyebrow">À propos</span>
              <h1>L&apos;agence derrière vos projets web</h1>
              <p className="page-hero-sub">
                Pixeloria accompagne les artisans, commerçants et TPE qui veulent une présence en ligne
                sérieuse — sans se noyer dans la technique.
              </p>
              <div className="page-hero-actions">
                <Link href="/#contact" className="btn btn-primary">
                  Discuter de votre projet
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/offres" className="btn btn-secondary">
                  Voir les offres
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Notre approche */}
        <section className="section section-tinted">
          <div className="container">
            <div className="apropos-intro-layout">
              <div className="apropos-intro-text">
                <span className="eyebrow">Notre approche</span>
                <h2>Un site web, c&apos;est un outil commercial. Pas une vitrine.</h2>
                <p>
                  Chez Pixeloria, on part d&apos;un principe simple : votre site doit travailler pour vous.
                  Pas juste exister. Chaque projet commence par une question — &laquo;&nbsp;quel résultat
                  concret voulez-vous obtenir&nbsp;?&nbsp;&raquo; — et se construit autour de la réponse.
                </p>
                <p>
                  On travaille avec des professionnels locaux qui n&apos;ont pas le temps de gérer leur
                  site au quotidien. Alors on s&apos;en charge : création, mise en ligne, mises à jour,
                  SEO. Vous vous concentrez sur votre métier.
                </p>
              </div>
              <div className="apropos-stats">
                <div className="apropos-stat">
                  <span className="apropos-stat-number">+50</span>
                  <span className="apropos-stat-label">Sites livrés</span>
                </div>
                <div className="apropos-stat">
                  <span className="apropos-stat-number">48h</span>
                  <span className="apropos-stat-label">Délai de réponse</span>
                </div>
                <div className="apropos-stat">
                  <span className="apropos-stat-number">100%</span>
                  <span className="apropos-stat-label">Clients locaux</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compétences */}
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Compétences</span>
              <h2>Ce qu&apos;on sait faire</h2>
              <p className="section-sub">
                Six domaines d&apos;expertise appliqués à chaque projet, selon les besoins de votre activité.
              </p>
            </div>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.title} className="skill-card">
                  <div className="skill-icon" aria-hidden="true">{skill.icon}</div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="section section-tinted">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Nos valeurs</span>
              <h2>Ce en quoi on croit</h2>
            </div>
            <div className="values-list">
              {values.map((value) => (
                <div key={value.number} className="value-item">
                  <span className="value-number" aria-hidden="true">{value.number}</span>
                  <div className="value-body">
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="section">
          <div className="container">
            <div className="page-cta-block">
              <h2>Vous avez un projet en tête&nbsp;?</h2>
              <p>
                Un échange de 20 minutes suffit souvent pour comprendre ce dont vous avez besoin
                et vous proposer une solution adaptée.
              </p>
              <div className="page-cta-block-actions">
                <Link href="/#contact" className="btn btn-primary btn-lg">
                  Nous contacter
                  <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link href="/offres" className="btn btn-secondary">
                  Voir nos offres
                </Link>
              </div>
              <p className="page-cta-note">
                <a href="tel:+33786125313">07 86 12 53 13</a>
                {' · '}
                <a href="mailto:contact@pixeloria.fr">contact@pixeloria.fr</a>
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Est-ce que le site m\'appartient ?',
    a: 'Oui, selon l\'offre choisie et les conditions prévues au contrat. Les modalités de propriété, d\'hébergement et de récupération du site sont précisées avant le lancement du projet.',
  },
  {
    q: 'Qu\'est-ce qui est inclus dans le SEO ?',
    a: 'Le SEO inclus correspond à une optimisation locale de base : structure des pages, titres, balises, mots-clés métier, zones d\'intervention et indexation Google. L\'offre Croissance ajoute un accompagnement SEO local renforcé avec contenu mensuel et suivi.',
  },
  {
    q: 'Quelle est la différence entre l\'offre à 490 € et l\'offre à 89 €/mois ?',
    a: 'L\'offre à 490 € est une création simple, livrée en une fois, sans maintenance ni suivi mensuel. L\'offre à 89 €/mois inclut la création ou refonte, la maintenance, les petites modifications et le SEO local de base.',
  },
  {
    q: 'Quelle est la différence entre Site Sérénité et Site Croissance ?',
    a: 'Site Sérénité est conçu pour avoir un site professionnel maintenu dans le temps. Site Croissance va plus loin avec du SEO local renforcé, un contenu optimisé par mois, un suivi Search Console, une optimisation Google Business Profile et un reporting mensuel simple.',
  },
  {
    q: 'Puis-je modifier mon site après livraison ?',
    a: 'Oui. Les petites modifications sont incluses dans les offres mensuelles. Pour l\'offre Site Essentiel, les modifications après livraison peuvent être proposées en option.',
  },
  {
    q: 'Combien de temps faut-il pour créer un site ?',
    a: 'Le délai dépend du nombre de pages, des contenus disponibles et des échanges nécessaires. Un site vitrine simple peut être préparé rapidement si les textes, photos et informations sont fournis dès le départ.',
  },
  {
    q: 'Est-ce que Pixeloria garantit la première position sur Google ?',
    a: 'Non. Personne ne peut garantir une première position sur Google. Pixeloria travaille sur une base saine : structure du site, contenu clair, optimisation locale, performance et cohérence des informations.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section section-tinted">
      <div className="container">
        <div className="section-heading reveal">
          <span className="eyebrow">FAQ</span>
          <h2>Questions fréquentes</h2>
          <p className="section-sub">
            Vous avez une autre question ?{' '}
            <a href="#contact">Contactez-nous directement.</a>
          </p>
        </div>

        <div className="faq-list reveal">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item${open === i ? ' faq-item--open' : ''}`}
            >
              <button
                className="faq-question"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
                type="button"
              >
                <span dangerouslySetInnerHTML={{ __html: item.q }} />
                <svg className="faq-chevron" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open === i && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

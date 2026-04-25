'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Combien de temps faut-il pour créer mon site&nbsp;?',
    a: 'Entre 5 et 10 jours ouvrés selon la formule choisie et la complexité du projet. Nous vous remettons un calendrier précis dès le démarrage. Votre site sera en ligne rapidement, sans délais interminables.',
  },
  {
    q: 'Est-ce que mon site sera bien positionné sur Google&nbsp;?',
    a: 'Nous optimisons chaque site pour le référencement local (SEO on-page, balises, vitesse, indexation). Les formules Sérénité et Croissance incluent un suivi SEO mensuel. Aucune agence ne peut garantir la première position, mais nous mettons toutes les chances de votre côté.',
  },
  {
    q: 'Puis-je modifier mon site moi-même après la livraison&nbsp;?',
    a: 'Oui. Nous vous livrons un accès simplifié pour les modifications de texte ou d\'images. Pour les évolutions plus importantes, nos formules avec maintenance incluent des modifications illimitées mineures — sans avoir à apprendre à coder.',
  },
  {
    q: 'Que se passe-t-il si je veux arrêter l\'abonnement mensuel&nbsp;?',
    a: 'Vous pouvez résilier à tout moment (préavis 1 mois). Le site vous appartient : vous repartez avec vos fichiers et votre nom de domaine. Nous recommandons 12 mois pour des résultats SEO durables, mais il n\'y a aucun engagement forcé.',
  },
  {
    q: 'Est-ce que vous vous occupez du nom de domaine et de l\'hébergement&nbsp;?',
    a: 'Oui. Dans les formules Sérénité et Croissance, le nom de domaine et l\'hébergement sont inclus. Pour la formule Essentielle, nous vous guidons pour choisir et configurer votre hébergement si vous n\'en avez pas déjà un.',
  },
  {
    q: 'Comment se déroule le suivi après la mise en ligne&nbsp;?',
    a: 'Vous disposez d\'un accès direct à votre interlocuteur via WhatsApp. Réponse garantie sous 24h. Pour les formules Sérénité et Croissance, un point mensuel est inclus pour suivre les performances et ajuster la stratégie si besoin.',
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
            Vous avez une question qui ne figure pas ici&nbsp;?{' '}
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

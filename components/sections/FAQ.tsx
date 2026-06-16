'use client';

import { useState } from 'react';

const faqs = [
  {
    q: "Est-ce que le site m'appartient ?",
    a: "Oui. Le site, les contenus et les accès vous appartiennent. Pixeloria vous accompagne dans la création ou la refonte, mais vous restez propriétaire de votre présence en ligne.",
  },
  {
    q: "Qu'est-ce qui est inclus dans le SEO ?",
    a: "Le SEO inclus correspond aux bases essentielles : structure claire des pages, titres optimisés, balises principales, vitesse, responsive mobile et cohérence des contenus. L'objectif est de partir sur une base saine pour être compris par Google.",
  },
  {
    q: "Qu'est-ce qui est inclus dans le Site Artisan Express ?",
    a: "Tout ce qu'il faut pour être présent en ligne et recevoir des demandes de devis : site one page, jusqu'à 5 sections, bouton téléphone, bouton WhatsApp, formulaire de devis, Google Maps, avis clients, mentions légales, mise en ligne et optimisation SEO locale de base. Livré sous 72h après réception de vos contenus.",
  },
  {
    q: "À quoi sert l'Option Visibilité à 89 €/mois ?",
    a: "L'Option Visibilité est un complément mensuel sans obligation. Elle inclut la maintenance technique, les petites modifications, le suivi local, l'optimisation progressive et une assistance prioritaire. Elle permet de garder votre site à jour et d'améliorer votre visibilité dans le temps, sans contrainte technique.",
  },
  {
    q: "Puis-je modifier mon site après livraison ?",
    a: "Oui. Selon l'offre choisie, vous pouvez demander des ajustements ou gérer certaines modifications vous-même. L'objectif est que le site reste simple à faire évoluer.",
  },
  {
    q: "Combien de temps faut-il pour créer un site ?",
    a: "Pour le Site Artisan Express, Pixeloria s'engage à livrer votre site sous 72h après réception de vos contenus (logo, photos, textes, horaires). Le processus est simple et guidé.",
  },
  {
    q: "Est-ce que Pixeloria garantit la première position sur Google ?",
    a: "Non. Personne ne peut garantir sérieusement une première position sur Google. Pixeloria travaille sur des bases propres, une structure claire et des contenus optimisés pour améliorer vos chances de visibilité durablement.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section section-tinted faq-section">
      <div className="faq-halo faq-halo--top" aria-hidden="true" />
      <div className="faq-halo faq-halo--bottom" aria-hidden="true" />

      <div className="container">
        <div className="faq-layout">

          {/* Left sticky sidebar */}
          <div className="faq-sidebar reveal">
            <span className="faq-badge">FAQ</span>
            <h2>Questions fréquentes</h2>
            <p className="faq-sub">
              Les réponses aux questions les plus courantes avant de lancer votre site avec Pixeloria.
            </p>
            <div className="faq-reassurance">
              <p>
                Vous avez une autre question ou un cas particulier&nbsp;?<br />
                Je vous réponds directement et simplement, sans jargon technique.
              </p>
              <a href="#contact" className="btn btn-primary">
                Me poser une question
              </a>
            </div>
          </div>

          {/* Right accordion */}
          <div className="faq-accordion reveal">
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
                  <span>{item.q}</span>
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
      </div>
    </section>
  );
}

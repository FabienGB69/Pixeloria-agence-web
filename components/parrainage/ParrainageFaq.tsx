'use client';

import { useEffect, useRef, useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Quand la récompense est-elle versée ?",
    answer: "Pour le Site Artisan, la récompense est déclenchée après paiement validé. Pour l'Option Visibilité, elle est déclenchée après 3 mois d'abonnement actifs.",
  },
  {
    question: "Puis-je parrainer plusieurs entreprises ?",
    answer: "Oui, sans limite. Chaque nouveau client parrainé peut générer une récompense indépendante. Vous suivez l'ensemble de vos filleuls dans votre espace affilié.",
  },
  {
    question: "Le filleul bénéficie-t-il aussi d'un avantage ?",
    answer: "Le filleul bénéficie automatiquement d'une remise : −20 € sur le Site Artisan (179 € TTC), ou premier mois à 59 € sur l'Option Visibilité.",
  },
  {
    question: "Puis-je choisir entre argent et crédit Pixeloria ?",
    answer: "Oui. Dans votre espace parrain, vous choisissez librement entre une récompense financière ou un crédit Pixeloria utilisable sur n'importe quelle prestation web.",
  },
  {
    question: "Le programme est-il réservé aux clients Pixeloria ?",
    answer: "Non. Clients, partenaires, professionnels et particuliers peuvent tous devenir parrains et recommander Pixeloria à leur réseau.",
  },
  {
    question: "Que se passe-t-il si le filleul annule son abonnement ?",
    answer: "Si l'abonnement est annulé avant les 3 premiers paiements, la commission est annulée. Pour l'offre One Shot, une annulation après paiement validé entraîne un ajustement de la commission selon les conditions de remboursement.",
  },
  {
    question: "Comment obtenir mon code personnel ?",
    answer: "En rejoignant le programme via le bouton « Devenir parrain », vous créez votre compte dans l'espace affilié. Un code personnalisé au format PIXELORIA-PRENOM vous est attribué automatiquement.",
  },
  {
    question: "Comment suivre mes parrainages et récompenses ?",
    answer: "Tout est visible dans votre espace affilié : filleuls actifs, commissions en attente, commissions validées, historique des paiements. Aucune gestion manuelle n'est nécessaire.",
  },
];

export default function ParrainageFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visibleSet, setVisibleSet] = useState<Set<number>>(new Set());
  const gridRef = useRef<HTMLDivElement>(null);

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i));

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const items = Array.from(grid.querySelectorAll<HTMLElement>('.faq-item'));
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            setVisibleSet(prev => {
              if (prev.has(index)) return prev;
              const next = new Set(prev);
              next.add(index);
              return next;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="faq__grid" ref={gridRef}>
      {faqItems.map((item, i) => (
        <div
          key={i}
          data-index={i}
          className={`faq-item${openIndex === i ? ' open' : ''}${visibleSet.has(i) ? ' visible' : ''}`}
        >
          <button
            className="faq-item__question"
            aria-expanded={openIndex === i}
            onClick={() => toggle(i)}
            type="button"
          >
            {item.question}
            <span className="faq-item__icon" aria-hidden="true">+</span>
          </button>
          <div className="faq-item__answer" role="region">
            <div className="faq-item__answer-inner">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

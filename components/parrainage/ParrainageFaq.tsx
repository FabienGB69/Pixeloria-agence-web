'use client';

import { useEffect, useRef, useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Combien gagne le parrain ?",
    answer: "Site Vitrine : vous gagnez 100 € après la réception du paiement. Visibilité locale : vous gagnez 25 € par mois tant que l'abonnement est actif. Potentiel de cumul : 100 € + 25 €/mois si votre filleul prend les deux offres.",
  },
  {
    question: "Les récompenses sont-elles cumulables ?",
    answer: "Oui. Vous pouvez parrainer plusieurs entreprises sans limite. Chaque parrainage génère une récompense indépendante. Si un même filleul prend Site Vitrine ET Visibilité locale, vous percevez 100 € + 25 €/mois.",
  },
  {
    question: "Quand la récompense est-elle déclenchée ?",
    answer: "Site Vitrine : immédiatement après réception du paiement via Stripe. Visibilité locale : après 1 mois d'abonnement actif et continu. La récompense continue chaque mois tant que l'abonnement reste actif.",
  },
  {
    question: "Comment le parrainage est-il suivi ?",
    answer: "Tout est automatique et transparent. Vous accédez à votre espace affilié où vous voyez vos filleuls actifs, vos commissions en attente, vos commissions validées et l'historique de vos paiements. Aucune gestion manuelle requise.",
  },
  {
    question: "La récompense mensuelle continue-t-elle indéfiniment ?",
    answer: "Oui. Vous recevez 25 € chaque mois tant que votre filleul conserve son abonnement Visibilité locale actif. Pas de limite de durée. Si l'abonnement s'arrête, la récompense cesse le mois suivant.",
  },
  {
    question: "Le programme est-il réservé aux clients Pixeloria ?",
    answer: "Non. Tout le monde peut devenir parrain : clients actuels, partenaires, professionnels, freelances, particuliers, entreprises. Aucune condition préalable. Seuls les nouveaux clients de Pixeloria peuvent être parrainés.",
  },
  {
    question: "Que se passe-t-il si le filleul annule ?",
    answer: "Pour le Site Vitrine : si l'achat est remboursé, la commission est annulée. Pour la Visibilité : si l'abonnement s'arrête, vous cesserez de recevoir la récompense mensuelle le mois suivant. Pixeloria se réserve le droit d'ajuster ou annuler en cas de litige ou paiement échoué.",
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

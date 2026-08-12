'use client';

import { useEffect, useRef, useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "How much does the sponsor earn?",
    answer: "Craftsman Website: you earn €100 after payment is received. Visibility Option: you earn €25 per month as long as the subscription is active. Cumulative potential: €100 + €25/month if your referral takes both offers.",
  },
  {
    question: "Can rewards be combined?",
    answer: "Yes. You can sponsor multiple companies without limit. Each sponsorship generates an independent reward. If the same referral takes both Craftsman Website AND Visibility Option, you receive €100 + €25/month.",
  },
  {
    question: "When is the reward triggered?",
    answer: "Craftsman Website: immediately after payment is received via Stripe. Visibility Option: after 1 month of active continuous subscription. The reward continues each month as long as the subscription remains active.",
  },
  {
    question: "How is sponsorship tracked?",
    answer: "Everything is automatic and transparent. You access your affiliate space where you see your active referrals, pending commissions, validated commissions and payment history. No manual management required.",
  },
  {
    question: "Does the monthly reward continue indefinitely?",
    answer: "Yes. You receive €25 each month as long as your referral keeps their Visibility Option subscription active. No time limit. If the subscription stops, the reward stops the following month.",
  },
  {
    question: "Is the program reserved for Pixeloria customers?",
    answer: "No. Anyone can become a sponsor: current customers, partners, professionals, freelancers, individuals, businesses. No prerequisites. Only new Pixeloria customers can be referred.",
  },
  {
    question: "What happens if the referral cancels?",
    answer: "For Craftsman Website: if the purchase is refunded, the commission is cancelled. For Visibility Option: if the subscription stops, you will stop receiving the monthly reward the following month. Pixeloria reserves the right to adjust or cancel in case of dispute or failed payment.",
  },
];

export default function ParrainageFaqEn() {
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

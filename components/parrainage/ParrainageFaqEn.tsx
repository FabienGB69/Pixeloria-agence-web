'use client';

import { useEffect, useRef, useState } from 'react';
import { OFFERS_US } from '@/lib/pricing-us';
import { REFERRAL_REWARDS_US } from '@/lib/referral-rewards-us';

interface FaqItem {
  question: string;
  answer: string;
}

const rewardStarter = REFERRAL_REWARDS_US.starter;
const rewardGrowth = REFERRAL_REWARDS_US.growth;
const rewardCare = REFERRAL_REWARDS_US.care;

const faqItems: FaqItem[] = [
  {
    question: "How much does the sponsor earn?",
    answer: `${OFFERS_US.starter.title}: you earn $${rewardStarter} once the project is signed. ${OFFERS_US.growth.title}: you earn $${rewardGrowth}. Website Care: you earn $${rewardCare} per month as long as the subscription is active. Cumulative potential: up to $${rewardGrowth} + $${rewardCare}/month if your referral takes a website project and adds Website Care.`,
  },
  {
    question: "Can rewards be combined?",
    answer: `Yes. You can sponsor multiple businesses without limit. Each sponsorship generates an independent reward. If the same referral takes a website project AND adds Website Care, you receive both rewards — up to $${rewardGrowth} + $${rewardCare}/month.`,
  },
  {
    question: "When is the reward triggered?",
    answer: "For a website project (Starter or Growth): once the referral's project is signed and confirmed — the US catalog doesn't have a self-serve checkout yet, so we confirm this manually with you. For Website Care: after 1 month of active continuous subscription. The reward continues each month as long as the subscription remains active.",
  },
  {
    question: "How is sponsorship tracked?",
    answer: "There's no self-serve sponsor dashboard for the US program yet. We record your referral code with their request and reach out directly once their project is signed to confirm and arrange your reward.",
  },
  {
    question: "Does the monthly reward continue indefinitely?",
    answer: `Yes. You receive $${rewardCare} each month as long as your referral keeps their Website Care subscription active. No time limit. If the subscription stops, the reward stops the following month.`,
  },
  {
    question: "Is the program reserved for Pixeloria customers?",
    answer: "No. Anyone can become a sponsor: current customers, partners, contractors, freelancers, individuals, businesses. No prerequisites. Only new Pixeloria customers can be referred.",
  },
  {
    question: "What happens if the referral cancels?",
    answer: "For a website project: if the sale falls through or is refunded, the reward is cancelled. For Website Care: if the subscription stops, you will stop receiving the monthly reward the following month. Pixeloria reserves the right to adjust or cancel in case of dispute or failed payment.",
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

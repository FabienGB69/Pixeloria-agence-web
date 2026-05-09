'use client';
import { useEffect } from 'react';

export default function ParrainageReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const targets = document.querySelectorAll(
      '.prrn-page .step, .prrn-page .reward-card, .prrn-page .choice-card, .prrn-page .audience__item'
    );
    targets.forEach(el => observer.observe(el));

    // Smooth scroll for anchor links within the page
    const anchors = document.querySelectorAll('.prrn-page a[href^="#"]');
    const handleClick = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement;
      const target = document.querySelector(anchor.getAttribute('href') ?? '');
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };
    anchors.forEach(a => a.addEventListener('click', handleClick));

    return () => {
      observer.disconnect();
      anchors.forEach(a => a.removeEventListener('click', handleClick));
    };
  }, []);

  return null;
}

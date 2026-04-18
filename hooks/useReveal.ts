'use client';

import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const revealEls = document.querySelectorAll<HTMLElement>('.reveal');

    if ('IntersectionObserver' in window && !prefersReducedMotion) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
      revealEls.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    } else {
      // Reduced motion or no IntersectionObserver support — show immediately
      revealEls.forEach((el) => el.classList.add('is-visible'));
    }
  }, []);
}

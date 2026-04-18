'use client';

import { useEffect } from 'react';

export function useCursor() {
  useEffect(() => {
    // SSR-safe guard
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Desktop-only (fine pointer)
    if (!window.matchMedia('(pointer: fine)').matches || prefersReducedMotion) {
      return;
    }

    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');

    if (!cursor || !follower) return;

    let mx = -100;
    let my = -100;
    let fx = -100;
    let fy = -100;
    let rafId: number;

    const moveCursor = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    };

    const animateFollower = () => {
      fx += (mx - fx) * 0.14;
      fy += (my - fy) * 0.14;
      follower.style.left = fx + 'px';
      follower.style.top = fy + 'px';
      rafId = requestAnimationFrame(animateFollower);
    };

    document.addEventListener('mousemove', moveCursor, { passive: true });
    rafId = requestAnimationFrame(animateFollower);

    const hoverSelector = 'a, button, input, textarea, select, [data-cursor-hover]';
    const addHover = () => document.body.classList.add('cursor-hover');
    const removeHover = () => document.body.classList.remove('cursor-hover');

    const hoverEls = document.querySelectorAll<HTMLElement>(hoverSelector);
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    const onLeave = () => {
      cursor.style.opacity = '0';
      follower.style.opacity = '0';
    };
    const onEnter = () => {
      cursor.style.opacity = '1';
      follower.style.opacity = '1';
    };

    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      cancelAnimationFrame(rafId);
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);
}

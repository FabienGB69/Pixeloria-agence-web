'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeaderEn() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        navRef.current &&
        toggleRef.current &&
        !navRef.current.contains(e.target as Node) &&
        !toggleRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="site-header">
      <div className="container nav-wrapper">
        <Link href="/en" className="logo" aria-label="Pixeloria home">
          <Image
            src="/assets/pixeloria-logo.svg"
            className="logo-image"
            alt="Pixeloria"
            width={140}
            height={36}
            priority
          />
        </Link>

        <nav
          id="site-nav"
          className={`site-nav${isOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
          ref={navRef}
        >
          <Link href="/en" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link href="/en/pricing" className="nav-link" onClick={closeMenu}>Pricing</Link>
          <Link href="/en/how-it-works" className="nav-link" onClick={closeMenu}>How it works</Link>
          <Link href="/en/reviews" className="nav-link" onClick={closeMenu}>Reviews</Link>
          <Link href="/en/faq" className="nav-link" onClick={closeMenu}>FAQ</Link>
          <Link href="/en/about" className="nav-link" onClick={closeMenu}>About</Link>
          <Link href="/?setlang=fr" className="nav-link lang-switcher" onClick={closeMenu} aria-label="Version française">
            🇫🇷 FR
          </Link>
          <a href="/en#contact" className="btn btn-nav" onClick={closeMenu}>Free quote</a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-nav"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsOpen((prev) => !prev)}
          ref={toggleRef}
        >
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </button>
      </div>
    </header>
  );
}

'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
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
        <Link href="/" className="logo" aria-label="Pixeloria accueil">
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
          aria-label="Navigation principale"
          ref={navRef}
        >
          <a href="#services" className="nav-link" onClick={closeMenu}>Offres</a>
          <a href="#portfolio" className="nav-link" onClick={closeMenu}>Portfolio</a>
          <a href="#process" className="nav-link" onClick={closeMenu}>Process</a>
          <a href="#testimonials" className="nav-link" onClick={closeMenu}>Avis</a>
          <a href="#faq" className="nav-link" onClick={closeMenu}>FAQ</a>
          <Link href="/a-propos" className="nav-link" onClick={closeMenu}>À propos</Link>
          <Link href="/parrainage" className="nav-link" onClick={closeMenu}>Parrainage</Link>
          <a href="#contact" className="btn btn-nav" onClick={closeMenu}>Audit gratuit</a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="site-nav"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
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

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
          <Link href="/" className="nav-link" onClick={closeMenu}>Accueil</Link>
          <Link href="/tarifs" className="nav-link" onClick={closeMenu}>Tarifs</Link>
          <Link href="/comment-ca-marche" className="nav-link" onClick={closeMenu}>Comment ça marche</Link>
          <Link href="/realisations" className="nav-link" onClick={closeMenu}>Réalisations</Link>
          <Link href="/avis" className="nav-link" onClick={closeMenu}>Avis</Link>
          <Link href="/a-propos" className="nav-link" onClick={closeMenu}>À propos</Link>
          <Link href="/parrainage" className="nav-link" onClick={closeMenu}>Parrainage</Link>
          <Link href="/en" className="nav-link lang-switcher" onClick={closeMenu} aria-label="English version">🇬🇧 EN</Link>
          <Link href="/#contact" className="btn btn-nav" onClick={closeMenu}>Devis gratuit</Link>
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

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
          <a href="#packages" className="nav-link" onClick={closeMenu}>Packages</a>
          <a href="#why" className="nav-link" onClick={closeMenu}>Why us</a>
          <a href="#process" className="nav-link" onClick={closeMenu}>How it works</a>
          <a href="#faq" className="nav-link" onClick={closeMenu}>FAQ</a>
          <Link href="/?setlang=fr" className="nav-link lang-switcher" onClick={closeMenu} aria-label="Version française">
            🇫🇷 FR
          </Link>
          <a href="#contact" className="btn btn-nav" onClick={closeMenu}>Free audit</a>
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

import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" aria-label="Pixeloria accueil">
            <Image
              src="/assets/pixeloria-logo.svg"
              className="footer-logo"
              alt="Pixeloria"
              width={120}
              height={32}
            />
          </a>
          <p>Studio digital premium — branding, UI/UX &amp; intégration web.</p>
        </div>

        <nav className="footer-nav" aria-label="Navigation pied de page">
          <strong>Navigation</strong>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#process">Process</a>
          <a href="#testimonials">Avis clients</a>
        </nav>

        <nav className="footer-nav" aria-label="Contact pied de page">
          <strong>Contact</strong>
          <a href="tel:+33786125313">07 86 12 53 13</a>
          <a href="mailto:contact@pixeloria.fr">contact@pixeloria.fr</a>
          <a href="https://wa.me/33786125313" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </nav>

        <div className="footer-social">
          <strong>Réseaux</strong>
          <div className="social-links" aria-label="Réseaux sociaux">
            <a
              className="social-link"
              href="https://www.instagram.com/pixeloria.fr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.9 1.45a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 1.8A3 3 0 1 0 15 12a3 3 0 0 0-3-3Z" />
              </svg>
            </a>
            <a
              className="social-link"
              href="https://www.linkedin.com/company/pixeloria"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.2 8.2a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8ZM4.6 9.7h3.1V20H4.6V9.7Zm5.1 0h3v1.4h.1c.4-.8 1.5-1.7 3.2-1.7 3.4 0 4 2.2 4 5.1V20h-3.1v-4.8c0-1.1 0-2.5-1.6-2.5s-1.8 1.2-1.8 2.4V20H9.7V9.7Z" />
              </svg>
            </a>
            <a
              className="social-link"
              href="https://www.facebook.com/pixeloria.fr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 21v-7h2.4l.4-2.7h-2.8V9.5c0-.8.3-1.3 1.4-1.3h1.5V5.8a18 18 0 0 0-2.3-.1c-2.3 0-3.8 1.4-3.8 4v1.6H8v2.7h2.3v7h3.2Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} Pixeloria. Tous droits réservés.</p>
          <a href="#home" className="back-top" aria-label="Retour en haut">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M10 16V4M5 9l5-5 5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

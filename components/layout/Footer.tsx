import Image from 'next/image';
import Link from 'next/link';

export default function Footer({ locale = 'fr' }: { locale?: 'fr' | 'en' }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-cta-block">
        <p className="footer-cta-title">
          {locale === 'en'
            ? 'Do you want a clear website that brings you quote requests?'
            : 'Vous voulez un site clair qui vous apporte des demandes de devis ?'}
        </p>
        <p className="footer-cta-text">
          {locale === 'en'
            ? 'Pixeloria builds simple, readable websites designed to convert visitors into contacts.'
            : 'Pixeloria crée des sites simples, lisibles et pensés pour convertir vos visiteurs en contacts.'}
        </p>
        <div className="footer-cta-actions">
          <Link href={locale === 'en' ? '/en#contact' : '/#contact'} className="btn btn-primary">
            {locale === 'en' ? 'Request a quote' : 'Demander un devis'}
          </Link>
          <Link href="/realisations" className="btn btn-secondary">
            {locale === 'en' ? 'View our projects' : 'Voir les réalisations'}
          </Link>
        </div>
      </div>

      <div className="container footer-inner">
        <div className="footer-brand">
          <Link href="/" aria-label="Pixeloria accueil">
            <Image
              src="/assets/pixeloria-logo.svg"
              className="footer-logo"
              alt="Pixeloria"
              width={120}
              height={32}
            />
          </Link>
          <p>{locale === 'en' ? 'Website creation and redesign for local businesses and trades.' : 'Création et refonte de sites internet pour artisans et TPE locaux.'}</p>
          <p className="footer-brand-contact">
            <a href="tel:+33786125313">07 86 12 53 13</a><br />
            <a href="mailto:contact@pixeloria.fr">contact@pixeloria.fr</a><br />
            <a href="https://pixeloria.fr" target="_blank" rel="noopener noreferrer">pixeloria.fr</a>
          </p>
        </div>

        <nav className="footer-nav" aria-label="Navigation pied de page">
          <strong>{locale === 'en' ? 'Useful links' : 'Liens utiles'}</strong>
          <Link href={locale === 'en' ? '/en' : '/'}>{locale === 'en' ? 'Home' : 'Accueil'}</Link>
          <Link href="/realisations">{locale === 'en' ? 'Projects' : 'Réalisations'}</Link>
          <Link href={locale === 'en' ? '/en#packages' : '/offres'}>{locale === 'en' ? 'Packages' : 'Offres'}</Link>
          <Link href={locale === 'en' ? '/en/faq' : '/faq'}>FAQ</Link>
          <Link href={locale === 'en' ? '/en#contact' : '/#contact'}>Contact</Link>
          <Link href="/mentions-legales">{locale === 'en' ? 'Legal notice' : 'Mentions légales'}</Link>
        </nav>

        <nav className="footer-nav" aria-label="Pages locales">
          <strong>Zones desservies</strong>
          <Link href="/agence-web-rhone">Agence web Lyon / Rhône</Link>
          <Link href="/agence-web-isere">Agence web Isère</Link>
          <Link href="/agence-web-haute-savoie">Agence web Haute-Savoie</Link>
          <Link href="/agence-web-savoie">Agence web Savoie</Link>
          <Link href="/agence-web-ain">Agence web Ain</Link>
          <Link href="/agence-web-drome">Agence web Drôme</Link>
          <Link href="/agence-web-ardeche">Agence web Ardèche</Link>
          <Link href="/agence-web-loire">Agence web Loire</Link>
        </nav>

        <nav className="footer-nav" aria-label="Contact pied de page">
          <strong>Contact</strong>
          <a href="tel:+33786125313">07 86 12 53 13</a>
          <a href="mailto:contact@pixeloria.fr?subject=Demande%20de%20devis%20%E2%80%94%20Pixeloria&body=Bonjour%2C%0A%0AJe%20souhaite%20obtenir%20un%20devis%20pour%20mon%20projet%20web.%0A%0ACordialement%2C">contact@pixeloria.fr</a>
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
          <p>
            © {year} Pixeloria. Tous droits réservés.{' '}
            <Link href="/mentions-legales">Mentions légales</Link>
            {' · '}
            <Link href="/cgv">CGV</Link>
            {' · '}
            <Link href="/cgu">CGU</Link>
            {' · '}
            <Link href="/politique-confidentialite">Politique de confidentialité</Link>
          </p>
          <Link href="/" className="back-top" aria-label="Retour à l'accueil">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M10 16V4M5 9l5-5 5 5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}

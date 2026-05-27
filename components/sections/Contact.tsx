import ContactForm from '@/components/forms/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <span className="eyebrow">Nouveau projet</span>
            <h2>Construisons votre expérience Pixeloria</h2>
            <p>
              Donnez-nous votre brief et recevez une proposition stratégique
              et visuelle dans les 48&nbsp;h.
            </p>

            <div className="contact-channels">
              <a href="tel:+33786125313" className="channel-item">
                <div className="channel-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L16 12l5 2v4a2 2 0 0 1-2 2C7.3 20 4 12.7 4 5a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <strong>Téléphone</strong>
                  <span>07&nbsp;86&nbsp;12&nbsp;53&nbsp;13</span>
                </div>
              </a>

              <a href="mailto:contact@pixeloria.fr?subject=Demande%20de%20devis%20%E2%80%94%20Pixeloria&body=Bonjour%2C%0A%0AJe%20souhaite%20obtenir%20un%20devis%20pour%20mon%20projet%20web.%0A%0ACordialement%2C" className="channel-item">
                <div className="channel-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <span>contact@pixeloria.fr</span>
                </div>
              </a>

              <a
                href="https://wa.me/33786125313"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-item"
              >
                <div className="channel-icon">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.5 14c-.2.6-1.2 1.1-1.7 1.2-.4 0-.9.1-2.7-.6-2.3-.9-3.8-3.2-3.9-3.4-.1-.2-1-1.4-1-2.7 0-1.2.7-1.8 1-2.1.2-.3.5-.3.6-.3h.5c.2 0 .4 0 .5.4l.8 1.9c.1.1.1.3 0 .5l-.3.4-.3.4c.3.5.7 1 1.2 1.4.5.4 1.1.7 1.7.9l.4-.4c.2-.2.3-.2.5-.1l1.9.9c.2.1.3.2.3.4 0 .2-.1.8-.3 1.1Z" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <strong>WhatsApp</strong>
                  <span>Réponse en quelques minutes</span>
                </div>
              </a>
            </div>

            <div className="contact-availability">
              <span className="avail-dot"></span>
              Disponible pour de nouveaux projets&nbsp;—&nbsp;mai 2026
            </div>
          </div>

          <div className="contact-form-wrapper reveal reveal-right">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

import { faqs } from './faq-data';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section section-tinted faq-section">
      <div className="faq-halo faq-halo--top" aria-hidden="true" />
      <div className="faq-halo faq-halo--bottom" aria-hidden="true" />

      <div className="container">
        <div className="faq-layout">

          {/* Left sticky sidebar */}
          <div className="faq-sidebar reveal">
            <span className="faq-badge">FAQ</span>
            <h2>Questions fréquentes</h2>
            <p className="faq-sub">
              Les réponses aux questions les plus courantes avant de lancer votre site avec Pixeloria.
            </p>
            <div className="faq-reassurance">
              <p>
                Vous avez une autre question ou un cas particulier&nbsp;?<br />
                Je vous réponds directement et simplement, sans jargon technique.
              </p>
              <a href="#contact" className="btn btn-primary">
                Me poser une question
              </a>
            </div>
          </div>

          {/* Right accordion */}
          <div className="faq-accordion reveal">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`faq-item${open === i ? ' faq-item--open' : ''}`}
              >
                <button
                  className="faq-question"
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                  type="button"
                >
                  <span>{item.q}</span>
                  <svg className="faq-chevron" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {open === i && (
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

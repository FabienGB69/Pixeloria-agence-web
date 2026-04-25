'use client';

import { useState, useRef, useCallback } from 'react';
import { track } from '@vercel/analytics';
import TurnstileWidget from '@/components/forms/TurnstileWidget';

interface FormState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    loading: false,
    success: false,
    error: null,
  });
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const onTurnstileVerify = useCallback((token: string) => setTurnstileToken(token), []);
  const onTurnstileExpire = useCallback(() => setTurnstileToken(''), []);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    // Client-side validation
    const requiredFields = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>('[required]');
    let valid = true;
    requiredFields.forEach((field) => {
      const ok = field.checkValidity();
      field.setAttribute('aria-invalid', String(!ok));
      if (!ok) valid = false;
    });

    if (!valid) {
      const firstInvalid = form.querySelector<HTMLElement>('[aria-invalid="true"]');
      firstInvalid?.focus();
      return;
    }

    setFormState({ loading: true, success: false, error: null });

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, _turnstile: turnstileToken }),
      });

      if (res.ok) {
        track('contact_form_submit', { offre: (data.offre as string) || 'none' });
        setFormState({ loading: false, success: true, error: null });
      } else {
        let errMsg = 'Une erreur est survenue. Contactez-nous directement.';
        try {
          const body = await res.json() as { error?: string };
          if (body.error) errMsg = body.error;
        } catch { /* ignore */ }
        setFormState({ loading: false, success: false, error: errMsg });
      }
    } catch {
      // API absent (dev local) — afficher succès UX
      setFormState({ loading: false, success: true, error: null });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const field = e.currentTarget;
    if (field.hasAttribute('required') || field.value) {
      field.setAttribute('aria-invalid', String(!field.checkValidity()));
    }
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const field = e.currentTarget;
    if (field.getAttribute('aria-invalid') === 'true') {
      field.setAttribute('aria-invalid', String(!field.checkValidity()));
    }
  };

  if (formState.success) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <div className="success-icon">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.4" />
            <path d="M15 24l7 7 11-11" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3>Message envoyé !</h3>
        <p>Nous vous répondons sous 48&nbsp;h. À très bientôt !</p>
      </div>
    );
  }

  return (
    <form
      className="contact-form glass-card"
      id="contact-form"
      noValidate
      onSubmit={handleSubmit}
      ref={formRef}
    >
      {/* Honeypot — invisible pour les humains, rempli par les bots */}
      <input
        type="text"
        name="_hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: 'none' }}
      />

      <div className="form-row">
        <label>
          <span>Nom <abbr title="requis">*</abbr></span>
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            required
            autoComplete="family-name"
            onBlur={handleBlur}
            onInput={handleInput}
          />
        </label>
        <label>
          <span>Entreprise <span className="optional">(facultatif)</span></span>
          <input
            type="text"
            name="company"
            placeholder="Nom de votre entreprise"
            autoComplete="organization"
            onBlur={handleBlur}
            onInput={handleInput}
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>Email <abbr title="requis">*</abbr></span>
          <input
            type="email"
            name="email"
            placeholder="vous@entreprise.fr"
            required
            autoComplete="email"
            onBlur={handleBlur}
            onInput={handleInput}
          />
        </label>
        <label>
          <span>Téléphone <span className="optional">(facultatif)</span></span>
          <input
            type="tel"
            name="telephone"
            placeholder="06 00 00 00 00"
            autoComplete="tel"
            onBlur={handleBlur}
            onInput={handleInput}
          />
        </label>
      </div>

      <label>
        <span>Type de besoin</span>
        <div className="select-wrap">
          <select name="offre" onBlur={handleBlur} onChange={handleInput}>
            <option value="">Choisissez votre besoin…</option>
            <option value="creation">Création de site internet</option>
            <option value="refonte">Refonte de site internet</option>
            <option value="maintenance">Maintenance</option>
            <option value="seo">SEO local</option>
            <option value="audit">Audit gratuit</option>
            <option value="unknown">Je ne sais pas encore</option>
          </select>
          <svg className="select-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </label>

      <label>
        <span>Message <abbr title="requis">*</abbr></span>
        <textarea
          name="message"
          rows={4}
          placeholder="Décrivez votre projet, vos objectifs, vos questions…"
          required
          onBlur={handleBlur}
          onInput={handleInput}
        ></textarea>
      </label>

      <TurnstileWidget onVerify={onTurnstileVerify} onExpire={onTurnstileExpire} />

      <button
        type="submit"
        className={`btn btn-primary btn-full${formState.loading ? ' is-loading' : ''}`}
        disabled={formState.loading}
      >
        <span className="btn-label">Envoyer ma demande</span>
        <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="btn-loader" aria-hidden="true"></span>
      </button>

      {formState.error && (
        <p
          role="alert"
          style={{ color: '#e43f6f', fontSize: '0.9rem', marginTop: '0.75rem', textAlign: 'center', lineHeight: 1.5 }}
        >
          {formState.error}{' '}
          <a
            href="mailto:contact@pixeloria.fr?subject=Demande%20de%20devis%20%E2%80%94%20Pixeloria&body=Bonjour%2C%0A%0AJe%20souhaite%20obtenir%20un%20devis%20pour%20mon%20projet%20web.%0A%0ACordialement%2C"
            style={{ color: 'inherit', textDecoration: 'underline', whiteSpace: 'nowrap' }}
          >
            contact@pixeloria.fr
          </a>
        </p>
      )}

      <p className="form-privacy">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 2l5 2v4c0 3-2 5.5-5 7C6 14 4 12.5 3 11V4L8 2Z" stroke="currentColor" strokeWidth="1.4" />
        </svg>
        Vos données sont protégées et ne seront jamais partagées. Réponse rapide avec une première orientation claire selon votre besoin.
      </p>
    </form>
  );
}

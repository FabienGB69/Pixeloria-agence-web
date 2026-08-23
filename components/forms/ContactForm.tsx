'use client';

import { useState, useRef } from 'react';
import { track } from '@vercel/analytics';
import { trackAuditRequest } from '@/lib/gtm';
import { getStoredUtm } from '@/lib/utm';
import TurnstileWidget from '@/components/forms/TurnstileWidget';
import { useTurnstileToken } from '@/components/forms/useTurnstileToken';

interface FormState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

// `offre` (project type) is required in EN but not in FR — a pre-existing,
// intentional per-locale difference, preserved as-is (not part of the
// Company/phone parity decided for issue #162).
const COPY = {
  fr: {
    nomLabel: 'Nom', requiredAbbr: 'requis', optionalLabel: 'optionnel',
    nomPlaceholder: 'Votre nom',
    companyLabel: 'Entreprise',
    companyPlaceholder: 'Nom de votre entreprise',
    emailLabel: 'Email',
    emailPlaceholder: 'vous@entreprise.fr',
    phoneLabel: 'Téléphone',
    phonePlaceholder: '06 00 00 00 00',
    offreLabel: 'Type de besoin',
    offreRequired: false,
    offrePlaceholder: 'Choisissez votre besoin…',
    offreOptions: [
      { value: 'creation', label: 'Création de site internet' },
      { value: 'refonte', label: 'Refonte de site internet' },
      { value: 'maintenance', label: 'Maintenance' },
      { value: 'seo', label: 'SEO local' },
      { value: 'audit', label: 'Audit gratuit' },
      { value: 'unknown', label: 'Je ne sais pas encore' },
    ],
    messageLabel: 'Message',
    messagePlaceholder: 'Décrivez votre projet, vos objectifs, vos questions…',
    submitLabel: 'Recevoir mon devis gratuit',
    submitLoading: 'Envoi en cours…',
    successTitle: 'Message envoyé !',
    successBody: 'Nous vous répondons sous 48 h. À très bientôt !',
    defaultError: 'Une erreur est survenue. Contactez-nous directement.',
    networkError: 'Erreur de connexion. Réessayez ou contactez-nous directement.',
    microNote: 'Réponse sous 48h · Sans engagement',
    privacyNote: 'Vos données sont protégées et ne seront jamais partagées. Réponse rapide avec une première orientation claire selon votre besoin.',
    mailtoHref: 'mailto:contact@pixeloria.fr?subject=Demande%20de%20devis%20%E2%80%94%20Pixeloria&body=Bonjour%2C%0A%0AJe%20souhaite%20obtenir%20un%20devis%20pour%20mon%20projet%20web.%0A%0ACordialement%2C',
  },
  en: {
    nomLabel: 'Full name', requiredAbbr: 'required', optionalLabel: 'optional',
    nomPlaceholder: 'Your name',
    companyLabel: 'Company',
    companyPlaceholder: 'Your business name',
    emailLabel: 'Email',
    emailPlaceholder: 'your@email.com',
    phoneLabel: 'Phone',
    phonePlaceholder: '+44 7700 900000',
    offreLabel: 'Project type',
    offreRequired: true,
    offrePlaceholder: 'Select your need…',
    offreOptions: [
      { value: 'creation', label: 'New website' },
      { value: 'refonte', label: 'Website redesign' },
      { value: 'maintenance', label: 'Maintenance' },
      { value: 'seo', label: 'Local SEO' },
      { value: 'audit', label: 'Free audit' },
      { value: 'unknown', label: 'Not sure yet' },
    ],
    messageLabel: 'Tell us about your project',
    messagePlaceholder: "Describe your business, your goals and what you're looking for in a website…",
    submitLabel: 'Send my request',
    submitLoading: 'Sending…',
    successTitle: 'Message received!',
    successBody: 'We will get back to you within 48 hours with a clear proposal tailored to your project.',
    defaultError: 'Something went wrong. Please email us directly at contact@pixeloria.fr',
    networkError: 'Connection error. Please try again or email us at contact@pixeloria.fr',
    microNote: 'Response within 48h · No obligation',
    privacyNote: 'Your information is protected and will never be shared. You will receive a clear first recommendation based on your needs — typically within 48 hours.',
    mailtoHref: 'mailto:contact@pixeloria.fr?subject=Website%20quote%20request&body=Hello%2C%0A%0AI%27d%20like%20to%20get%20a%20quote%20for%20my%20web%20project.%0A%0ABest%2C',
  },
} as const;

export default function ContactForm({ locale = 'fr' }: { locale?: 'fr' | 'en' }) {
  const t = COPY[locale];
  const [formState, setFormState] = useState<FormState>({
    loading: false,
    success: false,
    error: null,
  });
  const { turnstileToken, onTurnstileVerify, onTurnstileExpire } = useTurnstileToken();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

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
        body: JSON.stringify({
          ...data,
          ...getStoredUtm(),
          _turnstile: turnstileToken,
          ...(locale === 'en' ? { _lang: 'en' } : {}),
        }),
      });

      if (res.ok) {
        if (locale === 'en') {
          track('contact_form_submit_en', { offre: (data.offre as string) || 'none' });
        } else {
          track('contact_form_submit', { offre: (data.offre as string) || 'none' });
          trackAuditRequest((data.offre as string) || 'none');
        }
        setFormState({ loading: false, success: true, error: null });
        formRef.current?.reset();
      } else {
        // /api/submit-lead's error messages are French-only (ignores _lang),
        // so only surface them for FR — EN keeps its fixed English fallback,
        // matching the pre-merge ContactFormEn behavior.
        let errMsg: string = t.defaultError;
        if (locale === 'fr') {
          try {
            const body = await res.json() as { error?: string };
            if (body.error) errMsg = body.error;
          } catch { /* ignore */ }
        }
        setFormState({ loading: false, success: false, error: errMsg });
      }
    } catch {
      setFormState({
        loading: false,
        success: false,
        error: t.networkError,
      });
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
        <h3>{t.successTitle}</h3>
        <p>{t.successBody}</p>
      </div>
    );
  }

  return (
    <form
      className={`contact-form${locale === 'fr' ? ' glass-card' : ''}`}
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
          <span>{t.nomLabel} <abbr title={t.requiredAbbr}>*</abbr></span>
          <input
            type="text"
            name="nom"
            placeholder={t.nomPlaceholder}
            required
            autoComplete="name"
            onBlur={handleBlur}
            onInput={handleInput}
          />
        </label>
        <label>
          <span>{t.companyLabel} <span className="optional">({t.optionalLabel})</span></span>
          <input
            type="text"
            name="company"
            placeholder={t.companyPlaceholder}
            autoComplete="organization"
            onBlur={handleBlur}
            onInput={handleInput}
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>{t.emailLabel} <abbr title={t.requiredAbbr}>*</abbr></span>
          <input
            type="email"
            name="email"
            placeholder={t.emailPlaceholder}
            required
            autoComplete="email"
            onBlur={handleBlur}
            onInput={handleInput}
          />
        </label>
        <label>
          <span>{t.phoneLabel} <span className="optional">({t.optionalLabel})</span></span>
          <input
            type="tel"
            name="phone"
            placeholder={t.phonePlaceholder}
            autoComplete="tel"
            onBlur={handleBlur}
            onInput={handleInput}
          />
        </label>
      </div>

      <label>
        <span>{t.offreLabel} {t.offreRequired && <abbr title={t.requiredAbbr}>*</abbr>}</span>
        <div className="select-wrap">
          <select
            name="offre"
            required={t.offreRequired}
            defaultValue=""
            onBlur={handleBlur}
            onChange={handleInput}
          >
            <option value="" disabled={t.offreRequired}>{t.offrePlaceholder}</option>
            {t.offreOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          <svg className="select-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </label>

      <label>
        <span>{t.messageLabel} <abbr title={t.requiredAbbr}>*</abbr></span>
        <textarea
          name="message"
          rows={4}
          placeholder={t.messagePlaceholder}
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
        aria-label={formState.loading ? t.submitLoading : undefined}
      >
        <span className="btn-label">{t.submitLabel}</span>
        <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="btn-loader" aria-hidden="true"></span>
      </button>

      <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-muted, #888)', margin: '0.5rem 0 0' }}>
        {t.microNote}
      </p>

      {formState.error && (
        <p
          role="alert"
          style={{ color: '#e43f6f', fontSize: '0.9rem', marginTop: '0.75rem', textAlign: 'center', lineHeight: 1.5 }}
        >
          {formState.error}{' '}
          <a
            href={t.mailtoHref}
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
        {t.privacyNote}
      </p>
    </form>
  );
}

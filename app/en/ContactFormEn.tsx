'use client';

import { useState, useRef } from 'react';
import { track } from '@vercel/analytics';
import TurnstileWidget from '@/components/forms/TurnstileWidget';
import { useTurnstileToken } from '@/components/forms/useTurnstileToken';

interface FormState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

export default function ContactFormEn() {
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

    const requiredFields = form.querySelectorAll<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >('[required]');
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
        body: JSON.stringify({ ...data, _turnstile: turnstileToken, _lang: 'en' }),
      });

      if (res.ok) {
        track('contact_form_submit_en', { offre: (data.offre as string) || 'none' });
        setFormState({ loading: false, success: true, error: null });
        formRef.current?.reset();
      } else {
        setFormState({
          loading: false,
          success: false,
          error:
            'Something went wrong. Please email us directly at contact@pixeloria.fr',
        });
      }
    } catch {
      setFormState({
        loading: false,
        success: false,
        error: 'Connection error. Please try again or email us at contact@pixeloria.fr',
      });
    }
  };

  if (formState.success) {
    return (
      <div className="form-success">
        <div className="form-success-icon">✓</div>
        <h3>Message received!</h3>
        <p>
          We will get back to you within 48 hours with a clear proposal tailored to your
          project.
        </p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate ref={formRef}>
      {/* Honeypot */}
      <input
        type="text"
        name="_hp"
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="form-row">
        <label className="form-label">
          <span>Full name *</span>
          <input
            type="text"
            name="nom"
            className="form-input"
            placeholder="Your name"
            required
            autoComplete="name"
          />
        </label>
        <label className="form-label">
          <span>
            Company <span className="optional">(optional)</span>
          </span>
          <input
            type="text"
            name="company"
            className="form-input"
            placeholder="Your business name"
            autoComplete="organization"
          />
        </label>
      </div>

      <div className="form-row">
        <label className="form-label">
          <span>Email *</span>
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="your@email.com"
            required
            autoComplete="email"
          />
        </label>
        <label className="form-label">
          <span>
            Phone <span className="optional">(optional)</span>
          </span>
          <input
            type="tel"
            name="phone"
            className="form-input"
            placeholder="+44 7700 900000"
            autoComplete="tel"
          />
        </label>
      </div>

      <label className="form-label">
        <span>Project type *</span>
        <div className="select-wrap">
          <select name="offre" required defaultValue="">
            <option value="" disabled>
              Select your need…
            </option>
            <option value="creation">New website</option>
            <option value="refonte">Website redesign</option>
            <option value="maintenance">Maintenance</option>
            <option value="seo">Local SEO</option>
            <option value="audit">Free audit</option>
            <option value="unknown">Not sure yet</option>
          </select>
          <svg
            className="select-arrow"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 6l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </label>

      <label className="form-label">
        <span>Tell us about your project *</span>
        <textarea
          name="message"
          className="form-textarea"
          rows={5}
          placeholder="Describe your business, your goals and what you're looking for in a website…"
          required
        />
      </label>

      <TurnstileWidget onVerify={onTurnstileVerify} onExpire={onTurnstileExpire} />

      {formState.error && (
        <div className="form-error" role="alert">
          {formState.error}
        </div>
      )}

      <button
        type="submit"
        className="btn btn-primary btn-lg"
        disabled={formState.loading}
      >
        {formState.loading ? 'Sending…' : 'Send my request'}
        {!formState.loading && (
          <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M4 10h12M11 5l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>

      <p className="form-micro">
        Your information is protected and will never be shared. You will receive a clear
        first recommendation based on your needs — typically within 48 hours.
      </p>
    </form>
  );
}

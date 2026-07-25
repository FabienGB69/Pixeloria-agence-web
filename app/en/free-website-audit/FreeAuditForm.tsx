'use client';

import { useState, useRef, useCallback } from 'react';
import { track } from '@vercel/analytics';
import { trackAuditFormStarted, trackAuditFormSubmitted } from '@/lib/gtm';
import TurnstileWidget from '@/components/forms/TurnstileWidget';

interface FormState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const BUSINESS_CATEGORIES = [
  'Roofing',
  'General contracting',
  'Remodeling',
  'HVAC',
  'Plumbing',
  'Electrical',
  'Landscaping',
  'Painting',
  'Cleaning',
  'Other',
];

const MAIN_GOALS = [
  'Get more phone calls',
  'Get more estimate requests',
  'Build a new website',
  'Redesign an existing website',
  'Improve local search visibility',
  'Other',
];

const US_STATES: [string, string][] = [
  ['AL', 'Alabama'], ['AK', 'Alaska'], ['AZ', 'Arizona'], ['AR', 'Arkansas'],
  ['CA', 'California'], ['CO', 'Colorado'], ['CT', 'Connecticut'], ['DE', 'Delaware'],
  ['DC', 'District of Columbia'], ['FL', 'Florida'], ['GA', 'Georgia'], ['HI', 'Hawaii'],
  ['ID', 'Idaho'], ['IL', 'Illinois'], ['IN', 'Indiana'], ['IA', 'Iowa'],
  ['KS', 'Kansas'], ['KY', 'Kentucky'], ['LA', 'Louisiana'], ['ME', 'Maine'],
  ['MD', 'Maryland'], ['MA', 'Massachusetts'], ['MI', 'Michigan'], ['MN', 'Minnesota'],
  ['MS', 'Mississippi'], ['MO', 'Missouri'], ['MT', 'Montana'], ['NE', 'Nebraska'],
  ['NV', 'Nevada'], ['NH', 'New Hampshire'], ['NJ', 'New Jersey'], ['NM', 'New Mexico'],
  ['NY', 'New York'], ['NC', 'North Carolina'], ['ND', 'North Dakota'], ['OH', 'Ohio'],
  ['OK', 'Oklahoma'], ['OR', 'Oregon'], ['PA', 'Pennsylvania'], ['RI', 'Rhode Island'],
  ['SC', 'South Carolina'], ['SD', 'South Dakota'], ['TN', 'Tennessee'], ['TX', 'Texas'],
  ['UT', 'Utah'], ['VT', 'Vermont'], ['VA', 'Virginia'], ['WA', 'Washington'],
  ['WV', 'West Virginia'], ['WI', 'Wisconsin'], ['WY', 'Wyoming'],
];

export default function FreeAuditForm() {
  const [formState, setFormState] = useState<FormState>({
    loading: false,
    success: false,
    error: null,
  });
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const onTurnstileVerify = useCallback((token: string) => setTurnstileToken(token), []);
  const onTurnstileExpire = useCallback(() => setTurnstileToken(''), []);
  const formRef = useRef<HTMLFormElement>(null);
  const hasStartedRef = useRef(false);

  const handleFirstInteraction = useCallback(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;
    trackAuditFormStarted('free_website_audit');
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const requiredFields = form.querySelectorAll<
      HTMLInputElement | HTMLSelectElement
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
        track('free_audit_form_submit_en', {
          category: (data.businessCategory as string) || 'none',
        });
        trackAuditFormSubmitted((data.businessCategory as string) || 'none');
        setFormState({ loading: false, success: true, error: null });
        formRef.current?.reset();
      } else {
        let errMsg = 'Something went wrong. Please email us directly at contact@pixeloria.fr';
        try {
          const body = await res.json() as { error?: string };
          if (body.error) errMsg = body.error;
        } catch { /* ignore */ }
        setFormState({ loading: false, success: false, error: errMsg });
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
      <div className="form-success" role="status" aria-live="polite">
        <div className="success-icon">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.4" />
            <path d="M15 24l7 7 11-11" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3>Audit request received!</h3>
        <p>
          We will review your website and get back to you within 48 hours with three to
          five practical recommendations.
        </p>
      </div>
    );
  }

  return (
    <form
      className="contact-form glass-card"
      noValidate
      onSubmit={handleSubmit}
      onFocus={handleFirstInteraction}
      ref={formRef}
    >
      {/* Honeypot — invisible to humans, filled in by bots */}
      <input
        type="text"
        name="_hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: 'none' }}
      />
      {/* Fixed lead category for this form */}
      <input type="hidden" name="offre" value="audit" />

      <div className="form-row">
        <label>
          <span>First name <abbr title="required">*</abbr></span>
          <input type="text" name="prenom" placeholder="Your first name" required autoComplete="given-name" />
        </label>
        <label>
          <span>Last name <abbr title="required">*</abbr></span>
          <input type="text" name="nom" placeholder="Your last name" required autoComplete="family-name" />
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>Company name <abbr title="required">*</abbr></span>
          <input type="text" name="company" placeholder="Your business name" required autoComplete="organization" />
        </label>
        <label>
          <span>Business website <span className="optional">(optional)</span></span>
          <input type="text" name="url" placeholder="yourbusiness.com" autoComplete="url" />
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>Business category <abbr title="required">*</abbr></span>
          <div className="select-wrap">
            <select name="businessCategory" required defaultValue="">
              <option value="" disabled>Select your category…</option>
              {BUSINESS_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <svg className="select-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </label>
        <label>
          <span>City <abbr title="required">*</abbr></span>
          <input type="text" name="city" placeholder="e.g. Austin, Denver, Tampa…" required autoComplete="address-level2" />
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>State <abbr title="required">*</abbr></span>
          <div className="select-wrap">
            <select name="state" required defaultValue="">
              <option value="" disabled>Select your state…</option>
              {US_STATES.map(([code, label]) => (
                <option key={code} value={code}>{label}</option>
              ))}
            </select>
            <svg className="select-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </label>
        <label>
          <span>Email <abbr title="required">*</abbr></span>
          <input type="email" name="email" placeholder="your@email.com" required autoComplete="email" />
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>Phone <span className="optional">(optional)</span></span>
          <input type="tel" name="phone" placeholder="+1 (555) 000-0000" autoComplete="tel" />
        </label>
        <label>
          <span>Main business goal <abbr title="required">*</abbr></span>
          <div className="select-wrap">
            <select name="mainGoal" required defaultValue="">
              <option value="" disabled>Select your main goal…</option>
              {MAIN_GOALS.map((goal) => (
                <option key={goal} value={goal}>{goal}</option>
              ))}
            </select>
            <svg className="select-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </label>
      </div>

      <TurnstileWidget onVerify={onTurnstileVerify} onExpire={onTurnstileExpire} />

      {formState.error && (
        <p role="alert" style={{ color: '#e43f6f', fontSize: '0.9rem', marginTop: '0.25rem', textAlign: 'center', lineHeight: 1.5 }}>
          {formState.error}
        </p>
      )}

      <button
        type="submit"
        className={`btn btn-primary btn-full${formState.loading ? ' is-loading' : ''}`}
        disabled={formState.loading}
      >
        <span className="btn-label">{formState.loading ? 'Sending…' : 'Request My Free Audit'}</span>
        <svg className="btn-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="btn-loader" aria-hidden="true"></span>
      </button>

      <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--text-muted, #888)', margin: '0.5rem 0 0' }}>
        No obligation. No automated sales sequence.
      </p>

      <p className="form-privacy">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 2l5 2v4c0 3-2 5.5-5 7C6 14 4 12.5 3 11V4L8 2Z" stroke="currentColor" strokeWidth="1.4" />
        </svg>
        Your information is protected and will never be shared.
      </p>
    </form>
  );
}

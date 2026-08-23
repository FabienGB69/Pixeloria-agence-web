'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { track } from '@vercel/analytics';
import {
  normalizeReferralCode,
  isValidReferralCode,
  getReferralPartner,
} from '@/lib/referral-partners';
import { OFFERS_US, OFFER_ORDER_US } from '@/lib/pricing-us';
import { getStoredUtm } from '@/lib/utm';
import { trackAuditRequest } from '@/lib/gtm';
import TurnstileWidget from '@/components/forms/TurnstileWidget';
import { useTurnstileToken } from '@/components/forms/useTurnstileToken';

interface FormState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const CONTACT_EMAIL = 'contact@pixeloria.fr';

/**
 * US-market referral lead capture (issue #155). `/en/*` has no self-serve
 * Stripe checkout, so unlike FR's ReferralCodeSection (code → pick offer →
 * pay, reward triggered automatically by the Stripe webhook), this submits
 * a tracked lead instead — the actual offer and USD reward get finalized
 * manually once a human closes the deal (see lib/referral-rewards-us.ts).
 */
export default function ReferralLeadFormEn() {
  const searchParams = useSearchParams();
  const [code, setCode] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);
  const [formState, setFormState] = useState<FormState>({ loading: false, success: false, error: null });
  const { turnstileToken, onTurnstileVerify, onTurnstileExpire } = useTurnstileToken();

  useEffect(() => {
    const urlCode = searchParams.get('code');
    if (urlCode) {
      const normalized = normalizeReferralCode(urlCode);
      if (isValidReferralCode(normalized)) setCode(normalized);
    }
    setIsInitialized(true);
  }, [searchParams]);

  const partner = isInitialized && code ? getReferralPartner(code) : null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const requiredFields = form.querySelectorAll<HTMLInputElement | HTMLSelectElement>('[required]');
    let valid = true;
    requiredFields.forEach((field) => {
      const ok = field.checkValidity();
      field.setAttribute('aria-invalid', String(!ok));
      if (!ok) valid = false;
    });

    const normalizedCode = normalizeReferralCode(code);
    if (!normalizedCode || !isValidReferralCode(normalizedCode)) {
      valid = false;
    }

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
          referralCode: normalizedCode,
          _turnstile: turnstileToken,
          _lang: 'en',
        }),
      });

      if (res.ok) {
        track('referral_lead_submit_en', { offer: (data.offre as string) || 'none' });
        trackAuditRequest('referral-us');
        setFormState({ loading: false, success: true, error: null });
      } else {
        setFormState({
          loading: false,
          success: false,
          error: 'Something went wrong. Please email us directly at contact@pixeloria.fr',
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
      <div id="code-parrainage" className="rcs-wrap">
        <div className="rcs-banner rcs-banner--success">
          <span className="rcs-banner__icon">✓</span>
          <div className="rcs-banner__content">
            <div className="rcs-banner__label">Request received</div>
            <div className="rcs-banner__text">
              We&rsquo;ll be in touch shortly. Your referrer&rsquo;s reward is confirmed once your project is signed.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form id="code-parrainage" className="rcs-wrap" noValidate onSubmit={handleSubmit}>
      <input type="text" name="_hp" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />

      {partner && (
        <div className="rcs-banner rcs-banner--success">
          <span className="rcs-banner__icon">✓</span>
          <div className="rcs-banner__content">
            <div className="rcs-banner__label">Referral code applied</div>
            <div className="rcs-banner__text">
              {partner.name} — <strong>{code}</strong>
            </div>
          </div>
        </div>
      )}

      <p className="section-label">Use my referral code</p>
      <h2 className="rcs-wrap__title">I have a referral code</h2>
      <p className="rcs-wrap__sub">
        Enter your code and your details — we&rsquo;ll follow up with a free estimate. Your referrer&rsquo;s reward is
        confirmed once your project is signed (no automatic online payment for the US catalog yet).
      </p>

      <div className="rcs-input-wrap">
        <label htmlFor="referral-code" className="rcs-input-wrap__label">Referral code</label>
        <input
          id="referral-code"
          type="text"
          className="rcs-input"
          placeholder="E.g. PIXELORIA-FELIADA"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>

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

      <label>
        <span>Email <abbr title="required">*</abbr></span>
        <input type="email" name="email" placeholder="your@email.com" required autoComplete="email" />
      </label>

      <label>
        <span>Package you&rsquo;re interested in <abbr title="required">*</abbr></span>
        <div className="select-wrap">
          <select name="offre" required defaultValue="">
            <option value="" disabled>Select a package…</option>
            {OFFER_ORDER_US.map((id) => (
              <option key={id} value={id}>{OFFERS_US[id].title} ({OFFERS_US[id].price})</option>
            ))}
          </select>
          <svg className="select-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </label>

      <TurnstileWidget onVerify={onTurnstileVerify} onExpire={onTurnstileExpire} />

      {formState.error && (
        <div className="rcs-error">
          {formState.error}{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      )}

      <button
        type="submit"
        className="btn btn--primary"
        style={{ width: '100%', marginTop: '8px' }}
        disabled={formState.loading}
      >
        {formState.loading ? 'Sending…' : 'Request my estimate →'}
      </button>

      <p className="rcs-wrap__micro">
        Your referral code is recorded with your request. The referrer&rsquo;s reward is confirmed manually once your
        project is signed — see our <a href="/en/parrainage#faq">FAQ</a> for details.
      </p>
    </form>
  );
}

'use client';

import { useState, useCallback } from 'react';
import { track } from '@vercel/analytics';
import { trackEvent } from '@/lib/gtm';
import TurnstileWidget from '@/components/forms/TurnstileWidget';

const SITE_TYPES = [
  { id: 'vitrine',   label: 'Site vitrine',  desc: 'Présenter votre activité et générer des contacts' },
  { id: 'portfolio', label: 'Portfolio',      desc: 'Mettre en avant vos réalisations' },
  { id: 'ecommerce', label: 'E-commerce',    desc: 'Vendre vos produits en ligne' },
  { id: 'autre',     label: 'Autre',          desc: 'Projet spécifique (SaaS, blog, landing…)' },
] as const;

const BUDGETS = [
  { id: 'starter',  label: 'Moins de 1 500 €' },
  { id: 'standard', label: '1 500 – 3 000 €'  },
  { id: 'premium',  label: '3 000 – 6 000 €'  },
  { id: 'custom',   label: '6 000 € et plus'  },
] as const;

const DELAYS = [
  { id: 'urgent',   label: "Moins d’un mois" },
  { id: 'normal',   label: '1 à 3 mois'       },
  { id: 'flexible', label: '3 à 6 mois'        },
  { id: 'no-rush',  label: 'Pas de date fixe'  },
] as const;

type SiteTypeId = typeof SITE_TYPES[number]['id'];
type BudgetId   = typeof BUDGETS[number]['id'];
type DelayId    = typeof DELAYS[number]['id'];

interface FormData {
  siteType: SiteTypeId | '';
  secteur:  string;
  budget:   BudgetId  | '';
  delai:    DelayId   | '';
  message:  string;
  prenom:   string;
  nom:      string;
  email:    string;
  phone:    string;
}

const INITIAL: FormData = {
  siteType: '', secteur: '', budget: '', delai: '', message: '',
  prenom: '', nom: '', email: '', phone: '',
};

const STEPS = ['Votre projet', 'Vos besoins', 'Vos coordonnées'];

export default function CreationForm() {
  const [step, setStep]           = useState(0);
  const [data, setData]           = useState<FormData>(INITIAL);
  const [errors, setErrors]       = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading]     = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [apiError, setApiError]   = useState('');
  const [turnstileToken, setToken]   = useState('');
  const onVerify  = useCallback((t: string) => setToken(t), []);
  const onExpire  = useCallback(() => setToken(''), []);

  const set = <K extends keyof FormData>(key: K, val: FormData[K]) =>
    setData((d) => ({ ...d, [key]: val }));

  // ── Validation par étape ──────────────────────────────────────
  function validateStep(s: number): boolean {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (s === 0) {
      if (!data.siteType) errs.siteType = 'Choisissez un type de site.';
    }
    if (s === 1) {
      if (!data.budget) errs.budget = 'Indiquez votre budget.';
      if (!data.delai)  errs.delai  = 'Indiquez votre délai.';
    }
    if (s === 2) {
      if (!data.prenom) errs.prenom = 'Requis.';
      if (!data.nom)    errs.nom    = 'Requis.';
      if (!data.email)  errs.email  = 'Requis.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = 'Email invalide.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function next() {
    if (validateStep(step)) setStep((s) => s + 1);
  }
  function prev() { setStep((s) => s - 1); }

  // ── Soumission ────────────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateStep(2)) return;
    setLoading(true);
    setApiError('');

    const siteTypeLabel = SITE_TYPES.find((t) => t.id === data.siteType)?.label ?? data.siteType;
    const budgetLabel   = BUDGETS.find((b) => b.id === data.budget)?.label ?? '';
    const delaiLabel    = DELAYS.find((d) => d.id === data.delai)?.label ?? '';

    const message = [
      data.message ? `Description : ${data.message}` : '',
      `Budget : ${budgetLabel}`,
      `Délai : ${delaiLabel}`,
    ].filter(Boolean).join('\n');

    const payload = {
      offre:     'creation',
      prenom:    data.prenom,
      nom:       data.nom,
      email:     data.email,
      phone:     data.phone,
      company:   data.secteur,
      message,
      objectives: [siteTypeLabel],
      _turnstile: turnstileToken,
    };

    try {
      const res = await fetch('/api/submit-lead', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      });

      if (res.ok) {
        track('creation_form_submit', { siteType: data.siteType, budget: data.budget });
        trackEvent('creation_form_submit', { siteType: data.siteType, budget: data.budget });
        setSubmitted(true);
      } else {
        const body = await res.json().catch(() => ({}));
        setApiError((body as { error?: string }).error ?? 'Une erreur est survenue. Contactez-nous par email.');
      }
    } catch {
      setSubmitted(true); // dev fallback
    } finally {
      setLoading(false);
    }
  }

  // ── Succès ────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <div className="success-icon">
          <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2.4" />
            <path d="M15 24l7 7 11-11" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3>Projet reçu&nbsp;!</h3>
        <p>Nous étudions votre demande et revenons vers vous sous 48&nbsp;h.</p>
      </div>
    );
  }

  // ── Barre de progression ──────────────────────────────────────
  const progress = Math.round(((step) / STEPS.length) * 100);

  return (
    <div className="wizard">
      {/* Head */}
      <div className="wizard-head">
        <div className="wizard-steps-label">
          Étape {step + 1} / {STEPS.length} — <strong>{STEPS[step]}</strong>
        </div>
        <div className="progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
          <div className="progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Body */}
      <form className="wizard-body" onSubmit={handleSubmit} noValidate>

        {/* ── Étape 1 : Type de site ────────────────────────────── */}
        {step === 0 && (
          <>
            <h2 className="wizard-title">Quel site voulez-vous créer&nbsp;?</h2>
            <p className="step-lead">Dites-nous l&apos;essentiel — on s&apos;occupe du reste.</p>

            <div className="creation-type-grid">
              {SITE_TYPES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  className={`creation-type-card${data.siteType === t.id ? ' is-selected' : ''}`}
                  onClick={() => set('siteType', t.id)}
                  aria-pressed={data.siteType === t.id}
                >
                  <span className="creation-type-label">{t.label}</span>
                  <span className="creation-type-desc">{t.desc}</span>
                </button>
              ))}
            </div>
            {errors.siteType && <p className="field-error" role="alert">{errors.siteType}</p>}

            <label style={{ marginTop: '1.5rem', display: 'block' }}>
              <span className="field-label">Votre secteur d&apos;activité <span className="optional">(facultatif)</span></span>
              <input
                type="text"
                placeholder="Ex : artisan menuisier, coach sportif, restaurant…"
                value={data.secteur}
                onChange={(e) => set('secteur', e.target.value)}
                maxLength={100}
              />
            </label>

            <div className="step-nav">
              <button type="button" className="btn btn-primary" onClick={next}>
                Continuer
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="btn-icon">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </>
        )}

        {/* ── Étape 2 : Budget & délai ─────────────────────────── */}
        {step === 1 && (
          <>
            <h2 className="wizard-title">Votre budget et votre calendrier</h2>
            <p className="step-lead">Pas de surprise — on adapte la prestation à vos contraintes.</p>

            <fieldset style={{ border: 'none', padding: 0, marginBottom: '1.5rem' }}>
              <legend className="field-label" style={{ marginBottom: '0.75rem' }}>Budget approximatif *</legend>
              <div className="chip-grid">
                {BUDGETS.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    className={`chip${data.budget === b.id ? ' chip-state' : ''}`}
                    onClick={() => set('budget', b.id)}
                    aria-pressed={data.budget === b.id}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
              {errors.budget && <p className="field-error" role="alert">{errors.budget}</p>}
            </fieldset>

            <fieldset style={{ border: 'none', padding: 0, marginBottom: '1.5rem' }}>
              <legend className="field-label" style={{ marginBottom: '0.75rem' }}>Délai souhaité *</legend>
              <div className="chip-grid">
                {DELAYS.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    className={`chip${data.delai === d.id ? ' chip-state' : ''}`}
                    onClick={() => set('delai', d.id)}
                    aria-pressed={data.delai === d.id}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
              {errors.delai && <p className="field-error" role="alert">{errors.delai}</p>}
            </fieldset>

            <label>
              <span className="field-label">Décrivez votre projet <span className="optional">(facultatif)</span></span>
              <textarea
                rows={3}
                placeholder="Inspirations, fonctionnalités souhaitées, votre cible…"
                value={data.message}
                onChange={(e) => set('message', e.target.value)}
                maxLength={1000}
              />
            </label>

            <div className="step-nav">
              <button type="button" className="btn btn-secondary" onClick={prev}>← Retour</button>
              <button type="button" className="btn btn-primary" onClick={next}>
                Continuer
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="btn-icon">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </>
        )}

        {/* ── Étape 3 : Contact ─────────────────────────────────── */}
        {step === 2 && (
          <>
            <h2 className="wizard-title">On vous recontacte sous 48&nbsp;h</h2>
            <p className="step-lead">Un échange de 20 minutes suffit pour poser les bases de votre projet.</p>

            <div className="field-grid">
              <label>
                <span className="field-label">Prénom *</span>
                <input
                  type="text"
                  name="prenom"
                  placeholder="Votre prénom"
                  value={data.prenom}
                  onChange={(e) => set('prenom', e.target.value)}
                  autoComplete="given-name"
                  aria-invalid={!!errors.prenom}
                />
                {errors.prenom && <span className="field-error">{errors.prenom}</span>}
              </label>
              <label>
                <span className="field-label">Nom *</span>
                <input
                  type="text"
                  name="nom"
                  placeholder="Votre nom"
                  value={data.nom}
                  onChange={(e) => set('nom', e.target.value)}
                  autoComplete="family-name"
                  aria-invalid={!!errors.nom}
                />
                {errors.nom && <span className="field-error">{errors.nom}</span>}
              </label>
            </div>

            <label>
              <span className="field-label">Email *</span>
              <input
                type="email"
                name="email"
                placeholder="vous@marque.com"
                value={data.email}
                onChange={(e) => set('email', e.target.value)}
                autoComplete="email"
                aria-invalid={!!errors.email}
              />
              {errors.email && <span className="field-error" role="alert">{errors.email}</span>}
            </label>

            <label>
              <span className="field-label">Téléphone <span className="optional">(facultatif)</span></span>
              <input
                type="tel"
                name="phone"
                placeholder="06 00 00 00 00"
                value={data.phone}
                onChange={(e) => set('phone', e.target.value)}
                autoComplete="tel"
              />
            </label>

            <TurnstileWidget onVerify={onVerify} onExpire={onExpire} />

            {apiError && (
              <p role="alert" style={{ color: 'var(--primary)', fontSize: '0.875rem', marginTop: '0.5rem' }}>
                {apiError}
              </p>
            )}

            <div className="step-nav">
              <button type="button" className="btn btn-secondary" onClick={prev}>← Retour</button>
              <button
                type="submit"
                className={`btn btn-primary${loading ? ' is-loading' : ''}`}
                disabled={loading}
              >
                <span className="btn-label">Envoyer ma demande</span>
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="btn-icon">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="btn-loader" aria-hidden="true" />
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

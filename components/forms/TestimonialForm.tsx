'use client';

import { Fragment, useState } from 'react';
import TurnstileWidget from '@/components/forms/TurnstileWidget';
import { useTurnstileToken } from '@/components/forms/useTurnstileToken';

interface FormState {
  loading: boolean;
  success: boolean;
  prenom: string;
  error: string | null;
}

// Form field `name` attributes differ per locale (EN keeps its own English
// names rather than the FR/API ones) — preserved from the pre-merge
// components so the rendered HTML contract (and existing e2e tests) don't
// change. Submission remaps them onto the canonical API field names below.
const FIELD_NAMES = {
  fr: { prenom: 'prenom', activite: 'activite', ville: 'ville', avis: 'avis', accord: 'accord' },
  en: { prenom: 'firstName', activite: 'trade', ville: 'city', avis: 'review', accord: 'consent' },
} as const;

const COPY = {
  fr: {
    prenomLabel: 'Prénom', requiredAbbr: 'requis',
    prenomPlaceholder: 'Votre prénom',
    activiteLabel: 'Activité / Métier',
    activitePlaceholder: 'Ex : Plombier, Électricien, Couvreur…',
    villeLabel: 'Ville',
    villePlaceholder: 'Ex : Lyon, Villeurbanne…',
    avisLabel: 'Votre avis',
    avisPlaceholder: "Qu'est-ce que vous avez aimé ? Qu'est-ce qui vous a convaincu de faire confiance à Pixeloria ? Y a-t-il un résultat concret que vous voulez partager ?",
    noteLegend: 'Votre note globale',
    starAriaGroup: 'Note de 1 à 5 étoiles',
    starAriaLabel: (val: number) => `${val} étoile${val > 1 ? 's' : ''}`,
    accordLabel: "J'accepte que cet avis soit affiché sur pixeloria.fr avec mon prénom et mon activité.",
    submitLabel: 'Envoyer mon avis →',
    submitLoading: 'Envoi en cours…',
    successTitle: (prenom: string) => `Merci ${prenom} !`,
    successBody: "Votre avis a bien été transmis. On l'intègre rapidement au site.",
    defaultError: "Une erreur s'est produite. Réessayez ou écrivez directement à contact@pixeloria.fr",
  },
  en: {
    prenomLabel: 'First name', requiredAbbr: 'required',
    prenomPlaceholder: 'Your first name',
    activiteLabel: 'Trade / Profession',
    activitePlaceholder: 'e.g. Plumber, Electrician, Painter…',
    villeLabel: 'City',
    villePlaceholder: 'e.g. Lyon, Grenoble, London…',
    avisLabel: 'Your review',
    avisPlaceholder: 'What did you enjoy most? What convinced you to trust Pixeloria? Is there a concrete result you want to share?',
    noteLegend: 'Overall rating',
    starAriaGroup: 'Rating from 1 to 5 stars',
    starAriaLabel: (val: number) => `${val} star${val > 1 ? 's' : ''}`,
    accordLabel: 'I agree for this review to be displayed on pixeloria.fr with my first name and profession.',
    submitLabel: 'Submit my review →',
    submitLoading: 'Sending…',
    successTitle: (prenom: string) => `Thank you, ${prenom}!`,
    successBody: 'Your review has been submitted. We will add it to the site shortly.',
    defaultError: 'Something went wrong. Please try again or email us directly at contact@pixeloria.fr',
  },
} as const;

export default function TestimonialForm({ locale = 'fr' }: { locale?: 'fr' | 'en' }) {
  const t = COPY[locale];
  const f = FIELD_NAMES[locale];
  const [formState, setFormState] = useState<FormState>({
    loading: false,
    success: false,
    prenom: '',
    error: null,
  });
  const { turnstileToken, onTurnstileVerify, onTurnstileExpire } = useTurnstileToken();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const data: Record<string, FormDataEntryValue | string> = {
      prenom: raw[f.prenom],
      activite: raw[f.activite],
      ville: raw[f.ville],
      avis: raw[f.avis],
      note: raw.note,
      accord: raw[f.accord],
      _hp: raw._hp,
      _turnstile: turnstileToken,
      ...(locale === 'en' ? { _lang: 'en' } : {}),
    };

    setFormState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const res = await fetch('/api/submit-testimonial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setFormState({
          loading: false,
          success: true,
          prenom: String(data.prenom || ''),
          error: null,
        });
      } else {
        let errMsg: string = t.defaultError;
        try {
          const body = await res.json() as { error?: string };
          if (body.error) errMsg = body.error;
        } catch { /* ignore */ }
        setFormState((prev) => ({
          ...prev,
          loading: false,
          error: errMsg,
        }));
      }
    } catch {
      setFormState((prev) => ({
        ...prev,
        loading: false,
        error: t.defaultError,
      }));
    }
  };

  if (formState.success) {
    return (
      <div className="temoignage-success" role="status" aria-live="polite">
        <div className="success-emoji">🎉</div>
        <h2>{t.successTitle(formState.prenom)}</h2>
        <p>{t.successBody}</p>
      </div>
    );
  }

  return (
    <form className="temoignage-form" noValidate onSubmit={handleSubmit}>

      {/* Honeypot — invisible pour les humains, rempli par les bots */}
      <input
        type="text"
        name="_hp"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: 'none' }}
      />

      <label>
        {t.prenomLabel} <abbr title={t.requiredAbbr}>*</abbr>
        <input
          type="text"
          name={f.prenom}
          placeholder={t.prenomPlaceholder}
          required
          autoComplete="given-name"
          maxLength={50}
        />
      </label>

      <label>
        {t.activiteLabel} <abbr title={t.requiredAbbr}>*</abbr>
        <input
          type="text"
          name={f.activite}
          placeholder={t.activitePlaceholder}
          required
          maxLength={100}
        />
      </label>

      <label>
        {t.villeLabel} <abbr title={t.requiredAbbr}>*</abbr>
        <input
          type="text"
          name={f.ville}
          placeholder={t.villePlaceholder}
          required
          maxLength={100}
        />
      </label>

      <label>
        {t.avisLabel} <abbr title={t.requiredAbbr}>*</abbr>
        <textarea
          name={f.avis}
          rows={5}
          placeholder={t.avisPlaceholder}
          required
          minLength={10}
          maxLength={1000}
        ></textarea>
      </label>

      <fieldset style={{ border: 'none', padding: 0, margin: '0 0 1.1rem' }}>
        <legend style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333', marginBottom: '0.4rem' }}>
          {t.noteLegend} <abbr title={t.requiredAbbr}>*</abbr>
        </legend>
        <div className="temoignage-stars" role="group" aria-label={t.starAriaGroup}>
          {[5, 4, 3, 2, 1].map((val) => (
            <Fragment key={val}>
              <input
                type="radio"
                id={`note-${val}`}
                name="note"
                value={String(val)}
                required
                defaultChecked={val === 5}
              />
              <label htmlFor={`note-${val}`} aria-label={t.starAriaLabel(val)}>
                ★
              </label>
            </Fragment>
          ))}
        </div>
      </fieldset>

      <label className="temoignage-accord">
        <input type="checkbox" name={f.accord} value="true" required />
        {t.accordLabel}
      </label>

      <TurnstileWidget onVerify={onTurnstileVerify} onExpire={onTurnstileExpire} />

      <button
        type="submit"
        className="btn btn-primary btn-full"
        disabled={formState.loading}
        style={{ width: '100%', justifyContent: 'center' }}
      >
        {formState.loading ? t.submitLoading : t.submitLabel}
      </button>

      {formState.error && (
        <p
          role="alert"
          style={{ color: '#e43f6f', fontSize: '0.875rem', marginTop: '0.75rem', textAlign: 'center', lineHeight: 1.5 }}
        >
          {formState.error}
        </p>
      )}
    </form>
  );
}

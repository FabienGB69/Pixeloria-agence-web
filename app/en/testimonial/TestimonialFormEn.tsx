'use client';

import { Fragment, useState } from 'react';

interface FormState {
  loading: boolean;
  success: boolean;
  firstName: string;
  error: string | null;
}

export default function TestimonialFormEn() {
  const [formState, setFormState] = useState<FormState>({
    loading: false,
    success: false,
    firstName: '',
    error: null,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());

    // Map English field names to API field names
    const data = {
      prenom: raw.firstName,
      activite: raw.trade,
      ville: raw.city,
      avis: raw.review,
      note: raw.note,
      accord: raw.consent,
      _lang: 'en',
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
          firstName: String(raw.firstName || ''),
          error: null,
        });
      } else {
        let errMsg = 'Something went wrong. Please try again or email us directly at contact@pixeloria.fr';
        try {
          const body = await res.json() as { error?: string };
          if (body.error) errMsg = body.error;
        } catch { /* ignore */ }
        setFormState((prev) => ({ ...prev, loading: false, error: errMsg }));
      }
    } catch {
      setFormState((prev) => ({
        ...prev,
        loading: false,
        error: 'Something went wrong. Please try again or email us directly at contact@pixeloria.fr',
      }));
    }
  };

  if (formState.success) {
    return (
      <div className="temoignage-success" role="status" aria-live="polite">
        <div className="success-emoji">🎉</div>
        <h2>Thank you, {formState.firstName}!</h2>
        <p>Your review has been submitted. We will add it to the site shortly.</p>
      </div>
    );
  }

  return (
    <form className="temoignage-form" noValidate onSubmit={handleSubmit}>

      <label>
        First name <abbr title="required">*</abbr>
        <input
          type="text"
          name="firstName"
          placeholder="Your first name"
          required
          autoComplete="given-name"
          maxLength={50}
        />
      </label>

      <label>
        Trade / Profession <abbr title="required">*</abbr>
        <input
          type="text"
          name="trade"
          placeholder="e.g. Plumber, Electrician, Painter…"
          required
          maxLength={100}
        />
      </label>

      <label>
        City <abbr title="required">*</abbr>
        <input
          type="text"
          name="city"
          placeholder="e.g. Lyon, Grenoble, London…"
          required
          maxLength={100}
        />
      </label>

      <label>
        Your review <abbr title="required">*</abbr>
        <textarea
          name="review"
          rows={5}
          placeholder="What did you enjoy most? What convinced you to trust Pixeloria? Is there a concrete result you want to share?"
          required
          minLength={10}
          maxLength={1000}
        ></textarea>
      </label>

      <fieldset style={{ border: 'none', padding: 0, margin: '0 0 1.1rem' }}>
        <legend style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem' }}>
          Overall rating <abbr title="required">*</abbr>
        </legend>
        <div className="temoignage-stars" role="group" aria-label="Rating from 1 to 5 stars">
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
              <label htmlFor={`note-${val}`} aria-label={`${val} star${val > 1 ? 's' : ''}`}>
                ★
              </label>
            </Fragment>
          ))}
        </div>
      </fieldset>

      <label className="temoignage-accord">
        <input type="checkbox" name="consent" value="true" required />
        I agree for this review to be displayed on pixeloria.fr with my first name and profession.
      </label>

      <button
        type="submit"
        className="btn btn-primary btn-full"
        disabled={formState.loading}
        style={{ width: '100%', justifyContent: 'center' }}
      >
        {formState.loading ? 'Sending…' : 'Submit my review →'}
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

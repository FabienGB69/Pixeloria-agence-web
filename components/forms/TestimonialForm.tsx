'use client';

import { Fragment, useState } from 'react';

interface FormState {
  loading: boolean;
  success: boolean;
  prenom: string;
  error: string | null;
}

export default function TestimonialForm() {
  const [formState, setFormState] = useState<FormState>({
    loading: false,
    success: false,
    prenom: '',
    error: null,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

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
        setFormState((prev) => ({
          ...prev,
          loading: false,
          error: 'Une erreur s\'est produite. Réessayez ou écrivez directement à contact@pixeloria.fr',
        }));
      }
    } catch {
      setFormState((prev) => ({
        ...prev,
        loading: false,
        error: 'Une erreur s\'est produite. Réessayez ou écrivez directement à contact@pixeloria.fr',
      }));
    }
  };

  if (formState.success) {
    return (
      <div className="temoignage-success" role="status" aria-live="polite">
        <div className="success-emoji">🎉</div>
        <h2>Merci {formState.prenom}&nbsp;!</h2>
        <p>Votre avis a bien été transmis. On l&apos;intègre rapidement au site.</p>
      </div>
    );
  }

  return (
    <form className="temoignage-form" noValidate onSubmit={handleSubmit}>

      <label>
        Prénom <abbr title="requis">*</abbr>
        <input
          type="text"
          name="prenom"
          placeholder="Votre prénom"
          required
          autoComplete="given-name"
          maxLength={50}
        />
      </label>

      <label>
        Activité / Métier <abbr title="requis">*</abbr>
        <input
          type="text"
          name="activite"
          placeholder="Ex : Plombier, Électricien, Couvreur…"
          required
          maxLength={100}
        />
      </label>

      <label>
        Ville <abbr title="requis">*</abbr>
        <input
          type="text"
          name="ville"
          placeholder="Ex : Lyon, Villeurbanne…"
          required
          maxLength={100}
        />
      </label>

      <label>
        Votre avis <abbr title="requis">*</abbr>
        <textarea
          name="avis"
          rows={5}
          placeholder="Qu'est-ce que vous avez aimé ? Qu'est-ce qui vous a convaincu de faire confiance à Pixeloria ? Y a-t-il un résultat concret que vous voulez partager ?"
          required
          minLength={10}
          maxLength={1000}
        ></textarea>
      </label>

      <fieldset style={{ border: 'none', padding: 0, margin: '0 0 1.1rem' }}>
        <legend style={{ fontSize: '0.9rem', fontWeight: 600, color: '#333', marginBottom: '0.4rem' }}>
          Votre note globale <abbr title="requis">*</abbr>
        </legend>
        <div className="temoignage-stars" role="group" aria-label="Note de 1 à 5 étoiles">
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
              <label htmlFor={`note-${val}`} aria-label={`${val} étoile${val > 1 ? 's' : ''}`}>
                ★
              </label>
            </Fragment>
          ))}
        </div>
      </fieldset>

      <label className="temoignage-accord">
        <input type="checkbox" name="accord" value="true" required />
        J&apos;accepte que cet avis soit affiché sur pixeloria.fr avec mon prénom et mon activité.
      </label>

      <button
        type="submit"
        className="btn btn-primary btn-full"
        disabled={formState.loading}
        style={{ width: '100%', justifyContent: 'center' }}
      >
        {formState.loading ? 'Envoi en cours…' : 'Envoyer mon avis →'}
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

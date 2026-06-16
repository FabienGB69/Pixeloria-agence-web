'use client';

import { useState } from 'react';

type OfferKey = 'artisan' | 'visibilite';

interface Offer {
  key: OfferKey;
  name: string;
  desc: string;
  benefit: string;
  highlight: boolean;
}

interface StripeLinks {
  referral: string;
}

const stripeLinks: Record<OfferKey, StripeLinks> = {
  artisan: { referral: 'URL_STRIPE_ARTISAN_179' },
  visibilite: { referral: 'URL_STRIPE_VISIBILITE_59_FIRST_MONTH' },
};

const validReferralCodes = ['PIXELORIA-JEAN', 'PIXELORIA-SOPHIE', 'PIXELORIA-MARTIN'];

const offers: Offer[] = [
  {
    key: 'artisan',
    name: 'Site Artisan',
    desc: '179 € TTC au lieu de 199 €',
    benefit: '−20 € sur le Site Artisan',
    highlight: false,
  },
  {
    key: 'visibilite',
    name: 'Option Visibilité',
    desc: '1er mois à 59 € puis 89 €/mois',
    benefit: '1er mois offert à moitié prix',
    highlight: true,
  },
];

const CONTACT_EMAIL = 'contact@pixeloria.fr';

export default function ReferralCodeSection() {
  const [code, setCode] = useState<string>('');
  const [selectedOffer, setSelectedOffer] = useState<OfferKey | ''>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = () => {
    const normalizedCode = code.trim().toUpperCase();

    if (!normalizedCode) {
      setError('Veuillez renseigner votre code parrainage.');
      return;
    }

    if (!validReferralCodes.includes(normalizedCode)) {
      setError(
        "Ce code parrainage n'est pas encore reconnu. Vérifiez votre code ou contactez Pixeloria.",
      );
      return;
    }

    if (!selectedOffer) {
      setError('Veuillez sélectionner une offre Pixeloria.');
      return;
    }

    const stripeUrl = stripeLinks[selectedOffer].referral;

    if (stripeUrl.includes('URL_STRIPE')) {
      setError(
        "Le lien de paiement n'est pas encore configuré. Contactez Pixeloria :",
      );
      return;
    }

    setError('');
    const url = `${stripeUrl}?client_reference_id=${normalizedCode}&prefilled_promo_code=${normalizedCode}`;
    window.location.href = url;
  };

  const showContactLink =
    error.includes('contactez Pixeloria') || error.includes('Contactez Pixeloria');

  return (
    <div id="code-parrainage" className="rcs-wrap">
      <p className="section-label">Activer mon avantage filleul</p>
      <h2 className="rcs-wrap__title">J&rsquo;ai un code parrainage</h2>
      <p className="rcs-wrap__sub">
        Renseignez votre code, choisissez votre offre, accédez directement au paiement avec votre remise.
      </p>

      <div className="rcs-input-wrap">
        <label htmlFor="referral-code" className="rcs-input-wrap__label">
          Code parrainage
        </label>
        <input
          id="referral-code"
          type="text"
          className="rcs-input"
          placeholder="Ex : PIXELORIA-JEAN"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            setError('');
          }}
        />
      </div>

      <p className="rcs-input-wrap__label" style={{ marginBottom: '16px' }}>
        Choisissez votre offre
      </p>
      <div className="rcs-offers">
        {offers.map((offer) => (
          <button
            type="button"
            key={offer.key}
            className={`rcs-offer-card${selectedOffer === offer.key ? ' rcs-offer-card--selected' : ''}${offer.highlight ? ' rcs-offer-card--highlight' : ''}`}
            onClick={() => {
              setSelectedOffer(offer.key);
              setError('');
            }}
          >
            {offer.highlight && (
              <span className="badge badge--gold">&#11088; Meilleure récompense</span>
            )}
            <div className="rcs-offer-card__name">{offer.name}</div>
            <div className="rcs-offer-card__desc">{offer.desc}</div>
            <div className="rcs-offer-card__benefit">{offer.benefit}</div>
          </button>
        ))}
      </div>

      {error && (
        <div className="rcs-error">
          {error}
          {showContactLink && (
            <>
              {' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </>
          )}
        </div>
      )}

      <button
        type="button"
        className="btn btn--primary"
        style={{ width: '100%', marginTop: '8px' }}
        onClick={handleSubmit}
      >
        Utiliser mon avantage &rarr;
      </button>

      <p className="rcs-wrap__micro">
        Votre avantage est appliqué via Stripe. La récompense du parrain est déclenchée selon les conditions du programme Pixeloria.
      </p>
    </div>
  );
}

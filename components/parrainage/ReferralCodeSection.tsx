'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  validReferralCodes,
  normalizeReferralCode,
  isValidReferralCode,
  getReferralPartner,
} from '@/lib/referral-partners';
import { buildStripeReferralUrl } from '@/lib/stripe-referral-url';

type OfferKey = 'vitrine' | 'visibilite';

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
  vitrine: { referral: process.env.NEXT_PUBLIC_STRIPE_SITE_VITRINE_PAYMENT_LINK || '' },
  visibilite: { referral: process.env.NEXT_PUBLIC_STRIPE_OPTION_VISIBILITE_PAYMENT_LINK || '' },
};

const offers: Offer[] = [
  {
    key: 'vitrine',
    name: 'Site Vitrine',
    desc: '199 € TTC · Paiement unique',
    benefit: 'Vous gagnez 100 €',
    highlight: false,
  },
  {
    key: 'visibilite',
    name: 'Visibilité locale',
    desc: '49 € TTC/mois · Abonnement',
    benefit: 'Vous gagnez 25 €/mois',
    highlight: true,
  },
];

const CONTACT_EMAIL = 'contact@pixeloria.fr';

export default function ReferralCodeSection() {
  const searchParams = useSearchParams();
  const [code, setCode] = useState<string>('');
  const [selectedOffer, setSelectedOffer] = useState<OfferKey | ''>('');
  const [error, setError] = useState<string>('');
  const [isInitialized, setIsInitialized] = useState(false);

  // Extract and auto-fill code from URL params
  useEffect(() => {
    const urlCode = searchParams.get('code');
    if (urlCode) {
      const normalized = normalizeReferralCode(urlCode);
      if (isValidReferralCode(normalized)) {
        setCode(normalized);
      }
    }
    setIsInitialized(true);
  }, [searchParams]);

  const handleSubmit = () => {
    const normalizedCode = normalizeReferralCode(code);

    if (!normalizedCode) {
      setError('Veuillez renseigner votre code parrainage.');
      return;
    }

    if (!isValidReferralCode(normalizedCode)) {
      setError(
        "Ce code parrainage n'est pas encore reconnu. Vérifiez votre code ou contactez Pixeloria.",
      );
      return;
    }

    if (!selectedOffer) {
      setError('Veuillez sélectionner une offre Pixeloria.');
      return;
    }

    const baseUrl = stripeLinks[selectedOffer].referral;

    if (!baseUrl || baseUrl.includes('URL_STRIPE')) {
      setError(
        "Le lien de paiement n'est pas encore configuré. Contactez Pixeloria :",
      );
      return;
    }

    setError('');
    const url = buildStripeReferralUrl(baseUrl, normalizedCode);
    window.location.href = url;
  };

  const showContactLink =
    error.includes('contactez Pixeloria') || error.includes('Contactez Pixeloria');

  const partner = isInitialized && code ? getReferralPartner(code) : null;

  return (
    <div id="code-parrainage" className="rcs-wrap">
      {partner && (
        <div className="rcs-banner rcs-banner--success">
          <span className="rcs-banner__icon">✓</span>
          <div className="rcs-banner__content">
            <div className="rcs-banner__label">Code parrainage appliqué</div>
            <div className="rcs-banner__text">
              {partner.name} — <strong>{code}</strong>
            </div>
          </div>
        </div>
      )}

      <p className="section-label">Utiliser mon code parrainage</p>
      <h2 className="rcs-wrap__title">J&rsquo;ai un code parrainage</h2>
      <p className="rcs-wrap__sub">
        Renseignez votre code, choisissez votre offre, et accédez au paiement. Votre parrain recevra sa récompense automatiquement.
      </p>

      <div className="rcs-input-wrap">
        <label htmlFor="referral-code" className="rcs-input-wrap__label">
          Code parrainage
        </label>
        <input
          id="referral-code"
          type="text"
          className="rcs-input"
          placeholder="Ex : PIXELORIA-FELIADA"
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
        Procéder au paiement &rarr;
      </button>

      <p className="rcs-wrap__micro">
        Votre code parrainage est validé lors du paiement. La récompense du parrain est déclenchée automatiquement selon les conditions du programme.
      </p>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  normalizeReferralCode,
  isValidReferralCode,
  getReferralPartner,
} from '@/lib/referral-partners';
import { buildStripeReferralUrl } from '@/lib/stripe-referral-url';
import { OFFERS } from '@/lib/pricing';
import { getReferralReward } from '@/lib/referral-rewards';

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
    name: OFFERS['site-artisan'].title,
    desc: `${OFFERS['site-artisan'].price} · Paiement unique`,
    benefit: `Vous gagnez ${getReferralReward('site-artisan')} €`,
    highlight: false,
  },
  {
    key: 'visibilite',
    name: OFFERS['option-visibilite'].title,
    desc: `${OFFERS['option-visibilite'].price} · Abonnement`,
    benefit: `Vous gagnez ${getReferralReward('option-visibilite')} €/mois`,
    highlight: true,
  },
];

const CONTACT_EMAIL = 'contact@pixeloria.fr';

const COPY = {
  fr: {
    offerNames: { vitrine: OFFERS['site-artisan'].title, visibilite: OFFERS['option-visibilite'].title } as Record<OfferKey, string>,
    offerDescs: { vitrine: `${OFFERS['site-artisan'].price} · Paiement unique`, visibilite: `${OFFERS['option-visibilite'].price} · Abonnement` } as Record<OfferKey, string>,
    offerBenefits: { vitrine: `Vous gagnez ${getReferralReward('site-artisan')} €`, visibilite: `Vous gagnez ${getReferralReward('option-visibilite')} €/mois` } as Record<OfferKey, string>,
    highlightBadge: '⭐ Meilleure récompense',
    errRequired: 'Veuillez renseigner votre code parrainage.',
    errUnknown: "Ce code parrainage n'est pas encore reconnu. Vérifiez votre code ou contactez Pixeloria.",
    errNoOffer: 'Veuillez sélectionner une offre Pixeloria.',
    errNoLink: "Le lien de paiement n'est pas encore configuré. Contactez Pixeloria :",
    contactMarker: 'contactez Pixeloria',
    bannerLabel: 'Code parrainage appliqué',
    sectionLabel: 'Utiliser mon code parrainage',
    title: "J'ai un code parrainage",
    sub: 'Renseignez votre code, choisissez votre offre, et accédez au paiement. Votre parrain recevra sa récompense automatiquement.',
    inputLabel: 'Code parrainage',
    placeholder: 'Ex : PIXELORIA-FELIADA',
    chooseOffer: 'Choisissez votre offre',
    submit: 'Procéder au paiement →',
    micro: 'Votre code parrainage est validé lors du paiement. La récompense du parrain est déclenchée automatiquement selon les conditions du programme.',
  },
  en: {
    // The referral program is EUR-only: it pays out on the FR Site Artisan /
    // Option Visibilité Stripe links (NEXT_PUBLIC_STRIPE_*_PAYMENT_LINK),
    // regardless of locale — there is no separate USD referral product. See
    // issue #155 for why this page keeps € pricing on /en/parrainage.
    offerNames: { vitrine: 'Craftsman Website', visibilite: 'Visibility Option' } as Record<OfferKey, string>,
    offerDescs: { vitrine: `${OFFERS['site-artisan'].price} · One-time payment`, visibilite: `${OFFERS['option-visibilite'].price} · Subscription` } as Record<OfferKey, string>,
    offerBenefits: { vitrine: `You earn €${getReferralReward('site-artisan')}`, visibilite: `You earn €${getReferralReward('option-visibilite')}/month` } as Record<OfferKey, string>,
    highlightBadge: '⭐ Best reward',
    errRequired: 'Please enter your referral code.',
    errUnknown: 'This referral code is not recognised yet. Check your code or contact Pixeloria.',
    errNoOffer: 'Please select a Pixeloria offer.',
    errNoLink: 'The payment link is not configured yet. Contact Pixeloria:',
    contactMarker: 'contact Pixeloria',
    bannerLabel: 'Referral code applied',
    sectionLabel: 'Use my referral code',
    title: 'I have a referral code',
    sub: 'Enter your code, choose your offer, and proceed to payment. Your referrer will receive their reward automatically.',
    inputLabel: 'Referral code',
    placeholder: 'E.g. PIXELORIA-FELIADA',
    chooseOffer: 'Choose your offer',
    submit: 'Proceed to payment →',
    micro: "Your referral code is validated at payment. The referrer's reward is triggered automatically per the program's terms.",
  },
} as const;

export default function ReferralCodeSection({ locale = 'fr' }: { locale?: 'fr' | 'en' }) {
  const t = COPY[locale];
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
      setError(t.errRequired);
      return;
    }

    if (!isValidReferralCode(normalizedCode)) {
      setError(t.errUnknown);
      return;
    }

    if (!selectedOffer) {
      setError(t.errNoOffer);
      return;
    }

    const baseUrl = stripeLinks[selectedOffer].referral;

    if (!baseUrl || baseUrl.includes('URL_STRIPE')) {
      setError(t.errNoLink);
      return;
    }

    setError('');
    const url = buildStripeReferralUrl(baseUrl, normalizedCode);
    window.location.href = url;
  };

  const showContactLink = error.includes(t.contactMarker);

  const partner = isInitialized && code ? getReferralPartner(code) : null;

  return (
    <div id="code-parrainage" className="rcs-wrap">
      {partner && (
        <div className="rcs-banner rcs-banner--success">
          <span className="rcs-banner__icon">✓</span>
          <div className="rcs-banner__content">
            <div className="rcs-banner__label">{t.bannerLabel}</div>
            <div className="rcs-banner__text">
              {partner.name} — <strong>{code}</strong>
            </div>
          </div>
        </div>
      )}

      <p className="section-label">{t.sectionLabel}</p>
      <h2 className="rcs-wrap__title">{t.title}</h2>
      <p className="rcs-wrap__sub">{t.sub}</p>

      <div className="rcs-input-wrap">
        <label htmlFor="referral-code" className="rcs-input-wrap__label">
          {t.inputLabel}
        </label>
        <input
          id="referral-code"
          type="text"
          className="rcs-input"
          placeholder={t.placeholder}
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            setError('');
          }}
        />
      </div>

      <p className="rcs-input-wrap__label" style={{ marginBottom: '16px' }}>
        {t.chooseOffer}
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
              <span className="badge badge--gold">{t.highlightBadge}</span>
            )}
            <div className="rcs-offer-card__name">{t.offerNames[offer.key]}</div>
            <div className="rcs-offer-card__desc">{t.offerDescs[offer.key]}</div>
            <div className="rcs-offer-card__benefit">{t.offerBenefits[offer.key]}</div>
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
        {t.submit}
      </button>

      <p className="rcs-wrap__micro">{t.micro}</p>
    </div>
  );
}

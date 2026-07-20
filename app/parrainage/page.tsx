import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import ParrainageFaq from '@/components/parrainage/ParrainageFaq';
import ParrainageReveal from '@/components/parrainage/ParrainageReveal';

const ReferralCodeSection = dynamic(
  () => import('@/components/parrainage/ReferralCodeSection'),
  { ssr: false },
);

export const metadata: Metadata = {
  title: "Programme de parrainage — Gagnez jusqu'à 100 € + 25 €/mois | Pixeloria",
  description:
    "Recommandez Pixeloria à un artisan ou une TPE et gagnez jusqu'à 100 € de prime, plus 25 €/mois si votre filleul s'abonne à la Visibilité locale. Programme entièrement transparent et automatisé.",
  openGraph: {
    title: "Programme de parrainage Pixeloria — Gagnez jusqu'à 100 € + 25 €/mois",
    description:
      "Partagez votre code parrainage. Gagnez 100 € quand votre filleul achète un site, plus 25 €/mois s'il s'abonne à la Visibilité locale.",
    url: 'https://pixeloria.fr/parrainage',
  },
  alternates: { canonical: 'https://pixeloria.fr/parrainage' },
};

const _referralRaw = process.env.NEXT_PUBLIC_REFERRAL_URL;
const REFERRAL_URL =
  _referralRaw && !_referralRaw.includes('URL_') ? _referralRaw : '#devenir-parrain';

export default function ParrainagePage() {
  return (
    <div className="prrn-page">
      <ParrainageReveal />

      {/* ===================== NAV ===================== */}
      <nav className="nav" role="navigation" aria-label="Navigation principale">
        <div className="nav__inner">
          <a href="https://pixeloria.fr/" className="nav__logo">
            <Image
              src="/assets/pixeloria-logo.svg"
              alt="Pixeloria"
              width={120}
              height={32}
              priority
            />
          </a>
          <div className="nav__actions">
            <a href="https://pixeloria.fr/#services" className="nav__link">Offres</a>
            <a href="https://pixeloria.fr/#contact" className="nav__link">Contact</a>
            <a href={REFERRAL_URL} className="nav__cta">Devenir parrain →</a>
          </div>
        </div>
      </nav>

      {/* ===================== HERO ===================== */}
      <section className="hero" id="parrainage" aria-labelledby="hero-title">
        <div className="hero__inner">

          {/* Left: content */}
          <div className="hero__content">
            <div className="hero__badge">
              <span className="badge badge--purple">🤝 Programme de parrainage</span>
            </div>

            <h1 className="hero__title" id="hero-title">
              Recommandez Pixeloria et gagnez jusqu&apos;à 100&nbsp;€ + 25&nbsp;€/mois.
            </h1>

            <p className="hero__subtitle">
              Vous connaissez un artisan ou une TPE qui a besoin d&apos;un site web professionnel&nbsp;?
              Partagez votre code de parrainage et recevez automatiquement 100&nbsp;€ quand il lance son site,
              plus 25&nbsp;€ chaque mois s&apos;il s&apos;abonne à la Visibilité locale.
            </p>

            <div className="hero__actions">
              <a href={REFERRAL_URL} className="btn btn--primary btn--large">
                Devenir parrain Pixeloria
              </a>
              <a href="#code-parrainage" className="btn btn--secondary btn--large">
                J&apos;ai un code parrainage
              </a>
            </div>

            {/* Stats bar */}
            <div className="hero__stats">
              <div className="hero__stat">
                <div className="hero__stat-value"><span>100 €</span></div>
                <div className="hero__stat-label">Site Vitrine</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-value"><span>25 €/mois</span></div>
                <div className="hero__stat-label">Visibilité locale</div>
              </div>
            </div>
          </div>

          {/* Right: visual cards */}
          <div className="hero__visual">
            <div className="hero-card">
              <div className="hero-card__top">
                <div className="hero-card__icon">🎯</div>
                <span className="badge badge--green">Immédiat</span>
              </div>
              <div className="hero-card__amount">100 € <span>récompense parrain</span></div>
              <div className="hero-card__label">Site Vitrine · 199 € TTC</div>
              <div className="hero-card__sub">Après paiement du site reçu</div>
            </div>

            <div className="hero-card hero-card--highlight">
              <div className="hero-card__top">
                <div className="hero-card__icon">🚀</div>
                <span className="badge badge--gold">Revenu passif</span>
              </div>
              <div className="hero-card__amount">25 €/mois <span>récompense parrain</span></div>
              <div className="hero-card__label">Visibilité locale · 49 € TTC/mois</div>
              <div className="hero-card__sub">Après 1 mois d&apos;abonnement actif</div>
            </div>
          </div>
        </div>
      </section>

      <div className="stripe-divider"></div>

      {/* ===================== STEPS ===================== */}
      <section className="steps" id="comment" aria-labelledby="steps-title">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-label">Comment ça marche</p>
            <h2 className="section-title" id="steps-title">
              Un parrainage simple, <em>automatique</em> et transparent
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Trois étapes. Aucune gestion manuelle. Tout est géré via Stripe et l&apos;espace affilié.
            </p>
          </div>

          <div className="steps__grid">
            <div className="step">
              <div className="step__icon">🔗</div>
              <div className="step__number">01</div>
              <div className="step__title">Vous partagez votre code</div>
              <p className="step__text">
                Envoyez votre code personnel au format{' '}
                <strong style={{ color: 'var(--purple-light)' }}>PIXELORIA-PRENOM</strong>
                {' '}à un artisan ou TPE de votre réseau. Par SMS, WhatsApp, email ou LinkedIn.
              </p>
            </div>

            <div className="step">
              <div className="step__icon">🛒</div>
              <div className="step__number">02</div>
              <div className="step__title">Votre filleul s&apos;inscrit avec votre code</div>
              <p className="step__text">
                Il utilise votre code au moment de choisir son offre. Si c&apos;est le Site Vitrine (199 €), il paie via Stripe. Si c&apos;est la Visibilité, l&apos;abonnement démarre au mois suivant.
              </p>
            </div>

            <div className="step">
              <div className="step__icon">💰</div>
              <div className="step__number">03</div>
              <div className="step__title">Vous recevez votre récompense</div>
              <p className="step__text">
                Site Vitrine&nbsp;: 100 € après la première commande reçue.
                Visibilité&nbsp;: 25 €/mois après 1 mois d&apos;abonnement actif.
                Cumul possible&nbsp;: 100 € + 25 €/mois si votre filleul prend les deux.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="stripe-divider"></div>

      {/* ===================== REWARDS ===================== */}
      <section className="rewards" id="recompenses" aria-labelledby="rewards-title">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-label">Barème de parrainage</p>
            <h2 className="section-title" id="rewards-title">
              Vos <em>récompenses</em> de parrainage
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Deux offres, deux niveaux de récompense. Chaque parrainage compte.
            </p>
          </div>

          <div className="rewards__grid">

            {/* Site Vitrine */}
            <div className="reward-card">
              <div className="reward-card__stripe"></div>
              <div className="reward-card__top">
                <div>
                  <div className="reward-card__name">Site Vitrine</div>
                  <div className="reward-card__price">Site professionnel · 199 € TTC</div>
                </div>
                <span className="badge badge--purple">Paiement unique</span>
              </div>
              <div className="reward-card__divider"></div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">🎯</span>
                  <span className="reward-card__row-label">Filleul paie</span>
                </div>
                <span className="reward-card__row-value">199 € TTC</span>
              </div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">🏆</span>
                  <span className="reward-card__row-label">Vous gagnez</span>
                </div>
                <span className="reward-card__row-value reward-card__row-value--purple">100 €</span>
              </div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">⚡</span>
                  <span className="reward-card__row-label">ROI du parrainage</span>
                </div>
                <span className="reward-card__row-value reward-card__row-value--green">50 % du prix</span>
              </div>
              <div className="reward-card__trigger">
                <div className="reward-card__trigger-label">Déclenchement</div>
                <div className="reward-card__trigger-text">Immédiatement après la réception du paiement Stripe.</div>
              </div>
              <div className="reward-card__cta">
                <a href={REFERRAL_URL} className="btn btn--secondary">Devenir parrain →</a>
              </div>
            </div>

            {/* Visibilité locale (highlighted) */}
            <div className="reward-card reward-card--highlight">
              <div className="reward-card__stripe"></div>
              <div className="reward-card__top">
                <div>
                  <div className="reward-card__name">Visibilité locale</div>
                  <div className="reward-card__price">Abonnement · 49 € TTC/mois</div>
                </div>
                <span className="badge badge--gold">⭐ Revenu récurrent</span>
              </div>
              <div className="reward-card__divider"></div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">💳</span>
                  <span className="reward-card__row-label">Filleul paie</span>
                </div>
                <span className="reward-card__row-value">49 € TTC/mois</span>
              </div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">🏆</span>
                  <span className="reward-card__row-label">Vous gagnez</span>
                </div>
                <span className="reward-card__row-value" style={{ color: 'var(--gold)', fontSize: '1.1875rem' }}>25 € /mois</span>
              </div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">📊</span>
                  <span className="reward-card__row-label">Potentiel annuel</span>
                </div>
                <span className="reward-card__row-value reward-card__row-value--gold">300 € /an</span>
              </div>
              <div className="reward-card__trigger">
                <div className="reward-card__trigger-label">Déclenchement</div>
                <div className="reward-card__trigger-text">Après 1 mois d&apos;abonnement actif et continu.</div>
              </div>
              <div className="reward-card__cta">
                <a href={REFERRAL_URL} className="btn btn--primary">Devenir parrain →</a>
              </div>
            </div>

          </div>

          {/* Cumul bonus section */}
          <div className="reward-cumul">
            <div className="reward-cumul__inner">
              <div className="reward-cumul__icon">🎊</div>
              <div>
                <h3 className="reward-cumul__title">Cumul possible</h3>
                <p className="reward-cumul__text">
                  Si votre filleul prend <strong>à la fois</strong> le Site Vitrine (199 €) et s&apos;abonne à la Visibilité locale,
                  vous gagnez <strong>100 € immédiat + 25 €/mois continu</strong>.
                  Potentiel : <strong>400 € la première année</strong> pour un seul parrainage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stripe-divider"></div>

      {/* ===================== AUDIENCE ===================== */}
      <section className="audience" id="pour-qui" aria-labelledby="audience-title">
        <div className="container">
          <div className="audience__inner">

            <div>
              <p className="section-label">À qui recommander Pixeloria ?</p>
              <h2 className="section-title" id="audience-title" style={{ marginBottom: '32px' }}>
                Qui pouvez-vous <em>recommander</em>&nbsp;?
              </h2>
              <ul className="audience__list">
                <li className="audience__item"><span className="audience__item-icon">🔨</span> Un artisan du bâtiment</li>
                <li className="audience__item"><span className="audience__item-icon">🏪</span> Un commerçant local</li>
                <li className="audience__item"><span className="audience__item-icon">💼</span> Un indépendant ou freelance</li>
                <li className="audience__item"><span className="audience__item-icon">🏗️</span> Une TPE locale</li>
                <li className="audience__item"><span className="audience__item-icon">🏠</span> Une entreprise avec un site vieillissant</li>
                <li className="audience__item"><span className="audience__item-icon">🔍</span> Une entreprise qui veut plus de visibilité locale</li>
                <li className="audience__item"><span className="audience__item-icon">✨</span> Une entreprise qui n&apos;a pas encore de site web</li>
              </ul>
            </div>

            <div className="audience__visual">
              <div className="audience__visual-title">Un réseau = une source de revenus passifs</div>
              <div className="audience__visual-sub">Chaque recommandation peut générer une récompense automatique.</div>
              <div className="audience__visual-numbers">
                <div className="audience__num">
                  <div className="audience__num-value audience__num-value--purple">100 €</div>
                  <div className="audience__num-label">par Site Vitrine</div>
                </div>
                <div className="audience__num">
                  <div className="audience__num-value audience__num-value--gold">25 €/mois</div>
                  <div className="audience__num-label">par Visibilité locale</div>
                </div>
                <div className="audience__num">
                  <div className="audience__num-value audience__num-value--green">Illimité</div>
                  <div className="audience__num-label">parrainages cumulés</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="stripe-divider"></div>

      {/* ===================== REWARD CHOICE ===================== */}
      <section className="reward-choice" id="choix" aria-labelledby="choice-title">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-label">Votre récompense</p>
            <h2 className="section-title" id="choice-title">
              Cash ou crédit Pixeloria&nbsp;: <em>vous choisissez</em>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Chaque parrain choisit librement la forme de sa récompense dans son espace affilié.
            </p>
          </div>

          <div className="reward-choice__grid">

            <div className="choice-card">
              <div className="choice-card__icon-wrap choice-card__icon-wrap--purple">💵</div>
              <h3 className="choice-card__title">Récompense financière</h3>
              <p className="choice-card__text">
                Recevez votre prime directement selon les modalités disponibles dans l&apos;espace affilié.
                Paiement automatique déclenché dès que les conditions sont validées via Stripe.
              </p>
              <ul className="choice-card__list">
                <li>Paiement automatique, sans intervention de votre part</li>
                <li>Suivi en temps réel dans votre espace parrain</li>
                <li>Aucune gestion manuelle à votre charge</li>
              </ul>
            </div>

            <div className="choice-card choice-card--teal">
              <div className="choice-card__icon-wrap choice-card__icon-wrap--teal">🎟️</div>
              <h3 className="choice-card__title">Crédit Pixeloria</h3>
              <p className="choice-card__text">
                Utilisez votre récompense comme avoir sur une prestation web Pixeloria.
                Idéal si vous êtes déjà client et souhaitez faire évoluer votre site.
              </p>
              <ul className="choice-card__list">
                <li>Nouvelle page ou landing page</li>
                <li>Optimisation SEO, refonte partielle</li>
                <li>Maintenance renforcée ou évolution graphique</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <div className="stripe-divider"></div>

      {/* ===================== CTA DOUBLE ===================== */}
      <section className="cta-section" id="code" aria-labelledby="cta-title">
        <div className="container">
          <div className="cta-section__inner">
            <p className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>
              Rejoindre le programme
            </p>
            <h2 className="section-title cta-section__title" id="cta-title">
              Vous voulez devenir parrain ou<br />utiliser un code&nbsp;?
            </h2>
            <p className="cta-section__sub">
              Deux parcours, une seule page. Choisissez votre situation.
            </p>
            <div className="cta-section__actions">
              <a href={REFERRAL_URL} className="btn btn--primary btn--large">
                🤝 Devenir parrain Pixeloria
              </a>
              <a href="#code-parrainage" className="btn btn--teal btn--large">
                🎟️ J&apos;ai un code parrainage
              </a>
            </div>
            <p style={{ marginTop: '24px', fontSize: '0.8375rem', color: 'var(--text-muted)' }}>
              Codes personnels au format{' '}
              <strong style={{ color: 'var(--purple-light)' }}>PIXELORIA-PRENOM</strong>
              {' '}— chaque parrain dispose du sien à partager librement.
            </p>
          </div>
        </div>
      </section>

      <div className="stripe-divider"></div>

      {/* ===================== CODE PARRAINAGE FORM ===================== */}
      <section className="conditions" aria-labelledby="rcs-heading">
        <div className="container container--narrow">
          <div className="section-header section-header--center">
            <p className="section-label">Filleul</p>
            <h2 className="section-title" id="rcs-heading">
              Utiliser un code <em>parrainage</em>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Sélectionnez votre offre et bénéficiez automatiquement de votre remise filleul.
            </p>
          </div>
          <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
            <ReferralCodeSection />
          </Suspense>
        </div>
      </section>

      <div className="stripe-divider"></div>

      {/* ===================== DEVENIR PARRAIN FALLBACK ===================== */}
      <section className="become-referrer" id="devenir-parrain" aria-labelledby="br-title">
        <div className="container">
          <div className="become-referrer__box">
            <div className="become-referrer__emoji">🤝</div>
            <h2 className="become-referrer__title" id="br-title">
              Devenez parrain Pixeloria
            </h2>
            <p className="become-referrer__text">
              L&apos;espace parrain Pixeloria sera connecté à notre outil d&apos;affiliation prochainement.
              En attendant, contactez-nous pour recevoir votre code personnalisé
              au format <strong style={{ color: 'var(--purple-light)' }}>PIXELORIA-PRENOM</strong>.
            </p>
            <div className="become-referrer__cta">
              <a
                href="mailto:contact@pixeloria.fr?subject=Devenir%20parrain%20Pixeloria"
                className="btn btn--primary btn--large"
              >
                ✉️ Demander mon code parrainage
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="stripe-divider"></div>

      {/* ===================== CONDITIONS ===================== */}
      <section className="conditions" id="conditions" aria-labelledby="conditions-title">
        <div className="container container--narrow">
          <div className="conditions__box">
            <h2 className="conditions__title" id="conditions-title">Conditions du programme</h2>
            <ul className="conditions__list">
              <li className="conditions__item">
                <span className="conditions__item-icon">✦</span>
                <p>La récompense est réservée aux parrainages de <strong>nouveaux clients Pixeloria</strong> uniquement.</p>
              </li>
              <li className="conditions__item">
                <span className="conditions__item-icon">✦</span>
                <p>Le code parrainage doit être utilisé <strong>avant la validation du devis ou du paiement Stripe</strong>.</p>
              </li>
              <li className="conditions__item">
                <span className="conditions__item-icon">✦</span>
                <p>Pour le Site Vitrine, la récompense de <strong>100 €</strong> est déclenchée après <strong>paiement effectif reçu via Stripe</strong>.</p>
              </li>
              <li className="conditions__item">
                <span className="conditions__item-icon">✦</span>
                <p>Pour la Visibilité locale, la récompense de <strong>25 €/mois</strong> est déclenchée après <strong>1 mois d&apos;abonnement actif</strong> et continue tant que l&apos;abonnement est actif.</p>
              </li>
              <li className="conditions__item">
                <span className="conditions__item-icon">✦</span>
                <p>En cas d&apos;annulation, de remboursement, de litige ou de paiement échoué, la récompense peut être <strong>annulée ou ajustée</strong>.</p>
              </li>
              <li className="conditions__item">
                <span className="conditions__item-icon">✦</span>
                <p>Le parrain peut choisir entre une <strong>récompense financière</strong> ou un <strong>crédit Pixeloria</strong>.</p>
              </li>
              <li className="conditions__item">
                <span className="conditions__item-icon">✦</span>
                <p>Pixeloria se réserve le droit de refuser tout parrainage <strong>abusif, frauduleux ou non conforme</strong>.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="stripe-divider"></div>

      {/* ===================== FAQ ===================== */}
      <section className="faq" id="faq" aria-labelledby="faq-title">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-label">Questions fréquentes</p>
            <h2 className="section-title" id="faq-title">Ce que vous voulez savoir</h2>
          </div>
          <ParrainageFaq />
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="footer">
        <div className="footer__inner">
          <a href="https://pixeloria.fr/" className="footer__logo">
            <Image
              src="/assets/pixeloria-logo.svg"
              alt="Pixeloria"
              width={100}
              height={28}
            />
          </a>
          <div className="footer__links">
            <a href="https://pixeloria.fr/#services" className="footer__link">Offres</a>
            <a href="https://pixeloria.fr/#portfolio" className="footer__link">Portfolio</a>
            <a href="https://pixeloria.fr/#contact" className="footer__link">Contact</a>
            <a href="https://pixeloria.fr/mentions-legales" className="footer__link">Mentions légales</a>
            <a href="https://pixeloria.fr/cgv" className="footer__link">CGV</a>
            <a href="https://pixeloria.fr/politique-confidentialite" className="footer__link">Confidentialité</a>
          </div>
          <p className="footer__copy">© 2026 Pixeloria. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

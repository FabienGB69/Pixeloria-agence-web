import type { Metadata } from 'next';
import Image from 'next/image';
import ParrainageFaq from '@/components/parrainage/ParrainageFaq';
import ParrainageReveal from '@/components/parrainage/ParrainageReveal';
import ReferralCodeSection from '@/components/parrainage/ReferralCodeSection';

export const metadata: Metadata = {
  title: "Programme de parrainage — Gagnez jusqu'à 150 € | Pixeloria",
  description:
    "Recommandez Pixeloria à un artisan, une TPE ou une PME et gagnez jusqu'à 150 €. Programme de parrainage automatisé, transparent et sans gestion manuelle.",
  openGraph: {
    title: "Programme de parrainage Pixeloria — Gagnez jusqu'à 150 €",
    description:
      "Partagez votre code parrainage et recevez une récompense quand votre filleul devient client Pixeloria.",
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
              Recommandez Pixeloria et gagnez jusqu&apos;à 150 €.
            </h1>

            <p className="hero__subtitle">
              Vous connaissez un artisan, une TPE ou une PME qui a besoin d&apos;un site web professionnel&nbsp;?
              Partagez votre lien de parrainage et recevez une récompense dès que le projet est validé.
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
                <div className="hero__stat-value"><span>50 €</span></div>
                <div className="hero__stat-label">Site Artisan</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-value"><span>30 €/mois</span></div>
                <div className="hero__stat-label">Option Visibilité</div>
              </div>
            </div>
          </div>

          {/* Right: visual cards */}
          <div className="hero__visual">
            <div className="hero-card">
              <div className="hero-card__top">
                <div className="hero-card__icon">🎯</div>
                <span className="badge badge--green">Automatique</span>
              </div>
              <div className="hero-card__amount">50 € <span>récompense parrain</span></div>
              <div className="hero-card__label">Site Artisan · 199 € TTC</div>
              <div className="hero-card__sub">Déclenché après paiement validé</div>
            </div>

            <div className="hero-card hero-card--highlight">
              <div className="hero-card__top">
                <div className="hero-card__icon">🚀</div>
                <span className="badge badge--gold">Meilleure récompense</span>
              </div>
              <div className="hero-card__amount">30 €/mois <span>récompense parrain</span></div>
              <div className="hero-card__label">Option Visibilité · 89 € TTC/mois</div>
              <div className="hero-card__sub">Déclenché après 3 mois d&apos;abonnement actifs</div>
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
                Envoyez votre code personnel (ex&nbsp;:{' '}
                <strong style={{ color: 'var(--purple-light)' }}>PIXELORIA-JEAN</strong>
                ) ou votre lien d&apos;affiliation à une entreprise de votre réseau. Par SMS, WhatsApp, email ou LinkedIn.
              </p>
            </div>

            <div className="step">
              <div className="step__icon">🛒</div>
              <div className="step__number">02</div>
              <div className="step__title">Votre filleul choisit son offre</div>
              <p className="step__text">
                Votre filleul bénéficie automatiquement de son avantage de bienvenue. La remise est appliquée dès la validation du paiement via Stripe.
              </p>
            </div>

            <div className="step">
              <div className="step__icon">💰</div>
              <div className="step__number">03</div>
              <div className="step__title">Vous recevez votre récompense</div>
              <p className="step__text">
                Dès que les conditions sont validées, votre récompense est déclenchée automatiquement dans votre espace affilié. Argent ou crédit Pixeloria&nbsp;: vous choisissez.
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

            {/* Site Artisan */}
            <div className="reward-card">
              <div className="reward-card__stripe"></div>
              <div className="reward-card__top">
                <div>
                  <div className="reward-card__name">Site Artisan</div>
                  <div className="reward-card__price">Création ou refonte · 199 € TTC</div>
                </div>
                <span className="badge badge--purple">Paiement unique</span>
              </div>
              <div className="reward-card__divider"></div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">🎁</span>
                  <span className="reward-card__row-label">Avantage filleul</span>
                </div>
                <span className="reward-card__row-value reward-card__row-value--green">−20 € sur le site</span>
              </div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">💵</span>
                  <span className="reward-card__row-label">Prix avec parrainage</span>
                </div>
                <span className="reward-card__row-value">179 € TTC</span>
              </div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">🏆</span>
                  <span className="reward-card__row-label">Récompense parrain</span>
                </div>
                <span className="reward-card__row-value reward-card__row-value--purple">50 €</span>
              </div>
              <div className="reward-card__trigger">
                <div className="reward-card__trigger-label">Déclenchement</div>
                <div className="reward-card__trigger-text">Après paiement réussi du Site Artisan.</div>
              </div>
              <div className="reward-card__cta">
                <a href={REFERRAL_URL} className="btn btn--secondary">Devenir parrain →</a>
              </div>
            </div>

            {/* Option Visibilité (highlighted) */}
            <div className="reward-card reward-card--highlight">
              <div className="reward-card__stripe"></div>
              <div className="reward-card__top">
                <div>
                  <div className="reward-card__name">Option Visibilité</div>
                  <div className="reward-card__price">Visibilité locale · 89 € TTC/mois</div>
                </div>
                <span className="badge badge--gold">⭐ Meilleure récompense</span>
              </div>
              <div className="reward-card__divider"></div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">🎁</span>
                  <span className="reward-card__row-label">Avantage filleul</span>
                </div>
                <span className="reward-card__row-value reward-card__row-value--green">1er mois à 59 €</span>
              </div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">💵</span>
                  <span className="reward-card__row-label">Puis mensualité normale</span>
                </div>
                <span className="reward-card__row-value">89 € TTC/mois</span>
              </div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">🏆</span>
                  <span className="reward-card__row-label">Récompense parrain</span>
                </div>
                <span className="reward-card__row-value" style={{ color: 'var(--gold)', fontSize: '1.1875rem' }}>30 €/mois</span>
              </div>
              <div className="reward-card__trigger">
                <div className="reward-card__trigger-label">Déclenchement</div>
                <div className="reward-card__trigger-text">Après 3 mois d&apos;abonnement actifs.</div>
              </div>
              <div className="reward-card__cta">
                <a href={REFERRAL_URL} className="btn btn--primary">Devenir parrain →</a>
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
                <li className="audience__item"><span className="audience__item-icon">🏗️</span> Une TPE ou PME locale</li>
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
                  <div className="audience__num-value audience__num-value--purple">50 €</div>
                  <div className="audience__num-label">par Site Artisan</div>
                </div>
                <div className="audience__num">
                  <div className="audience__num-value audience__num-value--gold">30 €/mois</div>
                  <div className="audience__num-label">par Option Visibilité</div>
                </div>
                <div className="audience__num">
                  <div className="audience__num-value audience__num-value--green">∞</div>
                  <div className="audience__num-label">parrainages possibles</div>
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
          <ReferralCodeSection />
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
                <p>Pour le Site Artisan, la récompense est déclenchée après <strong>paiement effectif de la prestation</strong>.</p>
              </li>
              <li className="conditions__item">
                <span className="conditions__item-icon">✦</span>
                <p>Pour les offres en abonnement, la récompense est déclenchée après <strong>3 paiements mensuels réussis</strong> et un abonnement toujours actif.</p>
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

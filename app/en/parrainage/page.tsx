import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import ParrainageFaqEn from '@/components/parrainage/ParrainageFaqEn';
import ParrainageReveal from '@/components/parrainage/ParrainageReveal';

const ReferralCodeSection = dynamic(
  () => import('@/components/parrainage/ReferralCodeSection'),
  { ssr: false },
);

export const metadata: Metadata = {
  title: "Referral Program — Earn up to €100 + €25/month | Pixeloria",
  description:
    "Recommend Pixeloria to a craftsperson or SME and earn up to €100 bonus, plus €25/month if your referral subscribes to Local Visibility. Completely transparent and automated program.",
  openGraph: {
    title: "Pixeloria Referral Program — Earn up to €100 + €25/month",
    description:
      "Share your referral code. Earn €100 when your referral launches a site, plus €25/month if they subscribe to Local Visibility.",
    url: 'https://pixeloria.fr/en/parrainage',
  },
  alternates: { canonical: 'https://pixeloria.fr/en/parrainage' },
};

const _referralRaw = process.env.NEXT_PUBLIC_REFERRAL_URL;
const REFERRAL_URL =
  _referralRaw && !_referralRaw.includes('URL_') ? _referralRaw : '#become-sponsor';

export default function ParrainagePageEn() {
  return (
    <div className="prrn-page">
      <ParrainageReveal />

      {/* ===================== NAV ===================== */}
      <nav className="nav" role="navigation" aria-label="Main Navigation">
        <div className="nav__inner">
          <a href="https://pixeloria.fr/en" className="nav__logo">
            <Image
              src="/assets/pixeloria-logo.svg"
              alt="Pixeloria"
              width={120}
              height={32}
              priority
            />
          </a>
          <div className="nav__actions">
            <a href="https://pixeloria.fr/en/pricing" className="nav__link">Pricing</a>
            <a href="https://pixeloria.fr/en#contact" className="nav__link">Contact</a>
            <a href={REFERRAL_URL} className="nav__cta">Become a Sponsor →</a>
          </div>
        </div>
      </nav>

      {/* ===================== HERO ===================== */}
      <section className="hero" id="parrainage" aria-labelledby="hero-title">
        <div className="hero__inner">

          {/* Left: content */}
          <div className="hero__content">
            <div className="hero__badge">
              <span className="badge badge--purple">🤝 Referral Program</span>
            </div>

            <h1 className="hero__title" id="hero-title">
              Recommend Pixeloria and earn up to €100&nbsp;+ €25&nbsp;/month.
            </h1>

            <p className="hero__subtitle">
              Do you know a craftsperson or SME who needs a professional website?
              Share your referral code and automatically receive €100 when they launch their site,
              plus €25 each month if they subscribe to Local Visibility.
            </p>

            <div className="hero__actions">
              <a href={REFERRAL_URL} className="btn btn--primary btn--large">
                Become a Pixeloria Sponsor
              </a>
              <a href="#referral-code" className="btn btn--secondary btn--large">
                I have a referral code
              </a>
            </div>

            {/* Stats bar */}
            <div className="hero__stats">
              <div className="hero__stat">
                <div className="hero__stat-value"><span>€100</span></div>
                <div className="hero__stat-label">Site Showcase</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-value"><span>€25/month</span></div>
                <div className="hero__stat-label">Local Visibility</div>
              </div>
            </div>
          </div>

          {/* Right: visual cards */}
          <div className="hero__visual">
            <div className="hero-card">
              <div className="hero-card__top">
                <div className="hero-card__icon">🎯</div>
                <span className="badge badge--green">Immediate</span>
              </div>
              <div className="hero-card__amount">€100 <span>sponsor reward</span></div>
              <div className="hero-card__label">Site Showcase · €199 inc. VAT</div>
              <div className="hero-card__sub">After payment received</div>
            </div>

            <div className="hero-card hero-card--highlight">
              <div className="hero-card__top">
                <div className="hero-card__icon">🚀</div>
                <span className="badge badge--gold">Passive Income</span>
              </div>
              <div className="hero-card__amount">€25/month <span>sponsor reward</span></div>
              <div className="hero-card__label">Local Visibility · €49 inc. VAT/month</div>
              <div className="hero-card__sub">After 1 month of active subscription</div>
            </div>
          </div>
        </div>
      </section>

      <div className="stripe-divider"></div>

      {/* ===================== STEPS ===================== */}
      <section className="steps" id="how-it-works" aria-labelledby="steps-title">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-label">How it works</p>
            <h2 className="section-title" id="steps-title">
              Simple sponsorship, <em>automatic</em> and transparent
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Three steps. No manual management. Everything is handled via Stripe and your affiliate space.
            </p>
          </div>

          <div className="steps__grid">
            <div className="step">
              <div className="step__icon">🔗</div>
              <div className="step__number">01</div>
              <div className="step__title">You share your code</div>
              <p className="step__text">
                Send your personal code in the format{' '}
                <strong style={{ color: 'var(--purple-light)' }}>PIXELORIA-NAME</strong>
                {' '}to a craftsperson or SME in your network. Via SMS, WhatsApp, email or LinkedIn.
              </p>
            </div>

            <div className="step">
              <div className="step__icon">🛒</div>
              <div className="step__number">02</div>
              <div className="step__title">Your referral signs up with your code</div>
              <p className="step__text">
                They use your code when choosing their offer. If it&apos;s the Site Showcase (€199), they pay via Stripe. If it&apos;s Local Visibility, the subscription starts the following month.
              </p>
            </div>

            <div className="step">
              <div className="step__icon">💰</div>
              <div className="step__number">03</div>
              <div className="step__title">You receive your reward</div>
              <p className="step__text">
                Site Showcase: €100 after the first payment received.
                Local Visibility: €25/month after 1 month of active subscription.
                Cumulative: €100 + €25/month if your referral takes both.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="stripe-divider"></div>

      {/* ===================== REWARDS ===================== */}
      <section className="rewards" id="rewards" aria-labelledby="rewards-title">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-label">Referral Scale</p>
            <h2 className="section-title" id="rewards-title">
              Your referral <em>rewards</em>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Two offers, two reward levels. Every referral counts.
            </p>
          </div>

          <div className="rewards__grid">

            {/* Site Showcase */}
            <div className="reward-card">
              <div className="reward-card__stripe"></div>
              <div className="reward-card__top">
                <div>
                  <div className="reward-card__name">Site Showcase</div>
                  <div className="reward-card__price">Professional site · €199 inc. VAT</div>
                </div>
                <span className="badge badge--purple">One-time payment</span>
              </div>
              <div className="reward-card__divider"></div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">🎯</span>
                  <span className="reward-card__row-label">Referral pays</span>
                </div>
                <span className="reward-card__row-value">€199 inc. VAT</span>
              </div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">🏆</span>
                  <span className="reward-card__row-label">You earn</span>
                </div>
                <span className="reward-card__row-value reward-card__row-value--purple">€100</span>
              </div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">⚡</span>
                  <span className="reward-card__row-label">Sponsorship ROI</span>
                </div>
                <span className="reward-card__row-value reward-card__row-value--green">50% of price</span>
              </div>
              <div className="reward-card__trigger">
                <div className="reward-card__trigger-label">Triggers</div>
                <div className="reward-card__trigger-text">Immediately after Stripe payment is received.</div>
              </div>
              <div className="reward-card__cta">
                <a href={REFERRAL_URL} className="btn btn--secondary">Become a Sponsor →</a>
              </div>
            </div>

            {/* Local Visibility (highlighted) */}
            <div className="reward-card reward-card--highlight">
              <div className="reward-card__stripe"></div>
              <div className="reward-card__top">
                <div>
                  <div className="reward-card__name">Local Visibility</div>
                  <div className="reward-card__price">Subscription · €49 inc. VAT/month</div>
                </div>
                <span className="badge badge--gold">⭐ Recurring Income</span>
              </div>
              <div className="reward-card__divider"></div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">💳</span>
                  <span className="reward-card__row-label">Referral pays</span>
                </div>
                <span className="reward-card__row-value">€49 inc. VAT/month</span>
              </div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">🏆</span>
                  <span className="reward-card__row-label">You earn</span>
                </div>
                <span className="reward-card__row-value" style={{ color: 'var(--gold)', fontSize: '1.1875rem' }}>€25 /month</span>
              </div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">📊</span>
                  <span className="reward-card__row-label">Annual potential</span>
                </div>
                <span className="reward-card__row-value reward-card__row-value--gold">€300 /year</span>
              </div>
              <div className="reward-card__trigger">
                <div className="reward-card__trigger-label">Triggers</div>
                <div className="reward-card__trigger-text">After 1 month of active and continuous subscription.</div>
              </div>
              <div className="reward-card__cta">
                <a href={REFERRAL_URL} className="btn btn--primary">Become a Sponsor →</a>
              </div>
            </div>

          </div>

          {/* Cumul bonus section */}
          <div className="reward-cumul">
            <div className="reward-cumul__inner">
              <div className="reward-cumul__icon">🎊</div>
              <div>
                <h3 className="reward-cumul__title">Cumulative Potential</h3>
                <p className="reward-cumul__text">
                  If your referral takes <strong>both</strong> Site Showcase (€199) and subscribes to Local Visibility,
                  you earn <strong>€100 immediate + €25/month recurring</strong>.
                  Potential: <strong>€400 in the first year</strong> from a single referral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stripe-divider"></div>

      {/* ===================== AUDIENCE ===================== */}
      <section className="audience" id="who-to-refer" aria-labelledby="audience-title">
        <div className="container">
          <div className="audience__inner">

            <div>
              <p className="section-label">Who to recommend Pixeloria to?</p>
              <h2 className="section-title" id="audience-title" style={{ marginBottom: '32px' }}>
                Who can you <em>recommend</em>?
              </h2>
              <ul className="audience__list">
                <li className="audience__item"><span className="audience__item-icon">🔨</span> A construction tradesperson</li>
                <li className="audience__item"><span className="audience__item-icon">🏪</span> A local shopkeeper</li>
                <li className="audience__item"><span className="audience__item-icon">💼</span> A freelancer or independent</li>
                <li className="audience__item"><span className="audience__item-icon">🏗️</span> A local SME</li>
                <li className="audience__item"><span className="audience__item-icon">🏠</span> A company with an outdated site</li>
                <li className="audience__item"><span className="audience__item-icon">🔍</span> A company wanting better local visibility</li>
                <li className="audience__item"><span className="audience__item-icon">✨</span> A company without a website yet</li>
              </ul>
            </div>

            <div className="audience__visual">
              <div className="audience__visual-title">Your network = a source of passive income</div>
              <div className="audience__visual-sub">Each recommendation can generate an automatic reward.</div>
              <div className="audience__visual-numbers">
                <div className="audience__num">
                  <div className="audience__num-value audience__num-value--purple">€100</div>
                  <div className="audience__num-label">per Site Showcase</div>
                </div>
                <div className="audience__num">
                  <div className="audience__num-value audience__num-value--gold">€25/month</div>
                  <div className="audience__num-label">per Local Visibility</div>
                </div>
                <div className="audience__num">
                  <div className="audience__num-value audience__num-value--green">Unlimited</div>
                  <div className="audience__num-label">cumulative referrals</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="stripe-divider"></div>

      {/* ===================== REWARD CHOICE ===================== */}
      <section className="reward-choice" id="reward-choice" aria-labelledby="choice-title">
        <div className="container">
          <div className="section-header section-header--center">
            <p className="section-label">Your Reward</p>
            <h2 className="section-title" id="choice-title">
              Cash or Pixeloria Credit: <em>you choose</em>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Each sponsor freely chooses the form of their reward in their affiliate space.
            </p>
          </div>

          <div className="reward-choice__grid">

            <div className="choice-card">
              <div className="choice-card__icon-wrap choice-card__icon-wrap--purple">💵</div>
              <h3 className="choice-card__title">Financial Reward</h3>
              <p className="choice-card__text">
                Receive your bonus directly according to the available options in your affiliate space.
                Automatic payment triggered as soon as conditions are validated via Stripe.
              </p>
              <ul className="choice-card__list">
                <li>Automatic payment, no action required from you</li>
                <li>Real-time tracking in your sponsor space</li>
                <li>No manual management on your part</li>
              </ul>
            </div>

            <div className="choice-card choice-card--teal">
              <div className="choice-card__icon-wrap choice-card__icon-wrap--teal">🎟️</div>
              <h3 className="choice-card__title">Pixeloria Credit</h3>
              <p className="choice-card__text">
                Use your reward as credit for a Pixeloria web service.
                Perfect if you&apos;re already a customer and want to evolve your site.
              </p>
              <ul className="choice-card__list">
                <li>New page or landing page</li>
                <li>SEO optimization, partial redesign</li>
                <li>Enhanced maintenance or visual upgrade</li>
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
              Join the program
            </p>
            <h2 className="section-title cta-section__title" id="cta-title">
              Want to become a sponsor or<br />use a referral code?
            </h2>
            <p className="cta-section__sub">
              Two paths, one page. Choose your situation.
            </p>
            <div className="cta-section__actions">
              <a href={REFERRAL_URL} className="btn btn--primary btn--large">
                🤝 Become a Pixeloria Sponsor
              </a>
              <a href="#referral-code" className="btn btn--teal btn--large">
                🎟️ I have a referral code
              </a>
            </div>
            <p style={{ marginTop: '24px', fontSize: '0.8375rem', color: 'var(--text-muted)' }}>
              Personal codes in format{' '}
              <strong style={{ color: 'var(--purple-light)' }}>PIXELORIA-NAME</strong>
              {' — each sponsor has one to share freely.'}
            </p>
          </div>
        </div>
      </section>

      <div className="stripe-divider"></div>

      {/* ===================== REFERRAL CODE FORM ===================== */}
      <section className="conditions" aria-labelledby="rcs-heading">
        <div className="container container--narrow">
          <div className="section-header section-header--center">
            <p className="section-label">Referral</p>
            <h2 className="section-title" id="rcs-heading">
              Use a <em>referral</em> code
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Select your offer and automatically benefit from your referral discount.
            </p>
          </div>
          <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
            <ReferralCodeSection locale="en" />
          </Suspense>
        </div>
      </section>

      <div className="stripe-divider"></div>

      {/* ===================== BECOME SPONSOR FALLBACK ===================== */}
      <section className="become-referrer" id="become-sponsor" aria-labelledby="br-title">
        <div className="container">
          <div className="become-referrer__box">
            <div className="become-referrer__emoji">🤝</div>
            <h2 className="become-referrer__title" id="br-title">
              Become a Pixeloria Sponsor
            </h2>
            <p className="become-referrer__text">
              The Pixeloria sponsor space will be connected to our affiliate tool soon.
              In the meantime, contact us to receive your personalized code
              in the format <strong style={{ color: 'var(--purple-light)' }}>PIXELORIA-NAME</strong>.
            </p>
            <div className="become-referrer__cta">
              <a
                href="mailto:contact@pixeloria.fr?subject=Become%20Pixeloria%20Sponsor"
                className="btn btn--primary btn--large"
              >
                ✉️ Request my referral code
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
            <h2 className="conditions__title" id="conditions-title">Program Terms</h2>
            <ul className="conditions__list">
              <li className="conditions__item">
                <span className="conditions__item-icon">✦</span>
                <p>The reward is reserved for sponsorships of <strong>new Pixeloria customers</strong> only.</p>
              </li>
              <li className="conditions__item">
                <span className="conditions__item-icon">✦</span>
                <p>The referral code must be used <strong>before validation of the quote or Stripe payment</strong>.</p>
              </li>
              <li className="conditions__item">
                <span className="conditions__item-icon">✦</span>
                <p>For Site Showcase, the <strong>€100</strong> reward is triggered after <strong>actual payment received via Stripe</strong>.</p>
              </li>
              <li className="conditions__item">
                <span className="conditions__item-icon">✦</span>
                <p>For Local Visibility, the <strong>€25/month</strong> reward is triggered after <strong>1 month of active subscription</strong> and continues as long as the subscription is active.</p>
              </li>
              <li className="conditions__item">
                <span className="conditions__item-icon">✦</span>
                <p>In case of cancellation, refund, dispute or failed payment, the reward may be <strong>cancelled or adjusted</strong>.</p>
              </li>
              <li className="conditions__item">
                <span className="conditions__item-icon">✦</span>
                <p>The sponsor can choose between a <strong>financial reward</strong> or a <strong>Pixeloria credit</strong>.</p>
              </li>
              <li className="conditions__item">
                <span className="conditions__item-icon">✦</span>
                <p>Pixeloria reserves the right to refuse any <strong>abusive, fraudulent or non-compliant</strong> sponsorship.</p>
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
            <p className="section-label">Frequently Asked Questions</p>
            <h2 className="section-title" id="faq-title">What you want to know</h2>
          </div>
          <ParrainageFaqEn />
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="footer">
        <div className="footer__inner">
          <a href="https://pixeloria.fr/en" className="footer__logo">
            <Image
              src="/assets/pixeloria-logo.svg"
              alt="Pixeloria"
              width={100}
              height={28}
            />
          </a>
          <div className="footer__links">
            <a href="https://pixeloria.fr/en/pricing" className="footer__link">Pricing</a>
            <a href="https://pixeloria.fr/en/reviews" className="footer__link">Reviews</a>
            <a href="https://pixeloria.fr/en#contact" className="footer__link">Contact</a>
            <a href="https://pixeloria.fr/en/legal-notice" className="footer__link">Legal Notice</a>
            <a href="https://pixeloria.fr/en/terms-of-use" className="footer__link">Terms</a>
            <a href="https://pixeloria.fr/en/privacy-policy" className="footer__link">Privacy</a>
          </div>
          <p className="footer__copy">© 2026 Pixeloria. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

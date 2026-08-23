import type { Metadata } from 'next';
import Image from 'next/image';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { hreflangLanguages } from '@/lib/hreflang';
import { OFFERS_US } from '@/lib/pricing-us';
import { REFERRAL_REWARDS_US } from '@/lib/referral-rewards-us';
import ParrainageFaqEn from '@/components/parrainage/ParrainageFaqEn';
import ParrainageReveal from '@/components/parrainage/ParrainageReveal';

const ReferralLeadFormEn = dynamic(
  () => import('@/components/parrainage/ReferralLeadFormEn'),
  { ssr: false },
);

const rewardStarter = REFERRAL_REWARDS_US.starter;
const rewardGrowth = REFERRAL_REWARDS_US.growth;
const rewardCare = REFERRAL_REWARDS_US.care;
const bestCaseFirstYear = rewardGrowth + rewardCare * 12;

export const metadata: Metadata = {
  title: `Referral Program — Earn up to $${rewardGrowth} per referral | Pixeloria`,
  description:
    `Refer a contractor or local business to Pixeloria and earn up to $${rewardGrowth} once their project is signed — plus $${rewardCare}/month if they add Website Care. Simple, transparent, no automatic checkout required.`,
  openGraph: {
    title: `Pixeloria Referral Program — Earn up to $${rewardGrowth} per referral`,
    description:
      `Share your referral code. Earn up to $${rewardGrowth} when your referral signs up, plus $${rewardCare}/month if they add Website Care & Local Visibility.`,
    url: 'https://pixeloria.fr/en/parrainage',
  },
  alternates: { canonical: 'https://pixeloria.fr/en/parrainage', languages: hreflangLanguages('/en/parrainage') },
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
              Refer a contractor and earn up to {`$${rewardGrowth}`}&nbsp;+&nbsp;{`$${rewardCare}`}/month.
            </h1>

            <p className="hero__subtitle">
              Do you know a roofer, plumber, electrician or local business owner who needs a
              professional website? Share your referral code — once their project is signed, you
              earn a reward based on the package they choose, plus {`$${rewardCare}`} each month if
              they add Website Care &amp; Local Visibility.
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
                <div className="hero__stat-value"><span>{`$${rewardStarter}`}</span></div>
                <div className="hero__stat-label">{OFFERS_US.starter.title}</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-value"><span>{`$${rewardGrowth}`}</span></div>
                <div className="hero__stat-label">{OFFERS_US.growth.title}</div>
              </div>
              <div className="hero__stat">
                <div className="hero__stat-value"><span>{`$${rewardCare}/month`}</span></div>
                <div className="hero__stat-label">Website Care</div>
              </div>
            </div>
          </div>

          {/* Right: visual cards */}
          <div className="hero__visual">
            <div className="hero-card hero-card--highlight">
              <div className="hero-card__top">
                <div className="hero-card__icon">🎯</div>
                <span className="badge badge--green">Highest one-time reward</span>
              </div>
              <div className="hero-card__amount">{`$${rewardGrowth}`} <span>sponsor reward</span></div>
              <div className="hero-card__label">{OFFERS_US.growth.title} · {OFFERS_US.growth.price}</div>
              <div className="hero-card__sub">Once the project is signed and confirmed</div>
            </div>

            <div className="hero-card">
              <div className="hero-card__top">
                <div className="hero-card__icon">🚀</div>
                <span className="badge badge--gold">Passive Income</span>
              </div>
              <div className="hero-card__amount">{`$${rewardCare}/month`} <span>sponsor reward</span></div>
              <div className="hero-card__label">Website Care · {OFFERS_US.care.price}/month</div>
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
              Simple sponsorship, <em>transparent</em> rewards
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Three steps. No self-serve checkout on the US catalog yet — we confirm and pay out
              your reward manually once your referral&rsquo;s project is signed.
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
                {' '}to a contractor or local business in your network. Via text, email or LinkedIn.
              </p>
            </div>

            <div className="step">
              <div className="step__icon">🛒</div>
              <div className="step__number">02</div>
              <div className="step__title">Your referral submits their request</div>
              <p className="step__text">
                They enter your code and pick the package they&rsquo;re interested in
                ({OFFERS_US.starter.title}, {OFFERS_US.growth.title}, or Website Care). We follow up
                directly with them to finalize the project.
              </p>
            </div>

            <div className="step">
              <div className="step__icon">💰</div>
              <div className="step__number">03</div>
              <div className="step__title">You receive your reward</div>
              <p className="step__text">
                Once their project is signed, you earn {`$${rewardStarter}`}–{`$${rewardGrowth}`} depending
                on the package, plus {`$${rewardCare}`}/month if they add Website Care.
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
              Three packages, three reward levels. Every referral counts.
            </p>
          </div>

          <div className="rewards__grid">

            {/* Starter Website */}
            <div className="reward-card">
              <div className="reward-card__stripe"></div>
              <div className="reward-card__top">
                <div>
                  <div className="reward-card__name">{OFFERS_US.starter.title}</div>
                  <div className="reward-card__price">Professional site · {OFFERS_US.starter.price}</div>
                </div>
                <span className="badge badge--purple">One-time</span>
              </div>
              <div className="reward-card__divider"></div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">🎯</span>
                  <span className="reward-card__row-label">Referral pays</span>
                </div>
                <span className="reward-card__row-value">{OFFERS_US.starter.price}</span>
              </div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">🏆</span>
                  <span className="reward-card__row-label">You earn</span>
                </div>
                <span className="reward-card__row-value reward-card__row-value--purple">{`$${rewardStarter}`}</span>
              </div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">⚡</span>
                  <span className="reward-card__row-label">Sponsorship value</span>
                </div>
                <span className="reward-card__row-value reward-card__row-value--green">~50% of price</span>
              </div>
              <div className="reward-card__trigger">
                <div className="reward-card__trigger-label">Triggers</div>
                <div className="reward-card__trigger-text">Once the project is signed and confirmed.</div>
              </div>
              <div className="reward-card__cta">
                <a href={REFERRAL_URL} className="btn btn--secondary">Become a Sponsor →</a>
              </div>
            </div>

            {/* Growth Website (highlighted) */}
            <div className="reward-card reward-card--highlight">
              <div className="reward-card__stripe"></div>
              <div className="reward-card__top">
                <div>
                  <div className="reward-card__name">{OFFERS_US.growth.title}</div>
                  <div className="reward-card__price">Professional site · {OFFERS_US.growth.price}</div>
                </div>
                <span className="badge badge--gold">⭐ Highest reward</span>
              </div>
              <div className="reward-card__divider"></div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">🎯</span>
                  <span className="reward-card__row-label">Referral pays</span>
                </div>
                <span className="reward-card__row-value">{OFFERS_US.growth.price}</span>
              </div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">🏆</span>
                  <span className="reward-card__row-label">You earn</span>
                </div>
                <span className="reward-card__row-value" style={{ color: 'var(--gold)', fontSize: '1.1875rem' }}>{`$${rewardGrowth}`}</span>
              </div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">⚡</span>
                  <span className="reward-card__row-label">Sponsorship value</span>
                </div>
                <span className="reward-card__row-value reward-card__row-value--gold">~50% of price</span>
              </div>
              <div className="reward-card__trigger">
                <div className="reward-card__trigger-label">Triggers</div>
                <div className="reward-card__trigger-text">Once the project is signed and confirmed.</div>
              </div>
              <div className="reward-card__cta">
                <a href={REFERRAL_URL} className="btn btn--primary">Become a Sponsor →</a>
              </div>
            </div>

            {/* Website Care (recurring) */}
            <div className="reward-card">
              <div className="reward-card__stripe"></div>
              <div className="reward-card__top">
                <div>
                  <div className="reward-card__name">Website Care</div>
                  <div className="reward-card__price">Subscription · {OFFERS_US.care.price}/month</div>
                </div>
                <span className="badge badge--purple">Recurring</span>
              </div>
              <div className="reward-card__divider"></div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">💳</span>
                  <span className="reward-card__row-label">Referral pays</span>
                </div>
                <span className="reward-card__row-value">{`$${OFFERS_US.care.amount}/month`}</span>
              </div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">🏆</span>
                  <span className="reward-card__row-label">You earn</span>
                </div>
                <span className="reward-card__row-value reward-card__row-value--purple">{`$${rewardCare}/month`}</span>
              </div>
              <div className="reward-card__row">
                <div className="reward-card__row-left">
                  <span className="reward-card__row-icon">📊</span>
                  <span className="reward-card__row-label">Annual potential</span>
                </div>
                <span className="reward-card__row-value reward-card__row-value--green">{`$${rewardCare * 12}/year`}</span>
              </div>
              <div className="reward-card__trigger">
                <div className="reward-card__trigger-label">Triggers</div>
                <div className="reward-card__trigger-text">After 1 month of active and continuous subscription.</div>
              </div>
              <div className="reward-card__cta">
                <a href={REFERRAL_URL} className="btn btn--secondary">Become a Sponsor →</a>
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
                  If your referral takes the {OFFERS_US.growth.title} ({OFFERS_US.growth.price}) and adds
                  Website Care, you earn <strong>{`$${rewardGrowth}`} immediate + {`$${rewardCare}`}/month recurring</strong>.
                  Potential: <strong>{`$${bestCaseFirstYear}`} in the first year</strong> from a single referral.
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
                <li className="audience__item"><span className="audience__item-icon">🏠</span> A roofer, plumber or electrician</li>
                <li className="audience__item"><span className="audience__item-icon">🔧</span> An HVAC or landscaping company</li>
                <li className="audience__item"><span className="audience__item-icon">🏗️</span> A general contractor or remodeler</li>
                <li className="audience__item"><span className="audience__item-icon">💼</span> A local service business owner</li>
                <li className="audience__item"><span className="audience__item-icon">🏚️</span> A company with an outdated site</li>
                <li className="audience__item"><span className="audience__item-icon">🔍</span> A company wanting better local visibility</li>
                <li className="audience__item"><span className="audience__item-icon">✨</span> A company without a website yet</li>
              </ul>
            </div>

            <div className="audience__visual">
              <div className="audience__visual-title">Your network = a source of extra income</div>
              <div className="audience__visual-sub">Each referral that signs up can earn you a reward.</div>
              <div className="audience__visual-numbers">
                <div className="audience__num">
                  <div className="audience__num-value audience__num-value--purple">{`$${rewardStarter}`}–{`$${rewardGrowth}`}</div>
                  <div className="audience__num-label">per website project</div>
                </div>
                <div className="audience__num">
                  <div className="audience__num-value audience__num-value--gold">{`$${rewardCare}/month`}</div>
                  <div className="audience__num-label">per Website Care subscription</div>
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
              Each sponsor tells us how they&rsquo;d like their reward once it&rsquo;s confirmed.
            </p>
          </div>

          <div className="reward-choice__grid">

            <div className="choice-card">
              <div className="choice-card__icon-wrap choice-card__icon-wrap--purple">💵</div>
              <h3 className="choice-card__title">Financial Reward</h3>
              <p className="choice-card__text">
                Receive your bonus once your referral&rsquo;s project is signed and confirmed.
                We reach out to arrange payment directly — no dashboard needed yet.
              </p>
              <ul className="choice-card__list">
                <li>Confirmed once your referral&rsquo;s project is signed</li>
                <li>We reach out to arrange payment</li>
                <li>No manual tracking on your part</li>
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
              Enter your code and we&rsquo;ll follow up with a free estimate.
            </p>
          </div>
          <Suspense fallback={<div style={{ minHeight: '300px' }} />}>
            <ReferralLeadFormEn />
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
                <p>The referral code must be entered <strong>before the estimate is finalized</strong>.</p>
              </li>
              <li className="conditions__item">
                <span className="conditions__item-icon">✦</span>
                <p>For {OFFERS_US.starter.title} or {OFFERS_US.growth.title}, the <strong>{`$${rewardStarter}`}–{`$${rewardGrowth}`}</strong> reward is confirmed <strong>once the referred project is signed</strong> — there is no automatic online checkout on the US catalog yet.</p>
              </li>
              <li className="conditions__item">
                <span className="conditions__item-icon">✦</span>
                <p>For Website Care, the <strong>{`$${rewardCare}`}/month</strong> reward is triggered after <strong>1 month of active subscription</strong> and continues as long as the subscription is active.</p>
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

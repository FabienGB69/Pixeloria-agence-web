'use client';

import { useState, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { track } from '@vercel/analytics';
import { getStoredUtm } from '@/lib/utm';
import TurnstileWidget from '@/components/forms/TurnstileWidget';

/* ── Data catalogues ───────────────────────────────────────── */
const PAIN_CATALOG = [
  { id: 'slow-speed',    title: 'Vitesse insuffisante',   detail: 'Votre site charge trop lentement.' },
  { id: 'weak-message',  title: 'Message flou',           detail: "Votre proposition de valeur n’est pas comprise." },
  { id: 'low-mobile',    title: 'Expérience mobile faible', detail: "Le parcours mobile n’est pas assez fluide." },
  { id: 'seo-drop',      title: 'Trafic SEO en baisse',   detail: 'Vos pages peinent à se positionner durablement.' },
  { id: 'poor-cta',      title: 'CTA peu visibles',       detail: "Les actions clés manquent d’impact." },
  { id: 'trust-gap',     title: 'Manque de preuves',      detail: 'Témoignages et éléments de réassurance insuffisants.' },
  { id: 'content-chaos', title: 'Contenu désorganisé',   detail: "L’information est difficile à parcourir." },
  { id: 'no-funnel',     title: 'Tunnel incomplet',       detail: "Votre capture de leads n’est pas optimisée." },
] as const;

const OBJECTIVE_CATALOG = [
  { id: 'more-leads',      label: 'Générer plus de leads' },
  { id: 'higher-cr',       label: 'Améliorer le taux de conversion' },
  { id: 'seo-growth',      label: 'Booster le trafic SEO' },
  { id: 'premium-image',   label: 'Monter en gamme' },
  { id: 'better-retention',label: 'Augmenter la rétention' },
  { id: 'faster-sales',    label: 'Raccourcir le cycle de vente' },
  { id: 'higher-aov',      label: 'Augmenter le panier moyen' },
  { id: 'launch-offer',    label: 'Lancer une nouvelle offre' },
] as const;

const OFFER_CATALOG = {
  'audit-boost': {
    title: 'Audit Boost',
    price: '1 900 € HT',
    summary: 'Diagnostic + quick wins activables sous 30 jours.',
    features: ["Audit UX + conversion complet", "Plan d’optimisation SEO technique", "Roadmap priorisée et chiffrée"],
    rateBonus: 0.8,
  },
  'growth-engine': {
    title: 'Growth Engine',
    price: '3 900 € HT',
    summary: 'Accompagnement stratégique pour accélérer sur 12 mois.',
    features: ["Tout le pack Audit Boost", "Wireframes de la refonte de pages clés", "Plan éditorial et conversion 90 jours"],
    rateBonus: 2.2,
  },
} as const;

type OfferId = keyof typeof OFFER_CATALOG;

/* ── State ─────────────────────────────────────────────────── */
interface TunnelState {
  url: string; techno: string; anciennete: string;
  painPoints: string[]; objectives: string[];
  visiteurs: number; leads: number;
  offre: string;
  prenom: string; nom: string; email: string; phone: string; message: string;
  step: 1 | 2 | 3 | 4; done: boolean; submitting: boolean; error: string;
}

function makeInitialState(initialOffre: string): TunnelState {
  return {
    url: '', techno: '', anciennete: '',
    painPoints: [], objectives: [],
    visiteurs: 5000, leads: 2,
    offre: initialOffre,
    prenom: '', nom: '', email: '', phone: '', message: '',
    step: 1, done: false, submitting: false, error: '',
  };
}

/* ── Helpers ────────────────────────────────────────────────── */
function getMetrics(s: TunnelState) {
  const visitors = Math.max(Number(s.visiteurs) || 0, 0);
  const currentRate = Math.max(Number(s.leads) || 0, 0);
  const strategyLift = 0.9 + s.objectives.length * 0.45 + s.painPoints.length * 0.15;
  const projectedRate = Math.min(currentRate + strategyLift, 35);
  return {
    visitors,
    currentRate,
    projectedRate,
    currentLeadsMonthly: visitors * (currentRate / 100),
    projectedLeadsMonthly: visitors * (projectedRate / 100),
  };
}

function getOfferProjection(offerId: OfferId, s: TunnelState) {
  const m = getMetrics(s);
  const bonus = OFFER_CATALOG[offerId].rateBonus;
  const finalRate = Math.min(m.projectedRate + bonus, 40);
  const annualLeads = m.visitors * (finalRate / 100) * 12;
  return { annualLeads, annualRevenue: annualLeads * 280 };
}

const fmtInt = (v: number) => new Intl.NumberFormat('fr-FR').format(Math.round(v || 0));
const fmtCur = (v: number) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(Math.max(0, v || 0));

function validate(s: TunnelState): string {
  if (s.step === 1) {
    if (!s.url.trim()) return "Ajoutez l’URL de votre site pour continuer.";
    if (!s.techno) return 'Sélectionnez votre technologie principale.';
    if (!s.anciennete) return "Indiquez l’ancienneté de votre site.";
    if (s.painPoints.length === 0) return 'Sélectionnez au moins une douleur prioritaire.';
  }
  if (s.step === 2) {
    if (s.objectives.length === 0) return 'Choisissez au moins un objectif de croissance.';
    if (!(s.visiteurs > 0)) return 'Renseignez un volume de visiteurs supérieur à 0.';
    if (!(s.leads > 0)) return 'Renseignez un taux de conversion actuel supérieur à 0%.';
  }
  if (s.step === 3 && !s.offre) return 'Sélectionnez une offre pour continuer.';
  if (s.step === 4) {
    if (!s.prenom) return 'Le prénom est requis.';
    if (!s.nom) return 'Le nom est requis.';
    if (!s.email) return "L’email est requis.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s.email)) return "Format d’email invalide.";
    if (!s.phone) return 'Le téléphone est requis.';
  }
  return '';
}

/* ── Component ──────────────────────────────────────────────── */
export default function TunnelForm() {
  const searchParams = useSearchParams();
  const initialOffre = searchParams.get('offre') ?? '';
  const [s, setS] = useState<TunnelState>(() => makeInitialState(initialOffre));
  const [warning, setWarning] = useState('');
  const [turnstileToken, setTurnstileToken] = useState('');
  const onTurnstileVerify = useCallback((token: string) => setTurnstileToken(token), []);
  const onTurnstileExpire = useCallback(() => setTurnstileToken(''), []);

  const update = useCallback((patch: Partial<TunnelState>) => setS(prev => ({ ...prev, ...patch })), []);

  const togglePain = (id: string) => {
    update({ painPoints: s.painPoints.includes(id) ? s.painPoints.filter(p => p !== id) : [...s.painPoints, id] });
    setWarning('');
  };
  const toggleObj = (id: string) => {
    update({ objectives: s.objectives.includes(id) ? s.objectives.filter(o => o !== id) : [...s.objectives, id] });
    setWarning('');
  };

  const next = () => {
    const err = validate(s);
    if (err) { setWarning(err); return; }
    setWarning('');
    const nextStep = Math.min(s.step + 1, 4) as TunnelState['step'];
    track('funnel_step', { from: s.step, to: nextStep });
    update({ step: nextStep });
  };
  const prev = () => { setWarning(''); update({ step: Math.max(s.step - 1, 1) as TunnelState['step'] }); };

  const submit = async () => {
    const err = validate(s);
    if (err) { setWarning(err); return; }
    update({ submitting: true, error: '' });
    try {
      const res = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _hp: '',
          _turnstile: turnstileToken,
          prenom: s.prenom, nom: s.nom, email: s.email, phone: s.phone, message: s.message,
          url: s.url, offre: s.offre, painPoints: s.painPoints, objectives: s.objectives,
          visiteurs: s.visiteurs, leads: s.leads,
          ...getStoredUtm(),
        }),
      });
      if (res.ok) {
        track('funnel_submit', { offre: s.offre });
        update({ done: true, submitting: false });
      } else { update({ error: 'Une erreur est survenue. Réessayez ou contactez-nous.', submitting: false }); }
    } catch {
      update({ done: true, submitting: false });
    }
  };

  const metrics = getMetrics(s);

  if (s.done) {
    return (
      <div className="wizard success-card">
        <div className="eyebrow">Audit confirmé</div>
        <h2>Merci {s.prenom || ''}, votre audit Pixeloria est réservé.</h2>
        <p>Nous revenons vers vous sous 24&nbsp;h ouvrées à l&apos;adresse <strong>{s.email}</strong>.</p>
        <p>Vous allez recevoir 4 livrables clés :</p>
        <ul className="deliverables">
          <li>1. Diagnostic UX &amp; conversion détaillé</li>
          <li>2. Score SEO technique avec priorités</li>
          <li>3. Roadmap d&apos;actions 30 / 60 / 90 jours</li>
          <li>4. Proposition de refonte + planning de lancement</li>
        </ul>
        <div className="step-nav">
          <Link href="/" className="btn btn-secondary">Retour à l&apos;accueil</Link>
          <button className="btn btn-primary" onClick={() => { setS(makeInitialState('')); setWarning(''); }}>Recommencer</button>
        </div>
      </div>
    );
  }

  const STEPS = ['Contexte', 'Objectifs', 'Offre', 'Coordonnées'];

  return (
    <section className="wizard">
      <header className="wizard-head">
        <div className="eyebrow">Tunnel de vente Pixeloria</div>
        <h1 className="wizard-title">Audit de refonte en 4 étapes</h1>
        <ol className="progress">
          {STEPS.map((label, i) => {
            const num = i + 1;
            const cls = num < s.step ? 'is-done' : num === s.step ? 'is-active' : '';
            return <li key={label} className={cls}>Étape {num}<br />{label}</li>;
          })}
        </ol>
      </header>

      <div className="wizard-body">
        {/* ── Step 1 ── */}
        {s.step === 1 && (
          <>
            <div className="step-lead"><h2>Analyse de votre situation actuelle</h2><p>Partagez votre contexte digital pour cadrer l&apos;audit Pixeloria.</p></div>
            <div className="field-grid">
              <label style={{ gridColumn: '1/-1' }}>
                URL de votre site
                <input type="url" placeholder="https://mon-site.fr" value={s.url} onChange={e => update({ url: e.target.value })} />
              </label>
              <label>
                Technologie principale
                <select value={s.techno} onChange={e => update({ techno: e.target.value })}>
                  <option value="">Sélectionner…</option>
                  {['WordPress', 'Wix', 'Shopify', 'Webflow', 'Squarespace', 'Développement sur mesure', 'Autre'].map(t => <option key={t}>{t}</option>)}
                </select>
              </label>
              <label>
                Ancienneté du site
                <select value={s.anciennete} onChange={e => update({ anciennete: e.target.value })}>
                  <option value="">Sélectionner…</option>
                  {["Moins d'1 an", '1 à 3 ans', '3 à 5 ans', 'Plus de 5 ans'].map(a => <option key={a}>{a}</option>)}
                </select>
              </label>
            </div>
            <div>
              <p style={{ marginBottom: '0.75rem', fontWeight: 600 }}>Douleurs prioritaires ({s.painPoints.length} sélectionnée{s.painPoints.length > 1 ? 's' : ''})</p>
              <div className="pain-grid">
                {PAIN_CATALOG.map(pain => {
                  const active = s.painPoints.includes(pain.id);
                  return (
                    <button key={pain.id} type="button" className={`pain-card${active ? ' is-active' : ''}`}
                      aria-pressed={active} onClick={() => togglePain(pain.id)}>
                      <span className="pain-title">{pain.title}</span>
                      <span className="pain-detail">{pain.detail}</span>
                      <span className="pain-toggle">{active ? 'Sélectionnée' : 'Sélectionner'}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* ── Step 2 ── */}
        {s.step === 2 && (
          <>
            <div className="step-lead"><h2>Vos objectifs de croissance</h2><p>Définissez vos ambitions pour calibrer la stratégie Pixeloria.</p></div>
            <div>
              <p style={{ marginBottom: '0.75rem', fontWeight: 600 }}>Objectifs ({s.objectives.length} sélectionné{s.objectives.length > 1 ? 's' : ''})</p>
              <div className="chip-grid">
                {OBJECTIVE_CATALOG.map(obj => {
                  const active = s.objectives.includes(obj.id);
                  return (
                    <button key={obj.id} type="button" className={`chip${active ? ' is-active' : ''}`}
                      aria-pressed={active} onClick={() => toggleObj(obj.id)}>
                      {obj.label}
                      <span className="chip-state">{active ? 'Ajouté' : 'Choisir'}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="field-grid">
              <label>
                Visiteurs / mois actuels
                <input type="number" min="0" value={s.visiteurs}
                  onChange={e => update({ visiteurs: Math.max(0, Number(e.target.value)) })} />
              </label>
              <label>
                Taux de conversion actuel (%)
                <input type="number" min="0" max="100" step="0.1" value={s.leads}
                  onChange={e => update({ leads: Math.max(0, Number(e.target.value)) })} />
              </label>
            </div>
            <div className="roi-grid" aria-live="polite">
              <article className="roi-item"><strong>{fmtInt(metrics.currentLeadsMonthly)}</strong><span>Leads actuels / mois</span></article>
              <article className="roi-item"><strong>{fmtInt(metrics.projectedLeadsMonthly)}</strong><span>Leads projetés / mois</span></article>
              <article className="roi-item"><strong>{fmtCur(Math.max(0, metrics.projectedLeadsMonthly - metrics.currentLeadsMonthly) * 12 * 280)}</strong><span>Potentiel additionnel / an</span></article>
            </div>
          </>
        )}

        {/* ── Step 3 ── */}
        {s.step === 3 && (() => {
          const currentAnnual = metrics.currentLeadsMonthly * 12;
          return (
            <>
              <div className="step-lead"><h2>Choisissez votre offre Pixeloria</h2><p>Comparez les scénarios sur 12 mois et sélectionnez l&apos;option adaptée.</p></div>
              <div className="offer-grid">
                {(Object.entries(OFFER_CATALOG) as [OfferId, typeof OFFER_CATALOG[OfferId]][]).map(([id, offer]) => {
                  const selected = s.offre === id;
                  return (
                    <article key={id} className={`offer-card${selected ? ' is-selected' : ''}`}>
                      <div className="offer-head"><h3>{offer.title}</h3><span className="offer-status">{selected ? 'Sélectionnée' : 'Disponible'}</span></div>
                      <p>{offer.summary}</p>
                      <div className="offer-price">{offer.price}</div>
                      <ul>{offer.features.map(f => <li key={f}>{f}</li>)}</ul>
                      <button type="button" className={`btn ${selected ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => { update({ offre: id }); setWarning(''); }}>
                        {selected ? 'Offre choisie' : 'Choisir cette offre'}
                      </button>
                    </article>
                  );
                })}
              </div>
              <div className="comparison-panel">
                <h3>Comparaison 12 mois</h3>
                <table className="comparison-table">
                  <thead><tr><th>Scénario</th><th>Leads/an</th><th>CA potentiel</th></tr></thead>
                  <tbody>
                    <tr><td>Situation actuelle</td><td>{fmtInt(currentAnnual)}</td><td>{fmtCur(currentAnnual * 280)}</td></tr>
                    {(Object.keys(OFFER_CATALOG) as OfferId[]).map(id => {
                      const proj = getOfferProjection(id, s);
                      return <tr key={id}><td>Offre {OFFER_CATALOG[id].title}</td><td>{fmtInt(proj.annualLeads)}</td><td>{fmtCur(proj.annualRevenue)}</td></tr>;
                    })}
                  </tbody>
                </table>
              </div>
            </>
          );
        })()}

        {/* ── Step 4 ── */}
        {s.step === 4 && (
          <>
            <div className="step-lead"><h2>Vos coordonnées</h2><p>Dernière étape&nbsp;: recevez votre audit et plan d&apos;actions personnalisé.</p></div>
            <div className="field-grid">
              <label>Prénom<input type="text" name="prenom" placeholder="Prénom" value={s.prenom} onChange={e => update({ prenom: e.target.value })} /></label>
              <label>Nom<input type="text" name="nom" placeholder="Nom" value={s.nom} onChange={e => update({ nom: e.target.value })} /></label>
              <label>Email pro<input type="email" name="email" placeholder="vous@entreprise.fr" value={s.email} onChange={e => update({ email: e.target.value })} /></label>
              <label>Téléphone<input type="tel" name="phone" placeholder="06 00 00 00 00" value={s.phone} onChange={e => update({ phone: e.target.value })} /></label>
            </div>
            <label>Message (facultatif)<textarea placeholder="Contexte complémentaire" rows={3} value={s.message} onChange={e => update({ message: e.target.value })} /></label>
            <TurnstileWidget onVerify={onTurnstileVerify} onExpire={onTurnstileExpire} />
            {s.error && <p role="alert" style={{ color: '#e43f6f', fontSize: '.9rem' }}>{s.error}</p>}
          </>
        )}

        {/* ── Navigation ── */}
        {warning && <p className="step-warning is-visible" role="alert">{warning}</p>}
        <div className="step-nav">
          {s.step > 1 && <button type="button" className="btn btn-secondary" onClick={prev}>Retour</button>}
          {s.step < 4
            ? <button type="button" className="btn btn-primary" onClick={next}>Continuer</button>
            : <button type="button" className="btn btn-primary" disabled={s.submitting} onClick={submit}>
                {s.submitting ? 'Envoi…' : 'Recevoir mon audit'}
              </button>
          }
        </div>
      </div>
    </section>
  );
}

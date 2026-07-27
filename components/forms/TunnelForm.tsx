'use client';

import { useState, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { track } from '@vercel/analytics';
import { trackEvent } from '@/lib/gtm';
import { getStoredUtm } from '@/lib/utm';
import TurnstileWidget from '@/components/forms/TurnstileWidget';
import { OFFERS, OFFER_ORDER, type OfferId } from '@/lib/pricing';

/* ── Data catalogues ───────────────────────────────────────── */
const PAIN_CATALOG = [
  { id: 'slow-speed',    title: 'Vitesse insuffisante',   detail: 'Votre site charge trop lentement.' },
  { id: 'weak-message',  title: 'Message flou',           detail: "Votre proposition de valeur n'est pas comprise." },
  { id: 'low-mobile',    title: 'Expérience mobile faible', detail: "Le parcours mobile n'est pas assez fluide." },
  { id: 'seo-drop',      title: 'Trafic SEO en baisse',   detail: 'Vos pages peinent à se positionner durablement.' },
  { id: 'poor-cta',      title: 'CTA peu visibles',       detail: "Les actions clés manquent d'impact." },
  { id: 'trust-gap',     title: 'Manque de preuves',      detail: 'Témoignages et éléments de réassurance insuffisants.' },
  { id: 'content-chaos', title: 'Contenu désorganisé',   detail: "L'information est difficile à parcourir." },
  { id: 'no-funnel',     title: 'Tunnel incomplet',       detail: "Votre capture de leads n'est pas optimisée." },
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

const KNOWN_OFFER_IDS = new Set<string>(OFFER_ORDER);

function normalizeInitialOffre(raw: string): string {
  if (!raw) return '';
  if (KNOWN_OFFER_IDS.has(raw)) return raw;
  // Alias historiques préservés pour la compat des liens externes.
  if (raw === 'oneshot') return 'site-artisan';
  if (raw === 'abo' || raw === 'maintenance') return 'option-visibilite';
  return '';
}

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

function validate(s: TunnelState): string {
  if (s.step === 1) {
    if (!s.url.trim()) return "Ajoutez l'URL de votre site pour continuer.";
    if (!s.techno) return 'Sélectionnez votre technologie principale.';
    if (!s.anciennete) return "Indiquez l'ancienneté de votre site.";
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
    if (!s.email) return "L'email est requis.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s.email)) return "Format d'email invalide.";
    if (!s.phone) return 'Le téléphone est requis.';
  }
  return '';
}

/* ── Component ──────────────────────────────────────────────── */
export default function TunnelForm() {
  const searchParams = useSearchParams();
  const initialOffre = normalizeInitialOffre(searchParams.get('offre') ?? '');
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
        trackEvent('funnel_submit', { offre: s.offre });
        update({ done: true, submitting: false });
      } else { update({ error: 'Une erreur est survenue. Réessayez ou contactez-nous.', submitting: false }); }
    } catch {
      update({ done: true, submitting: false });
    }
  };

  if (s.done) {
    return (
      <div className="wizard success-card">
        <div className="eyebrow">Demande enregistrée</div>
        <h2>Merci {s.prenom || ''}, votre demande Pixeloria est enregistrée.</h2>
        <p>Nous revenons vers vous sous 24&nbsp;h ouvrées à l&apos;adresse <strong>{s.email}</strong>.</p>
        <p>Vous allez recevoir&nbsp;:</p>
        <ul className="deliverables">
          <li>1. Un premier retour sur votre site actuel</li>
          <li>2. Une proposition adaptée à votre contexte</li>
          <li>3. Un planning de livraison en 72&nbsp;h si vous validez</li>
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
        <div className="eyebrow">Tunnel de refonte Pixeloria</div>
        <h1 className="wizard-title">Votre projet en 4 étapes</h1>
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
            <div className="step-lead"><h2>Analyse de votre situation actuelle</h2><p>Partagez votre contexte digital pour cadrer votre projet Pixeloria.</p></div>
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
            <div className="step-lead"><h2>Vos objectifs et votre volumétrie</h2><p>Ces données servent à qualifier votre besoin, pas à vendre un chiffre.</p></div>
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
          </>
        )}

        {/* ── Step 3 ── */}
        {s.step === 3 && (
          <>
            <div className="step-lead"><h2>Choisissez votre offre Pixeloria</h2><p>Deux offres, sans engagement. Vous pouvez combiner les deux.</p></div>
            <div className="offer-grid">
              {OFFER_ORDER.map((id: OfferId) => {
                const offer = OFFERS[id];
                const selected = s.offre === id;
                return (
                  <article key={id} className={`offer-card${selected ? ' is-selected' : ''}`} data-offer={id}>
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
          </>
        )}

        {/* ── Step 4 ── */}
        {s.step === 4 && (
          <>
            <div className="step-lead"><h2>Vos coordonnées</h2><p>Dernière étape&nbsp;: recevez une proposition Pixeloria adaptée à votre projet.</p></div>
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
                {s.submitting ? 'Envoi…' : 'Envoyer ma demande'}
              </button>
          }
        </div>
      </div>
    </section>
  );
}

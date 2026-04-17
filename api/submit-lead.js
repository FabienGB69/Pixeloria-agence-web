import { Client } from '@notionhq/client';

// In-memory rate limit: max 5 requests per IP per 10 minutes.
// Note: resets on cold start — replace with Upstash Redis for persistence across instances.
const RATE_MAP = new Map();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = RATE_MAP.get(ip) || { count: 0, start: now };
  if (now - entry.start > RATE_WINDOW_MS) {
    RATE_MAP.set(ip, { count: 1, start: now });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count += 1;
  RATE_MAP.set(ip, entry);
  return false;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const safe = (v, max = 200) => String(v ?? '').trim().slice(0, max);

const OFFRE_LABELS = {
  oneshot:     'One-Shot 490€ TTC',
  abo:         'Maintenance 49€/mois',
  maintenance: 'Maintenance 49€/mois',
  branding:    'Branding digital',
  'ui-ux':     'UI / UX design',
  integration: 'Intégration web',
  full:        'Projet complet',
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket?.remoteAddress || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Trop de tentatives. Réessayez dans quelques minutes.' });
  }

  const {
    prenom = '', nom = '', email = '', company = '',
    offre = '', message = '',
    phone = '', url = '',
    painPoints = [], objectives = [],
    visiteurs = '', leads: leadsCount = '',
  } = req.body || {};

  const cleanEmail = safe(email, 254);
  if (!cleanEmail || !EMAIL_RE.test(cleanEmail)) {
    return res.status(400).json({ error: 'Email invalide ou manquant' });
  }

  const NOTION_TOKEN = process.env.NOTION_TOKEN;
  const NOTION_DB_ID = process.env.NOTION_DB_ID;

  if (!NOTION_TOKEN || !NOTION_DB_ID) {
    console.error('[submit-lead] Missing NOTION_TOKEN or NOTION_DB_ID');
    return res.status(503).json({ error: 'Service temporairement indisponible. Contactez-nous par email.' });
  }

  const notion = new Client({ auth: NOTION_TOKEN });

  const offreLabel = OFFRE_LABELS[offre] || safe(offre, 100) || 'Non précisé';
  const fullName   = [safe(prenom, 100), safe(nom, 100)].filter(Boolean).join(' ') || safe(company, 100) || 'Anonyme';
  const source     = offre ? 'Tunnel refonte' : 'Contact direct';

  console.log(JSON.stringify({
    ts: new Date().toISOString(), ip, source, offre: offreLabel, email: cleanEmail,
  }));

  try {
    await notion.pages.create({
      parent: { database_id: NOTION_DB_ID },
      properties: {
        'Nom':            { title:       [{ text: { content: fullName } }] },
        'Email':          { email:       cleanEmail },
        'Entreprise':     { rich_text:   [{ text: { content: safe(company) } }] },
        'Téléphone':      { phone_number: safe(phone, 30) || null },
        'Site web':       { url:         safe(url, 500) || null },
        'Offre':          { select:      { name: offreLabel } },
        'Statut':         { select:      { name: 'Nouveau' } },
        'Source':         { select:      { name: source } },
        'Visiteurs/mois': { number:      parseInt(visiteurs) || null },
        'Leads/mois':     { number:      parseInt(leadsCount) || null },
        'Problèmes':      { multi_select: (Array.isArray(painPoints) ? painPoints : []).map(p => ({ name: safe(p, 50) })) },
        'Objectifs':      { multi_select: (Array.isArray(objectives) ? objectives : []).map(o => ({ name: safe(o, 100) })) },
        'Message':        { rich_text:   [{ text: { content: safe(message, 2000) } }] },
        'Date':           { date:        { start: new Date().toISOString().split('T')[0] } },
      },
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[submit-lead] Notion SDK error:', err?.code, err?.message);
    return res.status(502).json({ error: 'Impossible de sauvegarder le lead. Réessayez ou contactez-nous.' });
  }
}

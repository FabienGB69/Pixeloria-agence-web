import { Resend } from 'resend';

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

async function sendConfirmation(resend, { email, prenom, offreLabel }) {
  const greeting = prenom ? `Bonjour ${prenom},` : 'Bonjour,';
  const offreHtml = offreLabel !== 'Non précisé'
    ? `pour l'offre <strong style="color:#7a5cff;">${offreLabel}</strong>`
    : 'sur Pixeloria';

  return resend.emails.send({
    from: 'Pixeloria <contact@pixeloria.fr>',
    to: email,
    subject: 'Votre demande est bien reçue — Pixeloria',
    html: `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f8;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:580px;background:#080810;border-radius:16px;overflow:hidden;">
        <tr>
          <td style="padding:32px 40px 24px;border-bottom:1px solid #1a1a2e;">
            <span style="font-size:22px;font-weight:800;background:linear-gradient(135deg,#7a5cff,#00d1ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Pixeloria</span>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 40px;color:#e8e8f0;">
            <p style="margin:0 0 16px;font-size:17px;">${greeting}</p>
            <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#b0b0c8;">
              Nous avons bien reçu votre demande ${offreHtml}.<br>
              Notre équipe vous recontacte sous <strong style="color:#fff;">24h ouvrées</strong>.
            </p>
            <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#b0b0c8;">
              En attendant, consultez nos réalisations sur notre site.
            </p>
            <a href="https://pixeloria.fr" style="display:inline-block;padding:12px 28px;background:linear-gradient(135deg,#7a5cff,#00d1ff);color:#fff;text-decoration:none;border-radius:50px;font-size:14px;font-weight:700;">
              Voir pixeloria.fr
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 40px 28px;border-top:1px solid #1a1a2e;">
            <p style="margin:0;font-size:13px;color:#6060a0;">
              — L'équipe Pixeloria &nbsp;·&nbsp;
              <a href="https://pixeloria.fr" style="color:#7a5cff;text-decoration:none;">pixeloria.fr</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
  });
}

async function notifyOwner(resend, { prenom, nom, email, phone, url, offreLabel, message, source }) {
  const ownerEmail = process.env.OWNER_EMAIL || 'contact@pixeloria.fr';
  const fullName = [prenom, nom].filter(Boolean).join(' ') || 'Anonyme';
  const rows = [
    ['Nom', fullName],
    ['Email', `<a href="mailto:${email}" style="color:#00d1ff;">${email}</a>`],
    ['Téléphone', phone || '—'],
    ['Site web', url ? `<a href="${url}" style="color:#00d1ff;">${url}</a>` : '—'],
    ['Offre', offreLabel],
    ['Source', source],
    ['Message', message || '—'],
  ];

  const rowsHtml = rows.map(([label, value]) => `
    <tr>
      <td style="padding:8px 12px;background:#0d0d1f;color:#8080b0;font-size:13px;white-space:nowrap;border-bottom:1px solid #1a1a2e;">${label}</td>
      <td style="padding:8px 12px;color:#e8e8f0;font-size:13px;border-bottom:1px solid #1a1a2e;">${value}</td>
    </tr>`).join('');

  return resend.emails.send({
    from: 'Pixeloria Notifs <contact@pixeloria.fr>',
    to: ownerEmail,
    subject: `Nouveau lead — ${fullName} (${offreLabel})`,
    html: `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f8;padding:32px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#080810;border-radius:14px;overflow:hidden;">
        <tr>
          <td style="padding:24px 32px 16px;border-bottom:1px solid #1a1a2e;">
            <span style="font-size:18px;font-weight:800;background:linear-gradient(135deg,#7a5cff,#00d1ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Pixeloria</span>
            <span style="margin-left:12px;font-size:14px;color:#8080b0;">Nouveau lead</span>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:8px;overflow:hidden;border:1px solid #1a1a2e;">
              ${rowsHtml}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 32px 24px;border-top:1px solid #1a1a2e;">
            <p style="margin:0;font-size:12px;color:#6060a0;">Notif auto Pixeloria · Vérifier dans Notion</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
  });
}

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

  const offreLabel = OFFRE_LABELS[offre] || safe(offre, 100) || 'Non précisé';
  const fullName   = [safe(prenom, 100), safe(nom, 100)].filter(Boolean).join(' ') || safe(company, 100) || 'Anonyme';
  const source     = offre ? 'Tunnel refonte' : 'Contact direct';

  console.log(JSON.stringify({
    ts: new Date().toISOString(), ip, source, offre: offreLabel, email: cleanEmail,
  }));

  const notionBody = {
    parent: { database_id: NOTION_DB_ID },
    properties: {
      'Nom':            { title:        [{ text: { content: fullName } }] },
      'Email':          { email:        cleanEmail },
      'Entreprise':     { rich_text:    [{ text: { content: safe(company) } }] },
      'Téléphone':      { phone_number: safe(phone, 30) || null },
      'Site web':       { url:          safe(url, 500) || null },
      'Offre':          { select:       { name: offreLabel } },
      'Statut':         { select:       { name: 'Nouveau' } },
      'Source':         { select:       { name: source } },
      'Visiteurs/mois': { number:       parseInt(visiteurs) || null },
      'Leads/mois':     { number:       parseInt(leadsCount) || null },
      'Problèmes':      { multi_select: (Array.isArray(painPoints) ? painPoints : []).map(p => ({ name: safe(p, 50) })) },
      'Objectifs':      { multi_select: (Array.isArray(objectives) ? objectives : []).map(o => ({ name: safe(o, 100) })) },
      'Message':        { rich_text:    [{ text: { content: safe(message, 2000) } }] },
      'Date':           { date:         { start: new Date().toISOString().split('T')[0] } },
    },
  };

  try {
    const notionRes = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NOTION_TOKEN}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify(notionBody),
    });

    if (!notionRes.ok) {
      const errText = await notionRes.text();
      console.error('[submit-lead] Notion API error:', notionRes.status, errText);
      return res.status(502).json({ error: 'Impossible de sauvegarder le lead. Réessayez ou contactez-nous.' });
    }
  } catch (err) {
    console.error('[submit-lead] Notion fetch error:', err?.message);
    return res.status(502).json({ error: 'Impossible de sauvegarder le lead. Réessayez ou contactez-nous.' });
  }

  // Send emails after successful Notion save — failures are non-blocking
  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const results = await Promise.allSettled([
      sendConfirmation(resend, { email: cleanEmail, prenom: safe(prenom, 100), offreLabel }),
      notifyOwner(resend, {
        prenom: safe(prenom, 100), nom: safe(nom, 100),
        email: cleanEmail, phone: safe(phone, 30),
        url: safe(url, 500), offreLabel, message: safe(message, 2000), source,
      }),
    ]);
    results.forEach((r, i) => {
      if (r.status === 'rejected') {
        console.error(`[submit-lead] email[${i}] failed:`, r.reason?.message);
      }
    });
  }

  return res.status(200).json({ success: true });
}

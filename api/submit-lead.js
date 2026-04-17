export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    // Champs du formulaire contact principal (index.html)
    prenom = '', nom = '', email = '', company = '',
    offre = '', message = '',
    // Champs étendus provenant du tunnel refonte (refonte.html)
    phone = '', url = '',
    painPoints = [], objectives = [],
    visiteurs = '', leads: leadsCount = '',
  } = req.body || {};

  if (!email) return res.status(400).json({ error: 'Email requis' });

  const NOTION_TOKEN = process.env.NOTION_TOKEN;
  const NOTION_DB_ID = process.env.NOTION_DB_ID;

  if (!NOTION_TOKEN || !NOTION_DB_ID) {
    console.error('Missing NOTION_TOKEN or NOTION_DB_ID');
    return res.status(503).json({ error: 'Service temporairement indisponible. Contactez-nous par email.' });
  }

  const OFFRE_LABELS = {
    oneshot:     'One-Shot 490€ TTC',
    maintenance: 'Maintenance 49€/mois',
    branding:    'Branding digital',
    'ui-ux':     'UI / UX design',
    integration: 'Intégration web',
    full:        'Projet complet',
  };
  const offreLabel = OFFRE_LABELS[offre] || offre || 'Non précisé';

  const fullName = [prenom, nom].filter(Boolean).join(' ') || company || 'Anonyme';

  const notionBody = {
    parent: { database_id: NOTION_DB_ID },
    properties: {
      'Nom': {
        title: [{ text: { content: fullName } }]
      },
      'Email': { email: email },
      'Entreprise': {
        rich_text: [{ text: { content: String(company).slice(0, 200) } }]
      },
      'Téléphone': { phone_number: phone || null },
      'Site web': { url: url || null },
      'Offre': { select: { name: offreLabel } },
      'Statut': { select: { name: 'Nouveau' } },
      'Visiteurs/mois': { number: parseInt(visiteurs) || null },
      'Leads/mois': { number: parseInt(leadsCount) || null },
      'Problèmes': {
        multi_select: painPoints.map(p => ({ name: String(p) }))
      },
      'Objectifs': {
        multi_select: objectives.map(o => ({ name: String(o) }))
      },
      'Message': {
        rich_text: [{ text: { content: String(message).slice(0, 2000) } }]
      },
      'Date': { date: { start: new Date().toISOString().split('T')[0] } },
      'Source': { select: { name: 'Tunnel refonte' } },
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
      console.error('Notion API error:', notionRes.status, errText);
      return res.status(502).json({ error: 'Notion API error', detail: errText });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('submit-lead error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

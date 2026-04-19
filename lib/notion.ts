import { Client } from '@notionhq/client';
import type { LeadInput } from './validation';
import { safe } from './validation';

/**
 * Client Notion initialisé lazily pour éviter les crashes au build
 * si NOTION_TOKEN n'est pas défini dans l'environnement de build.
 */
function getNotionClient(): Client {
  const token = process.env.NOTION_TOKEN;
  if (!token) {
    throw new Error('NOTION_TOKEN is not defined');
  }
  return new Client({ auth: token });
}

export const OFFRE_LABELS: Record<string, string> = {
  oneshot:     'One-Shot 490€ TTC',
  abo:         'Maintenance 49€/mois',
  maintenance: 'Maintenance 49€/mois',
  branding:    'Branding digital',
  'ui-ux':     'UI / UX design',
  integration: 'Intégration web',
  full:        'Projet complet',
  creation:    'Création de site',
};

/**
 * Crée une page dans la base de données Notion pour un nouveau lead.
 * Lance une exception si NOTION_TOKEN ou NOTION_DB_ID est absent,
 * ou si l'API Notion retourne une erreur.
 */
export async function saveLead(data: LeadInput): Promise<void> {
  const dbId = process.env.NOTION_DB_ID;
  if (!dbId) {
    throw new Error('NOTION_DB_ID is not defined');
  }

  const notion = getNotionClient();

  const offreLabel =
    OFFRE_LABELS[data.offre] ?? (safe(data.offre, 100) || 'Non précisé');
  const fullName =
    [safe(data.prenom, 100), safe(data.nom, 100)].filter(Boolean).join(' ') ||
    safe(data.company, 100) ||
    'Anonyme';
  const source = data.offre ? 'Tunnel refonte' : 'Contact direct';

  await notion.pages.create({
    parent: { database_id: dbId },
    properties: {
      'Nom':            { title:        [{ text: { content: fullName } }] },
      'Email':          { email:        safe(data.email, 254) },
      'Entreprise':     { rich_text:    [{ text: { content: safe(data.company) } }] },
      'Téléphone':      { phone_number: safe(data.phone, 30) || null },
      'Site web':       { url:          safe(data.url, 500) || null },
      'Offre':          { select:       { name: offreLabel } },
      'Statut':         { select:       { name: 'Nouveau' } },
      'Source':         { select:       { name: source } },
      'Visiteurs/mois': { number:       data.visiteurs ?? null },
      'Leads/mois':     { number:       data.leads ?? null },
      'Problèmes':      {
        multi_select: data.painPoints.map((p) => ({ name: safe(p, 50) })),
      },
      'Objectifs':      {
        multi_select: data.objectives.map((o) => ({ name: safe(o, 100) })),
      },
      'Message':        {
        rich_text: [{ text: { content: safe(data.message, 2000) } }],
      },
      'Date':           {
        date: { start: new Date().toISOString().split('T')[0] },
      },
    },
  });
}

/**
 * Calcule offreLabel et source à partir du champ offre brut.
 * Factorisation partagée entre notion.ts et la route handler.
 */
export function resolveOffreAndSource(offre: string): {
  offreLabel: string;
  source: string;
} {
  const offreLabel =
    OFFRE_LABELS[offre] ?? (safe(offre, 100) || 'Non précisé');
  const source = offre === 'creation' ? 'Tunnel création'
               : offre               ? 'Tunnel refonte'
               :                       'Contact direct';
  return { offreLabel, source };
}

import { Client } from '@notionhq/client';
import type { LeadInput } from './validation';
import { safe } from './validation';
import { OFFRE_LABELS } from './pricing';

export { OFFRE_LABELS };

export interface TestimonialInput {
  prenom:   string;
  activite: string;
  ville:    string;
  avis:     string;
  note:     number;
  lang?:    string;
}

export interface PublishedTestimonial {
  prenom:   string;
  activite: string;
  ville:    string;
  avis:     string;
  note:     number;
}

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
        rich_text: [{ text: { content: appendUtmSuffix(safe(data.message, 2000), data) } }],
      },
      'Date':           {
        date: { start: new Date().toISOString().split('T')[0] },
      },
    },
  });
}

/**
 * Attribution acquisition (issue #182) : ajoutée en suffixe du champ
 * `Message` plutôt qu'en colonnes Notion dédiées, pour ne pas dépendre
 * d'un schéma de base non vérifiable par ce code (une propriété absente
 * de la base ferait échouer `notion.pages.create()`).
 */
function appendUtmSuffix(message: string, data: LeadInput): string {
  const parts = (
    [
      ['source', data.utm_source],
      ['medium', data.utm_medium],
      ['campaign', data.utm_campaign],
      ['term', data.utm_term],
      ['content', data.utm_content],
    ] as const
  ).filter(([, v]) => v);

  if (parts.length === 0) return message;

  const utmLine = `[UTM] ${parts.map(([k, v]) => `${k}=${v}`).join(' | ')}`;
  return message ? `${message}\n\n${utmLine}` : utmLine;
}

/**
 * Crée une page dans la base de données Notion dédiée aux témoignages.
 * Lance une exception si NOTION_TOKEN ou NOTION_TESTIMONIALS_DB_ID est absent,
 * ou si l'API Notion retourne une erreur.
 */
export async function createTestimonial(data: TestimonialInput): Promise<void> {
  const dbId = process.env.NOTION_TESTIMONIALS_DB_ID;
  if (!dbId) {
    throw new Error('NOTION_TESTIMONIALS_DB_ID is not defined');
  }

  const notion = getNotionClient();
  const source = data.lang === 'en' ? 'EN' : 'FR';

  await notion.pages.create({
    parent: { database_id: dbId },
    properties: {
      'Prénom':   { title:     [{ text: { content: safe(data.prenom, 50) } }] },
      'Activité': { rich_text: [{ text: { content: safe(data.activite, 100) } }] },
      'Ville':    { rich_text: [{ text: { content: safe(data.ville, 100) } }] },
      'Avis':     { rich_text: [{ text: { content: safe(data.avis, 1000) } }] },
      'Note':     { number: data.note },
      'Source':   { select: { name: source } },
      'Statut':   { select: { name: 'À publier' } },
      'Date':     { date:   { start: new Date().toISOString() } },
    },
  });
}

/**
 * Récupère les témoignages passés en statut "Publié" dans Notion, pour
 * affichage sur `/avis` (voir issue #164). Fail-open : retourne un tableau
 * vide si NOTION_TOKEN/NOTION_TESTIMONIALS_DB_ID est absent ou si l'appel
 * Notion échoue, plutôt que de casser le build ou le rendu de la page.
 */
export async function getPublishedTestimonials(): Promise<PublishedTestimonial[]> {
  const dbId = process.env.NOTION_TESTIMONIALS_DB_ID;
  if (!process.env.NOTION_TOKEN || !dbId) {
    return [];
  }

  try {
    const notion = getNotionClient();
    // Notion API 2025-09+ queries a database's data source, not the
    // database itself — resolve it first (single-source DB, so [0] is safe).
    const database = await notion.databases.retrieve({ database_id: dbId });
    const dataSourceId = 'data_sources' in database ? database.data_sources[0]?.id : undefined;
    if (!dataSourceId) return [];

    const response = await notion.dataSources.query({
      data_source_id: dataSourceId,
      filter: { property: 'Statut', select: { equals: 'Publié' } },
      sorts: [{ property: 'Date', direction: 'descending' }],
      page_size: 12,
    });

    return response.results.flatMap((page: any) => {
      if (!('properties' in page)) return [];
      const props = page.properties as Record<string, any>;

      const prenom = props['Prénom']?.title?.[0]?.plain_text ?? '';
      const activite = props['Activité']?.rich_text?.[0]?.plain_text ?? '';
      const ville = props['Ville']?.rich_text?.[0]?.plain_text ?? '';
      const avis = props['Avis']?.rich_text?.[0]?.plain_text ?? '';
      const note = typeof props['Note']?.number === 'number' ? props['Note'].number : 5;

      if (!prenom || !avis) return [];
      return [{ prenom, activite, ville, avis, note }];
    });
  } catch (error) {
    console.error('[Notion] Error fetching published testimonials:', error);
    return [];
  }
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
               : offre === 'audit'    ? 'Tunnel audit'
               : offre               ? 'Tunnel refonte'
               :                       'Contact direct';
  return { offreLabel, source };
}

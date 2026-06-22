#!/usr/bin/env node
/**
 * setup-notion-testimonials.mjs
 *
 * Crée la base Notion "Témoignages Pixeloria" avec le bon schéma
 * et affiche l'ID à ajouter dans Vercel.
 *
 * Usage :
 *   NOTION_TOKEN=secret_xxx node scripts/setup-notion-testimonials.mjs
 *
 * Prérequis :
 *   - NOTION_TOKEN dans l'env (même token que NOTION_TOKEN sur Vercel)
 *   - L'intégration Notion doit avoir accès à la page parente
 *     (passer l'ID de la page parente en argument optionnel)
 *
 *   node scripts/setup-notion-testimonials.mjs [PARENT_PAGE_ID]
 */

import { Client } from '@notionhq/client';

const token = process.env.NOTION_TOKEN;
if (!token) {
  console.error('❌  NOTION_TOKEN manquant.');
  console.error('   Usage : NOTION_TOKEN=secret_xxx node scripts/setup-notion-testimonials.mjs [PARENT_PAGE_ID]');
  process.exit(1);
}

const parentPageId = process.argv[2];
if (!parentPageId) {
  console.error('❌  Argument PARENT_PAGE_ID manquant.');
  console.error('   Trouvez l\'ID d\'une page Notion dans laquelle créer la base :');
  console.error('   URL Notion → notion.so/xxx → l\'ID est la partie après le dernier /');
  console.error('   Usage : NOTION_TOKEN=secret_xxx node scripts/setup-notion-testimonials.mjs abc123...');
  process.exit(1);
}

const notion = new Client({ auth: token });

console.log('🔧  Création de la base "Témoignages Pixeloria"...');

try {
  const db = await notion.databases.create({
    parent: { type: 'page_id', page_id: parentPageId },
    title: [{ type: 'text', text: { content: 'Témoignages Pixeloria' } }],
    icon: { type: 'emoji', emoji: '⭐' },
    properties: {
      'Prénom': { title: {} },
      'Activité': { rich_text: {} },
      'Ville': { rich_text: {} },
      'Avis': { rich_text: {} },
      'Note': { number: { format: 'number' } },
      'Source': {
        select: {
          options: [
            { name: 'FR', color: 'blue' },
            { name: 'EN', color: 'green' },
          ],
        },
      },
      'Statut': {
        select: {
          options: [
            { name: 'À publier', color: 'yellow' },
            { name: 'Publié', color: 'green' },
            { name: 'Refusé', color: 'red' },
          ],
        },
      },
      'Date': { date: {} },
    },
  });

  const dbId = db.id;
  const dbIdClean = dbId.replace(/-/g, '');

  console.log('');
  console.log('✅  Base créée avec succès !');
  console.log('');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('   NOTION_TESTIMONIALS_DB_ID à ajouter dans Vercel :');
  console.log('');
  console.log(`   ${dbId}`);
  console.log('');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('');
  console.log('📋  Étapes suivantes :');
  console.log('   1. Copier la valeur ci-dessus');
  console.log('   2. Vercel → Project → Settings → Environment Variables');
  console.log('      Ajouter : NOTION_TESTIMONIALS_DB_ID = ' + dbId);
  console.log('   3. Redéployer (ou merger la PR #100 → déclenche un deploy)');
  console.log('');
  console.log('🔗  Lien direct vers la base :');
  console.log(`   https://notion.so/${dbIdClean}`);

} catch (err) {
  console.error('❌  Erreur lors de la création :', err.message);
  if (err.code === 'object_not_found') {
    console.error('   → La page parente est introuvable ou l\'intégration n\'y a pas accès.');
    console.error('   → Dans Notion : ouvrir la page parente → ••• → Connexions → ajouter votre intégration.');
  }
  process.exit(1);
}

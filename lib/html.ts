/**
 * Échappe les caractères HTML sensibles dans une chaîne utilisateur avant
 * interpolation dans un template email. À utiliser sur tout champ provenant
 * d'un formulaire — jamais d'interpolation brute de saisie utilisateur.
 */
export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

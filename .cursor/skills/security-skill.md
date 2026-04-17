# Security skill (static web)

## Scope
Checklist sécurité pour pages HTML/CSS/JS sans backend.

## Baseline
- Toujours inclure `rel="noopener noreferrer"` sur liens externes `target="_blank"`.
- Éviter injection HTML dynamique non contrôlée (`innerHTML`) si données utilisateur.
- Garder des attributs `autocomplete` pertinents sur formulaires.
- Vérifier que les URL externes sont explicites et en HTTPS.

## Merge safety
- Si conflit sur balises meta/script externes, conserver la version la plus restrictive.
- Ne pas supprimer des balises de sécurité sans justification explicite.

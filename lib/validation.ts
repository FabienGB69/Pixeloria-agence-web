import { z } from 'zod';

/**
 * Schéma Zod partagé pour la validation du formulaire de lead.
 * Utilisé par la route App Router et potentiellement côté client.
 */
export const LeadSchema = z.object({
  prenom:     z.string().max(100).default(''),
  nom:        z.string().max(100).default(''),
  email:      z.string().email('Email invalide ou manquant').max(254),
  company:    z.string().max(200).default(''),
  offre:      z.string().max(100).default(''),
  message:    z.string().max(2000).default(''),
  phone:      z.string().max(30).default(''),
  url:        z.string().max(500).refine(v => !v || /^https?:\/\//.test(v), 'URL invalide').default(''),
  referralCode: z.string().max(50).default(''),
  painPoints: z.array(z.string().max(50)).default([]),
  objectives: z.array(z.string().max(100)).default([]),
  visiteurs:  z.coerce.number().int().nonnegative().nullable().default(null),
  leads:      z.coerce.number().int().nonnegative().nullable().default(null),
  // Champs optionnels — formulaire "Free Website Audit" (EN)
  businessCategory: z.string().max(100).default(''),
  city:             z.string().max(100).default(''),
  state:            z.string().max(50).default(''),
  mainGoal:         z.string().max(200).default(''),
});

export type LeadInput = z.infer<typeof LeadSchema>;

/**
 * Sanitise une valeur en string tronquée — helper partagé.
 * Evite d'injecter du contenu trop long dans les APIs tierces.
 */
export const safe = (v: unknown, max = 200): string =>
  String(v ?? '').trim().slice(0, max);

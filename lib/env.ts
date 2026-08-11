/**
 * lib/env.ts — Typed & validated environment variables
 *
 * Validates required env vars at module load time (server startup / build).
 * Any missing required variable throws immediately with a clear message,
 * preventing silent runtime failures deep inside API handlers.
 *
 * NOTE: This module is server-only. Never import it from client components.
 */

function requireEnv(key: string): string {
  const val = process.env[key];
  if (!val) throw new Error(`[env] Missing required environment variable: ${key}`);
  return val;
}

export const env = {
  // --- Required ---
  /** Notion integration token (secret_xxx) */
  NOTION_TOKEN: requireEnv('NOTION_TOKEN'),
  /** Notion database ID where leads are stored */
  NOTION_DB_ID: requireEnv('NOTION_DB_ID'),

  // --- Optional ---
  /** Resend API key for transactional emails (optional, email disabled if absent) */
  RESEND_API_KEY: process.env.RESEND_API_KEY as string | undefined,
  /** Recipient email for lead notifications */
  OWNER_EMAIL: process.env.OWNER_EMAIL ?? 'contact@pixeloria.fr',
  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN ?? 'https://pixeloria.fr',
} as const;

export type Env = typeof env;

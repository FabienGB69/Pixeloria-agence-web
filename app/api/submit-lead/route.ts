import { NextRequest, NextResponse } from 'next/server';
import { LeadSchema } from '@/lib/validation';
import { saveLead, resolveOffreAndSource } from '@/lib/notion';
import { sendConfirmation, notifyOwner } from '@/lib/resend';
import { safe } from '@/lib/validation';

// ─── CORS ─────────────────────────────────────────────────────────────────────

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? '*';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  ALLOWED_ORIGIN,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
} as const;

// ─── Rate limiting in-memory ──────────────────────────────────────────────────
// Max 5 requêtes par IP sur une fenêtre de 10 minutes.
// Note: se réinitialise au cold start — remplacer par Upstash Redis pour la
// persistance multi-instances en production.

interface RateEntry {
  count: number;
  start: number;
}

const RATE_MAP = new Map<string, RateEntry>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = RATE_MAP.get(ip) ?? { count: 0, start: now };

  if (now - entry.start > RATE_WINDOW_MS) {
    RATE_MAP.set(ip, { count: 1, start: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count += 1;
  RATE_MAP.set(ip, entry);
  return false;
}

// ─── Handlers ─────────────────────────────────────────────────────────────────

export function OPTIONS(): NextResponse {
  return new NextResponse(null, { status: 200, headers: CORS_HEADERS });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  // 1. Rate limiting
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Trop de tentatives. Réessayez dans quelques minutes.' },
      { status: 429, headers: CORS_HEADERS }
    );
  }

  // 2. Parse & validate body
  let rawBody: unknown;
  try {
    rawBody = await req.json();
  } catch {
    return NextResponse.json(
      { error: 'Corps de requête invalide (JSON attendu).' },
      { status: 400, headers: CORS_HEADERS }
    );
  }

  const parsed = LeadSchema.safeParse(rawBody);
  if (!parsed.success) {
    const firstError = parsed.error.errors[0]?.message ?? 'Données invalides';
    return NextResponse.json(
      { error: firstError },
      { status: 400, headers: CORS_HEADERS }
    );
  }

  const data = parsed.data;

  // 3. Vérification des variables d'environnement Notion
  if (!process.env.NOTION_TOKEN || !process.env.NOTION_DB_ID) {
    console.error('[submit-lead] Missing NOTION_TOKEN or NOTION_DB_ID');
    return NextResponse.json(
      { error: 'Service temporairement indisponible. Contactez-nous par email.' },
      { status: 503, headers: CORS_HEADERS }
    );
  }

  // 4. Calcul des métadonnées partagées
  const { offreLabel, source } = resolveOffreAndSource(data.offre);

  // 5. Log structuré
  console.log(
    JSON.stringify({
      ts:    new Date().toISOString(),
      ip,
      source,
      offre: offreLabel,
      email: safe(data.email, 254),
    })
  );

  // 6. Sauvegarde Notion — bloquante
  try {
    await saveLead(data);
  } catch (err) {
    const e = err as { code?: string; message?: string };
    console.error('[submit-lead] Notion SDK error:', e.code, e.message);
    return NextResponse.json(
      { error: 'Impossible de sauvegarder le lead. Réessayez ou contactez-nous.' },
      { status: 502, headers: CORS_HEADERS }
    );
  }

  // 7. Envoi des emails — non-bloquant (echecs silencieux loggés)
  const emailResults = await Promise.allSettled([
    sendConfirmation({
      email:      safe(data.email, 254),
      prenom:     safe(data.prenom, 100),
      offreLabel,
    }),
    notifyOwner({
      ...data,
      prenom:     safe(data.prenom, 100),
      nom:        safe(data.nom, 100),
      email:      safe(data.email, 254),
      phone:      safe(data.phone, 30),
      url:        safe(data.url, 500),
      message:    safe(data.message, 2000),
      offreLabel,
      source,
    }),
  ]);

  emailResults.forEach((result, index) => {
    if (result.status === 'rejected') {
      const reason = result.reason as { message?: string };
      console.error(`[submit-lead] email[${index}] failed:`, reason?.message);
    }
  });

  // 8. Réponse succès
  return NextResponse.json(
    { success: true },
    { status: 200, headers: CORS_HEADERS }
  );
}

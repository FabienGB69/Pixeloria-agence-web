import { NextRequest, NextResponse } from 'next/server';
import { LeadSchema } from '@/lib/validation';
import { saveLead, resolveOffreAndSource } from '@/lib/notion';
import { sendConfirmation, notifyOwner } from '@/lib/resend';
import { safe } from '@/lib/validation';
import { isHoneypot, verifyTurnstile, checkRateLimit } from '@/lib/security';

// ─── CORS ─────────────────────────────────────────────────────────────────────

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? 'https://pixeloria.fr';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin':  ALLOWED_ORIGIN,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
} as const;

// ─── Handlers ─────────────────────────────────────────────────────────────────

export function OPTIONS(): NextResponse {
  return new NextResponse(null, { status: 200, headers: CORS_HEADERS });
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  // 1. Rate limiting (Upstash Redis si configuré, sinon in-memory)
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    'unknown';

  try {
    if (await checkRateLimit(ip, 'submit-lead')) {
      return NextResponse.json(
        { error: 'Trop de tentatives. Réessayez dans quelques minutes.' },
        { status: 429, headers: CORS_HEADERS }
      );
    }
  } catch {
    // Redis indisponible — on laisse passer (fail open)
  }

  // 2. Parse body
  let rawBody: Record<string, unknown>;
  try {
    rawBody = await req.json();
  } catch {
    return NextResponse.json(
      { error: 'Corps de requête invalide (JSON attendu).' },
      { status: 400, headers: CORS_HEADERS }
    );
  }

  // 3. Honeypot — répondre 200 sans traitement pour tromper les bots
  if (isHoneypot(rawBody)) {
    return NextResponse.json({ success: true }, { status: 200, headers: CORS_HEADERS });
  }

  // 4. Cloudflare Turnstile (skip si CLOUDFLARE_TURNSTILE_SECRET_KEY absent)
  const turnstileValid = await verifyTurnstile(rawBody['_turnstile'] as string | undefined);
  if (!turnstileValid) {
    return NextResponse.json(
      { error: 'Vérification de sécurité échouée. Rechargez la page et réessayez.' },
      { status: 403, headers: CORS_HEADERS }
    );
  }

  // 5. Validate body avec Zod
  const parsed = LeadSchema.safeParse(rawBody);
  if (!parsed.success) {
    const firstError = parsed.error.errors[0]?.message ?? 'Données invalides';
    return NextResponse.json(
      { error: firstError },
      { status: 400, headers: CORS_HEADERS }
    );
  }

  const data = parsed.data;

  // 6. Vérification des variables d'environnement Notion
  if (!process.env.NOTION_TOKEN || !process.env.NOTION_DB_ID) {
    console.error('[submit-lead] Missing NOTION_TOKEN or NOTION_DB_ID');
    return NextResponse.json(
      { error: 'Service temporairement indisponible. Contactez-nous par email.' },
      { status: 503, headers: CORS_HEADERS }
    );
  }

  // 7. Calcul des métadonnées partagées
  const { offreLabel, source } = resolveOffreAndSource(data.offre);

  // 8. Log structuré
  console.log(
    JSON.stringify({
      ts:    new Date().toISOString(),
      ip,
      source,
      offre: offreLabel,
      email: safe(data.email, 254),
    })
  );

  // 9. Sauvegarde Notion — bloquante
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

  // 10. Envoi des emails — non-bloquant (echecs silencieux loggés)
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

  // 11. Réponse succès
  return NextResponse.json(
    { success: true },
    { status: 200, headers: CORS_HEADERS }
  );
}

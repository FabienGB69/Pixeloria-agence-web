import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { checkRateLimit } from '@/lib/security';
import { Resend } from 'resend';

// ─── Schema ───────────────────────────────────────────────────────────────────

const TestimonialSchema = z.object({
  prenom:   z.string().min(1).max(50),
  activite: z.string().min(1).max(100),
  ville:    z.string().min(1).max(100),
  avis:     z.string().min(10).max(1000),
  note:     z.coerce.number().int().min(1).max(5),
  accord:   z.literal('true').or(z.literal(true)),
});

// ─── Email template ───────────────────────────────────────────────────────────

function buildTestimonialHtml(
  prenom: string,
  activite: string,
  ville: string,
  avis: string,
  note: number,
): string {
  const escape = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const stars = '★'.repeat(note) + '☆'.repeat(5 - note);
  const escapedAvis    = escape(avis);
  const escapedPrenom  = escape(prenom);
  const escapedActivite = escape(activite);
  const escapedVille   = escape(ville);

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f8;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e5ef;">
        <tr>
          <td style="padding:28px 36px 20px;border-bottom:1px solid #f0f0f8;">
            <span style="font-size:20px;font-weight:800;background:linear-gradient(135deg,#7a5cff,#00d1ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Pixeloria</span>
            <span style="margin-left:12px;font-size:14px;color:#888;">Nouvel avis client</span>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 36px;">
            <h2 style="margin:0 0 8px;font-size:18px;color:#111;">Nouvel avis client ⭐ ×${note}</h2>
            <p style="margin:0 0 20px;font-size:22px;color:#f59e0b;letter-spacing:2px;">${stars}</p>
            <blockquote style="margin:0 0 24px;padding:16px 20px;background:#f8f8fc;border-left:4px solid #7a5cff;border-radius:0 8px 8px 0;font-size:15px;color:#333;line-height:1.7;font-style:italic;">
              ${escapedAvis}
            </blockquote>
            <p style="margin:0 0 24px;font-size:15px;color:#444;">
              <strong style="color:#111;">${escapedPrenom}</strong>
              &nbsp;·&nbsp;${escapedActivite}
              &nbsp;·&nbsp;${escapedVille}
            </p>
            <hr style="border:none;border-top:1px solid #eee;margin:0 0 16px;" />
            <p style="margin:0;font-size:13px;color:#888;">À intégrer sur pixeloria.fr/realisations</p>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 36px 24px;border-top:1px solid #f0f0f8;">
            <p style="margin:0;font-size:12px;color:#aaa;">
              Notif auto Pixeloria &nbsp;·&nbsp;
              <a href="https://pixeloria.fr" style="color:#7a5cff;text-decoration:none;">pixeloria.fr</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<NextResponse> {
  // 1. Rate limiting
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
  if (await checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Trop de tentatives. Réessayez dans quelques minutes.' },
      { status: 429 },
    );
  }

  // 2. Parse body
  let rawBody: Record<string, unknown>;
  try {
    rawBody = await req.json();
  } catch {
    return NextResponse.json(
      { error: 'Corps de requête invalide (JSON attendu).' },
      { status: 400 },
    );
  }

  // 3. Validate with Zod
  const parsed = TestimonialSchema.safeParse(rawBody);
  if (!parsed.success) {
    const firstError = parsed.error.errors[0]?.message ?? 'Données invalides';
    return NextResponse.json({ error: firstError }, { status: 400 });
  }

  const { prenom, activite, ville, avis, note } = parsed.data;

  // 4. Send email via Resend
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from:    'Pixeloria Notifs <contact@pixeloria.fr>',
        to:      'contact.pixeloria@gmail.com',
        subject: `⭐ Nouvel avis Pixeloria — ${prenom}, ${activite} à ${ville}`,
        html:    buildTestimonialHtml(prenom, activite, ville, avis, note),
      });
    } catch (err) {
      const e = err as { message?: string };
      console.error('[submit-testimonial] Resend error:', e.message);
      // Non-blocking: do not fail the request if email fails
    }
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

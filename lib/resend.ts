import { Resend } from 'resend';
import type { LeadInput } from './validation';

/**
 * Client Resend initialisé lazily.
 * Retourne null si RESEND_API_KEY n'est pas défini (emails désactivés en dev).
 */
function getResendClient(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

// ─── Types ────────────────────────────────────────────────────────────────────

export type ConfirmationPayload = Pick<LeadInput, 'email' | 'prenom'> & {
  offreLabel: string;
};

export type OwnerNotifPayload = LeadInput & {
  offreLabel: string;
  source: string;
};

// ─── Templates HTML ───────────────────────────────────────────────────────────

function buildConfirmationHtml(prenom: string, offreLabel: string): string {
  const greeting = prenom ? `Bonjour ${prenom},` : 'Bonjour,';
  const offreHtml =
    offreLabel !== 'Non précisé'
      ? `pour l'offre <strong style="color:#7a5cff;">${offreLabel}</strong>`
      : 'sur Pixeloria';

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f8;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:580px;background:#080810;border-radius:16px;overflow:hidden;">
        <tr>
          <td style="padding:32px 40px 24px;border-bottom:1px solid #1a1a2e;">
            <span style="font-size:22px;font-weight:800;background:linear-gradient(135deg,#7a5cff,#00d1ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Pixeloria</span>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 40px;color:#e8e8f0;">
            <p style="margin:0 0 16px;font-size:17px;">${greeting}</p>
            <p style="margin:0 0 20px;font-size:15px;line-height:1.6;color:#b0b0c8;">
              Nous avons bien reçu votre demande ${offreHtml}.<br>
              Notre équipe vous recontacte sous <strong style="color:#fff;">24h ouvrées</strong>.
            </p>
            <p style="margin:0 0 24px;font-size:15px;line-height:1.6;color:#b0b0c8;">
              En attendant, consultez nos réalisations sur notre site.
            </p>
            <a href="https://pixeloria.fr" style="display:inline-block;padding:12px 28px;background:linear-gradient(135deg,#7a5cff,#00d1ff);color:#fff;text-decoration:none;border-radius:50px;font-size:14px;font-weight:700;">
              Voir pixeloria.fr
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 40px 28px;border-top:1px solid #1a1a2e;">
            <p style="margin:0;font-size:13px;color:#6060a0;">
              — L'équipe Pixeloria &nbsp;·&nbsp;
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

function buildOwnerNotifHtml(data: OwnerNotifPayload): string {
  const escape = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const fullName = escape(
    [data.prenom, data.nom].filter(Boolean).join(' ') || 'Anonyme'
  );
  const email = escape(data.email);
  const company = data.company ? escape(data.company) : '—';
  const phone = data.phone ? escape(data.phone) : '—';
  const url = data.url ? escape(data.url) : '';
  // Les retours à la ligne (contexte audit gratuit ajouté au message) sont
  // convertis en <br> pour rester lisibles dans l'email.
  const message = data.message ? escape(data.message).replace(/\n/g, '<br>') : '—';

  const rows: [string, string][] = [
    ['Nom',       fullName],
    ['Entreprise', company],
    ['Email',     `<a href="mailto:${email}" style="color:#00d1ff;">${email}</a>`],
    ['Téléphone', phone],
    ['Site web',  url
      ? `<a href="${url}" style="color:#00d1ff;">${url}</a>`
      : '—'],
    ['Offre',     escape(data.offreLabel)],
    ['Source',    escape(data.source)],
    ['Message',   message],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) => `
    <tr>
      <td style="padding:8px 12px;background:#0d0d1f;color:#8080b0;font-size:13px;white-space:nowrap;border-bottom:1px solid #1a1a2e;">${label}</td>
      <td style="padding:8px 12px;color:#e8e8f0;font-size:13px;border-bottom:1px solid #1a1a2e;">${value}</td>
    </tr>`
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f4f4f8;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f8;padding:32px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#080810;border-radius:14px;overflow:hidden;">
        <tr>
          <td style="padding:24px 32px 16px;border-bottom:1px solid #1a1a2e;">
            <span style="font-size:18px;font-weight:800;background:linear-gradient(135deg,#7a5cff,#00d1ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">Pixeloria</span>
            <span style="margin-left:12px;font-size:14px;color:#8080b0;">Nouveau lead</span>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:8px;overflow:hidden;border:1px solid #1a1a2e;">
              ${rowsHtml}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 32px 24px;border-top:1px solid #1a1a2e;">
            <p style="margin:0;font-size:12px;color:#6060a0;">Notif auto Pixeloria · Vérifier dans Notion</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── Fonctions publiques ───────────────────────────────────────────────────────

/**
 * Envoie l'email de confirmation au prospect.
 * No-op si RESEND_API_KEY n'est pas défini.
 */
export async function sendConfirmation(
  data: ConfirmationPayload
): Promise<void> {
  const resend = getResendClient();
  if (!resend) return;

  await resend.emails.send({
    from:    'Pixeloria <contact@pixeloria.fr>',
    to:      data.email,
    subject: 'Votre demande est bien reçue — Pixeloria',
    html:    buildConfirmationHtml(data.prenom, data.offreLabel),
  });
}

/**
 * Notifie l'owner Pixeloria d'un nouveau lead.
 * No-op si RESEND_API_KEY n'est pas défini.
 */
export async function notifyOwner(data: OwnerNotifPayload): Promise<void> {
  const resend = getResendClient();
  if (!resend) return;

  const ownerEmail = process.env.OWNER_EMAIL || 'contact@pixeloria.fr';
  const fullName =
    [data.prenom, data.nom].filter(Boolean).join(' ') || 'Anonyme';

  await resend.emails.send({
    from:    'Pixeloria Notifs <contact@pixeloria.fr>',
    to:      ownerEmail,
    subject: `Nouveau lead — ${fullName} (${data.offreLabel})`,
    html:    buildOwnerNotifHtml(data),
  });
}

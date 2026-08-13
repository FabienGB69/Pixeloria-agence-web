import { Client } from '@notionhq/client';

export interface CreateReferralLeadInput {
  referralCode: string;
  referrerName: string;
  /** Free-text — the lead's stated need (e.g. the `offre` field). Not a
   * confirmed OFFERS_US id: nothing has been sold yet. */
  offerInterest: string;
  customerName: string;
  customerEmail: string;
}

let notionClient: Client | null = null;

function getNotionClient(): Client | null {
  if (!process.env.NOTION_TOKEN) return null;
  if (!notionClient) {
    notionClient = new Client({ auth: process.env.NOTION_TOKEN });
  }
  return notionClient;
}

/**
 * Records a US-market referral lead in the same Notion referrals database
 * FR uses (issue #155). Unlike FR's Stripe-triggered `createReferralRecord`
 * (lib/notion-referrals.ts), `/en/*` has no self-serve checkout, so this
 * fires at lead-submission time — before any offer is confirmed or paid.
 * "Reward Status" stays Pending and "Amount Total"/"Reward Amount" stay 0
 * until a human closes the deal and fills them in manually, using
 * lib/referral-rewards-us.ts's REFERRAL_REWARDS_US as the reference table.
 */
export async function createReferralLead(input: CreateReferralLeadInput): Promise<{ id: string } | null> {
  const client = getNotionClient();
  if (!client) {
    console.warn('[Notion] Notion client not available, skipping US referral lead record');
    return null;
  }

  const databaseId = process.env.NOTION_REFERRALS_DATABASE_ID;
  if (!databaseId) {
    console.warn('[Notion] NOTION_REFERRALS_DATABASE_ID not configured');
    return null;
  }

  try {
    const response = await client.pages.create({
      parent: { database_id: databaseId },
      properties: {
        'Referral Code':   { title: [{ text: { content: input.referralCode } }] },
        'Referrer Name':   { rich_text: [{ text: { content: input.referrerName } }] },
        'Offer ID':        { select: { name: `US lead — ${input.offerInterest || 'offer TBD'}` } },
        'Customer Name':   { rich_text: [{ text: { content: input.customerName } }] },
        'Customer Email':  { email: input.customerEmail },
        'Amount Total':    { number: 0 },
        'Checkout Session ID': { rich_text: [{ text: { content: '' } }] },
        'Payment Status':  { select: { name: 'unpaid' } },
        'Reward Status':   { select: { name: 'Pending' } },
        'Reward Amount':   { number: 0 },
        'Created At':      { date: { start: new Date().toISOString().split('T')[0] } },
      },
    });

    console.log(`[Notion] US referral lead recorded: ${response.id}`);
    return { id: response.id };
  } catch (error) {
    console.error('[Notion] Error creating US referral lead record:', error);
    return null;
  }
}

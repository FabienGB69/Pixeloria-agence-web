import { Client } from '@notionhq/client';

export interface CreateReferralRecordInput {
  referralCode: string;
  referrerName: string;
  offerId: 'site-vitrine' | 'option-visibilite';
  customerName: string;
  customerEmail: string;
  amountTotal: number;
  checkoutSessionId: string;
  paymentStatus: 'paid' | 'unpaid' | 'refunded';
  stripeCustomerId?: string;
  stripeSubscriptionId?: string;
}

let notionClient: Client | null = null;

/**
 * Initialize Notion client (lazy initialization)
 */
function getNotionClient(): Client | null {
  if (!process.env.NOTION_TOKEN) {
    console.warn('[Notion] NOTION_TOKEN not configured');
    return null;
  }

  if (!notionClient) {
    notionClient = new Client({ auth: process.env.NOTION_TOKEN });
  }

  return notionClient;
}

/**
 * Create or update a referral record in Notion database
 */
export async function createReferralRecord(
  input: CreateReferralRecordInput,
): Promise<{ id: string } | null> {
  const client = getNotionClient();
  if (!client) {
    console.warn('[Notion] Notion client not available, skipping referral record creation');
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
        // Title: referral code
        'Referral Code': {
          title: [
            {
              text: { content: input.referralCode },
            },
          ],
        },
        // Referrer (who referred)
        'Referrer Name': {
          rich_text: [
            {
              text: { content: input.referrerName },
            },
          ],
        },
        // Offer type
        'Offer ID': {
          select: { name: input.offerId },
        },
        // Customer details
        'Customer Name': {
          rich_text: [
            {
              text: { content: input.customerName },
            },
          ],
        },
        'Customer Email': {
          email: input.customerEmail,
        },
        // Payment info
        'Amount Total': {
          number: input.amountTotal / 100, // Convert from cents to euros
        },
        'Checkout Session ID': {
          rich_text: [
            {
              text: { content: input.checkoutSessionId },
            },
          ],
        },
        'Payment Status': {
          select: { name: input.paymentStatus },
        },
        // Stripe IDs
        'Stripe Customer ID': {
          rich_text: [
            {
              text: { content: input.stripeCustomerId || '' },
            },
          ],
        },
        'Stripe Subscription ID': {
          rich_text: [
            {
              text: { content: input.stripeSubscriptionId || '' },
            },
          ],
        },
        // Reward tracking
        'Reward Status': {
          select: {
            name: input.paymentStatus === 'paid' ? 'Triggered' : 'Pending',
          },
        },
        'Reward Amount': {
          number: input.offerId === 'site-vitrine' ? 100 : 25,
        },
        'Created At': {
          date: { start: new Date().toISOString().split('T')[0] },
        },
      },
    });

    console.log(`[Notion] Referral record created: ${response.id}`);
    return { id: response.id };
  } catch (error) {
    console.error('[Notion] Error creating referral record:', error);
    return null;
  }
}

/**
 * Update reward status in Notion for recurring rewards (Option Visibilité)
 */
export async function updateRewardStatus(
  checkoutSessionId: string,
  newStatus: 'Triggered' | 'Pending',
  subscriptionId?: string,
): Promise<boolean> {
  const client = getNotionClient();
  if (!client) {
    console.warn('[Notion] Notion client not available, skipping reward update');
    return false;
  }

  const databaseId = process.env.NOTION_REFERRALS_DATABASE_ID;
  if (!databaseId) {
    console.warn('[Notion] NOTION_REFERRALS_DATABASE_ID not configured');
    return false;
  }

  try {
    // Query for the referral record by Checkout Session ID
    const response = await client.databases.query({
      database_id: databaseId,
      filter: {
        property: 'Checkout Session ID',
        rich_text: { equals: checkoutSessionId },
      },
    });

    if (response.results.length === 0) {
      console.warn(`[Notion] No referral record found for session ${checkoutSessionId}`);
      return false;
    }

    const pageId = response.results[0].id;

    // Update the page with new reward status and subscription ID if provided
    const updatePayload: Record<string, unknown> = {
      'Reward Status': { select: { name: newStatus } },
    };

    if (subscriptionId) {
      updatePayload['Stripe Subscription ID'] = {
        rich_text: [{ text: { content: subscriptionId } }],
      };
    }

    await client.pages.update({
      page_id: pageId,
      properties: updatePayload,
    });

    console.log(`[Notion] Reward status updated for session ${checkoutSessionId}`);
    return true;
  } catch (error) {
    console.error('[Notion] Error updating reward status:', error);
    return false;
  }
}

import { stripe } from '@/lib/stripe';
import { createReferralRecord, updateRewardStatus } from '@/lib/notion-referrals';
import { getReferralPartner } from '@/lib/referral-partners';
import type Stripe from 'stripe';

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

if (!webhookSecret) {
  console.warn('[Stripe Webhook] STRIPE_WEBHOOK_SECRET not configured');
}

/**
 * Handle Stripe webhook events for referral program
 */
export async function POST(req: Request): Promise<Response> {
  if (!webhookSecret) {
    console.error('[Stripe Webhook] Webhook secret not configured');
    return new Response('Webhook secret not configured', { status: 500 });
  }

  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    console.error('[Stripe Webhook] No signature header');
    return new Response('No signature header', { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    console.error('[Stripe Webhook] Signature verification failed:', error);
    return new Response('Signature verification failed', { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session);
        break;

      case 'invoice.paid':
        await handleInvoicePaid(event.data.object as Stripe.Invoice);
        break;

      default:
        console.log(`[Stripe Webhook] Unhandled event type: ${event.type}`);
    }

    return new Response(JSON.stringify({ received: true }), { status: 200 });
  } catch (error) {
    console.error('[Stripe Webhook] Error processing event:', error);
    return new Response('Error processing event', { status: 500 });
  }
}

/**
 * Handle checkout.session.completed event
 * Triggered when payment is received for Site Vitrine
 */
async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  console.log(`[Stripe Webhook] Processing checkout session: ${session.id}`);

  // Extract referral code from client_reference_id or metadata
  const referralCode = session.client_reference_id || session.metadata?.referral_code;

  if (!referralCode) {
    console.warn(`[Stripe Webhook] No referral code found in session ${session.id}`);
    return;
  }

  const partner = getReferralPartner(referralCode);
  if (!partner) {
    console.warn(`[Stripe Webhook] Invalid referral code: ${referralCode}`);
    return;
  }

  // Get customer details
  const customerEmail = session.customer_details?.email || '';
  const customerName = session.customer_details?.name || 'Unknown';

  // Determine offer type from metadata
  const offerId = session.metadata?.offer_id as 'site-vitrine' | 'option-visibilite' || 'site-vitrine';

  // Create Notion record
  await createReferralRecord({
    referralCode,
    referrerName: partner.name,
    offerId,
    customerName,
    customerEmail,
    amountTotal: session.amount_total || 0,
    checkoutSessionId: session.id,
    paymentStatus: session.payment_status as 'paid' | 'unpaid' | 'refunded',
    stripeCustomerId: session.customer || undefined,
  });

  console.log(`[Stripe Webhook] Checkout session ${session.id} processed for referral ${referralCode}`);
}

/**
 * Handle invoice.paid event
 * Triggered monthly for Option Visibilité subscriptions
 */
async function handleInvoicePaid(invoice: Stripe.Invoice) {
  console.log(`[Stripe Webhook] Processing paid invoice: ${invoice.id}`);

  // Only process recurring invoices (subscription-related)
  if (!invoice.subscription) {
    console.log(`[Stripe Webhook] Invoice ${invoice.id} is not subscription-related, skipping`);
    return;
  }

  const subscriptionId = typeof invoice.subscription === 'string'
    ? invoice.subscription
    : invoice.subscription.id;

  // Get subscription details to find the original checkout session
  let subscription: Stripe.Subscription;
  try {
    subscription = await stripe.subscriptions.retrieve(subscriptionId);
  } catch (error) {
    console.error(`[Stripe Webhook] Error retrieving subscription ${subscriptionId}:`, error);
    return;
  }

  // Try to find the referral code in subscription metadata
  const referralCode = subscription.metadata?.referral_code;

  if (!referralCode) {
    console.warn(`[Stripe Webhook] No referral code found in subscription ${subscriptionId}`);
    return;
  }

  const partner = getReferralPartner(referralCode);
  if (!partner) {
    console.warn(`[Stripe Webhook] Invalid referral code in subscription: ${referralCode}`);
    return;
  }

  // Get the original checkout session ID from subscription
  const checkoutSessionId = subscription.metadata?.checkout_session_id;

  if (checkoutSessionId) {
    // Update Notion record with paid invoice info
    await updateRewardStatus(checkoutSessionId, 'Triggered', subscriptionId);
    console.log(`[Stripe Webhook] Monthly reward triggered for subscription ${subscriptionId}`);
  } else {
    console.warn(`[Stripe Webhook] No checkout session ID found for subscription ${subscriptionId}`);
  }
}

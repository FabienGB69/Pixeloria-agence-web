import Stripe from "stripe"

/**
 * Stripe API client — requires STRIPE_SECRET_KEY env var
 */
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY")
}

/**
 * Initialized Stripe client for payments & webhooks
 */
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2026-06-24.dahlia",
})

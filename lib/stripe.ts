import Stripe from "stripe"

let stripeClient: Stripe | null = null;

/**
 * Get Stripe API client — requires STRIPE_SECRET_KEY env var
 * Lazily initialized to allow builds without STRIPE_SECRET_KEY set
 */
export function getStripe(): Stripe {
  if (stripeClient) {
    return stripeClient;
  }

  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) {
    throw new Error("Missing STRIPE_SECRET_KEY")
  }

  stripeClient = new Stripe(apiKey, {
    apiVersion: "2026-06-24.dahlia",
  })

  return stripeClient;
}

/**
 * Stripe API client for payments & webhooks
 * Exported as a proxy that lazily initializes on first use
 */
export const stripe = new Proxy(
  {},
  {
    get: (_target, prop: string | symbol) => {
      return ((getStripe() as unknown) as Record<string | symbol, unknown>)[
        prop
      ];
    },
  },
) as unknown as Stripe;

import Stripe from 'stripe';
import * as fs from 'fs';
import * as path from 'path';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2026-06-24.dahlia',
});

const REDIRECT_URL = process.env.STRIPE_REDIRECT_URL || 'https://pixeloria.fr/merci';

interface PaymentLinkResult {
  name: string;
  productId: string;
  priceId: string;
  paymentLinkUrl: string;
  envVarName: string;
}

const results: PaymentLinkResult[] = [];

async function createPaymentLink(
  offerName: string,
  description: string,
  amount: number,
  recurring: boolean = false,
  envVarName: string,
): Promise<PaymentLinkResult | null> {
  try {
    console.log(`\n📦 Creating ${offerName}...`);

    // Create product
    const product = await stripe.products.create({
      name: offerName,
      description,
      metadata: {
        offer_id: offerName === 'Site Vitrine' ? 'site-vitrine' : 'option-visibilite',
        referral_program: 'pixeloria',
      },
    });
    console.log(`   ✓ Product created: ${product.id}`);

    // Create price
    const pricePayload: Stripe.PriceCreateParams = {
      product: product.id,
      unit_amount: amount,
      currency: 'eur',
      metadata: {
        offer_type: offerName === 'Site Vitrine' ? 'site-vitrine' : 'option-visibilite',
      },
    };

    if (recurring) {
      pricePayload.recurring = { interval: 'month' };
    }

    const price = await stripe.prices.create(pricePayload);
    console.log(`   ✓ Price created: ${price.id}`);

    // Create payment link
    const paymentLink = await stripe.paymentLinks.create({
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
      after_completion: {
        type: 'redirect',
        redirect: {
          url: `${REDIRECT_URL}?session_id={CHECKOUT_SESSION_ID}`,
        },
      },
      billing_address_collection: 'required',
      phone_number_collection: {
        enabled: true,
      },
      customer_creation: 'always',
      metadata: {
        offer_id: offerName === 'Site Vitrine' ? 'site-vitrine' : 'option-visibilite',
        offer_type: offerName,
        referral_program: 'pixeloria',
      },
    });
    console.log(`   ✓ Payment link created: ${paymentLink.url}`);

    return {
      name: offerName,
      productId: product.id,
      priceId: price.id,
      paymentLinkUrl: paymentLink.url,
      envVarName,
    };
  } catch (error) {
    console.error(`   ✗ Error creating ${offerName}:`, error);
    return null;
  }
}

async function main() {
  console.log('🚀 Creating Stripe Payment Links for Pixeloria Referral Program\n');

  // Create Site Vitrine (199€ one-time)
  const siteVitrine = await createPaymentLink(
    'Site Vitrine',
    'Professional website for SMEs and craft businesses',
    19900, // 199€ in cents
    false,
    'NEXT_PUBLIC_STRIPE_SITE_VITRINE_PAYMENT_LINK',
  );

  // Create Option Visibilité (49€/month)
  const optionVisibilite = await createPaymentLink(
    'Option Visibilité',
    'Local visibility and business directory listing',
    4900, // 49€ in cents
    true,
    'NEXT_PUBLIC_STRIPE_OPTION_VISIBILITE_PAYMENT_LINK',
  );

  if (siteVitrine) results.push(siteVitrine);
  if (optionVisibilite) results.push(optionVisibilite);

  if (results.length === 0) {
    console.error('\n❌ No payment links created. Check your Stripe API key.');
    process.exit(1);
  }

  // Generate .env snippet
  console.log('\n\n📝 Add these to your .env.local or environment variables:\n');
  console.log('# Stripe Payment Links for Referral Program');
  results.forEach((result) => {
    console.log(`${result.envVarName}=${result.paymentLinkUrl}`);
  });

  // Also output to a file for convenience
  const envContent = `# Stripe Payment Links for Referral Program\n${results
    .map((r) => `${r.envVarName}=${r.paymentLinkUrl}`)
    .join('\n')}\n`;

  const outputPath = path.join(process.cwd(), '.env.referral');
  fs.writeFileSync(outputPath, envContent);
  console.log(`\n✅ Environment variables saved to ${outputPath}`);

  // Save product/price IDs for reference
  const referenceContent = `# Stripe Referral Program Reference\n\n${results
    .map(
      (r) =>
        `## ${r.name}\nProduct ID: ${r.productId}\nPrice ID: ${r.priceId}\nPayment Link: ${r.paymentLinkUrl}\n`,
    )
    .join('\n')}`;

  const refPath = path.join(process.cwd(), '.stripe-referral-reference.md');
  fs.writeFileSync(refPath, referenceContent);
  console.log(`✅ Reference saved to ${refPath}`);
  console.log('\n🎉 Payment links created successfully!');
}

main().catch(console.error);

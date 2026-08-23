import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_TOKEN });

const PARENT_PAGE_ID = process.env.NOTION_PARENT_PAGE_ID;

if (!process.env.NOTION_TOKEN) {
  console.error('❌ Missing NOTION_TOKEN environment variable');
  process.exit(1);
}

if (!PARENT_PAGE_ID) {
  console.error('❌ Missing NOTION_PARENT_PAGE_ID environment variable');
  console.error('   Find your page ID in the Notion URL:');
  console.error('   https://notion.so/Your-Page-Title-<PAGE_ID>');
  process.exit(1);
}

async function createReferralsDatabase() {
  console.log('🚀 Creating Pixeloria Parrainages database in Notion...\n');

  const response = await notion.databases.create({
    parent: {
      type: 'page_id',
      page_id: PARENT_PAGE_ID!,
    },
    title: [
      {
        type: 'text',
        text: { content: 'Pixeloria Parrainages' },
      },
    ],
    icon: { type: 'emoji', emoji: '🤝' },
    // In @notionhq/client v5+, properties are nested inside initial_data_source
    initial_data_source: {
      properties: {
        // Title — referral code (primary key)
        'Referral Code': {
          type: 'title',
          title: {},
        },
        // Who referred the customer
        'Referrer Name': {
          type: 'rich_text',
          rich_text: {},
        },
        // Which offer was purchased
        'Offer ID': {
          type: 'select',
          select: {
            options: [
              { name: 'site-artisan', color: 'purple' },
              { name: 'option-visibilite', color: 'blue' },
            ],
          },
        },
        // Customer details
        'Customer Name': {
          type: 'rich_text',
          rich_text: {},
        },
        'Customer Email': {
          type: 'email',
          email: {},
        },
        // Payment info
        'Amount Total': {
          type: 'number',
          number: { format: 'euro' },
        },
        'Checkout Session ID': {
          type: 'rich_text',
          rich_text: {},
        },
        'Payment Status': {
          type: 'select',
          select: {
            options: [
              { name: 'paid', color: 'green' },
              { name: 'unpaid', color: 'yellow' },
              { name: 'refunded', color: 'red' },
            ],
          },
        },
        // Stripe IDs
        'Stripe Customer ID': {
          type: 'rich_text',
          rich_text: {},
        },
        'Stripe Subscription ID': {
          type: 'rich_text',
          rich_text: {},
        },
        // Reward tracking
        'Reward Status': {
          type: 'select',
          select: {
            options: [
              { name: 'Pending', color: 'yellow' },
              { name: 'Triggered', color: 'green' },
              { name: 'Cancelled', color: 'red' },
            ],
          },
        },
        'Reward Amount': {
          type: 'number',
          number: { format: 'euro' },
        },
        'Created At': {
          type: 'date',
          date: {},
        },
      },
    },
  });

  console.log('✅ Database created successfully!\n');
  console.log(`📋 Database ID: ${response.id}`);
  console.log(`🔗 URL: https://notion.so/${response.id.replace(/-/g, '')}\n`);
  console.log('─────────────────────────────────────────────');
  console.log('Add this to your .env.local:');
  console.log(`NOTION_REFERRALS_DATABASE_ID=${response.id}`);
  console.log('─────────────────────────────────────────────');

  return response.id;
}

createReferralsDatabase().catch((error) => {
  console.error('❌ Error creating database:', error.message || error);
  process.exit(1);
});

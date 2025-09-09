import Stripe from 'stripe';

// App Router: niente "config". Forziamo runtime Node e disabilitiamo cache.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

  // Con App Router il raw body si legge con req.text()
  const sig = req.headers.get('stripe-signature');
  const body = await req.text();

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || ''
    );
  } catch (err) {
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // TODO: gestisci gli eventi che ti servono
  if (event.type === 'checkout.session.completed') {
    // puoi leggere event.data.object
  }

  return new Response('ok', { status: 200 });
}

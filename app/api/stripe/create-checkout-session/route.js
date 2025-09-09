import Stripe from 'stripe';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');

  const { amount, success_url, cancel_url } = await req.json();

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card', 'sepa_debit'],
    line_items: [
      {
        price_data: {
          currency: 'eur',
          unit_amount: amount, // in centesimi
          product_data: { name: 'Commissione inquilino' },
        },
        quantity: 1,
      },
    ],
    success_url,
    cancel_url,
  });

  return Response.json({ id: session.id, url: session.url });
}

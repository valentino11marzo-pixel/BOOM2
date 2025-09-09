import Stripe from 'stripe'
export async function POST(req){const body=await req.text();const sig=req.headers.get('stripe-signature');const stripe=new Stripe(process.env.STRIPE_SECRET_KEY||'');let event;try{event=stripe.webhooks.constructEvent(body,sig,process.env.STRIPE_WEBHOOK_SECRET||'')}catch(err){return new Response('Webhook Error: '+err.message,{status:400})}return new Response('ok',{status:200})}
export const config={api:{bodyParser:false}}

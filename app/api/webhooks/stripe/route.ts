import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { db } from '@/lib/db'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')!

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.CheckoutSession
      const userId = session.metadata?.userId
      const plan = session.metadata?.plan

      if (userId && plan) {
        await db.user.update({
          where: { id: userId },
          data: {
            plan: plan as 'FREE' | 'PRO' | 'ENTERPRISE',
            stripeCustomerId: session.customer as string,
          },
        })
      }
      break
    }
    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription
      await db.user.updateMany({
        where: { stripeCustomerId: subscription.customer as string },
        data: { plan: 'FREE' },
      })
      break
    }
  }

  return NextResponse.json({ received: true })
}

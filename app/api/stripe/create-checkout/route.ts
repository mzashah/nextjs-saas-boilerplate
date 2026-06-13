import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { stripe, STRIPE_PLANS } from '@/lib/stripe'
import { db } from '@/lib/db'

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { plan } = await req.json()

  const user = await db.user.findUnique({
    where: { email: session.user.email },
  })

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  const selectedPlan = STRIPE_PLANS[plan as keyof typeof STRIPE_PLANS]
  if (!selectedPlan?.priceId) {
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    customer_email: user.email,
    line_items: [{ price: selectedPlan.priceId, quantity: 1 }],
    mode: 'subscription',
    success_url: `${process.env.NEXTAUTH_URL}/billing?success=true`,
    cancel_url: `${process.env.NEXTAUTH_URL}/billing?canceled=true`,
    metadata: { userId: user.id, plan },
  })

  return NextResponse.json({ url: checkoutSession.url })
}

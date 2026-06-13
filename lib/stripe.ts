import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
  typescript: true,
})

export const STRIPE_PLANS = {
  FREE: {
    name: 'Free',
    price: 0,
    priceId: null,
    features: ['Up to 3 projects', '1GB storage', 'Basic analytics', 'Email support'],
  },
  PRO: {
    name: 'Pro',
    price: 29,
    priceId: process.env.STRIPE_PRO_PRICE_ID,
    features: ['Unlimited projects', '50GB storage', 'Advanced analytics', 'Priority support', 'Custom domain'],
  },
  ENTERPRISE: {
    name: 'Enterprise',
    price: 99,
    priceId: process.env.STRIPE_ENTERPRISE_PRICE_ID,
    features: ['Everything in Pro', 'Unlimited storage', 'Dedicated support', 'SLA guarantee', 'Custom integrations'],
  },
}

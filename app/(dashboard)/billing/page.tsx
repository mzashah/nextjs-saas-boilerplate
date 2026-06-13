'use client'

import { useState } from 'react'

const plans = [
  {
    name: 'Free',
    price: 0,
    features: ['Up to 3 projects', '1GB storage', 'Basic analytics', 'Email support'],
    cta: 'Current Plan',
    current: true,
  },
  {
    name: 'Pro',
    price: 29,
    features: ['Unlimited projects', '50GB storage', 'Advanced analytics', 'Priority support', 'Custom domain'],
    cta: 'Upgrade to Pro',
    current: false,
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    features: ['Everything in Pro', 'Unlimited storage', 'Dedicated support', 'SLA guarantee', 'Custom integrations'],
    cta: 'Contact Sales',
    current: false,
  },
]

export default function BillingPage() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleUpgrade = async (planName: string) => {
    setLoading(planName)
    try {
      const res = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planName.toUpperCase() }),
      })
      const data = await res.json()
      if (data.url) window.location.href = data.url
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Billing & Plans</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Choose the plan that works best for you.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl p-6 border ${
              plan.highlighted
                ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 shadow-lg'
                : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
            }`}
          >
            {plan.highlighted && (
              <span className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
            <div className="mt-2 mb-6">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">${plan.price}</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <span className="text-green-500">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              onClick={() => !plan.current && handleUpgrade(plan.name)}
              disabled={plan.current || loading === plan.name}
              className={`w-full py-3 rounded-xl font-semibold transition ${
                plan.current
                  ? 'bg-gray-100 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
                  : plan.highlighted
                  ? 'bg-purple-600 hover:bg-purple-700 text-white'
                  : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {loading === plan.name ? 'Loading...' : plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

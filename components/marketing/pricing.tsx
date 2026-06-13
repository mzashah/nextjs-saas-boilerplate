'use client'

const plans = [
  {
    name: 'Free',
    price: 0,
    description: 'Perfect for getting started',
    features: ['Up to 3 projects', '1GB storage', 'Basic analytics', 'Email support'],
    cta: 'Get Started',
    href: '/register',
  },
  {
    name: 'Pro',
    price: 29,
    description: 'For growing businesses',
    features: ['Unlimited projects', '50GB storage', 'Advanced analytics', 'Priority support', 'Custom domain'],
    cta: 'Start Free Trial',
    href: '/register',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    description: 'For large organizations',
    features: ['Everything in Pro', 'Unlimited storage', 'Dedicated support', 'SLA guarantee', 'Custom integrations'],
    cta: 'Contact Sales',
    href: '/contact',
  },
]

export function PricingSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Simple, transparent pricing</h2>
          <p className="text-slate-400 text-lg">No hidden fees. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-purple-600 shadow-2xl shadow-purple-500/25 scale-105'
                  : 'bg-slate-800/50 border border-slate-700'
              }`}
            >
              <h3 className="text-xl font-bold text-white">{plan.name}</h3>
              <p className={`text-sm mt-1 ${plan.highlighted ? 'text-purple-200' : 'text-slate-400'}`}>
                {plan.description}
              </p>
              <div className="mt-6 mb-8">
                <span className="text-5xl font-bold text-white">${plan.price}</span>
                <span className={plan.highlighted ? 'text-purple-200' : 'text-slate-400'}>/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span className={plan.highlighted ? 'text-purple-200' : 'text-green-400'}>✓</span>
                    <span className={plan.highlighted ? 'text-white' : 'text-slate-300'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                className={`block text-center py-3 rounded-xl font-semibold transition ${
                  plan.highlighted
                    ? 'bg-white text-purple-600 hover:bg-purple-50'
                    : 'border border-slate-600 text-white hover:bg-slate-700'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: '⚡',
    title: 'Next.js 14 App Router',
    description: 'Built with the latest Next.js features including Server Components and streaming.',
  },
  {
    icon: '🔐',
    title: 'Authentication Ready',
    description: 'NextAuth.js v5 with Google, GitHub, and email/password providers pre-configured.',
  },
  {
    icon: '💳',
    title: 'Stripe Payments',
    description: 'Full subscription billing with Stripe Checkout, webhooks, and customer portal.',
  },
  {
    icon: '💾',
    title: 'Database with Prisma',
    description: 'Type-safe database access with Prisma ORM and PostgreSQL, ready to deploy.',
  },
  {
    icon: '🎨',
    title: 'Beautiful UI',
    description: 'Tailwind CSS with a custom design system and dark mode support out of the box.',
  },
  {
    icon: '📧',
    title: 'Email Integration',
    description: 'Transactional emails powered by Resend with beautiful templates.',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Everything you need to ship</h2>
          <p className="text-slate-400 text-lg">Stop building boilerplate. Start building your product.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition">
              <span className="text-3xl mb-4 block">{feature.icon}</span>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

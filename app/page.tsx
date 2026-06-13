import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-bold text-white">SaaSApp</div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-slate-300 hover:text-white transition">
            Login
          </Link>
          <Link href="/register" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition">
            Get Started
          </Link>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 text-purple-300 text-sm mb-8">
          ✨ Production-ready SaaS Template
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Build your SaaS
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            {' '}faster
          </span>
        </h1>
        <p className="text-xl text-slate-300 mb-10 max-w-2xl">
          A complete Next.js 14 boilerplate with authentication, payments, database,
          and everything you need to launch your SaaS product today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/register" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition transform hover:scale-105">
            Start Building Free →
          </Link>
          <Link href="https://github.com/mzashah/nextjs-saas-boilerplate" className="border border-slate-600 hover:border-slate-400 text-white px-8 py-4 rounded-xl text-lg font-semibold transition">
            View on GitHub
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Next.js 14', icon: '⚡' },
            { label: 'Stripe Payments', icon: '💳' },
            { label: 'Auth Ready', icon: '🔐' },
            { label: 'Dark Mode', icon: '🌙' },
          ].map((feature) => (
            <div key={feature.label} className="flex flex-col items-center gap-2">
              <span className="text-3xl">{feature.icon}</span>
              <span className="text-slate-300 text-sm">{feature.label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

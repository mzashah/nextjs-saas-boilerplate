import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create account</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Start your free 14-day trial</p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
              <input type="text" className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none transition" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input type="email" className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none transition" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
              <input type="password" className="w-full border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 bg-transparent text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 outline-none transition" placeholder="Min 8 characters" />
            </div>
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl py-3 font-semibold transition">
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
            Already have an account?{' '}
            <Link href="/login" className="text-purple-600 hover:text-purple-500 font-medium">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

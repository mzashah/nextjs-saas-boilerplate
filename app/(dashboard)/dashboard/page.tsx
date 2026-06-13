export default function DashboardPage() {
  const stats = [
    { label: 'Total Revenue', value: '$45,231', change: '+20.1%', positive: true },
    { label: 'Active Users', value: '2,350', change: '+15.3%', positive: true },
    { label: 'New Signups', value: '+573', change: '+8.2%', positive: true },
    { label: 'Churn Rate', value: '2.4%', change: '-0.4%', positive: true },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Welcome back! Here&apos;s what&apos;s happening.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</p>
            <p className={`text-sm mt-1 ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function useSubscription() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const upgrade = async (plan: 'PRO' | 'ENTERPRISE') => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (error) {
      console.error('Subscription upgrade failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return { upgrade, isLoading }
}

import { User as PrismaUser } from '@prisma/client'

export type User = PrismaUser

export interface DashboardStats {
  totalRevenue: number
  activeUsers: number
  newSignups: number
  churnRate: number
}

export interface Plan {
  name: string
  price: number
  priceId: string | null | undefined
  features: string[]
}

export type SubscriptionStatus = 'active' | 'canceled' | 'past_due' | 'trialing'

# Next.js SaaS Boilerplate

A production-ready SaaS starter template built with Next.js 14, TypeScript, Tailwind CSS, and Prisma.

## Features

- ⚡ Next.js 14 with App Router
- 🔐 Authentication with NextAuth.js (Google, GitHub, Email)
- 💾 Database with Prisma ORM + PostgreSQL
- 💳 Stripe subscription payments
- 🎨 Beautiful UI with Tailwind CSS + shadcn/ui
- 🌙 Dark/Light mode
- 📊 Analytics dashboard
- 📧 Email with Resend
- 🚀 Deploy-ready for Vercel

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: PostgreSQL + Prisma
- **Auth**: NextAuth.js v5
- **Payments**: Stripe
- **Email**: Resend
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Stripe account
- Google/GitHub OAuth credentials

### Installation

\`\`\`bash
git clone https://github.com/mzashah/nextjs-saas-boilerplate
cd nextjs-saas-boilerplate
npm install
cp .env.example .env.local
\`\`\`

### Environment Variables

\`\`\`env
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
STRIPE_SECRET_KEY="sk_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
RESEND_API_KEY="re_..."
\`\`\`

### Database Setup

\`\`\`bash
npx prisma migrate dev
npx prisma db seed
\`\`\`

### Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

\`\`\`
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   ├── settings/
│   │   └── billing/
│   ├── api/
│   │   ├── auth/
│   │   ├── stripe/
│   │   └── webhooks/
│   └── layout.tsx
├── components/
│   ├── ui/
│   ├── dashboard/
│   └── marketing/
├── lib/
│   ├── auth.ts
│   ├── db.ts
│   ├── stripe.ts
│   └── utils.ts
├── prisma/
│   └── schema.prisma
└── public/
\`\`\`

## Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mzashah/nextjs-saas-boilerplate)

## License

MIT License - feel free to use this for your projects!

## Author

Built by [Zohaib Ali Shah](https://github.com/mzashah) - Full-Stack Developer with 15 years of experience.

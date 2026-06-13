import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWelcomeEmail(email: string, name: string) {
  return resend.emails.send({
    from: process.env.EMAIL_FROM ?? 'noreply@yourdomain.com',
    to: email,
    subject: 'Welcome to SaaSApp!',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #7c3aed;">Welcome to SaaSApp, ${name}!</h1>
        <p>Thanks for signing up. You're now on the Free plan.</p>
        <p>Here's what you can do next:</p>
        <ul>
          <li>Set up your first project</li>
          <li>Invite your team members</li>
          <li>Explore the dashboard</li>
        </ul>
        <a href="${process.env.NEXTAUTH_URL}/dashboard" 
           style="display: inline-block; background: #7c3aed; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-top: 16px;">
          Go to Dashboard
        </a>
      </div>
    `,
  })
}

export async function sendPasswordResetEmail(email: string, resetUrl: string) {
  return resend.emails.send({
    from: process.env.EMAIL_FROM ?? 'noreply@yourdomain.com',
    to: email,
    subject: 'Reset your password',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #7c3aed;">Reset your password</h1>
        <p>Click the link below to reset your password. This link expires in 1 hour.</p>
        <a href="${resetUrl}" 
           style="display: inline-block; background: #7c3aed; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; margin-top: 16px;">
          Reset Password
        </a>
        <p style="color: #666; margin-top: 16px; font-size: 14px;">If you didn't request this, you can safely ignore this email.</p>
      </div>
    `,
  })
}

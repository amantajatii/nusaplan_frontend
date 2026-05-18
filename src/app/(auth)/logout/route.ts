import { NextResponse } from 'next/server'
import { clearIdTokenCookie } from '@/lib/session'

export async function POST() {
  await clearIdTokenCookie()
  return NextResponse.redirect(new URL('/', process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'))
}

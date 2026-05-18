'use server'

import { setIdTokenCookie, clearIdTokenCookie } from '@/lib/session'

export async function setSession(idToken: string): Promise<void> {
  await setIdTokenCookie(idToken)
}

export async function clearSession(): Promise<void> {
  await clearIdTokenCookie()
}

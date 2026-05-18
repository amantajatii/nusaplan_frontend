import { cookies } from 'next/headers'

const COOKIE_NAME = 'nusaplan_id_token'
const MAX_AGE = 55 * 60 // 55 minutes in seconds

export async function getIdTokenFromCookie(): Promise<string | undefined> {
  const store = await cookies()
  return store.get(COOKIE_NAME)?.value
}

export async function setIdTokenCookie(token: string): Promise<void> {
  const store = await cookies()
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: MAX_AGE,
    secure: process.env.NODE_ENV === 'production',
  })
}

export async function clearIdTokenCookie(): Promise<void> {
  const store = await cookies()
  store.set(COOKIE_NAME, '', { maxAge: 0, path: '/' })
}

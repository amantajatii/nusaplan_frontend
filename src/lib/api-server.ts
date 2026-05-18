import { getIdTokenFromCookie } from './session'
import { unwrap } from './api'

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:8080'

type AuthMode = boolean | 'optional'

interface FetchOptions extends RequestInit {
  auth?: AuthMode
  query?: Record<string, string | number | undefined | null>
}

export async function serverFetch<T>(
  path: string,
  { auth = false, query, ...init }: FetchOptions = {}
): Promise<T> {
  const url = new URL(path, BASE)
  if (query) {
    for (const [k, v] of Object.entries(query)) {
      if (v != null && v !== '') url.searchParams.set(k, String(v))
    }
  }

  const headers = new Headers(init.headers as HeadersInit | undefined)
  headers.set('Content-Type', 'application/json')

  if (auth) {
    const token = await getIdTokenFromCookie()
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    } else if (auth !== 'optional') {
      throw new Error('Unauthenticated')
    }
  }

  const res = await fetch(url.toString(), {
    cache: 'no-store',
    ...init,
    headers,
  })

  return unwrap<T>(res)
}

'use client'

import { getFirebaseAuth } from './firebase/client'
import { unwrap } from './api'
import { ApiError } from './types'

const BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:8080'

interface FetchOptions extends RequestInit {
  auth?: boolean | 'optional'
  query?: Record<string, string | number | undefined | null>
}

export async function clientFetch<T>(
  path: string,
  { auth: authMode = false, query, ...init }: FetchOptions = {}
): Promise<T> {
  const url = new URL(path, BASE)
  if (query) {
    for (const [k, v] of Object.entries(query)) {
      if (v != null && v !== '') url.searchParams.set(k, String(v))
    }
  }

  const headers = new Headers(init.headers as HeadersInit | undefined)
  if (!(init.body instanceof FormData)) {
    headers.set('Content-Type', 'application/json')
  }

  if (authMode) {
    const user = getFirebaseAuth().currentUser
    if (user) {
      const token = await user.getIdToken()
      headers.set('Authorization', `Bearer ${token}`)
    } else if (authMode !== 'optional') {
      throw new ApiError(401, 'Not signed in')
    }
  }

  const res = await fetch(url.toString(), { ...init, headers })
  return unwrap<T>(res)
}

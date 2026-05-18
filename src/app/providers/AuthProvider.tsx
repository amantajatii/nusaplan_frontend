'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { User } from 'firebase/auth'
import { onIdTokenChanged } from 'firebase/auth'
import { getFirebaseAuth } from '@/lib/firebase/client'
import { setSession, clearSession } from '@/app/_actions/session'

interface AuthContextValue {
  user: User | null
  loading: boolean
}

const AuthContext = createContext<AuthContextValue>({ user: null, loading: true })

export function useAuth() {
  return useContext(AuthContext)
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onIdTokenChanged(getFirebaseAuth(), async (u) => {
      setUser(u)
      setLoading(false)
      if (u) {
        const token = await u.getIdToken()
        await setSession(token)
      } else {
        await clearSession()
      }
    })
    return unsub
  }, [])

  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>
}

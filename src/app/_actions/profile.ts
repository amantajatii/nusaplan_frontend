'use server'

import { serverFetch } from '@/lib/api-server'
import { UserProfile } from '@/lib/types'

export async function syncProfile(data?: { username?: string; avatar_url?: string }): Promise<UserProfile> {
  return serverFetch<UserProfile>('/api/auth/sync-profile', {
    method: 'POST',
    auth: true,
    body: JSON.stringify(data ?? {}),
  })
}

export async function updateProfile(data: { username?: string; avatar_url?: string }): Promise<UserProfile> {
  return serverFetch<UserProfile>('/api/user/profile', {
    method: 'PATCH',
    auth: true,
    body: JSON.stringify(data),
  })
}

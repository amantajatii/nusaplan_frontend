'use server'

import { serverFetch } from '@/lib/api-server'
import type { Destination } from '@/lib/types'

export async function listFavorites(): Promise<string[]> {
  try {
    return await serverFetch<string[]>('/api/user/favorites', { auth: true })
  } catch {
    return []
  }
}

export async function addFavorite(destId: string): Promise<void> {
  await serverFetch<{ destination_id: string }>(`/api/user/favorites/${destId}`, {
    method: 'POST',
    auth: true,
  })
}

export async function removeFavorite(destId: string): Promise<void> {
  await serverFetch<{ success: true }>(`/api/user/favorites/${destId}`, {
    method: 'DELETE',
    auth: true,
  })
}

export async function getFavoriteDestinations(): Promise<Destination[]> {
  try {
    const ids = await listFavorites()
    if (ids.length === 0) return []
    const results = await Promise.all(
      ids.map((id) =>
        serverFetch<Destination>(`/api/destinations/${id}`, { auth: 'optional' }).catch(() => null)
      )
    )
    return results.filter((d): d is Destination => d !== null)
  } catch {
    return []
  }
}

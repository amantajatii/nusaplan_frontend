'use server'

import { serverFetch } from '@/lib/api-server'

export interface Notification {
  id: string
  title: string
  body: string
  type: 'welcome' | 'trip' | 'system'
  read: boolean
  link?: string | null
  created_at: string | null
}

export async function listNotifications(): Promise<Notification[]> {
  try {
    return await serverFetch<Notification[]>('/api/user/notifications', { auth: true })
  } catch {
    return []
  }
}

export async function markNotifRead(notifId: string): Promise<void> {
  await serverFetch<{ success: true }>(`/api/user/notifications/${notifId}/read`, {
    method: 'POST',
    auth: true,
  })
}

export async function markAllNotifsRead(): Promise<void> {
  await serverFetch<{ updated: number }>('/api/user/notifications/mark-all-read', {
    method: 'POST',
    auth: true,
  })
}

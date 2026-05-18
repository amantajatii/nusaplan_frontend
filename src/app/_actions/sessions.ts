'use server'

import { serverFetch } from '@/lib/api-server'

export interface ChatSessionMeta {
  id: string
  title: string
  last_message_at: string | null
  created_at: string | null
}

export interface ChatSessionFull extends ChatSessionMeta {
  messages: unknown[]
}

export async function listSessions(): Promise<ChatSessionMeta[]> {
  try {
    return await serverFetch<ChatSessionMeta[]>('/api/planner/sessions', { auth: true })
  } catch {
    return []
  }
}

export async function getSession(sessionId: string): Promise<ChatSessionFull | null> {
  try {
    return await serverFetch<ChatSessionFull>(`/api/planner/sessions/${sessionId}`, { auth: true })
  } catch {
    return null
  }
}

export async function createSession(title: string, messages: unknown[]): Promise<{ id: string } | null> {
  try {
    return await serverFetch<{ id: string }>('/api/planner/sessions', {
      method: 'POST',
      auth: true,
      body: JSON.stringify({ title, messages }),
    })
  } catch {
    return null
  }
}

export async function updateSession(sessionId: string, messages: unknown[]): Promise<void> {
  try {
    await serverFetch<{ success: true }>(`/api/planner/sessions/${sessionId}`, {
      method: 'PUT',
      auth: true,
      body: JSON.stringify({ messages }),
    })
  } catch {
    // best-effort
  }
}

export async function deleteSession(sessionId: string): Promise<void> {
  await serverFetch<{ success: true }>(`/api/planner/sessions/${sessionId}`, {
    method: 'DELETE',
    auth: true,
  })
}

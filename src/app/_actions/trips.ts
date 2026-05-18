'use server'

import { serverFetch } from '@/lib/api-server'
import { Itinerary } from '@/lib/types'
import { redirect } from 'next/navigation'

export async function saveTrip(itinerary: Itinerary): Promise<{ trip_id: string }> {
  return serverFetch<{ trip_id: string }>('/api/planner/save', {
    method: 'POST',
    auth: true,
    body: JSON.stringify(itinerary),
  })
}

export async function deleteTrip(tripId: string): Promise<void> {
  await serverFetch<{ success: true }>(`/api/planner/trips/${tripId}`, {
    method: 'DELETE',
    auth: true,
  })
  redirect('/dashboard')
}

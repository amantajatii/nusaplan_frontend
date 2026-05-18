'use server'

import { serverFetch } from '@/lib/api-server'
import { GenerateResult } from '@/lib/types'

export async function generateItinerary(rawInput: string): Promise<GenerateResult> {
  return serverFetch<GenerateResult>('/api/planner/generate', {
    method: 'POST',
    auth: 'optional',
    body: JSON.stringify({ rawInput }),
  })
}

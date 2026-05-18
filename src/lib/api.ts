import { ApiError } from './types'

interface Envelope<T> {
  data: T | null
  error: string | null
  status: number
}

export async function unwrap<T>(res: Response): Promise<T> {
  const json: Envelope<T> = await res.json()
  if (json.error !== null || json.data === null) {
    throw new ApiError(res.status, json.error ?? 'Unknown error')
  }
  return json.data
}

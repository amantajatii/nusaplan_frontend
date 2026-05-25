export interface UserProfile {
  uid: string
  email: string
  username: string | null
  avatar_url: string | null
  created_at: string
  updated_at: string
}

export interface UserStats {
  total_trips: number
  total_budget_spent: number
}

export interface Destination {
  id: string
  name: string
  city: string
  mood: string[]
  category: string | null
  description: string | null
  tips: string | null
  opening_hours: string | null
  price_range: string | null
  cover_image_url: string | null
  created_at: string
  updated_at: string
}

export interface DestinationsPage {
  items: Destination[]
  nextCursor: string | null
  total: number
}

export interface Activity {
  id?: string
  time: string
  place_name: string
  category: string
  description: string
  estimated_cost: number
  maps_query: string
}

export interface ItineraryDay {
  id?: string
  day_number: number
  day_label: string
  activities: Activity[]
}

export interface Itinerary {
  title: string
  mood: string
  city: string
  duration_days: number
  budget_estimate: number
  days: ItineraryDay[]
}

export interface ClarificationResult {
  needsClarification: true
  questions: string[]
  partial?: {
    mood?: string
    city?: string
    duration_days?: number
    budget?: number
    jumlah_orang?: number
  }
}

export type GenerateResult = Itinerary | ClarificationResult

export interface Trip {
  id: string
  title: string
  mood: string | null
  city: string
  duration_days: number
  budget_estimate: number
  session_id: string | null
  status: string
  created_at: string
  updated_at: string
}

export interface TripDetail extends Trip {
  days: ItineraryDay[]
}

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message)
    this.name = 'ApiError'
  }
}

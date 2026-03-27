export type WaitlistSource = 'header' | 'hero' | 'cta-final' | 'pricing' | 'unknown'

export interface WaitlistPayload {
  source: WaitlistSource
  email: string
  number: string
  name: string
}

export interface WaitlistResponse {
  success: boolean
  message?: string
  data?: unknown
}

export interface WaitlistError {
  message: string
  field?: "name" | "email" | "number"
}

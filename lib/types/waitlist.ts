export type WaitlistSource = 'header' | 'hero' | 'cta-final' | 'pricing' | 'unknown'

export interface WaitlistPayload {
  source: string
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
  field?: string
}


export const API_BASE_URL = 
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export const API_ENDPOINTS = {
  WAITLIST: `${API_BASE_URL}/api/v1/platforms/wait-list`,
} as const


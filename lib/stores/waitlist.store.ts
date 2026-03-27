import { create } from 'zustand'
import { WaitlistSource } from '@/lib/types/waitlist'

interface WaitlistStore {
  source: WaitlistSource
  setSource: (source: WaitlistSource) => void
  reset: () => void
}

export const useWaitlistStore = create<WaitlistStore>((set) => ({
  source: 'unknown',
  setSource: (source) => set({ source }),
  reset: () => set({ source: 'unknown' }),
}))

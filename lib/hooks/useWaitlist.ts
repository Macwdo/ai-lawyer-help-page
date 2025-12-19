"use client"

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { create } from 'zustand'
import { submitWaitlist, validateWaitlistForm } from '@/lib/services/waitlist.service'
import { WaitlistPayload, WaitlistError } from '@/lib/types/waitlist'

interface WaitlistState {
  isLoading: boolean
  error: WaitlistError | null
  setLoading: (loading: boolean) => void
  setError: (error: WaitlistError | null) => void
  reset: () => void
}

const useWaitlistState = create<WaitlistState>((set) => ({
  isLoading: false,
  error: null,
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  reset: () => set({ isLoading: false, error: null }),
}))

interface UseWaitlistReturn {
  isLoading: boolean
  error: WaitlistError | null
  submit: (payload: Omit<WaitlistPayload, 'source'> & { source: string }) => Promise<void>
}

export function useWaitlist(): UseWaitlistReturn {
  const router = useRouter()
  const isLoading = useWaitlistState((state) => state.isLoading)
  const error = useWaitlistState((state) => state.error)
  const setLoading = useWaitlistState((state) => state.setLoading)
  const setError = useWaitlistState((state) => state.setError)

  const submit = useCallback(
    async (payload: Omit<WaitlistPayload, 'source'> & { source: string }) => {
      setLoading(true)
      setError(null)

      try {
        // Validação client-side
        const validationError = validateWaitlistForm(
          payload.name,
          payload.email,
          payload.number
        )

        if (validationError) {
          setError(validationError)
          setLoading(false)
          return
        }

        // Enviar para API
        const waitlistPayload: WaitlistPayload = {
          source: payload.source,
          email: payload.email.trim(),
          number: payload.number.trim(),
          name: payload.name.trim(),
        }

        await submitWaitlist(waitlistPayload)
        
        // Redirecionar para página de sucesso
        router.push('/waitlist/sent')
      } catch (err) {
        setError({
          message:
            err instanceof Error
              ? err.message
              : 'Erro ao enviar formulário. Tente novamente.',
        })
      } finally {
        setLoading(false)
      }
    },
    [router, setLoading, setError]
  )

  return {
    isLoading,
    error,
    submit,
  }
}


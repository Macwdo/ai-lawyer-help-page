"use client"

import { startTransition } from "react"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

import { toWaitlistError, submitWaitlist } from "@/lib/services/waitlist.service"
import { type WaitlistPayload } from "@/lib/types/waitlist"

export function useWaitlist() {
  const router = useRouter()

  const mutation = useMutation({
    mutationFn: submitWaitlist,
    onSuccess: () => {
      startTransition(() => {
        router.push("/waitlist/sent")
      })
    },
  })

  return {
    isLoading: mutation.isPending,
    error: mutation.error ? toWaitlistError(mutation.error) : null,
    submit: (payload: WaitlistPayload) => mutation.mutateAsync(payload),
  }
}

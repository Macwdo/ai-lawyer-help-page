import { AxiosError } from "axios"

import { API_ENDPOINTS } from "@/lib/config/api"
import { apiClient } from "@/lib/axios"
import { WaitlistError, WaitlistPayload, WaitlistResponse } from "@/lib/types/waitlist"

export async function submitWaitlist(
  payload: WaitlistPayload
): Promise<WaitlistResponse> {
  const response = await apiClient.post<WaitlistResponse>(API_ENDPOINTS.WAITLIST, payload)

  return {
    ...response.data,
    success: response.data.success ?? true,
  }
}

export function toWaitlistError(error: unknown): WaitlistError {
  if (error instanceof AxiosError) {
    const axiosError = error as AxiosError<{ field?: string; message?: string }>
    const field = axiosError.response?.data?.field
    const message =
      axiosError.response?.data?.message ??
      axiosError.message ??
      "Erro ao enviar formulário. Tente novamente."

    return {
      message,
      field: field === "name" || field === "email" || field === "number" ? field : undefined,
    }
  }

  if (error instanceof Error) {
    return {
      message: error.message,
    }
  }

  return {
    message: "Erro ao enviar formulário. Tente novamente.",
  }
}

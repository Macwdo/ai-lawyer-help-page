import { WaitlistPayload, WaitlistResponse, WaitlistError } from '@/lib/types/waitlist'
import { API_ENDPOINTS } from '@/lib/config/api'

export async function submitWaitlist(
  payload: WaitlistPayload
): Promise<WaitlistResponse> {
  // Mock do fetch - apenas console.log por enquanto
  console.log('📤 Payload que seria enviado para a API:', {
    url: API_ENDPOINTS.WAITLIST,
    method: 'POST',
    payload: payload,
  })

  // Simular delay de rede
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Mock de resposta de sucesso
  return {
    success: true,
    message: 'Inscrição realizada com sucesso!',
    data: {
      id: Math.random().toString(36).substring(7),
      ...payload,
    },
  }

  // Chamada real da API (comentada)
  /*
  try {
    const response = await fetch(API_ENDPOINTS.WAITLIST, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(
        errorData.message || `Erro ao enviar: ${response.statusText}`
      )
    }

    const data = await response.json()
    return {
      success: true,
      message: data.message || 'Inscrição realizada com sucesso!',
      data: data,
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error
    }
    throw new Error('Erro desconhecido ao enviar formulário')
  }
  */
}

export function validateWaitlistForm(
  name: string,
  email: string,
  number: string
): WaitlistError | null {
  if (!name || name.trim().length < 2) {
    return {
      message: 'Nome deve ter pelo menos 2 caracteres',
      field: 'name',
    }
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      message: 'Email inválido',
      field: 'email',
    }
  }

  if (!number || number.trim().length < 10) {
    return {
      message: 'Telefone inválido',
      field: 'number',
    }
  }

  return null
}


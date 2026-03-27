import { z } from "zod"

export const waitlistFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().trim().email("Email inválido"),
  phone: z
    .string()
    .trim()
    .min(10, "Telefone inválido"),
})

export type WaitlistFormData = z.infer<typeof waitlistFormSchema>

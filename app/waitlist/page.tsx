"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import { useForm } from "react-hook-form"

import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useWaitlist } from "@/lib/hooks/useWaitlist"
import { waitlistFormSchema, type WaitlistFormData } from "@/lib/schemas/waitlist"
import { useWaitlistStore } from "@/lib/stores/waitlist.store"
import { cn } from "@/lib/utils"

export default function WaitlistPage() {
  const source = useWaitlistStore((state) => state.source)

  const { isLoading, error, submit } = useWaitlist()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })

  const onSubmit = async (data: WaitlistFormData) => {
    await submit({
      source,
      name: data.name,
      email: data.email,
      number: data.phone,
    })
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 flex items-center justify-center py-20 md:py-32 px-4">
        <div className="container max-w-md">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold tracking-tight">
                Entre na Fila de Espera
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Seja um dos primeiros a ter acesso ao Advogado Inteligente
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                {error && (
                  <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
                    {error.message}
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Nome
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    disabled={isLoading}
                    aria-invalid={Boolean(errors.name || error?.field === "name")}
                    className={cn(
                      errors.name || error?.field === "name" ? "border-destructive" : ""
                    )}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    disabled={isLoading}
                    aria-invalid={Boolean(errors.email || error?.field === "email")}
                    className={cn(
                      errors.email || error?.field === "email" ? "border-destructive" : ""
                    )}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    disabled={isLoading}
                    aria-invalid={Boolean(errors.phone || error?.field === "number")}
                    className={cn(
                      errors.phone || error?.field === "number" ? "border-destructive" : ""
                    )}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                  {isLoading ? "Enviando..." : "Entrar na Fila"}
                </Button>

                <Link href="/" className="block w-full">
                  <Button type="button" variant="ghost" size="lg" className="w-full group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Voltar ao início
                  </Button>
                </Link>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}

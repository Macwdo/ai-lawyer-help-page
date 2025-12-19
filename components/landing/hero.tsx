"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { useWaitlistStore } from "@/lib/stores/waitlist.store"

export function Hero() {
  const setSource = useWaitlistStore((state) => state.setSource)
  
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-primary/8 via-primary/3 to-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm shadow-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">
              Agentes de IA para advogados
            </span>
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            O advogado do futuro{" "}
            <span className="font-serif text-primary">começa com agentes de IA</span>
          </h1>
          
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Centralize documentos, automatize o atendimento e produza peças jurídicas com inteligência artificial.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link 
              href="/waitlist"
              onClick={() => setSource('hero')}
            >
              <Button size="lg" className="group w-full sm:w-auto">
                Entrar na lista de espera
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/#solucao">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Ver como funciona
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Dashboard Mock Visual */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-5xl rounded-lg border bg-card shadow-2xl">
            <div className="flex items-center gap-2 border-b bg-muted/50 p-4">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
              <div className="ml-4 flex-1 rounded bg-background px-3 py-1.5 text-sm text-muted-foreground">
                advogado-inteligente.com
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="space-y-2 rounded-lg border bg-muted/30 p-4">
                  <div className="h-2 w-20 rounded bg-primary/20"></div>
                  <div className="h-2 w-32 rounded bg-muted"></div>
                </div>
                <div className="space-y-2 rounded-lg border bg-muted/30 p-4">
                  <div className="h-2 w-24 rounded bg-primary/20"></div>
                  <div className="h-2 w-28 rounded bg-muted"></div>
                </div>
                <div className="space-y-2 rounded-lg border bg-muted/30 p-4">
                  <div className="h-2 w-16 rounded bg-primary/20"></div>
                  <div className="h-2 w-36 rounded bg-muted"></div>
                </div>
              </div>
              <div className="mt-6 rounded-lg border bg-muted/20 p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-48 rounded bg-muted"></div>
                    <div className="h-3 w-32 rounded bg-muted/50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


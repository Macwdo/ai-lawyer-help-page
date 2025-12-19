"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useWaitlistStore } from "@/lib/stores/waitlist.store"

export function CTAFinal() {
  const setSource = useWaitlistStore((state) => state.setSource)
  
  return (
    <section className="relative bg-primary/30 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/35 via-primary/30 to-primary/25 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent"></div>
      <div className="relative z-10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Comece a modernizar seu escritório{" "}
            <span className="font-serif text-primary">hoje</span>
          </h2>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Entre na lista de espera e seja um dos primeiros a transformar seu escritório com IA
          </p>
          <Link 
            href="/waitlist"
            onClick={() => setSource('cta-final')}
          >
            <Button size="lg" className="group">
              Entrar na lista de espera
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
      </div>
    </section>
  )
}


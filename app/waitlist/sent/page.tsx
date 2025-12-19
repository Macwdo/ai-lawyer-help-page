"use client"

import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, ArrowLeft } from "lucide-react"
import { useWaitlistStore } from "@/lib/stores/waitlist.store"

export default function WaitlistSentPage() {
  const reset = useWaitlistStore((state) => state.reset)

  const handleBackToHome = () => {
    reset()
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="flex-1 flex items-center justify-center py-20 md:py-32 px-4">
        <div className="container max-w-md">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="h-16 w-16 text-primary" />
              </div>
              <CardTitle className="text-3xl font-bold tracking-tight">
                Inscrição realizada com sucesso!
              </CardTitle>
              <CardDescription className="text-base mt-2">
                Você receberá atualizações em breve sobre o Advogado Inteligente
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-center text-muted-foreground">
                Obrigado por se inscrever na nossa lista de espera. 
                Entraremos em contato em breve com mais informações.
              </p>
              
              <Link href="/" className="block w-full" onClick={handleBackToHome}>
                <Button 
                  variant="default"
                  size="lg"
                  className="w-full group"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Voltar ao início
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}


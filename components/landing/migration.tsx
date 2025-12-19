"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Shield, Zap, Users } from "lucide-react"

const benefits = [
  {
    icon: Cloud,
    title: "Saia do papel e do local",
    description: "Tudo centralizado na nuvem, acessível de qualquer lugar. Sem pastas físicas ou arquivos perdidos.",
  },
  {
    icon: Shield,
    title: "Segurança jurídica",
    description: "Seus dados protegidos com criptografia e backups automáticos. Conformidade com LGPD.",
  },
  {
    icon: Zap,
    title: "Sem conhecimento técnico",
    description: "Interface intuitiva pensada para advogados. Você não precisa ser técnico para usar.",
  },
  {
    icon: Users,
    title: "Feito para o dia a dia",
    description: "Desenvolvido com advogados, para advogados. Entendemos sua rotina e suas necessidades.",
  },
]

export function Migration() {
  return (
    <section id="migracao" className="relative bg-primary/25 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/25 to-primary/20 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent"></div>
      <div className="relative z-10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Migre para o <span className="font-serif text-primary">online</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A transição do modelo local para o digital nunca foi tão simples
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="border-2 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
      </div>
    </section>
  )
}


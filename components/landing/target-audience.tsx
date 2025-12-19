"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Building2, TrendingUp, Check } from "lucide-react"

const audiences = [
  {
    icon: User,
    title: "Advogados autônomos",
    description: "Profissionais que trabalham sozinhos e precisam de produtividade sem complexidade.",
    features: [
      "Gestão completa de documentos",
      "Atendimento automatizado",
      "Produção de peças assistida",
    ],
  },
  {
    icon: Building2,
    title: "Pequenos escritórios",
    description: "Escritórios com até 10 advogados que querem escalar sem aumentar a equipe operacional.",
    features: [
      "Colaboração entre advogados",
      "Centralização de processos",
      "Visibilidade de todos os casos",
    ],
  },
  {
    icon: TrendingUp,
    title: "Escritórios em crescimento",
    description: "Escritórios que estão expandindo e precisam de sistemas que crescem com eles.",
    features: [
      "Escalabilidade automática",
      "Relatórios e analytics",
      "Integrações futuras",
    ],
  },
]

export function TargetAudience() {
  return (
    <section id="publico" className="relative bg-background py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="relative z-10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Para quem é o <span className="font-serif text-primary">Advogado Inteligente</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Desenvolvido para profissionais que querem modernizar sem complicar
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <Card key={index} className="border-2 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{audience.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {audience.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {audience.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
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


"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Essencial",
    subtitle: "Para autônomos",
    price: "Em breve",
    description: "Ideal para advogados que trabalham sozinhos",
    features: [
      "Agente de Storage Inteligente",
      "Até 100 documentos",
      "Busca semântica",
      "Atendimento básico",
      "Suporte por e-mail",
    ],
    cta: "Avisar quando disponível",
    popular: false,
  },
  {
    name: "Escritório",
    subtitle: "Para pequenos escritórios",
    price: "Em breve",
    description: "Perfeito para escritórios com até 5 advogados",
    features: [
      "Todos os recursos do Essencial",
      "Agentes de Atendimento completos",
      "Agentes de Produção de Processos",
      "Documentos ilimitados",
      "Colaboração entre advogados",
      "Relatórios e analytics",
      "Suporte prioritário",
    ],
    cta: "Avisar quando disponível",
    popular: true,
  },
  {
    name: "Business",
    subtitle: "Para grandes escritórios",
    price: "Em breve",
    description: "Solução completa para escritórios de alto volume",
    features: [
      "Todos os recursos do Escritório",
      "API e integrações customizadas",
      "Gestão avançada de equipe",
      "White-label disponível",
      "Suporte dedicado",
      "Treinamento personalizado",
    ],
    cta: "Avisar quando disponível",
    popular: false,
    comingSoon: true,
  },
]

export function Pricing() {
  return (
    <section id="planos" className="relative bg-muted py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/90 to-muted/80 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="relative z-10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Planos que crescem com você
          </h2>
          <p className="text-lg text-muted-foreground">
            Escolha o plano ideal para o tamanho do seu escritório
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-2 transition-shadow hover:shadow-lg ${
                plan.popular ? "border-primary shadow-lg" : ""
              } ${plan.comingSoon ? "opacity-75" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary">Mais popular</Badge>
                </div>
              )}
              {plan.comingSoon && (
                <div className="absolute -top-4 right-4">
                  <Badge variant="outline">Em breve</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base mt-1">
                  {plan.subtitle}
                </CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
                <CardDescription className="mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  disabled={plan.comingSoon}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}


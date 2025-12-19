"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, MessageSquare, FileEdit, Folder } from "lucide-react"

const problems = [
  {
    icon: Folder,
    title: "Documentos espalhados",
    description: "PDFs em pastas locais, sem organização centralizada. Difícil encontrar o que precisa quando precisa.",
  },
  {
    icon: MessageSquare,
    title: "Atendimento manual",
    description: "Respondendo WhatsApp o dia todo, sem triagem automática. Informações se perdem nas conversas.",
  },
  {
    icon: FileEdit,
    title: "Produção repetitiva",
    description: "Criando peças jurídicas do zero toda vez, sem modelos inteligentes ou automação.",
  },
  {
    icon: FileText,
    title: "Falta de presença digital",
    description: "Escritório ainda muito no papel e local. Clientes esperam mais agilidade e modernidade.",
  },
]

export function Problem() {
  return (
    <section id="problema" className="relative bg-muted py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/90 to-muted/80 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="relative z-10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Você já passou por isso?
          </h2>
          <p className="text-lg text-muted-foreground">
            Dores reais que atrasam seu escritório e limitam seu crescimento
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <Card key={index} className="border-2 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                    <Icon className="h-6 w-6 text-destructive" />
                  </div>
                  <CardTitle className="text-xl">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {problem.description}
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


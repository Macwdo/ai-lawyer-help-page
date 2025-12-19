"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Database, 
  Search, 
  FileText, 
  MessageCircle, 
  Bot, 
  CheckCircle2,
  Sparkles,
  FileCheck
} from "lucide-react"

const storageFeatures = [
  "Upload de documentos (PDF, DOCX, imagens)",
  "Indexação automática com IA",
  "Busca semântica inteligente",
  "OCR automático",
  "Organização por cliente, processo e tipo",
  "Resumos automáticos de documentos longos",
]

const atendimentoFeatures = [
  "Agente que responde clientes via chat",
  "Coleta automática de informações iniciais",
  "Triagem inteligente de casos",
  "Follow-ups automáticos",
  "Histórico centralizado de conversas",
  "Integração futura com WhatsApp e e-mail",
]

const producaoFeatures = [
  "Geração assistida de peças jurídicas",
  "Modelos inteligentes personalizáveis",
  "Sugestões de argumentos",
  "Revisão de linguagem jurídica",
  "Checklist automático por tipo de processo",
]

export function Solution() {
  return (
    <section id="solucao" className="relative bg-background py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95 backdrop-blur-sm"></div>
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="relative z-10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            A solução: <span className="font-serif text-primary">Agentes de IA</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Três agentes especializados para transformar seu escritório
          </p>
        </div>
        
        <Tabs defaultValue="storage" className="mx-auto max-w-5xl">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="storage" className="text-sm md:text-base">
              Storage
            </TabsTrigger>
            <TabsTrigger value="atendimento" className="text-sm md:text-base">
              Atendimento
            </TabsTrigger>
            <TabsTrigger value="producao" className="text-sm md:text-base">
              Produção
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="storage" className="space-y-4">
            <Card className="border-2">
              <CardHeader>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">🤖 Agente de Storage Inteligente</CardTitle>
                    <CardDescription className="text-base mt-1">
                      Seus documentos organizados e acessíveis com IA
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {storageFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-lg border bg-muted/50 p-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Search className="h-4 w-4" />
                    <span className="font-medium">Exemplo:</span>
                    <span>&ldquo;Procure o contrato do João de 2021&rdquo;</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="atendimento" className="space-y-4">
            <Card className="border-2">
              <CardHeader>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">💬 Agentes de Atendimento ao Cliente</CardTitle>
                    <CardDescription className="text-base mt-1">
                      Atendimento inteligente que nunca dorme
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {atendimentoFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-lg border bg-muted/50 p-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Bot className="h-4 w-4" />
                    <span className="font-medium">Benefício:</span>
                    <span>Seu agente coleta informações enquanto você foca no jurídico</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="producao" className="space-y-4">
            <Card className="border-2">
              <CardHeader>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <FileCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">⚖️ Agentes para Produção de Processos</CardTitle>
                    <CardDescription className="text-base mt-1">
                      Produza peças jurídicas com assistência de IA
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {producaoFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-lg border bg-muted/50 p-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Sparkles className="h-4 w-4" />
                    <span className="font-medium">Resultado:</span>
                    <span>Peças mais consistentes em menos tempo</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      </div>
    </section>
  )
}


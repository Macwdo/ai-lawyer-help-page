import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { AppProviders } from "@/components/providers/app-providers"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

// Using CSS import for Source Serif 4 as it's not available in next/font/google
const sourceSerif = {
  variable: "--font-source-serif",
}

export const metadata: Metadata = {
  title: "Advogado Inteligente - Agentes de IA para Escritórios de Advocacia",
  description: "Centralize documentos, automatize o atendimento e produza peças jurídicas com inteligência artificial. Migre seu escritório para o online.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${sourceSerif.variable} font-sans antialiased`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}

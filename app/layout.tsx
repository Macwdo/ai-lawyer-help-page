import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

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
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


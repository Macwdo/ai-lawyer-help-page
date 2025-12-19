"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useWaitlistStore } from "@/lib/stores/waitlist.store"

const navigation = [
  { name: "Início", href: "#hero" },
  { name: "Problema", href: "#problema" },
  { name: "Solução", href: "#solucao" },
  { name: "Migração", href: "#migracao" },
  { name: "Para quem é", href: "#publico" },
  { name: "Planos", href: "#planos" },
]

export function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const setSource = useWaitlistStore((state) => state.setSource)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNavClick = (href: string, isHome: boolean) => {
    setMobileMenuOpen(false)
    if (pathname !== "/") {
      // Se não estiver na home, redireciona para home
      if (isHome) {
        window.location.href = "/"
      } else {
        window.location.href = `/${href}`
      }
      return
    }
    // Se estiver na home, faz scroll suave
    if (!isHome) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold hover:opacity-80 transition-opacity">
            Advogado Inteligente
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => {
            const isHome = item.name === "Início"
            const href = isHome ? "/" : (pathname === "/" ? item.href : `/${item.href}`)
            return (
              <Link
                key={item.name}
                href={href}
                onClick={(e) => {
                  if (pathname === "/" && !isHome) {
                    e.preventDefault()
                    handleNavClick(item.href, false)
                  } else if (pathname !== "/") {
                    e.preventDefault()
                    handleNavClick(item.href, isHome)
                  }
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
          
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
          
          <Link 
            href="/waitlist"
            onClick={() => setSource('header')}
          >
            <Button className="hidden md:inline-flex">Entrar na lista de espera</Button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col py-4 space-y-2">
            {navigation.map((item) => {
              const isHome = item.name === "Início"
              const href = isHome ? "/" : (pathname === "/" ? item.href : `/${item.href}`)
              return (
                <Link
                  key={item.name}
                  href={href}
                  onClick={(e) => {
                    if (pathname === "/" && !isHome) {
                      e.preventDefault()
                      handleNavClick(item.href, false)
                    } else if (pathname !== "/") {
                      e.preventDefault()
                      handleNavClick(item.href, isHome)
                    }
                  }}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              )
            })}
            <div className="px-4 pt-2">
              <Link 
                href="/waitlist" 
                className="w-full block"
                onClick={() => setSource('header')}
              >
                <Button className="w-full">Entrar na lista de espera</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}


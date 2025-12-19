"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="/">
              <h3 className="mb-4 text-lg font-semibold hover:opacity-80 transition-opacity cursor-pointer">
                Advogado Inteligente
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground">
              Agentes de IA para transformar escritórios de advocacia.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Produto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#solucao" className="hover:text-foreground transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/#planos" className="hover:text-foreground transition-colors">
                  Preços
                </Link>
              </li>
              <li>
                <Link href="/#solucao" className="hover:text-foreground transition-colors">
                  Como funciona
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#publico" className="hover:text-foreground transition-colors">
                  Sobre
                </Link>
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Contato</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">Privacidade</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">Termos</li>
              <li className="hover:text-foreground transition-colors cursor-pointer">LGPD</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Advogado Inteligente. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}


"use client"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Advogado Inteligente</h3>
            <p className="text-sm text-muted-foreground">
              Agentes de IA para transformar escritórios de advocacia.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Produto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Recursos</li>
              <li>Preços</li>
              <li>Como funciona</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Sobre</li>
              <li>Blog</li>
              <li>Contato</li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Privacidade</li>
              <li>Termos</li>
              <li>LGPD</li>
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


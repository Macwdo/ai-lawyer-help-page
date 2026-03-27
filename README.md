# Advogado Inteligente - Landing Page

Landing page moderna e profissional para o produto SaaS "Advogado Inteligente", uma plataforma de Agentes de IA para advogados autônomos e pequenos escritórios de advocacia no Brasil.

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui**
- **Axios**
- **TanStack Query**
- **React Hook Form + Zod**
- **Zustand**
- **Lucide React** (ícones)
- **next-themes** (dark mode)

## 📦 Instalação

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Iniciar servidor de produção
pnpm start
```

A aplicação estará disponível em `http://localhost:3000`

## 🎨 Design System

- **Tipografia**: Inter (sans-serif) + Source Serif 4 (serif para destaques)
- **Tema**: CSS variables com suporte a light/dark mode
- **Cores**: Sistema de cores baseado em HSL com tokens do shadcn/ui
- **Componentes**: Todos os componentes seguem o padrão shadcn/ui

## 📄 Estrutura da Landing Page

1. **Hero Section** - Headline principal com CTAs
2. **Problema** - Dores reais dos advogados
3. **Solução** - Três agentes de IA (Storage, Atendimento, Produção)
4. **Migração** - Benefícios de migrar para o online
5. **Para quem é** - Público-alvo
6. **Planos** - Três planos (Essencial, Escritório, Business)
7. **CTA Final** - Chamada final para ação
8. **Footer** - Links e informações

## 🧩 Componentes

Todos os componentes estão em `components/landing/`:
- `header.tsx` - Header com toggle de tema
- `hero.tsx` - Seção hero
- `problem.tsx` - Seção de problemas
- `solution.tsx` - Seção de solução com tabs
- `migration.tsx` - Seção de migração
- `target-audience.tsx` - Público-alvo
- `pricing.tsx` - Planos
- `cta-final.tsx` - CTA final
- `footer.tsx` - Footer

Componentes UI base em `components/ui/`:
- `button.tsx`
- `card.tsx`
- `badge.tsx`
- `tabs.tsx`

## 🔌 Stack da Waitlist

- Cliente HTTP compartilhado em `lib/axios.ts`
- Provider global do React Query montado no layout raiz
- Estado local de origem do CTA em `lib/stores/waitlist.store.ts`
- Validação do formulário com `zod` em `lib/schemas/waitlist.ts`
- Mutação de envio centralizada em `lib/hooks/useWaitlist.ts`

## 🌙 Dark Mode

O dark mode está totalmente funcional e pode ser alternado através do botão no header. O tema é persistido usando `next-themes`.

## 📝 Próximos Passos

- [ ] Conectar CTAs a formulário de lista de espera
- [ ] Adicionar animações suaves
- [ ] Implementar analytics
- [ ] Adicionar testes
- [ ] Otimizar imagens e assets

## 📄 Licença

Este projeto é privado e proprietário.

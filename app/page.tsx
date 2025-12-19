import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Problem } from "@/components/landing/problem"
import { Solution } from "@/components/landing/solution"
import { Migration } from "@/components/landing/migration"
import { TargetAudience } from "@/components/landing/target-audience"
import { Pricing } from "@/components/landing/pricing"
import { CTAFinal } from "@/components/landing/cta-final"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Migration />
      <TargetAudience />
      <Pricing />
      <CTAFinal />
      <Footer />
    </main>
  )
}


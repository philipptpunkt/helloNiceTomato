import { Section } from "@/design-system/Layout"
import { Hero } from "./_sections/Hero/Hero"
import { ThrowYourself } from "./_sections/ThrowYourself/ThrowYourself"
import { cn } from "@/utils/cn"
import { Button } from "@/design-system/Button"
import { HowItWorks } from "./_sections/HowItWorks/HowIsWorks"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />

      <ThrowYourself />

      <HowItWorks />
    </main>
  )
}

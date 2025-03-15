import { Section } from "@/design-system/Layout"
import { Hero } from "./_sections/Hero/Hero"
import { ThrowYourself } from "./_sections/ThrowYourself/ThrowYourself"
import { cn } from "@/utils/cn"
import { Button } from "@/design-system/Button"

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />

      <ThrowYourself />
      {/* ToDo: Move Section to component */}
      <Section
        width="narrow"
        containerClassName={cn([
          "bg-gradient-to-b from-primary-400 to-neutral-50",
          "dark:from-primary-950 dark:to-neutral-900",
        ])}
      >
        <div className="flex flex-col items-center">
          <h2 className="text-white text-6xl my-16">
            Want to know how it works?
          </h2>
          <p className="text-xl font-bold mb-8">Find out now</p>
          <Button type="link" href="/how-it-works" variant="outlined" secondary>
            How it works
          </Button>
        </div>
      </Section>
    </main>
  )
}

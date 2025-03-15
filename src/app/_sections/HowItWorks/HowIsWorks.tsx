import { SectionHeader } from "@/app/_components/SectionHeader"
import { Button } from "@/design-system/Button"
import { Section } from "@/design-system/Layout"
import { cn } from "@/utils/cn"

export function HowItWorks() {
  return (
    <Section
      width="narrow"
      containerClassName={cn([
        "bg-gradient-to-b from-primary-400 to-neutral-50",
        "dark:from-primary-950 dark:to-neutral-900",
      ])}
    >
      <div className="flex flex-col items-center">
        <SectionHeader
          headline="Want to know how it works?"
          className=" my-16"
        />
        <p className="text-xl font-bold mb-8">Find out now</p>
        <Button type="link" href="/how-it-works" variant="outlined" secondary>
          How it works
        </Button>
      </div>
    </Section>
  )
}

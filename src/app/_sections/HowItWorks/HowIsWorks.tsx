import { SectionHeader } from "@/app/_components/SectionHeader"
import { Button } from "@/design-system/Button"
import { Icon, IconName } from "@/design-system/Icon"
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
      <div className="flex flex-col items-center mb-32">
        <SectionHeader
          headline="Want to know how it works?"
          className=" my-16"
        />
        <div>
          <Icon iconName={IconName.icCheckCircle} />
          <h3>Create account</h3>
          <p>
            Set up a new account with your email or use your Bluesky account
          </p>
        </div>
        <p className="text-xl font-bold mb-8">Find out now</p>
        <Button type="link" href="/how-it-works" variant="outlined" secondary>
          How it works
        </Button>
      </div>
    </Section>
  )
}

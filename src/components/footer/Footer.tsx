import Link from "next/link"
import { Logo } from "../Logo/Logo"
import { Section, Spacer } from "@/design-system/Layout"

export function Footer() {
  return (
    <footer>
      <Section width="narrow" horizontalPadding>
        <Link href="/" className="inline-block">
          <Logo />
        </Link>
        <div className="flex justify-between">
          <div>Pages</div>
          <div>Legal Stuff and Help</div>
          <div>Social Media Links</div>
          <div>Design System Link and Images links to unsplash</div>
        </div>
        <Spacer size="2xl" />
      </Section>
    </footer>
  )
}

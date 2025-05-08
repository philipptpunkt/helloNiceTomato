import Link from "next/link"
import { legalLinks, pageLinks, socialLinks } from "./links"
import { cn } from "@/utils/cn"
import { Icon } from "@/design-system/Icon"

function LinkList({ children }: { children: React.ReactNode }) {
  return <ul className={cn(["list-none", "space-y-4"])}>{children}</ul>
}

function FooterLink({ title, href }: { title: string; href: string }) {
  return (
    <Link
      href={href}
      className={cn([
        "inline-block",
        "text-neutral-600 dark:text-neutral-300",
        "hover:text-primary",
        "hover:scale-105",
        "font-semibold",
      ])}
    >
      {title}
    </Link>
  )
}

export function PageLinks() {
  return (
    <LinkList>
      {pageLinks.map((link, index) => {
        return (
          <li key={index}>
            <FooterLink {...link} />
          </li>
        )
      })}
    </LinkList>
  )
}

export function LegalLinks() {
  return (
    <LinkList>
      {legalLinks.map((link, index) => {
        return (
          <li key={index}>
            <FooterLink {...link} />
          </li>
        )
      })}
    </LinkList>
  )
}

export function SocialMediaLinks() {
  return (
    <ul className="list-none, flex, space-x-2">
      {socialLinks.map((link, index) => {
        return (
          <li key={index} className="inline-block">
            <Link
              href={link.href}
              className={cn([
                "border-2",
                "rounded-lg",
                "p-1",
                "inline-block",
                "hover:scale-110",
              ])}
            >
              <Icon iconName={link.icon} size="lg" />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

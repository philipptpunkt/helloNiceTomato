import { IconName } from "@/design-system/Icon"

type FooterLink = {
  title: string
  href: string
  external?: boolean
}

export const pageLinks: FooterLink[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "How it works",
    href: "/public/how-it-works",
  },
  {
    title: "Password reset",
    href: "/auth/identify",
  },
  {
    title: "Bluesky signin",
    href: "/blue/auth/signin",
  },
]

export const legalLinks: FooterLink[] = [
  {
    title: "Legal notice",
    href: "/public/terms",
    external: true,
  },
  {
    title: "Privacy policy",
    href: "/public/privacy-policy",
    external: true,
  },
  {
    title: "Bluesky Terms",
    href: "https://bsky.social/about/support/tos",
    external: true,
  },
  {
    title: "Bluesky Privacy",
    href: "https://bsky.social/about/support/privacy-policy",
    external: true,
  },
]

export const socialLinks = [
  {
    title: "Bluesky",
    icon: IconName.icButterfly,
    href: "https://bsky.app/profile/hellonicetomato.com",
  },
  // {
  //   title: "Linkedin",
  //   icon: IconName.icLinkedinLogo,
  //   href: "/linkedin",
  // },
  {
    title: "Github",
    icon: IconName.icGithubLogo,
    href: "https://github.com/philipptpunkt/helloNiceTomato",
  },
]

export const resourceLinks: FooterLink[] = [
  {
    title: "Ketchup - Design System",
    href: "https://ketchup.hellonicetomato.com",
    external: true,
  },
]

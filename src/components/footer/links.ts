import { IconName } from "@/design-system/Icon"

export const pageLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "How it works",
    href: "/how-it-works",
  },
  {
    title: "Password reset",
    href: "/auth/identify",
  },
  {
    title: "Bluesky signin",
    href: "/blue/auth/sigin",
  },
]

export const legalLinks = [
  {
    title: "Legal notice",
    href: "/terms",
  },
  {
    title: "Privacy policy",
    href: "/privacy-policy",
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

// Storybook subdomain should be renamed to ketchuo.hellonicetomato.com
export const resourceLinks = [
  {
    title: "Ketchup - Design System",
    href: "https://storybook.hellonicetomato.com",
  },
]

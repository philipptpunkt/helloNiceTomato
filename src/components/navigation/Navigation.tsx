import Link from "next/link"
import { TomatoLogo } from "./TomatoLogo"
import { ThemeToggle } from "../theme/ThemeToggle"
import { NavigationDesktop } from "./NavigationDesktop"
import { cn } from "@/utils/cn"
import { NavigationMobile } from "./NavigationMobile"
import { createClient } from "@/utils/supabase/server"
import { LogoutButton } from "./LogoutButton"

function HomeLink({ containerClass }: { containerClass?: string }) {
  return (
    <Link href="/" className={cn("flex items-center", containerClass)}>
      <TomatoLogo className="h-8 w-8" />
      <span>Hello Nice&nbsp;</span>
      <span className="text-primary-600 dark:text-primary-300">Tomato</span>
    </Link>
  )
}
export async function Navigation() {
  const supabase = await createClient()

  const {
    data: { session },
  } = await supabase.auth.getSession()
  const hasSession = Boolean(session)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur">
      <nav className="relative mx-auto flex h-16 max-w-7xl w-full items-center justify-center px-4">
        <HomeLink containerClass="absolute left-0" />

        <div className="hidden md:flex items-center space-x-8">
          <NavigationDesktop />
          {hasSession && (
            <Link
              href="/profile"
              className="text-foreground hover:text-primary"
            >
              My Profile
            </Link>
          )}
        </div>

        <div className="hidden md:flex absolute right-0">
          {hasSession ? <LogoutButton /> : null}
          <ThemeToggle />
        </div>

        <div className="md:hidden flex absolute right-0">
          <NavigationMobile hasSession={hasSession} />
        </div>
      </nav>
    </header>
  )
}

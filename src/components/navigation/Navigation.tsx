import Link from "next/link"
import { ThemeToggle } from "../theme/ThemeToggle"
import { NavigationDesktop } from "./NavigationDesktop"
import {
  NavigationMobileButton,
  NavigationMobileMenu,
} from "./NavigationMobile"
import { createClient } from "@/utils/supabase/server"
import { LogoutButton } from "./LogoutButton"
import { SettingsButton } from "./SettingsButton"
import { Button } from "@/design-system/Button"
import { Logo } from "../Logo/Logo"
import { cn } from "@/utils/cn"

function HomeLink() {
  return (
    <Link href="/" className={cn("absolute left-0", "ml-[-0.5rem] mr-2")}>
      <Logo withVersion />
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
    <>
      <header className="fixed top-0 z-20 w-full px-4 md:px-8 bg-transparent backdrop-blur">
        <nav className="relative mx-auto flex h-16 max-w-[1280px] w-full items-center justify-center px-4">
          <HomeLink />

          <div className="hidden md:flex items-center space-x-8">
            <NavigationDesktop />
            {hasSession && (
              <Button
                type="link"
                href={`/${session!.user.id}`}
                variant="outlined"
                contentStyle="narrow"
              >
                My Profile
              </Button>
            )}
          </div>

          <div className="hidden md:flex absolute right-0">
            {hasSession ? (
              <>
                <SettingsButton userId={session!.user.id} />
                <div className="w-2" />
                <LogoutButton />
                <div className="w-2" />
              </>
            ) : null}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex absolute right-0">
            <NavigationMobileButton />
          </div>
        </nav>
      </header>
      <NavigationMobileMenu session={session} />
    </>
  )
}

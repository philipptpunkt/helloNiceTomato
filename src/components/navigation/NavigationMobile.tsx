"use client"

import { useEffect, useState } from "react"
import { Spin as BurgerIcon } from "hamburger-react"
import { topNavigationRoutes as routes } from "./routes"
import { useClickAway } from "react-use"
import { useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ThemeToggle } from "../theme/ThemeToggle"
import Link from "next/link"
import { LogoutButton } from "./LogoutButton"
import { cn } from "@/utils/cn"
import { Session } from "@supabase/supabase-js"
import { SettingsButton } from "./SettingsButton"
import { useRouter, useSearchParams } from "next/navigation"

function ListItemAnimationWrapper({
  index,
  children,
}: {
  index: number
  children: React.ReactNode
}) {
  return (
    <motion.li
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.1 + index / 20,
      }}
      className="w-full"
    >
      {children}
    </motion.li>
  )
}

function StyledLink({
  href,
  label,
  onClick,
  highlight,
}: {
  href: string
  label: string
  onClick: () => void
  highlight?: boolean
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "flex items-center justify-between",
        "w-full px-6 py-4",
        "rounded-full",
        "border-2 border-border",
        "transition-colors",
        "hover:bg-neutral-200 dark:hover:bg-neutral-600 hover:border-secondary",
        {
          "text-primary": highlight,
          "border-primary": highlight,
        }
      )}
    >
      <span className="font-semibold">{label}</span>
    </Link>
  )
}

export function NavigationMobileButton() {
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  const isOpen = searchParams.get("menu") === "open"

  const toggleMenu = () => {
    const params = new URLSearchParams(searchParams.toString())
    if (isOpen) {
      params.delete("menu")
    } else {
      params.set("menu", "open")
    }

    // Update URL without full page reload
    router.push(`?${params.toString()}`, { scroll: false })
  }

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) {
    return <div className="h-8 w-8" />
  }

  return <BurgerIcon toggled={isOpen} size={24} toggle={toggleMenu} />
}

export function NavigationMobileMenu({ session }: { session: Session | null }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const ref = useRef(null)

  const isOpen = searchParams.get("menu") === "open"

  const hasSession = Boolean(session)

  function closeMenu() {
    const params = new URLSearchParams(searchParams.toString())
    params.delete("menu")
    router.push(`?${params.toString()}`, { scroll: false })
  }

  useClickAway(ref, (event) => {
    // Check if the click was on the burger button
    const burgerElement = document.querySelector(".hamburger-react")
    if (burgerElement && burgerElement.contains(event.target as Node)) {
      return
    }

    closeMenu()
  })

  return (
    <div ref={ref} className="relative">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={cn([
              "fixed",
              "mt-2",
              "z-20",
              "w-full sm:max-w-96",
              "backdrop-blur-xl",
              "right-0 top-16",
              "px-4 py-8",
              "rounded-3xl",
            ])}
          >
            <ul className="grid gap-4">
              <ListItemAnimationWrapper index={0}>
                <div className="flex px-2 py-2 rounded-full border-2 border-border">
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
              </ListItemAnimationWrapper>
              {hasSession ? (
                <ListItemAnimationWrapper index={1}>
                  <StyledLink
                    href={`/${session!.user.id}`}
                    label="My Profile"
                    onClick={closeMenu}
                    highlight
                  />
                </ListItemAnimationWrapper>
              ) : null}
              {routes.map((route, index) => {
                return (
                  <ListItemAnimationWrapper
                    index={index + (hasSession ? 2 : 1)}
                    key={route.id}
                  >
                    <StyledLink
                      href={route.href}
                      label={route.label}
                      onClick={closeMenu}
                    />
                  </ListItemAnimationWrapper>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

"use client"

import { SetStateAction, useEffect, useState } from "react"
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

function IconButtonWrapper({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center w-12 h-12 bg-primary rounded-full not-last:mr-2">
      {children}
    </div>
  )
}

function StyledLink({
  href,
  label,
  onClick,
}: {
  href: string
  label: string
  onClick: (value: SetStateAction<boolean>) => void
}) {
  return (
    <Link
      href={href}
      onClick={() => onClick((prev) => !prev)}
      className={cn(
        "flex items-center justify-between",
        "w-full px-6 py-4",
        "rounded-full",
        "border-2 border-border",
        "transition-colors",
        "hover:bg-neutral-300 dark:hover:bg-neutral-600 hover:border-secondary"
      )}
    >
      <span className="font-semibold">{label}</span>
    </Link>
  )
}

interface NavigationMobileProps {
  session: Session | null
}

export function NavigationMobile({ session }: NavigationMobileProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [isOpen, setOpen] = useState(false)
  const ref = useRef(null)

  const hasSession = Boolean(session)

  useClickAway(ref, () => setOpen(false))

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) {
    return <div className="h-8 w-8" />
  }

  return (
    <div ref={ref} className="relative">
      <BurgerIcon toggled={isOpen} size={24} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed w-full sm:max-w-96 bg-background-soft right-0 top-16 px-4 py-8"
          >
            <ul className="grid gap-4">
              <ListItemAnimationWrapper index={0}>
                <div className="flex px-2 py-2 rounded-full border-2 border-border">
                  {hasSession ? (
                    <IconButtonWrapper>
                      <LogoutButton className="text-neutral-50" />
                    </IconButtonWrapper>
                  ) : null}
                  <IconButtonWrapper>
                    <ThemeToggle className="text-neutral-50" />
                  </IconButtonWrapper>
                </div>
              </ListItemAnimationWrapper>
              {hasSession ? (
                <ListItemAnimationWrapper index={1}>
                  <StyledLink
                    href={`/${session!.user.id}`}
                    label="My Profile"
                    onClick={setOpen}
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
                      onClick={setOpen}
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

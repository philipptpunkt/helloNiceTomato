"use client"

import { useState } from "react"
import { Squash as BurgerIcon } from "hamburger-react"
import { topNavigationRoutes as routes } from "./routes"
import { useClickAway } from "react-use"
import { useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ThemeToggle } from "../theme/ThemeToggle"
import Link from "next/link"
import { LogoutButton } from "./LogoutButton"

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
      className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-300 via-neutral-400 to-neutral-500"
    >
      {children}
    </motion.li>
  )
}

interface NavigationMobileProps {
  hasSession: boolean
}

export function NavigationMobile({ hasSession }: NavigationMobileProps) {
  const [isOpen, setOpen] = useState(false)
  const ref = useRef(null)

  useClickAway(ref, () => setOpen(false))
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
            className="fixed max-w-[400px] w-full shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-white"
          >
            <ul className="grid gap-2">
              <ListItemAnimationWrapper index={0}>
                <div className="flex">
                  {hasSession ? <LogoutButton /> : null}
                  <ThemeToggle />
                </div>
              </ListItemAnimationWrapper>
              {hasSession ? (
                <ListItemAnimationWrapper index={1}>
                  <Link
                    href="/profile"
                    className="text-foreground hover:text-primary"
                  >
                    My Profile
                  </Link>
                </ListItemAnimationWrapper>
              ) : null}
              {routes.map((route, index) => {
                return (
                  <ListItemAnimationWrapper
                    index={index + (hasSession ? 2 : 1)}
                    key={route.id}
                  >
                    <Link
                      href={route.href}
                      onClick={() => setOpen((prev) => !prev)}
                      className={
                        "flex items-center justify-between w-full p-5 rounded-xl bg-neutral-600"
                      }
                    >
                      <span className="flex gap-1 text-lg">{route.label}</span>
                    </Link>
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

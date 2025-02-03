"use client"

import { useState } from "react"
import Link from "next/link"
import { TomatoLogo } from "./TomatoLogo"
import { BurgerMenu } from "./BurgerMenu"
import { ThemeToggle } from "../theme/ThemeToggle"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isLoggedIn = false

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary-100 bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <TomatoLogo className="h-8 w-8" />
          <span>Hello Nice&nbsp;</span>
          <span className="text-primary-600 dark:text-primary-300">Tomato</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/how-it-works"
            className="text-foreground hover:text-primary"
          >
            How it works
          </Link>
          {isLoggedIn && (
            <Link
              href="/profile"
              className="text-foreground hover:text-primary"
            >
              My Profile
            </Link>
          )}
        </div>

        <div className="hidden md:flex">
          <ThemeToggle />
        </div>

        <div className="md:hidden">
          <BurgerMenu
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </nav>

      <div
        className={`fixed right-0 top-16 w-64 bg-background border-l border-primary-100 h-[calc(100vh-4rem)] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 space-y-6">
          <ThemeToggle />
          <div className="space-y-4">
            <Link
              href="/how-it-works"
              className="block p-2 hover:bg-primary-50 rounded-lg"
            >
              How it works
            </Link>
            {isLoggedIn && (
              <Link
                href="/profile"
                className="block p-2 hover:bg-primary-50 rounded-lg"
              >
                My Profile
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

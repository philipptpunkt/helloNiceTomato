"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { ThemeToggleFallback } from "./ThemeToggleFallback"
import { Icon, IconName } from "@/design-system/Icon"
import { cn } from "@/utils/cn"

export function ThemeToggle({ className }: { className?: string }) {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <ThemeToggleFallback />
  }

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }
  return (
    <button
      onClick={toggleTheme}
      className={cn("p-2 hover:bg-primary-50 rounded-full", className)}
    >
      {theme === "dark" ? (
        <Icon iconName={IconName.icSun} />
      ) : (
        <Icon iconName={IconName.icMoon} />
      )}
    </button>
  )
}

"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { ThemeToggleFallback } from "./ThemeToggleFallback"
import { Icon, IconName } from "@/design-system/Icon"

export function ThemeToggle() {
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
      className="p-2 hover:bg-primary-50 rounded-full"
    >
      {theme === "dark" ? (
        <Icon iconName={IconName.icSun} />
      ) : (
        <Icon iconName={IconName.icMoon} />
      )}
    </button>
  )
}

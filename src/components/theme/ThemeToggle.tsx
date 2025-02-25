"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { ThemeToggleFallback } from "./ThemeToggleFallback"
import { IconButton, IconName } from "@/design-system/Icon"

export function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) {
    return <ThemeToggleFallback />
  }

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }
  return (
    <IconButton
      iconName={theme === "dark" ? IconName.icSun : IconName.icMoon}
      onClick={toggleTheme}
    />
  )
}

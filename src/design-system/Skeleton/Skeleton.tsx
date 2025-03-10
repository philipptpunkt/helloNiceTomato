import { cn } from "@/utils/cn"

type Size = number | "full"

type BorderRadius = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full"

function getBorderRadiusClassName(borderRadius: BorderRadius) {
  switch (borderRadius) {
    case "none":
      return "rounded-none"
    case "sm":
      return "rounded-sm"
    case "md":
      return "rounded-md"
    case "lg":
      return "rounded-lg"
    case "xl":
      return "rounded-xl"
    case "2xl":
      return "rounded-2xl"
    case "3xl":
      return "rounded-3xl"
    case "full":
      return "rounded-full"
  }
}

interface RectProps {
  width?: Size
  height?: Size
  borderRadius?: BorderRadius
}

export function Rect({ width, height, borderRadius = "md" }: RectProps) {
  const borderRadiusClassName = getBorderRadiusClassName(borderRadius)
  return (
    <div
      className={cn([
        "rounded-sm",
        "opacity-50",
        "loading-skeleton",
        borderRadiusClassName,
      ])}
      style={{
        width: width === "full" ? "100%" : width ? `${width}px` : undefined,
        height: height === "full" ? "100%" : height ? `${height}px` : "1rem",
      }}
    />
  )
}

interface CircleProps {
  size: number
}

export function Circle({ size }: CircleProps) {
  return (
    <div
      className={cn(["rounded-full", "loading-skeleton"])}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  )
}

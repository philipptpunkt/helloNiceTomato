import { cn } from "@/utils/cn"

export type Size = "sm" | "md" | "lg" | "xl" | "xxl"

function getSizeClassName(size?: Size) {
  switch (size) {
    case "sm":
      return "h-4"
    case "md":
      return "h-6"
    case "xl":
      return "h-12"
    case "xxl":
      return "h-16"
    default:
      return "h-8"
  }
}

export function Spacer({ size }: { size?: Size }) {
  const sizeClassName = getSizeClassName(size)
  return <div className={cn(sizeClassName, "ignore-check")} />
}

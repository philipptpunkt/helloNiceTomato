import { cn } from "@/utils/cn"

export type Size = "sm" | "md" | "lg" | "xl" | "xxl"

function getSizeClassName(size: Size) {
  switch (size) {
    case "sm":
      return "h-2"
    case "md":
      return "h-4"
    case "lg":
      return "h-6"
    case "xl":
      return "h-8"
    case "xxl":
      return "h-10"
  }
}

export function Spacer({
  size = "lg",
  withDivider = false,
}: {
  size?: Size
  withDivider?: boolean
}) {
  const sizeClassName = getSizeClassName(size)
  return (
    <div
      className={cn(sizeClassName, "ignore-check", {
        "border-b-1 border-dotted border-neutral-500": withDivider,
      })}
    />
  )
}

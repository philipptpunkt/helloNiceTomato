import { cn } from "@/utils/cn"

export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "xxl"

function getHeightClassName(size: Size) {
  switch (size) {
    case "xs":
      return "h-1"
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

function getWidthClassName(size: Size) {
  switch (size) {
    case "xs":
      return "w-1"
    case "sm":
      return "w-2"
    case "md":
      return "w-4"
    case "lg":
      return "w-6"
    case "xl":
      return "w-8"
    case "xxl":
      return "w-10"
  }
}

interface SpacerProps {
  /**
   * Size of the spacer:
   * - xs: h-1 (4px) or w-1 (4px)
   * - sm: h-2 (8px) or w-2 (8px)
   * - md: h-4 (16px) or w-4 (16px)
   * - lg: h-6 (24px) or w-6 (24px)
   * - xl: h-8 (32px) or w-8 (32px)
   * - xxl: h-10 (40px) or w-10 (40px)
   * @default "lg"
   */
  size?: Size
  /**
   * Whether to use vertical spacing (width) instead of horizontal (height)
   * @default false
   */
  v?: boolean
}

export function Spacer({ size = "lg", v = false }: SpacerProps) {
  const sizeClassName = v ? getWidthClassName(size) : getHeightClassName(size)
  return <div className={cn(sizeClassName)} />
}

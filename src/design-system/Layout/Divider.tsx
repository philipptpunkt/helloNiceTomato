import { cn } from "@/utils/cn"

interface DividerProps {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
  lineStyle?:
    | "solid"
    | "dashed"
    | "dotted"
    | "double"
    | "groove"
    | "ridge"
    | "inset"
    | "outset"
}

const borderSizes = {
  sm: "border-[0.25px]",
  md: "border-[0.5px]",
  lg: "border-[1px]",
  xl: "border-[2px]",
  "2xl": "border-[3px]",
  "3xl": "border-[4px]",
}

const borderStyles = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double",
  groove: "border-groove",
  ridge: "border-ridge",
  inset: "border-inset",
  outset: "border-outset",
}

export function Divider({ size = "md", lineStyle = "solid" }: DividerProps) {
  return (
    <div
      className={cn([
        "w-full",
        borderSizes[size],
        borderStyles[lineStyle],
        "border-border-soft",
      ])}
    />
  )
}

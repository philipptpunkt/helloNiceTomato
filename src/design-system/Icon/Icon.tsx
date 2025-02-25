import { cn } from "@/utils/cn"
import { IconName } from "./IconNames"
import { iconSymbols } from "./IconSymbols"
import { cva, type VariantProps } from "class-variance-authority"

const iconVariants = cva("text-text-light dark:text-text-dark", {
  variants: {
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      md: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-10 w-10",
    },
    color: {
      default: ["text-text-light", "dark:text-text-dark"],
      primary: "text-primary",
      secondary: "text-secondary",
    },
    strokeWidth: {
      thin: "stroke-[0.25em]",
      light: "stroke-[0.5em]",
      regular: "stroke-[1em]",
      bold: "stroke-[1.5em]",
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
    strokeWidth: "regular",
  },
})

export type IconSize = NonNullable<VariantProps<typeof iconVariants>["size"]>
export type IconColor = NonNullable<VariantProps<typeof iconVariants>["color"]>
export type IconStrokeWidth = NonNullable<
  VariantProps<typeof iconVariants>["strokeWidth"]
>

interface IconProps extends VariantProps<typeof iconVariants> {
  iconName: IconName
  className?: string
  style?: React.CSSProperties
}

export function Icon({ iconName, size, color, strokeWidth }: IconProps) {
  const iconSymbol = iconSymbols[iconName]

  return (
    <svg className={cn(iconVariants({ size, color, strokeWidth }))}>
      <use href={`#${iconSymbol.id}`} />
    </svg>
  )
}

interface IconButtonProps extends IconProps {
  onClick: () => void
}

export function IconButton({
  iconName,
  size,
  color,
  strokeWidth,
  onClick,
}: IconButtonProps) {
  return (
    <button
      className={cn("p-2 hover:bg-primary-50 rounded-full")}
      onClick={onClick}
    >
      <Icon
        iconName={iconName}
        size={size}
        color={color}
        strokeWidth={strokeWidth}
      />
    </button>
  )
}

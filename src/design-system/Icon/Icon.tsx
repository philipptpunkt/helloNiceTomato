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
  },
  defaultVariants: {
    size: "md",
  },
})

interface IconProps extends VariantProps<typeof iconVariants> {
  iconName: IconName
  className?: string
  style?: React.CSSProperties
}

export function Icon({ iconName, size, className, style }: IconProps) {
  const iconSymbol = iconSymbols[iconName]

  return (
    <svg className={cn(iconVariants({ size }), className)} style={style}>
      <use href={`#${iconSymbol.id}`} />
    </svg>
  )
}

import { InputHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils/cn"

const checkboxVariants = cva(
  [
    "appearance-none",
    "h-8",
    "w-8",
    "rounded-md",
    "border-2",
    "bg-white dark:bg-black",
    "focus:outline-2",
    "focus:outline-focus",
    "focus:outline-offset-2",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
    "relative",
    "after:absolute",
    "after:inset-[3px]",
    "after:rounded-xs",
    "after:opacity-0",
    "checked:after:opacity-100",
  ],
  {
    variants: {
      variant: {
        default: ["border-border", "text-text", "after:bg-text-light"],
        primary: ["border-primary", "text-primary", "after:bg-primary"],
        secondary: ["border-secondary", "text-secondary", "after:bg-secondary"],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type LabelPosition = "left" | "right"

interface CheckboxProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "className" | "style" | "type"
    >,
    VariantProps<typeof checkboxVariants> {
  label?: string
  labelPosition?: LabelPosition
}

export function Checkbox({
  label,
  variant,
  labelPosition = "right",
  ...rest
}: CheckboxProps) {
  const checkbox = (
    <input
      type="checkbox"
      className={cn(checkboxVariants({ variant }))}
      {...rest}
    />
  )

  if (!label) {
    return checkbox
  }

  return (
    <label
      className={cn(
        "flex items-center gap-2 cursor-pointer",
        labelPosition === "left" && "flex-row-reverse"
      )}
    >
      {checkbox}
      <span className="text-sm font-medium text-text-soft">{label}</span>
    </label>
  )
}

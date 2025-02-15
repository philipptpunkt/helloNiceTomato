import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef, InputHTMLAttributes } from "react"
import { InputType } from "./types"
import { cn } from "@/utils/cn"

const inputVariants = cva(
  [
    "w-full",
    "px-4",
    "py-2",
    "rounded-full",
    "border-2",
    "transition-colors",
    "bg-white dark:bg-black",
    "text-text-soft",
    "font-medium",
    "placeholder:text-red-500",
    // "placeholder:text-text-placeholder",
    "placeholder:opacity-50 dark:placeholder:opacity-90",
    "focus:outline-2",
    "focus:outline-focus",
    "focus:outline-offset-2",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
  ],
  {
    variants: {
      variant: {
        default: ["border-border"],
        primary: ["border-primary"],
        secondary: ["border-secondary"],
      },
      hasError: {
        true: [
          "border-error",
          "bg-background-error dark:bg-background-error",
          "focus:outline-error",
        ],
        false: null,
      },
    },
    defaultVariants: {
      variant: "default",
      hasError: false,
    },
  }
)

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "type">,
    VariantProps<typeof inputVariants> {
  label?: string
  helpText?: string
  type?: InputType
  error?: string | boolean | null
  reserveHelpTextSpace?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helpText,
      error,
      variant,
      type = "text",
      reserveHelpTextSpace = false,
      ...props
    },
    ref
  ) => {
    const hasError =
      !props.disabled &&
      error !== undefined &&
      error !== null &&
      error !== false &&
      error !== ""

    const displayText =
      typeof error === "string" && error !== "" ? error : helpText

    return (
      <label className="space-y-2">
        {label && (
          <span className="block text-sm font-medium text-text-soft">
            {label}
          </span>
        )}
        <input
          ref={ref}
          type={type}
          className={cn(inputVariants({ variant, hasError }))}
          {...props}
        />
        {(displayText || reserveHelpTextSpace) && (
          <p
            className={`text-sm min-h-[1.25rem] ${
              hasError ? "text-error" : "text-text/50"
            }`}
          >
            {displayText || "\u00A0"}
          </p>
        )}
      </label>
    )
  }
)

Input.displayName = "Input"

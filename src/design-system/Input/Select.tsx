import { SelectHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/utils/cn"

const selectVariants = cva(
  [
    "w-full",
    "cursor-pointer",
    "px-4",
    "py-2",
    "rounded-full",
    "border-2",
    "bg-white dark:bg-black",
    "text-text-soft",
    "font-medium",
    "placeholder:text-red-500",
    "placeholder:opacity-50 dark:placeholder:opacity-90",
    "focus:outline-2",
    "focus:outline-focus",
    "focus:outline-offset-2",
    "disabled:opacity-50",
    "disabled:cursor-not-allowed",
    "appearance-none", // Hide default dropdown arrow
    "bg-no-repeat", // For custom dropdown arrow
    "bg-[length:12px_12px]", // Size of custom dropdown arrow
    "bg-[right_16px_center]", // Position of custom dropdown arrow (adjust padding here)
    "pr-12", // Add padding to the right to make room for the custom arrow
  ],
  {
    variants: {
      variant: {
        default: ["border-border"],
        primary: ["border-primary"],
        secondary: ["border-secondary"],
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type SelectVariant = NonNullable<VariantProps<typeof selectVariants>["variant"]>

interface SelectProps
  extends Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    "class" | "className" | "style"
  > {
  variant?: SelectVariant
}

export function Select(props: SelectProps) {
  const { variant = "default", children, ...rest } = props
  return (
    <div className="relative">
      <select className={cn(selectVariants({ variant }))} {...rest}>
        {children}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-text-soft">
        <svg
          className="h-4 w-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>
    </div>
  )
}

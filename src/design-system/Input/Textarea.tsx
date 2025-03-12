import { cn } from "@/utils/cn"
import { cva, VariantProps } from "class-variance-authority"
import { TextareaHTMLAttributes } from "react"

const textareaVariants = cva(
  [
    "w-full",
    "py-2",
    "px-4",
    "rounded-xl",
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

type TextareaVariant = NonNullable<
  VariantProps<typeof textareaVariants>["variant"]
>

interface TextareProps
  extends Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    "class" | "className" | "style"
  > {
  variant?: TextareaVariant
}

export function Textarea(props: TextareProps) {
  const { variant, ...rest } = props
  return <textarea className={cn(textareaVariants({ variant }))} {...rest} />
}

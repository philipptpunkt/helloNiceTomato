import { cva, type VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes } from "react"
import Link, { LinkProps } from "next/link"
import { cn } from "@/utils/cn"

const buttonVariants = cva(
  [
    "cursor-pointer",
    "inline-flex",
    "items-center",
    "justify-center",
    "flex-shrink-0",
    "w-fit",
    "py-2",
    "m-1",
    "text-md",
    "font-semibold",
    "transition-colors",
    "focus:outline-2",
    "focus:outline-focus",
    "focus:outline-offset-2",
    "disabled:opacity-50",
    "disabled:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        contained: [
          "text-neutral-50",
          "rounded-full",
          "bg-primary",
          "hover:bg-primary-400 dark:hover:bg-primary-500",
          "active:bg-primary dark:active:bg-primary",
          "border-2",
          "border-primary-500 dark:border-primary-400",
          "hover:border-primary-500 dark:hover:border-primary-400",
          "active:border-primary-200 dark:active:border-primary-600",
        ],
        outlined: [
          "border-2",
          "text-primary",
          "hover:text-primary-400 dark:hover:text-primary-500",
          "active:text-primary dark:active:text-primary",
          "border-primary",
          "hover:border-primary-300 dark:hover:border-primary-600",
          "active:border-primary dark:active:border-primary",
          "rounded-full",
        ],
        text: [
          "text-primary",
          "border-b-2 border-transparent",
          "hover:text-primary-400 dark:hover:text-primary-500",
          "hover:border-primary-400 dark:hover:border-primary-500",
        ],
      },
      contentStyle: {
        snug: ["px-1"],
        narrow: ["px-4"],
        wide: ["px-16"],
        full: ["w-full"],
      },
      secondary: {
        false: null,
      },
    },
    compoundVariants: [
      {
        variant: "contained",
        secondary: true,
        class: [
          "bg-secondary",
          "hover:bg-secondary-400 dark:hover:bg-secondary-500",
          "active:bg-secondary dark:active:bg-secondary",
          "border-secondary-500 dark:border-secondary-400",
          "hover:border-secondary-500 dark:hover:border-secondary-400",
          "active:border-secondary-200 dark:active:border-secondary-600",
        ],
      },
      {
        variant: "outlined",
        secondary: true,
        class: [
          "text-secondary",
          "hover:text-secondary-400 dark:hover:text-secondary-500",
          "active:text-secondary dark:active:text-secondary",
          "border-secondary",
          "hover:border-secondary-300 dark:hover:border-secondary-600",
          "active:border-secondary dark:active:border-secondary",
        ],
      },
      {
        variant: "text",
        secondary: true,
        class: [
          "text-secondary",
          "hover:text-secondary-400 dark:hover:text-secondary-500",
          "hover:border-secondary-400 dark:hover:border-secondary-500",
        ],
      },
    ],
    defaultVariants: {
      variant: "contained",
      contentStyle: "wide",
      secondary: false,
    },
  }
)

type ButtonBaseProps = VariantProps<typeof buttonVariants>

type ButtonAsButton = {
  type: "button" | "submit" | "reset"
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "type"> &
  ButtonBaseProps

type ButtonAsLink = {
  type: "link"
  children?: React.ReactNode
} & Omit<LinkProps, "className"> &
  ButtonBaseProps

export type ButtonProps = ButtonAsButton | ButtonAsLink

function Button({ variant, contentStyle, secondary, ...props }: ButtonProps) {
  if (props.type === "link") {
    const { href, ...linkProps } = props
    return (
      <Link
        className={cn(buttonVariants({ variant, contentStyle, secondary }))}
        href={href}
        {...linkProps}
      />
    )
  }

  const { type, ...buttonProps } = props

  return (
    <button
      type={type}
      className={buttonVariants({ variant, contentStyle, secondary })}
      {...buttonProps}
    />
  )
}

Button.displayName = "Button"

export { Button }

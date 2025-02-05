import { cva, type VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes } from "react"
import Link, { LinkProps } from "next/link"

const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "flex-shrink-0",
    "w-fit",
    "py-2",
    "text-md",
    "font-semibold",
    "transition-colors",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-primary-500",
    "focus:ring-offset-2",
    "disabled:opacity-50",
    "disabled:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        contained: [
          "bg-primary-500",
          "text-white",
          "hover:bg-primary-600",
          "rounded-full",
          "shadow-sm",
          "border-2",
          "border-primary-500 hover:border-primary-200",
        ],
        outlined: [
          "border-2",
          "border-primary-500",
          "text-primary-500",
          "hover:bg-primary-50",
          "rounded-full",
        ],
        text: ["text-primary-500", "hover:bg-primary-50"],
      },
      contentStyle: {
        snug: ["px-1"],
        narrow: ["px-4"],
        wide: ["px-16"],
        full: ["w-full"],
      },
      secondary: {
        true: [
          "[&.bg-primary-500]:bg-secondary-500",
          "[&.text-primary-500]:text-secondary-500",
          "[&.hover\\:bg-primary-600]:hover:bg-secondary-600",
          "[&.hover\\:bg-primary-50]:hover:bg-secondary-50",
          "[&.border-primary-500]:border-secondary-500",
          "[&.hover\\:border-primary-200]:hover:border-secondary-200",
          "[&.focus\\:ring-primary-500]:focus:ring-secondary-500",
        ],
      },
    },
    defaultVariants: {
      variant: "contained",
      contentStyle: "wide",
      secondary: false,
    },
  }
)

// Update the types
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
        className={buttonVariants({ variant, contentStyle, secondary })}
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

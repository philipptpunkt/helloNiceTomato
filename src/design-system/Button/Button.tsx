import { cva, type VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes } from "react"
import Link, { LinkProps } from "next/link"

const buttonVariants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "py-2",
    "text-sm",
    "font-medium",
    "transition-colors",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-red-500",
    "focus:ring-offset-2",
    "disabled:opacity-50",
    "disabled:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        contained: [
          "bg-red-500",
          "text-white",
          "hover:bg-red-600",
          "rounded-full",
          "shadow-sm",
        ],
        outlined: [
          "border-2",
          "border-red-500",
          "text-red-500",
          "hover:bg-red-50",
          "rounded-full",
        ],
        text: ["text-red-500", "hover:bg-red-50"],
      },
      contentStyle: {
        snug: ["px-1"],
        narrow: ["px-4"],
        wide: ["px-16"],
        full: ["w-full"],
      },
    },
    defaultVariants: {
      variant: "contained",
      contentStyle: "wide",
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
} & Omit<LinkProps, "className"> &
  ButtonBaseProps

export type ButtonProps = ButtonAsButton | ButtonAsLink

function Button({ variant, contentStyle, ...props }: ButtonProps) {
  if (props.type === "link") {
    const { href, ...linkProps } = props
    return (
      <Link
        className={buttonVariants({ variant, contentStyle })}
        href={href}
        {...linkProps}
      />
    )
  }

  const { type, ...buttonProps } = props

  return (
    <button
      type={type}
      className={buttonVariants({ variant, contentStyle })}
      {...buttonProps}
    />
  )
}

Button.displayName = "Button"

export { Button }

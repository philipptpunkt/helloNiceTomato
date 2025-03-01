import React from "react"
import {
  Button as ButtonUI,
  ButtonProps,
} from "../../design-system/Button/Button"

export interface ButtonUIProps {
  variant: ButtonProps["variant"]
  contentStyle?: ButtonProps["contentStyle"]
  label: string
  onClick?: () => void
  secondary?: boolean
  disabled?: boolean
}

export const Button = ({
  variant = "contained",
  contentStyle = "wide",
  label,
  onClick,
  secondary = false,
  disabled = false,
}: ButtonUIProps) => {
  return (
    <ButtonUI
      type="button"
      variant={variant}
      onClick={onClick}
      contentStyle={contentStyle}
      secondary={secondary}
      disabled={disabled}
    >
      {label}
    </ButtonUI>
  )
}

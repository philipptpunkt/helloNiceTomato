import React, { useState } from "react"
import { InputType, Input, InputVariant } from "@/design-system/Input"
export interface InputProps {
  variant: InputVariant
  placeholder: string
  label?: string
  helpText?: string
  type: InputType
  disabled: boolean
  error: boolean | string
}

export const InputStory = ({
  variant = "default",
  placeholder = "",
  label,
  helpText,
  type = "text",
  disabled = false,
  error = false,
}: InputProps) => {
  const [value, setValue] = useState("")

  return (
    <Input
      variant={variant}
      placeholder={placeholder}
      label={label}
      helpText={helpText}
      type={type}
      disabled={disabled}
      name="inputStory"
      value={value}
      onChange={(event) => {
        const value = event.target.value
        setValue(value)
      }}
      error={error}
    />
  )
}

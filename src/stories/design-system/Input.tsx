import React, { useState } from "react"
import { StoryWrapper } from "../components/StoryWrapper"
import { Label } from "../components/Label"
import { Spacer } from "../components/Spacer"
import { InputType, Input, InputVariant } from "@/design-system/Input"

function getStoryLabel(variant: InputVariant) {
  switch (variant) {
    case "primary":
      return "Primary"
    case "secondary":
      return "Secondary"
    default:
      return "Default"
  }
}

export interface InputProps {
  variant: InputVariant
  placeholder: string
  label: string
  type: InputType
  disabled: boolean
  error: boolean | string
}

export const InputStory = ({
  variant = "default",
  placeholder = "",
  label,
  type = "text",
  disabled = false,
  error = false,
}: InputProps) => {
  const [value, setValue] = useState("")

  let storyLabel = getStoryLabel(variant)

  if (disabled || error) {
    storyLabel = disabled ? "Disabled" : "Error"
  }

  return (
    <StoryWrapper topic="Design System" headline="Input" padded>
      <Label text={storyLabel} />
      <div className="w-full">
        <Input
          variant={variant}
          placeholder={placeholder}
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
      </div>
      <Spacer withDivider />
      <Label text="With label" size="sm" />
      <div className="w-full">
        <Input
          variant={variant}
          placeholder={placeholder}
          label={label}
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
      </div>
      <Spacer withDivider />
      <Label text="With help text" size="sm" />
      <div className="w-full">
        <Input
          variant={variant}
          placeholder={placeholder}
          label={label}
          type={type}
          disabled={disabled}
          name="inputStory"
          value={value}
          onChange={(event) => {
            const value = event.target.value
            setValue(value)
          }}
          helpText="With some addional help text"
        />
      </div>
      <Spacer withDivider />
      <Label text="With error" size="sm" />
      <div className="w-full">
        <Input
          variant={variant}
          placeholder={placeholder}
          label={label}
          type={type}
          disabled={disabled}
          name="inputStory"
          value={value}
          onChange={(event) => {
            const value = event.target.value
            setValue(value)
          }}
          error={"Error message"}
        />
      </div>
      <Spacer withDivider />
      <Label text="Disabled" size="sm" />
      <div className="w-full">
        <Input
          variant={variant}
          placeholder={placeholder}
          type={type}
          disabled={true}
          name="inputStory"
          value={value}
          onChange={(event) => {
            const value = event.target.value
            setValue(value)
          }}
        />
      </div>
      <Spacer />
    </StoryWrapper>
  )
}

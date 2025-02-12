import {
  Button as ButtonUI,
  ButtonProps,
} from "../../design-system/Button/Button"
import React from "react"
import { StoryWrapper } from "../components/StoryWrapper"
import { Label } from "../components/Label"
import { Spacer } from "../components/Spacer"

export interface ButtonUIProps {
  variant: ButtonProps["variant"]
  contentStyle?: ButtonProps["contentStyle"]
  label: string
  onClick?: () => void
  secondary?: boolean
}

function getTypeHeadline(type: ButtonProps["variant"]) {
  switch (type) {
    case "outlined":
      return "Outlined Button"
    case "text":
      return "Text Button"
    default:
      return "Contained Button"
  }
}

export const Button = ({
  variant = "contained",
  contentStyle = "wide",
  label = "Button",
  onClick,
  secondary,
}: ButtonUIProps) => {
  const typeHeadline = getTypeHeadline(variant)

  return (
    <StoryWrapper topic="Design System" headline="Button" padded>
      <Label text={`${typeHeadline} (${contentStyle})`} />
      <div className="w-full">
        <ButtonUI
          type="button"
          variant={variant}
          onClick={onClick}
          contentStyle={contentStyle}
          secondary={secondary}
        >
          {label}
        </ButtonUI>
      </div>
      <Spacer />
      <Label text="Disabled" size="sm" />
      <div className="w-full">
        <ButtonUI
          type="button"
          variant={variant}
          onClick={onClick}
          contentStyle={contentStyle}
          secondary={secondary}
          disabled
        >
          {label}
        </ButtonUI>
      </div>
      <Spacer />
    </StoryWrapper>
  )
}

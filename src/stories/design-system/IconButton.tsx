import React from "react"
import {
  IconButton as Button,
  IconName,
  IconSize,
  IconColor,
  IconStrokeWidth,
  IconBackground,
} from "@/design-system/Icon"

export interface IconProps {
  onClick: () => void
  iconName: IconName
  size?: IconSize
  color?: IconColor
  background?: IconBackground
  strokeWidth?: IconStrokeWidth
}

export const IconButton = ({
  onClick,
  iconName,
  size = "md",
  color = "default",
  background = "transparent",
  strokeWidth = "regular",
}: IconProps) => {
  return (
    <Button
      onClick={onClick}
      iconName={iconName}
      size={size}
      color={color}
      background={background}
      strokeWidth={strokeWidth}
    />
  )
}

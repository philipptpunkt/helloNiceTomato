import React from "react"
import {
  Icon,
  IconName,
  IconSize,
  IconColor,
  IconStrokeWidth,
} from "@/design-system/Icon"

export interface IconProps {
  iconSize: IconSize
  color?: IconColor
  strokeWidth?: IconStrokeWidth
}

const icons = Object.values(IconName)

export const Icons = ({
  iconSize = "md",
  color = "default",
  strokeWidth = "regular",
}: IconProps) => {
  return (
    <div className="flex flex-wrap w-full">
      {icons.map((icon, index) => {
        return (
          <div className="w-36 mb-8" key={index}>
            <div className="flex justify-center">
              <Icon
                iconName={icon}
                size={iconSize}
                color={color}
                strokeWidth={strokeWidth}
              />
            </div>
            <p className="font-thin mt-4 text-center">{icon}</p>
          </div>
        )
      })}
    </div>
  )
}

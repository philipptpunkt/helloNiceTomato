import React from "react"
import { StoryWrapper } from "../components/StoryWrapper"
import { Label } from "../components/Label"
import { Spacer } from "../components/Spacer"
import { Icon, IconName, IconSize } from "@/design-system/Icon"

export interface IconProps {
  iconSize: IconSize
  color?: string
}

const icons = Object.values(IconName)

export const Icons = ({ iconSize, color }: IconProps) => {
  return (
    <StoryWrapper topic="Design System" headline="Icons" padded>
      <Label text="Overview" />
      <div className="flex flex-wrap w-full">
        {icons.map((icon, index) => {
          console.log(">>> ICON", icon)
          return (
            <div className="w-36 mb-8" key={index}>
              <div className="flex justify-center">
                <Icon
                  iconName={icon}
                  size={iconSize}
                  //  color={color}
                  // style={{ color: "#000" }}
                />
                {/* <Icon iconName={IconName.icCheckCircle} /> */}
              </div>
              <p className="font-thin mt-4 text-center">{icon}</p>
            </div>
          )
        })}
      </div>
      <Spacer />
    </StoryWrapper>
  )
}

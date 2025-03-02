import React from "react"
import { ListItem as ListItemUI } from "@/design-system/List"
import { IconName } from "@/design-system/Icon"

interface Props {
  label?: string
  iconName?: IconName
  children: React.ReactNode
  horizontalPadding?: boolean
  verticalPadding?: boolean
}

export const ListItem = ({
  label,
  iconName,
  children,
  horizontalPadding = false,
  verticalPadding = false,
}: Props) => {
  return (
    <ul>
      <ListItemUI
        label={label}
        iconName={iconName}
        horizontalPadding={horizontalPadding}
        verticalPadding={verticalPadding}
      >
        {children}
      </ListItemUI>
    </ul>
  )
}

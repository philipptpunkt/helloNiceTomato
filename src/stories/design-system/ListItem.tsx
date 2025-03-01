import React from "react"
import { ListItem as ListItemUI } from "@/design-system/List"
import { IconName } from "@/design-system/Icon"

interface Props {
  label?: string
  iconName?: IconName
  children: React.ReactNode
  horizontalPadding?: boolean
}

export const ListItem = ({
  label,
  iconName,
  children,
  horizontalPadding = false,
}: Props) => {
  return (
    <ListItemUI
      label={label}
      iconName={iconName}
      horizontalPadding={horizontalPadding}
    >
      {children}
    </ListItemUI>
  )
}

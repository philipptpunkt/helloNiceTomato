import { cn } from "@/utils/cn"
import { Icon, IconColor } from "../Icon/Icon"
import { IconName } from "../Icon/IconNames"
import { Label } from "../Typography/Label"
import { IconButton } from "../Icon/IconButton"

interface ListItemProps {
  label?: string
  iconName?: IconName
  iconColor?: IconColor
  children: React.ReactNode
  onClick?: () => void
  horizontalPadding?: boolean
  verticalPadding?: boolean | "wide" | "wider"
}

export function ListItem({
  label,
  iconName,
  iconColor,
  children,
  onClick,
  horizontalPadding = false,
  verticalPadding = false,
}: ListItemProps) {
  return (
    <li
      className={cn([
        "flex justify-between items-center",
        {
          "px-4": horizontalPadding,
          "py-2": verticalPadding,
          "py-4": verticalPadding === "wide",
          "py-8": verticalPadding === "wider",
        },
      ])}
    >
      <div className="flex flex-col w-full">
        {label ? (
          <>
            <Label label={label} uppercase />
            <div className="h-1" />
          </>
        ) : null}
        <div className="font-medium">{children}</div>
      </div>
      {iconName ? (
        onClick ? (
          <IconButton iconName={iconName} onClick={onClick} color={iconColor} />
        ) : (
          <Icon iconName={iconName} color={iconColor} />
        )
      ) : null}
    </li>
  )
}

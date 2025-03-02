import { cn } from "@/utils/cn"
import { Icon } from "../Icon/Icon"
import { IconName } from "../Icon/IconNames"
import { Label } from "../Typography/Label"

interface ListItemProps {
  label?: string
  iconName?: IconName
  children: React.ReactNode
  horizontalPadding?: boolean
  verticalPadding?: boolean
}

export function ListItem({
  label,
  iconName,
  children,
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
        },
      ])}
    >
      <div className="flex flex-col">
        {label ? (
          <>
            <Label label={label} />
            <div className="h-1" />
          </>
        ) : null}
        <div>{children}</div>
      </div>
      {iconName ? <Icon iconName={iconName} /> : null}
    </li>
  )
}

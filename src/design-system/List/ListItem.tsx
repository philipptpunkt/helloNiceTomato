import { cn } from "@/utils/cn"
import { Icon } from "../Icon/Icon"
import { IconName } from "../Icon/IconNames"
import { Label } from "../Typography/Label"

interface ListItemProps {
  label?: string
  iconName?: IconName
  children: React.ReactNode
  horizontalPadding?: boolean
}

export function ListItem({
  label,
  iconName,
  children,
  horizontalPadding = false,
}: ListItemProps) {
  return (
    <div
      className={cn([
        "flex justify-between items-center",
        {
          "px-4": horizontalPadding,
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
    </div>
  )
}

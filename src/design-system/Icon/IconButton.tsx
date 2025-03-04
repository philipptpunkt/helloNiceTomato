import { cn } from "@/utils/cn"
import { Icon, IconProps } from "./Icon"
import { IconBackground, interactiveIconVariants } from "./variants"

interface IconButtonProps extends IconProps {
  onClick: () => void
  background?: IconBackground
}

export function IconButton({
  iconName,
  size,
  color,
  background,
  strokeWidth,
  onClick,
}: IconButtonProps) {
  return (
    <button
      className={cn(interactiveIconVariants({ background }))}
      onClick={onClick}
    >
      <Icon
        iconName={iconName}
        size={size}
        color={color}
        strokeWidth={strokeWidth}
      />
    </button>
  )
}

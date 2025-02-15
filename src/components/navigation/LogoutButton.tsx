import { Icon, IconName } from "@/design-system/Icon"
import { cn } from "@/utils/cn"
import Link from "next/link"

export function LogoutButton({ className }: { className?: string }) {
  return (
    <Link
      href={"/logout"}
      className={cn("p-2 hover:bg-primary-50 rounded-full", className)}
    >
      <Icon iconName={IconName.icSignOut} />
    </Link>
  )
}

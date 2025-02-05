import { Icon, IconName } from "@/design-system/Icon"
import Link from "next/link"

export function LogoutButton() {
  return (
    <Link href={"/logout"} className="p-2 hover:bg-primary-50 rounded-full">
      <Icon iconName={IconName.icSignOut} />
    </Link>
  )
}

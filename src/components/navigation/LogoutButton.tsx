"use client"

import { logout } from "@/actions/logout"
import { Icon, IconName } from "@/design-system/Icon"
import { cn } from "@/utils/cn"

export function LogoutButton({ className }: { className?: string }) {
  const handleLogout = async () => {
    await logout()
  }
  return (
    <button
      onClick={handleLogout}
      className={cn("p-2 hover:bg-primary-50 rounded-full", className)}
    >
      <Icon iconName={IconName.icSignOut} />
    </button>
  )
}

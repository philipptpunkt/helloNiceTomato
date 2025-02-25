"use client"

import { logout } from "@/actions/logout"
import { IconButton, IconName } from "@/design-system/Icon"

export function LogoutButton() {
  const handleLogout = async () => {
    await logout()
  }
  return <IconButton onClick={handleLogout} iconName={IconName.icSignOut} />
}

"use client"

import { logout } from "@/actions/logout"
import { Button } from "@/design-system/Button"
export function LogoutButton() {
  const handleLogout = async () => {
    await logout()
  }

  return (
    <Button type="button" variant="outlined" onClick={handleLogout}>
      Log out
    </Button>
  )
}

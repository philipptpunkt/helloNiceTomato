"use client"

import { Button } from "@/design-system/Button"
import { ListItem } from "@/design-system/List"
import { LogoutButton } from "./LogoutButton"
import { IconName } from "@/design-system/Icon"

export function SettingsList() {
  return (
    <>
      <ul>
        <ListItem
          iconName={IconName.icPencilSimple}
          iconColor="soft"
          onClick={() => console.log("Change Email address")}
          verticalPadding
        >
          <div>Change email address</div>
        </ListItem>
        <ListItem
          iconName={IconName.icPencilSimple}
          iconColor="soft"
          onClick={() => console.log("Change Password")}
          verticalPadding
        >
          <div className="">Change password</div>
        </ListItem>
      </ul>
      <div className="h-16" />
      <ul>
        <ListItem verticalPadding>
          <div className="flex justify-center">
            <LogoutButton />
          </div>
        </ListItem>
        <ListItem verticalPadding>
          <div className="flex justify-center">
            <Button type="button" variant="text">
              Delete account
            </Button>
          </div>
        </ListItem>
      </ul>
    </>
  )
}

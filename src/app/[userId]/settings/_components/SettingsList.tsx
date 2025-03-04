"use client"

import { Button } from "@/design-system/Button"
import { ListItem } from "@/design-system/List"
import { LogoutButton } from "./LogoutButton"
import { IconName } from "@/design-system/Icon"
import { Divider } from "@/design-system/Layout"

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
      <div className="h-8" />
      <Divider size="sm" />
      <div className="h-8" />
      <ul>
        <ListItem verticalPadding>
          <div className="flex justify-center">
            <LogoutButton />
          </div>
        </ListItem>
        <ListItem verticalPadding>
          <div className="flex justify-center">
            <Button type="button" variant="text" contentStyle="snug">
              Delete account
            </Button>
          </div>
        </ListItem>
      </ul>
    </>
  )
}

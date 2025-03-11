"use client"

import { useState } from "react"
import { IconName } from "@/design-system/Icon"
import { Card } from "@/design-system/Card"
import { cn } from "@/utils/cn"
import { ListItem } from "@/design-system/List"
import { ProfileEditModal } from "./ProfileEditModal"

interface ProfileSectionProps {
  userId: string
  profile: {
    display_name: string | null
    company_name: string | null
    email: string
  }
}

export function ProfileSection({ userId, profile }: ProfileSectionProps) {
  const [showEditModal, setShowEditModal] = useState(false)
  const [focusField, setFocusField] = useState<"name" | "company" | null>(null)

  // If no display name set, show edit overlay immediately
  if (!profile.display_name) {
    return (
      <ProfileEditModal
        userId={userId}
        onClose={() => setShowEditModal(false)}
        focusField={"name"}
      />
    )
  }

  const handleEdit = (field: "name" | "company") => {
    setFocusField(field)
    setShowEditModal(true)
  }

  return (
    <>
      <Card>
        <ul>
          <ListItem
            label="Display name"
            iconName={IconName.icPencilSimple}
            iconColor="light"
            onClick={() => handleEdit("name")}
            verticalPadding
          >
            {profile.display_name}
          </ListItem>
          <ListItem
            label="Company name"
            iconName={IconName.icPencilSimple}
            iconColor="light"
            onClick={() => handleEdit("company")}
            verticalPadding
          >
            <p
              className={cn([
                "font-medium h-6",
                {
                  "opacity-20": !profile.company_name,
                },
              ])}
            >
              {profile.company_name ? profile.company_name : "not set"}
            </p>
          </ListItem>
          <ListItem label="Email" verticalPadding="wide">
            {profile.email}
          </ListItem>
        </ul>
      </Card>

      {showEditModal && (
        <ProfileEditModal
          userId={userId}
          initialDisplayName={profile.display_name ?? undefined}
          initialCompanyName={profile.company_name ?? undefined}
          onClose={() => {
            setShowEditModal(false)
            setFocusField(null)
          }}
          focusField={focusField}
        />
      )}
    </>
  )
}

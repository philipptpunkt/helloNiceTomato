"use client"

import { useState } from "react"
import { ProfileEditOverlay } from "@/components/overlays/ProfileEditOverlay"
import { IconButton, IconName } from "@/design-system/Icon"
import { Card } from "@/design-system/Card"

interface ProfileEditorProps {
  userId: string
  profile: {
    display_name: string | null
    company_name: string | null
    email: string
  }
}

export function ProfileEditor({ userId, profile }: ProfileEditorProps) {
  const [showEditOverlay, setShowEditOverlay] = useState(false)
  const [focusField, setFocusField] = useState<"name" | "company" | null>(null)

  // If no display name set, show edit overlay immediately
  if (!profile.display_name) {
    return (
      <ProfileEditOverlay
        userId={userId}
        onClose={() => setShowEditOverlay(false)}
        focusField={"name"}
      />
    )
  }

  const handleEdit = (field: "name" | "company") => {
    setFocusField(field)
    setShowEditOverlay(true)
  }

  return (
    <>
      <Card>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm text-gray-600">Display Name</label>
              <p className="font-medium h-6">{profile.display_name}</p>
            </div>
            <IconButton
              iconName={IconName.icPencilSimple}
              color="soft"
              onClick={() => handleEdit("name")}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm text-gray-600">Company Name</label>
              <p className="font-medium h-6">{profile.company_name}</p>
            </div>
            <IconButton
              iconName={IconName.icPencilSimple}
              color="soft"
              onClick={() => handleEdit("company")}
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <p className="font-medium">{profile.email}</p>
          </div>
        </div>
      </Card>

      {showEditOverlay && (
        <ProfileEditOverlay
          userId={userId}
          initialDisplayName={profile.display_name ?? undefined}
          initialCompanyName={profile.company_name ?? undefined}
          onClose={() => {
            setShowEditOverlay(false)
            setFocusField(null)
          }}
          focusField={focusField}
        />
      )}
    </>
  )
}

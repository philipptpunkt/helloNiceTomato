"use client"

import { useState } from "react"
import { PencilIcon } from "@heroicons/react/24/outline"
import { ProfileEditOverlay } from "@/components/overlays/ProfileEditOverlay"

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
      <div className="bg-white shadow rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <label className="text-sm text-gray-600">Display Name</label>
            <p className="font-medium h-6">{profile.display_name}</p>
          </div>
          <button
            onClick={() => handleEdit("name")}
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            <PencilIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <label className="text-sm text-gray-600">Company Name</label>
            <p className="font-medium h-6">{profile.company_name}</p>
          </div>
          <button
            onClick={() => handleEdit("company")}
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            <PencilIcon className="h-5 w-5" />
          </button>
        </div>

        <div>
          <label className="text-sm text-gray-600">Email</label>
          <p className="font-medium">{profile.email}</p>
        </div>
      </div>

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

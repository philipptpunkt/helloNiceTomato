"use client"

import { useState } from "react"
import { PublicProfileSetupOverlay } from "@/components/overlays/PublicProfileSetupOverlay"
import { BioEditOverlay } from "@/components/overlays/BioEditOverlay"
import { PublicProfile } from "@/types/profile"
import { Icon, IconButton, IconName } from "@/design-system/Icon"
import { CardWithHeading } from "@/design-system/Card"
import { Label } from "@/design-system/Typography"

interface PublicProfileEditorProps {
  userId: string
  publicProfile: PublicProfile | null
}

export function PublicProfileEditor({
  userId,
  publicProfile,
}: PublicProfileEditorProps) {
  const [showSetupOverlay, setShowSetupOverlay] = useState(false)
  const [showBioOverlay, setShowBioOverlay] = useState(false)

  if (!publicProfile) {
    return (
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Public Profile</h2>
        <p className="text-gray-600 mb-4">
          Create a public profile to share your information with others.
        </p>
        <button
          onClick={() => setShowSetupOverlay(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create Public Profile
        </button>
        {showSetupOverlay && (
          <PublicProfileSetupOverlay
            userId={userId}
            publicProfile={null}
            onClose={() => setShowSetupOverlay(false)}
          />
        )}
      </div>
    )
  }

  return (
    <CardWithHeading
      heading={<h2 className="text-xl font-semibold mb-4">Public Profile</h2>}
    >
      <div className="space-y-4">
        <div className="group relative">
          <Label label="Title" />
          <div className="flex items-center">
            <p className="flex-grow font-medium">
              {publicProfile.title || "No title set"}
            </p>
            <IconButton
              iconName={IconName.icPencilSimple}
              color="soft"
              onClick={() => setShowSetupOverlay(true)}
            />
          </div>
        </div>

        <div className="group relative">
          <Label label="Redirect URL" />
          <div className="flex items-center">
            <div className="flex items-center space-x-2 flex-grow">
              <p className="font-medium">
                {publicProfile.redirectUrl || "No redirect URL set"}
              </p>
              {publicProfile.redirectActive && publicProfile.redirectUrl ? (
                <span className="inline-flex gap-2 items-center text-sm text-success">
                  <Icon iconName={IconName.icCheckCircle} color="success" />
                  Active
                </span>
              ) : (
                <span className="inline-flex gap-2 items-center text-sm text-error">
                  <Icon iconName={IconName.icProhibit} color="error" />
                  Not active
                </span>
              )}
            </div>
            <IconButton
              iconName={IconName.icPencilSimple}
              color="soft"
              onClick={() => setShowSetupOverlay(true)}
            />
          </div>
        </div>

        <div className="group relative">
          <Label label="Bio" />
          <div className="flex items-start">
            <p className="flex-grow font-medium">
              {publicProfile.bio || "No bio added yet"}
            </p>
            <IconButton
              iconName={IconName.icPencilSimple}
              color="soft"
              onClick={() => setShowBioOverlay(true)}
            />
          </div>
        </div>
      </div>

      {showSetupOverlay && (
        <PublicProfileSetupOverlay
          userId={userId}
          publicProfile={publicProfile}
          onClose={() => setShowSetupOverlay(false)}
        />
      )}
      {showBioOverlay && (
        <BioEditOverlay
          profileId={publicProfile.id}
          publicProfile={publicProfile}
          onClose={() => setShowBioOverlay(false)}
        />
      )}
    </CardWithHeading>
  )
}

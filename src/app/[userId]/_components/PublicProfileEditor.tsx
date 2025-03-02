"use client"

import { useState } from "react"
import { PublicProfileSetupOverlay } from "@/components/overlays/PublicProfileSetupOverlay"
import { BioEditOverlay } from "@/components/overlays/BioEditOverlay"
import { PublicProfile } from "@/types/profile"
import { Icon, IconName } from "@/design-system/Icon"
import { CardWithHeading } from "@/design-system/Card"
import { ListItem } from "@/design-system/List"

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
      <ul>
        <ListItem
          label="Title"
          iconName={IconName.icPencilSimple}
          iconColor="soft"
          onClick={() => setShowSetupOverlay(true)}
          verticalPadding
        >
          {publicProfile.title || "No title set"}
        </ListItem>
        <ListItem
          label="Redirect Urls"
          iconName={IconName.icPencilSimple}
          iconColor="soft"
          onClick={() => setShowSetupOverlay(true)}
          verticalPadding
        >
          <div className="flex items-center space-x-2 flex-grow">
            <p>{publicProfile.redirectUrl || "No redirect URL set"}</p>
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
        </ListItem>
        <ListItem
          label="Bio"
          iconName={IconName.icPencilSimple}
          iconColor="soft"
          onClick={() => setShowBioOverlay(true)}
          verticalPadding
        >
          {publicProfile.bio || "No bio added yet"}
        </ListItem>
      </ul>

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

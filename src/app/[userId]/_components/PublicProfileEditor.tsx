"use client"

import { useState } from "react"
import { PublicProfileSetupOverlay } from "@/components/overlays/PublicProfileSetupOverlay"
import { BioEditOverlay } from "@/components/overlays/BioEditOverlay"
import { PublicProfile } from "@/types/profile"
import { Icon, IconName } from "@/design-system/Icon"

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
    <div className="mt-8 p-6 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Public Profile</h2>

      <div className="space-y-4">
        <div className="group relative">
          <h3 className="font-medium mb-2">Title</h3>
          <div className="flex items-center">
            <p className="text-gray-600 flex-grow">
              {publicProfile.title || "No title set"}
            </p>
            <button
              onClick={() => setShowSetupOverlay(true)}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <Icon iconName={IconName.icPencilSimple} />
            </button>
          </div>
        </div>

        <div className="group relative">
          <h3 className="font-medium mb-2">Redirect URL</h3>
          <div className="flex items-center">
            <div className="flex items-center space-x-2 flex-grow">
              <p className="text-gray-600">
                {publicProfile.redirectUrl || "No redirect URL set"}
              </p>
              {publicProfile.redirectActive && publicProfile.redirectUrl && (
                <span className="inline-flex items-center text-sm text-green-600">
                  <Icon iconName={IconName.icCheckCircle} />
                  Active
                </span>
              )}
            </div>
            <button
              onClick={() => setShowSetupOverlay(true)}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <Icon iconName={IconName.icPencilSimple} />
            </button>
          </div>
        </div>

        <div className="group relative">
          <h3 className="font-medium mb-2">Bio</h3>
          <div className="flex items-start">
            <p className="text-gray-600 flex-grow">
              {publicProfile.bio || "No bio added yet"}
            </p>
            <button
              onClick={() => setShowBioOverlay(true)}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <Icon iconName={IconName.icPencilSimple} />
            </button>
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
    </div>
  )
}

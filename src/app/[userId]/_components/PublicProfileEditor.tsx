"use client"

import { useState } from "react"
import { PublicProfileSetupOverlay } from "@/components/overlays/PublicProfileSetupOverlay"
import { BioEditOverlay } from "@/components/overlays/BioEditOverlay"
import { CheckCircleIcon } from "@heroicons/react/24/outline"
import { PublicProfile } from "@/types/profile"

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
        <div>
          <h3 className="font-medium mb-2">Title</h3>
          <p className="text-gray-600">
            {publicProfile.title || "No title set"}
          </p>
        </div>

        {publicProfile.redirectUrl && (
          <div>
            <h3 className="font-medium mb-2">Redirect URL</h3>
            <div className="flex items-center space-x-2">
              <p className="text-gray-600">{publicProfile.redirectUrl}</p>
              {publicProfile.redirectActive && (
                <span className="inline-flex items-center text-sm text-green-600">
                  <CheckCircleIcon className="h-5 w-5 mr-1" />
                  Active
                </span>
              )}
            </div>
          </div>
        )}

        <div>
          <h3 className="font-medium mb-2">Bio</h3>
          {publicProfile.bio ? (
            <p className="text-gray-600">{publicProfile.bio}</p>
          ) : (
            <p className="text-gray-400">No bio added yet</p>
          )}
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => setShowSetupOverlay(true)}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
          >
            Edit Settings
          </button>
          <button
            onClick={() => setShowBioOverlay(true)}
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200"
          >
            Edit Bio
          </button>
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

"use client"

import { useState } from "react"
import { PublicProfile } from "@/types/profile"
import { Icon, IconName } from "@/design-system/Icon"
import { CardWithHeading } from "@/design-system/Card"
import { ListItem } from "@/design-system/List"
import Link from "next/link"
import { PublicProfileEditModal } from "./PublicProfileEditModal"
import { cn } from "@/utils/cn"
import { PublicBioEditModal } from "./PublicBioEditModal"

interface PublicProfileSectionProps {
  userId: string
  publicProfile: PublicProfile | null
}

export function PublicProfileSection({
  userId,
  publicProfile,
}: PublicProfileSectionProps) {
  const [showPublicProfilEditModal, setShowPublicProfilEditModal] =
    useState(false)
  const [showPublicBioEditModal, setShowPublicBioEditModal] = useState(false)

  if (!publicProfile) {
    return (
      <div className="mt-8 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Public Profile</h2>
        <p className="text-gray-600 mb-4">
          Create a public profile to share your information with others.
        </p>
        <button
          onClick={() => setShowPublicProfilEditModal(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Create Public Profile
        </button>
        {showPublicProfilEditModal && (
          <PublicProfileEditModal
            userId={userId}
            publicProfile={null}
            onClose={() => setShowPublicProfilEditModal(false)}
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
          iconColor="light"
          onClick={() => setShowPublicProfilEditModal(true)}
          verticalPadding
        >
          {publicProfile.title || "No title set"}
        </ListItem>
        <ListItem
          label="Redirect Url"
          iconName={IconName.icPencilSimple}
          iconColor="light"
          onClick={() => setShowPublicProfilEditModal(true)}
          verticalPadding
        >
          <div className="flex flex-col sm:flex-row sm:items-center space-x-2 flex-grow">
            <p
              className={cn([
                "font-medium h-6",
                {
                  "opacity-20": !publicProfile.redirectUrl,
                },
              ])}
            >
              {publicProfile.redirectUrl || "No redirect URL set"}
            </p>
            {publicProfile.redirectUrl ? (
              publicProfile.redirectActive ? (
                <span className="inline-flex gap-2 items-center text-sm text-success">
                  <Icon iconName={IconName.icCheckCircle} color="success" />
                  Active
                </span>
              ) : (
                <span className="inline-flex gap-2 items-center text-sm text-error">
                  <Icon iconName={IconName.icProhibit} color="error" />
                  Not active
                </span>
              )
            ) : null}
          </div>
        </ListItem>
        <ListItem
          label="Bio"
          iconName={IconName.icPencilSimple}
          iconColor="light"
          onClick={() => setShowPublicBioEditModal(true)}
          verticalPadding
        >
          {publicProfile.bio || "No bio added yet"}
        </ListItem>
        <ListItem
          label="Public profile link"
          iconName={IconName.icCopy}
          iconColor="light"
          onClick={() => console.log("COPY URL")}
          verticalPadding="wider"
        >
          <Link
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/public/${publicProfile.id}`}
          >{`${process.env.NEXT_PUBLIC_BASE_URL}/public/${publicProfile.id}`}</Link>
        </ListItem>
      </ul>

      {showPublicProfilEditModal && (
        <PublicProfileEditModal
          userId={userId}
          publicProfile={publicProfile}
          onClose={() => setShowPublicProfilEditModal(false)}
        />
      )}
      {showPublicBioEditModal && (
        <PublicBioEditModal
          profileId={publicProfile.id}
          publicProfile={publicProfile}
          onClose={() => setShowPublicBioEditModal(false)}
        />
      )}
    </CardWithHeading>
  )
}

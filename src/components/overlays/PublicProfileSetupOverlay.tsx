"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { useToast } from "@/components/toast/ToastContext"
import { PublicProfile } from "@/types/profile"
import { updatePublicProfile } from "@/actions/publicProfile/update"
import { createPublicProfile } from "@/actions/publicProfile/create"
import { Icon, IconName } from "@/design-system/Icon"

const PublicProfileSchema = z.object({
  title: z.string().max(50, "Title must be 50 characters or less"),
  redirectUrl: z.string().url("Please enter a valid URL").or(z.literal("")),
  redirectActive: z.boolean(),
})

type Inputs = z.infer<typeof PublicProfileSchema>

interface PublicProfileSetupOverlayProps {
  userId: string
  publicProfile: PublicProfile | null
  onClose: () => void
}

export function PublicProfileSetupOverlay({
  userId,
  publicProfile,
  onClose,
}: PublicProfileSetupOverlayProps) {
  const [showUrlInfo, setShowUrlInfo] = useState(false)
  const { addToast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(PublicProfileSchema),
    defaultValues: {
      title: publicProfile?.title || undefined,
      redirectUrl: publicProfile?.redirectUrl || undefined,
      redirectActive: publicProfile?.redirectActive || false,
    },
  })
  const onSubmit = async (data: Inputs) => {
    const result = publicProfile
      ? await updatePublicProfile({
          profileId: publicProfile.id,
          title: data.title,
          redirectUrl: data.redirectUrl,
          redirectActive: data.redirectActive,
          bio: publicProfile.bio,
        })
      : await createPublicProfile({
          userId,
          title: data.title,
          redirectUrl: data.redirectUrl,
          redirectActive: data.redirectActive,
        })

    if (result.error) {
      addToast({
        type: "error",
        title: "Update failed",
        description: "Please try again",
        position: "top",
        alignment: "center",
      })
      return
    }

    addToast({
      type: "success",
      title: publicProfile ? "Profile updated" : "Profile created",
      position: "top",
      alignment: "center",
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Public Profile Settings</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Profile Title
            </label>
            <input
              type="text"
              {...register("title")}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-2">
              <label className="flex items-center space-x-2">
                <input type="checkbox" {...register("redirectActive")} />
                <span>Enable URL Redirect</span>
              </label>
              <button
                type="button"
                onClick={() => setShowUrlInfo(!showUrlInfo)}
                className="text-gray-400 hover:text-gray-600"
              >
                <Icon iconName={IconName.icPencilSimple} />
              </button>
            </div>

            {showUrlInfo && (
              <p className="text-sm text-gray-600 mb-2">
                When enabled, visitors to your profile will be automatically
                redirected to this URL.
              </p>
            )}

            <input
              type="url"
              {...register("redirectUrl")}
              placeholder="https://..."
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            {errors.redirectUrl && (
              <p className="mt-1 text-sm text-red-600">
                {errors.redirectUrl.message}
              </p>
            )}
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

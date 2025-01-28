"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from "@/components/toast/ToastContext"
import { updatePublicProfile } from "@/actions/publicProfile/update"
import { PublicProfile } from "@/types/profile"

const BioSchema = z.object({
  bio: z.string().max(500, "Bio must be 500 characters or less"),
})

type Inputs = z.infer<typeof BioSchema>

interface BioEditOverlayProps {
  profileId: string
  publicProfile: PublicProfile
  onClose: () => void
}

export function BioEditOverlay({
  profileId,
  publicProfile,
  onClose,
}: BioEditOverlayProps) {
  const { addToast } = useToast()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(BioSchema),
    defaultValues: {
      bio: publicProfile.bio || undefined,
    },
  })

  const bioLength = watch("bio")?.length || 0

  const onSubmit = async (data: Inputs) => {
    const result = await updatePublicProfile({
      profileId,
      title: publicProfile.title,
      redirectUrl: publicProfile.redirectUrl,
      redirectActive: publicProfile.redirectActive,
      bio: data.bio || null,
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
      title: "Bio updated",
      position: "top",
      alignment: "center",
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Edit Bio</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <textarea
              {...register("bio")}
              rows={6}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="Write something about yourself..."
            />
            <p className="mt-1 text-sm text-gray-500 text-right">
              {bioLength}/500 characters
            </p>
            {errors.bio && (
              <p className="mt-1 text-sm text-red-600">{errors.bio.message}</p>
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

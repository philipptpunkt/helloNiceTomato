"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from "@/components/toast/ToastContext"
import { updatePublicProfile } from "@/actions/publicProfile/update"
import { PublicProfile } from "@/types/profile"
import { Modal } from "@/design-system/Modal"
import { Button } from "@/design-system/Button"
import { Textarea } from "@/design-system/Input"

const BioSchema = z.object({
  bio: z.string().max(500, "Bio must be 500 characters or less"),
})

type Inputs = z.infer<typeof BioSchema>

interface PublicBioEditModalProps {
  profileId: string
  publicProfile: PublicProfile
  onClose: () => void
}

export function PublicBioEditModal({
  profileId,
  publicProfile,
  onClose,
}: PublicBioEditModalProps) {
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
    <Modal onClose={onClose}>
      <div className="w-full md:w-xl">
        <h2 className="text-xl font-semibold mb-4">Edit Bio</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Textarea
              {...register("bio")}
              rows={6}
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
            <Button
              type="button"
              variant="outlined"
              contentStyle="narrow"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button type="submit" contentStyle="narrow" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save changes"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

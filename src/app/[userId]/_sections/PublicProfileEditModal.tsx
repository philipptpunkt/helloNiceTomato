"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from "@/components/toast/ToastContext"
import { PublicProfile } from "@/types/profile"
import { updatePublicProfile } from "@/actions/publicProfile/update"
import { createPublicProfile } from "@/actions/publicProfile/create"
import { Modal } from "@/design-system/Modal"
import { Checkbox, Input } from "@/design-system/Input"
import { Button } from "@/design-system/Button"

const PublicProfileSchema = z.object({
  title: z.string().max(50, "Title must be 50 characters or less"),
  redirectUrl: z.string().url("Please enter a valid URL").or(z.literal("")),
  redirectActive: z.boolean(),
})

type Inputs = z.infer<typeof PublicProfileSchema>

interface PublicProfileEditModalProps {
  userId: string
  publicProfile: PublicProfile | null
  onClose: () => void
}

export function PublicProfileEditModal({
  userId,
  publicProfile,
  onClose,
}: PublicProfileEditModalProps) {
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
    <Modal onClose={onClose}>
      <div className="w-full md:w-xl">
        <h2 className="mb-6">Edit Public Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Profile Title"
            type="text"
            {...register("title")}
            reserveHelpTextSpace
            error={errors.title && errors.title.message}
          />
          <div>
            <div className="flex items-center mb-4">
              <Checkbox
                label="Enable URL Redirect"
                {...register("redirectActive")}
              />
            </div>
            <Input
              type="url"
              {...register("redirectUrl")}
              placeholder="https://..."
              helpText="When enabled, visitors to your profile will be automatically
                redirected to this URL."
              error={errors.redirectUrl && errors.redirectUrl.message}
            />
          </div>

          <div className="flex justify-end space-x-4">
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

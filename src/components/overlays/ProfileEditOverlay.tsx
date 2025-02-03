"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { updateProfile } from "@/actions/userProfile/update"
import { useToast } from "@/components/toast/ToastContext"
import { useEffect, useRef } from "react"
import { Button } from "@/design-system/Button/Button"

const ProfileSchema = z.object({
  displayName: z.string().min(2, "Display name must be at least 2 characters"),
  companyName: z.string().optional(),
})

type Inputs = z.infer<typeof ProfileSchema>

interface ProfileEditOverlayProps {
  userId: string
  initialDisplayName?: string
  initialCompanyName?: string
  focusField: "name" | "company" | null
  onClose: () => void
}

export function ProfileEditOverlay({
  userId,
  initialDisplayName,
  initialCompanyName,
  focusField,
  onClose,
}: ProfileEditOverlayProps) {
  const displayNameRef = useRef<HTMLInputElement>(null)
  const companyNameRef = useRef<HTMLInputElement>(null)

  const { addToast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      displayName: initialDisplayName,
      companyName: initialCompanyName,
    },
  })

  const onSubmit = async (data: Inputs) => {
    const result = await updateProfile({
      userId,
      displayName: data.displayName,
      companyName: data.companyName || null,
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
      title: "Profile updated",
      position: "top",
      alignment: "center",
    })
    onClose()
  }

  useEffect(() => {
    if (focusField === "name") {
      displayNameRef.current?.focus()
    } else if (focusField === "company") {
      companyNameRef.current?.focus()
    }
  }, [focusField])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Display Name *
            </label>
            <input
              {...register("displayName")}
              ref={(e) => {
                register("displayName").ref(e)
                displayNameRef.current = e
              }}
              type="text"
              placeholder={"Enter your display name"}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            {errors.displayName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.displayName.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              {...register("companyName")}
              ref={(e) => {
                register("companyName").ref(e)
                companyNameRef.current = e
              }}
              type="text"
              placeholder={"Enter your company name"}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
            {errors.companyName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.companyName.message}
              </p>
            )}
          </div>
          <div className="flex justify-end space-x-2">
            <Button
              type="button"
              variant="outlined"
              contentStyle="narrow"
              onClick={() => console.log(">>>> CLOSE")}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              contentStyle="narrow"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

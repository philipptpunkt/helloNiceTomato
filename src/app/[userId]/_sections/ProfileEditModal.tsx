"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { updateProfile } from "@/actions/userProfile/update"
import { useToast } from "@/components/toast/ToastContext"
import { useEffect, useRef } from "react"
import { Button } from "@/design-system/Button"
import { Modal } from "@/design-system/Modal"
import { Input } from "@/design-system/Input"

const ProfileSchema = z.object({
  displayName: z.string().min(2, "Display name must be at least 2 characters"),
  companyName: z.string().optional(),
})

type Inputs = z.infer<typeof ProfileSchema>

interface ProfileEditModalProps {
  userId: string
  initialDisplayName?: string
  initialCompanyName?: string
  focusField: "name" | "company" | null
  onClose: () => void
}

export function ProfileEditModal({
  userId,
  initialDisplayName,
  initialCompanyName,
  focusField,
  onClose,
}: ProfileEditModalProps) {
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
    <Modal onClose={onClose}>
      <div className="w-full md:w-xl">
        <h2 className="mb-6">Edit User Data</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Display Name *"
            {...register("displayName")}
            ref={(e) => {
              register("displayName").ref(e)
              displayNameRef.current = e
            }}
            type="text"
            placeholder={"Enter your display name"}
            reserveHelpTextSpace
            error={errors.displayName && errors.displayName.message}
          />
          <Input
            label="Company Name"
            {...register("companyName")}
            ref={(e) => {
              register("companyName").ref(e)
              companyNameRef.current = e
            }}
            type="text"
            placeholder={"Enter your company name"}
            reserveHelpTextSpace
            error={errors.companyName && errors.companyName.message}
          />

          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outlined"
              contentStyle="narrow"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              contentStyle="narrow"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save changes"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

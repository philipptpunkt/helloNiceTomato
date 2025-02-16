"use client"

import { Button } from "@/design-system/Button"
import { Input } from "@/design-system/Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { updatePassword } from "@/actions/updatePassword"
import { useToast } from "../toast/ToastContext"
import { useRouter } from "next/navigation"

const UpdatePasswordSchema = z.object({
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must contain at least 8 characters" }),
})

type Inputs = z.infer<typeof UpdatePasswordSchema>

export function UpdatePasswordForm() {
  const { addToast } = useToast()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<Inputs>({
    resolver: zodResolver(UpdatePasswordSchema),
  })

  const onSubmit = async (data: Inputs) => {
    try {
      const { userId } = await updatePassword(data.password)

      addToast({
        type: "success",
        title: "Password updated",
        description: "Your password has been successfully updated",
        position: "top",
        alignment: "center",
      })

      router.push(`/${userId}`)
    } catch (error) {
      setError("password", {
        message:
          error instanceof Error ? error.message : "Something went wrong",
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 w-full max-w-[400px]"
    >
      <Input
        type="password"
        placeholder="New password"
        {...register("password")}
        error={errors.password?.message}
        reserveHelpTextSpace
      />
      <Button type="submit" contentStyle="full" disabled={isSubmitting}>
        {isSubmitting ? "Updating..." : "Update password"}
      </Button>
    </form>
  )
}

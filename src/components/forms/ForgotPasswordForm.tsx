"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/design-system/Button"
import { Input } from "@/design-system/Input"
import { resetPassword } from "@/actions/resetPassword"
import { useToast } from "@/components/toast/ToastContext"

const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty({ message: "Email is required" })
    .email({ message: "Email format not valid" }),
})

type Inputs = z.infer<typeof ForgotPasswordSchema>

export function ForgotPasswordForm() {
  const { addToast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Inputs>({ resolver: zodResolver(ForgotPasswordSchema) })

  const onSubmit = async (data: Inputs) => {
    try {
      await resetPassword({ email: data.email })
      addToast({
        type: "success",
        title: "Email sent",
        description: "Check your inbox for the password reset link",
        position: "top",
        alignment: "center",
      })
      reset({ email: "" })
    } catch (error) {
      addToast({
        type: "error",
        title: "Error",
        description:
          error instanceof Error ? error.message : "Something went wrong",
        position: "top",
        alignment: "center",
      })
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full max-w-[400px] gap-2"
    >
      <Input
        type="email"
        placeholder="email address"
        {...register("email")}
        error={errors.email?.message}
        reserveHelpTextSpace
      />
      <Button type="submit" contentStyle="full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Reset Password"}
      </Button>
    </form>
  )
}

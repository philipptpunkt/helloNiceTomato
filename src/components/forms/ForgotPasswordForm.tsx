"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/design-system/Button"
import { Input } from "@/design-system/Input"
import { resetPassword } from "@/actions/resetPassword"

const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty({ message: "Email is required" })
    .email({ message: "Email format not valid" }),
})

type Inputs = z.infer<typeof ForgotPasswordSchema>

export function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({ resolver: zodResolver(ForgotPasswordSchema) })

  return (
    <form
      onSubmit={handleSubmit(resetPassword)}
      className="w-full max-w-[400px]"
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

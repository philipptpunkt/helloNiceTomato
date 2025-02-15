"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { signUp } from "@/actions/signUp"
import Link from "next/link"
import { Input } from "@/design-system/Input"
import { Button } from "@/design-system/Button"

const SignUpSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty({ message: "Email is required" })
    .email({ message: "Email format not valid" }),
  password: z
    .string()
    .trim()
    .nonempty({ message: "Password is required" })
    .min(8, { message: "Password must contain at least 8 characters" }),
})

type Inputs = z.infer<typeof SignUpSchema>

export function SignUpForm() {
  const [isRegistered, setIsRegistered] = useState(false)
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({ resolver: zodResolver(SignUpSchema) })

  const handleSignUp = async (data: Inputs) => {
    const result = await signUp(data)

    if (!result.success) {
      setError("root", {
        message: result.error || "Something went wrong",
      })
      return
    }

    setIsRegistered(true)
  }

  if (isRegistered) {
    return (
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-4">Registration Successful!</h3>
        <p className="text-gray-600 mb-6">
          {`We've sent you an email with a verification link. Please check your
          inbox and click the link to verify your account.`}
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-500 text-white rounded-xl px-4 py-2 hover:bg-blue-600"
        >
          Go to Sign In
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      {errors.root && (
        <div className="text-red-600 mb-4 text-sm">{errors.root.message}</div>
      )}
      <Input
        placeholder="email address"
        type="email"
        {...register("email")}
        error={errors.email?.message}
        reserveHelpTextSpace
      />
      <Input
        placeholder="password"
        type="password"
        {...register("password")}
        error={errors.password?.message}
        reserveHelpTextSpace
      />
      <Button type="submit" contentStyle="full">
        {isSubmitting ? "Signing up..." : "Sign Up"}
      </Button>
    </form>
  )
}

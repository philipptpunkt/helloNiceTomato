"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { signIn } from "../../actions/signIn"

const SignInSchema = z.object({
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

type Inputs = z.infer<typeof SignInSchema>

export function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({ resolver: zodResolver(SignInSchema) })

  return (
    <>
      <form onSubmit={handleSubmit(signIn)}>
        <input
          className="mt-4 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          type="email"
          placeholder="email"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-sm font-light text-red-600">
            {errors.email.message}
          </span>
        )}
        <input
          className="mt-4 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          type="password"
          placeholder="password"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-sm font-light text-red-600">
            {errors.password.message}
          </span>
        )}

        <input
          type="submit"
          className="mt-4 w-full cursor-pointer rounded-md bg-black py-2 text-lg text-white"
          value={isSubmitting ? "loading..." : "Let's Go"}
        />
      </form>
      <div className="flex justify-center">
        <p className="mr-2">{`Don't have an account yet?`}</p>
        <Link href="/auth/signup" className="text-red-700 font-bold">
          Sign Up!
        </Link>
      </div>
    </>
  )
}

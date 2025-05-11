"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { signIn } from "../../actions/signIn"
import { Button } from "@/design-system/Button"
import { Input } from "@/design-system/Input"
import { Icon, IconName } from "@/design-system/Icon"

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
    <div className="p-8 w-full max-w-[400px]">
      <form onSubmit={handleSubmit(signIn)} className="flex flex-col space-y-4">
        <Input
          placeholder="email address"
          type="email"
          {...register("email")}
        />
        <Input
          placeholder="password"
          type="password"
          {...register("password")}
          error={Boolean(errors.password?.message)}
        />
        <Button type="submit" contentStyle="full" disabled={isSubmitting}>
          {isSubmitting ? "loading..." : "Let's Go"}
        </Button>
        <div className="flex justify-center mt-2">
          <Button
            type="link"
            href="/auth/identify"
            contentStyle="snug"
            variant="text"
          >
            Forgot password?
          </Button>
        </div>
      </form>
      <div className="flex flex-col items-center mt-4 space-y-2">
        <Button type="link" contentStyle="wide" secondary href="/auth/signup">
          Sign up for free
        </Button>
        <Button
          type="link"
          variant="text"
          contentStyle="full"
          href="/blue/auth/signin"
        >
          <p className="text-text font-bold">{"Or sign in with"}</p>
          <div className="mx-1">
            <Icon iconName={IconName.icButterfly} strokeWidth="bold" />
          </div>
          <p className="text-text font-bold">{"Bluesky"}</p>
        </Button>
      </div>
    </div>
  )
}

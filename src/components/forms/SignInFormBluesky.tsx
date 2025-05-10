"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/design-system/Button"
import { Input } from "@/design-system/Input"
import { Icon, IconName } from "@/design-system/Icon"
import { signInBlue } from "@/actions/blue/signin"

const SignInSchema = z.object({
  handle: z.string().trim().nonempty({ message: "HAndle is required" }),
  password: z
    .string()
    .trim()
    .nonempty({ message: "Password is required" })
    .min(8, { message: "Password must contain at least 8 characters" }),
})

type Inputs = z.infer<typeof SignInSchema>

export function SignInFormBluesky() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({ resolver: zodResolver(SignInSchema) })

  return (
    <div className="p-8 w-full max-w-[400px] bg-background rounded-3xl border-2 border-bluesky shadow-xl">
      <div className="flex mb-4">
        <Icon iconName={IconName.icButterfly} color="bluesky" size="lg" />
        <h3 className="text-bluesky text-center text-2xl ml-2">
          Login with Bluesky
        </h3>
      </div>
      <form onSubmit={handleSubmit(signInBlue)}>
        <Input
          placeholder="bluesky handle"
          type="text"
          {...register("handle")}
          error={errors.handle?.message}
          reserveHelpTextSpace
        />
        <Input
          placeholder="password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
          reserveHelpTextSpace
        />
        <Button
          type="submit"
          contentStyle="full"
          disabled={isSubmitting}
          variant="contained"
          bluesky
        >
          {isSubmitting ? "loading..." : "Let's go"}
        </Button>
        <div className="flex justify-center mt-2">
          <Button
            type="link"
            href="https://bsky.app/"
            contentStyle="snug"
            variant="text"
            bluesky
          >
            Forgot password?
          </Button>
        </div>
      </form>
      <div className="flex flex-col items-center mt-4">
        <Button
          type="link"
          contentStyle="wide"
          href="https://bsky.app/"
          variant="outlined"
          bluesky
        >
          Create account
        </Button>
      </div>
    </div>
  )
}

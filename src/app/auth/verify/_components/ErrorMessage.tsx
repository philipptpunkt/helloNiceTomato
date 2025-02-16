"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { useToast } from "@/components/toast/ToastContext"
import { useRouter } from "next/navigation"

export function ErrorMessage() {
  const { addToast } = useToast()
  const router = useRouter()
  const searchParams = useSearchParams()

  const error = searchParams.get("error")
  const errorDescription = searchParams.get("error_description")

  if (!error) {
    addToast({
      type: "success",
      title: "Email verified",
      description: "Your email has been successfully verified",
      position: "top",
      alignment: "center",
    })
    router.push("/auth/signin")
  }

  const errorMessage =
    errorDescription?.replace(/\+/g, " ") || "Verification failed"

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Email Verification</h2>
      <p className="text-red-600 mb-6">{errorMessage}</p>
      <Link
        href="/auth/signup"
        className="inline-block bg-blue-500 text-white rounded-xl px-4 py-2 hover:bg-blue-600"
      >
        Try signing up again
      </Link>
    </div>
  )
}

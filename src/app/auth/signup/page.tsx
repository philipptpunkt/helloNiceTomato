"use client"

import { SignUpForm } from "@/components/forms/SignUpForm"

export default function SignUpPage() {
  return (
    <div className="flex flex-col max-w-[32rem] p-16">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      <SignUpForm />
    </div>
  )
}
"use server"

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export async function signIn({
  email,
  password,
}: {
  email: string
  password: string
}) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return { error: true, message: error.message }
  }

  if (!data?.session || !data.user) {
    return { error: true, message: "No session created" }
  }

  // Move redirect outside of try-catch
  redirect(`/${data.user.id}`)
}

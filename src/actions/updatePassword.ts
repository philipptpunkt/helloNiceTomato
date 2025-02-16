"use server"

import { createClient } from "@/utils/supabase/server"
// import { redirect } from "next/navigation"

export async function updatePassword(password: string) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.updateUser({
    password: password,
  })

  if (error) {
    throw new Error(error.message)
  }

  // redirect(`/${data.user.id}`)
  return { userId: data.user.id }
}

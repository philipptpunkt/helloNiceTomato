"use server"

import { createClient } from "@/utils/supabase/server"

export async function resetPassword({ email }: { email: string }) {
  const supabase = await createClient()

  const { error } = await supabase.auth.resetPasswordForEmail(email)

  if (error) {
    // To Do handle Error
    console.log(error)
  }

  return { success: true }
}

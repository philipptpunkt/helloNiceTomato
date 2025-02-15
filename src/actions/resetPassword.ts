"use server"

import { createClient } from "@/utils/supabase/server"

export async function resetPassword({ email }: { email: string }) {
  const supabase = await createClient()

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/update-password`,
  })

  if (error) {
    // To Do handle Error
    console.log(error)
  }

  return { success: true }
}

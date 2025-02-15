"use server"

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"

export async function logout() {
  const supabase = await createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    // To Do handle Error
    console.log(error)
  }
  revalidatePath("/", "layout")

  return { success: true }
}

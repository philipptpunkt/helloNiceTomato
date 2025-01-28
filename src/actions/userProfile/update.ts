"use server"

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"

type UpdateProfileData = {
  userId: string
  displayName: string | null
  companyName?: string | null
}

export async function updateProfile({
  userId,
  displayName,
  companyName,
}: UpdateProfileData) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .schema("private")
    .from("user_profiles")
    .update({
      display_name: displayName,
      company_name: companyName,
      updated_at: new Date().toISOString(),
    })
    .eq("user_id", userId)
    .select()
    .single()

  if (error) {
    console.error("Profile update error:", error)
    return { error: error.message || "Failed to update profile" }
  }

  // Revalidate the user's profile page
  revalidatePath(`/${userId}`)

  return { success: true, data }
}

"use server"

import { createClient } from "@/utils/supabase/server"

export async function createPublicProfile({
  userId,
  title,
  redirectUrl,
  redirectActive,
}: {
  userId: string
  title: string
  redirectUrl?: string
  redirectActive: boolean
}) {
  const supabase = await createClient()

  // First get the user_profile_id
  const { data: userProfile, error: userProfileError } = await supabase
    .schema("private")
    .from("user_profiles")
    .select("id")
    .eq("user_id", userId)
    .single()

  if (userProfileError) {
    return { error: userProfileError.message }
  }

  const { error } = await supabase
    .schema("private")
    .from("public_profiles")
    .insert({
      user_profile_id: userProfile.id,
      user_id: userId,
      title,
      redirect_url: redirectUrl,
      redirect_active: redirectActive,
    })

  if (error) {
    return { error: error.message }
  }

  return { success: true }
}

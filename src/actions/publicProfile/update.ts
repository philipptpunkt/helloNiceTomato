"use server"

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"

export async function updatePublicProfile({
  profileId,
  title,
  redirectUrl,
  redirectActive,
  bio,
}: {
  profileId: string
  title: string | null
  redirectUrl: string | null
  redirectActive: boolean
  bio: string | null
}) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .schema("private")
    .from("public_profiles")
    .update({
      title,
      redirect_url: redirectUrl,
      redirect_active: redirectActive,
      bio,
      updated_at: new Date().toISOString(),
    })
    .eq("id", profileId)
    .select("user_profile_id")
    .single()

  if (error) {
    return { error: error.message }
  }

  // Get the user_id to revalidate the correct path
  const { data: userProfile } = await supabase
    .schema("private")
    .from("user_profiles")
    .select("user_id")
    .eq("id", data.user_profile_id)
    .single()

  if (userProfile) {
    revalidatePath(`/${userProfile.user_id}`)
  }

  return { success: true }
}

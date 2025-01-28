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
    .select("user_id")
    .single()

  if (error) {
    return { error: error.message }
  }

  if (data) {
    revalidatePath(`/${data.user_id}`)
  }

  return { success: true }
}

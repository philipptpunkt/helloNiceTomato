import { Suspense } from "react"
import { createClient } from "@/utils/supabase/server"
import { ProfileEditor } from "./_components/ProfileEditor"
import { PublicProfileEditor } from "./_components/PublicProfileEditor"
import { PublicProfile } from "@/types/profile"
import { notFound } from "next/navigation"
import { Test } from "./_test"

const uuidRegex =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

export default async function AccountPage({
  params,
}: {
  params: Promise<{ userId: string }>
}) {
  const { userId } = await params

  // Validate UUID format
  if (!uuidRegex.test(userId)) {
    notFound()
  }

  const supabase = await createClient()

  const { data: userProfile, error } = await supabase
    .schema("private")
    .from("user_profiles")
    .select("*")
    .eq("user_id", userId)
    .single()

  if (error) {
    throw new Error(`Failed to fetch profile: ${error.message}`)
  }

  const hasPublicProfile =
    Array.isArray(userProfile.public_profile_ids) &&
    userProfile.public_profile_ids.length > 0

  let publicProfile: PublicProfile | null = null

  if (hasPublicProfile) {
    const { data: profile, error: profileError } = await supabase
      .schema("private")
      .from("public_profiles")
      .select("*")
      .eq("id", userProfile.public_profile_ids[0])
      .single()

    if (profileError) {
      throw new Error(`Failed to fetch public profile: ${profileError.message}`)
    }
    publicProfile = {
      id: profile.id,
      title: profile.title,
      bio: profile.bio,
      redirectUrl: profile.redirect_url,
      redirectActive: profile.redirect_active,
      createdAt: profile.created_at,
      updatedAt: profile.updated_at,
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Profile</h1>
      <Test />
      <Suspense fallback={<div>Loading profile...</div>}>
        <ProfileEditor userId={userId} profile={userProfile} />
      </Suspense>
      <Suspense fallback={<div>Loading public profile...</div>}>
        <PublicProfileEditor userId={userId} publicProfile={publicProfile} />
      </Suspense>
    </div>
  )
}

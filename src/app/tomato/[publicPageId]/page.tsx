import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export default async function PublicProfilePage({
  params,
}: {
  params: { publicPageId: string }
}) {
  const { publicPageId } = await params
  const supabase = await createClient()

  // Fetch public profile data
  const { data: pageData, error } = await supabase
    .schema("private")
    .from("public_profiles")
    .select("*")
    .eq("id", publicPageId)
    .single()

  if (error || !pageData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Profile not found</p>
      </div>
    )
  }

  if (pageData.redirect_url) {
    redirect(pageData.redirect_url)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">{pageData.title}</h1>
      <div className="bg-white shadow rounded-lg p-6">
        {pageData.bio && <p className="mb-4 text-gray-600">{pageData.bio}</p>}
      </div>
    </div>
  )
}

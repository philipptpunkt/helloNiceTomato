import { Section } from "@/design-system/Layout"
import { createClient } from "@/utils/supabase/server"
import { redirect, notFound } from "next/navigation"

export default async function PublicProfilePage({
  params,
}: {
  params: Promise<{ publicPageId: string }>
}) {
  const { publicPageId } = await params
  const supabase = await createClient()

  const { data: pageData, error } = await supabase
    .schema("private")
    .from("public_profiles")
    .select("*")
    .eq("id", publicPageId)
    .single()

  if (error || !pageData) {
    notFound()
  }

  if (pageData.redirect_url && pageData.redirect_active) {
    redirect(pageData.redirect_url)
  }

  return (
    <Section width="document" horizontalPadding>
      <h1 className="text-2xl font-bold mb-6">{pageData.title}</h1>
      <div className="bg-white shadow rounded-lg p-6">
        {pageData.bio && <p className="mb-4 text-gray-600">{pageData.bio}</p>}
      </div>
    </Section>
  )
}

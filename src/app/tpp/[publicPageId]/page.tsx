import { CardWithHeading } from "@/design-system/Card"
import { Section } from "@/design-system/Layout"
import { Heading } from "@/design-system/Typography"
import { createClient } from "@/utils/supabase/server"
import { redirect, notFound } from "next/navigation"
import { Suspense } from "react"

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
      <Suspense fallback={<div>Loading Profile...</div>}>
        <CardWithHeading
          heading={
            <Heading type="default" text={pageData.title} size="reduced" />
          }
        >
          <div className="">
            {pageData.bio && <p className="font-medium">{pageData.bio}</p>}
          </div>
        </CardWithHeading>
      </Suspense>
    </Section>
  )
}

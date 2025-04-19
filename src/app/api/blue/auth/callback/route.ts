import { getOAuthClient } from "@/utils/atproto/client"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const client = await getOAuthClient()

  const params = req.nextUrl.searchParams
  const result = await client.callback(params)

  if (!result?.session) {
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 400 }
    )
  }

  const did = result.session.did

  return NextResponse.redirect(
    `${process.env.NEXT_PUBLIC_BASE_URL}/blue/profile/${did}`
  )
}

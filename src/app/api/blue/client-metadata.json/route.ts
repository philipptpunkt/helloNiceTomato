import { blueskyClientMetadata } from "@/utils/atproto/metadata"
import { NextResponse } from "next/server"

export async function GET(): Promise<NextResponse> {
  const metaData = blueskyClientMetadata()
  console.log(">>> META", metaData)
  return NextResponse.json(metaData, {
    status: 200,
  })
}

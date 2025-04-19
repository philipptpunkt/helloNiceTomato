import { blueskyClientMetadata } from "@/utils/atproto/metadata"
import { NextResponse } from "next/server"

export async function GET(): Promise<NextResponse> {
  const metaData = blueskyClientMetadata()
  return NextResponse.json(metaData, {
    status: 200,
  })
}

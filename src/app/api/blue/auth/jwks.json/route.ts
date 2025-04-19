import { getPublicJwkFromJson } from "@/utils/jwk/jwl"
import { NextResponse } from "next/server"

export async function GET(): Promise<NextResponse> {
  const jwk1Json = process.env.JWK_1
  const jwk2Json = process.env.JWK_2
  const jwk3Json = process.env.JWK_3

  if (!jwk1Json || !jwk2Json || !jwk3Json) {
    throw new Error("Missing JWK(s) in jwks.json endpoint")
  }

  const [jwk1, jwk2, jwk3] = await Promise.all([
    getPublicJwkFromJson(jwk1Json),
    getPublicJwkFromJson(jwk2Json),
    getPublicJwkFromJson(jwk3Json),
  ])

  const jwks = {
    keys: [jwk1, jwk2, jwk3],
  }
  return NextResponse.json(jwks, {
    status: 200,
  })
}

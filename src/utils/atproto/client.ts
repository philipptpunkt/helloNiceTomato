"use server"

import { NodeOAuthClient } from "@atproto/oauth-client-node"
import { sessionStore } from "../session/iron"
import { blueskyClientMetadata } from "./metadata"
import { JoseKey } from "@atproto/jwk-jose"
import { getKidFromJson, getPrivateKeyFromJson } from "../jwk/jwl"
import { KeyLike } from "jose"
import { stateStore } from "../redis/stateStore"

async function createOAuthClient() {
  const metaData = blueskyClientMetadata()

  const jwk1Json = process.env.JWK_1
  const jwk2Json = process.env.JWK_2
  const jwk3Json = process.env.JWK_3

  if (!jwk1Json || !jwk2Json || !jwk3Json) {
    throw new Error("Missing JWK(s) in createAuthClient")
  }

  const [privateKey1, privateKey2, privateKey3, kid1, kid2, kid3] =
    await Promise.all([
      getPrivateKeyFromJson(jwk1Json),
      getPrivateKeyFromJson(jwk2Json),
      getPrivateKeyFromJson(jwk3Json),
      getKidFromJson(jwk1Json),
      getKidFromJson(jwk2Json),
      getKidFromJson(jwk3Json),
    ])

  return new NodeOAuthClient({
    // @ts-expect-error expected incompatibility in types
    clientMetadata: metaData,
    stateStore,
    sessionStore,
    keyset: await Promise.all([
      JoseKey.fromImportable(privateKey1 as KeyLike, kid1),
      JoseKey.fromImportable(privateKey2 as KeyLike, kid2),
      JoseKey.fromImportable(privateKey3 as KeyLike, kid3),
    ]),
  })
}

let client: NodeOAuthClient | null = null

export async function getOAuthClient(): Promise<NodeOAuthClient> {
  if (client) {
    return client
  }

  client = await createOAuthClient()

  return client
}

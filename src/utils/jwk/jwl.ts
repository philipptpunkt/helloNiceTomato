"use server"

import { importJWK, JWK } from "jose"

export async function getPrivateKeyFromJson(jwkJson: string) {
  const jwk: JWK = JSON.parse(jwkJson)
  const privateKey = await importJWK(jwk, "ES256")
  return privateKey
}

export async function getKidFromJson(jwkJson: string) {
  const jwk: JWK = JSON.parse(jwkJson)
  return jwk.kid
}

export async function getPublicJwkFromJson(jwkJson: string) {
  const jwk: JWK = JSON.parse(jwkJson)

  const publicJwk = {
    kty: jwk.kty,
    crv: jwk.crv,
    x: jwk.x,
    y: jwk.y,
    kid: jwk.kid,
  }

  return publicJwk
}

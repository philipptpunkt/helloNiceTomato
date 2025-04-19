export function blueskyClientMetadata() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  if (!baseUrl) throw new Error("Missing base url in atproto client metadata")
  if (baseUrl.includes("localhost")) {
    console.warn(
      "[WARN] Using localhost url for atproto Oauth will result in authentication error"
    )
  }

  return {
    client_id: `${baseUrl}/api/blue/client-metadata.json`,
    client_name: "HelloNiceTomato",
    client_uri: baseUrl,
    logo_uri: `${baseUrl}/api/logo.jpg`,
    tos_uri: `${baseUrl}/tos`,
    policy_uri: `${baseUrl}/policy`,
    redirect_uris: [`${baseUrl}/api/blue/auth/callback`] as [
      string,
      ...string[]
    ],
    scope: "atproto transition:generic",
    grant_types: ["authorization_code", "refresh_token"],
    response_types: ["code"],
    application_type: "web",
    token_endpoint_auth_method: "private_key_jwt",
    token_endpoint_auth_signing_alg: "ES256",
    dpop_bound_access_tokens: true,
    jwks_uri: `${baseUrl}/api/blue/auth/jwks.json`,
  }
}

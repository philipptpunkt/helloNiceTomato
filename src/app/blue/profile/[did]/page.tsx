// import { getOAuthClient } from "@/utils/atproto/client"
import { AtpAgent } from "@atproto/api"

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ did: string }>
}) {
  const { did: endcodedDid } = await params
  const did = decodeURIComponent(endcodedDid)

  // const client = await getOAuthClient()
  // const session = await client.restore(did)

  // const agent = new AtpAgent({ service: "https://bsky.social" })
  const agent = new AtpAgent({ service: "https://public.api.bsky.app" })

  const profile = await agent.getProfile({
    actor: "did:plc:v2vi2lpbycx33hxl434ohxcy",
  })

  const feed = await agent.getAuthorFeed({
    actor: "did:plc:v2vi2lpbycx33hxl434ohxcy", // your DID
    limit: 5, // optional
  })

  // const posts = await agent.getPosts({
  //   actor: "did:plc:v2vi2lpbycx33hxl434ohxcy",
  // })

  const { displayName, description } = profile.data

  console.log(">>>> PROFILE", profile)
  console.log(">>>> FEED", feed)
  return (
    <div className="mt-64">
      <h1>`Profile for:`</h1>
      <div>{did}</div>
      <div>{displayName}</div>
      <div>{`${description}`}</div>
    </div>
  )
}

// did:plc:v2vi2lpbycx33hxl434ohxcy

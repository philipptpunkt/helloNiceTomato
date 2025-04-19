import { getOAuthClient } from "@/utils/atproto/client"
import { Agent } from "@atproto/api"

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ did: string }>
}) {
  const { did: endcodedDid } = await params
  const did = decodeURIComponent(endcodedDid)

  const client = await getOAuthClient()

  const session = await client.restore(did)
  const agent = new Agent(session)

  const test = await agent.getProfile()

  console.log(">>>> TEST", test)
  return (
    <div>
      <h1>`Profile for: ${did}`</h1>
      {/* <div>{test}</div> */}
    </div>
  )
}

import { Section } from "@/design-system/Layout"
import { cn } from "@/utils/cn"
import { AtpAgent } from "@atproto/api"
import Image from "next/image"

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ did: string }>
}) {
  const { did: endcodedDid } = await params
  const did = decodeURIComponent(endcodedDid)

  const agent = new AtpAgent({ service: "https://public.api.bsky.app" })

  const profile = await agent.getProfile({
    actor: did,
  })

  const feed = await agent.getAuthorFeed({
    actor: did,
    limit: 5,
  })

  // const posts = await agent.getPosts({
  //   actor: "did:plc:v2vi2lpbycx33hxl434ohxcy",
  // })

  const { displayName, description, avatar, banner } = profile.data

  console.log(">>>> PROFILE", profile)
  console.log(">>>> FEED", feed)
  return (
    <>
      <Section width="narrow" pageStart>
        <div className={cn(["relative", "mx-0 md:mx-0 xl:mx-8"])}>
          {banner ? (
            <div className={cn(["w-full", "h-52 md:h-72 xl:h-92"])}>
              <Image
                src={banner}
                alt=""
                fill
                objectFit="cover"
                className="rounded-none xl:rounded-3xl"
              />
            </div>
          ) : null}
          {avatar ? (
            <div
              className={cn([
                "absolute",
                "top-36 md:top-48 xl:top-60",
                "left-4 md:left-6 xl:left-8",
                "w-32 md:w-48 xl:w-64",
                "h-32 md:h-48 xl:h-64",
                "rounded-full",
                "border-4",
                "border-background",
              ])}
            >
              <Image
                src={avatar}
                alt=""
                fill
                objectFit="cover"
                className={cn(["rounded-full"])}
              />
            </div>
          ) : null}
        </div>
      </Section>
      <Section width="narrow" horizontalPadding>
        <div className="mt-16 md:mt-24 xl:mt-32">
          <h1 className="text-2xl md:text-3xl xl:text-4xl">{displayName}</h1>
          <div className="mt-8">
            <p className="whitespace-pre-line text-lg">{description}</p>
          </div>
        </div>
      </Section>
    </>
  )
}

// did:plc:v2vi2lpbycx33hxl434ohxcy

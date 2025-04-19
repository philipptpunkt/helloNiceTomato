import { NodeSavedSession } from "@atproto/oauth-client-node"
import { getIronSession } from "iron-session"
import { cookies } from "next/headers"

export interface BlueskySession extends NodeSavedSession {
  did: string
}

const ironSessionOptions = {
  cookieName: "sid",
  password: process.env.COOKIE_SECRET as string,
}

export const sessionStore = {
  async set(sub: string, session: NodeSavedSession) {
    const cookieStore = await cookies()

    const ironSession = await getIronSession<BlueskySession>(
      cookieStore,
      ironSessionOptions
    )

    ironSession.did = sub
    ironSession.dpopJwk = session.dpopJwk
    ironSession.tokenSet = session.tokenSet

    await ironSession.save()
  },

  async get(sub: string) {
    const cookieStore = await cookies()
    const ironSession = await getIronSession<BlueskySession>(
      cookieStore,
      ironSessionOptions
    )

    if (ironSession?.did === sub) {
      const session: NodeSavedSession = {
        dpopJwk: ironSession.dpopJwk,
        tokenSet: ironSession.tokenSet,
      }
      return session
    }
    return undefined
  },

  async del() {
    const cookieStore = await cookies()
    const ironSession = await getIronSession<BlueskySession>(
      cookieStore,
      ironSessionOptions
    )
    ironSession.destroy()
  },
}

import { NodeSavedState } from "@atproto/oauth-client-node"
import { getRedis } from "./redis"

const STATE_TTL_SECONDS = 300 // (5 minutes)

export const stateStore = {
  async set(key: string, internalState: NodeSavedState) {
    const redis = await getRedis()
    await redis.set(`oauth:state:${key}`, JSON.stringify(internalState), {
      EX: STATE_TTL_SECONDS,
    })
  },

  async get(key: string): Promise<NodeSavedState | undefined> {
    const redis = await getRedis()
    const value = await redis.get(`oauth:state:${key}`)
    return value ? JSON.parse(value) : undefined
  },

  async del(key: string) {
    const redis = await getRedis()
    await redis.del(`oauth:state:${key}`)
  },
}

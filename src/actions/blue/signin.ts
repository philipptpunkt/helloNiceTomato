"use server"

import { getOAuthClient } from "@/utils/atproto/client"
import crypto from "crypto"
import { redirect } from "next/navigation"

export async function signInBlue({ handle }: { handle: string }) {
  const client = await getOAuthClient()

  const state = crypto.randomUUID()
  const url = await client.authorize(handle, { state })

  redirect(url.href)
}

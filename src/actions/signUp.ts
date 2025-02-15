"use server"

import { createClient } from "@/utils/supabase/server"

export async function signUp(data: { email: string; password: string }) {
  const supabase = await createClient()

  try {
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verify`,
      },
    })

    if (error) throw error

    return { success: true }
  } catch (error) {
    console.error("Sign up error:", error)
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "An error occurred during sign up",
    }
  }
}

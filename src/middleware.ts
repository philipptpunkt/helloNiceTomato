import { updateSession } from "./utils/supabase/middleware"
import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const auth = request.headers.get("authorization")
  const password = process.env.TEMP_PAGE_PASSWORD

  const env = process.env.NODE_ENV

  if (env === "development") {
    return await updateSession(request)
  }

  if (!password || password === "") {
    throw new Error("Fatal Error in Middleware. Password not set")
  }

  if (auth) {
    const [scheme, encoded] = auth.split(" ")

    if (scheme === "Basic" && typeof encoded === "string") {
      const decoded = atob(encoded)
      const [, pass] = decoded.split(":")
      if (pass === password) {
        return await updateSession(request)
      }
    }
  }

  return new NextResponse("Unauthorized", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  })

  // return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}

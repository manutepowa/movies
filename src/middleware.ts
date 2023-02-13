import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname + "/calendar1"
  return NextResponse.redirect(new URL(pathname, request.url))
}

export const config = {
  matcher: "/calendar",
}

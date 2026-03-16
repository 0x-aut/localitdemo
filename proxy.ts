import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const LOCALES = ["en", "de", "fr", "ja"]

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const hasLocale = LOCALES.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  )
  if (hasLocale) return NextResponse.next()
  return NextResponse.redirect(new URL(`/en${pathname}`, request.url))
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}
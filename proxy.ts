import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import createMiddleware from 'next-intl/middleware';
import {routing} from '@/src/i18n/routing';

// const LOCALES = ["en", "de", "fr", "ja"]

export default createMiddleware(routing);

// export function proxy(request: NextRequest) {
//   const pathname = request.nextUrl.pathname
//   const hasLocale = LOCALES.some(
//     (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
//   )
//   if (hasLocale) return NextResponse.next()
//   return NextResponse.redirect(new URL(`/en${pathname}`, request.url))
// }

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
}
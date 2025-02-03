import createMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const defaultLocale = request.headers.get("x-your-custom-locale") || "en";

  if (request.nextUrl.pathname.startsWith("/en/test")) {
    return NextResponse.redirect(new URL("/en-US/test", request.url));
  }

  const handleI18nRouting = createMiddleware(routing);
  const response = handleI18nRouting(request);

  response.headers.set("x-your-custom-locale", defaultLocale);

  return response;
}

export const config = {
  matcher: [
    "/",
    "/(en|ja|zh-CN|zh-TW)/:path*",
    "/((?!_next|_vercel|.*\\..*).*)",
  ],
};

import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

const stripDefaultLocale = (str: string): string => {
  const stripped = str.replace('/default', '')
  return stripped
}

export function middleware(request: NextRequest) {
  const { pathname, locale, origin, search } = request.nextUrl
  const shouldHandleLocale =
    !PUBLIC_FILE.test(pathname) &&
    !pathname.includes('/api/') &&
    locale === 'default'

  return shouldHandleLocale
    ? NextResponse.redirect(
        `${origin}/en${stripDefaultLocale(pathname)}${
          search
        }`
      )
    : undefined
}
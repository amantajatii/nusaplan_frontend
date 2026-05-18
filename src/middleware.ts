import { NextRequest, NextResponse } from 'next/server'

const PROTECTED = ['/dashboard', '/chat', '/profile']

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const isProtected = PROTECTED.some((p) => pathname === p || pathname.startsWith(p + '/'))

  if (isProtected) {
    const token = req.cookies.get('nusaplan_id_token')?.value
    if (!token) {
      const url = req.nextUrl.clone()
      url.pathname = '/login'
      url.searchParams.set('from', pathname)
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/chat/:path*', '/profile/:path*'],
}

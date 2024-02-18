import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const access_token = request.cookies.get("access_token")?.value;
    const protectedRoutes = ['/dashboard', '/dashboard/users', '/dashboard/applicationtracker', '/dashboard/todaysoffer', '/dashboard/deals', '/dashboard/featured', '/dashboard/wallet', '/dashboard/bbpsandrechargerequest', '/dashboard/paymentrequest', '/dashboard/employeetracker', '/dashboard/addoperationteam', '/dashboard/refertracker', '/dashboard/sendnotifications', '/dashboard/settings']
    const publicRoutes = ['/signin', '/signup', '/forgetpassword']

    if (request.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL("/signin", request.url))
    }
    if (protectedRoutes.includes(request.nextUrl.pathname)) {
        if (!access_token) {
            return NextResponse.redirect(new URL("/signin", request.url))
        }
    }
    if (publicRoutes.includes(request.nextUrl.pathname)) {
        if (access_token) {
            return NextResponse.redirect(new URL("/dashboard", request.url))
        }
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/signin', '/signup', '/dashboard/:path*'],
}

import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function proxy(req) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");
  const isLoginPage = req.nextUrl.pathname.startsWith("/admin/login");

  // 🔐 If not logged in and accessing admin → redirect to login
  if (!token && isAdminRoute && !isLoginPage) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  // ✅ If already logged in and trying to open login page → go dashboard
  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};

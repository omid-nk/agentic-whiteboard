import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => {
            request.cookies.set(name, value);
          });

          response = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    },
  );

  const { data } = await supabase.auth.getClaims();

  const isAuthenticated = !!data?.claims;

  const pathname = request.nextUrl.pathname;

  const authRoutes = ["/login", "/register", "/reset-password"];

  const isAuthRoute = authRoutes.includes(pathname);

  const isDashboardRoute =
    pathname === "/dashboard" || pathname.startsWith("/dashboard/");

  // Logged-in users shouldn't access auth pages
  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Unauthenticated users shouldn't access dashboard
  if (!isAuthenticated && isDashboardRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return response;
}

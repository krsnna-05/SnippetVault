import { createServerClient } from "@supabase/ssr";
import { NextRequest, NextResponse } from "next/server";

type AuthNotice = "already_authenticated" | "auth_required";

const buildRedirectUrl = (
  request: NextRequest,
  pathname: string,
  notice: AuthNotice,
) => {
  const url = new URL(pathname, request.url);
  url.searchParams.set("auth_notice", notice);
  return url;
};

export async function middleware(request: NextRequest) {
  // supabaseResponse must be the NextResponse passed back so any
  // Set-Cookie headers (token refresh) written by the SSR client
  // are forwarded to the browser.
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          // Forward cookies to the outgoing request so subsequent
          // middleware can also read the refreshed session.
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // getUser() validates the JWT with Supabase servers and refreshes
  // the session when the access token has expired.
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/auth") && user) {
    return NextResponse.redirect(
      buildRedirectUrl(request, "/", "already_authenticated"),
    );
  }

  if (pathname.startsWith("/dashboard") && !user) {
    return NextResponse.redirect(
      buildRedirectUrl(request, "/auth/login", "auth_required"),
    );
  }

  // Return supabaseResponse — NOT NextResponse.next() — so refreshed
  // session cookies set by the SSR client reach the browser.
  return supabaseResponse;
}

export const config = {
  matcher: ["/auth/:path*", "/dashboard/:path*"],
};

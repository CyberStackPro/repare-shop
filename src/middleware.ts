import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

export default withAuth(
  async function middleware(req: NextRequest) {
    console.log(req.nextUrl.pathname);
  },
  {
    isReturnToCurrentPage: true,
  }
);

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - auth
     * - login
     * - images
     * - homepage (represented with $ after beginning)
     */
    "/((?!api|_next/static|_next/image|auth|login|images|homepage).*)",
  ],
};

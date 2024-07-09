import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/"]);

export default clerkMiddleware((auth: any, req) => {
  // Checking if the user is authenticated and the current route is public
  if (auth.userId && isPublicRoute(req)) {
    let path = "/select-org";
    // If the user has an organization ID, redirect them to their organization page
    if (auth.orgId) {
      `path = /organization/${auth.orgId}`;
    }
    const orgSelection = new URL(path, req.url);
    // Redirect to the organization selection page
    return NextResponse.redirect(orgSelection);
}
/*if (!auth.userId && !auth.isPublicRoute) {
    return auth().redirectToSignIn({ returnBackURL: req.url });
}
if (auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org") {
return auth().redirectToSelectOrg({ returnBackURL: req.url }); }*/

});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
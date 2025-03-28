import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Allow signed out users to access the specified routes:
  // publicRoutes: ['/anyone-can-visit-this-route'],
  publicRoutes: [
    "/",
    "search_results/(.*)",
    "/sign-in",
    "/sign-up",
    // "/api/webhooks(.*)",
    "/api/send",
    // "/api/checkout",
    "/products(.*)",
    "/api/products/(.*)",
    "/cart",
    "/api/search/(.*)",
    "/custom-pc",
    "/about-us",
    "/contact-us",
    "/shipping-policy",
    "/refund-policy",
    "/terms-conditions",
    "/privacy-policy",
    "/checkout",
    "search/(.*)",
    "api/search/(.*)",
  ],
  // Prevent the specified routes from accessing
  // authentication information:
  // ignoredRoutes: ['/no-auth-in-this-route'],
});

export const config = {
  matcher: [
    // Exclude files with a "." followed by an extension, which are typically static files.
    // Exclude files in the _next directory, which are Next.js internals.

    "/((?!.+\\.[\\w]+$|_next).*)",
    // Re-include any files in the api or trpc folders that might have an extension
    "/(api|trpc)(.*)",
  ],
};

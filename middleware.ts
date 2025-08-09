import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Temporary simplified middleware to get site working
// TODO: Restore full middleware once debugging is complete
export function middleware(request: NextRequest) {
  // Set basic headers that the app expects
  const response = NextResponse.next();
  
  // Set channel ID header (required by the app)
  response.headers.set('x-bc-channel-id', process.env.BIGCOMMERCE_CHANNEL_ID || '1');
  
  // Set basic locale header
  response.headers.set('x-bc-locale', 'en');
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - _vercel (vercel internals)
     * - favicon.ico (favicon file)
     * - admin (admin panel)
     * - sitemap.xml (sitemap route)
     * - xmlsitemap.php (legacy sitemap route)
     * - robots.txt (robots route)
     */
    '/((?!api|admin|_next/static|_next/image|_vercel|favicon.ico|xmlsitemap.php|sitemap.xml|robots.txt).*)',
  ],
};
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simplified middleware for debugging
export function middleware(request: NextRequest) {
  console.log('Middleware running for:', request.url);
  console.log('BIGCOMMERCE_CHANNEL_ID:', process.env.BIGCOMMERCE_CHANNEL_ID);
  console.log('BIGCOMMERCE_STORE_HASH:', process.env.BIGCOMMERCE_STORE_HASH);
  
  // Just pass through for now
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|admin|_next/static|_next/image|_vercel|favicon.ico|xmlsitemap.php|sitemap.xml|robots.txt).*)',
  ],
};
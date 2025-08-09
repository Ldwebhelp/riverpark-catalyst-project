// Middleware completely disabled for debugging
// This should eliminate MIDDLEWARE_INVOCATION_FAILED error

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Just pass everything through - no processing at all
  return NextResponse.next();
}

// Minimal matcher - only match a few specific routes
export const config = {
  matcher: [
    '/test-middleware-path-that-does-not-exist'
  ],
};
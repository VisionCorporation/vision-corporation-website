import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs';

const angularAppEngine = new AngularAppEngine();

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext();
  const url = new URL(request.url);
  
  console.log(`[SSR] Handling request: ${url.pathname}`);

  // Let Angular handle the request
  const result = await angularAppEngine.handle(request, context);

  if (!result) {
    console.log(`[SSR] No result from Angular for: ${url.pathname}`);
    return new Response('<h1>Not Found</h1>', {
      status: 404,
      headers: { 'Content-Type': 'text/html' },
    });
  }

  // Define known routes (exact matches and prefixes)
  const knownRoutes = ['/', '/services'];
  
  // Check if it's a static asset
  const isStaticAsset = url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|json|txt|xml)$/);
  
  // Check if it's a known route
  const isKnownRoute = knownRoutes.some(route => url.pathname === route);

  // If it's not a known route and not a static asset, it's a 404
  if (!isKnownRoute && !isStaticAsset) {
    console.log(`[SSR] Returning 404 for unknown route: ${url.pathname}`);
    
    // Return the Angular-rendered content but with 404 status
    return new Response(result.body, {
      status: 404,
      statusText: 'Not Found',
      headers: result.headers,
    });
  }

  console.log(`[SSR] Returning 200 for: ${url.pathname}`);
  return result;
}

export const reqHandler = createRequestHandler(netlifyAppEngineHandler);
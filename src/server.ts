import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs';

const angularAppEngine = new AngularAppEngine();

// List of known valid routes (update this with your actual routes)
const validRoutes = ['/', '/services', '/projects', '/about', '/contact'];

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext();
  const url = new URL(request.url);
  const pathname = url.pathname;

  const result = await angularAppEngine.handle(request, context);

  if (!result) {
    return new Response('Not Found', {
      status: 404,
      headers: { 'Content-Type': 'text/html' },
    });
  }

  // Check if this is a wildcard route match (404 page)
  const isValidRoute = validRoutes.some(route => 
    pathname === route || pathname.startsWith(route + '/')
  );

  if (!isValidRoute && result) {
    // It's a 404 page rendered by Angular's wildcard route
    return new Response(result.body, {
      status: 404,
      statusText: 'Not Found',
      headers: result.headers,
    });
  }

  return result;
}

export const reqHandler = createRequestHandler(netlifyAppEngineHandler);
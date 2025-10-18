import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs';

const angularAppEngine = new AngularAppEngine();

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext();

  // Let Angular try to handle the requested route
  const result = await angularAppEngine.handle(request, context);

  // If no route matched, let Angular render the "**" NotFound route
  if (!result) {
    console.log(`[SSR] 404: ${request.url}`);
    const notFoundRequest = new Request(new URL('/not-found', request.url).toString(), request);
    const notFoundResult = await angularAppEngine.handle(notFoundRequest, context);

    return (
      notFoundResult ||
      new Response('Not Found', {
        status: 404,
        headers: { 'Content-Type': 'text/html' },
      })
    );
  }

  return result;
}

/**
 * The request handler used by the Angular CLI (dev-server and during build).
 */
export const reqHandler = createRequestHandler(netlifyAppEngineHandler);

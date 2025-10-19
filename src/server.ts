import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { getContext } from '@netlify/angular-runtime/context.mjs';

const angularAppEngine = new AngularAppEngine();

export async function netlifyAppEngineHandler(request: Request): Promise<Response> {
  const context = getContext();
  
  // Angular handles everything including 404s via serverRoutes config
  const result = await angularAppEngine.handle(request, context);

  // Fallback only if Angular completely fails
  if (!result) {
    return new Response('Not Found', {
      status: 404,
      headers: { 'Content-Type': 'text/html' },
    });
  }

  return result;
}

export const reqHandler = createRequestHandler(netlifyAppEngineHandler);
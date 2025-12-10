import { AngularAppEngine, createRequestHandler } from '@angular/ssr';

const angularAppEngine = new AngularAppEngine();

export async function appEngineHandler(request: Request): Promise<Response> {
  // Angular handles all routing internally
  const result = await angularAppEngine.handle(request);

  // If Angular SSR fails completely, return fallback
  if (!result) {
    return new Response('Not Found', {
      status: 404,
      headers: { 'Content-Type': 'text/html' },
    });
  }

  return result;
}

export const reqHandler = createRequestHandler(appEngineHandler);

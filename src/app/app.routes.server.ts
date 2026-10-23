import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'journeys/:slug',
    renderMode: RenderMode.Server,
  },
  {
    path: 'digital-marketing',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'why-vision',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'contact-us',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'privacy-policy',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'terms-of-service',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'cookie-policy',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'send-newsletter',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'unsubscribe',
    renderMode: RenderMode.Prerender
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
    status: 404
  }
];
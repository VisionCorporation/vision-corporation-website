import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import("./pages/home/home").then((c) => c.Home) },
    { path: 'journeys/:slug', loadComponent: () => import('./pages/journeys/journey-page/journey-page').then((m) => m.JourneyPage,), },
    { path: 'digital-marketing', loadComponent: () => import('./pages/digital-marketing/digital-marketing').then(m => m.DigitalMarketing), },
    { path: 'why-vision', loadComponent: () => import('./pages/why-vision/why-vision').then(m => m.WhyVision) },
    { path: 'contact-us', loadComponent: () => import("./pages/contact/contact").then((c) => c.Contact) },
    { path: 'privacy-policy', loadComponent: () => import("./pages/privacy-policy/privacy-policy").then((c) => c.PrivacyPolicy) },
    { path: 'terms-of-service', loadComponent: () => import("./pages/terms-of-service/terms-of-service").then((c) => c.TermsOfService) },
    { path: 'cookie-policy', loadComponent: () => import("./pages/cookie-policy/cookie-policy").then((c) => c.CookiePolicy) },
    {
        path: 'send-newsletter', loadComponent: () => import("./pages/send-newsletter/send-newsletter").then((c) => c.SendNewsletter), data: { hideCookieBanner: true }
    },
    {
        path: 'unsubscribe', loadComponent: () => import("./pages/unsubscribe/unsubscribe").then((c) => c.Unsubscribe), data: { hideCookieBanner: true }
    },
    { path: '**', loadComponent: () => import("./pages/not-found/not-found").then((c) => c.NotFound), data: { hideCookieBanner: true } },
];
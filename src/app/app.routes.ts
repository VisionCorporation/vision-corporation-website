import { Routes } from '@angular/router';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path: '', loadComponent: () => import("./pages/home/home").then((c) => c.Home) },
    { path: 'services', loadComponent: () => import("./pages/services/services").then((c) => c.Services) },
    { path: 'privacy-policy', loadComponent: () => import("./pages/privacy-policy/privacy-policy").then((c) => c.PrivacyPolicy) },
    { path: 'terms-of-service', loadComponent: () => import("./pages/terms-of-service/terms-of-service").then((c) => c.TermsOfService) },
    { path: 'cookie-policy', loadComponent: () => import("./pages/cookie-policy/cookie-policy").then((c) => c.CookiePolicy) },
    { path: '**', loadComponent: () => import("./pages/not-found/not-found").then((c) => c.NotFound) },
];

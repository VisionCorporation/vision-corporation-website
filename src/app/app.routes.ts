import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import("./pages/home/home").then((c) => c.Home) },
    { path: 'services', loadComponent: () => import("./pages/services/services").then((c) => c.Services) },
    { path: '**', loadComponent: () => import('./pages/not-found/not-found').then(c => c.NotFound) },
];

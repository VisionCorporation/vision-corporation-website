import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import("./pages/home/home").then((c) => c.Home) },
    { path: 'not-found', loadComponent: () => import('./pages/not-found/not-found').then(c => c.NotFound) },
    { path: '**', redirectTo: 'not-found' },
];

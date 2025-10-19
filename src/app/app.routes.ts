import { Routes } from '@angular/router';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    { path: '', loadComponent: () => import("./pages/home/home").then((c) => c.Home) },
    { path: 'services', loadComponent: () => import("./pages/services/services").then((c) => c.Services) },
    { path: '**', component: NotFound },
];

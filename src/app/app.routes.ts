import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import("./pages/home/home").then((c) => c.Home) },
    { path: "**", loadComponent: () => import("./pages/not-found/not-found").then((c) => c.NotFound) }
];

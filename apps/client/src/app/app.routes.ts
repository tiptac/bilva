import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'market',
    loadComponent: () =>
      import('./market/market.component').then((m) => m.MarketComponent),
  },
  {
    path: 'manage',
    loadComponent: () =>
      import('./manage/manage.component').then((m) => m.ManageComponent),
  },
  {
    path: 'build',
    loadComponent: () =>
      import('./build/build.component').then((m) => m.BuildComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

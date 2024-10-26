import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'bilva',
    loadComponent: () =>
      import('./bilva/bilva.component').then((m) => m.BilvaComponent),
  },
  {
    path: 'business',
    children: [
      {
        path: 'own-it',
        loadComponent: () =>
          import('./business/own-it/own-it.component').then(
            (m) => m.OwnItComponent
          ),
      },
      {
        path: 'the-big-day',
        loadComponent: () =>
          import('./business/the-big-day/the-big-day.component').then(
            (m) => m.TheBigDayComponent
          ),
      },
    ],
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
    path: '',
    redirectTo: 'bilva',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./under-construction/under-construction.component').then(
        (m) => m.UnderConstructionComponent
      ),
  },
];

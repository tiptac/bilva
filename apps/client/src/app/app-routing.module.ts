import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'bilva',
    loadChildren: () =>
      import('./landing/bilva-landing/bilva-landing.module').then(
        (m) => m.BilvaLandingModule
      ),
  },
  {
    path: 'own-it',
    loadComponent: () =>
      import('./landing/own-it-landing/own-it-landing.component').then(
        (m) => m.OwnItLandingComponent
      ),
  },
  {
    path: 'the-big-day',
    loadComponent: () =>
      import(
        './landing/the-big-day-landing/the-big-day-landing.component'
      ).then((m) => m.TheBigDayLandingComponent),
  },
  {
    path: '',
    redirectTo: 'bilva',
    pathMatch: 'full',
  },
  {
    path: 'page-not-found',
    loadComponent: () =>
      import('./common/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
  {
    path: 'under-construction',
    loadComponent: () =>
      import('./common/coming-soon/coming-soon.component').then(
        (m) => m.ComingSoonComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./common/page-not-found/page-not-found.component').then(
        (m) => m.PageNotFoundComponent
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

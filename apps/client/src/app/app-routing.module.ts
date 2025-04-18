import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./landing/bilva-landing/bilva-landing.module').then(
        (m) => m.BilvaLandingModule
      ),
  },
  {
    path: 'ownit',
    loadComponent: () =>
      import('./landing/own-it-landing/own-it-landing.component').then(
        (m) => m.OwnItLandingComponent
      ),
  },
  {
    path: 'thebigday',
    loadComponent: () =>
      import(
        './landing/the-big-day-landing/the-big-day-landing.component'
      ).then((m) => m.TheBigDayLandingComponent),
  },
  {
    path: 'page-not-found',
    loadComponent: () =>
      import(
        './common/components/page-not-found/page-not-found.component'
      ).then((m) => m.PageNotFoundComponent),
  },
  {
    path: 'under-construction',
    loadComponent: () =>
      import('./common/components/coming-soon/coming-soon.component').then(
        (m) => m.ComingSoonComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import(
        './common/components/page-not-found/page-not-found.component'
      ).then((m) => m.PageNotFoundComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

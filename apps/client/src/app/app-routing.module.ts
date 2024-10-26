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
    path: '**',
    loadComponent: () =>
      import('./common/under-construction/under-construction.component').then(
        (m) => m.UnderConstructionComponent
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

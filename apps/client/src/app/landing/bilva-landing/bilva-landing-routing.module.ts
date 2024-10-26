import { Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BilvaLandingComponent } from './bilva-landing.component';

export const routes: Route[] = [
  {
    path: '',
    component: BilvaLandingComponent,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.component').then((m) => m.BilvaComponent),
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
        path: '**',
        loadComponent: () =>
          import(
            '../../common/under-construction/under-construction.component'
          ).then((m) => m.UnderConstructionComponent),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BilvaLandingRoutingModule {}

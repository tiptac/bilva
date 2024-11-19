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
          import('./home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'business',
        children: [
          {
            path: 'ownit',
            loadComponent: () =>
              import('./business-vertical/own-it/own-it.component').then(
                (m) => m.OwnItComponent
              ),
          },
          {
            path: 'thebigday',
            loadComponent: () =>
              import('./business-vertical/the-big-day/the-big-day.component').then(
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
        path: 'career',
        loadComponent: () =>
          import(
            '../../common/coming-soon/coming-soon.component'
          ).then((m) => m.ComingSoonComponent),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: '**',
        loadComponent: () =>
          import('../../common/page-not-found/page-not-found.component').then(
            (m) => m.PageNotFoundComponent
          ),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BilvaLandingRoutingModule {}

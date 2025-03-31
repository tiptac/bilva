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
        path: '',
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'business',
        children: [
          {
            path: 'realtysolution',
            children: [
              {
                path: 'ownit',
                loadComponent: () =>
                  import(
                    './business-vertical/realty-solution/own-it/own-it.component'
                  ).then((m) => m.OwnItComponent),
              },
              {
                path: 'buy-sell',
                loadComponent: () =>
                  import('../../common/coming-soon/coming-soon.component').then(
                    (m) => m.ComingSoonComponent
                  ),
              },
              {
                path: 'home-construction',
                loadComponent: () =>
                  import(
                    './business-vertical/realty-solution/home-construction/home-construction.component'
                  ).then((m) => m.HomeConstructionComponent),
              },
              {
                path: 'home-interiors',
                loadComponent: () =>
                  import('../../common/coming-soon/coming-soon.component').then(
                    (m) => m.ComingSoonComponent
                  ),
              },
              {
                path: 'asset-management',
                loadComponent: () =>
                  import('../../common/coming-soon/coming-soon.component').then(
                    (m) => m.ComingSoonComponent
                  ),
              },
              {
                path: 'relocation',
                loadComponent: () =>
                  import('../../common/coming-soon/coming-soon.component').then(
                    (m) => m.ComingSoonComponent
                  ),
              },
            ],
          },
          {
            path: 'eventmanagement',
            children: [
              {
                path: 'thebigday',
                loadComponent: () =>
                  import(
                    './business-vertical/event-management/the-big-day/the-big-day.component'
                  ).then((m) => m.TheBigDayComponent),
              },
            ],
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
          import('../../common/coming-soon/coming-soon.component').then(
            (m) => m.ComingSoonComponent
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

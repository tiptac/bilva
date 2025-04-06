import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/angular/standalone';
import { EventType, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'bilva-breadcrumb',
  imports: [CommonModule, IonBreadcrumbs, IonBreadcrumb, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {
  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e) => e.type === EventType.NavigationEnd))
      .subscribe((e) => {
        console.log(e);
      });
  }
}

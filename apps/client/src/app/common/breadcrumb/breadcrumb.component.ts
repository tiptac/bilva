import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonBreadcrumb, IonBreadcrumbs } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'bilva-breadcrumb',
  imports: [CommonModule, IonBreadcrumbs, IonBreadcrumb, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbComponent {}

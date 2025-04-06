import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { appRoutes } from '../../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'bilva-page-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {
  appRoutes = appRoutes;
}

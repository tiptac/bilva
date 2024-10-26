import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton, IonText } from '@ionic/angular/standalone';
import { appRoutes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'bilva-page-not-found',
  standalone: true,
  imports: [IonText, IonButton, CommonModule, RouterModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {
  appRoutes = appRoutes;
}

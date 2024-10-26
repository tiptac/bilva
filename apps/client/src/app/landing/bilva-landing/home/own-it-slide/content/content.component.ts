import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonCol, IonGrid, IonRow, IonText } from '@ionic/angular/standalone';
import { appRoutes } from '../../../../../app.routes';

@Component({
  selector: 'bilva-own-it-slide-content',
  standalone: true,
  imports: [
    IonRow,
    CommonModule,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    RouterModule,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class OwnItSlideContentComponent {
  appRoutes = appRoutes;
}

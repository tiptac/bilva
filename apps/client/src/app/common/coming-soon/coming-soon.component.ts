import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonButton, IonText } from '@ionic/angular/standalone';
import { appRoutes } from '../../app.routes';

@Component({
  selector: 'bilva-coming-soon',
  standalone: true,
  imports: [CommonModule, RouterModule, IonButton, IonText],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss',
})
export class ComingSoonComponent {
  appRoutes = appRoutes;
}

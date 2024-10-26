import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonButton, IonText } from '@ionic/angular/standalone';
import { appRoutes } from '../../app.routes';

@Component({
  selector: 'bilva-under-construction',
  standalone: true,
  imports: [CommonModule, RouterModule, IonButton, IonText],
  templateUrl: './under-construction.component.html',
  styleUrl: './under-construction.component.scss',
})
export class ComingSoonComponent {
  appRoutes = appRoutes;
}

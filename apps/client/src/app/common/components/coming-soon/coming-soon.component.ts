import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { appRoutes } from '../../../app.routes';
import { GoBackDirective } from '../../directives/go-back.directive';

@Component({
  selector: 'bilva-coming-soon',
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule, GoBackDirective],
  templateUrl: './coming-soon.component.html',
  styleUrl: './coming-soon.component.scss',
})
export class ComingSoonComponent {
  appRoutes = appRoutes;
}

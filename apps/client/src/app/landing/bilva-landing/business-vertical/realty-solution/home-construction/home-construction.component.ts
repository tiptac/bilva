import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { appRoutes } from '../../../../../app.routes';

@Component({
  selector: 'bilva-home-construction',
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './home-construction.component.html',
  styleUrl: './home-construction.component.scss',
})
export class HomeConstructionComponent {
  appRoutes = appRoutes;
}

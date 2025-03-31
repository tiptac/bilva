import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { appRoutes } from '../../../../../app.routes';

@Component({
  selector: 'bilva-own-it',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './own-it.component.html',
  styleUrl: './own-it.component.scss',
})
export class OwnItComponent {
  appRoutes = appRoutes;
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { appRoutes } from '../../../app.routes';

@Component({
  selector: 'bilva-under-construction',
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule],
  templateUrl: './under-construction.component.html',
  styleUrl: './under-construction.component.scss',
})
export class ComingSoonComponent {
  appRoutes = appRoutes;
}

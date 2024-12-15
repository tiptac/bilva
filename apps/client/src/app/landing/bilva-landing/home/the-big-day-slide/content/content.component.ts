import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { appRoutes } from '../../../../../app.routes';

@Component({
  selector: 'bilva-the-big-day-slide-content',
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class TheBigDaySlideContentComponent {
  appRoutes = appRoutes;
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ComingSoonComponent } from '../../common/components/coming-soon/coming-soon.component';

@Component({
  selector: 'bilva-the-big-day-landing',
  standalone: true,
  imports: [CommonModule, IonicModule, ComingSoonComponent],
  templateUrl: './the-big-day-landing.component.html',
  styleUrl: './the-big-day-landing.component.scss',
})
export class TheBigDayLandingComponent {}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UnderConstructionComponent } from '../../common/under-construction/under-construction.component';

@Component({
  selector: 'bilva-the-big-day-landing',
  standalone: true,
  imports: [CommonModule, IonicModule, UnderConstructionComponent],
  templateUrl: './the-big-day-landing.component.html',
  styleUrl: './the-big-day-landing.component.scss',
})
export class TheBigDayLandingComponent {}

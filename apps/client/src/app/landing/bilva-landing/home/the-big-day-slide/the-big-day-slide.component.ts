import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderConstructionComponent } from '../../../../common/under-construction/under-construction.component';

@Component({
  selector: 'bilva-the-big-day-slide',
  standalone: true,
  imports: [CommonModule, UnderConstructionComponent],
  templateUrl: './the-big-day-slide.component.html',
  styleUrl: './the-big-day-slide.component.scss',
})
export class TheBigDaySlideComponent {}

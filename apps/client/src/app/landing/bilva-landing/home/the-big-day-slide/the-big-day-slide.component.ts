import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from '../../../../common/coming-soon/coming-soon.component';

@Component({
  selector: 'bilva-the-big-day-slide',
  standalone: true,
  imports: [CommonModule, ComingSoonComponent],
  templateUrl: './the-big-day-slide.component.html',
  styleUrl: './the-big-day-slide.component.scss',
})
export class TheBigDaySlideComponent {}

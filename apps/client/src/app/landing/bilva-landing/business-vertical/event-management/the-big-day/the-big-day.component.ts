import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from '../../../../../common/coming-soon/coming-soon.component';

@Component({
  selector: 'bilva-the-big-day',
  standalone: true,
  imports: [CommonModule, ComingSoonComponent],
  templateUrl: './the-big-day.component.html',
  styleUrl: './the-big-day.component.scss',
})
export class TheBigDayComponent {}

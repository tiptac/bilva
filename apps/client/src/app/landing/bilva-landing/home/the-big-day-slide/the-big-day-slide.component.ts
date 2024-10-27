import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TheBigDaySlideContentComponent } from './content/content.component';

@Component({
  selector: 'bilva-the-big-day-slide',
  standalone: true,
  imports: [CommonModule, TheBigDaySlideContentComponent],
  templateUrl: './the-big-day-slide.component.html',
  styleUrl: './the-big-day-slide.component.scss',
})
export class TheBigDaySlideComponent {}

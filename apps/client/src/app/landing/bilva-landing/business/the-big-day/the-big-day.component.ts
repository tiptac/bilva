import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderConstructionComponent } from '../../../../common/under-construction/under-construction.component';

@Component({
  selector: 'bilva-the-big-day',
  standalone: true,
  imports: [CommonModule, UnderConstructionComponent],
  templateUrl: './the-big-day.component.html',
  styleUrl: './the-big-day.component.scss',
})
export class TheBigDayComponent {}

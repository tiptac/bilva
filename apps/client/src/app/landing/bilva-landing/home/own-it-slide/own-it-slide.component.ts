import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OwnItSlideContentComponent } from './content/content.component';

@Component({
  selector: 'bilva-own-it-slide',
  standalone: true,
  imports: [CommonModule, OwnItSlideContentComponent],
  templateUrl: './own-it-slide.component.html',
  styleUrl: './own-it-slide.component.scss',
})
export class OwnItSlideComponent {}

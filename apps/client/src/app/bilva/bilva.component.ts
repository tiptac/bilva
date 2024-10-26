import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { BilvaSlideComponent } from './bilva-slide/bilva-slide.component';
import { OwnItSlideComponent } from './own-it-slide/own-it-slide.component';
import { TheBigDaySlideComponent } from './the-big-day-slide/the-big-day-slide.component';

register();

@Component({
  selector: 'bilva-bilva',
  standalone: true,
  imports: [
    CommonModule,
    BilvaSlideComponent,
    OwnItSlideComponent,
    TheBigDaySlideComponent,
  ],
  templateUrl: './bilva.component.html',
  styleUrl: './bilva.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BilvaComponent {
  
}

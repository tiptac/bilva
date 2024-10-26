import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { BilvaSlideComponent } from './bilva-slide/bilva-slide.component';
import { OwnItSlideComponent } from './own-it-slide/own-it-slide.component';
import { TheBigDaySlideComponent } from './the-big-day-slide/the-big-day-slide.component';

register();

@Component({
  selector: 'bilva-home',
  standalone: true,
  imports: [
    CommonModule,
    BilvaSlideComponent,
    OwnItSlideComponent,
    TheBigDaySlideComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BilvaComponent {}

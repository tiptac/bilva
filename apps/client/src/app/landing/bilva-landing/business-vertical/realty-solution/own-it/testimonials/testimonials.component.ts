import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {
  Testimonial,
  TestimonialComponent,
} from './testimonial/testimonial.component';

@Component({
  selector: 'bilva-own-it-testimonials',
  standalone: true,
  imports: [CommonModule, IonicModule, TestimonialComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  isModalOpen = false;
  testimonials: Array<Testimonial> = [
    {
      name: 'XXX',
      projectCode: 'Home Construction / HC-P4-98',
      rating: 4,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      url: 'https://www.youtube-nocookie.com/embed/FOMTr6JQTSY?si=Yqgl4LVK_JonPYLh',
    },
    {
      name: 'YYY',
       projectCode: 'Home Interiors / HI-P4-99',
      rating: 5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: 'https://www.youtube-nocookie.com/embed/FOMTr6JQTSY?si=Yqgl4LVK_JonPYLh',
    },
    {
      name: 'ZZZ',
      projectCode: 'Buying and Selling / BS-P4-98',
      rating: 4,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: 'https://www.youtube-nocookie.com/embed/FOMTr6JQTSY?si=Yqgl4LVK_JonPYLh',
    },
    {
      name: 'XXXX',
      projectCode: 'Home Interiors / HI-P4-98',
      rating: 2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: 'https://www.youtube-nocookie.com/embed/FOMTr6JQTSY?si=Yqgl4LVK_JonPYLh',
    },
    {
      name: 'YYYY',
      projectCode: 'Asset Managment / AM-P4-98',
      rating: 2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: 'https://www.youtube-nocookie.com/embed/FOMTr6JQTSY?si=Yqgl4LVK_JonPYLh',
    },
    {
      name: 'ZZZZ',
      projectCode: 'Relocation Support / RS-P4-98',
      rating: 2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: 'https://www.youtube-nocookie.com/embed/FOMTr6JQTSY?si=Yqgl4LVK_JonPYLh',
    },
  ];
  rows = new Array(Math.floor(this.testimonials.length / 3) + 1);
  cols = Array(3);

  onWillDismiss() {}
}

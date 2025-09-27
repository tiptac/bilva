import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RatingComponent } from '../../../../../../common/components/rating/rating.component';
import { SafeUrl } from './safe.pipe';
import { TruncatePipe } from './truncate.pipe';

@Component({
  selector: 'bilva-own-it-testimonials',
  standalone: true,
  imports: [CommonModule, IonicModule, RatingComponent, SafeUrl, TruncatePipe],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  isModalOpen = false;
  testimonials = [
    {
      name: 'Customer Name 1',
      customerId: 'CRN10001',
      rating: 4,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
      url: 'https://www.youtube-nocookie.com/embed/FOMTr6JQTSY?si=Yqgl4LVK_JonPYLh',
    },
    {
      name: 'Customer Name 2',
      customerId: 'CRN10002',
      rating: 5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: 'https://www.youtube-nocookie.com/embed/FOMTr6JQTSY?si=Yqgl4LVK_JonPYLh',
    },
    {
      name: 'Customer Name 3',
      customerId: 'CRN10003',
      rating: 4,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: 'https://www.youtube-nocookie.com/embed/FOMTr6JQTSY?si=Yqgl4LVK_JonPYLh',
    },
    {
      name: 'Customer Name 4',
      customerId: 'CRN10004',
      rating: 2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: 'https://www.youtube-nocookie.com/embed/FOMTr6JQTSY?si=Yqgl4LVK_JonPYLh',
    },
    {
      name: 'Customer Name 5',
      customerId: 'CRN10004',
      rating: 2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: 'https://www.youtube-nocookie.com/embed/FOMTr6JQTSY?si=Yqgl4LVK_JonPYLh',
    },
    {
      name: 'Customer Name 6',
      customerId: 'CRN10004',
      rating: 2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: 'https://www.youtube-nocookie.com/embed/FOMTr6JQTSY?si=Yqgl4LVK_JonPYLh',
    },
    {
      name: 'Customer Name 7',
      customerId: 'CRN10004',
      rating: 2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: 'https://www.youtube-nocookie.com/embed/FOMTr6JQTSY?si=Yqgl4LVK_JonPYLh',
    },
    {
      name: 'Customer Name 8',
      customerId: 'CRN10004',
      rating: 2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: 'https://www.youtube-nocookie.com/embed/FOMTr6JQTSY?si=Yqgl4LVK_JonPYLh',
    },
  ];
  rows = new Array(Math.floor(this.testimonials.length / 3) + 1);
  cols = Array(3);

  onWillDismiss() {}

  // @HostListener('click', ['$event.target'])
  // onClick() {
  //   this.isModalOpen = false;
  // }
}

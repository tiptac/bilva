import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonContent } from '@ionic/angular/standalone';
import { RatingComponent } from '../../../../../common/components/rating/rating.component';
import { appRoutes } from '../../../../../app.routes';

@Component({
  selector: 'bilva-own-it',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, RatingComponent],
  templateUrl: './own-it.component.html',
  styleUrl: './own-it.component.scss',
})
export class OwnItComponent implements AfterViewInit {
  @ViewChild('content', { static: false })
  content!: IonContent;

  appRoutes = appRoutes;

  solutions = [
    {
      imgSrc: 'assets/images/BS.WEBP',
      title: 'Buying and Selling',
      content:
        'Making buying and selling effortless, transparent, and worry-free.',
      charges: ['1% from Buyer / Seller / Both'],
    },
    {
      imgSrc: 'assets/images/HS.WEBP',
      title: 'Home Construction',
      content:
        'Creating timeless spaces with elegance, lasting quality, and fair pricing.',
      charges: ['Turnkey - Rs1950/SqFt', 'Hybrid - Rs350/SqFt'],
    },
    {
      imgSrc: 'assets/images/HI.webp',
      title: 'Home Interiors',
      content:
        'Smart yet stylish spaces designed to enrich your everyday life.',
      charges: ['Tailored, once we know your vibe!'],
    },
    {
      imgSrc: 'assets/images/AM.webp',
      title: 'Asset Management',
      content:
        'Effortless property care that safeguards value and amplifies returns.',
      charges: ['10% of monthly rental / Pay-Per-Use'],
    },
    {
      imgSrc: 'assets/images/RS.WEBP',
      title: 'Relocation Support',
      content: 'Simplifying your shift with expert care every step of the way.',
      charges: ['Price tailored to your move'],
    },
  ];

  testimonials = [
    {
      name: 'Customer Name 1',
      customerId: 'CRN10001',
      rating: 4,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
    },
    {
      name: 'Customer Name 2',
      customerId: 'CRN10002',
      rating: 5,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      name: 'Customer Name 3',
      customerId: 'CRN10003',
      rating: 4,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      name: 'Customer Name 4',
      customerId: 'CRN10004',
      rating: 2,
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  ngAfterViewInit(): void {
    setTimeout(() => {
      const testimonialsTxt = document.getElementById('testimonialsTxt');
      this.content.scrollToPoint(
        undefined,
        testimonialsTxt?.getBoundingClientRect().y,
        1000
      );
    }, 5000);
  }
}

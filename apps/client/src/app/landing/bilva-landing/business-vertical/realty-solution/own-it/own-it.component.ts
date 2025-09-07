import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonContent } from '@ionic/angular/standalone';
import { appRoutes } from '../../../../../app.routes';

@Component({
  selector: 'bilva-own-it',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
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
      name: 'Shreyas Kale',
      customerId: 'CRN10001',
    },
    {
      name: 'Vinay Vivekananda',
      customerId: 'CRN10002',
    },
    {
      name: 'Darshan R',
      customerId: 'CRN10003',
    },
    {
      name: 'Sujan P',
      customerId: 'CRN10003',
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

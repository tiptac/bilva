import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'bilva-own-it-solutions',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss',
})
export class SolutionsComponent {
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
}

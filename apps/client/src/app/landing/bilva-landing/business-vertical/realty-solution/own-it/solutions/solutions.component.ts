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
        'Building spaces that last, with refined design and honest value.',
      charges: ['Turnkey - Rs 1850/Sq Ft onwards', 'Hybrid - Rs 300/Sq Ft'],
    },
    {
      imgSrc: 'assets/images/HI.webp',
      title: 'Home Interiors',
      content: 'Smart property solutions to secure alue and enhance returns.',
      charges: ['Tailored, once we know your vibe!'],
    },
    {
      imgSrc: 'assets/images/AM.webp',
      title: 'Asset Management',
      content:
        'Streamlined property care that protects assets and drives returns.',
      charges: ['10% of monthly rental / Pay per use'],
    },
    {
      imgSrc: 'assets/images/RS.WEBP',
      title: 'Relocation Support',
      content: 'Simplifying your shift with expert care every step of the way.',
      charges: ['Price tailored to your move'],
    },
  ];
}

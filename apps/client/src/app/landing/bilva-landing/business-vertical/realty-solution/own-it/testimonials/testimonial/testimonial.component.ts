import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SafeUrl } from './safe.pipe';
import { TruncatePipe } from './truncate.pipe';
import { RatingComponent } from '../../../../../../../common/components/rating/rating.component';

export interface Testimonial {
  name: string;
  projectCode: string;
  rating: number;
  text: string;
  url: string;
}

@Component({
  selector: 'bilva-own-it-testimonial',
  standalone: true,
  imports: [CommonModule, IonicModule, RatingComponent, SafeUrl, TruncatePipe],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
})
export class TestimonialComponent {
  @Input({ required: true })
  testimonial!: Testimonial;

  isModalOpen = false;
}

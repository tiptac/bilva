import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'bilva-rating',
  standalone: true,
  imports: [CommonModule, RouterModule, IonIcon],
  templateUrl: './rating.component.html',
})
export class RatingComponent {
  @Input({ required: true }) rating = 0;

  stars = [1, 2, 3, 4, 5];
}

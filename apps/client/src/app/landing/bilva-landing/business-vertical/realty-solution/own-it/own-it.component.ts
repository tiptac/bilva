import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { appRoutes } from '../../../../../app.routes';
import { SolutionsComponent } from './solutions/solutions.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

register();
@Component({
  selector: 'bilva-own-it',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    SolutionsComponent,
    TestimonialsComponent,
  ],
  templateUrl: './own-it.component.html',
  styleUrl: './own-it.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class OwnItComponent {
  appRoutes = appRoutes;
}

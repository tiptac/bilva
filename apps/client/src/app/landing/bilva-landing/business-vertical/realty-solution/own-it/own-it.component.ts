import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { appRoutes } from '../../../../../app.routes';
import { SolutionsComponent } from './solutions/solutions.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

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
})
export class OwnItComponent {
  appRoutes = appRoutes;
}

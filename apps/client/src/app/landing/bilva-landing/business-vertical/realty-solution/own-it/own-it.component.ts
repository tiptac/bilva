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

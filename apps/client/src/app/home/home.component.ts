import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ScreenSizeService } from '../../common/services/screen-size-service';
import { ScreenSize } from '../../common/models/screen-size';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'bilva-home',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  get isBottonAlign(): boolean {
    switch (this.screenSizeService.screenSize) {
      case ScreenSize.sm:
      case ScreenSize.md:
        return true;
    }
    return false;
  }

  constructor(private screenSizeService: ScreenSizeService) {}

  scrollTo(el: HTMLDivElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

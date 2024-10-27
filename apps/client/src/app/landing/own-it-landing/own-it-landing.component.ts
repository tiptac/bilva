import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ComingSoonComponent } from '../../common/coming-soon/coming-soon.component';

@Component({
  selector: 'bilva-own-it-landing',
  standalone: true,
  imports: [CommonModule, IonicModule, ComingSoonComponent],
  templateUrl: './own-it-landing.component.html',
  styleUrl: './own-it-landing.component.scss',
})
export class OwnItLandingComponent {}

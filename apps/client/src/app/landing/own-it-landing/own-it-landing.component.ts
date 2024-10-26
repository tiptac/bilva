import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UnderConstructionComponent } from '../../common/under-construction/under-construction.component';

@Component({
  selector: 'bilva-own-it-landing',
  standalone: true,
  imports: [CommonModule, IonicModule, UnderConstructionComponent],
  templateUrl: './own-it-landing.component.html',
  styleUrl: './own-it-landing.component.scss',
})
export class OwnItLandingComponent {}

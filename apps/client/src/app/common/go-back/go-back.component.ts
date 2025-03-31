import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'bilva-go-back',
  imports: [CommonModule, IonButton],
  templateUrl: './go-back.component.html',
  styleUrl: './go-back.component.scss',
})
export class GoBackComponent {
  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }
}

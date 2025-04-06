import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonButton } from '@ionic/angular/standalone';
import { appRoutes } from '../../../app.routes';

@Component({
  selector: 'bilva-go-back',
  imports: [CommonModule, IonButton],
  templateUrl: './go-back.component.html',
  styleUrl: './go-back.component.scss',
})
export class GoBackComponent {
  constructor(private location: Location, private router: Router) {}

  goBack() {
    if (history.state.navigationId > 1) {
      this.location.back();
    } else {
      this.router.navigate(appRoutes.bilva.home);
    }
  }
}

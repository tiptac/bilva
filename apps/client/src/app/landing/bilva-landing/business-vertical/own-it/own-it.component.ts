import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonRow,
} from '@ionic/angular/standalone';

@Component({
  selector: 'bilva-own-it',
  standalone: true,
  imports: [
    CommonModule,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
  ],
  templateUrl: './own-it.component.html',
  styleUrl: './own-it.component.scss',
})
export class OwnItComponent {}

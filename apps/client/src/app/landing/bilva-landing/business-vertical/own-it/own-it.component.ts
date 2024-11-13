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
  IonText,
} from '@ionic/angular/standalone';

@Component({
  selector: 'bilva-own-it',
  standalone: true,
  imports: [
    IonText,
    CommonModule,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonCardContent,
    IonText,
  ],
  templateUrl: './own-it.component.html',
  styleUrl: './own-it.component.scss',
})
export class OwnItComponent {}

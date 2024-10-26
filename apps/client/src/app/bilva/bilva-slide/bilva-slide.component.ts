import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonText, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'bilva-bilva-slide',
  standalone: true,
  imports: [IonButton, IonText, CommonModule],
  templateUrl: './bilva-slide.component.html',
  styleUrl: './bilva-slide.component.scss',
})
export class BilvaSlideComponent {}

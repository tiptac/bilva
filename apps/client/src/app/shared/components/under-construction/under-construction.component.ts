import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";

@Component({
  selector: 'bilva-under-construction',
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, CommonModule],
  templateUrl: './under-construction.component.html',
  styleUrl: './under-construction.component.scss',
})
export class UnderConstructionComponent {}

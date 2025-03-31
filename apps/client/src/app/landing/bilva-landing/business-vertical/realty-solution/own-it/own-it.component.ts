import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'bilva-own-it',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './own-it.component.html',
  styleUrl: './own-it.component.scss',
})
export class OwnItComponent {}

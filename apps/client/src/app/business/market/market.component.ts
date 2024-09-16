import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderConstructionComponent } from '../../shared/components/under-construction/under-construction.component';

@Component({
  selector: 'bilva-market',
  standalone: true,
  imports: [CommonModule, UnderConstructionComponent],
  templateUrl: './market.component.html',
  styleUrl: './market.component.scss',
})
export class MarketComponent {}

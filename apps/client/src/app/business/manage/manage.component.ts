import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderConstructionComponent } from '../../shared/components/under-construction/under-construction.component';

@Component({
  selector: 'bilva-manage',
  standalone: true,
  imports: [CommonModule, UnderConstructionComponent],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss',
})
export class ManageComponent {}

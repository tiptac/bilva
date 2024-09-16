import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnderConstructionComponent } from '../../shared/components/under-construction/under-construction.component';

@Component({
  selector: 'bilva-build',
  standalone: true,
  imports: [CommonModule, UnderConstructionComponent],
  templateUrl: './build.component.html',
  styleUrl: './build.component.scss',
})
export class BuildComponent {}

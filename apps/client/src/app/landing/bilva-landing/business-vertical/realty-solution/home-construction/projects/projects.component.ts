import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Project, projects } from './projects.model';

@Component({
  selector: 'bilva-home-contruction-projects',
  imports: [CommonModule, RouterModule, IonicModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects: Project[] = projects;
}

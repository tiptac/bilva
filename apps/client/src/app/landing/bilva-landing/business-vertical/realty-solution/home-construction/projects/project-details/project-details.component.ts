import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Project, projects } from '../projects.model';

@Component({
  selector: 'bilva-home-contruction-project-details',
  imports: [CommonModule, RouterModule, IonicModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent {
  project: Project;
  constructor(private route: ActivatedRoute) {
    const projectId = Number.parseInt(this.route.snapshot.params['id']);
    this.project = <Project>projects.find((p) => p.id === projectId);
  }
}

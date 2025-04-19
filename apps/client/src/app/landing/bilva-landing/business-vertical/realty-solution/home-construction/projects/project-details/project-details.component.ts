import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Project } from '../../../../../../../common/api/models/projects.model';
import { Observable } from 'rxjs';
import { ProjectsService } from '../../../../../../../common/services/projects.service';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'bilva-home-contruction-project-details',
  imports: [CommonModule, RouterModule, IonicModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectDetailsComponent {
  project$: Observable<Project>;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {
    const projectId = Number.parseInt(this.route.snapshot.params['id']);
    this.project$ = this.projectsService.getProject(projectId);
  }
}

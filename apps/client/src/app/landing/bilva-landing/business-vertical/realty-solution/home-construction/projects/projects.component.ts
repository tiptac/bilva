import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Project } from '../../../../../../common/api/models/projects.model';
import { ProjectsService } from '../../../../../../common/services/projects.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'bilva-home-contruction-projects',
  imports: [CommonModule, RouterModule, IonicModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects$: Observable<Array<Project>>;

  constructor(private projectsService: ProjectsService) {
    this.projects$ = this.projectsService
      .getProjects()
      .pipe(map((r) => r.data));
  }
}

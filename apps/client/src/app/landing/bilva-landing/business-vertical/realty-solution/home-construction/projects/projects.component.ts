import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Project } from '../../../../../../common/api/models/projects.model';
import { ProjectsService } from '../../../../../../common/services/projects.service';
import { map, Observable } from 'rxjs';
import { BilvaProjectsSlideComponent } from './bilva-projects-slide/bilva-projects-slide.component';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'bilva-home-contruction-projects',
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    BilvaProjectsSlideComponent,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectsComponent {
  projects$: Observable<Array<Project>>;

  constructor(private projectsService: ProjectsService) {
    this.projects$ = this.projectsService.getProjects().pipe(
      map((r) => {
        return r.data;
      })
    );
  }
}

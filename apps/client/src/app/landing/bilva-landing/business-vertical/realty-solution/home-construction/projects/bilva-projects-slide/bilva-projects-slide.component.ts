import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Project } from '../../../../../../../common/api/models/projects.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'bilva-home-contruction-project-slide',
  imports: [CommonModule, RouterModule, IonicModule],
  templateUrl: './bilva-projects-slide.component.html',
  styleUrl: './bilva-projects-slide.component.scss',
})
export class BilvaProjectsSlideComponent {
  @Input({ required: true })
  project!: Project;

  get backgroundImageUrl() {
    return `url('../../../../../../../../assets/business/ownit/home-construction/projects/'${this.project.id}/${this.project.thumbnail})`;
  }

  get completion() {
    return this.project.completion;
  }
}

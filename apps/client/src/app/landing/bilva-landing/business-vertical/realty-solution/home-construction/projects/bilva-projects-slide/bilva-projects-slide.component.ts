import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {
  Project,
  ProjectAttributeData,
  ProjectAttributeKey,
  ProjectAttributeType,
  ProjectAttributeValue,
} from '../../../../../../../common/api/models/projects.model';

@Component({
  selector: 'bilva-home-contruction-project-slide',
  imports: [CommonModule, RouterModule, IonicModule],
  templateUrl: './bilva-projects-slide.component.html',
  styleUrl: './bilva-projects-slide.component.scss',
})
export class BilvaProjectsSlideComponent implements OnInit {
  @Input({ required: true })
  project!: Project;
  attributes: Array<{
    key: ProjectAttributeKey;
    value: ProjectAttributeValue;
  }> = [];

  get backgroundImageUrl() {
    return `url('../../../../../../../../assets/business/ownit/home-construction/projects/'${this.project.id}/${this.project.thumbnail})`;
  }

  ngOnInit(): void {
    this.attributes = Object.entries(this.project.attributes).map(
      ([key, value]) => {
        return {
          key,
          value:
            typeof value === 'object'
              ? <ProjectAttributeValue>value
              : {
                  data: value as ProjectAttributeData,
                  type: ProjectAttributeType.raw,
                },
        };
      }
    );
  }
}

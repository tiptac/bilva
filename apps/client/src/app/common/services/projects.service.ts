import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../api/models/page.model';
import { Project } from '../api/models/projects.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<Page<Project>> {
    return this.http.get<Page<Project>>(
      '/api/assets/business/ownit/home-construction/projects.json'
    );
  }
  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(
      `/api/assets/business/ownit/home-construction/projects/${id}/details.json`
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { map, Observable, shareReplay } from 'rxjs';
import { Page } from '../api/models/page.model';
import { Project } from '../api/models/projects.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  projects$: Observable<Page<Project>>;
  constructor(private http: HttpClient) {
    this.projects$ = this.http
      .get<Page<Project>>(
        'assets/business/ownit/home-construction/projects.json'
      )
      .pipe(shareReplay(1));
  }

  getProjects$(): Observable<Page<Project>> {
    return this.projects$;
  }
  getProject(id: number): Observable<Project> {
    return this.projects$.pipe(
      map((projects) => projects.data.find((p) => p.id === id)!)
    );
  }
}

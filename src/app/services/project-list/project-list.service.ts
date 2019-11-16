import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Project } from '../../classes/project';
import { Subject } from 'rxjs';


const GETPROJECT_URL = environment.urlBase + '/allProjects';
const DELETEPROJECT_URL = environment.urlBase + '/delete';

@Injectable({
  providedIn: 'root'
})


export class ProjectListService {

  projectList: Project[];
  private getProjectListData = new Subject<Project[]>();
  getProjectList = this.getProjectListData.asObservable();

  constructor(private http: HttpClient) { }

  getAllProjects() {
    const projectListResponse = this.http.get<Array<Project>>(GETPROJECT_URL);
    projectListResponse.subscribe((data) => {
      this.projectList = data;
      this.getProjectListData.next(this.projectList);
    });
  }

  deleteProject(projectID: number) {
    const deleteURL = DELETEPROJECT_URL + '/${projectID}';
    this.http.delete(deleteURL);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Project } from '../../classes/project';
import { Subject } from 'rxjs';


const GETPROJECT_URL = environment.urlBase + '/allProjects';
const DELETEPROJECT_URL = environment.urlBase + '/deleteProject';
const PUTPROJECT_URL = environment.urlBase + '/putProject';

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

  postProject(project: Project) {
    this.http.put(GETPROJECT_URL, {
      name: project.name,
      id: project.id,
      description: project.description,
      accessLevel: project.accessLevel,
      vision: project.vision,
      archieved: project.archieved,
      deleted: project.deleted,
      businessValueWeight: project.businessValueWeight,
      relativePenaltyWeight: project.relativePenaltyWeight,
      easeOfRealizationWeight: project.easeOfRealizationWeight,
      createdAt: project.createdAt,
      updatedAt: project.updatedAt
    }).subscribe(data => {
      console.log('POST request done', data);
    }, error => {
      console.log('error in POST method');
    }
    );
  }


  updateProject(project: Project) {
    const projectID = project.id;
    const putURL = PUTPROJECT_URL + '/' + projectID;
    this.http.put(putURL, {
      name: project.name,
      id: project.id,
      description: project.description,
      accessLevel: project.accessLevel,
      vision: project.vision,
      archieved: project.archieved,
      deleted: project.deleted,
      businessValueWeight: project.businessValueWeight,
      relativePenaltyWeight: project.relativePenaltyWeight,
      easeOfRealizationWeight: project.easeOfRealizationWeight,
      createdAt: project.createdAt,
      updatedAt: project.updatedAt
    }).subscribe(data => {
      console.log('PUT request done', data);
    }, error => {
      console.log('error in PUT method');
    }
    );
  }


  deleteProject(projectID: number) {
    const deleteURL = DELETEPROJECT_URL + '/' + projectID;
    this.http.delete(deleteURL);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Project } from '../../classes/project';
import { Subject, BehaviorSubject } from 'rxjs';
import { BackendService } from '../backend.service';


const GETPROJECT_URL = environment.urlBase + '/projects';
const DELETEPROJECT_URL = environment.urlBase + '/deleteProject';
const PUTPROJECT_URL = environment.urlBase + '/putProject';

@Injectable({
  providedIn: 'root'
})


export class ProjectService {

  private joinedProjectListData = new BehaviorSubject<Project[]>([]);
  joinedProjectList = this.joinedProjectListData.asObservable();
  private otherProjectListData = new BehaviorSubject<Project[]>([]);
  otherProjectList = this.otherProjectListData.asObservable();
  private activeProjectData = new BehaviorSubject<number>(-1);
  getActiveProject = this.activeProjectData.asObservable();
  projectsFetched: boolean;
  constructor(private http: HttpClient, private backendService: BackendService) {
    this.projectsFetched = false;
  }

  getAllProjects() {
    const projectListResponse = this.http.get<any>(GETPROJECT_URL);
    projectListResponse.subscribe((data) => {
      console.log("Received projects");
      console.log(data);
      this.projectsFetched = true;
      this.joinedProjectListData.next(data.joinedProjects);
      this.otherProjectListData.next(data.otherProjects);
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

  joinProject(projectId: number) {
    return this.http.get<any>(`${environment.urlBase}/project/${projectId}/join`);
  }


  deleteProject(projectID: number) {
    const deleteURL = DELETEPROJECT_URL + '/' + projectID;
    this.http.delete(deleteURL);
  }

  setActiveProject(projectID: number) {
    this.activeProjectData.next(projectID);
  }

  getActiveProjectAsNumber(){
    return this.activeProjectData.value;
  }

  createProject(project: Project) {
      const obs = this.backendService.createProject(project);
      obs.subscribe((data)=> {
          this.getAllProjects();
      });
  }
}

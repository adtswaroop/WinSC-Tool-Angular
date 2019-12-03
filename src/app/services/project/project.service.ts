import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Project } from '../../classes/project';
import { Subject, BehaviorSubject } from 'rxjs';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';
import { SnackbarService } from './../../services/snackbar.service';


const GETPROJECT_URL = environment.urlBase + '/projects';
const DELETEPROJECT_URL = environment.urlBase + '/deleteProject';
const PUTPROJECT_URL = environment.urlBase + '/project';

@Injectable({
  providedIn: 'root'
})


export class ProjectService {

  initialProject = new Project("Waiting..",0,"Waiting..","public","Waiting...",false,false,0,0,0,new Date(),new Date());
  public joinedProjectListData = new BehaviorSubject<Project[]>([]);
  joinedProjectList = this.joinedProjectListData.asObservable();
  private otherProjectListData = new BehaviorSubject<Project[]>([]);
  otherProjectList = this.otherProjectListData.asObservable();
  public activeProjectData = new BehaviorSubject<number>(-1);
  getActiveProjectId = this.activeProjectData.asObservable();
  private activeProjectObjectData = new BehaviorSubject<Project>(this.initialProject);
  getActiveProjectObject = this.activeProjectObjectData.asObservable();
  projectsFetched: boolean;
  constructor(private http: HttpClient, private backendService: BackendService, private router: Router,
              private snackBarService: SnackbarService) {
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
      this.updateActiveProjectObject();
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
      this.getAllProjects();
    }, error => {
      console.log('error in PUT method');
      console.log(error);
    }
    );
  }

  joinProject(projectId: number) {
    return this.http.get<any>(`${environment.urlBase}/project/${projectId}/join`);
  }


  deleteProject(projectID: number) {
    const obs = this.backendService.deleteProject(projectID);
    obs.subscribe((data) => {
        this.router.navigate(['project-list']);
        const newProjectList = this.joinedProjectListData.value.filter((object) => object.id !== projectID);
        this.joinedProjectListData.next(newProjectList);
    });
  }

  setActiveProject(projectID: number) {
    this.activeProjectData.next(projectID);
    this.updateActiveProjectObject();

  }

  updateActiveProjectObject() {
    const joinedProjectArr = this.joinedProjectListData.value;
    const projectID = this.activeProjectData.value;
    if (projectID === -1) {
      return;
    }
    let projectFound = false;
    joinedProjectArr.forEach((element)=> {
      if (element.id == projectID) {
        this.activeProjectObjectData.next(element);
        projectFound = true;
        console.log("Active project found");
      }
    });
    if (!projectFound && this.projectsFetched) {
      console.log("Nonexistent project called");
      this.router.navigate(["project-list"]);
    }
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

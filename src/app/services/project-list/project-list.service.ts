import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Project } from '../../classes/project';


const GETPROJECT_URL = environment.urlBase + '/allProjects';

@Injectable({
  providedIn: 'root'
})


export class ProjectListService {

  constructor(private http: HttpClient) { }

  getAllProjects() {
    return this.http.get<Array<Project>>(GETPROJECT_URL);
  }
}

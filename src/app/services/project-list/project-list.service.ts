import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';


const GETPROJECT_URL = environment.urlBase + '/allProjects';

@Injectable({
  providedIn: 'root'
})


export class ProjectListService {

  constructor(private http: HttpClient) { }

  getAllProjects() {

  }
}

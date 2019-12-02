import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment'
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})

export class BenefitBackend{
    private DataSource = new BehaviorSubject({});
    public data = this.DataSource.asObservable();
    public sealData = this.DataSource.asObservable();
    private url = `${environment.urlBase}`; //change this later
   // private url = "http://csse.usc.edu:3000/api";
  
    constructor(private http: HttpClient) { }

    public getAllBenefits(projectID)
    {
        console.log("Getting benefits for project..");

        this.data = this.http.get(this.url+"/project/"+encodeURI(projectID)+"/benefits");
        return this.data;
    }
}
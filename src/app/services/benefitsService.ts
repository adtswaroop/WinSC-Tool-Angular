import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../services/project/project.service';
import {BehaviorSubject, Observable} from 'rxjs';
import { Category } from '../classes/category';
import { Benefit } from '../classes/benefit';
import {BackendService} from './backend.service';



@Injectable({
  providedIn: 'root'
})

export class BenefitsService{
    private DataSource = new BehaviorSubject({});
    public benefitData = this.DataSource.asObservable();
    public returnData :any= {};
    public dataresponse:any={};
    activeProjectId;
      
  constructor(private http: HttpClient, private backendService: BackendService , private projectService : ProjectService) { 
    this.projectService.getActiveProjectId.subscribe((projectId) => {
      this.setAllBenefits(projectId);
      this.activeProjectId = projectId;
  });
  }

  public setAllBenefits(projectId:number){
    console.log("Getting benefits for project from the service...");
    const obj = this.backendService.getAllBenefits(projectId)
    obj.subscribe(
        data=>{this.DataSource.next(data)}
    );
  }

  public createBenefit(newBenefit: Benefit)
  {
      console.log("Adding new benefit to this projectin the service" + newBenefit);
      const obj = this.backendService.createBenefit(this.activeProjectId, newBenefit)
      obj.subscribe(data=>{this.setAllBenefits(this.activeProjectId)},
        err=>{console.log(err)});
  }

  public updateBenefit(updatedBenefit: Benefit, benefitId: Number)
  {
    console.log("Updating benefit valuein the service");
    const obj =  this.backendService.updateBenefit(updatedBenefit, benefitId)
    obj.subscribe(data=>{this.setAllBenefits(this.activeProjectId)},
    err=>{console.log(err)});
  }

  public deleteBenefit(benefitId: number){
    console.log("Deleting benefit from the service...");
    const obj = this.backendService.deleteBenefit(benefitId);
    obj.subscribe(data=>{this.setAllBenefits(this.activeProjectId)},
    err=>{console.log(err)});
  }
}
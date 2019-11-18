import { ProjectService } from './../services/project/project.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class ProjectGuard implements CanActivate {
    constructor(
        private projectService: ProjectService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.projectService.getActiveProjectAsNumber()==route.params.id) {
          console.log("Project Id was already correct")
          return true;
        } else {
          this.projectService.setActiveProject(route.params.id);
          console.log("Project id is changed to "+route.params.id);
          return true;
        }

    }
}

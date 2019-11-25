import { DummyData } from './../../classes/dummy-data';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project/project.service';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  joinedProjects = [];

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private projectService: ProjectService) {
      this.projectService.joinedProjectList.subscribe((data) => {
        this.joinedProjects = data;
        console.log("Received projects of len "+data.length);
      });
    }

  ngOnInit() {
  }

  logout(){
      this.auth.logout();
      this.router.navigate(['/login']);
  }

}

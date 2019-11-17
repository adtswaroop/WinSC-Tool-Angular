import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

export const projects = ['Winbook 2.0', 'Project Swarm', 'Winbook Feedback'];

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {

  projects = projects;

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
      this.auth.logout();
      this.router.navigate(['/login']);
  }

}

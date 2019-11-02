import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private auth :AuthenticationService, private router:Router) { }

  ngOnInit() {
  }

  logout(){
      this.auth.logout();
      this.router.navigate(['/login']);
  }

}

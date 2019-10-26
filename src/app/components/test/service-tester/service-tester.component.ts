import { User } from './../../../classes/user';
import { AuthenticationService } from './../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-tester',
  templateUrl: './service-tester.component.html',
  styleUrls: ['./service-tester.component.css']
})
export class ServiceTesterComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {

  }

  ngOnInit() {
  }

  testLoginRequest(){
   const obj = this.authenticationService.login("xtestx",'password');
   obj.subscribe((data) => {
     console.log(data);
   })
  }

  testCurrentUser(){
   const user:User = this.authenticationService.currentUserValue;
   console.log(user);
  }

  logoutUser() {
    this.authenticationService.logout();
  }

}

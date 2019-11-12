import { User } from './../../../classes/user';
import { AuthenticationService } from './../../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { WinconditionService } from 'src/app/services/wincondition.service';
import { WinCondition } from 'src/app/classes/win-condition';
@Component({
  selector: 'app-service-tester',
  templateUrl: './service-tester.component.html',
  styleUrls: ['./service-tester.component.css']
})
export class ServiceTesterComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private winconditionService: WinconditionService) {

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

  testRegister() {
    const obj = this.authenticationService.register('test','asdasda','fasf','xxxx');
    obj.subscribe((data) => {
      console.log(data);
    })
  }

  logoutUser() {
    this.authenticationService.logout();
  }

  testAllWinConditions() {
    this.winconditionService.updateWinConditions();
  }

}

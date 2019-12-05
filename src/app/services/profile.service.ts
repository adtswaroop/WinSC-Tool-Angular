import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../classes/user'
import { BehaviorSubject } from 'rxjs';

const USER_URL = environment.urlBase + '/user'

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  private userSource = new BehaviorSubject<User>(null);
  public userData = this.userSource.asObservable();

  constructor(private backendService: BackendService, private http: HttpClient) {
    this.getUserData();
  }

  getUserData() {
    const obs = this.backendService.getUser();
    obs.subscribe((data) => {
      console.log('Received user data: ');
      console.log(data);
      this.userSource.next(data);
    });
    return obs;
  }

  putUserData(userInfo) {
    const promise = new Promise((resolve, reject) => {
      const obs = this.backendService.putUser(userInfo);
      obs.subscribe((data) => {
        console.log('Updating user data...');
        this.userSource.next(data);
        resolve();
      }, () => {
        console.log('Failed to update user info (DB rejected the update)');
        reject();
      });
    });
    return promise;
  }
}

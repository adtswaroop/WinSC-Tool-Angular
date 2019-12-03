import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor(private http: HttpClient) {
    this.getUserData();
  }

  getUserData() {
    const obj = this.http.get<User>(USER_URL);
    obj.subscribe((data) => {
      console.log('Received user data: ');
      console.log(data);
      this.userSource.next(data);
    });
    return obj;
  }

  putUserData(userInfo) {
    const obj = this.http.put<any>(USER_URL, userInfo);
    obj.subscribe((data) => {
      console.log('Updating user data: ');
      console.log(userInfo);
      this.userSource.next(data);
    }, (error) => {
      console.log('Failed to update user info');
    });
  }
}

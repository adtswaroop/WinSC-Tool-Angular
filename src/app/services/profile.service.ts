import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../classes/user'
import { Subject, BehaviorSubject } from 'rxjs';

const GETUSER_URL = environment.urlBase + '/user'

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
    const obj = this.http.get<User>(GETUSER_URL);
    obj.subscribe((data) => {
      console.log('Received user data: ');
      console.log(data);
      this.userSource.next(data);
    });
    return obj;
  }
}

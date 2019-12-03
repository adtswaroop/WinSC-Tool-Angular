import { BackendService } from './backend.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './../classes/user';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, private backend:BackendService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email, password) {
        return  this.backend.login({email,password})
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    register(email,password,firstName,lastName){
        const token = '';
        const id  = 0;
        const type = "regular"; // TODO: Get user from backend once created
        const userObj = {id,email,password,firstName,lastName,type,token}
        const promise = new Promise((resolve, reject) => {
          this.backend.register(userObj).subscribe((data) => {
              userObj.token = data.token;
              localStorage.setItem('currentUser', JSON.stringify(userObj));
              this.currentUserSubject.next(userObj);
              resolve();
          },(error) => {
            reject();
          });
        });
        return promise;

    }

    logout() {
        // remove user from local storage and set current user to null
        // TODO: call logout backend
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}

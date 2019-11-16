import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WinHolderPriorizationService {

  baseURL;

  constructor(private http: HttpClient) { 
  	this.baseURL = "";
  }

  getWinConditions() {
  	var getWinConditionsURL = this.baseURL + "";
    return this.http.get(getWinConditionsURL);
  }
}

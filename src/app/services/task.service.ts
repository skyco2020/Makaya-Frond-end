import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginToken} from '../Classes/login-token';
import {Country} from '../Classes/country';

@Injectable({
  providedIn: 'root'
})
export abstract class TaskService {
  public url = '/api';
  constructor(
    readonly http: HttpClient
  ) { }
   CountryAuto(modal: Country){
    return this.http.post(`/api/Countries/CountryAuto`, modal);
   }
   GetUserByEmail(email: string){
    return this.http.get(`api/Users/SearchByEmail?email=` + email);
   }
  getUserClaims(){
      return  this.http.get('/api/GetUserClaims',
      {headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        // tslint:disable-next-line: object-literal-key-quotes
        'Authorization': localStorage.getItem('userToken')})});
     }
    Authentication(modal: LoginToken){
      return this.http.post(`/api/authenticate`, modal);
    }
}

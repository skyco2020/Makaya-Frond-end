import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginToken} from '../Classes/login-token';
import {Country} from '../Classes/country';
import { tap, mapTo, catchError } from 'rxjs/operators';
import {Tokens} from '../Classes/tokens';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public url = '/api';
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private readonly RoleUser = 'RoleUser';
  private loggedUser: string;

  constructor(
    readonly http: HttpClient
  ) { }

  CountryAuto(modal: Country){
   return this.http.post(`/api/Countries/CountryAuto`, modal);
  }
  getUserClaims()
  {
    return  this.http.get('/api/GetUserClaims',
    {headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      // tslint:disable-next-line: object-literal-key-quotes
      'Authorization': this.getJwtToken()})
    });
  }
  GetAllMovie()
  {
    return  this.http.get('/api/GetAllMovie');
  }
  Authentication(modal: LoginToken): Observable<boolean>{
    this.doLogoutUser();
    return this.http.post<any>(`/api/authenticate`, modal)
    .pipe(
      tap( tokens => this.doLoginUser(modal.UserName, tokens)),
      mapTo(true),
      catchError(error => {
        return of(false)
      })
    );
  }

  logout(){
    let tokens = new Tokens();
    tokens.refreshToken = this.getRefreshToken();
    tokens.jwt = this.getJwtToken();

    return this.http.post<any>('/api/CloseSession', tokens ,
    {headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': tokens.jwt})
    }).pipe(
      tap(() => this.doLogoutUser()),
      mapTo(true),
      catchError(error => {
        debugger;
        this.doLogoutUser()
        return of(true)
      }));
  }
  refreshToken(): Observable<boolean>{
    let tokenss = new Tokens;
    tokenss.refreshToken = this.getRefreshToken();
    tokenss.jwt = this.getJwtToken();
    debugger;
    return this.http.post<any>(`/api/refresh`, tokenss)
    .pipe(
      tap( tokens => this.storeJwtToken(tokens)),
      mapTo(true),
      catchError(error => {
        return of(false)
      })
    );
  }
  // refreshToken() {
  //   let tokenss = new Tokens;
  //   tokenss.refreshToken = this.getRefreshToken();
  //   tokenss.jwt = this.getJwtToken();
  //   debugger;
  //     return this.http.post<any>('/api/refresh', tokenss
  //     // {headers: new HttpHeaders({
  //     //   'Content-Type': 'application/x-www-form-urlencoded',
  //     //   // tslint:disable-next-line: object-literal-key-quotes
  //     //   'Authorization': tokenss.jwt})
  //     // }
  //     )
  //     .pipe(tap((tokens: Tokens) => {
  //       this.storeJwtToken(tokens.jwt);
  //     }));
  // }

  loggedIn() {
    return !!this.getJwtToken();
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  // getUserRole() {
  //   return localStorage.getItem(this.RoleUser);
  // }
  private storeJwtToken(jwt: string) {
    debugger;
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
    localStorage.removeItem(this.RoleUser);
  }
  private doLoginUser(username: string, tokens: Tokens) {
    this.loggedUser = username;
    this.storeTokens(tokens);
  }

  public doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.jwt);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refreshToken);
    // localStorage.setItem(this.RoleUser, tokens.role);
  }
}

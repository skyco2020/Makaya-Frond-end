import { Injectable } from '@angular/core';
import { TaskService } from '../services/task.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private statetoke:any;
  constructor(public auth: TaskService,
    public jwtHelper: JwtHelperService) { }

    public isAuthenticated(): boolean {
      // Check whether the token is expired and return
      // true or false
      let exp =this.jwtHelper.isTokenExpired(this.auth.getJwtToken());
      this.auth.refreshToken();
      if(this.auth.getJwtToken()!= null && exp){
        this.auth.refreshToken();
        this.statetoke = this.jwtHelper.isTokenExpired(this.auth.getJwtToken());
      }
      else{
        this.statetoke = exp;
      }
      debugger;
      return !this.statetoke;
    }
}

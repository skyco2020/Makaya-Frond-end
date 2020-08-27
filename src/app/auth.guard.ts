import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {TaskService} from './services/task.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: TaskService,
     private _router: Router){}
  canActivate():boolean{
      if(this._authService.loggedIn()){
        this._router.navigate(['/home']);
      }
      else{

        return !this._authService.loggedIn();
      }
  }

}

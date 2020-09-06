import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {TaskService} from '../services/task.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
 constructor(private authService: TaskService,private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      debugger;
      let role = this.authService.getUserRole().toLowerCase();
      if (this.authService.loggedIn() && role=== ("user").toLowerCase()) {
        this.router.navigate(['/home']);
      }
      else if(this.authService.loggedIn() && role=== ("admin").toLowerCase()){
        this.router.navigate(['/admin']);
      }
      else if(this.authService.loggedIn() && role=== ("provider").toLowerCase()){
        this.router.navigate(['/provider']);
      }
      else if(this.authService.loggedIn() && role=== ("employee").toLowerCase()){
        this.router.navigate(['/employee']);
      }
      else{
        this.router.navigate(['/error']);
      }
      return !this.authService.loggedIn();
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}

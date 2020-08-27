import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import {TaskService} from './services/task.service';

@Injectable({
  providedIn: 'root'
})
export class StateloginService implements CanActivate, CanLoad {

  constructor(private authService: TaskService, private router: Router) { }

  canActivate(){
    return this.canLoad();
  }
  canLoad() {
    if (!this.authService.loggedIn()) {
      this.router.navigate(['/login']);
    }
    return this.authService.loggedIn();
  }
}

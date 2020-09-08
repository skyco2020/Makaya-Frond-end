import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import { TaskService } from './services/task.service';
import {AuthService} from './services/auth.service';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {

  constructor(public auth: TaskService, public router: Router,
    public autisAut:AuthService) { }
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // const expectedRole = route.data.expectedRole;
    // const tokenPayload = decode(this.auth.getJwtToken());
    // debugger

    if (!this.autisAut.isAuthenticated() || decode(this.auth.getJwtToken()).UserRole.toLowerCase() !== route.data.expectedRole) {
      this.router.navigate(['browse']);
      return false;
    }
    return true;
  }

}

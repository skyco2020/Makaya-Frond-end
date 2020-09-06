import { Router } from '@angular/router';
import{TaskService} from '../services/task.service';
export class Globalfunction {
  userService:TaskService;
  router: Router;

  public Logout(){
    this.userService.logout()
    .subscribe(success => {
      debugger
      if (success) {
        this.router.navigate(['/browse']);
      }
    });
  }
}

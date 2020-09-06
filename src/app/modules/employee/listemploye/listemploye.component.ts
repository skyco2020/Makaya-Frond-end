import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{TaskService} from '../../../services/task.service';


@Component({
  selector: 'app-listemploye',
  templateUrl: './listemploye.component.html',
  styleUrls: ['./listemploye.component.css']
})
export class ListemployeComponent implements OnInit {
  constructor(private userService: TaskService, private router : Router) { }

  ngOnInit(): void {
    debugger;
  }
  Logout() {
    this.userService.logout()
    .subscribe(success => {
      debugger
      if (success) {
        this.router.navigate(['/browse']);
      }
    });
  }
}

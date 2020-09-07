import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-globalmenu',
  templateUrl: './globalmenu.component.html',
  styleUrls: ['./globalmenu.component.css']
})
export class GlobalmenuComponent implements OnInit {
  switchCondition:any;
  constructor(private userService: TaskService, private router:Router) { }

  ngOnInit(): void {
    // let role = this.userService.getUserRole().toLowerCase();
    // if( role!== ("user").toLowerCase()){
    //   this.switchCondition = this.userService.getUserRole().toLowerCase();
    // }
    // else{
    //   this.router.navigate(['/error']);
    // }

  }

}

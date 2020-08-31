import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../../services/task.service';

@Component({
  selector: 'app-globalmenu',
  templateUrl: './globalmenu.component.html',
  styleUrls: ['./globalmenu.component.css']
})
export class GlobalmenuComponent implements OnInit {
  switchCondition:any;
  constructor(private userService: TaskService) { }

  ngOnInit(): void {
    this.switchCondition = this.userService.getUserRole().toLowerCase();
  }

}

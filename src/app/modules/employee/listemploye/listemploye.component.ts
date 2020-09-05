import { Component, OnInit } from '@angular/core';
import{Globalfunction} from '../../../Classes/globalfunction';

@Component({
  selector: 'app-listemploye',
  templateUrl: './listemploye.component.html',
  styleUrls: ['./listemploye.component.css']
})
export class ListemployeComponent implements OnInit {

  constructor(private globalfunction:Globalfunction) { }

  ngOnInit(): void {
    debugger;
  }
  Logout() {
    this.globalfunction.Logout();
  }
}

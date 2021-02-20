import { Component, OnInit } from '@angular/core';
import { GlobalFunctionService } from '../Function/global-function.service';

@Component({
  selector: 'app-menu01',
  templateUrl: './menu01.component.html',
  styleUrls: ['./menu01.component.scss']
})
export class Menu01Component implements OnInit {

  constructor(private serGlo:GlobalFunctionService) { }

  ngOnInit(): void {
    this.serGlo.loadScript('../../assets/js/menu01.js');
  }

}

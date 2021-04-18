import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu02',
  templateUrl: './menu02.component.html',
  styleUrls: ['./menu02.component.scss']
})
export class Menu02Component implements OnInit {
  @Input() val:any ;
  constructor() { }

  ngOnInit(): void {
    debugger;
  }

}

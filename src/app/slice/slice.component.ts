import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GlobalFunctionService } from '../Function/global-function.service';

@Component({
  selector: 'app-slice',
  templateUrl: './slice.component.html',
  styleUrls: ['./slice.component.css']
})
export class SliceComponent implements OnInit {
  @ViewChild('slice') slice: ElementRef;
  @Input() moviesslice=[];

  constructor(private gbfuncservice: GlobalFunctionService) { }

  ngOnInit(): void {
    this.gbfuncservice.loadScript('../../assets/js/slice.js');
    debugger;
  }

}

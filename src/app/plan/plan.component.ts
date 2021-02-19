import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.querySelector('.close-modal').addEventListener('click',()=>{
      $('.modal-plan').css({
        display : 'none'
      })
    });
    document.querySelector('.btn-add-plan').addEventListener('click',()=>{
      $('.modal-plan').css({
        display : 'block'
      })
    });
    document.querySelector('.fa-pen-square').addEventListener('click',()=>{
      $('.modal-plan').css({
        display : 'block'
      })
    });
  }

}

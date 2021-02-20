import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})

export class MyListComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  
   document.querySelectorAll('.pelicula').forEach(pel =>{
     pel.addEventListener('mouseover',(e) =>{
      $('.pelicula').css({
        // zIndex: 1,
        // background: 'blue' 
        padding: 0,
        margin: 0 ,
        
      })
     })
   })
  }

}

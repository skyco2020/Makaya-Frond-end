import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   const films = document.querySelectorAll('.pelicula');
   const modal = document.querySelector('.modal-film');
   films.forEach(f =>{
     f.addEventListener('mouseover',e=>{
       modal.classList.add('d-block')
      f.parentElement.appendChild(modal);
     })
   })
  }

}

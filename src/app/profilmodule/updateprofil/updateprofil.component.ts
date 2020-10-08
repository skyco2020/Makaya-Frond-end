import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-updateprofil',
  templateUrl: './updateprofil.component.html',
  styleUrls: ['./updateprofil.component.css'],
})
export class UpdateprofilComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    trye();
  }
}
function trye() {
  document.querySelector('#edit').addEventListener('click', function (e) {
    // alert(this.getAttribute('data-id'));
    document.getElementById('profiles').style.display = 'none';
    document.getElementById('modal').style.height = '100vh!important';
    document.getElementById('modal').style.width = '100%!important';
    document.getElementById('modal').style.position = 'absolute';
  });
}

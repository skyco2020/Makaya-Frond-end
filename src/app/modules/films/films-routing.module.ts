import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from 'src/app/films/films.component';

const routes: Routes = [
  {
    path: '',
    component: FilmsComponent,
    data: {title: 'films'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }

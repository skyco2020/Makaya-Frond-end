import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from 'src/app/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorComponent,
    data: {
      title: 'Error'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }

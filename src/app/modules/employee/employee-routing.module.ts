import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListemployeComponent } from './listemploye/listemploye.component';


const routes: Routes = [
  {
    path:'employee',
    component: ListemployeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

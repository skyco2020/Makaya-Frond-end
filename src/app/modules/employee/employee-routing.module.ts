|import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListemployeComponent } from './listemploye/listemploye.component';
import { AuthGuard } from 'src/app/auth/auth.guard';


const routes: Routes = [
  {
    path:'employee',
    // canActivate:[AuthGuard],
    component: ListemployeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

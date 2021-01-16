import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListemployeComponent } from './listemploye/listemploye.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { RoleGuardGuard } from 'src/app/role-guard.guard';


const routes: Routes = [
  {
    path: '',
    component: ListemployeComponent,
    canActivate: [RoleGuardGuard],
    data: {
      expectedRole: 'employee',
      title: 'Employe'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth/auth.guard';
import { HomeComponent } from 'src/app/home/home.component';
import { RoleGuardGuard } from 'src/app/role-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canLoad: [AuthGuard],
    canActivate: [RoleGuardGuard],
    data: {
      expectedRole: 'user',
      title: 'Home'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KidsComponent } from 'src/app/profilmodule/kids/kids.component';
import { RoleGuardGuard } from 'src/app/role-guard.guard';
import { AuthGuard } from '../../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: KidsComponent,
    canLoad: [AuthGuard],
    canActivate: [RoleGuardGuard],
    data: {
      expectedRole: 'user',
      title: 'Kids'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidRoutingModule { }

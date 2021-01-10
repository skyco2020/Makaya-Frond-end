import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from 'src/app/profilmodule/profil/profil.component';
import { RoleGuardGuard } from 'src/app/role-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: ProfilComponent,
    canActivate: [RoleGuardGuard],
    data: {
      expectedRole: 'user',
      title: 'Perfil'
    }
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }

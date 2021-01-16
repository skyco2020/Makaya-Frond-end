import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderComponent } from 'src/app/provider/provider.component';
import { RoleGuardGuard } from 'src/app/role-guard.guard';


const routes: Routes = [
  {
    path: '',
    component: ProviderComponent,
    canActivate: [RoleGuardGuard],
    data: {
      expectedRole: 'provider',
      title: 'Provider'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }

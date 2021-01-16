import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateprofilComponent } from 'src/app/profilmodule/updateprofil/updateprofil.component';

const routes: Routes = [
  {
    path: '',
    component: UpdateprofilComponent,
    data: {title: 'Update perfil'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateprofilRoutingModule { }

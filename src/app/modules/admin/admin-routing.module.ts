import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import { CreateadminComponent } from './createadmin/createadmin.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';


const routes: Routes = [
  {
    path: 'administrador',
    component: AdministradorComponent,
  },
  {
    path:'createadmin',
    component: CreateadminComponent,
  },
  {
    path: 'updateadmin',
    component: UpdateadminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

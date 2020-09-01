import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorComponent } from './administrador/administrador.component';
import { CreateadminComponent } from './createadmin/createadmin.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';
import { ListemployeComponent } from '../employee/listemploye/listemploye.component';


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
  },
  {
    path: 'employee',
    component: ListemployeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

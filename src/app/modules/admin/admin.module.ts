import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateadminComponent } from './createadmin/createadmin.component';
import { UpdateadminComponent } from './updateadmin/updateadmin.component';
import { AdministradorComponent } from './administrador/administrador.component';


@NgModule({
  declarations: [CreateadminComponent, UpdateadminComponent, AdministradorComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

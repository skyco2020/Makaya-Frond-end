import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpdateadminComponent } from '../admin/updateadmin/updateadmin.component';
import { ResetpasswordComponent } from './login/resetpassword/resetpassword.component';


const routes: Routes = [
  {
    path: 'updatepassword',
    component: UpdateadminComponent,
  },
  {
    path: 'resetpassword',
    component: ResetpasswordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }

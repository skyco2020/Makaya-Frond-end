import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountSettingComponent } from 'src/app/account-setting/account-setting.component';

const routes: Routes = [
  {
    path: '',
    component: AccountSettingComponent,
    data: {title: 'Setting'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountSettingRoutingModule { }

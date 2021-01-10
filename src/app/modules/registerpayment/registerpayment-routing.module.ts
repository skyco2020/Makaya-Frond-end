import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterpaymentComponent } from 'src/app/registerpayment/registerpayment.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterpaymentComponent,
    data: {title: 'Register payment'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterpaymentRoutingModule { }

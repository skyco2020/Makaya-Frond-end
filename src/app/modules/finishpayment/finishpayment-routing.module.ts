import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinishpaymentComponent } from 'src/app/finishpayment/finishpayment.component';

const routes: Routes = [
  {
    path: 'finishpayment',
    component: FinishpaymentComponent,
    data: {title: 'Finish payment'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinishpaymentRoutingModule { }

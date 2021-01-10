import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NonepaymentComponent } from 'src/app/nonepayment/nonepayment.component';

const routes: Routes = [
  {
    path: '',
    component: NonepaymentComponent,
    data: {title: 'None payment'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonepaymentRoutingModule { }

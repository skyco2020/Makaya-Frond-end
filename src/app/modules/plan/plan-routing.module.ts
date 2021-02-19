import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanComponent } from 'src/app/plan/plan.component';

const routes: Routes = [
  {
    path: '',
    component: PlanComponent,
    data: {title: 'Plan'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule { }

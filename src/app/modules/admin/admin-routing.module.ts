import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanComponent } from 'src/app/plan/plan.component';

const routes: Routes = [
  {
    path: '',
    component: PlanComponent,
    data: {
      title: 'Perfil'
    }
   },
   {
    path: 'plan',
    loadChildren: () =>
      import('../plan/plan.module').then(
        (e) => e.PlanModule 
      ),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('../product/product.module').then(
        (e) => e.ProductModule 
      ),
  },
  {
    path: 'upload-video',
    loadChildren: () =>
      import('../load-video/load-video.module').then(
        (e) => e.LoadVideoModule 
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

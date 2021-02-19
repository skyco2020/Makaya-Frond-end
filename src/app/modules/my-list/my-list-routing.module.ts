import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyListComponent } from 'src/app/my-list/my-list.component';

const routes: Routes = [
  {
    path: '',
    component: MyListComponent,
    data: {title: 'my-list'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyListRoutingModule { }

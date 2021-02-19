import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadVideoComponent } from 'src/app/load-video/load-video.component';

const routes: Routes = [
  {
    path: '',
    component: LoadVideoComponent,
    data: {title: 'upload-video'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadVideoRoutingModule { }

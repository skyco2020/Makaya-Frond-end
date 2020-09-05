import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import {AccountComponent} from './account/account.component';
import {RegisterpaymentComponent} from './registerpayment/registerpayment.component';
import {FinishpaymentComponent} from './finishpayment/finishpayment.component';
import {NonepaymentComponent} from './nonepayment/nonepayment.component';
import { AuthGuard } from './auth/auth.guard';
import { from } from 'rxjs';
import { StateloginService } from './statelogin.service';
import { GlobalmenuComponent } from './modules/layout/globalmenu/globalmenu.component';
import { ErrorComponent } from './error/error.component';
import { ProviderComponent } from './provider/provider.component';
import { ListemployeComponent } from './modules/employee/listemploye/listemploye.component';
// import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
  {
    path: 'home', component: HomeComponent,
    canActivate: [StateloginService],
    canLoad: [StateloginService]
  },
  {
    path: '404',
    component: ErrorComponent
  },
  {
    path: 'principal',
    component: GlobalmenuComponent,
    canActivate:[AuthGuard],
    loadChildren : () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    // canActivate: [StateloginService],
    canLoad: [StateloginService],
  },
  {
    path: 'provider',
    canActivate:[AuthGuard],
    component: ProviderComponent,
    loadChildren: () => import('./modules/provider/provider.module').then(p => p.ProviderModule)
  },
  {
    path: 'employee',
    // canActivate:[AuthGuard],
    component: ListemployeComponent,
    loadChildren: () => import('./modules/employee/employee.module').then(e =>e.EmployeeModule)
  },
  {
      path: 'browse', component: UserComponent,
      // canActivate: [AuthGuard]

  },
  {
      path: 'account', component: AccountComponent
  },
  {
      path: 'registerpayment', component: RegisterpaymentComponent
  },
  {
    path : '', redirectTo: `/browse`, pathMatch : 'full'
  },
  // {
  //     path: 'admin',
  //     loadChildren : () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  // },
  {
      path: 'finishpayment', component: FinishpaymentComponent
  },
  {
      path: 'nonepayment', component: NonepaymentComponent
  },
  /* any unrecognized path will send home */
  {
    path: '**',
    redirectTo: '/404'
  }
];

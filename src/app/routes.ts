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
import { RoleGuardGuard } from './role-guard.guard';
// import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [RoleGuardGuard],
    data: {
      expectedRole: 'user'
    }
  },
  {
    path: '404',
    component: ErrorComponent
  },
  {
    path: 'provider',
    component: ProviderComponent,
    canActivate:[RoleGuardGuard],
     data: {
      expectedRole: 'provider'
    },
    loadChildren: () => import('./modules/provider/provider.module').then(p => p.ProviderModule)
  },
  {
    path: 'employee',
    component: ListemployeComponent,
    canActivate: [RoleGuardGuard],
    data: {
      expectedRole: 'employee'
    },
    loadChildren: () => import('./modules/employee/employee.module').then(e =>e.EmployeeModule)
  },
  {
      path: 'browse',
      component: UserComponent,
      // canActivate: [AuthGuard]
  },
  {
      path: 'account',
      component: AccountComponent,
      canActivate: [AuthGuard]
  },
  {
      path: 'registerpayment',
      component: RegisterpaymentComponent
  },
  {
    path : '',
    redirectTo: `/browse`,
    pathMatch : 'full'
  },
  {
      path: 'finishpayment',
      component: FinishpaymentComponent
  },
  {
      path: 'nonepayment',
      component: NonepaymentComponent
  },
  /* any unrecognized path will send home */
  {
    path: '**',
    redirectTo: '/404'
  }
];

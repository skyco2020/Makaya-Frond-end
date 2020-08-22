import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import {AccountComponent} from './account/account.component';
import {RegisterpaymentComponent} from './registerpayment/registerpayment.component';
import {FinishpaymentComponent} from './finishpayment/finishpayment.component';
import {NonepaymentComponent} from './nonepayment/nonepayment.component';
import { AuthGuard } from './auth/auth.guard';
import { from } from 'rxjs';
// import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
      path: 'home', component: HomeComponent,
       canActivate: [AuthGuard]
    },
    {
        path: 'login', component: UserComponent
    },
    {
        path: 'account', component: AccountComponent
    },
    {
        path: 'registerpayment', component: RegisterpaymentComponent
    },
    {
      path : '', redirectTo: `/login`, pathMatch : 'full'
    },
    {
        path: 'finishpayment', component: FinishpaymentComponent
    },
    {
        path: 'nonepayment', component: NonepaymentComponent
    }
  ];

import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
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
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
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

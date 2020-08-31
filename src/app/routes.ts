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
// import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
    {
      path: 'home', component: HomeComponent,
      canActivate: [StateloginService],
      canLoad: [StateloginService]
    },
    {
      path: 'principal', component: GlobalmenuComponent,
      loadChildren : () => import('./modules/admin/admin.module').then(m => m.AdminModule),
      canActivate: [StateloginService],
      canLoad: [StateloginService],
    },
    {
        path: 'login', component: UserComponent,
       canActivate: [AuthGuard]

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
      redirectTo: '/home'
    }
  ];

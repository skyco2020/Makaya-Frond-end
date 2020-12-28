import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AccountComponent } from './account/account.component';
import { RegisterpaymentComponent } from './registerpayment/registerpayment.component';
import { FinishpaymentComponent } from './finishpayment/finishpayment.component';
import { NonepaymentComponent } from './nonepayment/nonepayment.component';
import { AuthGuard } from './auth/auth.guard';
import { from } from 'rxjs';
import { StateloginService } from './statelogin.service';
import { GlobalmenuComponent } from './modules/layout/globalmenu/globalmenu.component';
import { ErrorComponent } from './error/error.component';
import { ProviderComponent } from './provider/provider.component';
import { ListemployeComponent } from './modules/employee/listemploye/listemploye.component';
import { RoleGuardGuard } from './role-guard.guard';
import { ProfilComponent } from './profilmodule/profil/profil.component';
import { KidsComponent } from './profilmodule/kids/kids.component';
import { UpdateprofilComponent } from './profilmodule/updateprofil/updateprofil.component';
// import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canLoad: [AuthGuard],
    canActivate: [RoleGuardGuard],
    data: {
      expectedRole: 'user',
      title: 'Home'
    },
  },
  {
    path: 'kids',
    component: KidsComponent,
    canLoad: [AuthGuard],
    canActivate: [RoleGuardGuard],
    data: {
      expectedRole: 'user',
      title: 'Kids'
    },
  },
  {
    path: '404',
    component: ErrorComponent,
    data: {
      title: 'Error'
    },
  },
  {
    path: 'provider',
    component: ProviderComponent,
    canActivate: [RoleGuardGuard],
    data: {
      expectedRole: 'provider',
      title: 'Provider'
    },
    loadChildren: () =>
      import('./modules/provider/provider.module').then(
        (p) => p.ProviderModule
      ),
  },
  {
    path: 'employee',
    component: ListemployeComponent,
    canActivate: [RoleGuardGuard],
    data: {
      expectedRole: 'employee',
      title: 'Employe'
    },
    loadChildren: () =>
      import('./modules/employee/employee.module').then(
        (e) => e.EmployeeModule
      ),
  },
  {
    path: 'browse',
    component: UserComponent,
     data: {title: 'browse'}
    // canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    component: ProfilComponent,
    canActivate: [RoleGuardGuard],
    data: {
      expectedRole: 'user',
      title: 'Perfil'
    },
  },
  {
    path: 'account',
    component: AccountComponent,
    data: {title: 'Account'}
  },
  {
    path: 'registerpayment',
    component: RegisterpaymentComponent,
    data: {title: 'Register payment'}
  },
  {
    path: '',
    redirectTo: `/browse`,
    pathMatch: 'full',
  },
  {
    path: 'updateprofil',
    component: UpdateprofilComponent,
    data: {title: 'Update perfil'}
  },
  {
    path: 'finishpayment',
    component: FinishpaymentComponent,
    data: {title: 'Finish payment'}
  },
  {
    path: 'nonepayment',
    component: NonepaymentComponent,
    data: {title: 'None payment'}
  },
  /* any unrecognized path will send home */
  {
    path: '**',
    redirectTo: '/404',
  },
];

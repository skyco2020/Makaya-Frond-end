import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';

export const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () => import("./modules/home/home.module").then((p) => p.HomeModule),
  },
  {
    path: 'kids',
    loadChildren: () => import("./modules/kid/kid.module").then((p) => p.KidModule),
  },
  {
    path: '404',
    loadChildren: () => import("./modules/error/error.module").then((p) => p.ErrorModule),
  },
  {
    path: 'provider',    
    loadChildren: () =>
      import('./modules/provider/provider.module').then(
        (p) => p.ProviderModule
      ),
  },
  {
    path: 'employee',
    loadChildren: () =>
      import('./modules/employee/employee.module').then(
        (e) => e.EmployeeModule
      ),
  },
  {
    path: 'browse',
    component: UserComponent,
     data: {title: 'browse'}
  },
  {
    path: 'perfil',
    loadChildren: () =>
      import('./modules/perfil/perfil.module').then(
        (e) => e.PerfilModule
      ),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./modules/account/account.module').then(
        (e) => e.AccountModule
      ),
  },
  {
    path: 'registerpayment',
    loadChildren: () =>
      import('./modules/registerpayment/registerpayment.module').then(
        (e) => e.RegisterpaymentModule
      ),
  },
  {
    path: '',
    redirectTo: `/browse`,
    pathMatch: 'full',
  },
  {
    path: 'updateprofil',
    loadChildren: () =>
      import('./modules/updateprofil/updateprofil.module').then(
        (e) => e.UpdateprofilModule
      ),
  },
  {
    path: 'finishpayment',
    loadChildren: () =>
      import('./modules/finishpayment/finishpayment.module').then(
        (e) => e.FinishpaymentModule
      ),
  },
  {
    path: 'nonepayment',
    loadChildren: () =>
      import('./modules/nonepayment/nonepayment.module').then(
        (e) => e.NonepaymentModule
      ),
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('./modules/account-setting/account-setting.module').then(
        (e) => e.AccountSettingModule 
      ),
  },
  
  {
    path: 'my-list',
    loadChildren: () =>
      import('./modules/my-list/my-list.module').then(
        (e) => e.MyListModule 
      ),
  },
  {
    path: 'films',
    loadChildren: () =>
      import('./modules/films/films.module').then(
        (e) => e.FilmsModule 
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then(
        (e) => e.AdminModule 
      ),
  },
  /* any unrecognized path will send home */
  {
    path: '**',
    redirectTo: '/404',
  },
];

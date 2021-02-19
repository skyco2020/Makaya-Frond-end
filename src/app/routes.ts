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
    path: 'plan',
    loadChildren: () =>
      import('./modules/plan/plan.module').then(
        (e) => e.PlanModule 
      ),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./modules/product/product.module').then(
        (e) => e.ProductModule 
      ),
  },
  /* any unrecognized path will send home */
  {
    path: '**',
    redirectTo: '/404',
  },
];

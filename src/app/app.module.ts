import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { JwtHelperService,  JWT_OPTIONS  } from '@auth0/angular-jwt';
import {PreloadAllModules, RouterModule} from '@angular/router';
import { appRoutes } from './routes';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth/auth.guard';
import {TaskService} from './services/task.service';
import { AccountComponent } from './account/account.component';
import { RegisterpaymentComponent } from './registerpayment/registerpayment.component';
import {NgxStripeModule } from 'ngx-stripe';
import { FooterComponent } from './footer/footer.component';
import { FinishpaymentComponent } from './finishpayment/finishpayment.component';
import { NonepaymentComponent } from './nonepayment/nonepayment.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { StateloginService } from './statelogin.service';
import { GlobalmenuComponent } from './modules/layout/globalmenu/globalmenu.component';
import { ProfilComponent } from './profilmodule/profil/profil.component';
import { UpdateprofilComponent } from './profilmodule/updateprofil/updateprofil.component';
import { KidsComponent } from './profilmodule/kids/kids.component';
import { GlobalFunctionService} from './Function/global-function.service';

import {CarouselModule} from 'primeng/carousel';
import {GalleriaModule} from 'primeng/galleria';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { PlanComponent } from './plan/plan.component';
import { ProductComponent } from './product/product.component';
import { MyListComponent } from './my-list/my-list.component';
import { LoadVideoComponent } from './load-video/load-video.component';
import { Menu02Component } from './menu02/menu02.component';
import { FilmsComponent } from './films/films.component';
import { Menu01Component } from './menu01/menu01.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent, UserComponent,
    AccountComponent,RegisterpaymentComponent,FooterComponent,
    FinishpaymentComponent,NonepaymentComponent,
    GlobalmenuComponent, ProfilComponent,
    UpdateprofilComponent, KidsComponent, AccountSettingComponent, PlanComponent, ProductComponent, MyListComponent, LoadVideoComponent, Menu02Component, FilmsComponent, Menu01Component, AdminComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,CarouselModule,GalleriaModule,
    FormsModule,NgbModalModule,ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_ystNiSIyKYOF0Nm6pgLjXXEW00Ym2IQmtV') ,
    RouterModule.forRoot(appRoutes, 
      { 
        relativeLinkResolution: 'legacy' ,
        // enableTracing: true,
        // preloadingStrategy: PreloadAllModules
      }),
    ToastrModule.forRoot()
    ],
  exports:[RouterModule],

  providers: [{provide:JWT_OPTIONS, useValue:JWT_OPTIONS},JwtHelperService,AuthGuard,TaskService, GlobalFunctionService, StateloginService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  },Title
],
  bootstrap: [AppComponent]
})
export class AppModule { }

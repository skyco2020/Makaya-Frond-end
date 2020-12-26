import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { JwtHelperService,  JWT_OPTIONS  } from '@auth0/angular-jwt';
import {RouterModule} from '@angular/router';
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

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AccountComponent,
    // RoleGuardServiceService,
    RegisterpaymentComponent,
    FooterComponent,
    FinishpaymentComponent,
    NonepaymentComponent,
    GlobalmenuComponent,
    ProfilComponent,
    UpdateprofilComponent,
    KidsComponent,
    // Globalfunction,
    // AdminComponent,
    // ProviderComponent,
    // ListuserComponent,
    // ActorComponent,
    // EmployeeComponent,
    // ErrorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CarouselModule,
    FormsModule,
    NgbModalModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_ystNiSIyKYOF0Nm6pgLjXXEW00Ym2IQmtV') ,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    ToastrModule.forRoot()
    ],
  exports:[RouterModule],

  providers: [{provide:JWT_OPTIONS, useValue:JWT_OPTIONS},JwtHelperService,AuthGuard,TaskService, GlobalFunctionService, StateloginService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

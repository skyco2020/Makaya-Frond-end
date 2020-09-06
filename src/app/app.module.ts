import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
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
// import { AdminComponent } from './admin/admin.component';
// import { ProviderComponent } from './provider/provider.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { StateloginService } from './statelogin.service';
import { GlobalmenuComponent } from './modules/layout/globalmenu/globalmenu.component';
// import{Globalfunction} from './Classes/globalfunction';
// import { ListuserComponent } from './listuser/listuser.component';
// import { ActorComponent } from './actor/actor.component';
// import { EmployeeComponent } from './employee/employee.component';
// import { ErrorComponent } from './error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AccountComponent,
    RegisterpaymentComponent,
    FooterComponent,
    FinishpaymentComponent,
    NonepaymentComponent,
    GlobalmenuComponent,
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
    FormsModule,
    NgbModalModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_ystNiSIyKYOF0Nm6pgLjXXEW00Ym2IQmtV') ,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot()
    ],
  exports:[RouterModule],
  providers: [AuthGuard,TaskService, StateloginService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import {RouterModule} from '@angular/router';
import { appRoutes } from './routes';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './Login/login/login.component';
import { AccountComponent } from './account/account.component';
import { RegisterpaymentComponent } from './registerpayment/registerpayment.component';
import {NgxStripeModule } from 'ngx-stripe';
import { ModalComponent } from './modal/modal.component';
import { FooterComponent } from './footer/footer.component';
import { FinishpaymentComponent } from './finishpayment/finishpayment.component';
import { NonepaymentComponent } from './nonepayment/nonepayment.component';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    SignUpComponent,
    UserComponent,
    LoginComponent,
    AccountComponent,
    RegisterpaymentComponent,
    ModalComponent,
    FooterComponent,
    FinishpaymentComponent,
    NonepaymentComponent,
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
  entryComponents: [ModalComponent],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

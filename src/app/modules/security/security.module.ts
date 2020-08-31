import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { UpdatepasswordComponent } from './login/updatepassword/updatepassword.component';
import { ResetpasswordComponent } from './login/resetpassword/resetpassword.component';


@NgModule({
  declarations: [UpdatepasswordComponent, ResetpasswordComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }

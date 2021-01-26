import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { TaskService } from '../services/task.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginToken } from '../Classes/login-token';
import { PerfilService } from '../services/perfil.service';
import decode from 'jwt-decode';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalFunctionService } from '../Function/global-function.service';

declare var $: any;
const urljs = '../../assets/js/login.js';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  user = new LoginToken();
  
  accountForm: FormGroup;
  private isEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  constructor(
    private userService: TaskService,
    private serperfil: PerfilService,
    private router: Router, private fb:FormBuilder,
    private gbfuncservice: GlobalFunctionService
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    // loginLabel();
    localStorage.removeItem('userToken');
    if (localStorage.getItem('mail') !== null) {
      this.user.UserName = localStorage.getItem('mail');
      $('#email').attr('disabled', true);
    } else {
      $('#email').attr('disabled', false);
    }
    this.gbfuncservice.loadScript(urljs);
  }

  private initForm():void{
    this.accountForm = this.fb.group({
      PasswordHash: ['',[Validators.required]],
      UserName: ['',[Validators.required,Validators.pattern(this.isEmail)]]
    });
  }
  isValidField(field: string): string{
    const validatedField = this.accountForm.get(field);
    return(!validatedField.valid && validatedField.touched) ?
      'is-invalid': validatedField.touched ? 'is-valid':'';
  }
  OnSubmit() {
    if(this.accountForm.valid) {
      this.userService.Authentication(this.accountForm.value).subscribe(
        (success) => {
          if (success) {
            let decodotken = decode(this.userService.getJwtToken());
            let role = decodotken.UserRole.toLowerCase();
            if (this.userService.loggedIn() && role === 'user'.toLowerCase()) {
              let filter = '?AccountId=' + decodotken.Idaccount;
              this.serperfil.GetAll(filter).subscribe((data: any) => {
                if (data.ResourceList.length > 1) {
                  this.router.navigate(['/perfil']);
                } else {
                  this.router.navigate(['/home']);
                }
              });
            } else if (
              this.userService.loggedIn() &&
              role === 'admin'.toLowerCase()
            ) {
              this.router.navigate(['/admin']);
            } else if (
              this.userService.loggedIn() &&
              role === 'provider'.toLowerCase()
            ) {
              this.router.navigate(['/provider']);
            } else if (
              this.userService.loggedIn() &&
              role === 'employee'.toLowerCase()
            ) {
              this.router.navigate(['/employee']);
            } else {
              this.router.navigate(['/error']);
            }
          } else {
            $('.error_password').val('Connection problem');
          }
        },
        (err: HttpErrorResponse) => {
          debugger;
          if (err.error == null) {
            $('.error_password').html('Connection problem');
          } else if (
            err.error.ErrorDescription === 'You need tu complete payment'
          ) {
            localStorage.setItem('IdUser', err.error.ErrorCode);
            localStorage.setItem('mail', this.accountForm.value.userName);
            this.router.navigate(['/finishpayment']);
          } else if (
            err.error.ErrorDescription === 'Payment is missing for this month'
          ) {
            localStorage.setItem('IdUser', err.error.ErrorCode);
            localStorage.setItem('mail', this.accountForm.value.userName);
            this.router.navigate(['/nonepayment']);
          } else {
            $('.error_password').html(err.error.ErrorDescription);
          }
        }
      );
    }
  }
}
function loginLabel() {
  // const btnLoginn = (document.getElementById('btn-login').disabled = true);
  document.querySelector('#email').addEventListener('blur', function (e) {
    if (this.value.length > 0) {
      // console.log(this.nextElementSibling, this.value.length, this);
      this.nextElementSibling.classList.add('valid');
      // document.querySelector('.label-email').classList.add('valid');
    } else {
      // console.log(this.nextElementSibling, this.value.length, this);
      this.nextElementSibling.classList.remove('valid');
      // this.style.border = '2px solid red';
    }
  });
}

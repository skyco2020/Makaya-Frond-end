import { Component, OnInit } from '@angular/core';
import { SkycoService } from '../services/skyco.service';
import { TaskService } from '../services/task.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SkycoUser } from '../Classes/skyco-user';

declare var $: any;
const urljs = '../../assets/js/user.js';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  isLoginError = false;
  user: SkycoUser;
  countryid = 0;
  provinceid = 0;
  cityid = 0;
  constructor(
    private userService: SkycoService,
    private taskser: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    localStorage.removeItem('mail');
    this.taskser.doLogoutUser();
    this.loadScript();
    this.GetMovies();
    // this.Probar();
  }
  GetMovies() {
    this.userService.GetMovie().subscribe((data: any) => {
      this.Movies = data;
    });
  }
  loadScript() {
    const node = document.createElement('script');
    node.src = urljs;
    node.type = 'text/javascript';
    node.async = true;
    // tslint:disable-next-line: deprecation
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }
  OnSubmit(userName) {
    if (userName === '') {
      $('.error_username').html('Enter your email');
      this.isLoginError = true;
    } else if (this.isValid(userName) === false) {
      $('.error_username').html('Mail invalid');
      this.isLoginError = true;
    } else {
      this.user = new SkycoUser();
      this.user.CreatedBy = userName;
      this.user.EmailAddress = userName;
      this.user.CreatedBy = 'Automatic';
      this.user.CreatedAt = new Date();
      this.user.Voided = 1;

      this.userService.Post(this.user).subscribe(
        (data: any) => {
          if (data.toString().length !== 0) {
            localStorage.setItem('IdUser', data.UserId);
            localStorage.setItem('mail', userName);
            this.router.navigate(['/registerpayment']);
          }
        },
        (err: HttpErrorResponse) => {
          if (err.error.ErrorDescription === 'Welcome to Sky co') {
            localStorage.setItem('IdUser', err.error.ErrorCode);
            localStorage.setItem('mail', userName);
            localStorage.setItem('back', 'Welcome to Sky co');
            this.router.navigate(['/registerpayment']);
          } else if (err.error.ErrorDescription === 'Welcome Back at Sky co') {
            localStorage.setItem('back', 'Welcome Back at Sky co');
            localStorage.setItem('IdUser', err.error.ErrorCode);
            localStorage.setItem('mail', userName);
            this.router.navigate(['/account']);
          } else if (
            err.error.ErrorDescription ===
            'There is already an account with this email'
          ) {
            localStorage.setItem('IdUser', err.error.ErrorCode);
            localStorage.setItem('mail', userName);
            this.router.navigate(['/account']);
          }
        }
      );
    }
  }

  HideError() {
    $('.error_username').html('');
    this.isLoginError = false;
  }
  isValid(email) {
    const phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    const digits = email.replace(/\D/g, '');
    const phone = phoneRe.test(digits);

    const cad = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = cad.test(email);
    // if (cad.test(email) === false){
    if (!result) {
      $('.input_e_mail').val('');
      return false;
    } else {
      return true;
    }
    // }
    // else{
    //   return true;
    // }
  }
}

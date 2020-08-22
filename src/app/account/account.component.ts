import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {TaskService} from '../services/task.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {LoginToken} from '../Classes/login-token';

declare var $: any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  isLoginError = false;
  user = new LoginToken();
  constructor(private userService: TaskService, private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('userToken');
    if (localStorage.getItem('mail') !== null){
      this.user.UserName = localStorage.getItem('mail');
      $('#email').attr('disabled', true);
    }
    else{
      $('#email').attr('disabled', false);
    }

  }
  OnSubmit(userName, password){
    if(userName === '')
    {
      $('.error_mail').html('Enter your email');
      return false;
    }
    else if(password === '')
    {
      $('.error_password').html('Enter your password');
      return false;
    }
    else{
      this.user = new LoginToken();
      this.user.UserName = userName;
      this.user.PasswordHash = password;
      this.userService.Authentication(this.user).subscribe((data: any) => {
       localStorage.setItem('userToken', data);
       this.router.navigate(['/home']);
     },
     (err: HttpErrorResponse) => {
       if (err.error.ErrorDescription === 'You need tu complete payment'){
           localStorage.setItem('IdUser', err.error.ErrorCode);
           localStorage.setItem('mail', userName);
           this.router.navigate(['/finishpayment']);
       }
       else if (err.error.ErrorDescription === 'Payment is missing for this month'){
            localStorage.setItem('IdUser', err.error.ErrorCode);
            localStorage.setItem('mail', userName);
            this.router.navigate(['/nonepayment']);
       }
       else{
         $('.error_password').html(err.error.ErrorDescription);
         this.isLoginError = true;
      }
     });
    }
 }
  HideMessage(msg){
    $('.' + msg).html('');
  }
}
